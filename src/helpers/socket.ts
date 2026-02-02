import { RedisUpdatePayload, RedisUpdateType, SocketCallbackResponse } from "akeyless-types-commons";
import { io, Socket } from "socket.io-client";
import { isLocal, mode } from "./global";
import { OnSnapshotCallback, OnSnapshotConfig } from "src/types";

const SESSION_STORAGE_KEY = "sessionId";

interface GetDataPayload<T = any> {
    key: string;
    collection_name: string;
    callback: (value: T) => void;
    defaultValue: T;
}
class SocketService {
    private static instance: SocketService;
    private socket: Socket | null = null;
    private connectCallbacks: Array<() => void> = [];
    private disconnectCallbacks: Array<() => void> = [];
    private authToken: string | null = null;
    private isDisconnected = true;

    private handleDisconnect = (source: string, reason: Socket.DisconnectReason | string): void => {
        if (this.isDisconnected) {
            return;
        }
        this.isDisconnected = true;
        const transport = this.socket?.io.engine.transport.name;
        console.log(`Socket disconnected (${source}) [transport=${transport}]:`, reason);
        this.disconnectCallbacks.forEach((cb) => cb());
    };

    /// Initialize the socket connection
    private initSocket(): void {
        if (!this.socket) {
            const socketUrl = isLocal ? "http://localhost:9009" : mode === "qa" ? "https://nx-api.xyz" : "https://nx-api.info";

            this.socket = io(socketUrl, {
                path: "/api/data-socket/connect",
                auth: (cb: any) => {
                    const sessionId = localStorage.getItem(SESSION_STORAGE_KEY) || undefined;
                    const token = this.authToken;
                    const authPayload: Record<string, string> = {};
                    if (token) authPayload.token = token;
                    if (sessionId) authPayload.sessionId = sessionId;
                    cb(authPayload);
                },
                transports: ["websocket"],
                reconnection: true,
                reconnectionAttempts: 30,
                reconnectionDelay: 2 * 1000,
                reconnectionDelayMax: 10 * 1000,
                timeout: 20 * 1000,
            });

            this.socket.on("connect", () => {
                const transport = this.socket?.io.engine.transport.name;
                console.log(`🟢 Socket connected: ${this.socket?.id} (recovered - ${this.socket?.recovered}) (transport - ${transport})`);
                this.isDisconnected = false;
                this.connectCallbacks.forEach((cb) => cb());
            });

            this.socket.on("disconnect", (reason: Socket.DisconnectReason) => {
                this.handleDisconnect("disconnect", reason);
            });

            this.socket.io.on("close", (reason: any) => {
                this.handleDisconnect("manager_close", reason);
            });

            this.socket.io.engine.on("close", (reason: any) => {
                this.handleDisconnect("engine_close", reason);
            });

            this.socket.on("session", ({ session_id }) => {
                if (session_id) {
                    localStorage.setItem(SESSION_STORAGE_KEY, session_id);
                }
            });
            this.socket.on("connect_error", (error: Error) => {
                console.error("Socket connection error:", error);
            });

            this.socket.io.on("reconnect_attempt", (attempt: number) => {
                console.log("Socket reconnect attempt:", attempt);
            });

            this.socket.io.on("reconnect_error", (error: Error) => {
                console.error("Socket reconnect error:", error);
            });

            this.socket.io.on("reconnect", (attempt: number) => {
                console.log("Socket reconnected after attempts:", attempt);
                this.isDisconnected = false;
            });
        }
    }

    private constructor() {}

    public static getInstance(): SocketService {
        if (!SocketService.instance) {
            SocketService.instance = new SocketService();
        }
        return SocketService.instance;
    }

    /// get socket instance
    private getSocketInstance(): Socket {
        if (!this.socket) {
            this.initSocket();
        }
        if (!this.socket) {
            throw new Error("Socket not initialized");
        }
        if (!this.socket.connected) {
            this.socket.connect();
        }
        return this.socket;
    }

    /// connection management methods

    public startSession(token: string): void {
        this.setAuthToken(token);
        this.initSocket();
    }

    public onConnect(callback: () => void): () => void {
        if (!this.connectCallbacks.includes(callback)) {
            this.connectCallbacks.push(callback);
        }
        if (this.socket?.connected) {
            callback();
        }
        return () => this.offConnect(callback);
    }

    public offConnect(callback: () => void): void {
        this.connectCallbacks = this.connectCallbacks.filter((cb) => cb !== callback);
    }

    public onDisconnect(callback: () => void): () => void {
        if (!this.disconnectCallbacks.includes(callback)) {
            this.disconnectCallbacks.push(callback);
        }
        if (this.socket && !this.socket.connected) {
            callback();
        }
        return () => this.offDisconnect(callback);
    }

    public offDisconnect(callback: () => void): void {
        this.disconnectCallbacks = this.disconnectCallbacks.filter((cb) => cb !== callback);
    }

    public isConnected(): boolean {
        return this.socket?.connected || false;
    }

    public setAuthToken(token: string) {
        this.authToken = token;
        if (this.socket) {
            this.socket.connect();
        }
    }

    public disconnectSocket(): void {
        if (this.socket) {
            this.socket.disconnect();
            this.socket.io.engine.close();
        }
    }

    /// subscribe to collections
    public subscribeToCollections(config: OnSnapshotConfig[]): () => void {
        if (config.length === 0) {
            return () => {};
        }
        const s = this.getSocketInstance();
        const collectionsNames = config.map((c) => c.collectionName);

        const eventHandlers: Array<{ eventName: string; handler: OnSnapshotCallback }> = [];

        config.forEach((configuration) => {
            const { collectionName, onAdd, onFirstTime, onModify, onRemove, extraParsers } = configuration;
            // Before attaching, make sure the specific handler is NOT already registered.
            const attach = (eventName: string, handler?: OnSnapshotCallback) => {
                if (!handler) return;
                this.socket!.off(eventName, handler);
                this.socket!.on(eventName, handler);
                eventHandlers.push({ eventName, handler });
            };

            attach(`initial:${collectionName}`, onFirstTime);
            attach(`add:${collectionName}`, onAdd);
            attach(`update:${collectionName}`, onModify);
            attach(`delete:${collectionName}`, onRemove);

            extraParsers?.forEach((parsers) => {
                const { onAdd: extraOnAdd, onFirstTime: extraOnFirstTime, onModify: extraOnModify, onRemove: extraOnRemove } = parsers;
                attach(`initial:${collectionName}`, extraOnFirstTime);
                attach(`add:${collectionName}`, extraOnAdd);
                attach(`update:${collectionName}`, extraOnModify);
                attach(`delete:${collectionName}`, extraOnRemove);
            });
        });

        s.emit("subscribe_collections", collectionsNames, (callback: SocketCallbackResponse) => {
            if (callback.success) {
                console.log(`Successfully subscribed to: ${collectionsNames.join(", ")}`);
            } else {
                console.error(`Failed to subscribe to ${config.join(", ")}: ${callback.message}`);
            }
        });

        return () => {
            console.log(`Cleaning up subscriptions for: ${collectionsNames.join(", ")}`);
            s.emit("unsubscribe_collections", collectionsNames);
            eventHandlers.forEach((eh) => {
                s.off(eh.eventName, eh.handler);
            });
        };
    }

    /// set data
    public setData<UpdateType extends RedisUpdateType, DataType = any>(
        payload: RedisUpdatePayload<UpdateType, DataType>
    ): Promise<SocketCallbackResponse> {
        const s = this.getSocketInstance();

        return new Promise((resolve, reject) => {
            s.emit("set_data", payload, (callback: SocketCallbackResponse) => {
                if (callback.success) {
                    console.log("Data saved successfully:", payload);
                    console.log("ack", callback);
                    resolve(callback);
                } else {
                    reject(new Error(callback.message || "Save operation failed"));
                }
            });
        });
    }

    /// get data
    public getCollectionData<T>(payload: Omit<GetDataPayload<T>, "key">): void {
        const s = this.getSocketInstance();
        s.emit("get_data", { collection_name: payload.collection_name }, (socketCallback: SocketCallbackResponse) => {
            if (socketCallback.success && socketCallback.data) {
                payload.callback(socketCallback.data as T);
            } else {
                payload.callback(payload.defaultValue);
            }
        });
    }

    public getDocumentData<T>(payload: GetDataPayload<T>): void {
        const s = this.getSocketInstance();
        s.emit("get_data", { collection_name: payload.collection_name, key: payload.key }, (socketCallback: SocketCallbackResponse) => {
            if (socketCallback.success && socketCallback.data) {
                payload.callback(socketCallback.data as T);
            } else {
                payload.callback(payload.defaultValue);
            }
        });
    }

    /// delete data
    public deleteData(payload: { key: string; collection_name: string }): Promise<SocketCallbackResponse> {
        const s = this.getSocketInstance();
        return new Promise((resolve, reject) => {
            s.emit("delete_data", payload, (callback: SocketCallbackResponse) => {
                if (callback.success) {
                    console.log("Data deleted successfully:", payload);
                    console.log("delete ack", callback);
                    resolve(callback);
                } else {
                    reject(new Error(callback.message || "Delete operation failed"));
                }
            });
        });
    }

    // public clearAllRedisData(): Promise<SocketCallbackResponse> {
    //     const s = this.getSocketInstance();
    //     return new Promise((resolve, reject) => {
    //         s.emit("clear_all_redis_data", (ack: SocketCallbackResponse) => {
    //             if (ack.success) {
    //                 resolve(ack);
    //             } else {
    //                 reject(new Error(ack.message || "Clear all Redis data operation failed"));
    //             }
    //         });
    //     });
    // }
}

export const socketServiceInstance = SocketService.getInstance();

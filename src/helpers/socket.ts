import { RedisUpdatePayload, RedisUpdateType, SocketCallbackResponse } from "akeyless-types-commons";
import { io, Socket } from "socket.io-client";
import { OnSnapshotCallback, OnSnapshotConfig } from "src/types";

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

    /// Initialize the socket connection
    private initSocket(): void {
        if (!this.socket) {
            const SOCKET_SERVER_URL = "http://localhost:9009";
            const SOCKET_PATH = "/api/data-socket/connect";
            this.socket = io(SOCKET_SERVER_URL, {
                path: SOCKET_PATH,
                transports: ["websocket"],
            });

            this.socket.on("connect", () => {
                console.log("Socket connected:", this.socket?.id);
                this.connectCallbacks.forEach((cb) => cb());
            });

            this.socket.on("disconnect", (reason: Socket.DisconnectReason) => {
                console.log("Socket disconnected:", reason);
                this.disconnectCallbacks.forEach((cb) => cb());
            });

            this.socket.on("connect_error", (error: Error) => {
                console.error("Socket connection error:", error);
            });
        }
    }

    private constructor() {
        this.initSocket();
    }

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

    /// subscribe to collections
    public subscribeToCollections(config: OnSnapshotConfig[]): () => void {
        const s = this.getSocketInstance();
        const collectionsNames = config.map((c) => c.collectionName);

        const eventHandlers: Array<{ eventName: string; handler: OnSnapshotCallback }> = [];

        config.forEach((configuration) => {
            const { collectionName, onAdd, onFirstTime, onModify, onRemove, extraParsers, conditions, orderBy } = configuration;
            s.on(`initial:${collectionName}`, onFirstTime!);
            eventHandlers.push({ eventName: `initial:${collectionName}`, handler: onFirstTime! });

            s.on(`add:${collectionName}`, onAdd!);
            eventHandlers.push({ eventName: `add:${collectionName}`, handler: onAdd! });

            s.on(`update:${collectionName}`, onModify!);
            eventHandlers.push({ eventName: `update:${collectionName}`, handler: onModify! });

            s.on(`delete:${collectionName}`, onRemove!);
            eventHandlers.push({ eventName: `delete:${collectionName}`, handler: onRemove! });

            extraParsers?.forEach((parsers) => {
                const { onAdd: extraOnAdd, onFirstTime: extraOnFirstTime, onModify: extraOnModify, onRemove: extraOnRemove } = parsers;
                s.on(`initial:${collectionName}`, extraOnFirstTime!);
                eventHandlers.push({ eventName: `initial:${collectionName}`, handler: extraOnFirstTime! });

                s.on(`add:${collectionName}`, extraOnAdd!);
                eventHandlers.push({ eventName: `add:${collectionName}`, handler: extraOnAdd! });

                s.on(`update:${collectionName}`, extraOnModify!);
                eventHandlers.push({ eventName: `update:${collectionName}`, handler: extraOnModify! });

                s.on(`delete:${collectionName}`, extraOnRemove!);
                eventHandlers.push({ eventName: `delete:${collectionName}`, handler: extraOnRemove! });
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

    public clearAllRedisData(): Promise<SocketCallbackResponse> {
        const s = this.getSocketInstance();
        return new Promise((resolve, reject) => {
            s.emit("clear_all_redis_data", (ack: SocketCallbackResponse) => {
                if (ack.success) {
                    resolve(ack);
                } else {
                    reject(new Error(ack.message || "Clear all Redis data operation failed"));
                }
            });
        });
    }

    /// connection management methods
    public onConnect(callback: () => void): void {
        this.connectCallbacks.push(callback);
        if (this.socket?.connected) {
            callback();
        }
    }

    public offConnect(callback: () => void): void {
        this.connectCallbacks = this.connectCallbacks.filter((cb) => cb !== callback);
    }

    public onDisconnect(callback: () => void): void {
        this.disconnectCallbacks.push(callback);
        if (this.socket && !this.socket.connected) {
            callback();
        }
    }

    public offDisconnect(callback: () => void): void {
        this.disconnectCallbacks = this.disconnectCallbacks.filter((cb) => cb !== callback);
    }

    public isConnected(): boolean {
        return this.socket?.connected || false;
    }
}

// Export a singleton instance of the service
export const socketServiceInstance = SocketService.getInstance();

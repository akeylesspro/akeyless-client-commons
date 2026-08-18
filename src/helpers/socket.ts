import { RedisUpdatePayload, RedisUpdateType, SocketCallbackResponse, SubscribeCollectionsOptions } from "akeyless-types-commons";
import { io, Socket } from "socket.io-client";
import { checkConditions, isLocal, mode } from "./global";
import { OnSnapshotConfig, OnSnapshotParsers, WhereCondition } from "src/types";

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
    /// the data-socket keeps one subscription per collection per socket, so a second condition set
    /// for a collection never reaches it and would silently receive the first one's documents
    private activeConditions = new Map<string, { signature: string; conditions: WhereCondition[]; count: number }>();

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

    private registerConditions(collectionName: string, conditions: WhereCondition[] = []): void {
        const signature = JSON.stringify(conditions);
        const active = this.activeConditions.get(collectionName);
        if (!active) {
            this.activeConditions.set(collectionName, { signature, conditions, count: 1 });
            return;
        }
        active.count++;
        if (active.signature !== signature) {
            console.error(
                `[socket] "${collectionName}" is already subscribed with different conditions, and a collection supports one condition set at a time. ` +
                    `The active set stays in effect, so this subscription receives its documents instead of its own. ` +
                    `active: ${active.signature} requested: ${signature}`
            );
        }
    }

    private releaseConditions(collectionName: string): void {
        const active = this.activeConditions.get(collectionName);
        if (!active) {
            return;
        }
        active.count--;
        if (active.count <= 0) {
            this.activeConditions.delete(collectionName);
        }
    }

    public disconnectSocket(): void {
        if (this.socket) {
            this.socket.disconnect();
            this.socket.io.engine.close();
        }
    }

    /// subscribe to collections
    /// conditions are derived from OnSnapshotConfig.conditions, never passed in, so a caller cannot
    /// set them in a second place and have them silently overwritten
    public subscribeToCollections(config: OnSnapshotConfig[], options?: Omit<SubscribeCollectionsOptions, "conditions">): () => void {
        if (config.length === 0) {
            return () => {};
        }
        const s = this.getSocketInstance();
        const collectionsNames = config.map((c) => c.collectionName);

        const eventHandlers: Array<{ eventName: string; handler: (payload: any) => void }> = [];

        config.forEach((configuration) => {
            const { collectionName, conditions } = configuration;
            const parsers: OnSnapshotParsers[] = [configuration, ...(configuration.extraParsers || [])];
            const matchedIds = new Set<string>();

            const attach = (eventName: string, handler: (payload: any) => void) => {
                this.socket!.on(eventName, handler);
                eventHandlers.push({ eventName, handler });
            };
            const toDocs = (payload: any): any[] => (Array.isArray(payload) ? payload : payload ? [payload] : []);
            const run = (op: keyof OnSnapshotParsers, docs: any[]) => parsers.forEach((parser) => parser[op]?.(docs, configuration));
            const runIfAny = (op: keyof OnSnapshotParsers, docs: any[]) => {
                if (docs.length) {
                    run(op, docs);
                }
            };

            attach(`initial:${collectionName}`, (payload) => {
                const docs = toDocs(payload).filter((doc) => checkConditions(doc, conditions));
                matchedIds.clear();
                docs.forEach((doc) => matchedIds.add(doc.id));
                run("onFirstTime", docs);
            });

            /// a doc that starts matching the conditions arrives as onAdd, one that stops matching as
            /// onRemove, exactly like a firestore query snapshot narrows its result set
            const handleUpsert = (payload: any, defaultOp: "onAdd" | "onModify") => {
                const added: any[] = [];
                const modified: any[] = [];
                const removed: any[] = [];
                toDocs(payload).forEach((doc) => {
                    if (!conditions?.length) {
                        (defaultOp === "onAdd" ? added : modified).push(doc);
                        return;
                    }
                    const wasMatching = matchedIds.has(doc.id);
                    if (checkConditions(doc, conditions)) {
                        matchedIds.add(doc.id);
                        (wasMatching ? modified : added).push(doc);
                    } else if (wasMatching) {
                        matchedIds.delete(doc.id);
                        removed.push(doc);
                    }
                });
                runIfAny("onAdd", added);
                runIfAny("onModify", modified);
                runIfAny("onRemove", removed);
            };

            attach(`add:${collectionName}`, (payload) => handleUpsert(payload, "onAdd"));
            attach(`update:${collectionName}`, (payload) => handleUpsert(payload, "onModify"));
            attach(`delete:${collectionName}`, (payload) => {
                const docs = toDocs(payload).filter((doc) => !conditions?.length || matchedIds.delete(doc.id));
                runIfAny("onRemove", docs);
            });
        });

        const acknowledge = (callback: SocketCallbackResponse) => {
            if (callback.success) {
                console.log(`Successfully subscribed to: ${collectionsNames.join(", ")}`);
            } else {
                console.error(`Failed to subscribe to ${config.join(", ")}: ${callback.message}`);
            }
        };
        /// options go out on their own event, and subscribe_collections keeps its original
        /// two argument shape. a data-socket instance that predates the options ignores the
        /// extra event instead of mistaking it for the acknowledgement callback
        config.forEach((c) => this.registerConditions(c.collectionName, c.conditions));
        /// what goes out is the set already in effect for the collection, not the last one asked for
        const conditionsByCollection = config.reduce<Record<string, WhereCondition[]>>((acc, c) => {
            const active = this.activeConditions.get(c.collectionName);
            if (active?.conditions.length) {
                acc[c.collectionName] = active.conditions;
            }
            return acc;
        }, {});
        /// a data-socket that understands conditions filters server side, one that does not sends
        /// everything and the local gate below still produces the same events
        const subscribeOptions = Object.keys(conditionsByCollection).length ? { ...options, conditions: conditionsByCollection } : options;
        if (subscribeOptions) {
            s.emit("subscribe_options", subscribeOptions);
        }
        s.emit("subscribe_collections", collectionsNames, acknowledge);

        return () => {
            console.log(`Cleaning up subscriptions for: ${collectionsNames.join(", ")}`);
            collectionsNames.forEach((name) => this.releaseConditions(name));
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

}

export const socketServiceInstance = SocketService.getInstance();

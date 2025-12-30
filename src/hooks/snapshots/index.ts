import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { auth, get_document_by_id, snapshot, snapshotDocument, socketServiceInstance } from "src/helpers";
import { OnSnapshotConfig, OnSnapshotConfigDocument } from "src/types";
import { useDeepCompareEffect } from "../react";
import { UseWebWorkerOptions, useWebWorker } from "../WebWorker";
import { SnapshotOp, wrapConfigsWithWorker, wrapDocumentConfigsWithWorker } from "./snapshotWorker";

interface UseDbSnapshotsSettings {
    cleanupForConfigChange?: boolean;
    disableLogs?: boolean;
    worker?: UseWebWorkerOptions;
    socket?: {
        getSocket?: (socket: typeof socketServiceInstance) => void;
    };
}

export const useDbSnapshots = (configs: OnSnapshotConfig[], label?: string, settings?: UseDbSnapshotsSettings) => {
    const snapshotsFirstTime = useRef<string[]>([]);
    const unsubscribeFunctions = useRef<(() => void)[]>([]);
    const lastDbCollectionsRef = useRef<string[]>([]);
    const workerProcessorDb = useCallback((payload: { op: SnapshotOp; docs: any[] }) => {
        return { docs: payload.docs };
    }, []);
    const runProcessor = useWebWorker<{ op: SnapshotOp; docs: any[] }, { docs: any[] }>(workerProcessorDb, settings?.worker);

    const wrapConfigsForWorker = (cfgs: OnSnapshotConfig[]): OnSnapshotConfig[] => wrapConfigsWithWorker(cfgs, (payload) => runProcessor(payload));

    useDeepCompareEffect(() => {
        const start = performance.now();
        if (!settings?.disableLogs && configs.length > 0) {
            console.log(`==> ${label || "DB snapshots"} started from db... `);
        }
        const wrappedConfigs = wrapConfigsForWorker(configs);
        lastDbCollectionsRef.current = configs.map((c) => c.collectionName);
        const snapshotResults = wrappedConfigs.map((config) => snapshot(config, snapshotsFirstTime.current, settings));
        unsubscribeFunctions.current = snapshotResults.map((result) => result.unsubscribe);

        Promise.all(snapshotResults.map((result) => result.promise)).then(() => {
            if (!settings?.disableLogs && configs.length > 0) {
                console.log(`==> ${label || "DB snapshots"} ended from db. It took ${(performance.now() - start).toFixed(2)} ms`);
            }
        });

        if (settings?.cleanupForConfigChange) {
            return () => {
                unsubscribeFunctions.current.forEach((unsubscribe: any) => {
                    if (unsubscribe) {
                        unsubscribe();
                    }
                });
                if (settings?.worker?.debug && lastDbCollectionsRef.current.length) {
                    console.log(
                        `==> ${label || "DB snapshots"} cleanup: cleaned previous subscriptions for [${lastDbCollectionsRef.current.join(", ")}]`
                    );
                }
                if (!settings?.disableLogs && configs.length > 0) {
                    console.log(`==> ${label || "DB snapshots"} unsubscribed from db`);
                }
            };
        }
    }, [configs, label, settings]);

    useEffect(() => {
        return () => {
            unsubscribeFunctions.current.forEach((unsubscribe: any) => {
                if (unsubscribe) {
                    unsubscribe();
                }
            });
            if (settings?.worker?.debug && lastDbCollectionsRef.current.length) {
                console.log(
                    `==> ${label || "DB snapshots"} cleanup: cleaned previous subscriptions for [${lastDbCollectionsRef.current.join(", ")}]`
                );
            }
            if (!settings?.disableLogs) {
                console.log(`==> ${label || "DB snapshots"} unsubscribed`);
            }
        };
    }, []);
};

export const useDbDocumentSnapshots = (configs: OnSnapshotConfigDocument[], label?: string, settings?: UseDbSnapshotsSettings) => {
    const unsubscribeFunctions = useRef<(() => void)[]>([]);
    const lastDbDocsRef = useRef<string[]>([]);
    const perDocFirstTimeRef = useRef<Record<string, string[]>>({});

    const workerProcessorDb = useCallback((payload: { op: SnapshotOp; docs: any[] }) => {
        return { docs: payload.docs };
    }, []);
    const runProcessor = useWebWorker<{ op: SnapshotOp; docs: any[] }, { docs: any[] }>(workerProcessorDb, settings?.worker);

    const wrapConfigsForWorker = (cfgs: OnSnapshotConfigDocument[]): OnSnapshotConfigDocument[] =>
        wrapDocumentConfigsWithWorker(cfgs, (payload) => runProcessor(payload));

    const getDocKey = (config: OnSnapshotConfigDocument) => {
        const conditionsKey = config.conditions?.length ? JSON.stringify(config.conditions) : "";
        return `${config.collectionName}/${config.documentId}${conditionsKey ? `:${conditionsKey}` : ""}`;
    };

    const getFirstTimeBucket = (config: OnSnapshotConfigDocument) => {
        const key = getDocKey(config);
        if (!perDocFirstTimeRef.current[key]) {
            perDocFirstTimeRef.current[key] = [];
        }
        return perDocFirstTimeRef.current[key];
    };

    useDeepCompareEffect(() => {
        const start = performance.now();
        if (!settings?.disableLogs && configs.length > 0) {
            console.log(`==> ${label || "DB document snapshots"} started from db... `);
        }

        const wrappedConfigs = wrapConfigsForWorker(configs);
        lastDbDocsRef.current = configs.map((c) => `${c.collectionName}/${c.documentId}`);

        const snapshotResults = wrappedConfigs.map((config) => snapshotDocument(config, getFirstTimeBucket(config)));
        unsubscribeFunctions.current = snapshotResults.map((result) => result.unsubscribe);

        Promise.all(snapshotResults.map((result) => result.promise)).then(() => {
            if (!settings?.disableLogs && configs.length > 0) {
                console.log(
                    `==> ${label || "DB document snapshots"} ended from db. It took ${(performance.now() - start).toFixed(2)} ms`
                );
            }
        });

        if (settings?.cleanupForConfigChange) {
            return () => {
                unsubscribeFunctions.current.forEach((unsubscribe: any) => {
                    if (unsubscribe) {
                        unsubscribe();
                    }
                });
                if (settings?.worker?.debug && lastDbDocsRef.current.length) {
                    console.log(
                        `==> ${label || "DB document snapshots"} cleanup: cleaned previous subscriptions for [${lastDbDocsRef.current.join(
                            ", "
                        )}]`
                    );
                }
                if (!settings?.disableLogs && configs.length > 0) {
                    console.log(`==> ${label || "DB document snapshots"} unsubscribed from db`);
                }
            };
        }
    }, [configs, label, settings]);

    useEffect(() => {
        return () => {
            unsubscribeFunctions.current.forEach((unsubscribe: any) => {
                if (unsubscribe) {
                    unsubscribe();
                }
            });
            if (settings?.worker?.debug && lastDbDocsRef.current.length) {
                console.log(
                    `==> ${label || "DB document snapshots"} cleanup: cleaned previous subscriptions for [${lastDbDocsRef.current.join(", ")}]`
                );
            }
            if (!settings?.disableLogs) {
                console.log(`==> ${label || "DB document snapshots"} unsubscribed`);
            }
        };
    }, []);
};

export const useSmartSnapshots = (configs: OnSnapshotConfig[], label?: string, settings?: UseDbSnapshotsSettings) => {
    const [cacheCollectionsConfig, setCacheCollectionsConfig] = useState<Record<string, any> | null>(null);
    useEffect(() => {
        get_document_by_id("nx-settings", "cache_collections_config").then((res) => setCacheCollectionsConfig(res));
        return () => setCacheCollectionsConfig(null);
    }, []);

    const groupedConfig = useMemo(() => {
        if (!cacheCollectionsConfig) {
            return { configForDb: [], configForCache: [] };
        }
        const configForDb: OnSnapshotConfig[] = [];
        const configForCache: OnSnapshotConfig[] = [];
        configs.forEach((cfg) => {
            const { collectionName, subscribeTo = "cache" } = cfg;
            if (subscribeTo === "cache" && cacheCollectionsConfig[collectionName]) {
                configForCache.push(cfg);
            } else {
                configForDb.push(cfg);
            }
        });
        if (!settings?.disableLogs) {
            console.log(`configForDb`, configForDb);
            console.log(`configForCache`, configForCache);
        }
        return { configForDb, configForCache };
    }, [configs, cacheCollectionsConfig]);

    useDbSnapshots(groupedConfig.configForDb, label, settings);
    const { socketConnected } = useSocketSnapshots(groupedConfig.configForCache, label, settings);
    return { groupedConfig, socketConnected };
};

export const useSocketSnapshots = (configs: OnSnapshotConfig[], label?: string, settings?: UseDbSnapshotsSettings) => {
    const [socketConnected, setSocketConnected] = useState<boolean>(socketServiceInstance.isConnected());
    const cleanupSubscriptionsRef = useRef<(() => void)[]>([]);
    const socketStarted = useRef(false);
    const activeSubscriptionKeyRef = useRef<string | null>(null);
    const activeCollectionsRef = useRef<Set<string>>(new Set());
    const offConnectRef = useRef<(() => void) | null>(null);
    const offDisconnectRef = useRef<(() => void) | null>(null);
    const workerProcessorSocket = useCallback((payload: { op: SnapshotOp; docs: any[] }) => {
        return { docs: payload.docs };
    }, []);
    const runProcessor = useWebWorker<{ op: SnapshotOp; docs: any[] }, { docs: any[] }>(workerProcessorSocket, settings?.worker);

    const wrapConfigsForWorker = (cfgs: OnSnapshotConfig[]): OnSnapshotConfig[] => wrapConfigsWithWorker(cfgs, (payload) => runProcessor(payload));
    useDeepCompareEffect(() => {
        if (!auth.currentUser) {
            return;
        }

        const subscribe = () => {
            const desiredNames = new Set(configs.map((c) => c.collectionName));
            const key = JSON.stringify(Array.from(desiredNames).sort());
            if (settings?.cleanupForConfigChange) {
                if (activeSubscriptionKeyRef.current === key) return;
                if (cleanupSubscriptionsRef.current.length) {
                    cleanupSubscriptionsRef.current.forEach((cleanup) => cleanup());
                    cleanupSubscriptionsRef.current = [];
                }
                if (configs.length === 0) return;
                const disposer = socketServiceInstance.subscribeToCollections(wrapConfigsForWorker(configs));
                cleanupSubscriptionsRef.current.push(disposer);
                activeCollectionsRef.current = new Set(desiredNames);
                activeSubscriptionKeyRef.current = key;
                if (!settings?.disableLogs) {
                    console.log(`==> ${label || "Cache snapshots"} subscribed to ${configs.map((c) => c.collectionName).join(", ")}`);
                }
                return;
            }

            const toAdd = Array.from(desiredNames).filter((name) => !activeCollectionsRef.current.has(name));
            if (toAdd.length === 0) {
                return;
            }

            const configsToAdd = configs.filter((c) => toAdd.includes(c.collectionName));
            const disposer = socketServiceInstance.subscribeToCollections(wrapConfigsForWorker(configsToAdd));
            cleanupSubscriptionsRef.current.push(disposer);
            toAdd.forEach((n) => activeCollectionsRef.current.add(n));
            activeSubscriptionKeyRef.current = JSON.stringify(Array.from(activeCollectionsRef.current).sort());
            if (!settings?.disableLogs) {
                console.log(`==> ${label || "Cache snapshots"} appended subscriptions for ${toAdd.join(", ")}`);
            }
        };

        if (socketServiceInstance.isConnected()) {
            setSocketConnected(true);
            subscribe();
        } else if (!socketStarted.current) {
            socketStarted.current = true;
            auth.currentUser
                .getIdToken()
                .then((token) => {
                    socketServiceInstance.startSession(token);
                    if (!settings?.disableLogs) {
                        console.log(`==> ${label || "Cache snapshots"} started... `);
                    }
                })
                .catch((err) => {
                    socketStarted.current = false;
                    if (!settings?.disableLogs) {
                        console.error(`==> ${label || "Cache snapshots"} failed to acquire token:`, err);
                    }
                });
        }

        // Clean any previous listeners before registering new ones (defensive in case effect re-runs)
        offConnectRef.current?.();
        offDisconnectRef.current?.();

        offConnectRef.current = socketServiceInstance.onConnect(() => {
            setSocketConnected(true);
            socketStarted.current = false;
            subscribe();
        });

        offDisconnectRef.current = socketServiceInstance.onDisconnect(() => {
            setSocketConnected(false);
            cleanupSubscriptionsRef.current.forEach((cleanup) => cleanup());
            cleanupSubscriptionsRef.current = [];
            activeSubscriptionKeyRef.current = null;
            activeCollectionsRef.current = new Set();
        });

        if (settings?.cleanupForConfigChange) {
            return () => {
                cleanupSubscriptionsRef.current.forEach((cleanup) => cleanup());
                cleanupSubscriptionsRef.current = [];
                activeSubscriptionKeyRef.current = null;
                activeCollectionsRef.current = new Set();
                offConnectRef.current?.();
                offConnectRef.current = null;
                offDisconnectRef.current?.();
                offDisconnectRef.current = null;
                if (!settings?.disableLogs && configs.length > 0) {
                    console.log(`==> ${label || "Cache snapshots"} unsubscribed. `);
                }
            };
        }
    }, [configs, auth.currentUser?.uid]);

    useEffect(() => {
        settings?.socket?.getSocket?.(socketServiceInstance);
        return () => {
            cleanupSubscriptionsRef.current.forEach((cleanup) => cleanup());
            cleanupSubscriptionsRef.current = [];
            activeSubscriptionKeyRef.current = null;
            activeCollectionsRef.current = new Set();
            offConnectRef.current?.();
            offConnectRef.current = null;
            offDisconnectRef.current?.();
            offDisconnectRef.current = null;
            if (!settings?.disableLogs && configs.length > 0) {
                console.log(`==> ${label || "Cache snapshots"} unsubscribed. `);
            }
        };
    }, []);

    return { socketConnected };
};

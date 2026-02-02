// import { useEffect, useMemo, useRef, useState } from "react";
// import { auth, get_document_by_id, snapshot, socketServiceInstance } from "src/helpers";
// import { OnSnapshotConfig } from "src/types";
// import { useDeepCompareEffect } from "../react";

// export const useDbSnapshots = (
//     configs: OnSnapshotConfig[],
//     label?: string,
//     settings?: { cleanupForConfigChange?: boolean; disableLogs?: boolean }
// ) => {
//     const snapshotsFirstTime = useRef<string[]>([]);
//     const unsubscribeFunctions = useRef<(() => void)[]>([]);

//     useDeepCompareEffect(() => {
//         const start = performance.now();
//         if (!settings?.disableLogs && configs.length > 0) {
//             console.log(`==> ${label || "DB snapshots"} started from db... `);
//         }
//         const snapshotResults = configs.map((config) => snapshot(config, snapshotsFirstTime.current, settings));
//         unsubscribeFunctions.current = snapshotResults.map((result) => result.unsubscribe);

//         Promise.all(snapshotResults.map((result) => result.promise)).then(() => {
//             if (!settings?.disableLogs && configs.length > 0) {
//                 console.log(`==> ${label || "DB snapshots"} ended from db. It took ${(performance.now() - start).toFixed(2)} ms`);
//             }
//         });

//         if (settings?.cleanupForConfigChange) {
//             return () => {
//                 unsubscribeFunctions.current.forEach((unsubscribe: any) => {
//                     if (unsubscribe) {
//                         unsubscribe();
//                     }
//                 });
//                 if (!settings?.disableLogs && configs.length > 0) {
//                     console.log(`==> ${label || "DB snapshots"} unsubscribed from db`);
//                 }
//             };
//         }
//     }, [configs, label, settings]);

//     useEffect(() => {
//         return () => {
//             unsubscribeFunctions.current.forEach((unsubscribe: any) => {
//                 if (unsubscribe) {
//                     unsubscribe();
//                 }
//             });
//             if (!settings?.disableLogs) {
//                 console.log(`==> ${label || "DB snapshots"} unsubscribed`);
//             }
//         };
//     }, []);
// };

// export const useSmartSnapshots = (
//     configs: OnSnapshotConfig[],
//     label?: string,
//     settings?: { cleanupForConfigChange?: boolean; disableLogs?: boolean }
// ) => {
//     const [cacheCollectionsConfig, setCacheCollectionsConfig] = useState<Record<string, any> | null>(null);
//     useEffect(() => {
//         get_document_by_id("nx-settings", "cache_collections_config").then((res) => setCacheCollectionsConfig(res));
//         return () => setCacheCollectionsConfig(null);
//     }, []);

//     const groupedConfig = useMemo(() => {
//         if (!cacheCollectionsConfig) {
//             return { configForDb: [], configForCache: [] };
//         }
//         const configForDb: OnSnapshotConfig[] = [];
//         const configForCache: OnSnapshotConfig[] = [];
//         configs.forEach((cfg) => {
//             const { collectionName, subscribeTo = "cache" } = cfg;
//             if (subscribeTo === "cache" && cacheCollectionsConfig[collectionName]) {
//                 configForCache.push(cfg);
//             } else {
//                 configForDb.push(cfg);
//             }
//         });
//         return { configForDb, configForCache };
//     }, [configs, cacheCollectionsConfig]);

//     useDbSnapshots(groupedConfig.configForDb, label, settings);
//     const { socketConnected } = useSocketSnapshots(groupedConfig.configForCache, label, settings);
//     return { groupedConfig, socketConnected };
// };

// export const useSocketSnapshots = (
//     configs: OnSnapshotConfig[],
//     label?: string,
//     settings?: { cleanupForConfigChange?: boolean; disableLogs?: boolean }
// ) => {
//     const [socketConnected, setSocketConnected] = useState<boolean>(socketServiceInstance.isConnected());
//     const [cleanupSubscriptions, setCleanupSubscriptions] = useState<(() => void)[]>([]);
//     const socketStarted = useRef(false);
//     useDeepCompareEffect(() => {
//         if (!auth.currentUser) {
//             return;
//         }

//         // Helper to (re)subscribe when socket is connected
//         const subscribe = () => {
//             if (configs.length === 0) {
//                 return;
//             }
//             const disposer = socketServiceInstance.subscribeToCollections(configs);
//             setCleanupSubscriptions((prev) => [...prev, disposer]);
//             if (!settings?.disableLogs) {
//                 console.log(`==> ${label || "Cache snapshots"} subscribed to ${configs.map((c) => c.collectionName).join(", ")}`);
//             }
//         };

//         if (socketServiceInstance.isConnected()) {
//             setSocketConnected(true);
//             subscribe();
//         } else if (!socketStarted.current) {
//             socketStarted.current = true;
//             auth.currentUser.getIdToken().then((token) => {
//                 socketServiceInstance.startSession(token);
//                 if (!settings?.disableLogs) {
//                     console.log(`==> ${label || "Cache snapshots"} started... `);
//                 }
//             });
//         }

//         // Register one-shot listeners for connection state
//         const offConnect: () => void = socketServiceInstance.onConnect(() => {
//             setSocketConnected(true);
//             socketStarted.current = false;
//             subscribe();
//         });

//         const offDisconnect: () => void = socketServiceInstance.onDisconnect(() => {
//             setSocketConnected(false);
//             cleanupSubscriptions.forEach((cleanup) => cleanup());
//         });
//         if (settings?.cleanupForConfigChange) {
//             return () => {
//                 cleanupSubscriptions.forEach((cleanup) => cleanup());
//                 // offConnect?.();
//                 // offDisconnect?.();
//                 if (!settings?.disableLogs && configs.length > 0) {
//                     console.log(`==> ${label || "Cache snapshots"} unsubscribed. `);
//                 }
//             };
//         }
//     }, [configs, auth.currentUser?.uid]);

//     useEffect(() => {
//         return () => {
//             cleanupSubscriptions.forEach((cleanup) => cleanup());
//             if (!settings?.disableLogs && configs.length > 0) {
//                 console.log(`==> ${label || "Cache snapshots"} unsubscribed. `);
//             }
//         };
//     }, []);

//     return { socketConnected };
// };

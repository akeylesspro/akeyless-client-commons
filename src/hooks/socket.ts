import { useEffect, useMemo, useState } from "react";
import { get_document_by_id, socketServiceInstance } from "src/helpers";
import { OnSnapshotConfig } from "src/types";
import { useDeepCompareEffect, useDeepCompareMemo } from "./react";
import { useSnapshotBulk } from "./global";

export const useSocketSubscription = (config: OnSnapshotConfig[]) => {
    const [socketConnected, setSocketConnected] = useState<boolean>(socketServiceInstance.isConnected());

    useDeepCompareEffect(() => {
        let cleanupSubscriptions: () => void;
        if (socketConnected) {
            cleanupSubscriptions = socketServiceInstance.subscribeToCollections(config);
        }
        const uiOnConnect = () => {
            setSocketConnected(true);
        };
        const uiOnDisconnect = () => {
            cleanupSubscriptions?.();
            setSocketConnected(false);
        };

        socketServiceInstance.onConnect(uiOnConnect);
        socketServiceInstance.onDisconnect(uiOnDisconnect);
        setSocketConnected(socketServiceInstance.isConnected());

        return () => {
            console.log("cleanupSubscriptions");
            cleanupSubscriptions?.();
            socketServiceInstance.offConnect(uiOnConnect);
            socketServiceInstance.offDisconnect(uiOnDisconnect);
        };
    }, [socketConnected]);

    return { socketConnected };
};

type UseSmartSubscriptionSettings = {
    label?: string;
    settings?: {
        cleanupForConfigChange?: boolean;
        disableLogs?: boolean;
    };
};

export const useSmartSnapshot = (configs: OnSnapshotConfig[], options?: UseSmartSubscriptionSettings) => {
    const [cacheCollectionsConfig, setCacheCollectionsConfig] = useState<Record<string, any> | null>(null);
    useEffect(() => {
        get_document_by_id("nx-settings", "cache_collections_config").then((res) => setCacheCollectionsConfig(res));
        return () => setCacheCollectionsConfig(null);
    }, []);

    const groupedConfig = useDeepCompareMemo(() => {
        if (!cacheCollectionsConfig) {
            return { configForDb: [], configForCache: [] };
        }
        const configForDb = [];
        const configForCache = [];
        configs.forEach((cfg) => {
            const { collectionName, subscribeTo = "cache" } = cfg;
            if (subscribeTo === "cache" && cacheCollectionsConfig[collectionName]) {
                configForCache.push(cfg);
            } else {
                configForDb.push(cfg);
            }
        });
        return { configForDb, configForCache };
    }, [configs, cacheCollectionsConfig]);

    useSnapshotBulk(groupedConfig.configForDb, options?.label, options?.settings);
    useSocketSubscription(groupedConfig.configForCache);
};

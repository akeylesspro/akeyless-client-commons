import { useEffect, useRef, useState } from "react";
import { auth, socketServiceInstance } from "src/helpers";
import { OnSnapshotConfig } from "src/types";
import { useDeepCompareEffect } from "./react";

export const useSocketSubscription = (
    configs: OnSnapshotConfig[],
    label?: string,
    settings?: { cleanupForConfigChange?: boolean; disableLogs?: boolean }
) => {
    const [socketConnected, setSocketConnected] = useState<boolean>(socketServiceInstance.isConnected());
    const [cleanupSubscriptions, setCleanupSubscriptions] = useState<(() => void)[]>([]);
    const tryToAuth = useRef(false);
    useDeepCompareEffect(() => {
        if (!auth.currentUser) {
            return;
        }
        if (socketConnected) {
            setCleanupSubscriptions((prev) => [...prev, socketServiceInstance.subscribeToCollections(configs)]);
            if (!settings?.disableLogs && configs.length > 0) {
                console.log(`==> ${label || "Cache snapshots"} subscribed to ${configs.map((c) => c.collectionName).join(", ")}`);
            }
        } else {
            if (tryToAuth.current) {
                return;
            }
            tryToAuth.current = true;
            auth.currentUser.getIdToken().then((token) => {
                socketServiceInstance.setAuthToken(token);
                socketServiceInstance.getSocketInstance();
                if (!settings?.disableLogs && configs.length > 0) {
                    console.log(`==> ${label || "Cache snapshots"} started... `);
                }
            });
        }
        const uiOnConnect = () => {
            setSocketConnected(true);
        };
        const uiOnDisconnect = () => {
            cleanupSubscriptions.forEach((cleanup) => cleanup());
            setSocketConnected(false);
        };

        socketServiceInstance.onDisconnect(uiOnDisconnect);
        socketServiceInstance.onConnect(uiOnConnect);
        setSocketConnected(socketServiceInstance.isConnected());

        return () => {
            if (settings?.cleanupForConfigChange) {
                cleanupSubscriptions.forEach((cleanup) => cleanup());
                socketServiceInstance.offConnect(uiOnConnect);
                socketServiceInstance.offDisconnect(uiOnDisconnect);
            }
            if (!settings?.disableLogs && configs.length > 0) {
                console.log(`==> ${label || "Cache snapshots"} unsubscribed. `);
            }
        };
    }, [socketConnected, configs, auth, tryToAuth.current]);

    useEffect(() => {
        return () => {
            cleanupSubscriptions.forEach((cleanup) => cleanup());
        };
    }, []);

    return { socketConnected };
};

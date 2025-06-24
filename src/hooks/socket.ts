import { useEffect, useState } from "react";
import { socketServiceInstance } from "src/helpers";
import { OnSnapshotConfig } from "src/types";

export const useSocketSubscription = (config: OnSnapshotConfig[]) => {
    const [socketConnected, setSocketConnected] = useState<boolean>(socketServiceInstance.isConnected());

    useEffect(() => {
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

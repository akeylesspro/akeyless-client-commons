import { useEffect, useRef } from "react";
import { snapshot } from "src/helpers";
import { OnSnapshotConfig } from "src/types";
export function useSafeEffect(callback: () => void, dependencies: any[], error_message?: string) {
    useEffect(() => {
        try {
            callback();
        } catch (error) {
            console.error(error_message || "Error in useEffect:", error);
        }
    }, dependencies);
}
export const useDocumentTitle = (title: string) => {
    useEffect(() => {
        document.title = title;
    }, []);
    return null;
};

export const useSnapshotBulk = (configs: OnSnapshotConfig[], label?: string) => {
    const snapshotsFirstTime = useRef<string[]>([]);
    const unsubscribeFunctions = useRef<(() => void)[]>([]);

    useEffect(() => {
        const start = performance.now();
        console.log(`==> ${label || "Custom snapshots"} started... `);
        const snapshotsPromises = configs.map((config) => snapshot(config, snapshotsFirstTime.current));

        Promise.all(snapshotsPromises).then((unsubscribes) => {
            unsubscribeFunctions.current = unsubscribes;
            console.log(`==> ${label || "Custom snapshots"} ended. It took ${(performance.now() - start).toFixed(2)} ms`);
        });

        return () => {
            unsubscribeFunctions.current.forEach((unsubscribe) => {
                if (unsubscribe) {
                    unsubscribe();
                }
            });
        };
    }, [configs, label]);
};

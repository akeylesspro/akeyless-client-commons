import { CountryOptions } from "akeyless-types-commons";
import { Dispatch, SetStateAction, useEffect, useLayoutEffect, useRef } from "react";
import { getUserCountryByIp, snapshot } from "src/helpers";
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
    }, [title]);
    return null;
};

export const useSnapshotBulk = (configs: OnSnapshotConfig[], label?: string) => {
    const snapshotsFirstTime = useRef<string[]>([]);
    const unsubscribeFunctions = useRef<(() => void)[]>([]);

    useEffect(() => {
        const start = performance.now();
        console.log(`==> ${label || "Custom snapshots"} started... `);

        const snapshotResults = configs.map((config) => snapshot(config, snapshotsFirstTime.current));

        unsubscribeFunctions.current = snapshotResults.map((result) => result.unsubscribe);

        Promise.all(snapshotResults.map((result) => result.promise)).then(() => {
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

export const useSetUserCountry = (setUserCountry: Dispatch<SetStateAction<CountryOptions>>) => {
    useLayoutEffect(() => {
        const currentCountry = localStorage.getItem("userCountry") as CountryOptions;
        if (!currentCountry) {
            const updateCountry = async () => {
                const Country = await getUserCountryByIp();
                setUserCountry(Country);
                localStorage.setItem("userCountry", Country);
            };
            updateCountry();
        } else {
            setUserCountry(currentCountry);
        }
    }, []);
    return null;
};

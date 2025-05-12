import { CountryOptions } from "akeyless-types-commons";
import { Dispatch, SetStateAction, useEffect, useLayoutEffect, useRef } from "react";
import { getUserCountryByIp, snapshot } from "src/helpers";
import { OnSnapshotConfig } from "src/types";
import { useDeepCompareEffect } from "./react";

export const useDocumentTitle = (title: string) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
    return null;
};

export const useSnapshotBulk = (
    configs: OnSnapshotConfig[],
    label?: string,
    settings?: { cleanupForConfigChange?: boolean; disableLogs?: boolean }
) => {
    const snapshotsFirstTime = useRef<string[]>([]);
    const unsubscribeFunctions = useRef<(() => void)[]>([]);

    useDeepCompareEffect(() => {
        const start = performance.now();
        if (!settings?.disableLogs) {
            console.log(`==> ${label || "Custom snapshots"} started... `);
        }
        const snapshotResults = configs.map((config) => snapshot(config, snapshotsFirstTime.current, settings));
        unsubscribeFunctions.current = snapshotResults.map((result) => result.unsubscribe);

        Promise.all(snapshotResults.map((result) => result.promise)).then(() => {
            if (!settings?.disableLogs) {
                console.log(`==> ${label || "Custom snapshots"} ended. It took ${(performance.now() - start).toFixed(2)} ms`);
            }
        });

        if (settings?.cleanupForConfigChange) {
            return () => {
                unsubscribeFunctions.current.forEach((unsubscribe) => {
                    if (unsubscribe) {
                        unsubscribe();
                    }
                });
                if (!settings?.disableLogs) {
                    console.log(`==> ${label || "Custom snapshots"} unsubscribed`);
                }
            };
        }
    }, [configs, label, settings]);

    useEffect(() => {
        return () => {
            unsubscribeFunctions.current.forEach((unsubscribe) => {
                if (unsubscribe) {
                    unsubscribe();
                }
            });
            if (!settings?.disableLogs) {
                console.log(`==> ${label || "Custom snapshots"} unsubscribed`);
            }
        };
    }, []);
};

export const useSetUserCountry = (setUserCountry: Dispatch<SetStateAction<CountryOptions>>, changLang: (lang: string) => void) => {
    useLayoutEffect(() => {
        const currentCountry = localStorage.getItem("userCountry") as CountryOptions;
        if (!currentCountry) {
            const updateCountry = async () => {
                const country = await getUserCountryByIp();
                changLang(country === CountryOptions.IL ? "he" : "en");
                setUserCountry(country);
                localStorage.setItem("userCountry", country);
            };
            updateCountry();
        }
    }, []);
    return null;
};

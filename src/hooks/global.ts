import { CountryOptions } from "akeyless-types-commons";
import { Dispatch, SetStateAction, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { get_document_by_id, getUserCountryByIp, snapshot } from "src/helpers";
import { OnSnapshotConfig } from "src/types";
import { useDeepCompareEffect, useDeepCompareMemo } from "./react";
import { useSocketSubscription } from "./socket";

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
        if (!settings?.disableLogs && configs.length > 0) {
            console.log(`==> ${label || "DB snapshots"} started from db... `);
        }
        const snapshotResults = configs.map((config) => snapshot(config, snapshotsFirstTime.current, settings));
        unsubscribeFunctions.current = snapshotResults.map((result) => result.unsubscribe);

        Promise.all(snapshotResults.map((result) => result.promise)).then(() => {
            if (!settings?.disableLogs && configs.length > 0) {
                console.log(`==> ${label || "DB snapshots"} ended from db. It took ${(performance.now() - start).toFixed(2)} ms`);
            }
        });

        if (settings?.cleanupForConfigChange) {
            return () => {
                unsubscribeFunctions.current.forEach((unsubscribe) => {
                    if (unsubscribe) {
                        unsubscribe();
                    }
                });
                if (!settings?.disableLogs && configs.length > 0) {
                    console.log(`==> ${label || "DB snapshots"} unsubscribed from db`);
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
                console.log(`==> ${label || "DB snapshots"} unsubscribed`);
            }
        };
    }, []);
};

export const useSmartSnapshot = (
    configs: OnSnapshotConfig[],
    label?: string,
    settings?: { cleanupForConfigChange?: boolean; disableLogs?: boolean }
) => {
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
        return { configForDb, configForCache };
    }, [configs, cacheCollectionsConfig]);

    useSnapshotBulk(groupedConfig.configForDb, label, settings);
    const { socketConnected } = useSocketSubscription(groupedConfig.configForCache, label, settings);
    return { groupedConfig, socketConnected };
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

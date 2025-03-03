import { isEqual } from "lodash";
import { EffectCallback, useEffect, useMemo, useRef } from "react";

export function useSafeEffect(callback: () => void, dependencies: any[], error_message?: string) {
    useEffect(() => {
        try {
            callback();
        } catch (error) {
            console.error(error_message || "Error in useEffect:", error);
        }
    }, dependencies);
}

export const useDeepCompareMemo = <T>(factory: () => T, dependencies: any[]): T => {
    const previousDepsRef = useRef<any[]>([]);

    if (!isEqual(dependencies, previousDepsRef.current)) {
        previousDepsRef.current = dependencies;
    }

    return useMemo(factory, previousDepsRef.current);
};

export function useDeepCompareEffect(effect: EffectCallback, dependencies: any[]) {
    const previousDepsRef = useRef<any[]>();
    if (!isEqual(previousDepsRef.current, dependencies)) {
        previousDepsRef.current = dependencies;
    }

    useEffect(effect, [previousDepsRef.current]);
}

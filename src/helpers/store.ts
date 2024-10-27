export const setState = <T>(updater: T | ((state: T) => T), set: (fn: (state: any) => any) => void, stateName: string) => {
    return set((state: any) => ({
        [stateName]: typeof updater === "function" ? (updater as (state: T) => T)(state[stateName]) : updater,
    }));
};

export const createSelectors = <T extends object>(store: any) => {
    let selectors: { [K in keyof T]: () => T[K] } = {} as any;
    for (let k of Object.keys(store.getState()) as Array<keyof T>) {
        selectors[k] = () => store((s: T) => s[k]);
    }
    return selectors;
};

export const useStoreValues = <T extends object>(store: { use: { [K in keyof T]: () => T[K] } }, keys: Array<keyof T>): Partial<T> => {
    const result: Partial<T> = {};
    keys.forEach((key) => {
        result[key] = store.use[key]();
    });
    return result;
};

// Example usage
// const STATE_NAME = STORE_NAME.use.STATE_NAME();
// const keysArray = ["STATES_NAME_1", "STATES_NAME_2"];
// const { STATES_NAME_1, STATES_NAME_2 } = useStoreValues(STORE_NAME, keysArray);

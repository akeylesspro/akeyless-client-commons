export type Direction = "rtl" | "ltr";

export type SetState<T> = (updater: ((prev: T) => T) | T) => void;

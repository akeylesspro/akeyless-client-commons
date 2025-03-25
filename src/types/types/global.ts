export type Direction = "rtl" | "ltr";

export type SetState<T> = (updater: ((prev: T) => T) | T) => void;

export type ModularPopUp = null | {
    element: JSX.Element;
    elementName?: string & {};
    onClose?: () => void | Promise<void>;
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
    background?: string;
};

export type AppName = "installer" | "toolbox" | "dashboard";
export type LoginOption = "google" | "phone";

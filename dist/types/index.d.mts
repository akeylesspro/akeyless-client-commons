import { WhereFilterOp, Unsubscribe } from 'firebase/firestore';

type Direction = "rtl" | "ltr";
type SetState<T> = (updater: ((prev: T) => T) | T) => void;
type ModularPopUp = null | {
    element: JSX.Element;
    elementName?: string & {};
    onClose?: () => void | Promise<void>;
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
    background?: string;
};

type OnSnapshotCallback = (documents: any[], config: OnSnapshotConfig) => void;
interface OnSnapshotParsers {
    onFirstTime?: OnSnapshotCallback;
    onAdd?: OnSnapshotCallback;
    onModify?: OnSnapshotCallback;
    onRemove?: OnSnapshotCallback;
}
interface WhereCondition {
    field_name: string;
    operator: WhereFilterOp;
    value: any;
}
interface OnSnapshotConfig extends OnSnapshotParsers {
    collectionName: string;
    extraParsers?: OnSnapshotParsers[];
    conditions?: WhereCondition[];
}
interface OnSnapshotConfigDocument extends Omit<OnSnapshotParsers, "onAdd"> {
    collectionName: string;
    documentId: string;
    extraParsers?: Omit<OnSnapshotParsers, "onAdd">[];
    conditions?: WhereCondition[];
}
interface SnapshotResult {
    promise: Promise<void>;
    unsubscribe: Unsubscribe;
}
type Snapshot = (config: OnSnapshotConfig, snapshotsFirstTime: string[]) => SnapshotResult;
type SnapshotDocument = (config: OnSnapshotConfigDocument, snapshotsFirstTime: string[]) => SnapshotResult;

interface BaseElementProps {
    name?: string;
    labelContent: string;
    required?: boolean;
    containerClassName?: string;
    labelClassName?: string;
    elementClassName?: string;
}
interface InputElement extends BaseElementProps {
    type: "input";
    inputType?: string;
    defaultValue?: string;
    validationName?: string;
    validationError?: string;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    placeholder?: string;
    minLength?: number;
    props?: React.InputHTMLAttributes<HTMLInputElement>;
}
interface SelectElement extends BaseElementProps {
    type: "select";
    optionsContainerClassName?: string;
    options: {
        value: any;
        label: string;
    }[];
    defaultValue?: any;
    optionClassName?: string;
}
interface InputContainerProps extends Partial<InputElement> {
}
interface SelectContainerProps extends Partial<SelectElement> {
}
type FormElement = InputElement | SelectElement;
interface ModularFormProps {
    submitFunction: (form: React.FormEvent<HTMLFormElement>) => Promise<void>;
    elements: FormElement[];
    buttonContent: React.ReactNode;
    headerContent?: React.ReactNode;
    buttonClassName?: string;
    formClassName?: string;
    headerClassName?: string;
    direction?: Direction;
    submitRef?: React.MutableRefObject<HTMLButtonElement | null>;
}
interface ConfirmFormProps {
    onV: () => Promise<void> | void;
    onX: () => Promise<void> | void;
    headline?: string;
    direction?: Direction;
    containerClassName?: string;
    headlineClassName?: string;
    buttonsContainerClassName?: string;
}
interface DatePickerProps {
    submit?: (form: React.FormEvent<HTMLFormElement>) => Promise<void>;
    formClassName?: string;
    labelsClassName?: string;
    inputsClassName?: string;
    buttonClassName?: string;
    buttonStyle?: React.CSSProperties;
    defaultFrom?: string;
    defaultTo?: string;
    direction?: Direction;
    fromText?: string;
    toText?: string;
    buttonText?: string;
}

export type { BaseElementProps, ConfirmFormProps, DatePickerProps, Direction, FormElement, InputContainerProps, InputElement, ModularFormProps, ModularPopUp, OnSnapshotCallback, OnSnapshotConfig, OnSnapshotConfigDocument, OnSnapshotParsers, SelectContainerProps, SelectElement, SetState, Snapshot, SnapshotDocument, SnapshotResult, WhereCondition };

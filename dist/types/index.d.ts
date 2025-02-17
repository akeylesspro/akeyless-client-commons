import { ReactNode, Dispatch, SetStateAction } from 'react';
import * as RPNInput from 'react-phone-number-input';
import { WhereFilterOp, Unsubscribe } from 'firebase/firestore';

interface MultipleSelectorOption {
    value: string;
    label: string;
    disable?: boolean;
    /** fixed option that can&lsquo;t be removed. */
    fixed?: boolean;
    /** Group the options by providing key. */
    [key: string]: string | boolean | undefined;
}

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

type ValidationType = "text" | "numbers" | "numbersOnly" | "price" | "textNumbers" | "email" | "color" | "address" | "cars" | "charts" | (string & {});

interface BaseElementProps {
    name?: string;
    labelContent?: string;
    required?: boolean;
    labelClassName?: string;
    containerClassName?: string;
    elementClassName?: string;
    minLength?: number;
    validationError?: string;
}
interface InputElement extends BaseElementProps {
    type: "input";
    inputType?: string;
    defaultValue?: string;
    validationName?: ValidationType;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    placeholder?: string;
    props?: React.InputHTMLAttributes<HTMLInputElement>;
}
interface SelectElement extends BaseElementProps {
    type: "select";
    options: {
        value: any;
        label: string;
    }[];
    optionsContainerClassName?: string;
    defaultValue?: any;
    optionClassName?: string;
}
interface MultiSelectProps extends Omit<BaseElementProps, "containerClassName" | "elementClassName"> {
    type?: "multiSelect";
    options: MultipleSelectorOption[];
    emptyOptionsElement?: ReactNode;
    onChange?: (value: MultipleSelectorOption[]) => void;
    onSearch?: (value: string) => Promise<MultipleSelectorOption[]>;
    triggerSearchOnFocus?: boolean;
    onSearchSync?: (value: string) => MultipleSelectorOption[];
    selectedOptions?: MultipleSelectorOption[];
    styles?: {
        containerClassName?: string;
        badgeClassName?: string;
        className?: string;
        dropdownClassName?: string;
        dropdownOptionClassName?: string;
        emptyIndicatorClassName?: string;
    };
    unremovableOptions?: MultipleSelectorOption[];
    placeholder?: string;
    groupBy?: string;
}
interface InternationalInputProps extends Omit<BaseElementProps, "elementClassName"> {
    type?: "internationalPhoneInput";
    phoneValue?: string;
    setPhoneValue?: Dispatch<SetStateAction<string>>;
    placeholder?: string;
    className?: string;
    containerClassName?: string;
    style?: React.CSSProperties;
    flagContainerClassName?: string;
    inputClassName?: string;
    defaultValue?: string;
    defaultCountry?: RPNInput.Country;
    onEnter?: () => void;
    direction?: Direction;
}
interface CustomElementProps extends BaseElementProps {
    type: "custom";
    element: JSX.Element;
}
interface InputContainerProps extends Partial<InputElement> {
}
interface SelectContainerProps extends Partial<SelectElement> {
}
type FormElement = InputElement | SelectElement | MultiSelectProps | InternationalInputProps | CustomElementProps;
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

export type { BaseElementProps, ConfirmFormProps, CustomElementProps, DatePickerProps, Direction, FormElement, InputContainerProps, InputElement, InternationalInputProps, ModularFormProps, ModularPopUp, MultiSelectProps, OnSnapshotCallback, OnSnapshotConfig, OnSnapshotConfigDocument, OnSnapshotParsers, SelectContainerProps, SelectElement, SetState, Snapshot, SnapshotDocument, SnapshotResult, WhereCondition };

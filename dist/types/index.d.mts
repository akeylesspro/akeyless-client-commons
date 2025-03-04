import { Command as Command$1 } from 'cmdk';
import * as React$1 from 'react';
import { ReactNode, Dispatch, SetStateAction } from 'react';
import * as RPNInput from 'react-phone-number-input';
import { WhereFilterOp, Unsubscribe } from 'firebase/firestore';

declare const Command: React$1.ForwardRefExoticComponent<Omit<{
    children?: React$1.ReactNode;
} & Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
    ref?: React$1.Ref<HTMLDivElement>;
} & {
    asChild?: boolean;
}, "key" | keyof React$1.HTMLAttributes<HTMLDivElement> | "asChild"> & {
    label?: string;
    shouldFilter?: boolean;
    filter?: (value: string, search: string, keywords?: string[]) => number;
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    loop?: boolean;
    disablePointerSelection?: boolean;
    vimBindings?: boolean;
} & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

interface MultipleSelectorOption {
    value: string;
    label: string;
    disable?: boolean;
    fixed?: boolean;
    [key: string]: string | boolean | undefined;
}
interface MultipleSelectorProps {
    value?: MultipleSelectorOption[];
    defaultOptions?: MultipleSelectorOption[];
    options?: MultipleSelectorOption[];
    placeholder?: string;
    loadingIndicator?: React$1.ReactNode;
    emptyIndicator?: React$1.ReactNode;
    delay?: number;
    triggerSearchOnFocus?: boolean;
    onSearch?: (value: string) => Promise<MultipleSelectorOption[]>;
    onSearchSync?: (value: string) => MultipleSelectorOption[];
    onChange?: (options: MultipleSelectorOption[]) => void;
    maxSelected?: number;
    onMaxSelected?: (maxLimit: number) => void;
    hidePlaceholderWhenSelected?: boolean;
    disabled?: boolean;
    groupBy?: string;
    className?: string;
    badgeClassName?: string;
    selectFirstItem?: boolean;
    creatable?: boolean;
    commandProps?: React$1.ComponentPropsWithoutRef<typeof Command>;
    inputProps?: Omit<React$1.ComponentPropsWithoutRef<typeof Command$1.Input>, "value" | "placeholder" | "disabled">;
    hideClearAllButton?: boolean;
    dropdownClassName?: string;
    dropdownOptionClassName?: string;
    dropdownContainerClassName?: string;
    emptyIndicatorClassName?: string;
    unremovableOptions?: MultipleSelectorOption[];
    name?: string;
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
    orderBy?: string;
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

interface SearchSelectOptions extends Record<string, string> {
    value: string;
    label: string;
}

interface BaseElementProps {
    name?: string;
    labelContent?: string;
    required?: boolean;
    labelClassName?: string;
    containerClassName?: string;
    elementClassName?: string;
    minLength?: number;
    validationError?: string;
    direction?: Direction;
}
interface InputElement extends BaseElementProps {
    type: "input";
    inputType?: string;
    defaultValue?: string;
    validationName?: ValidationType;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    placeholder?: string;
    props?: React.InputHTMLAttributes<HTMLInputElement>;
}
interface TextAreaElement extends BaseElementProps {
    type: "textarea";
    defaultValue?: string;
    onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    props?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
}
interface SelectElement extends BaseElementProps {
    type: "select";
    options: {
        value: any;
        label: string;
    }[];
    optionsContainerClassName?: string;
    defaultValue?: any;
    onChange?: (value: any) => void;
    optionClassName?: string;
    sortDirection?: "abc" | "cba";
    sortAsNumber?: boolean;
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
        dropdownContainerClassName?: string;
    };
    unremovableOptions?: MultipleSelectorOption[];
    placeholder?: string;
    groupBy?: string;
    sortDirection?: "abc" | "cba";
    sortAsNumber?: boolean;
    searchInputProps?: MultipleSelectorProps["inputProps"];
}
interface SelectWithSearchProps extends BaseElementProps {
    type?: "selectWithSearch";
    options: SearchSelectOptions[];
    onChange?: (value: SearchSelectOptions["value"]) => void;
    value?: SearchSelectOptions["value"];
    defaultValue?: SearchSelectOptions["value"];
    dropdownClassName?: string;
    dropdownOptionClassName?: string;
    placeholder?: string;
    notFoundLabel?: string;
    searchPlaceholder?: string;
    notFoundLabelClassName?: string;
    searchClassName?: string;
    selectButtonClassName?: string;
    sortDirection?: "abc" | "cba";
    sortAsNumber?: boolean;
    disabled?: boolean;
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
interface TextAreaContainerProps extends Partial<TextAreaElement> {
}
type FormElement = InputElement | SelectElement | MultiSelectProps | InternationalInputProps | CustomElementProps | TextAreaElement | SelectWithSearchProps;
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

export type { BaseElementProps, ConfirmFormProps, CustomElementProps, DatePickerProps, Direction, FormElement, InputContainerProps, InputElement, InternationalInputProps, ModularFormProps, ModularPopUp, MultiSelectProps, OnSnapshotCallback, OnSnapshotConfig, OnSnapshotConfigDocument, OnSnapshotParsers, SelectContainerProps, SelectElement, SelectWithSearchProps, SetState, Snapshot, SnapshotDocument, SnapshotResult, TextAreaContainerProps, TextAreaElement, WhereCondition };

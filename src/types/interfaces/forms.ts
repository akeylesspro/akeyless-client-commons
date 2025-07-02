import { MultipleSelectorOption, MultipleSelectorProps } from "@/components/ui/multiselect";
import { Direction } from "../types";
import { ComponentProps, Dispatch, ReactNode, SetStateAction } from "react";
import * as RPNInput from "react-phone-number-input";
import { ValidationType } from "src/helpers";
import { SearchSelectOptions } from "@/components/ui";
import { CheckBoxProps, LoaderProps } from "@/components/utils";
import { MouseEvent } from "react";

export interface BaseElementProps {
    name?: string;
    labelContent?: string;
    required?: boolean;
    labelClassName?: ComponentProps<"div">["className"];
    labelWithDots?: boolean;
    containerClassName?: ComponentProps<"div">["className"];
    elementClassName?: ComponentProps<"div">["className"];
    minLength?: number;
    validationError?: string;
    direction?: Direction;
    labelsCommonClassName?: string;
    title?: string;
    labelStyle?: React.CSSProperties;
}
export interface CheckboxContainerProps extends Omit<BaseElementProps, "minLength" | "validationError">, CheckBoxProps {
    type?: "checkbox";
}

export interface InputElement extends BaseElementProps {
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
export interface TextAreaElement extends BaseElementProps {
    type: "textarea";
    defaultValue?: string;
    onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    value?: string;
    placeholder?: string;
    props?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
}

export interface SelectElement extends BaseElementProps {
    type: "select";
    options: { value: any; label: string }[];
    optionsContainerClassName?: string;
    selectClassName?: string;
    defaultValue?: any;
    onChange?: (value: any) => void;
    optionClassName?: string;
    sortDirection?: "abc" | "cba";
    sortAsNumber?: boolean;
    iconClassName?: string;
}

export interface MultiSelectProps extends Omit<BaseElementProps, "containerClassName" | "elementClassName"> {
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
    createNewOptionLabel?: string;
    createNewOptionContainerClassName?: string;
    closeDropdownOnSelect?: boolean;
}
export interface SelectWithSearchProps extends BaseElementProps {
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
    buttonClassName?: string;
    buttonFocusClassName?: string;
    sortDirection?: "abc" | "cba";
    sortAsNumber?: boolean;
    disabled?: boolean;
    createNewOptionLabel?: string;
    createNewOptionContainerClassName?: string;
}
export interface InternationalInputProps extends Omit<BaseElementProps, "elementClassName"> {
    type?: "internationalPhoneInput";
    phoneValue?: string;
    setPhoneValue?: Dispatch<SetStateAction<string>> | ((value: string) => void);
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
    defaultFocus?: boolean;
    disabled?: boolean;
}
export interface CustomElementProps {
    type?: "custom";
    element: JSX.Element;
}
export interface FormSeparatorProps {
    type?: "separator";
    props?: ComponentProps<"div">;
    children?: ReactNode;
    direction?: Direction;
}

export interface InputContainerProps extends Partial<InputElement> {}
export interface SelectContainerProps extends Partial<SelectElement> {}
export interface TextAreaContainerProps extends Partial<TextAreaElement> {}

export interface DurationValues {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export type DurationInputOption = keyof DurationValues;

export interface DurationInputProps extends BaseElementProps {
    type?: "duration";
    value?: number;
    onChange?: (seconds: number) => void;
    hideLabels?: boolean;
    options?: DurationInputOption[];
}

export type FormElement =
    | InputElement
    | SelectElement
    | MultiSelectProps
    | InternationalInputProps
    | CustomElementProps
    | TextAreaElement
    | SelectWithSearchProps
    | FormSeparatorProps
    | CheckboxContainerProps
    | DurationInputProps;

export interface ModularFormProps {
    submitFunction: (form: React.FormEvent<HTMLFormElement>, clickEvent?: MouseEvent) => Promise<void>;
    elements: FormElement[];
    buttonContent: React.ReactNode;
    headerContent?: React.ReactNode;
    buttonClassName?: string;
    headerClassName?: string;
    direction?: Direction;
    submitRef?: React.MutableRefObject<HTMLButtonElement | null>;
    footerClassName?: string;
    labelsCommonClassName?: string;
    errorClassName?: string;
    onLoad?: (e: EventTarget & HTMLFormElement) => void;
    autoFixLabelsWidth?: boolean;
    autoFixLabelsWidthDeps?: any[];
    loaderProps?: LoaderProps;
    elementsContainerClassName?: string;
    className?: string;
}
export interface ConfirmFormProps {
    onV: () => Promise<void> | void;
    onX: () => Promise<void> | void;
    headline?: string;
    direction?: Direction;
    containerClassName?: string;
    headlineClassName?: string;
    buttonsContainerClassName?: string;
    cancelButtonClassName?: string;
    confirmButtonClassName?: string;
    confirmButtonProps?: ComponentProps<"button">;
    cancelButtonProps?: ComponentProps<"button">;
    cancelElement?: ReactNode;
    confirmElement?: ReactNode;
}

export interface DatePickerProps {
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

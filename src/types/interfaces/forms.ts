import { MultipleSelectorOption } from "@/components/ui/multiselect";
import { Direction } from "../types";
import { Dispatch, ReactNode, SetStateAction } from "react";
import * as RPNInput from "react-phone-number-input";
import { ValidationType } from "src/helpers";
import { SearchSelectOptions } from "@/components/ui";

export interface BaseElementProps {
    name?: string;
    labelContent?: string;
    required?: boolean;
    labelClassName?: string;
    containerClassName?: string;
    elementClassName?: string;
    minLength?: number;
    validationError?: string;
}

export interface InputElement extends BaseElementProps {
    type: "input";
    inputType?: string;
    defaultValue?: string;
    validationName?: ValidationType;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    props?: React.InputHTMLAttributes<HTMLInputElement>;
}
export interface TextAreaElement extends BaseElementProps {
    type: "textarea";
    defaultValue?: string;
    onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    props?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
}

export interface SelectElement extends BaseElementProps {
    type: "select";
    options: { value: any; label: string }[];
    optionsContainerClassName?: string;
    defaultValue?: any;
    onChange?: (value: any) => void;
    optionClassName?: string;
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
    };
    unremovableOptions?: MultipleSelectorOption[];
    placeholder?: string;
    groupBy?: string;
}
export interface SelectWithSearchProps extends Omit<BaseElementProps, "containerClassName" | "elementClassName"> {
    type?: "selectWithSearch";
    options: SearchSelectOptions[];
    onChange?: (value: MultipleSelectorOption[]) => void;
    defaultValue?: SearchSelectOptions["value"];
    containerClassName?: string;
    selectClassName?: string;
    dropdownClassName?: string;
    dropdownOptionClassName?: string;
    placeholder?: string;
    notFoundLabel?: string;
    searchLabel?: string;
}
export interface InternationalInputProps extends Omit<BaseElementProps, "elementClassName"> {
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
export interface CustomElementProps extends BaseElementProps {
    type: "custom";
    element: JSX.Element;
}

export interface InputContainerProps extends Partial<InputElement> {}
export interface SelectContainerProps extends Partial<SelectElement> {}
export interface TextAreaContainerProps extends Partial<TextAreaElement> {}

export type FormElement =
    | InputElement
    | SelectElement
    | MultiSelectProps
    | InternationalInputProps
    | CustomElementProps
    | TextAreaElement
    | SelectWithSearchProps;

export interface ModularFormProps {
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
export interface ConfirmFormProps {
    onV: () => Promise<void> | void;
    onX: () => Promise<void> | void;
    headline?: string;
    direction?: Direction;
    containerClassName?: string;
    headlineClassName?: string;
    buttonsContainerClassName?: string;
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

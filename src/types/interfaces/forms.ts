import { MultipleSelectorOption } from "@/components/ui/multiselect";
import { Direction } from "../types";
import { Dispatch, ReactNode, SetStateAction } from "react";
import * as RPNInput from "react-phone-number-input";

export interface BaseElementProps {
    name?: string;
    labelContent: string;
    required?: boolean;
    containerClassName?: string;
    labelClassName?: string;
    elementClassName?: string;
}

export interface InputElement extends BaseElementProps {
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

export interface SelectElement extends BaseElementProps {
    type: "select";
    optionsContainerClassName?: string;
    options: { value: any; label: string }[];
    defaultValue?: any;
    optionClassName?: string;
}
export interface MultipleSelectProps {
    type: "multipleSelect";
    options?: MultipleSelectorOption[];
    emptyOptionsElement?: ReactNode;
    onChange?: (value: MultipleSelectorOption[]) => void;
    selectedOptions?: MultipleSelectorOption[];
    name?: string;
    styles?: {
        containerClassName?: string;
        badgeClassName?: string;
        className?: string;
        dropdownClassName?: string;
        dropdownOptionClassName?: string;
        emptyIndicatorClassName?: string;
    };
    unremovableOptions?: MultipleSelectorOption[];
    selectLabel?: string;
}
export interface InternationalInputProps {
    type?: "internationalPhoneInput";
    labelContent?: string;
    phoneValue?: string;
    setPhoneValue?: Dispatch<SetStateAction<string>>;
    placeholder?: string;
    className?: string;
    containerClassName?: string;
    name?: string;
    style?: React.CSSProperties;
    flagContainerClassName?: string;
    inputClassName?: string;
    defaultValue?: string;
    defaultCountry?: RPNInput.Country;
    onEnter?: () => void;
}

export interface InputContainerProps extends Partial<InputElement> {}
export interface SelectContainerProps extends Partial<SelectElement> {}

export type FormElement = InputElement | SelectElement | MultipleSelectProps | InternationalInputProps;

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

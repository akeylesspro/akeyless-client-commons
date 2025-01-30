import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import React__default, { SetStateAction, ReactNode, Dispatch } from 'react';
import { TObject, Geo } from 'akeyless-types-commons';
import * as RPNInput from 'react-phone-number-input';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';
import * as ProgressPrimitive from '@radix-ui/react-progress';

interface CheckBoxProps {
    id: string;
    checked: boolean;
    setChecked: React__default.Dispatch<SetStateAction<boolean>>;
    style?: React__default.CSSProperties;
    rotate: boolean;
}
declare const Checkbox: ({ id, checked, setChecked, rotate, style }: CheckBoxProps) => react_jsx_runtime.JSX.Element;

interface ErrorBoundaryProps {
    fallback?: React__default.ReactNode;
    children: React__default.ReactNode;
}
interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: React__default.ErrorInfo | null;
}
declare class ErrorBoundary extends React__default.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState>;
    componentDidCatch(error: Error, errorInfo: React__default.ErrorInfo): void;
    render(): string | number | boolean | react_jsx_runtime.JSX.Element | Iterable<React__default.ReactNode>;
}

interface LoaderProps {
    color?: string;
    size?: number;
    style?: React__default.CSSProperties;
    className?: string;
}
declare const Loader: React__default.FC<LoaderProps>;

declare const Version: ({ version, className }: {
    version: string;
    className?: string;
}) => react_jsx_runtime.JSX.Element;

interface MultipleSelectorOption {
    value: string;
    label: string;
    disable?: boolean;
    /** fixed option that can&lsquo;t be removed. */
    fixed?: boolean;
    /** Group the options by providing key. */
    [key: string]: string | boolean | undefined;
}
interface MultipleSelectorRef {
    selectedValue: MultipleSelectorOption[];
    input: HTMLInputElement;
    focus: () => void;
    reset: () => void;
}
declare function useDebounce<T>(value: T, delay?: number): T;

type Direction = "rtl" | "ltr";

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
    validationName?: string;
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
    element: ReactNode;
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

interface FilterableColumn {
    header: string;
    dataKey: string;
    ui?: (value: any) => ReactNode;
}
interface TableProviderType {
    sortColumn: number;
    sortOrder: "asc" | "desc";
    handleSort: (columnIndex: number) => void;
    searchQuery: string;
    deferredSearchQuery: string;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    dataToRender: {
        renderedData: TObject<any>[];
        filtered: TObject<any>[];
    };
    filters: TObject<string[]>;
    filterPopupsDisplay: string;
    filterOptions: any;
    handleFilterChange: (dataKey: string, value: string) => void;
    handleFilterClick: (dataKey: string) => void;
    closeFilterWindow: () => void;
}
interface UseFilterProps {
    data: Record<string, any>[];
    filterableColumns: FilterableColumn[];
}
interface TableProps {
    data: Record<string, any>[];
    headers: string[];
    keysToRender: string[];
    optionalElement?: ReactNode;
    containerStyle?: React.CSSProperties;
    containerClassName?: string;
    containerHeaderClassName?: string;
    includeSearch?: boolean;
    searchInputStyle?: React.CSSProperties;
    searchInputClassName?: string;
    tableContainerStyle?: React.CSSProperties;
    tableContainerClass?: string;
    tableStyle?: React.CSSProperties;
    rowStyles?: React.CSSProperties;
    rowClassName?: string;
    headerStyle?: React.CSSProperties;
    headerClassName?: string;
    headerCellStyle?: React.CSSProperties;
    headerCellClassName?: string;
    cellStyle?: React.CSSProperties;
    cellClassName?: string;
    filterableColumns?: {
        header: string;
        dataKey: string;
        ui?: (value: any) => ReactNode;
    }[];
    sortKeys?: string[];
    exportToExcelKeys?: string[];
    excelFileName?: string;
    dataToAddToExcelTable?: {
        key: string;
        value: any;
        header: string;
    }[];
    sumColumns?: {
        label: string;
        dataKey: string;
        ui?: (value: any) => ReactNode;
    }[];
    searchPlaceHolder?: string;
    summaryContainerStyle?: React.CSSProperties;
    summaryLabelStyle?: React.CSSProperties;
    summaryRowStyle?: React.CSSProperties;
    summaryLabel?: string;
    filterLabel?: string;
    sortLabel?: string;
    exportExcelLabel?: string;
    onRowClick?: (data?: any) => void;
    direction?: Direction;
    maxRows?: number;
    maxRowsLabel1?: string;
    maxRowsLabel2?: string;
    maxRowsContainerClassName?: string;
    zebraStriping?: {
        oddRowClassName?: string;
        evenRowClassName?: string;
    };
}
interface FilterProps {
    index: number;
    filterableColumn: FilterableColumn;
}

declare const getFixedNumber: (number?: number, fix?: number) => string;
declare const TableRow: ({ item, index }: {
    item: TObject<any>;
    index: number;
}) => react_jsx_runtime.JSX.Element;
declare const TableCell: ({ value }: {
    value: any;
}) => react_jsx_runtime.JSX.Element;
declare const Filter: React__default.NamedExoticComponent<FilterProps>;
declare const TableHead: React__default.MemoExoticComponent<() => react_jsx_runtime.JSX.Element>;
declare const TableBody: React__default.MemoExoticComponent<() => react_jsx_runtime.JSX.Element>;
declare const MaxRowsLabel: React__default.MemoExoticComponent<() => react_jsx_runtime.JSX.Element>;
declare const ExportToExcel: React__default.MemoExoticComponent<() => react_jsx_runtime.JSX.Element>;
declare const Search: React__default.MemoExoticComponent<() => react_jsx_runtime.JSX.Element>;
declare const Summary: React__default.MemoExoticComponent<() => react_jsx_runtime.JSX.Element>;
interface TimesUIProps {
    timestamp: any;
    format?: string;
    fromFormat?: string;
    tz?: string;
    direction?: Direction;
    className?: string;
}
declare const TimesUI: ({ timestamp, format, tz, direction, fromFormat, className }: TimesUIProps) => react_jsx_runtime.JSX.Element;
interface TableButtonProps {
    onClick: () => void;
    title?: string;
    className?: string;
    type: "add" | "edit" | "delete" | "custom";
    children?: ReactNode;
}
declare const TableButton: ({ onClick, title, className, type, children }: TableButtonProps) => react_jsx_runtime.JSX.Element;
interface DurationUIProps {
    duration: string;
    minutesLabel?: string;
    hoursLabel?: string;
    secondsLabel?: string;
    className?: string;
    direction?: Direction;
}
declare const DurationUI: ({ duration, hoursLabel, minutesLabel, secondsLabel, className, direction }: DurationUIProps) => react_jsx_runtime.JSX.Element;
declare const PhoneUI: ({ phone, direction, className }: {
    phone: string;
    direction?: Direction;
    className?: string;
}) => react_jsx_runtime.JSX.Element;
declare const BooleanUi: ({ value, size, className }: {
    value: boolean;
    size?: "big" | "small";
    className?: string;
}) => react_jsx_runtime.JSX.Element;
interface GeoUiProps {
    value: Partial<Geo> & {
        latitude?: number;
        longitude?: number;
    };
    className?: string;
}
declare const GeoUi: ({ value, className }: GeoUiProps) => react_jsx_runtime.JSX.Element;
interface NumberUIProps {
    number: string;
    direction?: Direction;
    className?: string;
}
declare const numberUI: ({ number, direction, className }: NumberUIProps) => react_jsx_runtime.JSX.Element;

declare const TableContext: React__default.Context<TableProps & TableProviderType>;
declare const TableProvider: (props: TableProps & {
    children: React__default.ReactNode;
}) => react_jsx_runtime.JSX.Element;
declare const Table: React__default.MemoExoticComponent<(props: TableProps) => react_jsx_runtime.JSX.Element>;

declare const ModularForm: ({ submitFunction, elements, headerContent, buttonContent, formClassName, headerClassName, direction, buttonClassName, submitRef, }: ModularFormProps) => react_jsx_runtime.JSX.Element;

declare function InternationalPhonePicker({ setPhoneValue, phoneValue, placeholder, className, containerClassName, defaultCountry, flagContainerClassName, inputClassName, defaultValue, name, style, onEnter, labelContent, labelClassName, required, direction, }: InternationalInputProps): react_jsx_runtime.JSX.Element;

declare const InputContainer: ({ validationError, name, inputType, labelContent, defaultValue, validationName, containerClassName, labelClassName, elementClassName, required, placeholder, props, onKeyDown, }: InputContainerProps) => react_jsx_runtime.JSX.Element;
declare const SelectContainer: ({ name, labelContent, containerClassName, labelClassName, defaultValue, elementClassName, optionClassName, required, options, optionsContainerClassName, }: SelectContainerProps) => react_jsx_runtime.JSX.Element;
declare function MultiSelect({ onChange, selectedOptions, emptyOptionsElement, unremovableOptions, options, styles, name, placeholder, labelContent, required, labelClassName, groupBy, onSearch, onSearchSync, triggerSearchOnFocus, }: MultiSelectProps): react_jsx_runtime.JSX.Element;
declare const ElementLabel: ({ labelContent, labelClassName, name, required }: Omit<BaseElementProps, "containerClassName" | "elementClassName">) => react_jsx_runtime.JSX.Element;

declare const ConfirmForm: ({ onV, onX, headline, direction, containerClassName, buttonsContainerClassName, headlineClassName, }: ConfirmFormProps) => react_jsx_runtime.JSX.Element;
declare const DatePicker: ({ submit, formClassName, labelsClassName, inputsClassName, buttonClassName, buttonStyle, defaultFrom, defaultTo, direction, fromText, toText, buttonText, }: DatePickerProps) => react_jsx_runtime.JSX.Element;

declare const badgeVariants: (props?: {
    variant?: "default" | "secondary" | "destructive" | "outline";
} & class_variance_authority_dist_types.ClassProp) => string;
interface BadgeProps extends React$1.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

declare const buttonVariants: (props?: {
    variant?: "link" | "default" | "secondary" | "destructive" | "outline" | "ghost";
    size?: "default" | "icon" | "sm" | "lg";
} & class_variance_authority_dist_types.ClassProp) => string;
interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

declare const Input: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & React$1.RefAttributes<HTMLInputElement>>;

interface ProgressProps extends React$1.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
    containerClassName?: string;
    indicatorClassName?: string;
    showValue?: boolean;
    showValueClassName?: string;
}
declare const ProgressComponent: React$1.ForwardRefExoticComponent<ProgressProps & React$1.RefAttributes<HTMLDivElement>>;

interface CodeInputProps {
    codeValue: string;
    setCodeValue: Dispatch<SetStateAction<string>>;
    className?: string;
    slotContainerClassName?: string;
}
declare function CodeInput({ codeValue, setCodeValue, className, slotContainerClassName }: CodeInputProps): react_jsx_runtime.JSX.Element;

export { Badge, type BadgeProps, BooleanUi, Button, type ButtonProps, Checkbox, CodeInput, ConfirmForm, DatePicker, DurationUI, ElementLabel, ErrorBoundary, ExportToExcel, Filter, type FilterProps, GeoUi, Input, InputContainer, InternationalPhonePicker, Loader, MaxRowsLabel, ModularForm, MultiSelect, type MultipleSelectorOption, type MultipleSelectorRef, PhoneUI, ProgressComponent, Search, SelectContainer, Summary, Table, TableBody, TableButton, TableCell, TableContext, TableHead, type TableProps, TableProvider, type TableProviderType, TableRow, TimesUI, type UseFilterProps, Version, badgeVariants, buttonVariants, getFixedNumber, numberUI, useDebounce };

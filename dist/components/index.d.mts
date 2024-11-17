import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import React__default, { SetStateAction, ReactNode } from 'react';
import { TObject } from 'akeyless-types-commons';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';

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

type Direction = "rtl" | "ltr";

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
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    dataToRender: TObject<any>[];
    filters: TObject<string[]>;
    filterPopupsDisplay: string;
    filterOptions: any;
    handleFilterChange: (dataKey: string, value: string) => void;
    handleFilterClick: (dataKey: string) => void;
}
interface TableProps {
    data: Record<string, any>[];
    headers: string[];
    keysToRender: string[];
    optionalElement?: ReactNode;
    containerStyle?: React.CSSProperties;
    containerClassName?: string;
    includeSearch?: boolean;
    searchInputStyle?: React.CSSProperties;
    searchInputClassName?: string;
    tableContainerStyle?: React.CSSProperties;
    tableContainerClass?: string;
    tableStyle?: React.CSSProperties;
    rowStyles?: React.CSSProperties;
    headerStyle?: React.CSSProperties;
    headerCellStyle?: React.CSSProperties;
    cellStyle?: React.CSSProperties;
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
}
interface FilterProps {
    index: number;
    filterableColumn: FilterableColumn;
}

interface BaseElementProps {
    name?: string;
    labelContent: string;
    defaultValue?: string;
    required?: boolean;
    containerClassName?: string;
    labelClassName?: string;
    elementClassName?: string;
}
interface InputElement extends BaseElementProps {
    type: "input";
    inputType?: string;
    validationName?: string;
    validationError?: string;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
interface SelectElement extends BaseElementProps {
    type: "select";
    options: {
        value: string;
        label: string;
    }[];
    optionClassName?: string;
}
interface InputContainerProps extends Partial<InputElement> {
}
interface SelectContainerProps extends Partial<SelectElement> {
}
type FormElement = InputElement | SelectElement;
interface ModularFormProps {
    submitFunction?: (form: React.FormEvent<HTMLFormElement>) => Promise<void>;
    elements?: FormElement[];
    headerContent?: JSX.Element;
    buttonContent?: string;
    formClassName?: string;
    headerClassName?: string;
    direction?: Direction;
}
interface ConfirmFormProps {
    onV: () => Promise<void> | void;
    onX: () => Promise<void> | void;
    headline?: string;
    direction?: Direction;
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

declare const getFixedNumber: (number?: number, fix?: number) => string;
declare const TableRow: ({ item }: {
    item: TObject<any>;
}) => react_jsx_runtime.JSX.Element;
declare const TableCell: ({ value }: {
    value: any;
}) => react_jsx_runtime.JSX.Element;
declare const TableHead: React__default.MemoExoticComponent<(props: any) => react_jsx_runtime.JSX.Element>;
declare const TableBody: React__default.MemoExoticComponent<(props: any) => react_jsx_runtime.JSX.Element>;
declare const Filter: React__default.NamedExoticComponent<FilterProps>;
declare const ExportToExcel: React__default.MemoExoticComponent<(props: any) => react_jsx_runtime.JSX.Element>;
declare const Search: React__default.MemoExoticComponent<(props: any) => react_jsx_runtime.JSX.Element>;
declare const Summary: React__default.MemoExoticComponent<(props: any) => react_jsx_runtime.JSX.Element>;

declare const TableContext: React__default.Context<TableProps & TableProviderType>;
declare const TableProvider: (props: TableProps & {
    children: React__default.ReactNode;
}) => react_jsx_runtime.JSX.Element;
declare const Table: (props: TableProps) => react_jsx_runtime.JSX.Element;

declare const InputContainer: ({ validationError, name, inputType, labelContent, defaultValue, validationName, containerClassName, labelClassName, elementClassName, required, onKeyDown, }: InputContainerProps) => react_jsx_runtime.JSX.Element;
declare const SelectContainer: ({ name, labelContent, containerClassName, labelClassName, defaultValue, elementClassName, optionClassName, required, options, }: SelectContainerProps) => react_jsx_runtime.JSX.Element;
declare const ModularForm: ({ submitFunction, elements, headerContent, buttonContent, formClassName, headerClassName, direction, }: ModularFormProps) => react_jsx_runtime.JSX.Element;
declare const ConfirmForm: ({ onV, onX, headline, direction }: ConfirmFormProps) => react_jsx_runtime.JSX.Element;
declare const DatePicker: ({ submit, formClassName, labelsClassName, inputsClassName, buttonClassName, buttonStyle, defaultFrom, defaultTo, direction, fromText, toText, buttonText, }: DatePickerProps) => react_jsx_runtime.JSX.Element;

declare const buttonVariants: (props?: {
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost";
    size?: "default" | "icon" | "sm" | "lg";
} & class_variance_authority_dist_types.ClassProp) => string;
interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

export { Button, type ButtonProps, Checkbox, ConfirmForm, DatePicker, ErrorBoundary, ExportToExcel, Filter, InputContainer, Loader, ModularForm, Search, SelectContainer, Summary, Table, TableBody, TableCell, TableContext, TableHead, TableProvider, TableRow, buttonVariants, getFixedNumber };

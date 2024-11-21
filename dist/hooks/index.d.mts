import * as zustand from 'zustand';
import { TObject } from 'akeyless-types-commons';
import { ReactNode } from 'react';

declare function useSafeEffect(callback: () => void, dependencies: any[], error_message?: string): void;
declare const useDocumentTitle: (title: string) => any;

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
    headerStyle?: React.CSSProperties;
    headerCellStyle?: React.CSSProperties;
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
}

declare const useTableContext: () => TableProps & TableProviderType;
declare const useFilter: ({ data, filterableColumns }: UseFilterProps) => {
    filters: TObject<string[]>;
    filterPopupsDisplay: string;
    filterOptions: Record<string, any[]>;
    handleFilterChange: (dataKey: string, value: string) => void;
    handleFilterClick: (dataKey: string) => void;
    closeFilterWindow: () => void;
    clearFilter: () => void;
};
type SortOptions = "asc" | "desc";
declare const useSort: () => {
    sortColumn: number;
    sortOrder: SortOptions;
    handleSort: (columnIndex: number) => void;
    clearSort: () => void;
};
declare const useSearch: () => {
    searchQuery: string;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    clearSearch: () => void;
};
declare const useCreateTableStore: () => zustand.UseBoundStore<zustand.StoreApi<any>>;

export { useCreateTableStore, useDocumentTitle, useFilter, useSafeEffect, useSearch, useSort, useTableContext };

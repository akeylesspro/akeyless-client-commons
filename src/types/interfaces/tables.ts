import { TObject } from "akeyless-types-commons";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { Direction } from "../types";

interface FilterableColumn {
    header: string;
    dataKey: string;
    ui?: (value: any) => ReactNode;
}
export interface TableProviderType {
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
export interface UseFilterProps {
    data: Record<string, any>[];
    dataToRender: Record<string, any>[];
    setDataToRender: Dispatch<SetStateAction<Record<string, any>[]>>;
    filterableColumns: FilterableColumn[];
    includeSearch?: boolean;
    searchQuery: string;
    keysToRender: string[];
    sortColumn: number | null;
    sortOrder: "asc" | "desc" | null;
    sortKeys: string[];
}
export interface TableProps {
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
    filterableColumns?: { header: string; dataKey: string; ui?: (value: any) => ReactNode }[];
    sortKeys?: string[];
    exportToExcelKeys?: string[];
    excelFileName?: string;
    dataToAddToExcelTable?: { key: string; value: any; header: string }[];
    sumColumns?: { label: string; dataKey: string; ui?: (value: any) => ReactNode }[];
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

export interface FilterProps {
    index: number;
    filterableColumn: FilterableColumn;
}

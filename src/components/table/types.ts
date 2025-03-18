import { TObject } from "akeyless-types-commons";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { Direction } from "../../types";

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
    display: boolean;
    setDisplay: (value: boolean) => void;
}
export interface UseFilterProps {
    data: Record<string, any>[];
    filterableColumns: FilterableColumn[];
}
export interface TableProps {
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
    searchContainerClassName?: string;
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
    filterableColumns?: { header: string; dataKey: string; ui?: (value: any) => ReactNode }[];
    sortKeys?: string[];
    exportToExcelKeys?: string[];
    excelFileName?: string;
    exportExcelContent?: ReactNode;
    exportToExcelClassName?: string;
    dataToAddToExcelTable?: { key: string; value: any; header: string }[];
    sumColumns?: { label: string; dataKey: string; ui?: (value: any) => ReactNode }[];
    searchPlaceHolder?: string;
    summaryContainerStyle?: React.CSSProperties;
    summaryLabelStyle?: React.CSSProperties;
    summaryRowStyle?: React.CSSProperties;
    summaryLabel?: string;
    filterLabel?: string;
    sortLabel?: string;
    exportExcelTitle?: string;
    onRowClick?: (data?: any) => void;
    direction?: Direction;
    maxRows?: number;
    maxRowsLabel1?: string;
    maxRowsLabel2?: string;
    ShowDisplayButton?: boolean;
    maxRowsContainerClassName?: string;
    zebraStriping?: {
        oddRowClassName?: string;
        evenRowClassName?: string;
    };
}

export interface FilterProps {
    index: number;
    filterableColumn: FilterableColumn;
}

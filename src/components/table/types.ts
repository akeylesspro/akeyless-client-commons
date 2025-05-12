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
    displayAllRows: boolean;
    setDisplayAllRows: (value: boolean) => void;
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
    tableBodyClassName?: string;
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
    excelHeadline?: string;
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
    onRowClick?: (data?: any, rowIndex?: number) => void;
    direction?: Direction;
    maxRows?: number;
    maxRowsLabel1?: string;
    maxRowsLabel2?: string;
    showDisplayAllRowsButton?: boolean;
    displayAllRowsButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    displayAllRowsButtonLabel?: string;
    maxRowsContainerClassName?: string;
    zebraStriping?: {
        oddRowClassName?: string;
        evenRowClassName?: string;
    };
    selectedRow?: {
        className?: string;
        rowIndex?: number | null;
        onChange?: (rowIndex: number) => void;
    };
    rowClassNameFunction?: (data?: any) => string;
    noneSearchKeys?: string[];
}

export interface FilterProps {
    index: number;
    filterableColumn: FilterableColumn;
}

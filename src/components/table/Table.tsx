import React, { createContext, useContext, useEffect, useState } from "react";
import { ExportToExcel, Search, Summary, TableHead, TableRow, TableBody } from "./utils";
import { TableProps, TableProviderType } from "../../types";
import { TObject } from "akeyless-types-commons";
import { useFilter, useSort, useSearch } from "../../hooks";

export const TableContext = createContext<(TableProps & TableProviderType) | null>(null);

export const TableProvider = (props: TableProps & { children: React.ReactNode }) => {
    const {
        // basic props
        data,
        headers,
        optionalElement,
        keysToRender = [],
        direction = "ltr",
        onRowClick = (data) => {},
        // container styles props
        containerStyle,
        containerClassName = "",
        tableContainerClass = "",
        tableContainerStyle = {},
        tableStyle = {},
        rowStyles = {},
        cellStyle = {},
        // header styles
        headerStyle = {},
        headerCellStyle,
        searchInputStyle = {},
        searchInputClassName = "",
        // search
        includeSearch,
        searchPlaceHolder = "Search in table ...",
        // sort
        sortKeys,
        sortLabel = "Sort by",
        // filter
        filterableColumns = [],
        filterLabel = "Filter by",
        // export to excel
        exportToExcelKeys,
        dataToAddToExcelTable,
        exportExcelLabel = "Export to excel",
        excelFileName,
        // summary
        sumColumns,
        summaryLabel = "",
        summaryContainerStyle = {},
        summaryLabelStyle = {},
        summaryRowStyle = {},
    } = props;
    // rendered data
    const [dataToRender, setDataToRender] = useState<TObject<any>[]>(data);
    //
    const { sortColumn, sortOrder, handleSort } = useSort();
    const { searchQuery, handleSearch } = useSearch();
    const { filters, filterPopupsDisplay, filterOptions, handleFilterChange, handleFilterClick } = useFilter({
        data,
        dataToRender,
        setDataToRender,
        filterableColumns,
        includeSearch,
        searchQuery,
        sortColumn,
        sortOrder,
        keysToRender,
        sortKeys,
    });
    const providerValues = {
        ...props,
        //
        direction,
        keysToRender,
        filterableColumns,
        //
        sortColumn,
        sortOrder,
        handleSort,
        searchQuery,
        handleSearch,
        dataToRender,
        filters,
        filterPopupsDisplay,
        filterOptions,
        handleFilterChange,
        handleFilterClick,
    };
    return (
        <TableContext.Provider value={providerValues}>
            <div className={`flex flex-col gap-2 ${containerClassName}`} style={containerStyle}>
                {props.children}
            </div>
        </TableContext.Provider>
    );
};

export const Table = (props: TableProps) => {
    const {
        containerStyle = {},
        optionalElement,
        containerClassName = "",
        tableContainerClass = "",
        tableContainerStyle = {},
        tableStyle = {},
        includeSearch,
        exportToExcelKeys,
        sumColumns,
    } = props;
    return (
        <TableProvider {...props}>
            {/* container header */}
            <div className="flex justify-start gap-2 ">
                {/* search */}
                {includeSearch && <Search render={false} />}
                {/* export to excel */}
                {exportToExcelKeys && <ExportToExcel render={false} />}
                {/* optional element */}
                {optionalElement && optionalElement}
            </div>
            {/* table */}
            <div style={tableContainerStyle} className={`animate-slide-in-up overflow-y-auto  ${tableContainerClass}`}>
                <table style={tableStyle} className="min-w-full text-sm font-light relative">
                    <TableHead />
                    <TableBody render={false} />
                </table>
            </div>
            {/* summary */}
            {sumColumns && <Summary render={false} />}
        </TableProvider>
    );
};

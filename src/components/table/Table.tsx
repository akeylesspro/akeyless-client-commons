import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ExportToExcel, Search, Summary, TableHead, TableRow, TableBody, MaxRowsLabel } from "./utils";
import { TableProps, TableProviderType } from "../../types";
import { TObject } from "akeyless-types-commons";
import { useFilter, useSort, useSearch } from "../../hooks";
import { TableSCN } from "../ui/table";

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
        //  max rows
        maxRows = data.length,
    } = props;
    // rendered data

    const { sortColumn, sortOrder, handleSort } = useSort();
    const { searchQuery, handleSearch } = useSearch();
    const { filters, filterPopupsDisplay, filterOptions, handleFilterChange, handleFilterClick } = useFilter({
        data,
        filterableColumns,
    });

    const dataToRender = useMemo(() => {
        let filtered = dataToRender;
        if (includeSearch) {
            filtered = data.filter((item) => keysToRender.some((key) => item[key]?.toString().toLowerCase().includes(searchQuery.toLowerCase())));
        }
        if (filterableColumns.length > 0) {
            Object.keys(filters).forEach((key) => {
                if (filters[key].length > 0) {
                    filtered = filtered.filter((item) => filters[key].includes(item[key]));
                }
            });
        }
        if (sortColumn !== null && sortOrder !== null && sortKeys?.length) {
            filtered = filtered.sort((a, b) => {
                const aValue = a[sortKeys[sortColumn]];
                const bValue = b[sortKeys[sortColumn]];
                if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
                if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
                return 0;
            });
        }
        return filtered;
    }, [searchQuery, sortColumn, sortOrder, filters, data]);

    const providerValues = {
        ...props,
        // props with default values
        direction,
        keysToRender,
        filterableColumns,
        maxRows,
        // states and functions
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
            <div className={`flex flex-col gap-2 ${containerClassName}`} style={{ ...containerStyle, direction: direction }}>
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
        direction,
        maxRowsLabel1,
        maxRowsLabel2
    } = props;
    return (
        <TableProvider {...props}>
            {/* container header */}
            <div style={{ direction: direction }} className="flex justify-start gap-2 ">
                {/* search */}
                {includeSearch && <Search render={false} />}
                {/* export to excel */}
                {exportToExcelKeys && <ExportToExcel render={false} />}
                {/* max rows */}
                {maxRowsLabel1 && maxRowsLabel2 && <MaxRowsLabel />}
                {/* optional element */}
                {optionalElement && optionalElement}
            </div>
            {/* table */}
            <div style={{ ...tableContainerStyle, direction: direction }} className={`animate-slide-in-up overflow-y-auto  ${tableContainerClass}`}>
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

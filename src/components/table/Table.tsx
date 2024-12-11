import React, { createContext, useMemo, useRef, useState, useContext, useEffect } from "react";
import { ExportToExcel, Search, Summary, TableHead, TableRow, TableBody, MaxRowsLabel } from "./components";
import { TableProps, TableProviderType } from "../../types";
import { TObject } from "akeyless-types-commons";
import { useFilter, useSort, useSearch } from "./hooks";
import { TableSCN } from "../ui/table";
import { cn } from "@/lib/utils";
import { isEqual } from "lodash";

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
        // row style
        rowStyles = {},
        rowClassName,
        // cell style
        cellClassName,
        cellStyle = {},
        // header styles
        headerStyle = {},
        headerCellStyle,
        searchInputStyle = {},
        // search
        searchInputClassName = "",
        includeSearch,
        searchPlaceHolder,
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

    const { sortColumn, sortOrder, handleSort, clearSort } = useSort();
    const { searchQuery, handleSearch, clearSearch,deferredSearchQuery } = useSearch();
    const { filters, filterPopupsDisplay, filterOptions, handleFilterChange, handleFilterClick, closeFilterWindow, clearFilter } = useFilter({
        data,
        filterableColumns,
    });
    const allKeys = useMemo(() => {
        return Array.from(
            data.reduce<Set<string>>((keys, obj) => {
                Object.keys(obj).forEach((key) => keys.add(key));
                return keys;
            }, new Set<string>())
        );
    }, [data]);

    const dataToRender = useMemo(() => {
        let filtered = data;
        // search
        if (includeSearch && deferredSearchQuery.length > 0) {
            filtered = data.filter((item) => allKeys.some((key) => item[key]?.toString().toLowerCase().includes(deferredSearchQuery.toLowerCase())));
            // clearFilter();
            // clearSort();
        }
        // filter
        if (filterableColumns.length > 0 && filterPopupsDisplay !== "") {
            console.log("filtering ...");
            Object.keys(filters).forEach((key) => {
                if (filters[key].length > 0) {
                    filtered = filtered.filter((item) => filters[key].includes(item[key]));
                }
            });
            // clearSearch();
            // clearSort();
        }
        // sort
        if (sortColumn !== null && sortOrder !== null && sortKeys?.length > 0) {
            console.log("sorting ...");
            filtered = filtered.sort((a, b) => {
                const aValue = a[sortKeys[sortColumn]];
                const bValue = b[sortKeys[sortColumn]];
                if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
                if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
                return 0;
            });
            // clearFilter();
            // clearSearch();
        }
        const renderedData = filtered.length > maxRows ? filtered.slice(0, maxRows) : filtered;

        return { renderedData, filtered };
    }, [deferredSearchQuery, sortColumn, sortOrder, filters, data]);

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
        deferredSearchQuery,
        handleSearch,
        dataToRender,
        filters,
        filterPopupsDisplay,
        filterOptions,
        handleFilterChange,
        handleFilterClick,
        closeFilterWindow,
    };

    return (
        <TableContext.Provider value={providerValues}>
            <div className={`flex flex-col gap-2 ${containerClassName}`} style={{ ...containerStyle, direction: direction }}>
                {props.children}
            </div>
        </TableContext.Provider>
    );
};

const TableBase = (props: TableProps) => {
    const {
        containerHeaderClassName,
        optionalElement,
        tableContainerClass,
        tableContainerStyle,
        tableStyle,
        includeSearch,
        exportToExcelKeys,
        sumColumns,
        direction,
        maxRowsLabel1,
        maxRowsLabel2,
    } = props;
    return (
        <TableProvider {...props}>
            {/* container header */}
            <div style={{ direction: direction }} className={cn("flex justify-start items-center gap-2", containerHeaderClassName || "")}>
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
            <div
                style={{ ...(tableContainerStyle || {}), direction: direction }}
                className={`animate-slide-in-up overflow-y-auto  ${tableContainerClass || ""}`}
            >
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
const areEqual = (prevProps: TableProps, nextProps: TableProps) => isEqual(prevProps, nextProps);

const Table = React.memo(TableBase, areEqual);
Table.displayName = "Table";
export { Table };

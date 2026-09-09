import React, { createContext, useLayoutEffect, useMemo, useRef, useState } from "react";
import { ExportToExcel, Search, Summary, TableHead, TableBody, MaxRowsLabel, DisplayAllRowsButton } from "./components";
import { TableProps, TableProviderType } from "./types";
import { useFilter, useSort, useSearch, useDisplayToggle } from "./hooks";
import { cn } from "@/lib/utils";
export const TableContext = createContext<(TableProps & TableProviderType) | null>(null);

export const TableProvider = (props: TableProps & { children: React.ReactNode; scrollElementRef: React.RefObject<HTMLDivElement> }) => {
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
        defaultSearchQuery,
        searchPlaceHolder,
        autoFocus = true,
        // sort
        sortKeys,
        sortLabel = "Sort by",
        // filter
        filterableColumns = [],
        filterLabel = "Filter by",
        // export to excel
        exportToExcelKeys,
        dataToAddToExcelTable,
        exportExcelTitle = "Export to excel",
        excelFileName,
        // summary
        sumColumns,
        summaryLabel = "",
        summaryContainerStyle = {},
        summaryLabelStyle = {},
        summaryRowStyle = {},
        //  max rows
        maxRows = data.length,
        noneSearchKeys = [],
        showDisplayAllRowsButton,
    } = props;

    // rendered data

    const { sortColumn, sortOrder, handleSort, clearSort } = useSort();
    const { displayAllRows, setDisplayAllRows } = useDisplayToggle();
    const { searchQuery, handleSearch, debouncedSearchQuery } = useSearch(300, defaultSearchQuery);
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
        if (includeSearch && debouncedSearchQuery.trim().length > 0) {
            const cleanString = (str: string) => String(str).toLowerCase().trim();

            const keys = allKeys.filter((val) => !noneSearchKeys.includes(val));
            const terms = debouncedSearchQuery
                .split("+")
                .map((t) => cleanString(t))
                .filter(Boolean);

            filtered = data.filter((item) => terms.every((term) => keys.some((key) => cleanString(item?.[key] ?? "").includes(term))));
        }
        // filter
        if (filterableColumns.length > 0 && Object.values(filters).some((arr) => Array.isArray(arr) && arr.length > 0)) {
            Object.keys(filters).forEach((key) => {
                if (filters[key].length > 0) {
                    filtered = filtered.filter((item) => filters[key].includes(item[key]));
                }
            });
        }
        // sort
        if (sortColumn !== null && sortOrder !== null && sortKeys?.length > 0) {
            filtered = [...filtered].sort((a, b) => {
                const aValue = a[sortKeys[sortColumn]];
                const bValue = b[sortKeys[sortColumn]];
                if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
                if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
                return 0;
            });
        }
        const renderedData = !displayAllRows && filtered.length > maxRows ? filtered.slice(0, maxRows) : filtered;

        return { renderedData, filtered };
    }, [debouncedSearchQuery, sortColumn, sortOrder, filters, data, displayAllRows, noneSearchKeys, filterableColumns, maxRows, sortKeys, includeSearch, allKeys]);

    const providerValues = {
        ...props,
        // props with default values
        direction,
        keysToRender,
        filterableColumns,
        maxRows,
        // states and functions
        displayAllRows,
        setDisplayAllRows,
        sortColumn,
        sortOrder,
        handleSort,
        searchQuery,
        deferredSearchQuery: debouncedSearchQuery,
        handleSearch,
        autoFocus,
        dataToRender,
        filters,
        filterPopupsDisplay,
        filterOptions,
        handleFilterChange,
        handleFilterClick,
        closeFilterWindow,
        clearFilter,
        };
    const gapClassName = Boolean(includeSearch || exportToExcelKeys || showDisplayAllRowsButton || optionalElement);
    return (
        <TableContext.Provider value={providerValues}>
            <div
                className={cn(`flex flex-col w-full h-full`, gapClassName ? "gap-2" : "", containerClassName)}
                style={{ ...containerStyle, direction: direction }}
            >
                {props.children}
            </div>
        </TableContext.Provider>
    );
};

const TableBase = (props: TableProps) => {
    const {
        showDisplayAllRowsButton = false,
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
        searchContainerClassName,
    } = props;
    const scrollElementRef = useRef<HTMLDivElement>(null);
    const columnWidths = useLockedColumnWidths(scrollElementRef, props.headers, props.data.length > 0);
    return (
        <TableProvider {...props} scrollElementRef={scrollElementRef}>
            {/* container header */}
            <div style={{ direction: direction }} className={cn("flex justify-between items-center gap-2", containerHeaderClassName || "")}>
                <div className={cn("flex justify-start items-center gap-2", searchContainerClassName)}>
                    {/* search */}
                    {includeSearch && <Search />}
                    {/* export to excel */}
                    {exportToExcelKeys && <ExportToExcel />}
                    {/* showDisplayAllRowsButton */}
                    {showDisplayAllRowsButton && <DisplayAllRowsButton />}
                    {/* optional element */}
                    {optionalElement && optionalElement}
                </div>
                {/* max rows */}
                {maxRowsLabel1 && maxRowsLabel2 && <MaxRowsLabel />}
            </div>
            {/* table */}
            <div
                ref={scrollElementRef}
                style={{ ...(tableContainerStyle || {}), direction: direction }}
                className={cn(`animate-slide-in-up overflow-y-auto`, tableContainerClass || "")}
            >
                <table
                    style={{ ...tableStyle, ...(columnWidths ? { tableLayout: "fixed", width: sum(columnWidths) } : {}) }}
                    className="min-w-full text-sm relative"
                >
                    {columnWidths && (
                        <colgroup>
                            {columnWidths.map((width, index) => (
                                <col key={index} style={{ width }} />
                            ))}
                        </colgroup>
                    )}
                    <TableHead />
                    <TableBody />
                </table>
            </div>
            {/* summary */}
            {sumColumns && <Summary />}
        </TableProvider>
    );
};
const sum = (values: number[]) => values.reduce((total, value) => total + value, 0);

// Virtualized rows change on every scroll; with auto table layout the column widths would follow them and the
// sticky header would shift. Measure the auto layout once per (headers, container width, first data) and pin it.
const useLockedColumnWidths = (scrollElementRef: React.RefObject<HTMLDivElement>, headers: string[], hasData: boolean) => {
    const [columnWidths, setColumnWidths] = useState<number[] | null>(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const headersKey = headers.join(" ");

    useLayoutEffect(() => {
        const element = scrollElementRef.current;
        if (!element || typeof ResizeObserver === "undefined") return;
        const observer = new ResizeObserver(() => setContainerWidth(element.clientWidth));
        observer.observe(element);
        return () => observer.disconnect();
    }, [scrollElementRef]);

    useLayoutEffect(() => {
        setColumnWidths(null);
    }, [headersKey, containerWidth, hasData]);

    useLayoutEffect(() => {
        if (columnWidths || !hasData) return;
        const headerCells = scrollElementRef.current?.querySelectorAll("thead th");
        if (!headerCells?.length) return;
        setColumnWidths(Array.from(headerCells, (cell) => cell.getBoundingClientRect().width));
    }, [columnWidths, hasData, scrollElementRef]);

    return columnWidths;
};

const areEqual = (prevProps: TableProps, nextProps: TableProps) => {
    const prevKeys = Object.keys(prevProps) as (keyof TableProps)[];
    const nextKeys = Object.keys(nextProps) as (keyof TableProps)[];
    return prevKeys.length === nextKeys.length && prevKeys.every((key) => Object.is(prevProps[key], nextProps[key]));
};

const Table = React.memo(TableBase, areEqual);
Table.displayName = "Table";
export { Table };

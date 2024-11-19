import { useContext, useEffect, useMemo, useState } from "react";
import { TableContext } from "../components";
import { TObject } from "akeyless-types-commons";
import { UseFilterProps } from "../types";
import { create } from "zustand";
import { setState } from "../helpers";

export const useTableContext = () => {
    const context = useContext(TableContext);
    if (!context) {
        throw new Error("useTableContext must be used within a Table component");
    }
    return context;
};

export const useFilter = ({
    data,
    filterableColumns,

}: UseFilterProps) => {
    const initFilter = filterableColumns.reduce((acc, col) => ({ ...acc, [col.dataKey]: [] }), {});
    const [filters, setFilters] = useState<TObject<string[]>>(initFilter);
    const [filterPopupsDisplay, setFilterPopupsDisplay] = useState<string>("");
    const filterOptions = filterableColumns.reduce((acc: Record<string, any[]>, col) => {
        acc[col.dataKey] = Array.from(new Set(data.map((item) => item[col.dataKey])));
        return acc;
    }, {});


    const handleFilterChange = (dataKey: string, value: string) => {
        const newFilters = { ...filters };
        console.log("data from filter", { filters, newFilters, dataKey, value });

        if (newFilters[dataKey].includes(value)) {
            newFilters[dataKey] = newFilters[dataKey].filter((item) => item !== value);
        } else {
            newFilters[dataKey].push(value);
        }
        setFilters(newFilters);
    };
    const clearFilter = () => {
        setFilters(initFilter);
    };
    const handleFilterClick = (dataKey: string) => {
        setFilterPopupsDisplay((prev) => {
            if (prev === dataKey) {
                clearFilter();
                return "";
            }
            return dataKey;
        });
    };
    return {
        filters,
        filterPopupsDisplay,
        filterOptions,
        handleFilterChange,
        handleFilterClick,
    };
};
type SortOptions = "asc" | "desc";
export const useSort = () => {
    const [sortColumn, setSortColumn] = useState<number | null>(null);
    const [sortOrder, setSortOrder] = useState<SortOptions | null>(null);
    const handleSort = (columnIndex: number) => {
        let newSortOrder: SortOptions = "asc";
        if (sortColumn === columnIndex && sortOrder === "asc") {
            newSortOrder = "desc";
        }
        setSortColumn(columnIndex);
        setSortOrder(newSortOrder);
    };
    return { sortColumn, sortOrder, handleSort };
};
export const useSearch = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };
    return { searchQuery, handleSearch };
};

export const useCreateTableStore = () => {
    return create<any>((set) => ({}));
};

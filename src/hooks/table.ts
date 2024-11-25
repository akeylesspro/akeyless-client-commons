import { useContext, useEffect, useMemo, useState, useTransition } from "react";
import { TableContext } from "../components";
import { TObject } from "akeyless-types-commons";
import { UseFilterProps } from "../types";
import { create } from "zustand";
import { setState } from "../helpers";
import { isEqual } from "lodash";
export const useTableContext = () => {
    const context = useContext(TableContext);
    if (!context) {
        throw new Error("useTableContext must be used within a Table component");
    }
    return context;
};

export const useFilter = ({ data, filterableColumns }: UseFilterProps) => {
    const initFilter = filterableColumns.reduce((acc, col) => ({ ...acc, [col.dataKey]: [] }), {});
    const [filters, setFilters] = useState<TObject<string[]>>(initFilter);
    const [filterPopupsDisplay, setFilterPopupsDisplay] = useState<string>("");

    const filterOptions = filterableColumns.reduce((acc: Record<string, any[]>, col) => {
        acc[col.dataKey] = Array.from(new Set(data.map((item) => item[col.dataKey])));
        return acc;
    }, {});

    const handleFilterChange = (dataKey: string, value: string) => {
        const newFilters = { ...filters };
        if (newFilters[dataKey].includes(value)) {
            newFilters[dataKey] = newFilters[dataKey].filter((item) => item !== value);
        } else {
            newFilters[dataKey].push(value);
        }
        setFilters(newFilters);
    };
    const clearFilter = () => {
        if (!isEqual(filters, initFilter)) {
            setFilters(initFilter);
        }
    };
    const handleFilterClick = (dataKey: string) => {
        setFilterPopupsDisplay((prev) => {
            if (prev === dataKey) {
                setFilters(initFilter);
                return "";
            }
            return dataKey;
        });
    };
    const closeFilterWindow = () => {
        setFilterPopupsDisplay("");
    };
    return {
        filters,
        filterPopupsDisplay,
        filterOptions,
        handleFilterChange,
        handleFilterClick,
        closeFilterWindow,
        clearFilter,
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
    const clearSort = () => {
        if (sortColumn) {
            setSortColumn(null);
        }
        if (sortOrder) {
            setSortOrder(null);
        }
    };
    return { sortColumn, sortOrder, handleSort, clearSort };
};

export const useSearch = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [isPending, startTransition] = useTransition();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        startTransition(() => {
            setSearchQuery(value);
        });
    };

    const clearSearch = () => {
        if (searchQuery) {
            startTransition(() => {
                setSearchQuery("");
            });
        }
    };

    return { searchQuery, handleSearch, clearSearch, isPending };
};

export const useCreateTableStore = () => {
    return create<any>((set) => ({}));
};

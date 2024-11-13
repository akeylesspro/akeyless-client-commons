import { useContext, useEffect, useState } from "react";
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
    dataToRender,
    setDataToRender,
    filterableColumns,
    includeSearch,
    searchQuery,
    keysToRender,
    sortColumn,
    sortOrder,
    sortKeys,
}: UseFilterProps) => {
    const initFilter = filterableColumns.reduce((acc, col) => ({ ...acc, [col.dataKey]: [] }), {});
    const [filters, setFilters] = useState<TObject<string[]>>(initFilter);
    const [filterPopupsDisplay, setFilterPopupsDisplay] = useState<string>("");
    const filterOptions = filterableColumns.reduce((acc: Record<string, any[]>, col) => {
        acc[col.dataKey] = Array.from(new Set(data.map((item) => item[col.dataKey])));
        return acc;
    }, {});
    useEffect(() => {
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
        setDataToRender(filtered);
    }, [searchQuery, sortColumn, sortOrder, filters, data]);

    const handleFilterChange = (dataKey: string, value: string) => {
        const newFilters = { ...filters };
        console.log("data from filter", {filters,newFilters,dataKey,value});
        
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

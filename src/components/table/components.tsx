import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import React, { memo, useMemo } from "react";
import { emptyFilterSvg, exportToExcelSvg, RedXSvg, RedXSvg2, slashFilterSvg, sortSvg } from "../../assets";
import { FilterProps } from "../../types";
import { TObject } from "akeyless-types-commons";
import { TableBodySCN, TableCellSCN, TableHeaderSCN, TableHeadSCN, TableRowSCN } from "../ui/table";
import { cn } from "@/lib/utils";
import { useTableContext } from "./hooks";

export const getFixedNumber = (number = 0, fix = 4) => {
    const sum_value = number % 1 === 0 ? number : number.toFixed(fix).replace(/\.?0+$/, "");
    return String(sum_value);
};

export const TableRow = ({ item }: { item: TObject<any> }) => {
    const { rowStyles, rowClassName, keysToRender, onRowClick } = useTableContext();

    return (
        <tr
            className={cn("hover:bg-[#808080] hover:text-[#fff]", rowClassName || "")}
            onClick={() => onRowClick && onRowClick(item)}
            style={rowStyles}
        >
            {keysToRender.map((key, index) => (
                <TableCell key={index} value={item[key]} />
            ))}
        </tr>
    );
};

export const TableCell = ({ value }: { value: any }) => {
    const { cellStyle, cellClassName } = useTableContext();
    return (
        <td
            title={["string", "number", "boolean"].includes(typeof value) ? value : ""}
            style={cellStyle}
            className={cn("chivo ellipsis border-black border-[1px] max-w-[90px] px-[4px] text-center", cellClassName || "")}
        >
            {value}
        </td>
    );
};

export const TableHead = memo((props: any) => {
    const {
        headers,
        headerStyle,
        headerCellStyle,
        sortColumn,
        handleSort,
        sortKeys,
        sortOrder,
        filterableColumns = [],
        sortLabel,
    } = useTableContext();
    const sortDisplay = useMemo<boolean>(() => Boolean(sortKeys?.length), [sortKeys]);
    return (
        <thead className="bg-[#282828] text-white sticky top-0">
            <tr style={headerStyle}>
                {headers.map((header, index) => {
                    const filterableColumn = filterableColumns.find((col) => col.header === header);
                    return (
                        <th
                            title={sortDisplay ? `${sortLabel} ${header}` : header}
                            style={headerCellStyle}
                            key={index}
                            className=" border-black border-[1px] max-w-[130px] px-2 text-center relative"
                        >
                            {/* header value */}
                            <div className={`px-2 ${sortDisplay ? "cursor-pointer" : ""}`} onClick={() => sortDisplay && handleSort(index)}>
                                {header}
                            </div>
                            {/* sort */}
                            {sortDisplay && sortColumn === index && (sortOrder === "asc" ? <>{sortSvg()}</> : <>{sortSvg(true)}</>)}
                            {/* filter */}
                            {filterableColumn && <Filter filterableColumn={filterableColumn} index={index} />}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
});

export const TableBody = memo((props: any) => {
    const { dataToRender } = useTableContext();
    return (
        <tbody>
            {dataToRender.renderedData.map((item, index) => (
                <TableRow key={index} item={item} />
            ))}
        </tbody>
    );
});

export const Filter = memo<FilterProps>(({ filterableColumn, index }) => {
    const { direction, headers, filters, filterOptions, filterPopupsDisplay, handleFilterChange, handleFilterClick, closeFilterWindow, filterLabel } =
        useTableContext();
    const displayRight = (direction === "rtl" && index === headers.length - 1) || (direction === "ltr" && index !== headers.length - 1);

    return (
        <div className="absolute top-1 right-1 ">
            {/* filter button */}
            <button
                title={filterLabel + " " + filterableColumn.header}
                className="text-[12px]"
                onClick={() => handleFilterClick(filterableColumn.dataKey)}
            >
                {filterPopupsDisplay === filterableColumn.dataKey ? (
                    <>{filters[filterableColumn.dataKey]?.length > 0 ? <>{slashFilterSvg(true)}</> : <>{emptyFilterSvg(true)}</>}</>
                ) : (
                    <>{filters[filterableColumn.dataKey]?.length > 0 ? <>{slashFilterSvg()}</> : <>{emptyFilterSvg()}</>}</>
                )}
            </button>
            {/* filter popup */}
            <div className="relative">
                {filterPopupsDisplay === filterableColumn.dataKey && (
                    <div
                        className={`absolute top-[-20px] z-20 ${
                            displayRight ? " left-[100%]" : "right-[100%]"
                        } w-44 h-52 text-black bg-white p-1 flex flex-col items-center gap-2 shadow`}
                    >
                        <div className="flex justify-between items-center border-black border-b-[1px] w-[90%]">
                            <div className="text-start">{filterLabel + " " + filterableColumn.header}</div>
                            <button onClick={closeFilterWindow}>
                                <RedXSvg2 />
                            </button>
                        </div>
                        <div className="overflow-auto h-[80%] flex flex-col gap-1 w-full cursor-pointer ">
                            {filterOptions[filterableColumn.dataKey]?.map((option: string, i: number) => (
                                <div key={i} className="flex items-center px-2 justify-start hover:bg-[#547f22] hover:text-white">
                                    <input
                                        type="checkbox"
                                        className="cursor-pointer"
                                        checked={filters[filterableColumn.dataKey]?.includes(option)}
                                        onChange={() => handleFilterChange(filterableColumn.dataKey, option)}
                                    />
                                    <button className="flex-1 text-start px-2" onClick={() => handleFilterChange(filterableColumn.dataKey, option)}>
                                        {filterableColumn.ui ? filterableColumn.ui(option) : option}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
});

export const MaxRowsLabel = memo((props: any) => {
    const { data, dataToRender, maxRowsLabel1, maxRowsLabel2, maxRows, maxRowsContainerClassName } = useTableContext();
    return (
        <div className={cn("flex justify-start items-center text-lg gap-1", maxRowsContainerClassName || "")}>
            <div>{maxRowsLabel1}</div>
            <div>{maxRows > dataToRender.renderedData.length ? dataToRender.renderedData.length : maxRows}</div>
            <div>{maxRowsLabel2}</div>
            <div>{dataToRender.filtered.length}</div>
        </div>
    );
});

export const ExportToExcel = memo((props: any) => {
    const { exportToExcelKeys, dataToAddToExcelTable, excelFileName, dataToRender, headers, sumColumns, exportExcelLabel } = useTableContext();
    const addPropertiesToExcel = (properties: { key: string; value: any; header: string }[]) => {
        let newData = [...dataToRender.renderedData];
        let newHeaders = [...headers];
        properties.forEach((val) => {
            newHeaders.unshift(val.header);
            newData = newData.map((v) => ({ ...v, [val.key]: val.value }));
        });
        return { data: newData, headers: newHeaders };
    };

    const onExportExcelClick = async (): Promise<void> => {
        if (exportToExcelKeys) {
            // create worksheet
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet("Sheet1");
            const dataToExport = dataToAddToExcelTable ? addPropertiesToExcel(dataToAddToExcelTable) : { data: dataToRender.renderedData, headers };
            // add rows
            worksheet.addRow(dataToExport.headers);
            dataToExport.data.forEach((item: Record<string, any>) => {
                const row = exportToExcelKeys.map((key: string) => item[key]);
                worksheet.addRow(row);
            });
            // summary
            if (sumColumns) {
                sumColumns.forEach((val) => {
                    const sumRow = worksheet.addRow([]);
                    sumRow.getCell(1).value = val.label;
                    const value = dataToRender.renderedData
                        .reduce((acc, v) => {
                            return acc + Number(v[val.dataKey]) || 0;
                        }, 0)
                        .toFixed(2);
                    sumRow.getCell(2).value = value;
                });
            }
            // download file
            const buffer = await workbook.xlsx.writeBuffer();
            const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
            saveAs(blob, `${excelFileName || "table_data"}.xlsx`);
        }
    };
    return (
        <button onClick={onExportExcelClick} title={exportExcelLabel} className="px-2 py-[2px]  bg-[#547f22] text-white rounded-lg text-[16px]">
            {exportToExcelSvg()}
        </button>
    );
});

export const Search = memo((props: any) => {
    const { searchQuery, handleSearch, searchPlaceHolder, searchInputClassName, searchInputStyle } = useTableContext();
    return (
        <input
            className={cn("w-40 border-black border-[1px] text-lg px-2 ", searchInputClassName)}
            type="text"
            placeholder={searchPlaceHolder}
            value={searchQuery}
            onChange={handleSearch}
            style={searchInputStyle}
        />
    );
});

export const Summary = memo((props: any) => {
    const { summaryContainerStyle, summaryLabelStyle, summaryLabel, summaryRowStyle, sumColumns, dataToRender, direction } = useTableContext();

    return (
        <div
            style={{ ...summaryContainerStyle, direction: direction }}
            className="w-full h-8 flex justify-between items-center px-3 text-[18px] font-bold"
        >
            <div style={summaryLabelStyle}>{summaryLabel}</div>
            <div style={summaryRowStyle} className="flex gap-3">
                {sumColumns.map((val) => {
                    const sum_res = dataToRender.renderedData.reduce((acc, v) => acc + Number(v[val.dataKey]) || 0, 0);
                    const sum_value = getFixedNumber(sum_res);
                    return (
                        <div key={val.dataKey + val.label} className="flex gap-1 justify-start">
                            <div>{val.label}</div>
                            <span>:</span>
                            <div>{val.ui ? val.ui(sum_value) : sum_value}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
});

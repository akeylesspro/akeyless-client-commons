import React, { memo, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { emptyFilterSvg, exportToExcelSvg, RedXSvg2, slashFilterSvg, sortSvg } from "../../assets";
import { FilterProps } from "./types";
import { Geo, TObject } from "akeyless-types-commons";
import { cn } from "@/lib/utils";
import { useTableContext } from "./hooks";
import { getFixedNumber, getLocationUrl, renderOnce } from "src/helpers";
import { timestamp_to_string } from "src/helpers/time_helpers";
import { Button } from "../ui";
import { Direction } from "src/types";
import { exportToExcel } from "src/helpers/excel";

/// filter
export const Filter = memo<FilterProps>(({ filterableColumn, index }) => {
    const {
        direction,
        headers,
        filters,
        filterOptions,
        filterPopupsDisplay,
        handleFilterChange,
        handleFilterClick,
        closeFilterWindow,
        filterLabel,
        clearFilter,
    } = useTableContext();

    const displayRight = (direction === "rtl" && index === headers.length - 1) || (direction === "ltr" && index !== headers.length - 1);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);

    useEffect(() => {
        const updateRect = () => {
            if (buttonRef.current) {
                setAnchorRect(buttonRef.current.getBoundingClientRect());
            }
        };
        if (filterPopupsDisplay === filterableColumn.dataKey) {
            updateRect();
            window.addEventListener("resize", updateRect);
            window.addEventListener("scroll", updateRect, true);
        }
        return () => {
            window.removeEventListener("resize", updateRect);
            window.removeEventListener("scroll", updateRect, true);
        };
    }, [filterPopupsDisplay, filterableColumn.dataKey]);

    return (
        <div className="absolute top-1 right-1 ">
            {/* filter button */}
            <button
                title={filterLabel + " " + filterableColumn.header}
                className="text-[12px]"
                onClick={() => handleFilterClick(filterableColumn.dataKey)}
                ref={buttonRef}
            >
                {filterPopupsDisplay === filterableColumn.dataKey ? (
                    <>{filters[filterableColumn.dataKey]?.length > 0 ? <>{slashFilterSvg(true)}</> : <>{emptyFilterSvg(true)}</>}</>
                ) : (
                    <>{filters[filterableColumn.dataKey]?.length > 0 ? <>{slashFilterSvg()}</> : <>{emptyFilterSvg()}</>}</>
                )}
            </button>
            {/* filter popup rendered in a portal to avoid clipping by table container */}
            {filterPopupsDisplay === filterableColumn.dataKey &&
                anchorRect &&
                createPortal(
                    (() => {
                        const POPUP_WIDTH_PX = 192;
                        const GAP_PX = 8;
                        const left = displayRight ? anchorRect.right + GAP_PX : anchorRect.left - POPUP_WIDTH_PX - GAP_PX;
                        return (
                            <div
                                className={"fixed z-[30] w-48 h-52 text-black bg-white p-1 flex flex-col items-center gap-2 shadow "}
                                style={{ top: "49px", left }}
                            >
                                <div className="flex justify-between items-center border-black border-b-[1px] w-[90%]">
                                    <div className="text-start">{filterLabel + " " + filterableColumn.header}</div>
                                    <div className="flex gap-1">
                                        {filters[filterableColumn.dataKey]?.length > 0 && (
                                            <button onClick={clearFilter}>{slashFilterSvg(false, "gray")}</button>
                                        )}
                                        <button onClick={closeFilterWindow}>
                                            <RedXSvg2 />
                                        </button>
                                    </div>
                                </div>
                                <div className="overflow-auto h-[80%] flex flex-col gap-1 w-full cursor-pointer ">
                                    {filterOptions[filterableColumn.dataKey]
                                        ?.filter(Boolean)
                                        ?.sort((a, b) => (a || "").localeCompare(b || ""))
                                        .map((option: string, i: number) => {
                                            const ui = filterableColumn.ui ? filterableColumn.ui(option) : option;
                                            return (
                                                <div key={i} className="flex items-center px-2 justify-start hover:bg-[#547f22] hover:text-white">
                                                    <input
                                                        type="checkbox"
                                                        className="cursor-pointer"
                                                        checked={filters[filterableColumn.dataKey]?.includes(option)}
                                                        onChange={() => handleFilterChange(filterableColumn.dataKey, option)}
                                                    />
                                                    <button
                                                        className="flex-1 text-start px-2 truncate"
                                                        onClick={() => handleFilterChange(filterableColumn.dataKey, option)}
                                                        title={typeof ui === "string" ? ui : option}
                                                    >
                                                        {ui}
                                                    </button>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                        );
                    })(),
                    document.body
                )}
        </div>
    );
});

/// max rows
export const MaxRowsLabel = memo(() => {
    const { data, dataToRender, maxRowsLabel1, maxRowsLabel2, maxRows, displayAllRows, maxRowsContainerClassName } = useTableContext();
    return (
        <div className={cn("flex justify-start items-center text-lg gap-1", maxRowsContainerClassName || "")}>
            <div>{maxRowsLabel1}</div>
            <div>{displayAllRows || maxRows > dataToRender.renderedData.length ? dataToRender.renderedData.length : maxRows}</div>
            <div>{maxRowsLabel2}</div>
            <div>{dataToRender.filtered.length}</div>
        </div>
    );
}, renderOnce);

export const DisplayAllRowsButton = memo(() => {
    const { setDisplayAllRows, displayAllRows, dataToRender, maxRows, displayAllRowsButtonProps, displayAllRowsButtonLabel } = useTableContext();

    const toggleDisplayAmount = () => setDisplayAllRows(!displayAllRows);
    const totalFiltered = dataToRender.filtered.length;
    const limitedCount = Math.min(maxRows, totalFiltered);
    const title = displayAllRows ? limitedCount : totalFiltered;
    return (
        <button
            {...(displayAllRowsButtonProps || {})}
            className={cn(
                "bg-[#547f22] text-white px-3 py-1.5 rounded-md hover:bg-[#3e671f] focus:outline-none flex gap-1",
                displayAllRowsButtonProps?.className
            )}
            onClick={toggleDisplayAmount}
        >
            <span>{displayAllRowsButtonLabel || "Display:"}</span>
            <span>{title}</span>
        </button>
    );
}, renderOnce);

/// export to excel
export const ExportToExcel = memo(() => {
    const {
        exportToExcelKeys,
        dataToAddToExcelTable,
        excelFileName,
        dataToRender,
        headers,
        sumColumns,
        exportExcelTitle,
        exportExcelContent,
        excelHeadline,
        exportToExcelClassName,
        direction,
    } = useTableContext();

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
        if (!exportToExcelKeys || !dataToRender?.renderedData) return;

        const { data: baseData, headers: baseHeaders } =
            dataToAddToExcelTable?.length > 0 ? addPropertiesToExcel(dataToAddToExcelTable) : { data: dataToRender.renderedData, headers };

        const columns = exportToExcelKeys.map((key, index) => ({
            key,
            header: baseHeaders[index] || key,
        }));

        const dataWithSummary = [...baseData];

        if (sumColumns?.length) {
            sumColumns.forEach(({ label, dataKey }) => {
                const sumValue = dataToRender.renderedData.reduce((acc, row) => acc + Number(row[dataKey] || 0), 0).toFixed(2);
                const summaryRow: Record<string, any> = {
                    [exportToExcelKeys[0]]: label,
                    [exportToExcelKeys[1]]: sumValue,
                };

                dataWithSummary.push(summaryRow);
            });
        }

        await exportToExcel({
            columns,
            data: dataWithSummary,
            headline: excelHeadline,
            fileName: `${excelFileName || "table_data"}.xlsx`,
            cellStyle: {
                horizontal: direction === "ltr" ? "left" : "right",
                readingOrder: direction,
            },
            direction,
        });
    };

    return (
        <button
            onClick={onExportExcelClick}
            title={exportExcelTitle}
            className={cn("px-2 py-[2px] bg-[#547f22] text-white rounded-lg text-[16px]", exportToExcelClassName)}
        >
            {exportExcelContent || exportToExcelSvg()}
        </button>
    );
}, renderOnce);

/// search
export const Search = memo(() => {
    const { searchQuery, handleSearch, searchPlaceHolder, searchInputClassName, searchInputStyle } = useTableContext();
    return (
        <input
            className={cn("border-black border-[1px] text-lg px-2 w-11/12", searchInputClassName)}
            type="search"
            placeholder={searchPlaceHolder}
            value={searchQuery}
            onChange={handleSearch}
            style={searchInputStyle}
            autoFocus={true}
        />
    );
}, renderOnce);

/// table header
export const TableHead = memo(() => {
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
        headerClassName,
        headerCellClassName,
    } = useTableContext();
    const sortDisplay = useMemo<boolean>(() => Boolean(sortKeys?.length), [sortKeys]);
    return (
        <thead className={cn("bg-black/50 text-white sticky z-10 top-0", headerClassName)}>
            <tr style={headerStyle}>
                {headers.map((header, index) => {
                    const filterableColumn = filterableColumns.find((col) => col.header === header);
                    return (
                        <th
                            title={sortDisplay ? `${sortLabel} ${header}` : header}
                            style={headerCellStyle}
                            key={index}
                            className={cn("px-2 text-center h-6 relative w-fit max-w-[130px]", headerCellClassName)}
                        >
                            {/* header value */}
                            <div className={`px-2 ${sortDisplay ? "cursor-pointer" : ""}`} onClick={() => sortDisplay && handleSort(index)}>
                                {header}
                            </div>
                            {/* sort */}
                            {sortDisplay && sortColumn === index && (sortOrder === "desc" ? <>{sortSvg()}</> : <>{sortSvg(true)}</>)}
                            {/* filter */}
                            {filterableColumn && <Filter filterableColumn={filterableColumn} index={index} />}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
}, renderOnce);

/// table body
export const TableBody = memo(() => {
    const { dataToRender, tableBodyClassName } = useTableContext();
    return (
        <tbody className={cn("divide-y divide-gray-600", tableBodyClassName)}>
            {dataToRender.renderedData.map((item, index) => (
                <TableRow key={index} item={item} index={index} />
            ))}
        </tbody>
    );
}, renderOnce);

export const TableRow = ({ item, index }: { item: TObject<any>; index: number }) => {
    const { rowStyles, rowClassName = "", keysToRender, onRowClick, zebraStriping, selectedRow, rowClassNameFunction } = useTableContext();
    const zebraClassName = zebraStriping
        ? index % 2 === 0
            ? zebraStriping.evenRowClassName || ""
            : zebraStriping.oddRowClassName || "bg-gray-300"
        : "";
    return (
        <tr
            className={cn(
                "hover:bg-[#808080] hover:text-[#fff]",
                zebraClassName,
                rowClassName,
                rowClassNameFunction?.(item) || "",
                selectedRow?.rowIndex === index ? selectedRow?.className || "" : ""
            )}
            onClick={() => {
                selectedRow?.onChange && selectedRow.onChange(index);
                onRowClick && onRowClick(item, index);
            }}
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
            className={cn("chivo ellipsis _ellipsis text-start px-1 py-0.5 border-gray-400 border-[1px] w-fit max-w-[130px]", cellClassName || "")}
        >
            {value}
        </td>
    );
};
/// table footer
export const Summary = memo(() => {
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
}, renderOnce);

/// components
interface TimesUIProps {
    timestamp: any;
    format?: string;
    fromFormat?: string;
    tz?: string;
    direction?: Direction;
    className?: string;
    defaultReturnedValue?: string;
}
export const TimesUI = ({ timestamp, format, tz, direction, fromFormat, className = "", defaultReturnedValue }: TimesUIProps) => {
    const time = timestamp_to_string(timestamp, { format, fromFormat, tz, defaultReturnedValue });
    return (
        <div style={{ direction: "ltr" }} className={cn(`_ellipsis  ${direction === "rtl" ? "text-right" : "text-left"}`, className)} title={time}>
            {time}
        </div>
    );
};

interface TableButtonProps {
    onClick: () => void;
    title?: string;
    className?: string;
    buttonClassName?: string;
    type: "add" | "edit" | "delete" | "custom";
    children?: ReactNode;
    disabled?: boolean;
}
export const TableButton = ({ onClick, title, className, type, children, disabled, buttonClassName }: TableButtonProps) => {
    const icon = {
        add: "fa-regular fa-plus text-xl",
        edit: "fa-light fa-pen-to-square",
        delete: "fa-light fa-trash",
    };
    const baseClassName =
        "transition-transform duration-500 scale-100 disabled:hover:cursor-not-allowed disabled:text-black/40 hover:scale-110 disabled:hover:scale-100";
    return (
        <>
            {type === "custom" ? (
                <button disabled={disabled} className={cn(baseClassName, className, buttonClassName)} title={title} onClick={onClick}>
                    {children}
                </button>
            ) : type === "add" ? (
                <Button disabled={disabled} className={cn(baseClassName, buttonClassName)} title={title} onClick={onClick}>
                    <i className={cn("fa-light fa-plus text-2xl", className)}></i>
                </Button>
            ) : (
                <button disabled={disabled} className={cn(baseClassName, buttonClassName)} title={title} onClick={onClick}>
                    <i className={cn(icon[type], className)}></i>
                </button>
            )}
        </>
    );
};
interface DurationUIProps {
    duration: number;
    daysLabel?: string;
    hoursLabel?: string;
    minutesLabel?: string;
    secondsLabel?: string;
    className?: string;
    direction?: "rtl" | "ltr";
}
export const DurationUI = ({
    duration,
    daysLabel = "d",
    hoursLabel = "h",
    minutesLabel = "m",
    secondsLabel = "s",
    className = "",
    direction,
}: DurationUIProps) => {
    const { daysStr, hoursStr, minutesStr, secondsStr } = useMemo(() => {
        const secondsInDay = 86400;
        const days = Math.floor(duration / secondsInDay);
        const remainderAfterDays = duration % secondsInDay;
        const hours = Math.floor(remainderAfterDays / 3600);
        const remainderAfterHours = remainderAfterDays % 3600;
        const minutes = Math.floor(remainderAfterHours / 60);
        const seconds = remainderAfterHours % 60;
        const daysStr = String(days).padStart(2, "0");
        const hoursStr = String(hours).padStart(2, "0");
        const minutesStr = String(minutes).padStart(2, "0");
        const secondsStr = String(seconds).padStart(2, "0");
        return {
            daysStr,
            hoursStr,
            minutesStr,
            secondsStr,
        };
    }, [duration]);
    return (
        <div
            title={`${daysStr} ${daysLabel} ${hoursStr} ${hoursLabel} ${minutesStr} ${minutesLabel} ${secondsStr} ${secondsLabel}`.trim()}
            style={{ direction: "ltr" }}
            className={cn(`flex gap-1 ${direction === "rtl" ? "justify-end" : "justify-start"}`, className)}
        >
            {daysStr !== "00" && (
                <span style={{ display: "inline-block" }}>
                    {daysStr} {daysLabel}
                </span>
            )}
            {hoursStr !== "00" && (
                <span style={{ display: "inline-block" }}>
                    {hoursStr} {hoursLabel}
                </span>
            )}
            {minutesStr !== "00" && (
                <span style={{ display: "inline-block" }}>
                    {minutesStr} {minutesLabel}
                </span>
            )}
            {secondsStr !== "00" && (
                <span style={{ display: "inline-block" }}>
                    {secondsStr} {secondsLabel}
                </span>
            )}
        </div>
    );
};

export const PhoneUI = ({ phone, direction, className = "" }: { phone: string; direction?: Direction; className?: string }) => {
    useEffect(() => {
        const dir = document.body.style.direction;
    }, []);
    return (
        <div style={{ direction: "ltr" }} className={cn(`_ellipsis  ${direction === "rtl" ? "text-right" : "text-left"}`, className)} title={phone}>
            {phone}
        </div>
    );
};
interface BooleanUIProps {
    value: boolean;
    size?: "big" | "small";
    className?: string;
    trueUi?: ReactNode;
    falseUi?: ReactNode;
}
export const BooleanUi = ({ value, size, className, falseUi, trueUi }: BooleanUIProps) => {
    return value
        ? trueUi ?? <i className={cn(`fa-light fa-check  ${size === "small" ? "text-lg" : "text-2xl"}`, className)} />
        : falseUi ?? <i className={cn(`fa-light fa-xmark  ${size === "small" ? "text-lg" : "text-2xl"}`, className)} />;
};

export interface GeoUiProps {
    value: Partial<Geo> & { latitude?: number; longitude?: number };
    className?: string;
    linkUi?: ReactNode;
}

export const GeoUi = ({ value, className, linkUi }: GeoUiProps) => {
    const lang = value.lng || value.longitude;
    const lat = value.lat || value.latitude;
    const googleMapsLink = getLocationUrl(lang, lat);
    const langLatUi = linkUi || ` ${lang} ${lat}`;
    return (
        <a
            href={googleMapsLink}
            target="_blank"
            className={cn("_ellipsis text-blue-500 hover:text-blue-700 underline", className)}
            title={`${lang} ${lat}`}
        >
            {langLatUi}
        </a>
    );
};
export interface NumberUIProps {
    number: string | number;
    direction?: Direction;
    className?: string;
}
export const NumberUI = ({ number, direction, className = "" }: NumberUIProps) => {
    return (
        <div
            style={{ direction: "ltr" }}
            className={cn(`_ellipsis  ${direction === "rtl" ? "text-right" : "text-left"}`, className)}
            title={String(number)}
        >
            {number}
        </div>
    );
};

export * from "./ModularForm";

import { useState } from "react";
import moment from "moment";
import { GreenVSvg, RedXSvg } from "../../assets";
import { Loader } from "../utils";
import { ConfirmFormProps, DatePickerProps } from "../../types";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Button, DatePicker as RACDatePicker, Dialog, Group, Label, Popover } from "react-aria-components";
import { parseDate, today, getLocalTimeZone } from "@internationalized/date";
import { Calendar } from "@/components/ui/calendar-rac";
import { DateInput } from "@/components/ui/datefield-rac";
import { I18nProvider } from "react-aria-components";

export const ConfirmForm = ({
    onV,
    onX,
    headline = "",
    direction = "rtl",
    containerClassName = "",
    buttonsContainerClassName = "",
    headlineClassName = "",
    cancelButtonClassName = "",
    confirmButtonClassName = "",
    cancelButtonProps = {},
    confirmButtonProps = {},
    cancelElement,
    confirmElement,
}: ConfirmFormProps) => {
    return (
        <div style={{ direction, padding: "30px" }} className={cn("w-full h-full flex flex-col gap-3", containerClassName)}>
            <div className={cn("text-lg font-bold", headlineClassName)}>{headline}</div>
            <div className={cn("flex justify-center items-center gap-2 w-full", buttonsContainerClassName)}>
                <button className={cn("disabled:cursor-not-allowed opacity-70", cancelButtonClassName)} onClick={onX}>
                    {cancelElement || <RedXSvg />}
                </button>

                <button className={cn("disabled:cursor-not-allowed opacity-70", confirmButtonClassName)} {...confirmButtonProps} onClick={onV}>
                    {confirmElement || <GreenVSvg />}
                </button>
            </div>
        </div>
    );
};

export const DatePicker = ({
    submit = async (form) => {},
    formClassName = "",
    labelsClassName = "",
    inputsClassName = "",
    buttonClassName = "",
    buttonStyle = {},
    defaultFrom,
    defaultTo,
    direction = "rtl",
    fromText = "From date",
    toText = "To date",
    buttonText = "Search",
}: DatePickerProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        await submit(e);
        setIsLoading(false);
    };

    return (
        <form style={{ direction }} onSubmit={onSubmit} className={cn(`w-full h-10 flex justify-start gap-3 items-center `, formClassName)}>
            <label className={cn(`center text-[14px] relative gap-2`, labelsClassName)} htmlFor="from">
                {fromText}
                <input
                    className={`w-[125px] text-[14px] py-[2px] px-1 rounded-[2px] border-black border-[1px] text-end ${inputsClassName}`}
                    type="date"
                    name="from"
                    defaultValue={defaultFrom || moment(new Date()).format("YYYY-MM-DD")}
                />
            </label>

            <label className={cn(`center text-[14px] relative gap-2 `, labelsClassName)} htmlFor="to">
                {toText}
                <input
                    className={`w-[125px] text-[14px] py-[2px] px-1 rounded-[2px] border-black border-[1px] text-end ${inputsClassName}`}
                    type="date"
                    name="to"
                    defaultValue={defaultTo || moment(new Date()).format("YYYY-MM-DD")}
                />
            </label>

            <button
                disabled={isLoading}
                style={buttonStyle}
                className={cn(`bg-[#699a2c] text-[#fff] font-[500] w-[75px] h-[27px]`, buttonClassName)}
                type="submit"
            >
                {isLoading ? <Loader className="pt-[2px]" size={20} color="#fff" /> : buttonText}
            </button>
        </form>
    );
};

export function DatePicker2({
    submit = async (form) => {},
    formClassName = "",
    labelsClassName = "",
    inputsClassName = "",
    buttonClassName = "",
    calendarClassName = "",
    selectedDayClassName = "",
    todayDayClassName = "",
    buttonStyle = {},
    defaultFrom,
    defaultTo,
    direction = "rtl",
    fromText = "From date",
    toText = "To date",
    buttonText = "Search",
}: DatePickerProps) {
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        await submit(e);
        setIsLoading(false);
    };

    const getDefaultValue = (dateStr?: string) => {
        if (dateStr) {
            try {
                return parseDate(dateStr);
            } catch {
                return today(getLocalTimeZone());
            }
        }
        return today(getLocalTimeZone());
    };

    return (
        <I18nProvider locale={"en-GB"}>
            <form style={{ direction }} onSubmit={onSubmit} className={cn(`w-full h-10 flex justify-start gap-3 items-center`, formClassName)}>
                <RACDatePicker className={cn("flex items-center gap-2", labelsClassName)} name="from" defaultValue={getDefaultValue(defaultFrom)}>
                    {fromText && <Label className="font-medium text-foreground text-sm whitespace-nowrap">{fromText}</Label>}
                    <div className="flex">
                        <Group className={cn("w-32 border rounded-md bg-background ", inputsClassName)}>
                            <DateInput
                                style={{ direction: "ltr" }}
                                className={cn("px-2 py-1", direction === "rtl" ? "justify-end" : "justify-start")}
                            />
                        </Group>
                        <Button className="-ms-9 -me-px z-10 flex w-9 items-center justify-center rounded-e-md text-muted-foreground/80 outline-none transition-[color,box-shadow] hover:text-foreground data-focus-visible:border-ring data-focus-visible:ring-[3px] data-focus-visible:ring-ring/50">
                            <CalendarIcon size={16} />
                        </Button>
                    </div>
                    <Popover
                        className="data-[entering]:fade-in-0 data-[entering]:zoom-in-95 data-[exiting]:fade-out-0 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 z-50 rounded-lg border bg-background text-popover-foreground shadow-lg outline-hidden data-entering:animate-in data-exiting:animate-out"
                        offset={4}
                    >
                        <Dialog className="max-h-[inherit] overflow-auto p-2">
                            <Calendar
                                selectedDayClassName={selectedDayClassName}
                                todayDayClassName={todayDayClassName}
                                className={cn("bg-white", calendarClassName)}
                            />
                        </Dialog>
                    </Popover>
                </RACDatePicker>

                <RACDatePicker className={cn("flex items-center gap-2", labelsClassName)} name="to" defaultValue={getDefaultValue(defaultTo)}>
                    {toText && <Label className="font-medium text-foreground text-sm whitespace-nowrap">{toText}</Label>}
                    <div className="flex">
                        <Group className={cn("w-32 border rounded-md bg-background", inputsClassName)}>
                            <DateInput
                                style={{ direction: "ltr" }}
                                className={cn("px-2 py-1", direction === "rtl" ? "justify-end" : "justify-start")}
                            />
                        </Group>
                        <Button className="-ms-9 -me-px z-10 flex w-9 items-center justify-center rounded-e-md text-muted-foreground/80 outline-none transition-[color,box-shadow] hover:text-foreground data-focus-visible:border-ring data-focus-visible:ring-[3px] data-focus-visible:ring-ring/50">
                            <CalendarIcon size={16} />
                        </Button>
                    </div>
                    <Popover
                        className="data-[entering]:fade-in-0 data-[entering]:zoom-in-95 data-[exiting]:fade-out-0 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 z-50 rounded-lg border bg-background text-popover-foreground shadow-lg outline-hidden data-entering:animate-in data-exiting:animate-out"
                        offset={4}
                    >
                        <Dialog className="max-h-[inherit] overflow-auto p-2">
                            <Calendar
                                selectedDayClassName={selectedDayClassName}
                                todayDayClassName={todayDayClassName}
                                className={cn("bg-white", calendarClassName)}
                            />
                        </Dialog>
                    </Popover>
                </RACDatePicker>

                <button
                    disabled={isLoading}
                    style={buttonStyle}
                    className={cn(`bg-[#699a2c] text-[#fff] font-[500] w-[75px] h-[27px]`, buttonClassName)}
                    type="submit"
                >
                    {isLoading ? <Loader className="pt-[2px]" size={20} color="#fff" /> : buttonText}
                </button>
            </form>
        </I18nProvider>
    );
}

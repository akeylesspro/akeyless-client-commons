export * from "./ModularForm";

import { useState } from "react";
import moment from "moment";
import { GreenVSvg, RedXSvg } from "../../assets";
import { Loader } from "../utils";
import { ConfirmFormProps, DatePickerProps } from "../../types";
import { cn } from "@/lib/utils";

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

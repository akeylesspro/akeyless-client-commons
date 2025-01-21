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
}: ConfirmFormProps) => {
    const onConfirm = async () => {
        try {
            await onV();
        } catch (error) {
            console.error("'onV' failed:", error);
        }
    };
    const onDenied = async () => {
        try {
            await onX();
        } catch (error) {
            console.error("'onX' failed:", error);
        }
    };

    return (
        <div style={{ direction, padding: "30px" }} className={cn("full col gap-2", containerClassName)}>
            <div className={cn("text-lg font-bold", headlineClassName)}>{headline}</div>
            <div className={cn("center gap-2 ", buttonsContainerClassName)}>
                <button onClick={onDenied}>
                    <RedXSvg />
                </button>
                <button onClick={onConfirm}>
                    <GreenVSvg />
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

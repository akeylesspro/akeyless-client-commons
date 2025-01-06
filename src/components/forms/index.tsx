import { useState } from "react";
import moment from "moment";
import { useValidation } from "../../helpers";
import { GreenVSvg, RedXSvg } from "../../assets";
import { Loader } from "../utils";
import { ConfirmFormProps, DatePickerProps, InputContainerProps, ModularFormProps, SelectContainerProps } from "../../types";
import { useSnapshotBulk } from "@/hooks/global";
import { cn } from "@/lib/utils";

export const InputContainer = ({
    validationError,
    name = "",
    inputType = "text",
    labelContent = "",
    defaultValue = "",
    validationName = "textNumbers",
    containerClassName = "",
    labelClassName = "",
    elementClassName = "",
    required = false,
    onKeyDown,
}: InputContainerProps) => {
    return (
        <div className={`center ${containerClassName}`}>
            <label className={`text-start w-[30%] flex gap-0.5  ${labelClassName}`} htmlFor={name}>
                <div>{labelContent}</div>
                {required && <div className="text-red-500">*</div>}
                <div>:</div>
            </label>
            <input
                className={`w-[70%] bg-none border-b-[1px] border-black ${elementClassName}`}
                defaultValue={defaultValue}
                {...useValidation(validationName)}
                required={required}
                name={name}
                onKeyDown={onKeyDown}
                type={inputType}
            />
        </div>
    );
};

export const SelectContainer = ({
    name = "",
    labelContent = "",
    containerClassName = "",
    labelClassName = "",
    defaultValue = "",
    elementClassName = "",
    optionClassName = "",
    required = false,
    options = [],
    optionsContainerClassName = "",
}: SelectContainerProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(defaultValue || options[0]?.value || "");

    const handleOptionClick = (value: string) => {
        setSelectedValue(value);
        setIsOpen(false);
    };

    return (
        <div className={`center ${containerClassName}`}>
            <label className={`text-start w-[30%] ${labelClassName}`} htmlFor={name}>
                {labelContent} :
            </label>

            <div className={`w-[70%] relative ${elementClassName}`} onClick={() => setIsOpen(!isOpen)}>
                <div className={`border-b-[1px] border-black max-h-6 cursor-pointer ${elementClassName}`}>
                    {options?.find((opt) => opt.value === selectedValue)?.label || selectedValue}
                </div>
                {isOpen ? (
                    <i className="fa-light fa-chevron-up absolute top-[1px] left-1 cursor-pointer"></i>
                ) : (
                    <i className="fa-light fa-chevron-down absolute top-[1px] left-1 cursor-pointer"></i>
                )}

                {isOpen && (
                    <div className={cn(`absolute w-full bg-white border  border-gray-300 max-h-32 overflow-y-auto z-10`, optionsContainerClassName)}>
                        {options.map((option) => (
                            <div
                                className={`p-2 cursor-pointer hover:bg-gray-200 ${optionClassName}`}
                                key={option.value}
                                onClick={() => handleOptionClick(option.value)}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                )}

                <input value={selectedValue} type="hidden" name={name} required={required} />
            </div>
        </div>
    );
};

export const ModularForm = ({
    submitFunction = async (form) => {},
    elements = [],
    headerContent,
    buttonContent,
    formClassName = "",
    headerClassName = "",
    direction = "rtl",
    buttonClassName = "",
    submitRef,
}: ModularFormProps) => {
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await submitFunction(e);
        } catch (err) {
            if (typeof err === "string") {
                setErrorMsg(err);
            }
            if (err.message) {
                setErrorMsg(err.message);
            }
            console.error("Error from submit ModularForm:", err);
        }
        setIsLoading(false);
    };

    return (
        <form onSubmit={onSubmit} style={{ direction }} className={cn(`w-[350px] px-5 py-5 flex flex-col gap-5`, formClassName)}>
            {headerContent && (
                <div className={cn(`border-b-2 border-[#547f22] pb-2 text-start font-bold text-[20px]`, headerClassName)}>{headerContent}</div>
            )}
            {elements.map((element, index) => {
                switch (element.type) {
                    case "input":
                        return <InputContainer key={index} {...element} />;
                    case "select":
                        return <SelectContainer key={index} {...element} />;
                    default:
                        return null;
                }
            })}
            <div className="flex justify-between w-full">
                <div title={errorMsg} className="text-[#f22] text-[18px] max-w-[80%] ellipsis">
                    {errorMsg}
                </div>
                <button
                    ref={submitRef}
                    disabled={isLoading}
                    className={cn(`bg-[#547f22] px-3 py-1 rounded-lg text-white min-w-20`, buttonClassName)}
                    type="submit"
                >
                    {isLoading ? <Loader size={25} color="#fff" /> : buttonContent}
                </button>
            </div>
        </form>
    );
};

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

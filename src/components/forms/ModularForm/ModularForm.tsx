import { cloneElement, ReactNode, useState } from "react";
import { ModularFormProps } from "src/types";
import { InputContainer, MultiSelect, SelectContainer, SelectWithSearch, TextAreaContainer } from "./formElements";
import { Loader } from "@/components/utils";
import { cn, getFormElementValue } from "src/helpers";
import InternationalPhonePicker from "./InternationalPhonePicker";

const ModularForm = ({
    submitFunction = async (form) => {},
    elements = [],
    headerContent,
    buttonContent,
    formClassName = "",
    headerClassName = "",
    direction = "rtl",
    buttonClassName = "",
    submitRef,
    footerClassName = "",
    errorClassName = "",
}: ModularFormProps) => {
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMsg("");
        setIsLoading(true);
        try {
            const form = e.currentTarget;
            elements.forEach((element) => {
                if (element.minLength) {
                    const elementValue = getFormElementValue(form, element.name);
                    if (elementValue.length < element.minLength) {
                        throw element.validationError || `${element.labelContent || element.name} must be at least ${element.minLength} characters`;
                    }
                }
            });
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
                        return <InputContainer key={index} {...element} direction={direction} />;
                    case "textarea":
                        return <TextAreaContainer key={index} {...element} direction={direction} />;
                    case "select":
                        return <SelectContainer key={index} {...element} direction={direction} />;
                    case "multiSelect":
                        return <MultiSelect key={index} {...element} direction={direction} />;
                    case "selectWithSearch":
                        return <SelectWithSearch key={index} {...element} direction={direction} />;
                    case "internationalPhoneInput":
                        return <InternationalPhonePicker key={index} {...element} direction={direction} />;
                    case "custom":
                        return typeof element.element?.type !== "string" && cloneElement(element.element, { key: index });
                    default:
                        return null;
                }
            })}
            <div className={cn("flex justify-between w-full", footerClassName)}>
                <div title={errorMsg} className={cn("text-[#f22] text-[18px] max-w-[80%] ellipsis", errorClassName)}>
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

export default ModularForm;

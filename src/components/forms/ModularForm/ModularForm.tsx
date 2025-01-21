import { useState } from "react";
import { ModularFormProps } from "src/types";
import { InputContainer, MultipleSelect, SelectContainer } from "./formElements";
import { Loader } from "@/components/utils";
import { cn } from "src/helpers";
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
}: ModularFormProps) => {
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const form = e.currentTarget;
            elements.forEach((element) => {
                if (element.type === "input" && element.minLength) {
                    const inputValue = (form.elements.namedItem(element.name) as HTMLInputElement)?.value || "";
                    if (inputValue.length < element.minLength) {
                        throw element.validationError || `${element.labelContent} must be at least ${element.minLength} characters`;
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
                        return <InputContainer key={index} {...element} />;
                    case "select":
                        return <SelectContainer key={index} {...element} />;
                    case "multipleSelect":
                        return <MultipleSelect key={index} {...element} />;
                    case "internationalPhoneInput":
                        return <InternationalPhonePicker key={index} {...element} />;
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

export default ModularForm;

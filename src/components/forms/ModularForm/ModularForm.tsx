import { cloneElement, useEffect, useMemo, useRef, useState } from "react";
import { FormElement, ModularFormProps } from "src/types";
import {
    CheckboxContainer,
    DurationPicker,
    FormElementContainer,
    FormSeparator,
    InputContainer,
    MultiSelect,
    SelectContainer,
    SelectWithSearch,
    TextAreaContainer,
} from "./formElements";
import { Loader } from "@/components/utils";
import { cn, getFormElementValue } from "src/helpers";
import InternationalPhonePicker from "./InternationalPhonePicker";
import { useDeepCompareEffect } from "@/hooks/react";
import { MouseEvent } from "react";

const ModularForm = ({
    submitFunction = async (form) => {},
    elements = [],
    headerContent,
    buttonContent,
    className = "",
    elementsContainerClassName = "",
    headerClassName = "",
    direction = "rtl",
    buttonClassName = "",
    submitRef,
    footerClassName = "",
    errorClassName = "",
    labelsCommonClassName,
    elementsCommonClassName,
    autoFixLabelsWidth = true,
    loaderProps,
    autoFixLabelsWidthDeps = [],
    onLoad,
}: ModularFormProps) => {
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const submitClickEventRef = useRef<MouseEvent | null>(null);

    useDeepCompareEffect(() => {
        if (formRef.current && autoFixLabelsWidth) {
            const labels = formRef.current.getElementsByClassName("form-label");
            let max_width = 0;
            Array.from(labels).forEach((label) => {
                const label_width = label.clientWidth;
                if (label_width > max_width) {
                    max_width = label_width;
                }
            });
            Array.from(labels).forEach((label) => {
                (label as HTMLElement).style.minWidth = `${max_width}px`;
            });
        }
    }, autoFixLabelsWidthDeps);

    useEffect(() => {
        if (formRef.current) {
            onLoad?.(formRef.current);
        }
    }, []);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMsg("");
        setIsLoading(true);
        try {
            const clickEvent = submitClickEventRef.current;

            const form = e.currentTarget;
            elements.forEach((element) => {
                const hasMinLengthType = (element: FormElement): element is Extract<FormElement, { minLength?: number }> => {
                    return !(["custom", "separator", "checkbox"] as FormElement["type"][]).includes(element.type);
                };

                if (hasMinLengthType(element) && element.minLength) {
                    const elementValue = getFormElementValue(form, element.name);
                    if (elementValue.length < element.minLength) {
                        throw element.validationError || `${element.labelContent || element.name} must be at least ${element.minLength} characters`;
                    }
                }
            });
            await submitFunction(e, clickEvent);
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
        <form ref={formRef} onSubmit={onSubmit} style={{ direction }} className={cn(`w-[350px] px-5 py-5 flex flex-col gap-4`, className)}>
            {headerContent && (
                <div className={cn(`border-b-2 border-[#547f22] pb-2 text-start font-bold text-[20px]`, headerClassName)}>{headerContent}</div>
            )}
            <div className={cn(`w-full flex flex-col gap-5`, elementsContainerClassName)}>
                {elements.map((element, index) => {
                    switch (element.type) {
                        case "input":
                            return (
                                <InputContainer
                                    key={index}
                                    direction={direction}
                                    {...element}
                                    labelsCommonClassName={labelsCommonClassName}
                                    elementsCommonClassName={elementsCommonClassName}
                                />
                            );
                        case "textarea":
                            return (
                                <TextAreaContainer
                                    key={index}
                                    direction={element.direction || direction}
                                    {...element}
                                    labelsCommonClassName={labelsCommonClassName}
                                    elementsCommonClassName={elementsCommonClassName}
                                />
                            );
                        case "select":
                            return (
                                <SelectContainer
                                    key={index}
                                    direction={direction}
                                    {...element}
                                    labelsCommonClassName={labelsCommonClassName}
                                    elementsCommonClassName={elementsCommonClassName}
                                />
                            );
                        case "checkbox":
                            return (
                                <CheckboxContainer
                                    key={index}
                                    direction={direction}
                                    {...element}
                                    labelsCommonClassName={labelsCommonClassName}
                                    elementsCommonClassName={elementsCommonClassName}
                                />
                            );
                        case "multiSelect":
                            return (
                                <MultiSelect
                                    key={index}
                                    direction={direction}
                                    {...element}
                                    labelsCommonClassName={labelsCommonClassName}
                                    elementsCommonClassName={elementsCommonClassName}
                                />
                            );
                        case "selectWithSearch":
                            return (
                                <SelectWithSearch
                                    key={index}
                                    direction={direction}
                                    {...element}
                                    labelsCommonClassName={labelsCommonClassName}
                                    elementsCommonClassName={elementsCommonClassName}
                                />
                            );
                        case "internationalPhoneInput":
                            return (
                                <InternationalPhonePicker
                                    key={index}
                                    direction={direction}
                                    {...element}
                                    labelsCommonClassName={labelsCommonClassName}
                                    elementsCommonClassName={elementsCommonClassName}
                                />
                            );
                        case "duration":
                            return (
                                <DurationPicker
                                    key={index}
                                    direction={direction}
                                    {...element}
                                    labelsCommonClassName={labelsCommonClassName}
                                    elementsCommonClassName={elementsCommonClassName}
                                />
                            );
                        case "separator":
                            return (
                                <FormSeparator key={index} direction={direction} {...element}>
                                    {element.children}
                                </FormSeparator>
                            );
                        case "custom":
                            return typeof element.element?.type !== "string" && cloneElement(element.element, { key: index });
                        default:
                            return null;
                    }
                })}
            </div>

            <div className={cn("flex justify-between w-full", footerClassName)}>
                <div title={errorMsg} className={cn("text-[#f22] text-[18px] max-w-[80%] ellipsis", errorClassName)}>
                    {errorMsg}
                </div>
                <button
                    ref={submitRef}
                    disabled={isLoading}
                    onClick={(e) => {
                        submitClickEventRef.current = e;
                    }}
                    className={cn(`bg-[#547f22] px-3 py-1.5 rounded-lg text-white min-w-20`, buttonClassName)}
                    type="submit"
                >
                    {isLoading ? <Loader size={18} color="#fff" {...loaderProps} /> : buttonContent}
                </button>
            </div>
        </form>
    );
};

export default ModularForm;

import MultipleSelector, { MultipleSelectorOption } from "@/components/ui/multiselect";
import { ReactNode, useState } from "react";
import { cn, useValidation } from "src/helpers";
import { InputContainerProps, MultipleSelectProps, SelectContainerProps } from "src/types";

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
    placeholder,
    props,
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
                {...props}
                placeholder={placeholder}
                className={`w-[70%] bg-none border-b-[1px] border-black ${elementClassName}`}
                defaultValue={defaultValue}
                {...useValidation(validationName, validationError)}
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
            <label className={`text-start w-[30%] flex gap-0.5 ${labelClassName}`} htmlFor={name}>
                <div>{labelContent}</div>
                {required && <div className="text-red-500">*</div>}
                <div>:</div>
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


export function MultipleSelect({
    onChange,
    selectedOptions,
    emptyOptionsElement,
    unremovableOptions,
    options = [],
    styles = {},
    name = "multipleSelect",
    selectLabel = "Select items",
}: MultipleSelectProps) {
    return (
        <div className={cn("", styles.containerClassName)}>
            <MultipleSelector
                commandProps={{
                    label: selectLabel,
                }}
                value={selectedOptions}
                onChange={onChange}
                defaultOptions={options}
                unremovableOptions={unremovableOptions}
                placeholder={selectLabel}
                hideClearAllButton
                hidePlaceholderWhenSelected
                badgeClassName={styles.badgeClassName}
                className={styles.className}
                dropdownClassName={styles.dropdownClassName}
                dropdownOptionClassName={styles.dropdownOptionClassName}
                emptyIndicator={emptyOptionsElement || <p className="text-center text-sm">{"all options selected."}</p>}
                emptyIndicatorClassName={styles.emptyIndicatorClassName}
            />
            <input value={JSON.stringify(selectedOptions)} type="hidden" name={name} />
        </div>
    );
}

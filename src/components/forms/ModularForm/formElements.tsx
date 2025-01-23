import MultipleSelector from "@/components/ui/multiselect";
import { ReactNode, useState } from "react";
import { cn, useValidation } from "src/helpers";
import { BaseElementProps, InputContainerProps, MultipleSelectProps, SelectContainerProps } from "src/types";

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
            {labelContent && <ElementLabel labelContent={labelContent} labelClassName={labelClassName} name={name} required={required} />}
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
            {labelContent && <ElementLabel labelContent={labelContent} labelClassName={labelClassName} name={name} required={required} />}
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
    placeholder = "Select items",
    labelContent,
    required,
    labelClassName,
    groupBy,
    onSearch,
    onSearchSync,
}: MultipleSelectProps) {
    return (
        <div className={cn(`${labelContent ? "flex gap-1 items-center" : ""}`, styles.containerClassName)}>
            {labelContent && <ElementLabel labelContent={labelContent} labelClassName={labelClassName} name={name} required={required} />}
            <MultipleSelector
                commandProps={{
                    label: placeholder,
                }}
                groupBy={groupBy}
                name={name}
                value={selectedOptions}
                onChange={onChange}
                onSearch={onSearch}
                onSearchSync={onSearchSync}
                defaultOptions={options}
                unremovableOptions={unremovableOptions}
                placeholder={placeholder}
                hideClearAllButton
                hidePlaceholderWhenSelected
                badgeClassName={styles.badgeClassName}
                className={styles.className}
                dropdownClassName={styles.dropdownClassName}
                dropdownOptionClassName={styles.dropdownOptionClassName}
                emptyIndicator={emptyOptionsElement || <p className="text-center text-sm">{"all options selected."}</p>}
                emptyIndicatorClassName={styles.emptyIndicatorClassName}
            />
        </div>
    );
}

export const ElementLabel = ({ labelContent, labelClassName, name, required }: Omit<BaseElementProps, "containerClassName" | "elementClassName">) => {
    return (
        <label className={cn(`text-start w-[30%] flex gap-0.5`, labelClassName)} htmlFor={name}>
            <div>{labelContent}</div>
            {required && <div className="text-red-500">*</div>}
            <div>:</div>
        </label>
    );
};

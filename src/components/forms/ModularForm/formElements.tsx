import MultipleSelector from "@/components/ui/multiselect";
import SearchSelect from "@/components/ui/SearchSelect";
import { ReactNode, useCallback, useMemo, useState } from "react";
import { cn, handleChange, useValidation } from "src/helpers";
import {
    BaseElementProps,
    InputContainerProps,
    MultiSelectProps,
    SelectContainerProps,
    SelectWithSearchProps,
    TextAreaContainerProps,
} from "src/types";

export { default as InternationalPhonePicker } from "./InternationalPhonePicker";

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
    minLength,
    onKeyDown,
    onChange,
}: InputContainerProps) => {
    const handleChangeFunction = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(e);
            onChange?.(e);
        },
        [onChange]
    );
    const validationProps = useMemo(() => {
        return { ...useValidation(validationName, validationError), onChange: handleChangeFunction };
    }, [handleChangeFunction]);
    return (
        <div className={cn(`center`, containerClassName)}>
            {labelContent && <ElementLabel labelContent={labelContent} labelClassName={labelClassName} name={name} required={required} />}
            <input
                {...props}
                minLength={minLength}
                placeholder={placeholder}
                className={cn(`w-[70%] bg-inherit border-b-[1px] border-black px-2`, elementClassName)}
                defaultValue={defaultValue}
                {...validationProps}
                onChange={(e) => handleChangeFunction(e)}
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
    onChange,
}: SelectContainerProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(defaultValue || options.sort()[0]?.value || "");

    const handleOptionClick = (value: string) => {
        setSelectedValue(value);
        onChange?.(value);
        setIsOpen(false);
    };

    return (
        <div className={cn(`center`, containerClassName)}>
            {labelContent && <ElementLabel labelContent={labelContent} labelClassName={labelClassName} name={name} required={required} />}
            <div className={cn(`w-[70%] relative`, elementClassName)} onClick={() => setIsOpen(!isOpen)}>
                <div className={`border-b-[1px] border-black max-h-6 cursor-pointer`}>
                    {options.find((opt) => opt.value === selectedValue)?.label || selectedValue}
                </div>
                {isOpen ? (
                    <i className="fa-light fa-chevron-up absolute top-[1px] left-1 cursor-pointer"></i>
                ) : (
                    <i className="fa-light fa-chevron-down absolute top-[1px] left-1 cursor-pointer"></i>
                )}

                {isOpen && (
                    <div className={cn(`absolute w-full bg-white border  border-gray-300 max-h-32 overflow-y-auto z-10`, optionsContainerClassName)}>
                        {options.sort().map((option) => (
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

export function MultiSelect({
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
    triggerSearchOnFocus,
}: MultiSelectProps) {
    return (
        <div className={cn(`${labelContent ? "flex gap-1 items-center" : ""}`, styles.containerClassName)}>
            {labelContent && <ElementLabel labelContent={labelContent} labelClassName={labelClassName} name={name} required={required} />}
            <MultipleSelector
                commandProps={{
                    label: placeholder,
                }}
                name={name}
                defaultOptions={options}
                unremovableOptions={unremovableOptions}
                value={selectedOptions}
                onChange={onChange}
                onSearch={onSearch}
                onSearchSync={onSearchSync}
                triggerSearchOnFocus={triggerSearchOnFocus}
                groupBy={groupBy}
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

export const SelectWithSearch = ({
    options,
    labelClassName,
    labelContent,
    name,
    onChange,
    value,
    placeholder,
    required,
    defaultValue,
    notFoundLabel,
    searchPlaceholder,
    containerClassName,
    dropdownClassName,
    dropdownOptionClassName,
    elementClassName,
    notFoundLabelClassName,
    searchClassName,
    selectButtonClassName,
}: SelectWithSearchProps) => {
    return (
        <div className={cn(`flex justify-between items-center w-full`, containerClassName)}>
            {labelContent && <ElementLabel labelContent={labelContent} labelClassName={labelClassName} name={name} required={required} />}
            <SearchSelect
                // values props
                options={options.sort()}
                value={value}
                onChange={onChange}
                defaultValue={defaultValue}
                name={name}
                // select props
                elementClassName={elementClassName}
                selectPlaceholder={placeholder}
                selectButtonClassName={selectButtonClassName}
                // search props
                searchClassName={searchClassName}
                searchPlaceholder={searchPlaceholder}
                //dropdown props
                dropdownClassName={dropdownClassName}
                dropdownOptionClassName={dropdownOptionClassName}
                // not found props
                notFoundLabelClassName={notFoundLabelClassName}
                notFoundLabel={notFoundLabel}
            />
        </div>
    );
};

export const TextAreaContainer = ({
    name = "",
    labelContent = "",
    defaultValue = "",
    containerClassName = "",
    labelClassName = "",
    elementClassName = "",
    required = false,
    placeholder,
    props,
    minLength,
    onKeyDown,
    onChange,
}: TextAreaContainerProps) => {
    return (
        <div className={cn(`flex flex-col gap-2 items-center`, containerClassName)}>
            {labelContent && (
                <ElementLabel
                    labelContent={labelContent}
                    labelClassName={`w-fit text-xl px-2 border-b-2 border-[#000] text-center ${labelClassName}`}
                    name={name}
                    required={required}
                    withDots={false}
                />
            )}
            <textarea
                {...props}
                onChange={onChange}
                minLength={minLength}
                placeholder={placeholder}
                className={cn(`w-full bg-inherit border-[1px] border-black min-h-16 max-h-52 px-2`, elementClassName)}
                defaultValue={defaultValue}
                required={required}
                name={name}
                onKeyDown={onKeyDown}
            />
        </div>
    );
};

export const ElementLabel = ({
    labelContent,
    labelClassName,
    name,
    required,
    withDots = true,
}: Omit<BaseElementProps, "containerClassName" | "elementClassName"> & { withDots?: boolean }) => {
    return (
        <label className={cn(`text-start w-[30%] flex gap-0.5`, labelClassName)} htmlFor={name}>
            <div>{labelContent}</div>
            {required && <div className="text-red-500">*</div>}
            {withDots && <div>:</div>}
        </label>
    );
};

import MultipleSelector from "@/components/ui/multiselect";
import SearchSelect from "@/components/ui/SearchSelect";
import { ReactNode, useCallback, useMemo, useState } from "react";
import { cn, handleChange, useValidation } from "src/helpers";
import {
    BaseElementProps,
    Direction,
    InputContainerProps,
    MultiSelectProps,
    SelectContainerProps,
    SelectWithSearchProps,
    TextAreaContainerProps,
} from "src/types";

export { default as InternationalPhonePicker } from "./InternationalPhonePicker";

export const useSortValues = (options: any[], sortDirection: "abc" | "cba", sortAsNumber?: boolean) => {
    const sortOptions = useMemo(() => {
        const sorted = sortAsNumber
            ? options.sort((a, b) => parseInt(b.label) - parseInt(a.label))
            : options.sort((a, b) => a.label.localeCompare(b.label));
        return sortDirection === "cba" ? sorted.reverse() : sorted;
    }, [options, sortDirection, sortAsNumber]);
    return sortOptions;
};

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
    direction,
    value,
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
            {labelContent && (
                <ElementLabel direction={direction} labelContent={labelContent} labelClassName={labelClassName} name={name} required={required} />
            )}
            <input
                {...props}
                minLength={minLength}
                placeholder={placeholder}
                className={cn(`w-[70%] bg-inherit border-b-[1px] border-black px-2`, elementClassName)}
                defaultValue={defaultValue}
                {...validationProps}
                value={value}
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
    sortDirection = "abc",
    sortAsNumber,
    direction,
    onChange,
}: SelectContainerProps) => {
    const sortOptions = useSortValues(options, sortDirection, sortAsNumber);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(defaultValue || sortOptions[0]?.value || "");

    const handleOptionClick = (value: string) => {
        setSelectedValue(value);
        onChange?.(value);
        setIsOpen(false);
    };

    return (
        <div className={cn(`center`, containerClassName)}>
            {labelContent && (
                <ElementLabel direction={direction} labelContent={labelContent} labelClassName={labelClassName} name={name} required={required} />
            )}
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
                        {sortOptions.map((option) => (
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
    sortDirection = "abc",
    sortAsNumber,
    direction,
    createNewOptionLabel,
    searchInputProps,
}: MultiSelectProps) {
    const sortOptions = useSortValues(options, sortDirection, sortAsNumber);
    return (
        <div className={cn(`${labelContent ? "flex gap-1 items-center" : ""}`, styles.containerClassName)}>
            {labelContent && (
                <ElementLabel direction={direction} labelContent={labelContent} labelClassName={labelClassName} name={name} required={required} />
            )}
            <MultipleSelector
                commandProps={{
                    label: placeholder,
                }}
                name={name}
                defaultOptions={sortOptions}
                unremovableOptions={unremovableOptions}
                value={selectedOptions}
                onChange={onChange}
                onSearch={onSearch}
                onSearchSync={onSearchSync}
                triggerSearchOnFocus={triggerSearchOnFocus}
                groupBy={groupBy}
                placeholder={placeholder}
                createNewOptionLabel={createNewOptionLabel}
                hideClearAllButton
                hidePlaceholderWhenSelected
                badgeClassName={styles.badgeClassName}
                className={styles.className}
                dropdownClassName={styles.dropdownClassName}
                dropdownOptionClassName={styles.dropdownOptionClassName}
                emptyIndicator={emptyOptionsElement || <p className="text-center text-sm">{"all options selected."}</p>}
                emptyIndicatorClassName={styles.emptyIndicatorClassName}
                dropdownContainerClassName={styles.dropdownContainerClassName}
                inputProps={searchInputProps}
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
    buttonClassName,
    buttonFocusClassName,
    sortDirection = "abc",
    sortAsNumber,
    disabled,
    direction,
    createNewOptionLabel,
    createNewOptionContainerClassName,
}: SelectWithSearchProps) => {
    const sortOptions = useSortValues(options, sortDirection, sortAsNumber);
    return (
        <div className={cn(`flex justify-between items-center w-full`, containerClassName)}>
            {labelContent && (
                <ElementLabel direction={direction} labelContent={labelContent} labelClassName={labelClassName} name={name} required={required} />
            )}
            <SearchSelect
                direction={direction}
                // values props
                createNewOptionLabel={createNewOptionLabel}
                createNewOptionContainerClassName={createNewOptionContainerClassName}
                options={sortOptions}
                value={value}
                onChange={onChange}
                defaultValue={defaultValue}
                name={name}
                // select props
                elementClassName={elementClassName}
                selectPlaceholder={placeholder}
                buttonClassName={buttonClassName}
                buttonFocusClassName={buttonFocusClassName}
                disabled={disabled}
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
    direction,
}: TextAreaContainerProps) => {
    return (
        <div className={cn(`flex flex-col gap-2 items-center`, containerClassName)}>
            {labelContent && (
                <ElementLabel
                    direction={direction}
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
    direction,
}: Omit<BaseElementProps, "containerClassName" | "elementClassName"> & { withDots?: boolean }) => {
    return (
        <label style={{ direction: direction }} className={cn(`text-start w-[30%] flex gap-0.5`, labelClassName)} htmlFor={name}>
            <div>{labelContent}</div>
            {required && <div className="text-red-500">*</div>}
            {withDots && <div>:</div>}
        </label>
    );
};

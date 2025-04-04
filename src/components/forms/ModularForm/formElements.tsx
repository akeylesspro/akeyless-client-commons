import MultipleSelector from "@/components/ui/multiselect";
import SearchSelect from "@/components/ui/SearchSelect";
import { Checkbox, CheckBoxProps } from "@/components/utils";
import { ComponentProps, CSSProperties, ReactNode, useCallback, useMemo, useState } from "react";
import { cn, handleChange, useValidation } from "src/helpers";
import {
    BaseElementProps,
    CheckboxContainerProps,
    Direction,
    FormSeparatorProps,
    InputContainerProps,
    MultiSelectProps,
    SelectContainerProps,
    SelectWithSearchProps,
    TextAreaContainerProps,
} from "src/types";

export { default as InternationalPhonePicker } from "./InternationalPhonePicker";
export const defaultFormElementContainerClassName = "flex justify-start items-center gap-3 w-full";
export const defaultFormElementBorderClassName = "border-[1px] border-gray-300 hover:border-black rounded-sm";

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
    labelWithDots,
    labelsCommonClassName,
    title,
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
    const containerProps = useMemo(() => {
        return { containerClassName, direction, labelClassName, labelContent, labelWithDots, labelsCommonClassName, name, required };
    }, [containerClassName, direction, labelClassName, labelContent, labelWithDots, labelsCommonClassName, name, required]);
    return (
        <FormElementContainer {...containerProps}>
            <input
                {...props}
                title={title}
                minLength={minLength}
                placeholder={placeholder}
                className={cn(`flex-1 bg-inherit h-9 py-2 px-3`, defaultFormElementBorderClassName, elementClassName)}
                defaultValue={defaultValue}
                {...validationProps}
                value={value}
                onChange={(e) => handleChangeFunction(e)}
                required={required}
                name={name}
                onKeyDown={onKeyDown}
                type={inputType}
            />
        </FormElementContainer>
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
    selectClassName = "",
    optionsContainerClassName = "",
    sortDirection = "abc",
    sortAsNumber,
    direction,
    onChange,
    labelWithDots,
    iconClassName,
    labelsCommonClassName,
    title,
}: SelectContainerProps) => {
    const sortOptions = useSortValues(options, sortDirection, sortAsNumber);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(defaultValue || sortOptions[0]?.value || "");

    const handleOptionClick = (value: string) => {
        setSelectedValue(value);
        onChange?.(value);
        setIsOpen(false);
    };
    const containerProps = useMemo(() => {
        return { containerClassName, direction, labelClassName, labelContent, labelWithDots, labelsCommonClassName, name, required };
    }, [containerClassName, direction, labelClassName, labelContent, labelWithDots, labelsCommonClassName, name, required]);
    return (
        <FormElementContainer {...containerProps}>
            <div title={title} style={{ direction }} className={cn(`flex-1 relative`, elementClassName)} onClick={() => setIsOpen(!isOpen)}>
                <div
                    className={cn(
                        `h-9 max-h-9 py-2 px-3 flex items-center justify-center cursor-pointer`,
                        defaultFormElementBorderClassName,
                        selectClassName
                    )}
                >
                    {options.find((opt) => opt.value === selectedValue)?.label || selectedValue}
                </div>
                {isOpen ? (
                    <i
                        className={cn(
                            `fa-light fa-chevron-up absolute top-3 ${direction === "ltr" ? "right-2" : "left-2"} cursor-pointer`,
                            iconClassName
                        )}
                    ></i>
                ) : (
                    <i
                        className={cn(
                            `fa-light fa-chevron-down absolute top-3 ${direction === "ltr" ? "right-2" : "left-2"} cursor-pointer`,
                            iconClassName
                        )}
                    ></i>
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
        </FormElementContainer>
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
    labelWithDots,
    labelsCommonClassName,
}: MultiSelectProps) {
    const sortOptions = useSortValues(options, sortDirection, sortAsNumber);
    const containerProps = useMemo(() => {
        return {
            containerClassName: styles.containerClassName,
            direction,
            labelClassName,
            labelContent,
            labelWithDots,
            labelsCommonClassName,
            name,
            required,
            defaultContainerClassName: !!labelContent,
        };
    }, [styles.containerClassName, direction, labelClassName, labelContent, labelWithDots, labelsCommonClassName, name, required]);
    return (
        <FormElementContainer {...containerProps}>
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
                className={cn(defaultFormElementBorderClassName, styles.className)}
                dropdownClassName={styles.dropdownClassName}
                dropdownOptionClassName={styles.dropdownOptionClassName}
                emptyIndicator={emptyOptionsElement || <p className="text-center text-sm">{"all options selected."}</p>}
                emptyIndicatorClassName={styles.emptyIndicatorClassName}
                dropdownContainerClassName={styles.dropdownContainerClassName}
                inputProps={searchInputProps}
            />
        </FormElementContainer>
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
    labelWithDots,
    labelsCommonClassName,
}: SelectWithSearchProps) => {
    const sortOptions = useSortValues(options, sortDirection, sortAsNumber);
    const containerProps = useMemo(() => {
        return {
            containerClassName: containerClassName,
            direction,
            labelClassName,
            labelContent,
            labelWithDots,
            labelsCommonClassName,
            name,
            required,
        };
    }, [containerClassName, direction, labelClassName, labelContent, labelWithDots, labelsCommonClassName, name, required]);
    return (
        <FormElementContainer {...containerProps}>
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
                buttonClassName={cn(defaultFormElementBorderClassName, buttonClassName)}
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
        </FormElementContainer>
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
    labelWithDots,
    labelsCommonClassName,
}: TextAreaContainerProps) => {
    const containerProps = useMemo(() => {
        return {
            containerClassName: containerClassName,
            direction,
            labelClassName,
            labelContent,
            labelWithDots,
            labelsCommonClassName,
            name,
            required,
        };
    }, [containerClassName, direction, labelClassName, labelContent, labelWithDots, labelsCommonClassName, name, required]);
    return (
        <FormElementContainer {...containerProps}>
            <textarea
                {...props}
                onChange={onChange}
                minLength={minLength}
                placeholder={placeholder}
                className={cn(`flex-1 bg-inherit min-h-16 max-h-52 overflow-auto px-2 py-1`, defaultFormElementBorderClassName, elementClassName)}
                defaultValue={defaultValue}
                required={required}
                name={name}
                onKeyDown={onKeyDown}
            />
        </FormElementContainer>
    );
};

export const FormSeparator = ({ props, children }: FormSeparatorProps) => {
    return (
        <div {...props} className={cn("border-b-[1px] border-gray-300 h-[1px]", props?.className)}>
            {children}
        </div>
    );
};

export const CheckboxContainer = ({
    id,
    checked,
    setChecked,
    circleClassName,
    className,
    containerClassName,
    elementClassName,
    name,
    direction,
    labelClassName,
    labelContent,
    labelWithDots,
    labelsCommonClassName,
    props,
    rotate,
    title,
    required,
}: CheckboxContainerProps) => {
    const containerProps = useMemo(() => {
        return {
            containerClassName: containerClassName,
            direction,
            labelClassName,
            labelContent,
            labelWithDots,
            labelsCommonClassName,
            name,
            required,
        };
    }, [containerClassName, direction, labelClassName, labelContent, labelWithDots, labelsCommonClassName, name, required]);
    return (
        <FormElementContainer {...containerProps}>
            <Checkbox
                id={id}
                name={name}
                checked={checked}
                setChecked={setChecked}
                props={props}
                rotate={rotate}
                circleClassName={circleClassName}
                className={className}
                containerClassName={containerClassName}
                elementClassName={elementClassName}
                title={title}
            />
        </FormElementContainer>
    );
};

export const FormElementContainer = ({
    containerClassName,
    direction,
    labelClassName,
    labelContent,
    labelWithDots,
    labelsCommonClassName,
    name,
    required,
    children,
    defaultContainerClassName = true,
}: BaseElementProps & { children: ReactNode; defaultContainerClassName?: boolean }) => {
    return (
        <div className={cn(defaultContainerClassName ? defaultFormElementContainerClassName : "", containerClassName)}>
            {labelContent && (
                <ElementLabel
                    labelsCommonClassName={labelsCommonClassName}
                    withDots={labelWithDots}
                    direction={direction}
                    labelContent={labelContent}
                    labelClassName={labelClassName}
                    name={name}
                    required={required}
                />
            )}
            {children}
        </div>
    );
};

export const ElementLabel = ({
    labelContent,
    labelClassName,
    name,
    required,
    withDots = false,
    direction,
    labelsCommonClassName,
}: Omit<BaseElementProps, "containerClassName" | "elementClassName"> & { withDots?: boolean }) => {
    return (
        <label
            style={{ direction: direction }}
            className={cn(`text-start w-fit flex gap-0.5 text-nowrap form-label`, labelsCommonClassName, labelClassName)}
            htmlFor={name}
        >
            <div>{labelContent}</div>
            {required && <div className="text-red-500">*</div>}
            {withDots && <div>:</div>}
        </label>
    );
};

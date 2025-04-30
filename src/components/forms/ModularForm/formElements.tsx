import MultipleSelector from "@/components/ui/multiselect";
import SearchSelect from "@/components/ui/SearchSelect";
import { Checkbox, CheckBoxProps } from "@/components/utils";
import { useDeepCompareEffect } from "@/hooks/react";
import {
    Children,
    cloneElement,
    ComponentProps,
    CSSProperties,
    isValidElement,
    memo,
    ReactNode,
    useCallback,
    useMemo,
    useRef,
    useState,
} from "react";
import { cn, handleChange, propsAreEqual, useValidation } from "src/helpers";
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
    labelStyle,
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
        return { containerClassName, direction, labelClassName, labelContent, labelWithDots, labelsCommonClassName, name, required, labelStyle };
    }, [containerClassName, direction, labelClassName, labelContent, labelWithDots, labelsCommonClassName, name, required, labelStyle]);
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
    labelStyle,
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
        return { containerClassName, direction, labelClassName, labelContent, labelWithDots, labelsCommonClassName, name, required, labelStyle };
    }, [containerClassName, direction, labelClassName, labelContent, labelWithDots, labelsCommonClassName, name, required, labelStyle]);
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
    labelStyle,
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
            labelStyle,
        };
    }, [styles.containerClassName, direction, labelClassName, labelContent, labelWithDots, labelsCommonClassName, name, required, labelStyle]);
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
    labelStyle,
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
            labelStyle,
        };
    }, [containerClassName, direction, labelClassName, labelContent, labelWithDots, labelsCommonClassName, name, required, labelStyle]);
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
    value,
    onChange,
    direction,
    labelWithDots,
    labelsCommonClassName,
    labelStyle,
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
            labelStyle,
        };
    }, [containerClassName, direction, labelClassName, labelContent, labelWithDots, labelsCommonClassName, name, required, labelStyle]);
    return (
        <FormElementContainer {...containerProps}>
            <textarea
                {...props}
                value={value}
                onChange={onChange}
                dir={direction}
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
    disabled,
    title,
    inputProps,
    required,
    labelStyle,
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
            labelStyle,
        };
    }, [containerClassName, direction, labelClassName, labelContent, labelWithDots, labelsCommonClassName, name, required, labelStyle]);
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
                disabled={disabled}
                inputProps={inputProps}
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
    labelStyle,
}: BaseElementProps & { children: ReactNode; defaultContainerClassName?: boolean }) => {
    return (
        <div className={cn(defaultContainerClassName ? defaultFormElementContainerClassName : "", containerClassName)}>
            {labelContent && (
                <ElementLabel
                    labelStyle={labelStyle}
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
    labelStyle = {},
}: Omit<BaseElementProps, "containerClassName" | "elementClassName"> & { withDots?: boolean }) => {
    return (
        <label
            style={{ direction: direction, ...labelStyle }}
            className={cn(`text-start w-fit flex gap-0.5 text-nowrap form-label`, labelsCommonClassName, labelClassName)}
            htmlFor={name}
            title={labelContent}
        >
            {labelContent}
            {required && <div className="text-red-500">*</div>}
            {withDots && <div>:</div>}
        </label>
    );
};

/// elements container
export interface ElementsContainerProps extends BaseElementProps {
    children: ReactNode;
    childrenContainerClassName?: string;
    className?: string;
    headlineClassName?: string;
    autoFixLabelsWidth?: boolean;
    autoFixLabelsWidthDeps?: any[];
    headline?: string;
}
export const ElementsContainer = memo((props: ElementsContainerProps) => {
    const {
        children,
        className,
        elementClassName,
        labelClassName,
        headline,
        headlineClassName,
        autoFixLabelsWidth = true,
        autoFixLabelsWidthDeps = [labelClassName],
        containerClassName,
        childrenContainerClassName,
    } = props;

    const elementProps = useMemo(() => {
        const clone = { ...props };
        delete clone.children;
        delete clone.className;
        delete clone.headline;
        delete clone.headlineClassName;
        delete clone.autoFixLabelsWidth;
        delete clone.autoFixLabelsWidthDeps;
        return clone;
    }, [props]);

    const containerRef = useRef<HTMLDivElement>(null);
    useDeepCompareEffect(() => {
        if (containerRef.current && autoFixLabelsWidth) {
            const labels = containerRef.current.getElementsByClassName("form-label");
            let max_width = 0;
            Array.from(labels).forEach((label) => {
                // const label_width = label.clientWidth || (label as HTMLElement).offsetWidth || (label as HTMLElement).scrollWidth;
                const label_width = label.scrollWidth;
                // const label_width = label.clientWidth;
                if (label_width > max_width) {
                    max_width = label_width;
                }
            });
            Array.from(labels).forEach((label) => {
                (label as HTMLElement).style.minWidth = `${max_width}px`;
            });
        }
    }, autoFixLabelsWidthDeps);

    const enhancedChildren = useMemo(() => {
        return Children.map(children, (child) => {
            if (!isValidElement(child) || typeof child.type == "string") {
                return child;
            }
            const props = elementProps;
            if (isValidElement<{ elementClassName?: string }>(child)) {
                props.elementClassName = cn(elementClassName, child.props.elementClassName);
            }
            if (isValidElement<{ labelClassName?: string }>(child)) {
                props.labelClassName = cn(labelClassName, child.props.labelClassName);
            }
            if (isValidElement<{ containerClassName?: string }>(child)) {
                props.containerClassName = cn(containerClassName, child.props.containerClassName);
            }
            return cloneElement(child, props);
        });
    }, [children, elementClassName, labelClassName, containerClassName, elementProps]);

    return (
        <div ref={containerRef} className={cn("border-[1px] border-gray-400 flex flex-col h-fit w-64 rounded-md", className)}>
            {headline && (
                <div className={cn("text-start text-primary font-bold border-b-[1px] border-gray-400 pb-0.5", headlineClassName)}>{headline}</div>
            )}
            <div className={cn("flex flex-col gap-1.5", childrenContainerClassName)}>{enhancedChildren}</div>
        </div>
    );
}, propsAreEqual);
ElementsContainer.displayName = "ElementsContainer";

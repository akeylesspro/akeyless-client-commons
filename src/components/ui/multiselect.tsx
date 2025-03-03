"use client";
import ReactDOM from "react-dom";
import { Command as CommandPrimitive, useCommandState } from "cmdk";
import { X } from "lucide-react";
import * as React from "react";
import { forwardRef, useEffect, useCallback, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { isEqual } from "lodash";
import { useFloating, offset, flip, shift, autoUpdate } from "@floating-ui/react-dom";

const Portal = ({ children }: { children: React.ReactNode }) => {
    return ReactDOM.createPortal(children, document.body);
};

export interface MultipleSelectorOption {
    value: string;
    label: string;
    disable?: boolean;
    fixed?: boolean;
    [key: string]: string | boolean | undefined;
}

interface GroupOption {
    [key: string]: MultipleSelectorOption[];
}

function transToGroupOption(options: MultipleSelectorOption[], groupBy?: string) {
    if (options.length === 0) return {};
    if (!groupBy) return { "": options };
    const groupOption: GroupOption = {};
    options.forEach((option) => {
        const key = (option[groupBy] as string) || "";
        if (!groupOption[key]) {
            groupOption[key] = [];
        }
        groupOption[key].push(option);
    });
    return groupOption;
}

function removePickedOption(groupOption: GroupOption, picked: MultipleSelectorOption[]) {
    const cloneOption = JSON.parse(JSON.stringify(groupOption)) as GroupOption;
    for (const [key, value] of Object.entries(cloneOption)) {
        cloneOption[key] = value.filter((val) => !picked.find((p) => p.value === val.value));
    }
    return cloneOption;
}

function isOptionsExist(groupOption: GroupOption, targetOption: MultipleSelectorOption[]) {
    for (const [, value] of Object.entries(groupOption)) {
        if (value.some((option) => targetOption.find((p) => p.value === option.value))) {
            return true;
        }
    }
    return false;
}

const CommandEmpty = forwardRef<HTMLDivElement, React.ComponentProps<typeof CommandPrimitive.Empty>>(({ className, ...props }, forwardedRef) => {
    const render = useCommandState((state) => state.filtered.count === 0);
    if (!render) return null;
    return <div ref={forwardedRef} className={cn("px-2 py-4 text-center text-sm", className)} cmdk-empty="" role="presentation" {...props} />;
});
CommandEmpty.displayName = "CommandEmpty";

export function useDebounce<T>(value: T, delay?: number): T {
    const [debouncedValue, setDebouncedValue] = React.useState<T>(value);
    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay || 500);
        return () => clearTimeout(timer);
    }, [value, delay]);
    return debouncedValue;
}

export interface MultipleSelectorProps {
    value?: MultipleSelectorOption[];
    defaultOptions?: MultipleSelectorOption[];
    options?: MultipleSelectorOption[];
    placeholder?: string;
    loadingIndicator?: React.ReactNode;
    emptyIndicator?: React.ReactNode;
    delay?: number;
    triggerSearchOnFocus?: boolean;
    onSearch?: (value: string) => Promise<MultipleSelectorOption[]>;
    onSearchSync?: (value: string) => MultipleSelectorOption[];
    onChange?: (options: MultipleSelectorOption[]) => void;
    maxSelected?: number;
    onMaxSelected?: (maxLimit: number) => void;
    hidePlaceholderWhenSelected?: boolean;
    disabled?: boolean;
    groupBy?: string;
    className?: string;
    badgeClassName?: string;
    selectFirstItem?: boolean;
    creatable?: boolean;
    commandProps?: React.ComponentPropsWithoutRef<typeof Command>;
    inputProps?: Omit<React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>, "value" | "placeholder" | "disabled">;
    hideClearAllButton?: boolean;
    dropdownClassName?: string;
    dropdownOptionClassName?: string;
    dropdownContainerClassName?: string;
    emptyIndicatorClassName?: string;
    unremovableOptions?: MultipleSelectorOption[];
    name?: string;
}

export interface MultipleSelectorRef {
    selectedValue: MultipleSelectorOption[];
    input: HTMLInputElement;
    focus: () => void;
    reset: () => void;
}

const MultipleSelector = forwardRef<MultipleSelectorRef, MultipleSelectorProps>(
    (
        {
            value,
            onChange,
            placeholder,
            defaultOptions: arrayDefaultOptions = [],
            options: arrayOptions,
            delay,
            onSearch,
            onSearchSync,
            loadingIndicator,
            emptyIndicator,
            maxSelected = Number.MAX_SAFE_INTEGER,
            onMaxSelected,
            hidePlaceholderWhenSelected,
            disabled,
            groupBy,
            className,
            badgeClassName,
            selectFirstItem = true,
            creatable = false,
            triggerSearchOnFocus = true,
            commandProps,
            inputProps,
            hideClearAllButton = false,
            dropdownClassName,
            dropdownOptionClassName,
            emptyIndicatorClassName,
            unremovableOptions = [],
            name,
            dropdownContainerClassName = "",
        },
        ref
    ) => {
        const [isLoading, setIsLoading] = React.useState(false);
        const { x, y, strategy, refs, update } = useFloating({
            placement: "bottom-start",
            middleware: [offset(4), flip(), shift()],
            whileElementsMounted: autoUpdate,
        });

        const containerRef = useRef<HTMLDivElement>(null);
        const setContainerRef = (node: HTMLDivElement) => {
            containerRef.current = node;
            refs.setReference(node);
        };

        const inputRef = useRef<HTMLInputElement>(null);

        const [open, setOpen] = React.useState(false);
        const [onScrollbar, setOnScrollbar] = React.useState(false);
        const dropdownRef = useRef<HTMLDivElement>(null);

        const [selected, setSelected] = React.useState<MultipleSelectorOption[]>(value || []);
        const [options, setOptions] = React.useState<GroupOption>(transToGroupOption(arrayDefaultOptions, groupBy));
        const [inputValue, setInputValue] = React.useState("");
        const debouncedSearchTerm = useDebounce(inputValue, delay || 500);

        React.useImperativeHandle(
            ref,
            () => ({
                selectedValue: [...selected],
                input: inputRef.current as HTMLInputElement,
                focus: () => inputRef.current?.focus(),
                reset: () => setSelected([]),
            }),
            [selected]
        );

        useEffect(() => {
            if (open) {
                update();
            }
        }, [open, update]);

        const handleClickOutside = useCallback((event: MouseEvent | TouchEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
                inputRef.current?.blur();
            }
        }, []);

        useEffect(() => {
            if (open) {
                document.addEventListener("mousedown", handleClickOutside);
                document.addEventListener("touchend", handleClickOutside);
            } else {
                document.removeEventListener("mousedown", handleClickOutside);
                document.removeEventListener("touchend", handleClickOutside);
            }
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
                document.removeEventListener("touchend", handleClickOutside);
            };
        }, [open, handleClickOutside]);

        useEffect(() => {
            if (value) {
                setSelected(value);
            }
        }, [value]);

        useEffect(() => {
            if (!arrayOptions || onSearch) return;
            const newOption = transToGroupOption(arrayOptions || [], groupBy);
            if (JSON.stringify(newOption) !== JSON.stringify(options)) {
                setOptions(newOption);
            }
        }, [arrayDefaultOptions, arrayOptions, groupBy, onSearch, options]);

        useEffect(() => {
            const doSearchSync = () => {
                const res = onSearchSync?.(debouncedSearchTerm);
                setOptions(transToGroupOption(res || [], groupBy));
            };
            const exec = async () => {
                if (!onSearchSync || !open) return;
                if (triggerSearchOnFocus) {
                    doSearchSync();
                }
                if (debouncedSearchTerm) {
                    doSearchSync();
                }
            };
            void exec();
        }, [debouncedSearchTerm, groupBy, open, triggerSearchOnFocus, onSearchSync]);

        useEffect(() => {
            const doSearch = async () => {
                setIsLoading(true);
                const res = await onSearch?.(debouncedSearchTerm);
                setOptions(transToGroupOption(res || [], groupBy));
                setIsLoading(false);
            };
            const exec = async () => {
                if (!onSearch || !open) return;
                if (triggerSearchOnFocus) {
                    await doSearch();
                }
                if (debouncedSearchTerm) {
                    await doSearch();
                }
            };
            void exec();
        }, [debouncedSearchTerm, groupBy, open, triggerSearchOnFocus, onSearch]);

        const handleUnselect = useCallback(
            (option: MultipleSelectorOption) => {
                if (unremovableOptions.find((v) => isEqual(v.value, option.value))) {
                    return;
                }
                const newOptions = selected.filter((s) => s.value !== option.value);
                setSelected(newOptions);
                onChange?.(newOptions);
            },
            [onChange, selected, unremovableOptions]
        );

        const handleKeyDown = useCallback(
            (e: React.KeyboardEvent<HTMLDivElement>) => {
                const input = inputRef.current;
                if (input) {
                    if (e.key === "Delete" || e.key === "Backspace") {
                        if (input.value === "" && selected.length > 0) {
                            const lastSelectOption = selected[selected.length - 1];
                            if (!lastSelectOption.fixed) {
                                handleUnselect(lastSelectOption);
                            }
                        }
                    }
                    if (e.key === "Escape") {
                        input.blur();
                    }
                }
            },
            [handleUnselect, selected]
        );

        const combinedFloatingRef = useCallback(
            (node: HTMLDivElement | null) => {
                if (!node) return;
                refs.setFloating(node);
                dropdownRef.current = node;
            },
            [refs]
        );

        const CreatableItem = () => {
            if (!creatable) return undefined;
            if (isOptionsExist(options, [{ value: inputValue, label: inputValue }]) || selected.find((s) => s.value === inputValue)) {
                return undefined;
            }
            const Item = (
                <CommandItem
                    value={inputValue}
                    className="cursor-pointer"
                    onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                    onSelect={(val: string) => {
                        if (selected.length >= maxSelected) {
                            onMaxSelected?.(selected.length);
                            return;
                        }
                        setInputValue("");
                        const newOptions = [...selected, { value: val, label: val }];
                        setSelected(newOptions);
                        onChange?.(newOptions);
                    }}
                >
                    {`Create "${inputValue}"`}
                </CommandItem>
            );
            if (!onSearch && inputValue.length > 0) {
                return Item;
            }
            if (onSearch && debouncedSearchTerm.length > 0 && !isLoading) {
                return Item;
            }
            return undefined;
        };

        const EmptyItem = useCallback(() => {
            if (!emptyIndicator) return undefined;
            if (onSearch && !creatable && Object.keys(options).length === 0) {
                return (
                    <CommandItem className="" value="-" disabled>
                        {emptyIndicator}
                    </CommandItem>
                );
            }
            return <CommandEmpty className={emptyIndicatorClassName}>{emptyIndicator}</CommandEmpty>;
        }, [creatable, emptyIndicator, onSearch, options, emptyIndicatorClassName]);

        const selectables = useMemo<GroupOption>(() => removePickedOption(options, selected), [options, selected]);

        const commandFilter = useCallback(() => {
            if (commandProps?.filter) {
                return commandProps.filter;
            }
            if (creatable) {
                return (value: string, search: string) => (value.toLowerCase().includes(search.toLowerCase()) ? 1 : -1);
            }
            return undefined;
        }, [creatable, commandProps?.filter]);

        return (
            <Command
                {...commandProps}
                onKeyDown={(e) => {
                    handleKeyDown(e);
                    commandProps?.onKeyDown?.(e);
                }}
                className={cn("h-auto overflow-visible bg-transparent", commandProps?.className)}
                shouldFilter={commandProps?.shouldFilter !== undefined ? commandProps.shouldFilter : !onSearch}
                filter={commandFilter()}
            >
                {/* select */}
                <div
                    ref={setContainerRef}
                    className={cn(
                        "relative min-h-[38px] py-2 rounded-lg border border-input text-sm transition-shadow focus-within:border-ring focus-within:outline-none focus-within:ring-[3px] focus-within:ring-ring/20 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50",
                        {
                            "p-1": selected.length !== 0,
                            "cursor-text": !disabled && selected.length !== 0,
                        },
                        !hideClearAllButton && "pe-9",
                        className
                    )}
                    onClick={() => {
                        if (disabled) return;
                        inputRef.current?.focus();
                    }}
                >
                    <div className="flex flex-wrap gap-1">
                        {/* selected ui */}
                        {selected.map((option) => (
                            <div
                                key={option.value}
                                className={cn(
                                    "animate-fadeIn relative inline-flex h-7 cursor-default items-center rounded-md border border-solid bg-background pe-7 pl-2 ps-2 text-xs font-medium text-secondary-foreground transition-all hover:bg-background disabled:cursor-not-allowed disabled:opacity-50 data-[fixed]:pe-2 px-1",
                                    badgeClassName
                                )}
                                data-fixed={option.fixed}
                                data-disabled={disabled || undefined}
                            >
                                {option.label}
                                {!unremovableOptions.find((v) => isEqual(v.value, option.value)) && (
                                    <button
                                        className="absolute -inset-y-px -end-px flex size-7 items-center justify-center rounded-e-lg border border-transparent p-0 text-muted-foreground/80 outline-0 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                handleUnselect(option);
                                            }
                                        }}
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                        }}
                                        onClick={() => handleUnselect(option)}
                                        aria-label="Remove"
                                    >
                                        <X size={14} strokeWidth={2} aria-hidden="true" />
                                    </button>
                                )}
                            </div>
                        ))}
                        {/* search input */}
                        <CommandPrimitive.Input
                            {...inputProps}
                            ref={inputRef}
                            value={inputValue}
                            disabled={disabled}
                            onValueChange={(val) => {
                                setInputValue(val);
                                inputProps?.onValueChange?.(val);
                            }}
                            onBlur={(event) => {
                                if (!onScrollbar) {
                                    setOpen(false);
                                }
                                inputProps?.onBlur?.(event);
                            }}
                            onFocus={(event) => {
                                setOpen(true);
                                if (triggerSearchOnFocus) {
                                    onSearch?.(debouncedSearchTerm);
                                }
                                inputProps?.onFocus?.(event);
                            }}
                            placeholder={hidePlaceholderWhenSelected && selected.length !== 0 ? "" : placeholder}
                            className={cn(
                                "flex-1 bg-transparent outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed placeholder:pt-3",
                                {
                                    "w-full": hidePlaceholderWhenSelected,
                                    "px-3 py-2": selected.length === 0,
                                    "ml-1": selected.length !== 0,
                                },
                                inputProps?.className
                            )}
                        />
                        <button
                            type="button"
                            onClick={() => {
                                setSelected(selected.filter((s) => s.fixed));
                                onChange?.(selected.filter((s) => s.fixed));
                            }}
                            className={cn(
                                "absolute end-0 top-0 flex size-9 items-center justify-center rounded-lg border border-transparent text-muted-foreground/80 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70",
                                (hideClearAllButton ||
                                    disabled ||
                                    selected.length < 1 ||
                                    selected.filter((s) => s.fixed).length === selected.length) &&
                                    "hidden"
                            )}
                            aria-label="Clear all"
                        >
                            <X size={16} strokeWidth={2} aria-hidden="true" />
                        </button>
                    </div>
                </div>

                {/**dropdown */}
                {open && (
                    <Portal>
                        <div
                            ref={combinedFloatingRef}
                            style={{
                                position: strategy,
                                top: y ?? 0,
                                left: x ?? 0,
                                width: containerRef.current?.offsetWidth,
                            }}
                            className={cn("z-[9999] overflow-hidden rounded-lg border border-input", dropdownContainerClassName)}
                            data-state={open ? "open" : "closed"}
                        >
                            <CommandList
                                className="bg-popover text-popover-foreground shadow-lg shadow-black/5 outline-none"
                                onMouseLeave={() => {
                                    setOnScrollbar(false);
                                }}
                                onMouseEnter={() => {
                                    setOnScrollbar(true);
                                }}
                                onMouseUp={() => {
                                    inputRef.current?.focus();
                                }}
                            >
                                {isLoading ? (
                                    <>{loadingIndicator}</>
                                ) : (
                                    <>
                                        {EmptyItem()}
                                        {CreatableItem()}
                                        {!selectFirstItem && <CommandItem value="-" className="hidden" />}
                                        {Object.entries(selectables).map(([key, dropdowns]) => (
                                            <CommandGroup key={key} heading={key} className={cn("h-full overflow-auto", dropdownClassName)}>
                                                {dropdowns.map((option) => (
                                                    <CommandItem
                                                        key={option.value}
                                                        value={option.value}
                                                        disabled={option.disable}
                                                        onMouseDown={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                        }}
                                                        onSelect={() => {
                                                            setOptions(transToGroupOption(arrayDefaultOptions, groupBy));
                                                            if (selected.length >= maxSelected) {
                                                                onMaxSelected?.(selected.length);
                                                                return;
                                                            }
                                                            setInputValue("");
                                                            const newOptions = [...selected, option];
                                                            setSelected(newOptions);
                                                            onChange?.(newOptions);
                                                        }}
                                                        className={cn(
                                                            "cursor-pointer",
                                                            option.disable && "cursor-not-allowed opacity-50",
                                                            dropdownOptionClassName
                                                        )}
                                                    >
                                                        {option.label}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        ))}
                                    </>
                                )}
                            </CommandList>
                        </div>
                    </Portal>
                )}

                <input value={JSON.stringify(selected)} type="hidden" name={name} />
            </Command>
        );
    }
);

MultipleSelector.displayName = "MultipleSelector";
export default MultipleSelector;

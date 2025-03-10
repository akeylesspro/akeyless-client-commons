"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandInput, CommandGroup, CommandItem, CommandList, CommandEmpty } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { useCallback, useEffect, useId, useMemo, useState } from "react";
import { Direction } from "src/types";

export interface SearchSelectOptions extends Record<string, string> {
    value: string;
    label: string;
}
export interface SearchSelectProps {
    options: SearchSelectOptions[];
    selectPlaceholder?: string;
    name?: string;
    notFoundLabel?: string;
    searchPlaceholder?: string;
    defaultValue?: SearchSelectOptions["value"];
    dropdownClassName?: string;
    dropdownOptionClassName?: string;
    notFoundLabelClassName?: string;
    selectButtonClassName?: string;
    elementClassName?: string;
    searchClassName?: string;
    onChange?: (value: SearchSelectOptions["value"]) => void;
    value?: SearchSelectOptions["value"];
    disabled?: boolean;
    direction?: Direction;
    createNewOptionLabel?: string;
}

export default function SearchSelect({
    options,
    name,
    selectPlaceholder = "Select",
    defaultValue,
    searchPlaceholder = "Search",
    dropdownClassName,
    dropdownOptionClassName,
    notFoundLabel,
    notFoundLabelClassName,
    elementClassName,
    searchClassName,
    selectButtonClassName,
    value,
    disabled,
    onChange,
    direction,
    createNewOptionLabel,
}: SearchSelectProps) {
    const id = useId();
    const [open, setOpen] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<SearchSelectOptions["value"]>(value || defaultValue || "");
    const [searchQuery, setSearchQuery] = useState("");
    const [newOptions, setNewOptions] = useState<SearchSelectOptions[]>([]);
    useEffect(() => {
        setSelectedValue(value);
    }, [value]);
    const allOptions = useMemo(() => [...options, ...newOptions], [options, newOptions]);

    const filteredOptions = useMemo(() => {
        if (!searchQuery) return allOptions;
        const query = searchQuery.toLowerCase().trim();
        return allOptions.filter((option) => Object.values(option).some((field) => field.toLowerCase().trim().includes(query)));
    }, [allOptions, searchQuery]);

    const selectLabel = useMemo(() => {
        return selectedValue ? allOptions.find((item) => item.value === selectedValue)?.label || selectPlaceholder : selectPlaceholder;
    }, [selectedValue, allOptions, selectPlaceholder]);
    const addNewOption = useCallback(() => {
        const newOption = { value: searchQuery, label: searchQuery };
        setNewOptions((prev) => [...prev, newOption]);
        setSelectedValue(newOption.value);
        onChange?.(newOption.value.trim());
        setOpen(false);
        setSearchQuery("");
    }, [searchQuery]);

    return (
        <div style={{ direction }} className={cn("w-full", elementClassName)}>
            <Popover
                open={open}
                onOpenChange={(isOpen) => {
                    setOpen(isOpen);
                    if (!isOpen) setSearchQuery("");
                }}
            >
                <PopoverTrigger asChild>
                    <Button
                        id={id}
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        disabled={disabled}
                        className={cn(
                            "bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]",
                            selectButtonClassName
                        )}
                    >
                        <span className={cn("truncate", !selectedValue && "text-muted-foreground")}>{selectLabel}</span>
                        <ChevronDownIcon size={16} className="text-muted-foreground/80 shrink-0" aria-hidden="true" />
                    </Button>
                </PopoverTrigger>
                {/* dropdown */}
                <PopoverContent className={cn("border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0 bg-[#fff]")} align="start">
                    <Command>
                        {/* search */}
                        <CommandInput
                            style={{ direction }}
                            className={cn(searchClassName)}
                            placeholder={searchPlaceholder}
                            value={searchQuery}
                            onValueChange={(val) => setSearchQuery(val)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && searchQuery && filteredOptions.length === 0 && createNewOptionLabel) {
                                    addNewOption();
                                }
                            }}
                        />
                        {/* results */}
                        <CommandList>
                            {filteredOptions.length === 0 && searchQuery !== "" ? (
                                createNewOptionLabel ? (
                                    <CommandEmpty onClick={addNewOption} className="hover:bg-[#cccbcb] cursor-pointer w-full">
                                        <div
                                            className="w-full h-10 flex items-center px-2"
                                            style={{ direction }}
                                        >{`${createNewOptionLabel}: ${searchQuery}`}</div>
                                    </CommandEmpty>
                                ) : (
                                    <CommandEmpty className={cn("w-full py-2 text-center", notFoundLabelClassName)}>{notFoundLabel}</CommandEmpty>
                                )
                            ) : (
                                <CommandGroup className={cn("max-h-52 overflow-y-auto", dropdownClassName)}>
                                    {filteredOptions.map((option) => (
                                        <CommandItem
                                            className={cn(
                                                "hover:bg-[#cccbcb] cursor-pointer",
                                                dropdownOptionClassName,
                                                selectedValue === option.value && "bg-[#cccbcb]"
                                            )}
                                            key={option.value}
                                            value={JSON.stringify(option)}
                                            onSelect={(currentValue) => {
                                                const parsedValue = JSON.parse(currentValue);
                                                setSelectedValue(parsedValue.value);
                                                onChange?.(parsedValue.value);
                                                setOpen(false);
                                                setSearchQuery("");
                                            }}
                                        >
                                            {option.label}
                                            {selectedValue === option.value && <CheckIcon size={16} className="ml-auto" />}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            )}
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
            <input name={name} type="hidden" value={selectedValue} />
        </div>
    );
}

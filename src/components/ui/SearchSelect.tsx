"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { useCallback, useId, useMemo, useState } from "react";
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
}
export default function SearchSelect({
    options,
    name,
    selectPlaceholder = "Select",
    defaultValue,
    notFoundLabel,
    searchPlaceholder = "Search",
    dropdownClassName,
    dropdownOptionClassName,
    notFoundLabelClassName,
    elementClassName,
    searchClassName,
    selectButtonClassName,
    value,
    disabled,
    onChange,
    direction,
}: SearchSelectProps) {
    const id = useId();
    const [open, setOpen] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<SearchSelectOptions["value"]>(value ?? defaultValue ?? "");
    const selectLabel = useMemo(() => {
        return selectedValue ? options.find((item) => item.value === selectedValue)?.label : selectPlaceholder;
    }, [selectedValue, options, selectPlaceholder]);
    return (
        <div style={{ direction }} className={cn("w-full", elementClassName)}>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    {/* select */}
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
                        {/* search input */}
                        <CommandInput style={{ direction }} className={cn(searchClassName)} placeholder={searchPlaceholder} />
                        {/* results */}
                        <CommandList>
                            <CommandEmpty className={cn("w-full py-2 text-center", notFoundLabelClassName)}>{notFoundLabel}</CommandEmpty>
                            <CommandGroup className={cn("max-h-52 overflow-y-auto", dropdownClassName)}>
                                {options.map((option) => (
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
                                        }}
                                    >
                                        {option.label}
                                        {selectedValue === option.value && <CheckIcon size={16} className="ml-auto" />}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
            {/* data collector input */}
            <input name={name} type="hidden" value={selectedValue} />
        </div>
    );
}

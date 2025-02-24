"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { useCallback, useId, useState } from "react";

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
}
export default function SearchSelect({
    options,
    name,
    selectPlaceholder,
    defaultValue,
    notFoundLabel,
    searchPlaceholder,
    dropdownClassName,
    dropdownOptionClassName,
    notFoundLabelClassName,
    elementClassName,
    searchClassName,
    selectButtonClassName,
    value,
    onChange,
}: SearchSelectProps) {
    const id = useId();
    const [open, setOpen] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<SearchSelectOptions["value"]>(value || defaultValue || options[0]?.value || "");
    return (
        <div className={cn("w-full", elementClassName)}>
            <input name={name} type="hidden" value={selectedValue} />
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        id={id}
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className={cn(
                            "bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]",
                            selectButtonClassName
                        )}
                    >
                        <span className={cn("truncate", !selectedValue && "text-muted-foreground")}>
                            {selectedValue
                                ? options.find((item) => item.value === selectedValue)?.label
                                : options[0]?.label
                                ? options[0].label
                                : selectPlaceholder}
                        </span>
                        <ChevronDownIcon size={16} className="text-muted-foreground/80 shrink-0" aria-hidden="true" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className={cn("border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0 bg-[#fff]")} align="start">
                    <Command>
                        <CommandInput className={cn(searchClassName)} placeholder={searchPlaceholder || "Search"} />
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
        </div>
    );
}

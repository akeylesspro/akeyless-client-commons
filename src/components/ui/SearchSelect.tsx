"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { useCallback, useId, useState } from "react";

export interface SearchSelectOptions {
    value: string;
    label: string;
}
export interface SearchSelectProps {
    options: SearchSelectOptions[];
    emptyLabel?: string;
    name?: string;
    notFoundLabel?: string;
    searchLabel?: string;
    defaultValue?: SearchSelectOptions["value"];
    dropdownClassName?: string;
    dropdownOptionClassName?: string;
    dropdownOptionsClassName?: string;
    notFoundLabelClassName?: string;
    selectButtonClassName?: string;
    selectClassName?: string;
    searchClassName?: string;
    onChange?: (value: SearchSelectOptions["value"]) => void;
    value?: SearchSelectOptions["value"];
}
export default function SearchSelect({
    options,
    name,
    emptyLabel,
    defaultValue,
    notFoundLabel,
    searchLabel,
    dropdownClassName,
    dropdownOptionClassName,
    dropdownOptionsClassName,
    notFoundLabelClassName,
    selectClassName,
    searchClassName,
    selectButtonClassName,
    value,
    onChange,
}: SearchSelectProps) {
    const id = useId();
    const [open, setOpen] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<SearchSelectOptions["value"]>(value || defaultValue || options[0]?.value || "");
    const openChange = useCallback(
        (newOpen: boolean) => {
            console.log("openChange", newOpen);
            setOpen(newOpen);
        },
        [setOpen]
    );
    return (
        <div className={cn("w-full", selectClassName)}>
            <input name={name} type="hidden" value={selectedValue} />
            <Popover open={open} onOpenChange={openChange}>
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
                                : emptyLabel}
                        </span>
                        <ChevronDownIcon size={16} className="text-muted-foreground/80 shrink-0" aria-hidden="true" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    className={cn("border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0 bg-[#fff]", dropdownClassName)}
                    align="start"
                >
                    <Command>
                        <CommandInput className={cn(searchClassName)} placeholder={searchLabel || "Search"} />
                        <CommandList>
                            <CommandEmpty className={cn(notFoundLabelClassName)}>{notFoundLabel}</CommandEmpty>
                            <CommandGroup className={cn(dropdownOptionsClassName)}>
                                {options.map((option) => (
                                    <CommandItem
                                        className={cn("hover:bg-[#cccbcb] cursor-pointer", dropdownOptionClassName)}
                                        key={option.value}
                                        value={option.value}
                                        onSelect={(currentValue) => {
                                            setSelectedValue(currentValue);
                                            onChange?.(currentValue);
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

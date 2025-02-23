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
    notFoundLabel?: string;
    searchLabel?: string;
    defaultValue?: SearchSelectOptions["value"];
    dropdownClassName?: string;
    dropdownOptionClassName?: string;
    dropdownOptionsClassName?: string;
    notFoundLabelClassName?: string;
    selectClassName?: string;
    searchClassName?: string;
}
export default function SearchSelect({
    options,
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
}: SearchSelectProps) {
    const id = useId();

    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>(defaultValue || "");
    const openChange = useCallback(
        (newOpen: boolean) => {
            console.log("openChange", newOpen);
            setOpen(newOpen);
        },
        [setOpen]
    );
    return (
        <div className={cn("*:not-first:mt-2", selectClassName)}>
            <Popover open={open} onOpenChange={openChange}>
                <PopoverTrigger asChild>
                    <Button
                        id={id}
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]"
                    >
                        <span className={cn("truncate", !value && "text-muted-foreground")}>
                            {value ? options.find((item) => item.value === value)?.label : emptyLabel}
                        </span>
                        <ChevronDownIcon size={16} className="text-muted-foreground/80 shrink-0" aria-hidden="true" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className={cn("border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0", dropdownClassName)} align="start">
                    <Command>
                        <CommandInput className={cn(searchClassName)} placeholder={searchLabel || "Search"} />
                        <CommandList>
                            <CommandEmpty className={cn(notFoundLabelClassName)}>{notFoundLabel}</CommandEmpty>
                            <CommandGroup className={cn(dropdownOptionsClassName)}>
                                {options.map((option) => (
                                    <CommandItem
                                        className={cn(dropdownOptionClassName)}
                                        key={option.value}
                                        value={option.value}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue);
                                            setOpen(false);
                                        }}
                                    >
                                        {option.label}
                                        {value === option.value && <CheckIcon size={16} className="ml-auto" />}
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

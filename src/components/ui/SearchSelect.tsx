"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { useId, useState } from "react";

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
}
export default function SearchSelect({ options, emptyLabel, defaultValue, notFoundLabel, searchLabel }: SearchSelectProps) {
    const id = useId();

    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>(defaultValue || "");
    const openChange = (newOpen: boolean) => {
        console.log("openChange", newOpen);
        setOpen(newOpen);
    };
    return (
        <div className="*:not-first:mt-2">
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
                            {value ? options.find((item) => item.value === value)?.label : emptyLabel || "Select Value"}
                        </span>
                        <ChevronDownIcon size={16} className="text-muted-foreground/80 shrink-0" aria-hidden="true" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0" align="start">
                    <Command>
                        <CommandInput placeholder={searchLabel || "Search"} />
                        <CommandList>
                            <CommandEmpty>{notFoundLabel || "No option found"}</CommandEmpty>
                            <CommandGroup>
                                {options.map((option) => (
                                    <CommandItem
                                        key={option.value}
                                        value={option.value}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue);
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

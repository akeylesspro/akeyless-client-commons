"use client";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ChevronDown, Phone } from "lucide-react";
import React, { cloneElement, Dispatch, forwardRef, SetStateAction, useEffect, useMemo, useRef, useState } from "react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import { InternationalInputProps } from "src/types";

export default function InternationalPhonePicker({
    setPhoneValue,
    phoneValue = "",
    placeholder = "",
    className = "",
    containerClassName = "",
    defaultCountry = "IL",
    flagContainerClassName = "",
    inputClassName = "",
    defaultValue,
    name,
    style,
    onEnter,
}: InternationalInputProps) {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (onEnter) {
                onEnter();
            }
        }
    };
    const [tempPhoneValue, setTempPhoneValue] = useState("");
    useEffect(() => {
        if (defaultValue) {
            if (setPhoneValue) {
                setPhoneValue(defaultValue);
            } else {
                setTempPhoneValue(defaultValue);
            }
        }
    }, [defaultValue, setPhoneValue]);
    return (
        <div className={cn("space-y-2", containerClassName)} dir="ltr">
            <RPNInput.default
                className={cn("flex rounded-lg shadow-sm shadow-black/5", className)}
                international
                countries={["US", "IL", "NG"]}
                defaultCountry={defaultCountry}
                flagComponent={FlagComponent}
                countrySelectComponent={CountrySelect}
                countrySelectProps={{ className: flagContainerClassName }}
                inputComponent={PhoneInput}
                numberInputProps={{ className: inputClassName, onKeyDown: handleKeyDown, defaultValue, style }}
                placeholder={placeholder}
                value={tempPhoneValue || phoneValue}
                onChange={(newValue) => {
                    if (setPhoneValue) {
                        return setPhoneValue(newValue ?? "");
                    }
                    setTempPhoneValue(newValue ?? "");
                }}
            />
            <input type="hidden" name={name} value={tempPhoneValue} />
        </div>
    );
}

const PhoneInput = forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({ className, onKeyDown, defaultValue, style, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <Input
            className={cn("-ms-px rounded-s-none shadow-none focus-visible:z-10 h-full", className)}
            onKeyDown={onKeyDown}
            defaultValue={defaultValue}
            style={style}
            ref={(el) => {
                inputRef.current = el;
                if (typeof ref === "function") {
                    ref(el);
                } else if (ref) {
                    ref.current = el;
                }
            }}
            {...props}
        />
    );
});
PhoneInput.displayName = "PhoneInput";

type CountrySelectProps = {
    disabled?: boolean;
    className?: string;
    value: RPNInput.Country;
    onChange: (value: RPNInput.Country) => void;
    options: { label: string; value: RPNInput.Country | undefined }[];
};

const CountrySelect = ({ disabled, value, onChange, options, className }: CountrySelectProps) => {
    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as RPNInput.Country);
    };
    const originalClassName = useMemo(() => {
        return "relative inline-flex items-center self-stretch rounded-s-lg border border-input bg-background py-2 pe-2 ps-3 text-muted-foreground transition-shadow focus-within:z-10 focus-within:border-ring focus-within:outline-none focus-within:ring-[3px] focus-within:ring-ring/20 hover:bg-accent hover:text-foreground has-[:disabled]:pointer-events-none has-[:disabled]:opacity-50";
    }, []);
    return (
        <div className={cn(originalClassName, className)}>
            <div className="inline-flex items-center gap-1" aria-hidden="true">
                <FlagComponent country={value} countryName={value} aria-hidden="true" />
                <span className="text-muted-foreground/80">
                    <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
                </span>
            </div>
            <select
                disabled={disabled}
                value={value}
                onChange={handleSelect}
                className="absolute inset-0 text-sm opacity-0"
                aria-label="Select country"
            >
                {options
                    .filter((x) => x.value)
                    .map((option, i) => (
                        <option className="text-black" key={option.value ?? `empty-${i}`} value={option.value}>
                            {option.label} {option.value && `+${RPNInput.getCountryCallingCode(option.value)}`}
                        </option>
                    ))}
            </select>
        </div>
    );
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
    const Flag = flags[country];
    return <span className="w-5 overflow-hidden rounded-sm">{Flag ? <Flag title={countryName} /> : <Phone size={16} aria-hidden="true" />}</span>;
};

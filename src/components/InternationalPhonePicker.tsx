"use client";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ChevronDown, Phone } from "lucide-react";
import React, { cloneElement, Dispatch, forwardRef, SetStateAction, useEffect, useMemo, useRef } from "react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

interface InputProps {
    phoneValue: string;
    setPhoneValue: Dispatch<SetStateAction<string>>;
    placeholder?: string;
    className?: string;
    containerClassName?: string;
    flagContainerClassName?: string;
    defaultCountry?: RPNInput.Country;
}
export default function InternationalPhonePicker({
    setPhoneValue,
    phoneValue,
    placeholder = "",
    className = "",
    containerClassName = "",
    defaultCountry = "IL",
    flagContainerClassName = "",
}: InputProps) {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, props: any) => {
        if (props.onKeyDown) {
            props.onKeyDown(e);
        }
        if (e.key === "Enter") {
            e.preventDefault();
            console.log(`Key pressed: ${e.key}`);
        }
    };
    return (
        <div className={cn("space-y-2", containerClassName)} dir="ltr">
            <RPNInput.default
                className={cn("flex rounded-lg shadow-sm shadow-black/5", className)}
                international
                countries={["US", "IL", "NG"]}
                defaultCountry={defaultCountry}
                flagComponent={FlagComponent}
                countrySelectComponent={(props) => <CountrySelect {...props} className={flagContainerClassName} />}
                inputComponent={PhoneInput}
                numberInputProps={{ onkeydown: handleKeyDown }}
                placeholder={placeholder}
                value={phoneValue}
                onChange={(newValue) => setPhoneValue(newValue ?? "")}
            />
        </div>
    );
}

const PhoneInput = forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({ className, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.addEventListener("keydown", (e) => {
                console.log(e.key);
            });
        }
    }, []);

    return (
        <Input
            className={"-ms-px rounded-s-none shadow-none focus-visible:z-10 h-full"}
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

// export default function InternationalPhonePicker({
//     setPhoneValue,
//     phoneValue,
//     placeholder = "",
//     className = "",
//     containerClassName = "",
//     defaultCountry = "IL",
//     flagContainerClassName = "",
// }: InputProps) {
//     const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, props: any) => {
//         if (props.onKeyDown) {
//             props.onKeyDown(e);
//         }
//         if (e.key === "Enter") {
//             e.preventDefault();
//             console.log(`Key pressed: ${e.key}`);
//         }
//     };

//     return (
//         <div className={cn("space-y-2", containerClassName)} dir="ltr">
//             <RPNInput.default
//                 className={cn("flex rounded-lg shadow-sm shadow-black/5", className)}
//                 international
//                 countries={["US", "IL", "NG"]}
//                 defaultCountry={defaultCountry}
//                 flagComponent={FlagComponent}
//                 countrySelectComponent={(props) => <CountrySelect {...props} className={flagContainerClassName} />}
//                 inputComponent={(props) => <PhoneInput {...props} onKeyDown={(e) => handleKeyDown(e, props)} />}
//                 placeholder={placeholder}
//                 value={phoneValue}
//                 onChange={(newValue) => setPhoneValue(newValue ?? "")}
//             />
//         </div>
//     );
// }
// interface InputProps {
//     onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
// }
// const PhoneInput = forwardRef<HTMLInputElement, React.ComponentProps<"input"> & InputProps>(({ className, onKeyDown, ...props }, ref) => {
//     const inputRef = useRef<HTMLInputElement | null>(null);
//     useEffect(() => {
//         if (inputRef.current) {
//             inputRef.current.focus();
//             inputRef.current.addEventListener("keydown", (e) => {

//             });
//         }
//     }, []);

//     return (
//         <Input
//             className={"-ms-px rounded-s-none shadow-none focus-visible:z-10 h-full"}
//             onKeyDown={(e) => {
//                 if (onKeyDown) {
//                     onKeyDown(e);
//                 }
//             }}
//             ref={(el) => {
//                 inputRef.current = el;
//                 if (typeof ref === "function") {
//                     ref(el);
//                 } else if (ref) {
//                     ref.current = el;
//                 }
//             }}
//             {...props}
//         />
//     );
// });
// PhoneInput.displayName = "PhoneInput";

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
                <option key="default" value="">
                    Select a country
                </option>
                {options
                    .filter((x) => x.value)
                    .map((option, i) => (
                        <option key={option.value ?? `empty-${i}`} value={option.value}>
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

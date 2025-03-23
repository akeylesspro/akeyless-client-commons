"use client";
import { cn } from "@/lib/utils";
import { OTPInput, SlotProps } from "input-otp";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { Direction } from "src/types";

interface CodeInputProps {
    codeValue: string;
    setCodeValue: Dispatch<SetStateAction<string>>;
    className?: string;
    slotContainerClassName?: string;
    direction?: Direction;
}

export default function CodeInput({ codeValue, setCodeValue, className = "", slotContainerClassName = "", direction = "ltr" }: CodeInputProps) {
    const firstInputRef = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
        if (firstInputRef.current) {
            firstInputRef.current.focus();
        }
    }, []);
    return (
        <div style={{ direction }} className={cn("space-y-2 flex justify-center items-center", className)}>
            <OTPInput
                ref={firstInputRef}
                value={codeValue}
                onChange={(newVal) => setCodeValue(newVal)}
                containerClassName="flex items-center gap-3 has-[:disabled]:opacity-50"
                maxLength={6}
                render={({ slots }) => (
                    <div className={cn("flex gap-5", slotContainerClassName)}>
                        {slots.map((slot, idx) => (
                            <Slot key={idx} {...slot} />
                        ))}
                    </div>
                )}
            />
        </div>
    );
}

function Slot(props: SlotProps) {
    return (
        <div
            className={cn(
                "flex size-9 items-center justify-center rounded-lg border border-input bg-background font-medium text-foreground shadow-sm shadow-black/5 transition-shadow",
                { "z-10 border border-ring ring-[3px] ring-ring/20": props.isActive }
            )}
        >
            {props.char !== null && <div>{props.char}</div>}
        </div>
    );
}

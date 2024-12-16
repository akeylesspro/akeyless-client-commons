"use client";
import { cn } from "@/lib/utils";
import { OTPInput, SlotProps } from "input-otp";
import { Dispatch, SetStateAction } from "react";

interface CodeInputProps {
    codeValue: string;
    setCodeValue: Dispatch<SetStateAction<string>>;
    className?: string;
    slotContainerClassName?: string;
}
export default function CodeInput({ codeValue, setCodeValue, className = "", slotContainerClassName = "" }: CodeInputProps) {
    return (
        <div className={cn("space-y-2 flex justify-center items-center", className)}>
            <OTPInput
                value={codeValue}
                onChange={(neuVal) => setCodeValue(neuVal)}
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

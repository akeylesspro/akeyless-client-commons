"use client";
import { cn } from "@/lib/utils";
import { OTPInput, SlotProps } from "input-otp";
import { Dispatch, SetStateAction } from "react";

export default function CodeInput({ codeValue, setCodeValue }: { codeValue: string; setCodeValue: Dispatch<SetStateAction<string>> }) {
    return (
        <div className="space-y-2 flex justify-center items-center">
            <OTPInput
                value={codeValue}
                onChange={(neuVal) => setCodeValue(neuVal)}
                containerClassName="flex items-center gap-3 has-[:disabled]:opacity-50"
                maxLength={6}
                render={({ slots }) => (
                    <div className="flex gap-5">
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

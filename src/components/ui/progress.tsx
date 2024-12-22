import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";
type ProgressRef = React.ElementRef<typeof ProgressPrimitive.Root>;
interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
    containerClassName?: string;
    indicatorClassName?: string;
    showValue?: boolean;
    showValueClassName?: string;
}

const ProgressComponent = React.forwardRef<ProgressRef, ProgressProps>(
    ({ className, value, containerClassName, indicatorClassName, showValueClassName, showValue = false, ...props }, ref) => (
        <div className={cn("relative w-full", containerClassName)}>
            <ProgressPrimitive.Root ref={ref} className={cn("w-full h-5 bg-[#e5e7eb] relative overflow-hidden rounded-full", className)} {...props}>
                <ProgressPrimitive.Indicator
                    className={cn("h-full w-full flex-1 bg-[green] transition-all rounded-full", indicatorClassName)}
                    style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
                >
                    {showValue && (
                        <div className={cn("absolute right-1 top-[-2px] font-medium text-white", showValueClassName)}>{`${value || 0}%`}</div>
                    )}
                </ProgressPrimitive.Indicator>
            </ProgressPrimitive.Root>
        </div>
    )
);
ProgressComponent.displayName = ProgressPrimitive.Root.displayName;

export { ProgressComponent };

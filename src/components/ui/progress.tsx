import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const ProgressComponent = React.forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & { indicatorClassName?: string; showValue?: boolean; showValueClassName?: string }
>(({ className, value, indicatorClassName, showValueClassName, showValue = false, ...props }, ref) => (
    <div className="relative w-full">
        <ProgressPrimitive.Root ref={ref} className={cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className)} {...props}>
            <ProgressPrimitive.Indicator
                className={cn("h-full w-full flex-1 bg-primary transition-all", indicatorClassName)}
                style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
            />
        </ProgressPrimitive.Root>
        {showValue && (
            <div
                style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
                className={cn(
                    " text-sm font-medium text-black",
                    showValueClassName
                )}
            >
                {`${value || 0}%`}
            </div>
        )}
    </div>
));
ProgressComponent.displayName = ProgressPrimitive.Root.displayName;

export { ProgressComponent };

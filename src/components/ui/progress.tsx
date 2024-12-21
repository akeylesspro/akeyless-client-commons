// import * as React from "react";
// import * as ProgressPrimitive from "@radix-ui/react-progress";

// import { cn } from "@/lib/utils";

// const ProgressComponent = React.forwardRef<
//     React.ElementRef<typeof ProgressPrimitive.Root>,
//     React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & { indicatorClassName?: string }
// >(({ className, value, indicatorClassName, ...props }, ref) => (
//     <ProgressPrimitive.Root ref={ref} className={cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className)} {...props}>
//         <ProgressPrimitive.Indicator
//             className={cn("h-full w-full flex-1 bg-primary transition-all", indicatorClassName)}
//             style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
//         />
//     </ProgressPrimitive.Root>
// ));
// ProgressComponent.displayName = ProgressPrimitive.Root.displayName;

// export { ProgressComponent };

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const ProgressComponent = React.forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & { indicatorClassName?: string; showValue?: boolean }
>(({ className, value, indicatorClassName, showValue = false, ...props }, ref) => (
    <div className="relative w-full">
        <ProgressPrimitive.Root ref={ref} className={cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className)} {...props}>
            <ProgressPrimitive.Indicator
                className={cn("h-full w-full flex-1 bg-primary transition-all", indicatorClassName)}
                style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
            />
        </ProgressPrimitive.Root>
        {showValue && value !== undefined && (
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-medium text-black">
                {`${value}%`}
            </span>
        )}
    </div>
));
ProgressComponent.displayName = ProgressPrimitive.Root.displayName;

export { ProgressComponent };

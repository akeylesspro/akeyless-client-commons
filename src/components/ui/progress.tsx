// import * as React from "react";
// import * as ProgressPrimitive from "@radix-ui/react-progress";

// import { cn } from "@/lib/utils";
// type ProgressRef = React.ElementRef<typeof ProgressPrimitive.Root>;
// interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
//     containerClassName?: string;
//     indicatorClassName?: string;
//     showValue?: boolean;
//     showValueClassName?: string;
// }

// const ProgressComponent = React.forwardRef<ProgressRef, ProgressProps>(
//     ({ className, value, containerClassName, indicatorClassName, showValueClassName, showValue = false, ...props }, ref) => (
//         <div className={cn("relative w-full", containerClassName)}>
//             <ProgressPrimitive.Root ref={ref} className={cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className)} {...props}>
//                 <ProgressPrimitive.Indicator
//                     className={cn("h-full w-full flex-1 bg-primary transition-all", indicatorClassName)}
//                     style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
//                 >
//                     {showValue && (
//                         <div
//                             className={cn(
//                                 "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-medium text-black",
//                                 showValueClassName
//                             )}
//                         >
//                             {`${value || 0}%`}
//                         </div>
//                     )}
//                 </ProgressPrimitive.Indicator>
//             </ProgressPrimitive.Root>
//         </div>
//     )
// );
// ProgressComponent.displayName = ProgressPrimitive.Root.displayName;

// export { ProgressComponent };

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
            <ProgressPrimitive.Root ref={ref} className={cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className)} {...props}>
                <ProgressPrimitive.Indicator
                    className={cn("h-full bg-primary transition-all flex justify-center items-center", indicatorClassName)}
                    style={{ width: `${value || 0}%` }}
                />
                {showValue && <div className={cn("text-sm font-medium text-black", showValueClassName)}>{`${value || 0}%`}</div>}
            </ProgressPrimitive.Root>
        </div>
    )
);
ProgressComponent.displayName = ProgressPrimitive.Root.displayName;

export { ProgressComponent };
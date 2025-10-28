import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";
import { Direction } from "src/types";

export const Version = ({ version, className = "" }: { version: string; className?: string }) => {
    return <div className={cn("absolute text-black z-30 bottom-[0px] text-xs right-0 px-1 ", className)}>v{version}</div>;
};

export const LeftToRightDiv = ({
    direction,
    className,
    children,
    props,
    title,
}: {
    direction: Direction;
    children: ReactNode;
    className?: string;
    props?: ComponentProps<"div">;
    title?: string;
}) => {
    return (
        <div
            title={title}
            style={{ direction: "ltr" }}
            className={cn(`_ellipsis  ${direction === "rtl" ? "text-right" : "text-left"}`, className)}
            {...props}
        >
            {children}
        </div>
    );
};

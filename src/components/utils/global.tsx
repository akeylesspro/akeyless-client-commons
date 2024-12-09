import { cn } from "@/lib/utils";

export const Version = ({ version, className = "" }: { version: string; className?: string }) => {
    return <div className={cn("absolute text-black z-30 bottom-[0px] text-xs right-0 px-1 ", className)}>v{version}</div>;
};

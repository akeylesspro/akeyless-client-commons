import React from "react";
import { ClipLoader } from "react-spinners";
import { cn } from "src/helpers";

export interface LoaderProps {
    color?: string;
    size?: number;
    style?: React.CSSProperties;
    className?: string;
}

export const Loader = ({ color, size, style = {}, className = "" }: LoaderProps) => {
    return (
        <div className={cn(`flex items-center justify-center`, className)} style={style}>
            <ClipLoader loading={true} color={color || "#699A2C"} size={size || 18} />
        </div>
    );
};

import React from "react";
import { ClipLoader } from "react-spinners";

interface LoaderProps {
    color?: string;
    size?: number;
    style?: React.CSSProperties;
    className?: string;
}

export const Loader: React.FC<LoaderProps> = ({ color, size, style = {}, className = "" }) => {
    return (
        <div className={`flex items-center justify-center ${className}`} style={style}>
            <ClipLoader loading={true} color={color || "#699A2C"} size={size || 18} />
        </div>
    );
};

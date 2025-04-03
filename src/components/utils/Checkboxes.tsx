import { cn } from "src/helpers";
import "../index.css";
import React, { ComponentProps, SetStateAction, useState } from "react";
import { Component } from "lucide-react";

export interface CheckBoxProps {
    rotate?: boolean;
    circleClassName?: string;
    containerClassName?: string;
    elementClassName?: string;
    setChecked?: (v: boolean) => void;
    checked?: boolean;
    className?: string;
    name?: string;
    id?: string;
    props?: ComponentProps<"label">;
    title?: string;
}

export const Checkbox = ({
    id = Math.random().toString(),
    checked = false,
    setChecked,
    rotate = true,
    className,
    circleClassName,
    containerClassName,
    elementClassName,
    name,
    props,
    title,
}: CheckBoxProps) => {
    const [isChecked, setIsChecked] = useState(checked);

    const toggleChecked = () => {
        setIsChecked(!isChecked);
        setChecked?.(!isChecked);
    };

    return (
        <div className={containerClassName}>
            <input name={name} type="checkbox" id={id} className="hidden" checked={isChecked} onChange={toggleChecked} />
            <label title={title} {...props} htmlFor={id} className={cn("relative block w-[42px] h-[24px] cursor-pointer transform-gpu", className)}>
                <div
                    className={cn(
                        `relative w-[40px] h-[22px] rounded-[12px] transition-colors duration-200 ease-in-out ${
                            isChecked ? "bg-[#52d66b]" : "bg-[#c8ccd4]"
                        }`,
                        elementClassName
                    )}
                ></div>
                <span
                    className={cn(
                        `absolute top-[-1px] ${
                            rotate ? "left-0" : "right-0"
                        } top-0 w-6 h-6  bg-white rounded-full shadow-md transition-transform duration-200 ease-in-out ${
                            isChecked ? (rotate ? "translate-x-[19px]" : "-translate-x-[19px]") : ""
                        }`,
                        circleClassName
                    )}
                >
                    <svg width="10px" height="10px" viewBox="0 0 10 10" className="m-[7px] fill-none">
                        <path
                            d="M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-all duration-500 linear"
                            stroke={isChecked ? "#52d66b" : "#c8ccd4"}
                            style={{
                                strokeDasharray: isChecked ? "25" : "24",
                                strokeDashoffset: isChecked ? "25" : "0",
                            }}
                        ></path>
                    </svg>
                </span>
            </label>
        </div>
    );
};

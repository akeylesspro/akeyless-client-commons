import "../index.css";
import React, { SetStateAction } from "react";

interface CheckBoxProps {
    id: string;
    checked: boolean;
    setChecked: React.Dispatch<SetStateAction<boolean>>;
    style?: React.CSSProperties;
    rotate: boolean;
}
export const Checkbox = ({ id, checked, setChecked, rotate = true, style }: CheckBoxProps) => {
    return (
        <div className="checkbox-wrapper-51">
            <input type="checkbox" id={id} className="hidden" checked={checked} onChange={() => setChecked(!checked)} />
            <label htmlFor={id} className="relative block w-[42px] h-[24px] cursor-pointer transform-gpu">
                <div
                    className={`relative top-[1px] left-[1px] w-[40px] h-[22px] rounded-[12px] transition-colors duration-200 ease-in-out ${
                        checked ? "bg-[#52d66b]" : "bg-[#c8ccd4]"
                    }`}
                ></div>
                <span
                    className={`absolute ${
                        rotate ? "left-0" : "right-0"
                    } top-0  w-[24px] h-[24px] bg-white rounded-full shadow-md transition-transform duration-200 ease-in-out ${
                        checked ? (rotate ? "translate-x-[18px]" : "-translate-x-[18px]") : ""
                    }`}
                >
                    <svg width="10px" height="10px" viewBox="0 0 10 10" className="m-[7px] fill-none">
                        <path
                            d="M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-all duration-500 linear"
                            stroke={checked ? "#52d66b" : "#c8ccd4"}
                            style={{
                                strokeDasharray: checked ? "25" : "24",
                                strokeDashoffset: checked ? "25" : "0",
                            }}
                        ></path>
                    </svg>
                </span>
            </label>
        </div>
    );
};

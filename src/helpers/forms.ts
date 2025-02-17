import React from "react";
import XRegExp from "xregexp";

export const textRegex = XRegExp("[^\\p{L}\\s-]", "gu"); // Only letters, spaces, and hyphens
export const numbersRegex = XRegExp("[^0-9\\s-+]", "g"); // Only numbers, spaces, hyphens, and plus signs
export const numbersOnlyRegex = XRegExp("[^0-9]", "g"); // Only numbers
export const priceRegex = XRegExp("[^0-9.]", "g"); // Only numbers and decimal points
export const emailRegex = XRegExp("[^\\p{L}0-9.@\\s-]", "gu"); // Email-safe characters
export const colorRegex = XRegExp("[^#0-9A-Fa-f]", "g"); // Hex color codes
export const carsRegex = XRegExp("[^\\p{L}0-9,_]", "gu"); // Letters, numbers, commas, and underscores
export const textNumbersRegex = XRegExp("[^\\p{L}0-9\\s+\\-]", "gu"); // Letters, numbers, spaces, hyphens, and plus signs
export const addressRegex = XRegExp("[^\\p{L}0-9\\s.,\\-]", "gu"); // Letters, numbers, spaces, hyphens, dots, and commas
export const chartsRegex = XRegExp("[^\\p{L}0-9\\s.,_@!\\-]", "gu"); // Letters, numbers, spaces, and allowed symbols

export type ValidationType =
    | "text"
    | "numbers"
    | "numbersOnly"
    | "price"
    | "textNumbers"
    | "email"
    | "color"
    | "address"
    | "cars"
    | "charts"
    | (string & {});

export const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.setCustomValidity("");
    const validation = e.target.getAttribute("data-validation") as ValidationType;
    if (validation === "text") {
        e.target.value = XRegExp.replace(e.target.value, textRegex, "");
    } else if (validation === "numbers") {
        e.target.value = XRegExp.replace(e.target.value, numbersRegex, "");
    } else if (validation === "numbersOnly") {
        e.target.value = XRegExp.replace(e.target.value, numbersOnlyRegex, "");
    } else if (validation === "price") {
        e.target.value = XRegExp.replace(e.target.value, priceRegex, "");
    } else if (validation === "textNumbers") {
        e.target.value = XRegExp.replace(e.target.value, textNumbersRegex, "");
    } else if (validation === "email") {
        e.target.value = XRegExp.replace(e.target.value, emailRegex, "");
    } else if (validation === "color") {
        e.target.value = XRegExp.replace(e.target.value, colorRegex, "");
    } else if (validation === "address") {
        e.target.value = XRegExp.replace(e.target.value, addressRegex, "");
    } else if (validation === "cars") {
        e.target.value = XRegExp.replace(e.target.value, carsRegex, "");
    } else if (validation === "charts") {
        e.target.value = XRegExp.replace(e.target.value, chartsRegex, "");
    }
};

export const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const validation = e.currentTarget.getAttribute("data-validation") as ValidationType;
    let pasteData = e.clipboardData.getData("text");
    if (validation === "text") {
        pasteData = XRegExp.replace(pasteData, textRegex, "");
    } else if (validation === "numbers") {
        pasteData = XRegExp.replace(pasteData, numbersRegex, "");
    } else if (validation === "numbersOnly") {
        pasteData = XRegExp.replace(pasteData, numbersOnlyRegex, "");
    } else if (validation === "price") {
        pasteData = XRegExp.replace(pasteData, priceRegex, "");
    } else if (validation === "textNumbers") {
        pasteData = XRegExp.replace(pasteData, textNumbersRegex, "");
    } else if (validation === "email") {
        pasteData = XRegExp.replace(pasteData, emailRegex, "");
    } else if (validation === "color") {
        pasteData = XRegExp.replace(pasteData, colorRegex, "");
    } else if (validation === "address") {
        pasteData = XRegExp.replace(pasteData, addressRegex, "");
    } else if (validation === "cars") {
        pasteData = XRegExp.replace(pasteData, carsRegex, "");
    } else if (validation === "charts") {
        pasteData = XRegExp.replace(pasteData, chartsRegex, "");
    }

    e.preventDefault();
    document.execCommand("insertText", false, pasteData);
};

export const handleInvalid = (e: React.InvalidEvent<HTMLInputElement>, requireError?: string) => {
    e.target.setCustomValidity(requireError || "This filed is required !");
};

export const useValidation = (validationType: ValidationType, requireError?: string) => {
    return {
        onChange: handleChange,
        onPaste: handlePaste,
        onInvalid: (e: React.InvalidEvent<HTMLInputElement>) => handleInvalid(e, requireError),
        "data-validation": validationType,
    };
};

export const getFormElementValue = (form: EventTarget & HTMLFormElement, name: string) => {
    return (form.elements.namedItem(name) as HTMLInputElement)?.value || "";
};

export const parseMultiSelectInput = (input: string) => {
    const value = JSON.parse(input) || [];
    return value.map((v: any) => v.value);
};

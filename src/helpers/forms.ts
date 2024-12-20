import React from "react";
import XRegExp from "xregexp";

export const handleInvalid = (e: React.InvalidEvent<HTMLInputElement>, requireError?: string) => {
    e.target.setCustomValidity(requireError || "This filed is required !");
};

// export const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     e.target.setCustomValidity("");
//     const validation = e.target.getAttribute("data-validation");
//     if (validation === "text") {
//         const cleanedValue = e.target.value.replace(/[^a-zA-Zא-ת\- ]/g, "");
//         e.target.value = cleanedValue;
//     } else if (validation === "numbers") {
//         const cleanedValue = e.target.value.replace(/[^0-9\- +]/g, "");
//         e.target.value = cleanedValue;
//     } else if (validation === "numbersOnly") {
//         const cleanedValue = e.target.value.replace(/[^0-9]/g, "");
//         e.target.value = cleanedValue;
//     } else if (validation === "price") {
//         const cleanedValue = e.target.value.replace(/[^0-9\.]/g, "");
//         e.target.value = cleanedValue;
//     } else if (validation === "textNumbers") {
//         const cleanedValue = e.target.value.replace(/[^a-zA-Zא-ת0-9\- +]/g, "");
//         e.target.value = cleanedValue;
//     } else if (validation === "email") {
//         const cleanedValue = e.target.value.replace(/[^a-zA-Zא-ת0-9.@\- ]/g, "");
//         e.target.value = cleanedValue;
//     } else if (validation === "color") {
//         const cleanedValue = e.target.value.replace(/[^#0-9A-Fa-f]/g, "");
//         e.target.value = cleanedValue;
//     } else if (validation === "address") {
//         const cleanedValue = e.target.value.replace(/[^a-zA-Zא-ת0-9\-., ]/g, "");
//         e.target.value = cleanedValue;
//     } else if (validation === "cars") {
//         const cleanedValue = e.target.value.replace(/[^a-zA-Zא-ת0-9,_]/g, "");
//         e.target.value = cleanedValue;
//     } else if (validation === "charts") {
//         const cleanedValue = e.target.value.replace(/[^a-zA-Zא-ת0-9\-.,_@! ]/g, "");
//         e.target.value = cleanedValue;
//     } else {
//         e.target.value = e.target.value;
//     }
// };

// export const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
//     const validation = e.currentTarget.getAttribute("data-validation");
//     let pasteData = e.clipboardData.getData("text");

//     if (validation === "text") {
//         pasteData = pasteData.replace(/[^a-zA-Zא-ת\- ]/g, "");
//     } else if (validation === "numbers") {
//         pasteData = pasteData.replace(/[^0-9\- +]/g, "");
//     } else if (validation === "numbersOnly") {
//         pasteData = pasteData.replace(/[^0-9]/g, "");
//     } else if (validation === "price") {
//         pasteData = pasteData.replace(/[^0-9\.]/g, "");
//     } else if (validation === "textNumbers") {
//         pasteData = pasteData.replace(/[^a-zA-Zא-ת0-9\- +]/g, "");
//     } else if (validation === "email") {
//         pasteData = pasteData.replace(/[^a-zA-Zא-ת0-9.@\- ]/g, "");
//     } else if (validation === "color") {
//         pasteData = pasteData.replace(/[^#0-9A-Fa-f]/g, "");
//     } else if (validation === "address") {
//         pasteData = pasteData.replace(/[^a-zA-Zא-ת0-9\-., ]/g, "");
//     } else if (validation === "cars") {
//         pasteData = pasteData.replace(/[^a-zA-Zא-ת0-9,_]/g, "");
//     } else if (validation === "charts") {
//         pasteData = pasteData.replace(/[^a-zA-Zא-ת0-9\-.,_@! ]/g, "");
//     }

//     e.preventDefault();
//     document.execCommand("insertText", false, pasteData);
// };

export const useValidation = (validationType: string, requireError?: string) => {
    return {
        onChange: handleChange,
        onPaste: handlePaste,
        onInvalid: (e: React.InvalidEvent<HTMLInputElement>) => handleInvalid(e, requireError),
        "data-validation": validationType,
    };
};

export const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.setCustomValidity("");
    const validation = e.target.getAttribute("data-validation");

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
    const validation = e.currentTarget.getAttribute("data-validation");
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

const textRegex = XRegExp("[^\\p{L}\\s-]", "gu"); // Only letters, spaces, and hyphens
const numbersRegex = XRegExp("[^0-9\\s-+]", "g"); // Only numbers, spaces, hyphens, and plus signs
const numbersOnlyRegex = XRegExp("[^0-9]", "g"); // Only numbers
const priceRegex = XRegExp("[^0-9.]", "g"); // Only numbers and decimal points
const emailRegex = XRegExp("[^\\p{L}0-9.@\\s-]", "gu"); // Email-safe characters
const colorRegex = XRegExp("[^#0-9A-Fa-f]", "g"); // Hex color codes
const carsRegex = XRegExp("[^\\p{L}0-9,_]", "gu"); // Letters, numbers, commas, and underscores
const textNumbersRegex = XRegExp("[^\\p{L}0-9\\s+\\-]", "gu"); // Letters, numbers, spaces, hyphens, and plus signs
const addressRegex = XRegExp("[^\\p{L}0-9\\s.,\\-]", "gu"); // Letters, numbers, spaces, hyphens, dots, and commas
const chartsRegex = XRegExp("[^\\p{L}0-9\\s.,_@!\\-]", "gu"); // Letters, numbers, spaces, and allowed symbols

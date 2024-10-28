import React from 'react';

declare const calculateBearing: (startLat: any, startLng: any, endLat: any, endLng: any) => number;

declare const handleInvalid: (e: React.InvalidEvent<HTMLInputElement>, requireError?: string) => void;
declare const handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
declare const handlePaste: (e: React.ClipboardEvent<HTMLInputElement>) => void;
declare const useValidation: (validationType: string, requireError?: string) => {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPaste: (e: React.ClipboardEvent<HTMLInputElement>) => void;
    onInvalid: (e: React.InvalidEvent<HTMLInputElement>) => void;
    "data-validation": string;
};

declare const setState: <T>(updater: T | ((state: T) => T), set: (fn: (state: any) => any) => void, stateName: string) => void;
declare const createSelectors: <T extends object>(store: any) => { [K in keyof T]: () => T[K]; };
declare const useStoreValues: <T extends object>(store: {
    use: { [K in keyof T]: () => T[K]; };
}, keys: Array<keyof T>) => Partial<T>;

declare const formatCarNumber: (car_number: string) => string;

export { calculateBearing, createSelectors, formatCarNumber, handleChange, handleInvalid, handlePaste, setState, useStoreValues, useValidation };

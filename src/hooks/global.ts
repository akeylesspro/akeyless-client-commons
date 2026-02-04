import { CountryOptions } from "akeyless-types-commons";
import { Dispatch, SetStateAction, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { get_document_by_id, getUserCountryByIp, snapshot } from "src/helpers";
import { OnSnapshotConfig } from "src/types";
import { useDeepCompareEffect, useDeepCompareMemo } from "./react";

export const useDocumentTitle = (title: string) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
    return null;
};

export const useSetUserCountry = (setUserCountry: Dispatch<SetStateAction<CountryOptions>>, changLang?: (lang: string) => void) => {
    useLayoutEffect(() => {
        const lang = localStorage.getItem("lang");
        const updateCountry = async () => {
            const country = await getUserCountryByIp();
            if (!lang) {
                changLang?.(country === CountryOptions.IL ? "he" : country === CountryOptions.TH ? "th" : "en");
            }
            setUserCountry(country);
            localStorage.setItem("userCountry", country);
        };
        updateCountry();
    }, []);
    return null;
};

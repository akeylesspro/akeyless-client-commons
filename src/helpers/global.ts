import { Client, CountryOptions, LanguageOptions, NxUser, TObject } from "akeyless-types-commons";
import axios from "axios";
import { query_document, snapshot } from "./firebase";
import { local_israel_phone_format } from "./phoneNumber";
import { isEmpty, isEqual } from "lodash";
import { WhereCondition } from "src/types";

export const calculateBearing = (startLat, startLng, endLat, endLng) => {
    if (startLat === endLat || startLng === endLng) {
        return 0;
    }
    if (startLat === undefined || startLng === undefined || endLat === undefined || endLng === undefined) {
        return 0;
    }
    const startLatRad = (startLat * Math.PI) / 180;
    const startLngRad = (startLng * Math.PI) / 180;
    const endLatRad = (endLat * Math.PI) / 180;
    const endLngRad = (endLng * Math.PI) / 180;

    const dLon = endLngRad - startLngRad;
    const y = Math.sin(dLon) * Math.cos(endLatRad);
    const x = Math.cos(startLatRad) * Math.sin(endLatRad) - Math.sin(startLatRad) * Math.cos(endLatRad) * Math.cos(dLon);
    const bearing = (Math.atan2(y, x) * 180) / Math.PI;

    return (bearing + 360) % 360;
};

export const renderOnce = () => {
    return true;
};

export const propsAreEqual = (prevProps: any, nextProps: any) => {
    return isEqual(prevProps, nextProps);
};

export const getUserCountryByIp = async (): Promise<CountryOptions> => {
    try {
        const response = await axios.get("https://ipapi.co/json/");
        return (response.data.country_code || CountryOptions.IL).toLowerCase();
    } catch (error) {
        console.error("Error fetching Country:", error);
        return CountryOptions.IL;
    }
};

export const userNameFormat = (user?: NxUser) => {
    return `${user?.first_name || ""} ${user?.last_name || ""}`.trim();
};

export const multiStringFormat = (str1: string, str2?: string, str3?: string) => {
    return `${str1} ${str2 || ""} ${str3 || ""}`.trim();
};

export const getLocationUrl = (lng: number, lat: number) => {
    return `https://www.google.com/maps?q=${lat},${lng}`;
};
export const isNodeEnv = typeof process !== "undefined" && process.env;

export const { mode, isLocal } = {
    mode: isNodeEnv ? process.env.NEXT_PUBLIC_MODE : import.meta.env.VITE_MODE,
    isLocal: (isNodeEnv ? process.env.NEXT_PUBLIC_IS_LOCAL : import.meta.env.VITE_is_local) === "true",
};

export const getFixedNumber = (number = 0, fix = 4) => {
    const sum_value = number % 1 === 0 ? number : number.toFixed(fix).replace(/\.?0+$/, "");
    return String(sum_value);
};

export const getAddressByGeo = async ({ lat, lng }, currentLanguage: LanguageOptions) => {
    const language = currentLanguage === LanguageOptions.He ? "iw" : "en";
    const apiKey = isNodeEnv ? process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY : import.meta.env.VITE_api_google_key;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}&language=${language}`;

    try {
        const response = await axios.get(url);
        if (response?.data?.results[0]) {
            return response.data.results[0].formatted_address.slice(0, 35);
        } else {
            return "address not found";
        }
    } catch (error) {
        console.error("getAddressByGeo error:", error);
    }
};

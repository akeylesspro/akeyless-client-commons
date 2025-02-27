import { Client, CountryOptions, NxUser, TObject } from "akeyless-types-commons";
import axios from "axios";
import { query_document, snapshot } from "./firebase";
import { local_israel_phone_format } from "./phoneNumber";
import { isEmpty, isEqual } from "lodash";

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

export const parsePermissions = (object: NxUser | Client): TObject<TObject<boolean>> => {
    if (!object?.features) {
        return {};
    }
    const features = object.features;
    let result: TObject<TObject<boolean>> = {};
    features.forEach((feature) => {
        if (!feature.includes("__")) {
            return;
        }
        const [featureType, featureName] = feature.split("__");
        if (!featureType || !featureName) {
            return;
        }
        if (!result[featureType]) {
            result[featureType] = {};
        }
        result[featureType][featureName] = true;
    });
    return result;
};

interface InitializeUserPermissionsProps {
    phoneNumber: string;
    firstTimeArray: string[];
    getUpdatePermissions: (permissions: TObject<TObject<boolean>>) => void;
}
export const initializeUserPermissions = async ({ phoneNumber, firstTimeArray, getUpdatePermissions }: InitializeUserPermissionsProps) => {
    let unsubscribe: (() => void) | null = null;
    let permissions: TObject<TObject<boolean>> = {};
    try {
        const { promise, unsubscribe: unsubscribeSnapshot } = snapshot(
            {
                collectionName: "nx-users",
                conditions: [{ field_name: "phone_number", operator: "in", value: [phoneNumber, local_israel_phone_format(phoneNumber)] }],
                onFirstTime: (docs) => {
                    if (!docs.length) {
                        throw new Error("User not found");
                    }
                    permissions = parsePermissions(docs[0]);
                    getUpdatePermissions(parsePermissions(docs[0]));
                },
                onModify: (docs) => {
                    getUpdatePermissions(parsePermissions(docs[0]));
                },
            },
            firstTimeArray
        );
        unsubscribe = unsubscribeSnapshot;
        await promise;
        return { unsubscribe, permissions };
    } catch (error: any) {
        if (unsubscribe) {
            unsubscribe();
        }
        console.error("Error initializing user permissions:", error.message);
        throw error;
    }
};

export const userNameFormat = (user?: NxUser) => {
    return `${user?.first_name || ""} ${user?.last_name || ""}`.trim();
};

export const multiStringFormat = (str1: string, str2?: string, str3?: string) => {
    return `${str1} ${str2 || ""} ${str3 || ""}`.trim();
};

export const getLocationUrl = (lang: number, lat: number) => {
    return `https://www.google.com/maps?q=${lang},${lat}`;
};
export const isNodeEnv = typeof process !== "undefined" && process.env;

export const { mode, isLocal } = {
    mode: isNodeEnv ? process.env.NEXT_PUBLIC_MODE : import.meta.env.VITE_MODE,
    isLocal: (isNodeEnv ? process.env.NEXT_PUBLIC_IS_LOCAL : import.meta.env.VITE_is_local) === "true",
};

import { parsePhoneNumberFromString } from "libphonenumber-js";

type ConvertFunction = (input: string) => string;
type CheckFunction = (input: string) => boolean;

export const isInternational: CheckFunction = (phone_number) => {
    return phone_number.startsWith("+");
};

export const isInternationalIsraelPhone: CheckFunction = (phone_number: string) => {
    return phone_number.startsWith("+972");
};

export const local_israel_phone_format: ConvertFunction = (international_number) => {
    const base = international_number.replace("+972", "");
    return base.startsWith("130") ? base : `0${base}`;
};

export const international_israel_phone_format: ConvertFunction = (phone) => {
    const validNumber = phone.startsWith("130") ? phone : phone.slice(1, phone.length);
    return "+972".concat(validNumber);
};

export const get_international_phone_number: ConvertFunction = (phone) => {
    if (!phone) return "-";
    return isInternational(phone) ? phone : international_israel_phone_format(phone);
};

export const displayFormatPhoneNumber = (phoneNumber: string, separator?: string) => {
    if (!phoneNumber) return "";

    const cleaned = phoneNumber.replace(/[\s\-]/g, "");
    const sep = separator ?? "-";

    if (isInternational(cleaned)) {
        const phone_obj = parsePhoneNumberFromString(cleaned);
        if (!phone_obj) return cleaned;
        return phone_obj.formatInternational().replace(/\s/g, sep);
    }

    if (isFixedOrServiceNumber(cleaned)) {
        if (/^(1700|1800|1900|1599)/.test(cleaned)) {
            //
            return cleaned.replace(/^(\d{4})(\d{3})(\d{3,4})$/, `$1${sep}$2${sep}$3`);
        }

        if (/^07[2-8]/.test(cleaned)) {
            return cleaned.replace(/^(\d{3})(\d{3})(\d{4})$/, `$1${sep}$2${sep}$3`);
        }

        if (/^(02|03|04|08|09)/.test(cleaned)) {
            return cleaned.replace(/^(\d{2})(\d{3})(\d{4})$/, `$1${sep}$2${sep}$3`);
        }
    }

    return cleaned.replace(/^(\d{3})(\d{3})(\d{4})$/, `$1${sep}$2${sep}$3`);
};

export const is_iccid = (number: string) => {
    if (number.length < 19 || number.length > 22) return false;
    if (!/^\d+$/.test(number)) return false;
    if (!number.startsWith("89")) return false;
    return true;
};

export const isFixedOrServiceNumber = (number: string): boolean => {
    if (!number || is_iccid(number) || isInternational(number)) {
        return false;
    }
    const cleaned = number.replace(/[\s\-]/g, "");

    if (!/^\d+$/.test(cleaned)) return false;

    if (cleaned.length < 7 || cleaned.length > 15) return false;

    const landline_prefixes = ["02", "03", "04", "08", "09"];

    const voip_prefixes = ["072", "073", "074", "076", "077", "078"];

    const service_prefixes = ["1700", "1800", "1900", "1599", "1200", "1212"];

    return (
        landline_prefixes.some((p) => cleaned.startsWith(p)) ||
        voip_prefixes.some((p) => cleaned.startsWith(p)) ||
        service_prefixes.some((p) => cleaned.startsWith(p))
    );
};

interface LongShortPhoneNumbers {
    shortPhoneNumber: string;
    longPhoneNumber: string;
    isIsraeli: boolean;
}
export const longShortPhoneNumbers = (phoneNumber: string): LongShortPhoneNumbers => {
    phoneNumber = phoneNumber.trim();
    if (!phoneNumber.length) {
        return {
            shortPhoneNumber: phoneNumber,
            longPhoneNumber: phoneNumber,
            isIsraeli: false,
        };
    }
    if (is_iccid(phoneNumber)) {
        return {
            shortPhoneNumber: phoneNumber,
            longPhoneNumber: phoneNumber,
            isIsraeli: false,
        };
    }

    let shortPhoneNumber = phoneNumber;
    let longPhoneNumber = phoneNumber;
    if (phoneNumber.startsWith("05")) {
        shortPhoneNumber = phoneNumber;
        longPhoneNumber = longPhoneNumber.replace("05", "+9725");
    } else if (phoneNumber.startsWith("103")) {
        shortPhoneNumber = phoneNumber;
        longPhoneNumber = `+972${shortPhoneNumber}`;
    } else if (phoneNumber.startsWith("+972")) {
        longPhoneNumber = phoneNumber;
        shortPhoneNumber = longPhoneNumber.replace("+9725", "05");
    } else if (phoneNumber.startsWith("+1")) {
        longPhoneNumber = phoneNumber;
        shortPhoneNumber = longPhoneNumber.replace("+1", "");
    }
    return {
        shortPhoneNumber,
        longPhoneNumber,
        isIsraeli: longPhoneNumber.startsWith("+972"),
    };
};

export const isSimProviderPartner = (phoneNumber: string) => {
    const { shortPhoneNumber, isIsraeli } = longShortPhoneNumbers(phoneNumber);
    return isIsraeli && (shortPhoneNumber.startsWith("054") || shortPhoneNumber.startsWith("1302"));
};

export const isSimProviderPelephone = (phoneNumber: string) => {
    const { shortPhoneNumber, isIsraeli } = longShortPhoneNumbers(phoneNumber);
    return isIsraeli && shortPhoneNumber.startsWith("050");
};

export const isSimProviderCelcom = (phoneNumber: string) => {
    const { shortPhoneNumber, isIsraeli } = longShortPhoneNumbers(phoneNumber);
    return isIsraeli && (shortPhoneNumber.startsWith("052") || shortPhoneNumber.startsWith("1303"));
};

export const isSimProviderMonogoto = (phoneNumber: string) => {
    return is_iccid(phoneNumber);
};

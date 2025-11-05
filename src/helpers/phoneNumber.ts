import { parsePhoneNumberFromString } from "libphonenumber-js";

type ConvertFunction = (input: string) => string;
type CheckFunction = (input: string) => boolean;

export const isInternational: CheckFunction = (phone_number) => {
    return phone_number.startsWith("+");
};

export const isInternationalIsraelPhone: CheckFunction = (phone_number: string) => {
    return phone_number.startsWith("+9725");
};

export const local_israel_phone_format: ConvertFunction = (international_number) => {
    return international_number.replace("+972", "0");
};

export const international_israel_phone_format: ConvertFunction = (phone) => {
    const validNumber = phone.slice(1, phone.length);
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

    if (is_fixed_or_service_number(cleaned)) {
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

export const is_msisdn = (number: string) => {
    if (number.length < 10 || number.length > 15) return false;
    if (!/^\d+$/.test(number)) return false;
    return true;
};

export const is_fixed_or_service_number = (number: string): boolean => {
    if (!number) return false;

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

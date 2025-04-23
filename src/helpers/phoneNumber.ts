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
    if (!phone) return "+972";
    return isInternational(phone) ? phone : international_israel_phone_format(phone);
};
export const displayFormatPhoneNumber = (phoneNumber: string, separator?: string) => {
    if (isInternational(phoneNumber)) {
        const phoneNumberObject = parsePhoneNumberFromString(phoneNumber);
        if (!phoneNumberObject) {
            return phoneNumber;
        }
        return phoneNumberObject.formatInternational().replace(/\s/g, separator ?? "");
    }
    return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
};
export const is_iccid = (number: string) => {
    if (number.length < 19 || number.length > 22) return false;
    if (!/^\d+$/.test(number)) return false;
    if (!number.startsWith("89")) return false;
    return true;
};

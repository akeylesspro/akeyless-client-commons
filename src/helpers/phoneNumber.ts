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
export const international_israel_phone_format:ConvertFunction = (phone) => {
    const validNumber = phone.slice(1, phone.length);
    return "+972".concat(validNumber);
};
export const displayFormatPhoneNumber:ConvertFunction = (phoneNumber) => {
    if (isInternational(phoneNumber)) {
        const phoneNumberObject = parsePhoneNumberFromString(phoneNumber);
        if (!phoneNumberObject) {
            return phoneNumber;
        }
        return phoneNumberObject.formatInternational().replace(/\s/g, "-");
    }
    return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
};

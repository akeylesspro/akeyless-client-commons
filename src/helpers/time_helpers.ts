import { Timestamp } from "firebase/firestore";
import moment from "moment-timezone";
interface TimeOptions {
    format?: string;
    fromFormat?: string;
    tz?: string;
    defaultReturnedValue?: string;
}
export function timestamp_to_string(firebaseTimestamp: Timestamp | Date | string, options?: TimeOptions): string {
    if (!firebaseTimestamp) {
        return options.defaultReturnedValue ?? "-";
    }
    let date: Date;
    if (firebaseTimestamp instanceof Timestamp) {
        date = firebaseTimestamp.toDate();
    } else if (firebaseTimestamp instanceof Date) {
        date = firebaseTimestamp;
    } else if (typeof firebaseTimestamp === "string") {
        date = moment.utc(firebaseTimestamp, options?.fromFormat || "DD/MM/YYYY HH:mm:ss").toDate();
        if (isNaN(date.getTime())) {
            return options.defaultReturnedValue ?? "-";
        }
    } else {
        return options.defaultReturnedValue ?? "-";
    }
    if (options?.tz) {
        const result = moment(date)
            .tz(options?.tz)
            .format(options?.format || "DD/MM/YYYY HH:mm:ss");

        return result;
    }
    return moment.utc(date).format(options?.format || "DD/MM/YYYY HH:mm:ss");
}

export function timestamp_to_millis(firebaseTimestamp: Timestamp): number {
    if (!firebaseTimestamp) {
        return 0;
    }
    const timestamp = new Timestamp(firebaseTimestamp?.seconds, firebaseTimestamp?.nanoseconds);
    return timestamp.toMillis();
}
export function sort_by_timestamp(a: Timestamp, b: Timestamp, reverse: boolean = false) {
    return reverse ? timestamp_to_millis(b) - timestamp_to_millis(a) : timestamp_to_millis(a) - timestamp_to_millis(b);
}

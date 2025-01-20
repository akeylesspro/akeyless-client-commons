import { Timestamp } from "firebase/firestore";
import moment from "moment-timezone";
interface TimeOptions {
    format?: string;
    fromFormat?: string;
    tz?: string;
}
export function timestamp_to_string(firebaseTimestamp: Timestamp | Date | string, options?: TimeOptions): string {
    let date: Date;
    if (firebaseTimestamp instanceof Timestamp) {
        date = firebaseTimestamp.toDate();
    } else if (firebaseTimestamp instanceof Date) {
        date = firebaseTimestamp;
    } else if (typeof firebaseTimestamp === "string") {
        date = moment(firebaseTimestamp, options.fromFormat || "DD/MM/YYYY HH:mm:ss").toDate();
        if (isNaN(date.getTime())) {
            throw new Error("Invalid date string format. Expected 'DD/MM/YYYY HH:mm'.");
        }
    } else {
        throw new Error("Invalid input: firebaseTimestamp must be a Timestamp, Date, or valid date string.");
    }
    if (options?.tz) {
        const withTZ = moment
            .utc(date)
            .tz(options.tz)
            .format(options.format || "DD-MM-YYYY HH:mm:ss");
        const withoutTZ = moment.utc(date).format(options.format || "DD-MM-YYYY HH:mm:ss");
        console.log("with tz", withTZ);
        console.log("without tz", withoutTZ);

        return moment.tz(options.tz).format(options.format || "DD-MM-YYYY HH:mm:ss");
    }
    return moment.utc(date).format(options.format || "DD-MM-YYYY HH:mm:ss");
}

export function timestamp_to_millis(firebaseTimestamp: Timestamp): number {
    const timestamp = new Timestamp(firebaseTimestamp?.seconds, firebaseTimestamp?.nanoseconds);
    return timestamp.toMillis();
}
export function sort_by_timestamp(a: Timestamp, b: Timestamp, reverse: boolean = false) {
    return reverse ? timestamp_to_millis(b) - timestamp_to_millis(a) : timestamp_to_millis(a) - timestamp_to_millis(b);
}

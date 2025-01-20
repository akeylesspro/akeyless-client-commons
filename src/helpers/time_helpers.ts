import { Timestamp } from "firebase/firestore";
import moment from "moment-timezone";
interface TimeOptions {
    format?: string;
    tz?: string;
}
/**
 * Converts a Firebase Timestamp object into a formatted string.
 *
 * @param {firebase_timestamp} firebaseTimestamp - The Firebase timestamp object containing _seconds and _nanoseconds.
 * @param {string} [format="DD-MM-YYYY HH:mm:ss"] - Optional the format string used to format the date. Default is "DD-MM-YYYY HH:mm:ss".
 * @returns {string} - A formatted date string according to the specified format or the default format.
 */
export function timestamp_to_string(firebaseTimestamp: Timestamp, options?: TimeOptions): string {
    const timestamp = new Timestamp(firebaseTimestamp?.seconds, firebaseTimestamp?.nanoseconds);
    if (options?.tz) {
        return moment
            .utc(timestamp.toDate())
            .tz(options.tz)
            .format(options.format || "DD-MM-YYYY HH:mm:ss");
    }
    return moment.utc(timestamp.toDate()).format(options.format || "DD-MM-YYYY HH:mm:ss");
}
/**
 * Converts a Firebase Timestamp object into milliseconds since the Unix epoch.
 *
 * @param {Timestamp} firebaseTimestamp - The Firebase timestamp object containing _seconds and _nanoseconds.
 * @returns {number} - Time in milliseconds
 */
export function timestamp_to_millis(firebaseTimestamp: Timestamp): number {
    const timestamp = new Timestamp(firebaseTimestamp?.seconds, firebaseTimestamp?.nanoseconds);
    return timestamp.toMillis();
}
export function sort_by_timestamp(a: Timestamp, b: Timestamp, reverse: boolean = false) {
    return reverse ? timestamp_to_millis(b) - timestamp_to_millis(a) : timestamp_to_millis(a) - timestamp_to_millis(b);
}

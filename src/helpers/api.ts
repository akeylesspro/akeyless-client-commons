import axios from "axios";
import { auth } from "./firebase";
import { TObject } from "akeyless-types-commons";
import { isLocal, mode } from "./global";

export const baseDomain = mode === "qa" ? "https://nx-api.xyz/api" : "https://nx-api.info/api";
export const devicesDomain = isLocal ? "http://localhost:9001/api/devices" : baseDomain + "/devices";
export const biDomain = isLocal ? "http://localhost:9002/api/bi" : baseDomain + "/bi";
export const notificationsDomain = isLocal ? "http://localhost:9006/api/notifications" : baseDomain + "/notifications";
export const endUsersDomain = isLocal ? "http://localhost:9011/api/end-users" : baseDomain + "/end-users";
export const callCenterGeoDomain = isLocal ? "http://localhost:9007/api/call-center/geo" : baseDomain + "/call-center/geo";
export const callCenterEventsDomain = isLocal ? "http://localhost:9008/api/call-center/events" : baseDomain + "/call-center/events";
export const dataSocketDomain = isLocal ? "http://localhost:9009/api/data-socket" : baseDomain + "/data-socket";
export const dataSyncDomain = isLocal ? "http://localhost:9010/api/data-sync" : baseDomain + "/data-sync";
export const chargeDomain = isLocal ? "http://localhost:9012/api/charge" : baseDomain + "/charge";
export const akeylessOnlineDomain = mode === "qa" ? "https://akeyless-online.xyz" : "https://akeyless-online.info";

type Method = "GET" | "POST" | "PUT" | "DELETE";
type ServerName =
    | "devices"
    | "bi"
    | "call-center-geo"
    | "call-center-events"
    | "notifications"
    | "data-socket"
    | "data-sync"
    | "charge"
    | "end-users";

interface ErrorDetails {
    serverName: ServerName;
    method: Method;
    url: string;
    error: any;
}

export const nxApiCall = async <T = any>(serverName: ServerName, method: Method, url: string, data?: TObject<any>): Promise<T | ErrorDetails> => {
    const fixedUrl = url.startsWith("/") ? url.slice(1) : url;
    try {
        let urlResult: string = `${devicesDomain}/${fixedUrl}`;

        switch (serverName) {
            case "bi":
                urlResult = `${biDomain}/${fixedUrl}`;
                break;
            case "devices":
                urlResult = `${devicesDomain}/${fixedUrl}`;
                break;
            case "notifications":
                urlResult = `${notificationsDomain}/${fixedUrl}`;
                break;
            case "call-center-events":
                urlResult = `${callCenterEventsDomain}/${fixedUrl}`;
                break;
            case "call-center-geo":
                urlResult = `${callCenterGeoDomain}/${fixedUrl}`;
                break;
            case "data-socket":
                urlResult = `${dataSocketDomain}/${fixedUrl}`;
                break;
            case "data-sync":
                urlResult = `${dataSyncDomain}/${fixedUrl}`;
                break;
            case "charge":
                urlResult = `${chargeDomain}/${fixedUrl}`;
                break;
            case "end-users":
                urlResult = `${endUsersDomain}/${fixedUrl}`;
                break;
            default:
                break;
        }

        const headers = {
            authorization: data?.ignoreAuth ? undefined : "bearer " + (await auth?.currentUser?.getIdToken()),
        };
        if (data?.ignoreAuth) {
            delete data.ignoreAuth;
        }
        const response = await axios({
            method,
            url: urlResult,
            headers,
            data,
        });

        return response?.data || null;
    } catch (error: any) {
        const details = { serverName, method, url, data };
        console.error(`Error from nxApiCall: ${JSON.stringify(details)}`, error?.response?.data || error);
        return { error: error?.response?.data || error, ...details };
    }
};

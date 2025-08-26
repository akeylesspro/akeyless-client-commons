import axios from "axios";
import { auth } from "./firebase";
import { TObject } from "akeyless-types-commons";
import { isLocal, mode } from "./global";

export const baseDomain = mode === "qa" ? "https://nx-api.xyz/api" : "https://nx-api.info/api";
export const devicesDomain = isLocal ? "http://localhost:9001/api/devices" : baseDomain + "/devices";
export const biDomain = isLocal ? "http://localhost:9002/api/bi" : baseDomain + "/bi";
export const notificationsDomain = isLocal ? "http://localhost:9006/api/notifications" : baseDomain + "/notifications";
export const callCenterGeoDomain = isLocal ? "http://localhost:9007/api/call-center/geo" : baseDomain + "/call-center/geo";
export const callCenterEventsDomain = isLocal ? "http://localhost:9008/api/call-center/events" : baseDomain + "/call-center/events";
export const dataSocketDomain = isLocal ? "http://localhost:9009/api/data-socket" : baseDomain + "/data-socket";
export const dataSyncDomain = isLocal ? "http://localhost:9010/api/data-sync" : baseDomain + "/data-sync";
export const cloudwiseDomain = isLocal ? "http://localhost:9012/api/cloudwise" : baseDomain + "/cloudwise";
export const akeylessOnlineDomain = mode === "qa" ? "https://akeyless-online.xyz" : "https://akeyless-online.info";

type Method = "GET" | "POST" | "PUT" | "DELETE";
type ServerName = "devices" | "bi" | "call-center-geo" | "call-center-events" | "notifications" | "data-socket" | "data-sync" | "cloudwise";

export const nxApiCall = async (serverName: ServerName, method: Method, url: string, data?: TObject<any>) => {
    try {
        let urlResult: string = `${devicesDomain}/${url}`;
        switch (serverName) {
            case "bi":
                urlResult = `${biDomain}/${url}`;
                break;
            case "devices":
                urlResult = `${devicesDomain}/${url}`;
                break;
            case "notifications":
                urlResult = `${notificationsDomain}/${url}`;
                break;
            case "call-center-events":
                urlResult = `${callCenterEventsDomain}/${url}`;
                break;
            case "call-center-geo":
                urlResult = `${callCenterGeoDomain}/${url}`;
                break;
            case "data-socket":
                urlResult = `${dataSocketDomain}/${url}`;
                break;
            case "data-sync":
                urlResult = `${dataSyncDomain}/${url}`;
                break;
            case "cloudwise":
                urlResult = `${cloudwiseDomain}/${url}`;
                break;
            default:
                break;
        }

        const headers = {
            authorization: "bearer " + (await auth.currentUser.getIdToken()),
        };
        const response = await axios({
            method,
            url: urlResult,
            headers,
            data,
        });
        return response?.data || null;
    } catch (error) {
        console.error(`Error from nxApiCall: ${JSON.stringify({ serverName, method, url, data })}`, error?.response?.data || error);
        return null;
    }
};

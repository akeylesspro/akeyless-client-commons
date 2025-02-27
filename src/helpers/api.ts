import axios from "axios";
import { auth } from "./firebase";
import { TObject } from "akeyless-types-commons";
import { isLocal, mode } from "./global";


const baseDomain = mode === "qa" ? "https://nx-api.xyz/api" : "https://nx-api.info/api";
const biDomain = isLocal ? "http://localhost:9002/api/bi" : baseDomain + "/bi";
const devicesDomain = isLocal ? "http://localhost:9002/api/devices" : baseDomain + "/devices";
const callCenterDomain = isLocal ? "http://localhost:9003/api/call-center" : baseDomain + "/call-center";

type Method = "GET" | "POST" | "PUT" | "DELETE";
type ServerName = "devices" | "bi" | "call-center";

export const nx_api_call = async (serverName: ServerName, method: Method, url: string, data?: TObject<any>) => {
    let urlResult: string = `${devicesDomain}/${url}`;
    switch (serverName) {
        case "bi":
            urlResult = `${biDomain}/${url}`;
            break;
        case "devices":
            urlResult = `${devicesDomain}/${url}`;
            break;
        case "call-center":
            urlResult = `${callCenterDomain}/${url}`;
            break;
        default:
            break;
    }

    const headers = {
        authorization: "bearer " + (await auth.currentUser.getIdToken()),
    };

    const response = await axios({
        method: method,
        url: urlResult,
        headers,
        data,
    });
    return response.data;
};

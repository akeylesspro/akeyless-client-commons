import { Client, NxUser, TObject, UserPermissionsObject, userPermissionsObjectValue } from "akeyless-types-commons";
import { WhereCondition } from "src/types";
import { local_israel_phone_format } from "./phoneNumber";
import { snapshot } from "./firebase";

export const checkUserPermissions = <T extends keyof UserPermissionsObject>(
    userPermissions: UserPermissionsObject,
    entity: T,
    permissions?: userPermissionsObjectValue<T>[],
    mode?: "some" | "every"
) => {
    const userValues = userPermissions[entity];
    if (!userValues) {
        return false;
    }
    if (!permissions?.length) {
        return true;
    }
    if (mode === "every") {
        return permissions.every((permission) => userValues[permission]);
    }
    return permissions.some((permission) => userValues[permission]);
};
checkUserPermissions({}, "dashboard", []);

export const parsePermissions = (object: NxUser | Client): TObject<TObject<boolean>> => {
    if (!object?.features) {
        return {};
    }
    const features = object.features;
    let result: TObject<TObject<boolean>> = {};
    features.forEach((feature) => {
        if (!feature.includes("__")) {
            return;
        }
        const [featureType, featureName] = feature.split("__");
        if (!featureType || !featureName) {
            return;
        }
        if (!result[featureType]) {
            result[featureType] = {};
        }
        result[featureType][featureName] = true;
    });
    return result;
};

interface InitializeUserPermissionsProps {
    phoneNumber?: string;
    email?: string;
    firstTimeArray: string[];
    getUpdatePermissions: (permissions: TObject<TObject<boolean>>) => void;
}
export const initializeUserPermissions = async ({ phoneNumber, email, firstTimeArray, getUpdatePermissions }: InitializeUserPermissionsProps) => {
    let unsubscribe: (() => void) | null = null;
    let permissions: TObject<TObject<boolean>> = {};
    try {
        const queryConditions: WhereCondition[] = [
            phoneNumber
                ? { field_name: "phone_number", operator: "in", value: [phoneNumber, local_israel_phone_format(phoneNumber)] }
                : {
                      field_name: "email",
                      operator: "==",
                      value: email,
                  },
        ];
        const { promise, unsubscribe: unsubscribeSnapshot } = snapshot(
            {
                collectionName: "nx-users",
                conditions: queryConditions,
                onFirstTime: (docs) => {
                    if (!docs.length) {
                        throw new Error("User not found");
                    }
                    permissions = parsePermissions(docs[0]);
                    getUpdatePermissions(parsePermissions(docs[0]));
                },
                onModify: (docs) => {
                    getUpdatePermissions(parsePermissions(docs[0]));
                },
            },
            firstTimeArray
        );
        unsubscribe = unsubscribeSnapshot;
        await promise;
        return { unsubscribe, permissions };
    } catch (error: any) {
        if (unsubscribe) {
            unsubscribe();
        }
        console.error("Error initializing user permissions:", error.message);
        throw error;
    }
};

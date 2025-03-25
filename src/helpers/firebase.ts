import moment from "moment";
import { initializeApp, FirebaseApp } from "firebase/app";
import { FirebaseStorage, getStorage } from "firebase/storage";
import { Auth, getAuth, GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { AppCheck, initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";

import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    query,
    setDoc,
    Timestamp,
    where,
    DocumentData,
    DocumentSnapshot,
    CollectionReference,
    WhereFilterOp,
    Firestore,
    getFirestore,
    Unsubscribe,
    onSnapshot,
    QuerySnapshot,
    Query,
    orderBy,
} from "firebase/firestore";
import { formatCarNumber } from "./cars";
import { NxUser, TObject } from "akeyless-types-commons";
import { Snapshot, SnapshotDocument, WhereCondition } from "../types";
import { useCallback } from "react";
import { local_israel_phone_format } from "./phoneNumber";

interface FirebaseInitResult {
    db?: Firestore;
    auth?: Auth;
    storage?: FirebaseStorage;
    app?: FirebaseApp;
    appCheck?: AppCheck;
    googleLoginProvider?: GoogleAuthProvider;
}
const initApp = (): FirebaseInitResult => {
    const isNodeEnv = typeof process !== "undefined" && process.env;
    const firebaseConfig = {
        apiKey: isNodeEnv ? process.env.NEXT_PUBLIC_API_KEY : import.meta.env.VITE_API_KEY,
        authDomain: isNodeEnv ? process.env.NEXT_PUBLIC_AUTH_DOMAIN : import.meta.env.VITE_AUTH_DOMAIN,
        projectId: isNodeEnv ? process.env.NEXT_PUBLIC_PROJECT_ID : import.meta.env.VITE_PROJECT_ID,
        storageBucket: isNodeEnv ? process.env.NEXT_PUBLIC_STORAGE_BUCKET : import.meta.env.VITE_STORAGE_BUCKET,
        messagingSenderId: isNodeEnv ? process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID : import.meta.env.VITE_MESSAGING_SENDER_ID,
        appId: isNodeEnv ? process.env.NEXT_PUBLIC_APP_ID : import.meta.env.VITE_APP_ID,
    };
    try {
        const app: FirebaseApp = initializeApp(firebaseConfig);
        const auth: Auth = getAuth(app);
        auth.settings.appVerificationDisabledForTesting = false;
        const db: Firestore = getFirestore(app);
        const storage: FirebaseStorage = getStorage(app);
        const googleLoginProvider = new GoogleAuthProvider();
        const recaptchaSiteKey = isNodeEnv ? process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY : import.meta.env.VITE_RECAPTCHA_SITE_KEY;

        const result: FirebaseInitResult = { db, auth, storage, app, googleLoginProvider };
        if (recaptchaSiteKey) {
            result.appCheck = initializeAppCheck(app, {
                provider: new ReCaptchaEnterpriseProvider(recaptchaSiteKey),
                isTokenAutoRefreshEnabled: true,
            });
        }
        return result;
    } catch (error) {
        console.error("Failed to initialize Firebase app:", error);
        return {};
    }
};

// Initialize app
export const { db, auth, storage, app, appCheck, googleLoginProvider } = initApp();

export const useLoginWithGoogle = () => {
    const signInWithGoogle = useCallback(async (): Promise<User> => {
        const result = await signInWithPopup(auth, googleLoginProvider);
        const user = result.user;
        return user;
    }, [auth, googleLoginProvider]);
    return signInWithGoogle;
};
interface Collections {
    [key: string]: CollectionReference<DocumentData>;
    clients: CollectionReference<DocumentData>;
    sites: CollectionReference<DocumentData>;
    cars: CollectionReference<DocumentData>;
    users: CollectionReference<DocumentData>;
    lastLocations: CollectionReference<DocumentData>;
    ermEvents: CollectionReference<DocumentData>;
    erm2Events: CollectionReference<DocumentData>;
    ruptelaEvents: CollectionReference<DocumentData>;
    polygons: CollectionReference<DocumentData>;
    polygonEvents: CollectionReference<DocumentData>;
    polygonCars: CollectionReference<DocumentData>;
    canbus: CollectionReference<DocumentData>;
    states: CollectionReference<DocumentData>;
    app_pro_commands_queue: CollectionReference<DocumentData>;
    trips: CollectionReference<DocumentData>;
    tripsDetails: CollectionReference<DocumentData>;
    audit: CollectionReference<DocumentData>;
    nx_settings: CollectionReference<DocumentData>;
    settings: CollectionReference<DocumentData>;
    translations: CollectionReference<DocumentData>;
    nx_cars: CollectionReference<DocumentData>;
    boards: CollectionReference<DocumentData>;
    protection_types: CollectionReference<DocumentData>;
    board_types: CollectionReference<DocumentData>;
    charge_capacities: CollectionReference<DocumentData>;
}

export const collections: Collections = {
    clients: collection(db, "nx-clients"),
    sites: collection(db, "nx-sites"),
    cars: collection(db, "units"),
    users: collection(db, "nx-users"),
    lastLocations: collection(db, "last_locations"),
    ermEvents: collection(db, "erm_events_general"),
    erm2Events: collection(db, "erm2_events_general"),
    ruptelaEvents: collection(db, "ruptela_events_general"),
    polygons: collection(db, "nx-polygons"),
    polygonEvents: collection(db, "polygon_events"),
    polygonCars: collection(db, "polygon_cars"),
    canbus: collection(db, "erm_canbus_parameters"),
    states: collection(db, "erm_states"),
    app_pro_commands_queue: collection(db, "app_pro_commands_queue"),
    trips: collection(db, "erm2_trip"),
    tripsDetails: collection(db, "erm2_trip_details"),
    audit: collection(db, "nx-audit"),
    nx_settings: collection(db, "nx-settings"),
    settings: collection(db, "settings"),
    translations: collection(db, "nx-translations"),
    nx_cars: collection(db, "nx-cars"),
    boards: collection(db, "boards"),
    protection_types: collection(db, "protectionTypes"),
    board_types: collection(db, "boardTypes"),
    charge_capacities: collection(db, "nx-charge-capacities"),
};

// Timestamp
export const fire_base_TIME_TEMP = Timestamp.now;

// Data extraction functions
export const extractAlertsData = (doc: DocumentSnapshot<DocumentData>) => {
    const data = doc.data()!;
    const { car_number, timestamp } = data;
    return {
        ...data,
        timestamp_seconds: timestamp.seconds,
        timestamp_ui: moment.unix(timestamp.seconds).format("DD/MM/YY HH:mm"),
        car_number: formatCarNumber(car_number),
    };
};

export const simpleExtractData = (doc: DocumentSnapshot<DocumentData>): TObject<any> => {
    const docData = doc.data();
    return {
        ...docData,
        id: doc.id,
    };
};

export const extractSiteData = (doc: DocumentSnapshot<DocumentData>) => {
    const data = doc.data()!;
    const dateUpdated = new Date(data.updated?.seconds * 1000 + data.updated.nanoseconds / 1000000);
    const dateCreated = new Date(data.created?.seconds * 1000 + data.created.nanoseconds / 1000000);
    return {
        ...data,
        id: doc.id,
        created: moment(dateCreated).format("DD.MM.YYYY - HH:mm"),
        updated: moment(dateUpdated).format("DD.MM.YYYY - HH:mm"),
    };
};

export const extractClientData = (doc: DocumentSnapshot<DocumentData>) => {
    const data = doc.data()!;
    const dateUpdated = new Date(data.updated?.seconds * 1000 + data.updated.nanoseconds / 1000000);
    const dateCreated = new Date(data.created?.seconds * 1000 + data.created.nanoseconds / 1000000);
    return {
        ...data,
        id: doc.id,
        created: moment(dateCreated).format("HH:mm  DD/MM/YY"),
        updated: moment(dateUpdated).format("HH:mm  DD/MM/YY"),
    };
};

export const extractBoardsData = (doc: DocumentSnapshot<DocumentData>) => {
    const data = doc.data()!;
    const dateUploaded = typeof data.uploaded === "string" ? data.uploaded : moment.unix(data.uploaded?.seconds).format("DD/MM/YY HH:mm");
    return {
        ...data,
        id: doc.id,
        uploaded: dateUploaded,
    };
};

export const extractCarsData = (doc: DocumentSnapshot<DocumentData>) => {
    const carData = doc.data()!;
    let icon: string;
    const gov_info = carData.gov_info;
    if (gov_info) {
        if (carData.icon) {
            icon = carData.icon;
        } else if (gov_info.vehicle_type === "atv") {
            icon = "truck";
        } else if (gov_info.vehicle_type === "motorcycle") {
            icon = "motorcycle";
        } else {
            icon = "car";
        }
    } else {
        icon = "car";
    }
    return {
        ...carData,
        id: doc.id,
        brand: carData.brand || carData.manufacturer,
        car_number: carData.carId,
        icon,
    };
};

export const extractCanbusData = (doc: DocumentSnapshot<DocumentData>) => {
    const data = doc.data()!;
    let newDate: Date | null = null;
    if (data.timestamp && typeof data.timestamp.seconds === "number" && data.timestamp.seconds > 0) {
        newDate = new Date(data.timestamp.seconds * 1000);
    }

    return {
        ...data,
        date_ui: newDate ? moment(newDate).format("DD/MM/YYYY - HH:mm") : "N/A",
    };
};

export const extractLocationData = (doc: DocumentSnapshot<DocumentData>) => {
    const locationData = doc.data()!;
    const { latitude, longitude, spd, timestamp, prev_latitude, prev_longitude } = locationData;
    return {
        ...locationData,
        id: doc.id,
        lat: latitude,
        lng: longitude,
        prev_lat: prev_latitude,
        prev_lng: prev_longitude,
        timestamp: timestamp?.seconds,
        spd: Number(spd).toFixed(0),
    };
};

// Helper functions
export const get_all_documents = async (collection_path: string) => {
    try {
        const snapshot = await getDocs(collection(db, collection_path));
        const documents = snapshot.docs.map((doc) => simpleExtractData(doc));
        return documents;
    } catch (error) {
        return [];
    }
};

export const get_document_by_id = async (collection_path: string, doc_id: string) => {
    try {
        const doc_ref = doc(db, collection_path, doc_id);
        const doc_snap = await getDoc(doc_ref);
        if (!doc_snap.exists()) {
            throw new Error("Document not found, document id: " + doc_id);
        }
        return simpleExtractData(doc_snap);
    } catch (error) {
        console.error("Error from get_document_by_id", error);
        return null;
    }
};

export const set_document = async (collection_path: string, doc_id: string, data: DocumentData) => {
    try {
        const doc_ref = doc(db, collection_path, doc_id);
        await setDoc(doc_ref, data, { merge: true });
        return true;
    } catch (error) {
        console.error(`Failed to create document by id: ${doc_id} in collection: ${collection_path}`, { error, data });
        return false;
    }
};

export const add_document = async (collection_path: string, data: DocumentData, include_id = false) => {
    try {
        const col_ref = collection(db, collection_path);
        const doc_ref = await addDoc(col_ref, data);
        if (include_id) {
            await setDoc(doc_ref, { ...data, id: doc_ref.id }, { merge: true });
        }
        return true;
    } catch (error) {
        console.error(`Failed to create document in collection: ${collection_path}`, error);
        return false;
    }
};

export const delete_document = async (collection_path: string, doc_id: string) => {
    try {
        const doc_ref = doc(db, collection_path, doc_id);
        await deleteDoc(doc_ref);
        return true;
    } catch (error) {
        console.error(`Failed to delete document with id ${doc_id} from collection ${collection_path}`, error);
        return false;
    }
};

export const query_document = async (
    collection_path: string,
    field_name: string,
    operator: WhereFilterOp,
    value: any,
    ignore_log = false
): Promise<null | TObject<any>> => {
    try {
        const q = query(collection(db, collection_path), where(field_name, operator, value));
        const query_snapshot = await getDocs(q);
        const documents = query_snapshot.docs.map((doc) => simpleExtractData(doc));
        if (documents.length < 1) {
            throw new Error(
                `No data to return from: \ncollection: ${collection_path}, \nfield_name: ${field_name}, \noperator: ${operator}, \nvalue: ${value}`
            );
        }
        return documents[0];
    } catch (error) {
        if (!ignore_log) {
            console.error("Error querying document:", error);
        }
        return null;
    }
};

export const query_documents = async (collection_path: string, field_name: string, operator: WhereFilterOp, value: any) => {
    try {
        const q = query(collection(db, collection_path), where(field_name, operator, value));
        const query_snapshot = await getDocs(q);
        const documents = query_snapshot.docs.map((doc) => simpleExtractData(doc));
        return documents;
    } catch (error) {
        console.error(`Error querying documents: ${collection_path} - ${field_name} - ${operator} - ${value} `, error);
        return [];
    }
};

export const query_documents_by_conditions = async (collection_path: string, where_conditions: WhereCondition[]) => {
    try {
        let db_query: any = collection(db, collection_path);
        where_conditions.forEach((condition) => {
            db_query = query(db_query, where(condition.field_name, condition.operator, condition.value));
        });
        const query_snapshot = await getDocs(db_query);
        const documents = query_snapshot.docs.map((doc) => simpleExtractData(doc));
        return documents;
    } catch (error) {
        console.error(`Error querying documents: ${collection_path} - ${JSON.stringify(where_conditions)} `, error);
        return [];
    }
};

export const query_document_by_conditions = async (collection_path: string, where_conditions: WhereCondition[]) => {
    try {
        let db_query: any = collection(db, collection_path);
        where_conditions.forEach((condition) => {
            db_query = query(db_query, where(condition.field_name, condition.operator, condition.value));
        });
        const query_snapshot = await getDocs(db_query);
        const documents = query_snapshot.docs.map((doc) => simpleExtractData(doc));
        if (!documents[0]) {
            throw new Error("No data returned from DB");
        }
        return documents[0];
    } catch (error) {
        console.error(`Error querying documents: ${collection_path} - ${JSON.stringify(where_conditions)} `, error);
        return null;
    }
};

export const snapshot: Snapshot = (config, snapshotsFirstTime) => {
    let resolvePromise: () => void;
    let isResolved = false;
    const promise = new Promise<void>((resolve) => {
        console.log(`==> ${config.collectionName} subscribed.`);
        resolvePromise = () => {
            if (!isResolved) {
                isResolved = true;
                resolve();
            }
        };
    });

    let collectionRef: Query<DocumentData> = collection(db, config.collectionName);

    if (config.conditions) {
        config.conditions.forEach((condition) => {
            collectionRef = query(collectionRef, where(condition.field_name, condition.operator, condition.value));
        });
    }
    if (config.orderBy) {
        config.orderBy.forEach((order) => {
            collectionRef = query(collectionRef, orderBy(order.fieldName, order.direction));
        });
    }

    const unsubscribe = onSnapshot(
        collectionRef,
        (snapshot: QuerySnapshot<DocumentData>) => {
            if (!snapshotsFirstTime.includes(config.collectionName)) {
                snapshotsFirstTime.push(config.collectionName);
                const documents = snapshot.docs.map((doc) => simpleExtractData(doc));

                config.onFirstTime?.(documents, config);
                config.extraParsers?.forEach((extraParser) => {
                    extraParser.onFirstTime?.(documents, config);
                });
                resolvePromise();
            } else {
                const addedDocs: DocumentData[] = [];
                const modifiedDocs: DocumentData[] = [];
                const removedDocs: DocumentData[] = [];
                snapshot.docChanges().forEach((change) => {
                    if (change.type === "added") {
                        addedDocs.push(simpleExtractData(change.doc));
                    } else if (change.type === "modified") {
                        modifiedDocs.push(simpleExtractData(change.doc));
                    } else if (change.type === "removed") {
                        removedDocs.push(simpleExtractData(change.doc));
                    }
                });

                addedDocs.length && config.onAdd?.(addedDocs, config);
                modifiedDocs.length && config.onModify?.(modifiedDocs, config);
                removedDocs.length && config.onRemove?.(removedDocs, config);

                config.extraParsers?.forEach((extraParser) => {
                    addedDocs.length && extraParser.onAdd?.(addedDocs, config);
                    modifiedDocs.length && extraParser.onModify?.(modifiedDocs, config);
                    removedDocs.length && extraParser.onRemove?.(removedDocs, config);
                });
            }
        },
        (error) => {
            console.error(`Error listening to collection: ${config.collectionName}`, error);
            resolvePromise();
        }
    );

    return { promise, unsubscribe };
};

export const snapshotDocument: SnapshotDocument = (config, snapshotsFirstTime) => {
    let resolvePromise: () => void;
    let isResolved = false;
    const promise = new Promise<void>((resolve) => {
        console.log(`==> Document in ${config.collectionName} subscribed.`);
        resolvePromise = () => {
            if (!isResolved) {
                isResolved = true;
                resolve();
            }
        };
    });

    const documentRef = doc(db, config.collectionName, config.documentId);

    const unsubscribe = onSnapshot(
        documentRef,
        (docSnapshot: DocumentSnapshot<DocumentData>) => {
            if (!snapshotsFirstTime.includes(config.collectionName)) {
                snapshotsFirstTime.push(config.collectionName);
                if (docSnapshot.exists()) {
                    const document = simpleExtractData(docSnapshot);
                    if (checkConditions(document, config.conditions)) {
                        config.onFirstTime?.([document], config);
                        config.extraParsers?.forEach((extraParser) => {
                            extraParser.onFirstTime?.([document], config);
                        });
                    } else {
                        console.warn(`Document in ${config.collectionName} does not meet conditions.`);
                    }
                } else {
                    console.warn(`Document not found in ${config.collectionName}.`);
                }
                resolvePromise();
            } else {
                if (docSnapshot.exists()) {
                    const document = simpleExtractData(docSnapshot);
                    if (checkConditions(document, config.conditions)) {
                        config.onModify?.([document], config);
                        config.extraParsers?.forEach((extraParser) => {
                            extraParser.onModify?.([document], config);
                        });
                    }
                } else {
                    config.onRemove?.([], config);
                    config.extraParsers?.forEach((extraParser) => {
                        extraParser.onRemove?.([], config);
                    });
                }
            }
        },
        (error) => {
            console.error(`Error listening to document in ${config.collectionName}:`, error);
            resolvePromise();
        }
    );

    return { promise, unsubscribe };
};

const checkConditions = (document: DocumentData, conditions?: WhereCondition[]): boolean => {
    if (!conditions || conditions.length === 0) return true;
    return conditions.every((condition) => {
        const fieldValue = document[condition.field_name];
        switch (condition.operator) {
            case "==":
                return fieldValue === condition.value;
            case "!=":
                return fieldValue !== condition.value;
            case "<":
                return fieldValue < condition.value;
            case "<=":
                return fieldValue <= condition.value;
            case ">":
                return fieldValue > condition.value;
            case ">=":
                return fieldValue >= condition.value;
            case "array-contains":
                return Array.isArray(fieldValue) && fieldValue.includes(condition.value);
            default:
                return false;
        }
    });
};

export const cleanNxSites = async () => {
    const clients = (await get_all_documents("nx-clients")).map((v) => v.id);
    const sites = await get_all_documents("nx-sites");
    const allSitesToDelete = sites.filter((v) => !clients.includes(v.client));
    console.log("allSitesToDelete", allSitesToDelete);
    allSitesToDelete.forEach(async (v) => {
        await delete_document("nx-sites", v.id);
        console.log(`Site ${v.id} deleted.`);
    });
};

export const getUserByPhone = async (phone: string) => {
    const phones = [phone, local_israel_phone_format(phone)];
    return await query_document("nx-users", "phone_number", "in", phones, true);
};
export const getUserByEmail = async (email: string) => {
    return await query_document("nx-users", "email", "==", email, true);
};
export const getUserByIdentifier = async (identifier: string) => {
    return (await getUserByPhone(identifier)) || (await getUserByEmail(identifier));
};

export const addLoginAudit = async (user: NxUser | null, app: "installer" | "toolbox" | "dashboard", loginBy: "google" | "phone") => {
    const details = {
        app,
        login_by: loginBy,
    };
    await set_document("nx-users", user.id, { last_login: fire_base_TIME_TEMP() });
    await addAuditRecord("login", app, details, user);
};

export const addAuditRecord = async (action: string, entity: string, details: TObject<any>, user?: NxUser | null) => {
    try {
        const ref = doc(collections.audit);
        const data = {
            action,
            entity,
            details,
            user: user
                ? {
                      id: user.id,
                      name: `${user.first_name || ""} ${user.last_name || ""}`.trim(),
                      clients: user.clients,
                  }
                : null,
        };
        await setDoc(ref, {
            ...data,
            datetime: fire_base_TIME_TEMP(),
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

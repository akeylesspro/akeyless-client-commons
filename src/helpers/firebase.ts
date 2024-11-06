import moment from "moment";
import { initializeApp, FirebaseApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
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
} from "firebase/firestore";
import { formatCarNumber } from "./cars";
import { TObject } from "akeyless-types-commons";

const initApp = () => {
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
        const db: Firestore = getFirestore(app);
        return { db, auth };
    } catch (error) {
        console.error("Failed to initialize Firebase app:", error);
        return { db: null, auth: null };
    }
};

// Initialize app
export const { db, auth } = initApp();

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

export const simpleExtractData = (doc: DocumentSnapshot<DocumentData>) => {
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
    const newDate = new Date(data.timestamp.seconds * 1000);
    return {
        ...data,
        date_ui: moment(newDate).format("DD/MM/YYYY - HH:mm"),
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

interface WhereCondition {
    field_name: string;
    operator: WhereFilterOp;
    value: any;
}

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

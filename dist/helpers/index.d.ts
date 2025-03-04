import { FirebaseStorage } from 'firebase/storage';
import { Auth } from 'firebase/auth';
import { WhereFilterOp, Unsubscribe, Firestore, Timestamp, DocumentSnapshot, DocumentData, CollectionReference } from 'firebase/firestore';
import { TObject, CountryOptions, NxUser, Client } from 'akeyless-types-commons';
import React from 'react';
import { ClassValue } from 'clsx';

type OnSnapshotCallback = (documents: any[], config: OnSnapshotConfig) => void;
interface OnSnapshotParsers {
    onFirstTime?: OnSnapshotCallback;
    onAdd?: OnSnapshotCallback;
    onModify?: OnSnapshotCallback;
    onRemove?: OnSnapshotCallback;
}
interface WhereCondition {
    field_name: string;
    operator: WhereFilterOp;
    value: any;
}
interface OnSnapshotConfig extends OnSnapshotParsers {
    collectionName: string;
    extraParsers?: OnSnapshotParsers[];
    conditions?: WhereCondition[];
    orderBy?: {
        fieldName: string;
        direction: "asc" | "desc";
    }[];
}
interface OnSnapshotConfigDocument extends Omit<OnSnapshotParsers, "onAdd"> {
    collectionName: string;
    documentId: string;
    extraParsers?: Omit<OnSnapshotParsers, "onAdd">[];
    conditions?: WhereCondition[];
}
interface SnapshotResult {
    promise: Promise<void>;
    unsubscribe: Unsubscribe;
}
type Snapshot = (config: OnSnapshotConfig, snapshotsFirstTime: string[]) => SnapshotResult;
type SnapshotDocument = (config: OnSnapshotConfigDocument, snapshotsFirstTime: string[]) => SnapshotResult;

declare const db: Firestore;
declare const auth: Auth;
declare const storage: FirebaseStorage;
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
declare const collections: Collections;
declare const fire_base_TIME_TEMP: typeof Timestamp.now;
declare const extractAlertsData: (doc: DocumentSnapshot<DocumentData>) => {
    timestamp_seconds: any;
    timestamp_ui: string;
    car_number: string;
};
declare const simpleExtractData: (doc: DocumentSnapshot<DocumentData>) => TObject<any>;
declare const extractSiteData: (doc: DocumentSnapshot<DocumentData>) => {
    id: string;
    created: string;
    updated: string;
};
declare const extractClientData: (doc: DocumentSnapshot<DocumentData>) => {
    id: string;
    created: string;
    updated: string;
};
declare const extractBoardsData: (doc: DocumentSnapshot<DocumentData>) => {
    id: string;
    uploaded: string;
};
declare const extractCarsData: (doc: DocumentSnapshot<DocumentData>) => {
    id: string;
    brand: any;
    car_number: any;
    icon: string;
};
declare const extractCanbusData: (doc: DocumentSnapshot<DocumentData>) => {
    date_ui: string;
};
declare const extractLocationData: (doc: DocumentSnapshot<DocumentData>) => {
    id: string;
    lat: any;
    lng: any;
    prev_lat: any;
    prev_lng: any;
    timestamp: any;
    spd: string;
};
declare const get_all_documents: (collection_path: string) => Promise<TObject<any>[]>;
declare const get_document_by_id: (collection_path: string, doc_id: string) => Promise<TObject<any>>;
declare const set_document: (collection_path: string, doc_id: string, data: DocumentData) => Promise<boolean>;
declare const add_document: (collection_path: string, data: DocumentData, include_id?: boolean) => Promise<boolean>;
declare const delete_document: (collection_path: string, doc_id: string) => Promise<boolean>;
declare const query_document: (collection_path: string, field_name: string, operator: WhereFilterOp, value: any, ignore_log?: boolean) => Promise<null | TObject<any>>;
declare const query_documents: (collection_path: string, field_name: string, operator: WhereFilterOp, value: any) => Promise<TObject<any>[]>;
declare const query_documents_by_conditions: (collection_path: string, where_conditions: WhereCondition[]) => Promise<TObject<any>[]>;
declare const query_document_by_conditions: (collection_path: string, where_conditions: WhereCondition[]) => Promise<TObject<any>>;
declare const snapshot: Snapshot;
declare const snapshotDocument: SnapshotDocument;
declare const cleanNxSites: () => Promise<void>;

declare const calculateBearing: (startLat: any, startLng: any, endLat: any, endLng: any) => number;
declare const renderOnce: () => boolean;
declare const propsAreEqual: (prevProps: any, nextProps: any) => boolean;
declare const getUserCountryByIp: () => Promise<CountryOptions>;
declare const parsePermissions: (object: NxUser | Client) => TObject<TObject<boolean>>;
interface InitializeUserPermissionsProps {
    phoneNumber: string;
    firstTimeArray: string[];
    getUpdatePermissions: (permissions: TObject<TObject<boolean>>) => void;
}
declare const initializeUserPermissions: ({ phoneNumber, firstTimeArray, getUpdatePermissions }: InitializeUserPermissionsProps) => Promise<{
    unsubscribe: () => void;
    permissions: TObject<TObject<boolean>>;
}>;
declare const userNameFormat: (user?: NxUser) => string;
declare const multiStringFormat: (str1: string, str2?: string, str3?: string) => string;
declare const getLocationUrl: (lang: number, lat: number) => string;
declare const isNodeEnv: NodeJS.ProcessEnv;
declare const mode: string;
declare const isLocal: boolean;

declare const textRegex: RegExp;
declare const numbersRegex: RegExp;
declare const numbersOnlyRegex: RegExp;
declare const priceRegex: RegExp;
declare const emailRegex: RegExp;
declare const colorRegex: RegExp;
declare const carsRegex: RegExp;
declare const textNumbersRegex: RegExp;
declare const addressRegex: RegExp;
declare const chartsRegex: RegExp;
type ValidationType = "text" | "numbers" | "numbersOnly" | "price" | "textNumbers" | "email" | "color" | "address" | "cars" | "charts" | (string & {});
declare const handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
declare const handlePaste: (e: React.ClipboardEvent<HTMLInputElement>) => void;
declare const handleInvalid: (e: React.InvalidEvent<HTMLInputElement>, requireError?: string) => void;
declare const useValidation: (validationType: ValidationType, requireError?: string) => {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPaste: (e: React.ClipboardEvent<HTMLInputElement>) => void;
    onInvalid: (e: React.InvalidEvent<HTMLInputElement>) => void;
    "data-validation": ValidationType;
};
declare const getFormElementValue: (form: EventTarget & HTMLFormElement, name: string) => string;
declare const parseMultiSelectInput: (input: string) => any;

declare const setState: <T>(updater: T | ((state: T) => T), set: (fn: (state: any) => any) => void, stateName: string) => void;
declare const createSelectors: <T extends object>(store: any) => { [K in keyof T]: () => T[K]; };
declare const useStoreValues: <T extends object>(store: {
    use: { [K in keyof T]: () => T[K]; };
}, keys: Array<keyof T>) => Partial<T>;

declare const formatCarNumber: (car_number: string) => string;

type ConvertFunction = (input: string) => string;
type CheckFunction = (input: string) => boolean;
declare const isInternational: CheckFunction;
declare const isInternationalIsraelPhone: CheckFunction;
declare const local_israel_phone_format: ConvertFunction;
declare const international_israel_phone_format: ConvertFunction;
declare const displayFormatPhoneNumber: ConvertFunction;
declare const is_iccid: (number: string) => boolean;

declare function cn(...inputs: ClassValue[]): string;

interface TimeOptions {
    format?: string;
    fromFormat?: string;
    tz?: string;
}
declare function timestamp_to_string(firebaseTimestamp: Timestamp | Date | string, options?: TimeOptions): string;
declare function timestamp_to_millis(firebaseTimestamp: Timestamp): number;
declare function sort_by_timestamp(a: Timestamp, b: Timestamp, reverse?: boolean): number;

declare const baseDomain: string;
declare const devicesDomain: string;
declare const biDomain: string;
declare const callCenterDomain: string;
declare const akeylessOnlineDomain: string;
type Method = "GET" | "POST" | "PUT" | "DELETE";
type ServerName = "devices" | "bi" | "call-center";
declare const nx_api_call: (serverName: ServerName, method: Method, url: string, data?: TObject<any>) => Promise<any>;

export { type ValidationType, add_document, addressRegex, akeylessOnlineDomain, auth, baseDomain, biDomain, calculateBearing, callCenterDomain, carsRegex, chartsRegex, cleanNxSites, cn, collections, colorRegex, createSelectors, db, delete_document, devicesDomain, displayFormatPhoneNumber, emailRegex, extractAlertsData, extractBoardsData, extractCanbusData, extractCarsData, extractClientData, extractLocationData, extractSiteData, fire_base_TIME_TEMP, formatCarNumber, getFormElementValue, getLocationUrl, getUserCountryByIp, get_all_documents, get_document_by_id, handleChange, handleInvalid, handlePaste, initializeUserPermissions, international_israel_phone_format, isInternational, isInternationalIsraelPhone, isLocal, isNodeEnv, is_iccid, local_israel_phone_format, mode, multiStringFormat, numbersOnlyRegex, numbersRegex, nx_api_call, parseMultiSelectInput, parsePermissions, priceRegex, propsAreEqual, query_document, query_document_by_conditions, query_documents, query_documents_by_conditions, renderOnce, setState, set_document, simpleExtractData, snapshot, snapshotDocument, sort_by_timestamp, storage, textNumbersRegex, textRegex, timestamp_to_millis, timestamp_to_string, useStoreValues, useValidation, userNameFormat };

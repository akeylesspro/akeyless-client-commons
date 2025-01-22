import { FirebaseStorage } from 'firebase/storage';
import { WhereFilterOp, Unsubscribe, Timestamp, DocumentSnapshot, DocumentData, CollectionReference } from 'firebase/firestore';
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

declare const db: any;
declare const auth: any;
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

export { add_document, addressRegex, auth, calculateBearing, carsRegex, chartsRegex, cleanNxSites, cn, collections, colorRegex, createSelectors, db, delete_document, displayFormatPhoneNumber, emailRegex, extractAlertsData, extractBoardsData, extractCanbusData, extractCarsData, extractClientData, extractLocationData, extractSiteData, fire_base_TIME_TEMP, formatCarNumber, getUserCountryByIp, get_all_documents, get_document_by_id, handleChange, handleInvalid, handlePaste, initializeUserPermissions, international_israel_phone_format, isInternational, isInternationalIsraelPhone, is_iccid, local_israel_phone_format, numbersOnlyRegex, numbersRegex, parseMultiSelectInput, parsePermissions, priceRegex, query_document, query_document_by_conditions, query_documents, query_documents_by_conditions, renderOnce, setState, set_document, simpleExtractData, snapshot, snapshotDocument, storage, textNumbersRegex, textRegex, useStoreValues, useValidation };

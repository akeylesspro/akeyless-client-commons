import { TObject } from "akeyless-types-commons";
import { Unsubscribe, WhereFilterOp } from "firebase/firestore";

export type OnSnapshotCallback = (documents: TObject<any>[], config: OnSnapshotConfig) => void;

export interface OnSnapshotParsers {
    onFirstTime?: OnSnapshotCallback;
    onAdd?: OnSnapshotCallback;
    onModify?: OnSnapshotCallback;
    onRemove?: OnSnapshotCallback;
}
export interface WhereCondition {
    field_name: string;
    operator: WhereFilterOp;
    value: any;
}
export interface OnSnapshotConfig extends OnSnapshotParsers {
    collectionName: string;
    extraParsers?: OnSnapshotParsers[];
    conditions?: WhereCondition[];
}
export interface OnSnapshotConfigDocument extends Omit<OnSnapshotParsers, "onAdd"> {
    collectionName: string;
    documentId: string;
    extraParsers?: Omit<OnSnapshotParsers, "onAdd">[];
    conditions?: WhereCondition[];
}

export interface SnapshotResult {
    promise: Promise<void>;
    unsubscribe: Unsubscribe;
}

export type Snapshot = (config: OnSnapshotConfig, snapshotsFirstTime: string[]) => SnapshotResult;

export type SnapshotDocument = (config: OnSnapshotConfigDocument, snapshotsFirstTime: string[]) => SnapshotResult;

// types.ts

import { Unsubscribe } from "firebase/firestore";

export type OnSnapshotCallback = (documents: any[], config: OnSnapshotConfig) => void;

export interface OnSnapshotParsers {
    onFirstTime?: OnSnapshotCallback;
    onAdd?: OnSnapshotCallback;
    onModify?: OnSnapshotCallback;
    onRemove?: OnSnapshotCallback;
}

export interface OnSnapshotConfig extends OnSnapshotParsers {
    collectionName: string;
    extraParsers?: OnSnapshotParsers[];
}

export type Snapshot = (config: OnSnapshotConfig, snapshotsFirstTime: string[]) => Promise<Unsubscribe>;

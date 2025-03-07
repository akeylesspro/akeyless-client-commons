import { CountryOptions } from 'akeyless-types-commons';
import { Dispatch, SetStateAction, EffectCallback } from 'react';
import { WhereFilterOp } from 'firebase/firestore';

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

declare const useDocumentTitle: (title: string) => any;
declare const useSnapshotBulk: (configs: OnSnapshotConfig[], label?: string) => void;
declare const useSetUserCountry: (setUserCountry: Dispatch<SetStateAction<CountryOptions>>, changLang: (lang: string) => void) => any;

declare function useSafeEffect(callback: () => void, dependencies: any[], error_message?: string): void;
declare const useDeepCompareMemo: <T>(factory: () => T, dependencies: any[]) => T;
declare function useDeepCompareEffect(effect: EffectCallback, dependencies: any[]): void;

export { useDeepCompareEffect, useDeepCompareMemo, useDocumentTitle, useSafeEffect, useSetUserCountry, useSnapshotBulk };

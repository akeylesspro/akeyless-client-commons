import { CountryOptions } from 'akeyless-types-commons';
import { Dispatch, SetStateAction } from 'react';

type OnSnapshotCallback = (documents: any[], config: OnSnapshotConfig) => void;
interface OnSnapshotParsers {
    onFirstTime?: OnSnapshotCallback;
    onAdd?: OnSnapshotCallback;
    onModify?: OnSnapshotCallback;
    onRemove?: OnSnapshotCallback;
}
interface OnSnapshotConfig extends OnSnapshotParsers {
    collectionName: string;
    extraParsers?: OnSnapshotParsers[];
}

declare function useSafeEffect(callback: () => void, dependencies: any[], error_message?: string): void;
declare const useDocumentTitle: (title: string) => any;
declare const useSnapshotBulk: (configs: OnSnapshotConfig[], label?: string) => void;
declare const useSetUserCountry: (setUserCountry: Dispatch<SetStateAction<CountryOptions>>, changLang: (lang: string) => void) => any;

export { useDocumentTitle, useSafeEffect, useSetUserCountry, useSnapshotBulk };

import { OnSnapshotConfig, OnSnapshotConfigDocument } from "src/types";

export type SnapshotOp = "first" | "add" | "modify" | "remove";

export type SnapshotDocsProcessor = (payload: { op: SnapshotOp; docs: any[] }) => Promise<{ docs: any[] }> | { docs: any[] };

export interface WrapWorkerOptions {
    eventTtlMs?: number; // default 100
    maxRecentEvents?: number; // default 500
    jsonClone?: boolean; // default true
}

const createRecentEventsDedupe = (options?: WrapWorkerOptions) => {
    const recentEvents = new Map<string, number>();
    const EVENT_TTL_MS = options?.eventTtlMs ?? 100;
    const MAX_RECENT = options?.maxRecentEvents ?? 500;
    const now = () => Date.now();
    const shouldProcess = (key: string) => {
        const ts = recentEvents.get(key);
        if (ts && now() - ts < EVENT_TTL_MS) {
            return false;
        }
        // cleanup occasionally
        if (recentEvents.size > MAX_RECENT) {
            const cutoff = now() - EVENT_TTL_MS;
            for (const [k, v] of Array.from(recentEvents.entries())) {
                if (v < cutoff) recentEvents.delete(k);
            }
        }
        recentEvents.set(key, now());
        return true;
    };

    return { shouldProcess };
};

export const wrapConfigsWithWorker = (
    cfgs: OnSnapshotConfig[],
    runProcessor: SnapshotDocsProcessor,
    options?: WrapWorkerOptions
): OnSnapshotConfig[] => {
    const { shouldProcess } = createRecentEventsDedupe(options);
    const makeKey = (op: SnapshotOp, docs: any[], collectionName?: string) => {
        try {
            const ids = (docs || [])
                .map((d) => d?.id)
                .filter(Boolean)
                .sort()
                .join(",");
            return `${collectionName || "unknown"}:${op}:${ids}`;
        } catch {
            return `${collectionName || "unknown"}:${op}:*`;
        }
    };
    const wrapCb = (
        cb: OnSnapshotConfig["onFirstTime"] | OnSnapshotConfig["onAdd"] | OnSnapshotConfig["onModify"] | OnSnapshotConfig["onRemove"],
        op: SnapshotOp,
        run: SnapshotDocsProcessor
    ) => {
        if (!cb) return undefined;
        // Use a unique handler id per wrapped callback so dedupe is per-callback,
        // not global across base parser and extraParsers (which would suppress them).
        const handlerId = Math.random().toString(36).slice(2);
        return async (docs: any[], config: OnSnapshotConfig) => {
            try {
                const key = makeKey(op, docs, config?.collectionName);
                const perHandlerKey = `${handlerId}:${key}`;
                if (!shouldProcess(perHandlerKey)) {
                    return;
                }
                const safeDocs = options?.jsonClone === false ? docs : JSON.parse(JSON.stringify(docs));
                const { docs: processed } = await run({ op, docs: safeDocs });
                cb(processed, config);
            } catch {
                cb(docs, config);
            }
        };
    };

    return cfgs.map((cfg) => {
        const wrapped: OnSnapshotConfig = { ...cfg };
        wrapped.onFirstTime = wrapCb(cfg.onFirstTime, "first", runProcessor);
        wrapped.onAdd = wrapCb(cfg.onAdd, "add", runProcessor);
        wrapped.onModify = wrapCb(cfg.onModify, "modify", runProcessor);
        wrapped.onRemove = wrapCb(cfg.onRemove, "remove", runProcessor);
        if (cfg.extraParsers && cfg.extraParsers.length) {
            wrapped.extraParsers = cfg.extraParsers.map((p) => ({
                onFirstTime: wrapCb(p.onFirstTime, "first", runProcessor),
                onAdd: wrapCb(p.onAdd, "add", runProcessor),
                onModify: wrapCb(p.onModify, "modify", runProcessor),
                onRemove: wrapCb(p.onRemove, "remove", runProcessor),
            }));
        }
        return wrapped;
    });
};

/** Get a doc "version" for dedupe key so different updates on same doc get different keys */
const getDocVersionKey = (doc: any): string => {
    if (!doc || typeof doc !== "object") return "";
    const ts = doc.updatedAt ?? doc._updatedAt ?? doc.updated_at ?? doc.modifiedAt ?? doc._modifiedAt;
    if (ts != null) return String(ts);
    return "";
};

export const wrapDocumentConfigsWithWorker = (
    cfgs: OnSnapshotConfigDocument[],
    runProcessor: SnapshotDocsProcessor,
    options?: WrapWorkerOptions
): OnSnapshotConfigDocument[] => {
    // Shorter TTL for document snapshots so rapid updates (e.g. 100ms apart) are not treated as duplicates
    const docOptions: WrapWorkerOptions = { ...options, eventTtlMs: options?.eventTtlMs ?? 100 };
    const { shouldProcess } = createRecentEventsDedupe(docOptions);
    const makeKey = (op: SnapshotOp, docs: any[], collectionName?: string, documentId?: string) => {
        try {
            const ids = (docs || [])
                .map((d) => d?.id)
                .filter(Boolean)
                .sort()
                .join(",");
            const versionPart = docs?.length === 1 ? getDocVersionKey(docs[0]) : (docs || []).map(getDocVersionKey).join(",");
            const versionSuffix = versionPart ? `:${versionPart}` : "";
            return `${collectionName || "unknown"}/${documentId || "unknown"}:${op}:${ids}${versionSuffix}`;
        } catch {
            return `${collectionName || "unknown"}/${documentId || "unknown"}:${op}:*`;
        }
    };
    const wrapCb = (cb: OnSnapshotConfigDocument["onFirstTime"] | OnSnapshotConfigDocument["onModify"] | OnSnapshotConfigDocument["onRemove"], op: SnapshotOp) => {
        if (!cb) return undefined;
        // Use a unique handler id per wrapped callback so dedupe is per-callback,
        // not global across base parser and extraParsers (which would suppress them).
        const handlerId = Math.random().toString(36).slice(2);
        return async (docs: any[], config: OnSnapshotConfigDocument) => {
            try {
                const key = makeKey(op, docs, config?.collectionName, config?.documentId);
                const perHandlerKey = `${handlerId}:${key}`;
                if (!shouldProcess(perHandlerKey)) {
                    return;
                }
                const safeDocs = options?.jsonClone === false ? docs : JSON.parse(JSON.stringify(docs));
                const { docs: processed } = await runProcessor({ op, docs: safeDocs });
                cb(processed, config);
            } catch {
                cb(docs, config);
            }
        };
    };

    return cfgs.map((cfg) => {
        const wrapped: OnSnapshotConfigDocument = { ...cfg };
        wrapped.onFirstTime = wrapCb(cfg.onFirstTime, "first");
        wrapped.onModify = wrapCb(cfg.onModify, "modify");
        wrapped.onRemove = wrapCb(cfg.onRemove, "remove");
        if (cfg.extraParsers && cfg.extraParsers.length) {
            wrapped.extraParsers = cfg.extraParsers.map((p) => ({
                onFirstTime: wrapCb(p.onFirstTime, "first"),
                onModify: wrapCb(p.onModify, "modify"),
                onRemove: wrapCb(p.onRemove, "remove"),
            }));
        }
        return wrapped;
    });
};

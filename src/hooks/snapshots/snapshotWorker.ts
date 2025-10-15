import { OnSnapshotConfig } from "src/types";

export type SnapshotOp = "first" | "add" | "modify" | "remove";

export type SnapshotDocsProcessor = (payload: { op: SnapshotOp; docs: any[] }) => Promise<{ docs: any[] }> | { docs: any[] };

export interface WrapWorkerOptions {
    eventTtlMs?: number; // default 1500
    maxRecentEvents?: number; // default 500
    jsonClone?: boolean; // default true
}

export const wrapConfigsWithWorker = (
    cfgs: OnSnapshotConfig[],
    runProcessor: SnapshotDocsProcessor,
    options?: WrapWorkerOptions
): OnSnapshotConfig[] => {
    const recentEvents = new Map<string, number>();
    const EVENT_TTL_MS = options?.eventTtlMs ?? 1500;
    const MAX_RECENT = options?.maxRecentEvents ?? 500;
    const now = () => Date.now();
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

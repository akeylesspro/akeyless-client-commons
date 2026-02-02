import { useCallback, useEffect, useRef } from "react";
import { WrapWorkerOptions } from "./snapshots/snapshotWorker";

export type WebWorkerFunction<TInput, TOutput> = (data: TInput) => TOutput | Promise<TOutput>;

export interface UseWebWorkerOptions {
    debug?: boolean;
    name?: string;
    onError?: (error: Error) => void;
    warmStart?: boolean; // create the worker eagerly on mount
    recreateOnError?: boolean; // terminate and recreate worker after errors
    options?: WrapWorkerOptions;
}

export type RunWorkerFunction<TInput, TOutput> = ((data: TInput, transfer?: Transferable[]) => Promise<TOutput>) & {
    isSupported: () => boolean;
    isUsingWorker: () => boolean;
    pendingJobs: () => number;
    lastError: () => Error | null;
};

export const useWebWorker = <TInput = unknown, TOutput = unknown>(fn: WebWorkerFunction<TInput, TOutput>, options?: UseWebWorkerOptions) => {
    const workerRef = useRef<Worker | null>(null);
    const workerUrlRef = useRef<string | null>(null);
    const nextJobIdRef = useRef<number>(1);
    const pendingJobsRef = useRef<Map<number, { resolve: (value: TOutput) => void; reject: (reason?: unknown) => void }>>(new Map());
    const isSupportedRef = useRef<boolean>(typeof window !== "undefined" && typeof Worker !== "undefined");
    const isReadyRef = useRef<boolean>(false);
    const lastErrorRef = useRef<Error | null>(null);

    useEffect(() => {
        if (!isSupportedRef.current) {
            return () => {};
        }

        // eager warm start if requested
        if (options?.warmStart) {
            try {
                ensureWorker();
            } catch (error) {
                console.error("Error creating worker", error);
            }
        }

        return () => {
            if (workerRef.current) {
                workerRef.current.terminate();
                workerRef.current = null;
            }
            if (workerUrlRef.current) {
                URL.revokeObjectURL(workerUrlRef.current);
                workerUrlRef.current = null;
            }
            // Reject any still-pending jobs on cleanup
            pendingJobsRef.current.forEach((job) => {
                job.reject(new Error("Worker terminated"));
            });
            pendingJobsRef.current.clear();
            isReadyRef.current = false;
        };
    }, [fn, options?.debug, options?.name, options?.onError]);

    const ensureWorker = useCallback(() => {
        if (!isSupportedRef.current) return;
        if (workerRef.current) return;

        const functionString = fn.toString();
        const workerSource = [
            `const userFn = (${functionString});`,
            `onmessage = async function(event) {`,
            `  try {`,
            `    const { id, payload } = event.data || {};`,
            `    const result = await userFn(payload);`,
            `    postMessage({ id, ok: true, result });`,
            `  } catch (err) {`,
            `    let message;`,
            `    try { message = err && err.message ? String(err.message) : String(err); } catch (_) { message = 'Worker error'; }`,
            `    postMessage({ id, ok: false, error: message });`,
            `  }`,
            `}`,
        ].join("\n");

        const workerBlob = new Blob([workerSource], { type: "application/javascript" });
        const url = URL.createObjectURL(workerBlob);
        const worker = new Worker(url);
        isReadyRef.current = true;
        if (options?.debug) {
            console.log(`[WebWorker${options?.name ? ":" + options.name : ""}] created`);
        }

        worker.onmessage = (event: MessageEvent) => {
            const data = event.data || {};
            const id = data.id as number;
            if (!id) return;
            const pending = pendingJobsRef.current.get(id);
            if (!pending) return;
            pendingJobsRef.current.delete(id);
            if (data.ok) {
                pending.resolve(data.result as TOutput);
            } else {
                const err = new Error(data.error ?? "Worker error");
                lastErrorRef.current = err;
                options?.onError?.(err);
                pending.reject(err);
            }
        };

        worker.onerror = (event: ErrorEvent) => {
            const err = new Error(event.message || "Worker encountered an error");
            lastErrorRef.current = err;
            options?.onError?.(err);
            pendingJobsRef.current.forEach((job) => {
                job.reject(err);
            });
            pendingJobsRef.current.clear();
            if (options?.recreateOnError) {
                try {
                    workerRef.current?.terminate();
                } catch (_) {}
                workerRef.current = null;
                if (workerUrlRef.current) {
                    try {
                        URL.revokeObjectURL(workerUrlRef.current);
                    } catch (_) {}
                    workerUrlRef.current = null;
                }
                isReadyRef.current = false;
            }
        };

        workerRef.current = worker;
        workerUrlRef.current = url;
    }, [fn, options?.debug, options?.name, options?.onError]);

    const runWorkerBase = useCallback(
        (data: TInput, transfer?: Transferable[]) => {
            if (!workerRef.current) {
                // Lazily create the worker to avoid StrictMode double-mount creation
                ensureWorker();
                if (options?.debug) {
                    console.warn(`[WebWorker${options?.name ? ":" + options.name : ""}] fallback to main thread`);
                }
                return new Promise<TOutput>(async (resolve, reject) => {
                    try {
                        const result = await (fn as WebWorkerFunction<TInput, TOutput>)(data);
                        resolve(result);
                    } catch (err: any) {
                        const error = err instanceof Error ? err : new Error(String(err));
                        lastErrorRef.current = error;
                        options?.onError?.(error);
                        reject(error);
                    }
                });
            }

            const id = nextJobIdRef.current++;
            if (options?.debug) {
                console.log(`[WebWorker${options?.name ? ":" + options.name : ""}] postMessage id=${id}`);
            }
            return new Promise<TOutput>((resolve, reject) => {
                pendingJobsRef.current.set(id, { resolve, reject });
                try {
                    const shouldTransfer = Array.isArray(transfer) ? transfer : [];
                    // Attempt to auto-detect transferables if none were supplied
                    if (!shouldTransfer.length) {
                        const maybeArrayBuffer = (data as any)?.buffer instanceof ArrayBuffer ? (data as any).buffer : undefined;
                        if (maybeArrayBuffer) {
                            workerRef.current!.postMessage({ id, payload: data }, [maybeArrayBuffer]);
                            return;
                        }
                    }
                    if (shouldTransfer.length) {
                        workerRef.current!.postMessage({ id, payload: data }, shouldTransfer);
                    } else {
                        workerRef.current!.postMessage({ id, payload: data });
                    }
                } catch (err: any) {
                    pendingJobsRef.current.delete(id);
                    const error = err instanceof Error ? err : new Error(String(err));
                    lastErrorRef.current = error;
                    options?.onError?.(error);
                    reject(error);
                }
            });
        },
        [fn, options?.debug, options?.name, options?.onError, ensureWorker]
    );

    const runWorker = runWorkerBase as RunWorkerFunction<TInput, TOutput>;
    runWorker.isSupported = () => isSupportedRef.current;
    runWorker.isUsingWorker = () => Boolean(workerRef.current) && isReadyRef.current;
    runWorker.pendingJobs = () => pendingJobsRef.current.size;
    runWorker.lastError = () => lastErrorRef.current;
    // Optional explicit teardown
    (runWorker as any).terminate = () => {
        if (workerRef.current) {
            try {
                workerRef.current.terminate();
            } catch (error) {
                console.error("Error terminating worker", error);
            }
            workerRef.current = null;
        }
        if (workerUrlRef.current) {
            try {
                URL.revokeObjectURL(workerUrlRef.current);
            } catch (error) {
                console.error("Error revoking worker URL", error);
            }
            workerUrlRef.current = null;
        }
        pendingJobsRef.current.forEach((job) => job.reject(new Error("Worker terminated")));
        pendingJobsRef.current.clear();
        isReadyRef.current = false;
    };

    return runWorker;
};

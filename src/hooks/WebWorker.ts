import { useCallback, useEffect, useRef } from "react";

type WebWorkerFunction<TInput, TOutput> = (data: TInput) => TOutput | Promise<TOutput>;

const useWebWorker = <TInput = unknown, TOutput = unknown>(fn: WebWorkerFunction<TInput, TOutput>) => {
    const workerRef = useRef<Worker | null>(null);
    const workerUrlRef = useRef<string | null>(null);
    const nextJobIdRef = useRef<number>(1);
    const pendingJobsRef = useRef<Map<number, { resolve: (value: TOutput) => void; reject: (reason?: unknown) => void }>>(new Map());

    useEffect(() => {
        if (typeof window === "undefined" || typeof Worker === "undefined") {
            return () => {};
        }

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
                pending.reject(new Error(data.error ?? "Worker error"));
            }
        };

        worker.onerror = () => {
            // Reject all pending jobs on an unhandled worker error
            pendingJobsRef.current.forEach((job) => {
                job.reject(new Error("Worker encountered an error"));
            });
            pendingJobsRef.current.clear();
        };

        // Replace existing worker if present
        if (workerRef.current) {
            workerRef.current.terminate();
        }
        if (workerUrlRef.current) {
            URL.revokeObjectURL(workerUrlRef.current);
        }

        workerRef.current = worker;
        workerUrlRef.current = url;

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
        };
    }, [fn]);

    const runWorker = useCallback((data: TInput, transfer?: Transferable[]) => {
        // Fallback: if Worker is unavailable (SSR or older env), run on main thread
        if (!workerRef.current) {
            return new Promise<TOutput>(async (resolve, reject) => {
                try {
                    const result = await (fn as WebWorkerFunction<TInput, TOutput>)(data);
                    resolve(result);
                } catch (err) {
                    reject(err);
                }
            });
        }

        const id = nextJobIdRef.current++;
        return new Promise<TOutput>((resolve, reject) => {
            pendingJobsRef.current.set(id, { resolve, reject });
            try {
                if (transfer && transfer.length) {
                    workerRef.current!.postMessage({ id, payload: data }, transfer);
                } else {
                    workerRef.current!.postMessage({ id, payload: data });
                }
            } catch (err) {
                pendingJobsRef.current.delete(id);
                reject(err);
            }
        });
    }, [fn]);

    return runWorker;
};

export default useWebWorker;

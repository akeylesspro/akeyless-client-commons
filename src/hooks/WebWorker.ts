import { useCallback, useEffect, useRef } from "react";

const useWebWorker = (fn: Function) => {
    const workerRef = useRef<Worker | null>(null);
    const memoFunction = useCallback(fn, []);
    useEffect(() => {
        const createWorker = (workerFunction: Function) => {
            const functionString = workerFunction.toString();
            const workerBlob = new Blob([`onmessage = function(event) { postMessage((${functionString})(event.data)); }`], {
                type: "application/javascript",
            });
            return new Worker(URL.createObjectURL(workerBlob));
        };
        workerRef.current = createWorker(memoFunction);
        return () => {
            if (workerRef.current) {
                workerRef.current.terminate();
            }
        };
    }, [fn]);

    const runWorker = (data: any) => {
        return new Promise((resolve, reject) => {
            if (workerRef.current) {
                workerRef.current.onmessage = (event) => resolve(event.data);
                workerRef.current.onerror = (error) => reject(error);
                workerRef.current.postMessage(data);
            } else {
                reject("Worker is not initialized");
            }
        });
    };

    return runWorker;
};

export default useWebWorker;

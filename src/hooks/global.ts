import { useEffect } from "react";
export function useSafeEffect(callback: () => void, dependencies: any[], error_message?: string) {
    useEffect(() => {
        try {
            callback();
        } catch (error) {
            console.error(error_message || "Error in useEffect:", error);
        }
    }, dependencies);
}

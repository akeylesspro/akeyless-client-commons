import { useEffect } from "react";

export function ChangeDocumentTitle({ title = "Akeyless" }) {
    useEffect(() => {
        document.title = title;
        return () => {
            document.title = "Akeyless";
        };
    }, []);
    return <></>;
}

import axios from "axios";

export interface EmailAttachment {
    content: string;
    filename: string;
    type: string;
    disposition: "attachment" | "inline";
}

export const createAttachmentFromBlob = async (
    blob: Blob,
    filename: string,
    mimeType?: string,
    disposition: "attachment" | "inline" = "attachment"
): Promise<EmailAttachment> => {
    try {
        const arrayBuffer = await blob.arrayBuffer();
        let base64Content: string;

        if (typeof Buffer !== "undefined") {
            base64Content = Buffer.from(arrayBuffer).toString("base64");
        } else {
            const uint8Array = new Uint8Array(arrayBuffer);
            const chunkSize = 0x8000;
            let binary = "";
            for (let i = 0; i < uint8Array.length; i += chunkSize) {
                binary += String.fromCharCode.apply(null, uint8Array.subarray(i, i + chunkSize) as unknown as number[]);
            }
            base64Content = btoa(binary);
        }

        return {
            content: base64Content,
            filename,
            type: mimeType || blob.type || "application/pdf",
            disposition,
        };
    } catch (error) {
        console.error("Error creating attachment from blob", { error, filename });
        throw error;
    }
};

const getFilenameFromUrl = (url: string): string => {
    try {
        const urlObj = new URL(url);
        const pathname = urlObj.pathname;
        const filename = pathname.split("/").pop() || "download";
        return filename.includes(".") ? filename : `${filename}.txt`;
    } catch {
        return "download.txt";
    }
};

export const createAttachmentFromUrl = async (url: string, filename?: string): Promise<EmailAttachment> => {
    const response = await axios.get(`/api/proxy-file?url=${encodeURIComponent(url)}`, {
        responseType: "blob",
    });
    const blob = response.data;
    const finalFilename = filename ?? getFilenameFromUrl(url);
    return await createAttachmentFromBlob(blob, finalFilename);
};

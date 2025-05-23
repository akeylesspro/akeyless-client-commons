interface ImportMetaEnv {
    [key: string]: any;
    readonly VITE_API_KEY: string;
    readonly VITE_AUTH_DOMAIN: string;
    readonly VITE_DATABASE_URL: string;
    readonly VITE_PROJECT_ID: string;
    readonly VITE_STORAGE_BUCKET: string;
    readonly VITE_MESSAGING_SENDER_ID: string;
    readonly VITE_APP_ID: string;
    readonly VITE_MODE: string;
    readonly VITE_is_local: string;
    readonly VITE_RECAPTCHA_SITE_KEY: string;
    readonly VITE_api_google_key: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

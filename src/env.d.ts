interface ImportMetaEnv { 
    VITE_NODE_ENV: string,
    VITE_GATEWAY_URI: string,
    NODE_ENV?: string
    VITE_APP_IS_NAVBAR?: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

/// <reference types="vite/client" />

interface ImportMetaEnv { 
    VITE_NODE_ENV: string, 
    VITE_HOST_URL: string,
    VITE_APP_BASE_URL: string,
    NODE_ENV?: string
}
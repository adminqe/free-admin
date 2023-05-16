/// <reference types="vite/client" />

// 环境变量 类型提示
interface ImportMetaEnv {
    // readonly VITE_APP_BASE_URL: string
    // readonly VITE_APP_SITE_TITLE: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

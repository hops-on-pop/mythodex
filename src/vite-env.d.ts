/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Public origin, e.g. https://mythodex.example — no trailing slash needed. */
  readonly VITE_SITE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

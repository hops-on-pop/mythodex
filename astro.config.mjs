// @ts-check
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, fontProviders } from "astro/config"
import { loadEnv } from "vite"

// Public origin, e.g. https://mythodex.example. Drives canonical links, Open
// Graph URLs and the sitemap; without it those are skipped. Read from the
// environment (Cloudflare build variables) or a .env file. VITE_SITE_URL is
// the name from before the Astro migration, still honoured so an existing
// Cloudflare setting keeps working.
const env = loadEnv(process.env.NODE_ENV ?? "production", process.cwd(), "")
const SITE_URL = env.SITE_URL || env.VITE_SITE_URL

// Fonts are self-hosted from the installed @fontsource packages: latin subset
// only, just the weights in use. Each file is named exactly rather than left
// to package lookup, which picked the wrong weights. Astro copies them to
// /_astro/fonts with hashed names, writes the @font-face rules, and generates
// metric-matched fallbacks so the swap doesn't shift the layout.
/** @param {string} pkg @param {string} file */
const fontsource = (pkg, file) => `./node_modules/${pkg}/files/${file}.woff2`

export default defineConfig({
  site: SITE_URL || undefined,

  // characters/zeus.html rather than characters/zeus/index.html. Cloudflare
  // serves both at /characters/zeus, but the folder form redirects to a
  // trailing slash first.
  build: { format: "file" },
  trailingSlash: "never",

  // Hovering a link loads the next page before the click. With clientPrerender,
  // Chrome and Edge render it in the background, portrait included, so the
  // click shows it instantly. Other browsers fetch only the HTML.
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  experimental: { clientPrerender: true },

  integrations: [sitemap({ filter: (page) => !page.endsWith("/404") })],

  fonts: [
    {
      provider: fontProviders.local(),
      name: "Cinzel Decorative",
      cssVariable: "--font-cinzel",
      fallbacks: ["serif"],
      options: {
        variants: [
          {
            weight: 700,
            style: "normal",
            src: [
              fontsource(
                "@fontsource/cinzel-decorative",
                "cinzel-decorative-latin-700-normal",
              ),
            ],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Nunito",
      cssVariable: "--font-nunito",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            // The variable cut: one file covers every weight.
            weight: "200 1000",
            style: "normal",
            src: [
              fontsource(
                "@fontsource-variable/nunito",
                "nunito-latin-wght-normal",
              ),
            ],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Kalam",
      cssVariable: "--font-kalam",
      fallbacks: ["cursive"],
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: [fontsource("@fontsource/kalam", "kalam-latin-400-normal")],
          },
          {
            weight: 700,
            style: "normal",
            src: [fontsource("@fontsource/kalam", "kalam-latin-700-normal")],
          },
        ],
      },
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
})

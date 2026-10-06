import path from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig, loadEnv, type Plugin } from "vite"
import react from "@vitejs/plugin-react"
import { tanstackRouter } from "@tanstack/router-plugin/vite"
import tailwindcss from "@tailwindcss/vite"

import { characterList } from "./src/data/characters.ts"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/**
 * robots.txt and sitemap.xml, generated from the character data so a new
 * figure is listed the moment it's added. Both need an absolute origin, so the
 * sitemap is skipped (with a warning) when VITE_SITE_URL is unset. robots.txt
 * is always written: without a real file the SPA fallback serves index.html
 * at /robots.txt, which crawlers and Lighthouse read as an invalid file.
 */
function seoFiles(siteUrl: string | undefined): Plugin {
  const origin = siteUrl?.replace(/\/+$/, "")
  return {
    name: "mythodex:seo-files",
    apply: "build",
    generateBundle() {
      const robots = ["User-agent: *", "Allow: /"]

      if (origin) {
        const paths = [
          "/",
          ...characterList.map((character) => `/characters/${character.slug}`),
        ]
        const urls = paths
          .map((p) => `  <url><loc>${origin}${p}</loc></url>`)
          .join("\n")
        this.emitFile({
          type: "asset",
          fileName: "sitemap.xml",
          source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
        })
        robots.push("", `Sitemap: ${origin}/sitemap.xml`)
      } else {
        this.warn(
          "VITE_SITE_URL is not set — skipping sitemap.xml and canonical links.",
        )
      }

      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `${robots.join("\n")}\n`,
      })
    },
  }
}

/**
 * Preloads the fonts painted above the fold — Cinzel for the masthead, Nunito
 * for body copy. Without this the browser only discovers them after the CSS
 * has downloaded and parsed. Kalam is left to load on demand.
 */
function preloadFonts(patterns: RegExp[]): Plugin {
  return {
    name: "mythodex:preload-fonts",
    apply: "build",
    transformIndexHtml: {
      order: "post",
      handler(_html, { bundle }) {
        if (!bundle) return
        return Object.keys(bundle)
          .filter((file) => patterns.some((pattern) => pattern.test(file)))
          .map((file) => ({
            tag: "link",
            attrs: {
              rel: "preload",
              as: "font",
              type: "font/woff2",
              href: `/${file}`,
              crossorigin: "",
            },
            injectTo: "head" as const,
          }))
      },
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname)

  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [
      tanstackRouter({
        target: "react",
        autoCodeSplitting: true,
      }),
      react(),
      tailwindcss(),
      seoFiles(env.VITE_SITE_URL),
      preloadFonts([
        /cinzel-decorative-latin-700-normal-[\w-]+\.woff2$/,
        /nunito-latin-wght-normal-[\w-]+\.woff2$/,
      ]),
    ],
  }
})

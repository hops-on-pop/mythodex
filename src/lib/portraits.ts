// Portrait lookup, built from whatever `bun run portraits` has encoded into
// src/assets/portraits/. Globbing (rather than hand-written paths in the data)
// is what gets every file a content hash from Vite — so the host can serve
// them with an immutable cache header — and it turns "does this figure have
// art yet?" into a build-time fact instead of a runtime 404.

import type { CharacterSlug } from "@/data/types"

const files = import.meta.glob<string>("../assets/portraits/*.{avif,webp}", {
  eager: true,
  query: "?url",
  import: "default",
})

export interface PortraitSources {
  /** `srcset` for the <source type="image/avif">. */
  avif: string
  /** `srcset` for the <img>, which browsers without AVIF fall back to. */
  webp: string
  /** Largest WebP, for the <img> `src`. */
  src: string
}

const FILE_NAME = /\/([a-z-]+)-(\d+)\.(avif|webp)$/

type Variants = Record<"avif" | "webp", Array<[width: number, url: string]>>

const variants = new Map<string, Variants>()
for (const [file, url] of Object.entries(files)) {
  const match = FILE_NAME.exec(file)
  if (!match) continue
  const [, slug, width, format] = match
  let entry = variants.get(slug)
  if (!entry) variants.set(slug, (entry = { avif: [], webp: [] }))
  entry[format as keyof Variants].push([Number(width), url])
}

const srcset = (list: Variants["avif"]) =>
  list
    .toSorted(([a], [b]) => a - b)
    .map(([width, url]) => `${url} ${width}w`)
    .join(", ")

const portraits = new Map<string, PortraitSources>()
for (const [slug, { avif, webp }] of variants) {
  const largest = webp.toSorted(([a], [b]) => b - a)[0]
  if (!largest) continue
  portraits.set(slug, { avif: srcset(avif), webp: srcset(webp), src: largest[1] })
}

/** The encoded portrait set for a figure, or undefined if none exists yet. */
export function portraitOf(slug: CharacterSlug): PortraitSources | undefined {
  return portraits.get(slug)
}

// Portrait lookup by slug. The masters live in src/assets/portraits/ and are
// imported through a glob, so Astro's image pipeline can resize and re-encode
// them at build time (see components/Portrait.astro) and fingerprint every
// output for permanent caching. Whether a figure has art yet is a build-time
// fact: no file, no entry, and the card draws its placeholder frame.

import path from "node:path"

import type { ImageMetadata } from "astro"
import sharp from "sharp"

import type { CharacterSlug } from "@/data/types"

const PORTRAIT_DIR = path.join(process.cwd(), "src/assets/portraits")

const files = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/portraits/*.{jpg,jpeg,png}",
  { eager: true },
)

const portraits = new Map<string, ImageMetadata>()
const placeholders = new WeakMap<ImageMetadata, string>()

await Promise.all(
  Object.entries(files).map(async ([file, module]) => {
    const name = path.basename(file)
    const slug = name.replace(/\.\w+$/, "")
    portraits.set(slug, module.default)
    placeholders.set(
      module.default,
      await gradientOf(path.join(PORTRAIT_DIR, name)),
    )
  }),
)

/**
 * A three-stop vertical gradient of the portrait's own colours — sky, figure,
 * ground — painted behind the <img> so a slow load shows a soft preview of the
 * art rather than an empty box. Squashing the master to 1×3 pixels does the
 * averaging; it costs ~70 bytes of HTML per portrait.
 */
async function gradientOf(file: string): Promise<string> {
  const pixels = await sharp(file)
    .resize(1, 3, { fit: "fill" })
    .removeAlpha()
    .raw()
    .toBuffer()
  const stops = [0, 3, 6].map(
    (i) => `rgb(${pixels[i]} ${pixels[i + 1]} ${pixels[i + 2]})`,
  )
  return `linear-gradient(${stops.join(", ")})`
}

/** The portrait master for a figure, or undefined if none exists yet. */
export function portraitOf(slug: CharacterSlug): ImageMetadata | undefined {
  return portraits.get(slug)
}

/** The colour placeholder for a portrait returned by portraitOf. */
export function placeholderOf(image: ImageMetadata): string | undefined {
  return placeholders.get(image)
}

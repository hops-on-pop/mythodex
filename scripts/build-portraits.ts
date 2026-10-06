// Encodes the portrait masters in art/portraits/ into the responsive set the
// app ships: every width in WIDTHS, as AVIF and as WebP, written to
// src/assets/portraits/{slug}-{width}.{avif,webp}. `src/lib/portraits.ts`
// globs that folder, so Vite fingerprints each file and the browser can cache
// it forever.
//
// To add a portrait: drop a 600×900 JPEG named after the character's slug into
// art/portraits/ and run `bun run portraits`. Only masters newer than their
// outputs are re-encoded.

import { mkdir, readdir, stat } from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"

const SOURCE_DIR = "art/portraits"
const OUTPUT_DIR = "src/assets/portraits"

// Cards top out around 312 CSS px and the detail portrait at 300, so 400 covers
// 1x screens and 600 (the master's own width) covers 2x and up.
const WIDTHS = [400, 600]

const FORMATS = {
  avif: (image: sharp.Sharp) => image.avif({ quality: 45, effort: 6 }),
  webp: (image: sharp.Sharp) => image.webp({ quality: 72, effort: 6 }),
}

async function mtime(file: string): Promise<number> {
  try {
    return (await stat(file)).mtimeMs
  } catch {
    return 0
  }
}

await mkdir(OUTPUT_DIR, { recursive: true })

const masters = (await readdir(SOURCE_DIR)).filter((file) =>
  /\.(jpe?g|png)$/i.test(file),
)

let encoded = 0
for (const file of masters) {
  const source = path.join(SOURCE_DIR, file)
  const slug = path.parse(file).name
  const sourceTime = await mtime(source)

  for (const width of WIDTHS) {
    for (const [format, encode] of Object.entries(FORMATS)) {
      const output = path.join(OUTPUT_DIR, `${slug}-${width}.${format}`)
      if ((await mtime(output)) > sourceTime) continue

      await encode(sharp(source).resize({ width, withoutEnlargement: true }))
        .toFile(output)
      encoded++
    }
  }
}

console.log(
  `portraits: ${masters.length} masters, ${encoded} files encoded → ${OUTPUT_DIR}`,
)

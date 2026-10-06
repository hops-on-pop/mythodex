# MythoDex

An illustrated field guide to Greek mythology: gods, Titans, heroes and
monsters, with their stories, symbols and family trees.

Vite + React 19 + TanStack Router, a static SPA styled with Tailwind 4 and hosted on
Cloudflare. [PLAN.md](PLAN.md) covers the architecture and data model, and
[design-system.md](design-system.md) covers the visual design.

## Setup

This project uses [Bun](https://bun.sh). Use `bun` and `bunx` rather than npm.

```sh
bun install
bun run dev
```

| Script               | What it does                                               |
| -------------------- | ---------------------------------------------------------- |
| `bun run dev`        | Start the Vite dev server                                  |
| `bun run build`      | Typecheck, then build to `dist/`                           |
| `bun run preview`    | Serve the `dist/` build locally                            |
| `bun run portraits`  | Encode new or changed portraits (see below)                |
| `bun run lint`       | Run oxlint                                                 |

## Project layout

```text
art/portraits/          Portrait masters (JPEG). Not shipped: the encoder reads these.
scripts/                build-portraits.ts
src/assets/portraits/   Encoded portraits (generated, committed)
src/assets/images/      SVG stencils: meander bands and category badges
src/data/               characters.ts (card data, relations), stories.ts (page text), types.ts
src/lib/                graph.ts (family relations), portraits.ts, site.ts
src/routes/             TanStack Router file routes
public/                 Copied to dist/ as-is: _headers, _redirects, favicon
```

## Adding a character

1. Add the slug to `CharacterSlug` in [src/data/types.ts](src/data/types.ts).
2. Add the record to [src/data/characters.ts](src/data/characters.ts). Write each
   relation once, on the character it starts from. For example, Zeus declares
   `parent-of` Athena, and Athena declares nothing back.
   [src/lib/graph.ts](src/lib/graph.ts) works out the reverse relations.
3. Add the page text (`body` paragraphs and `facts`) to
   [src/data/stories.ts](src/data/stories.ts). It's kept separate so the home
   page doesn't download it. TypeScript reports an error until every
   character has an entry.
4. Add a portrait (next section). Until one exists, the card shows a placeholder
   frame.

The sitemap picks up the new page automatically on the next build.

## Adding or replacing a portrait

1. Export a **600×900 JPEG** (2:3) named after the character's slug, for example
   `nemean-lion.jpg`.
2. Put it in `art/portraits/`.
3. Run `bun run portraits`.
4. Commit both the master and the new files in `src/assets/portraits/`.

The script encodes each master at 400w and 600w as AVIF and WebP. It only
re-encodes masters that are newer than their outputs, so to redo everything,
delete `src/assets/portraits/` first. That takes about a minute.

You don't edit any code. [src/lib/portraits.ts](src/lib/portraits.ts) finds
portraits by slug, and Vite adds a content hash to each filename so browsers can
cache them indefinitely. Don't reference portraits by path, and don't put them
in `public/`, because files there aren't hashed.

Encoding quality is set at the top of
[scripts/build-portraits.ts](scripts/build-portraits.ts): AVIF q45 and WebP q72.

## SVG stencils (meanders and badges)

The files in `src/assets/images/` are used as CSS masks, so only their shape
matters and they take their color from the surrounding text color. See the
comments in [src/index.css](src/index.css).

After exporting a new or changed SVG from Illustrator, minify it:

```sh
bunx svgo --multipass -p 1 src/assets/images/<file>.svg
```

`-p 1` rounds coordinates to one decimal place. That's invisible at the sizes
these render at, and it roughly halves the file size. Keep the badge artboards
square and close in size to the existing ones, so the seals line up when shown
at the same size.

## Fonts

Fonts are bundled with the site through Fontsource instead of loaded from Google
Fonts. To keep downloads small, only the Latin character set and the weights in
use are imported:

| Font              | Loaded                     | Notes                                            |
| ----------------- | -------------------------- | ------------------------------------------------ |
| Cinzel Decorative | 700                        | Preloaded: the masthead uses it                  |
| Nunito            | Variable font, all weights | Preloaded: body text                             |
| Kalam             | 400, 700                   | Loads when a page uses it                        |

To add a weight, add its import at the top of [src/index.css](src/index.css), for
example `@import "@fontsource/cinzel-decorative/latin-900.css";`. The font
preloads are set in `preloadFonts()` in [vite.config.ts](vite.config.ts).

## SEO metadata

- Each route sets its own `<title>`, meta description and canonical link with
  the `head` option. `<HeadContent />` in
  [src/routes/\_\_root.tsx](src/routes/__root.tsx) renders them. Site-wide
  defaults are in [src/lib/site.ts](src/lib/site.ts).
- Don't add `<title>` or `<meta name="description">` to `index.html`. React adds
  its own next to them instead of replacing them, so every page would have two.
- `robots.txt` and `sitemap.xml` are generated at build time by the
  `seoFiles()` plugin in [vite.config.ts](vite.config.ts).
- The Open Graph tags in `index.html` are the same on every page. Social sites
  don't run JavaScript, so they can't see per-route tags until the pages are
  prerendered.

## Environment

| Variable        | Needed at  | Purpose                                                  |
| --------------- | ---------- | -------------------------------------------------------- |
| `VITE_SITE_URL` | Build time | Public origin, used for canonical links and the sitemap. |

Example: `https://mythodex.example`. If it's unset, the build still succeeds,
but it skips the sitemap and canonical links and prints a warning. Vite writes the value into the bundle when it
builds, so it must be set **before** the build runs. Setting it at runtime does
nothing. For a local production build, copy `.env.example` to `.env.local`.

## Deploying (Cloudflare)

### Build settings

- Build command: `bun run build`
- Output directory: `dist`
- Set `VITE_SITE_URL` as a **build** variable:
  - Pages: Settings → Variables and Secrets.
  - Workers: Settings → Build → Variables and secrets.

  Redeploy after changing it.

### Routing and caching

Both files below are in `public/`, and Cloudflare reads them automatically.

- `_redirects` sends every path to `index.html` so the SPA can handle routing.
  Real files such as `robots.txt` are served first.
- `_headers` caches everything in `/assets/*` for a year with `immutable`. This
  is safe because every file there has a content hash in its name. HTML keeps
  Cloudflare's default (revalidate on each request), so deploys show up
  immediately.

### Dashboard settings

These apply when the domain is a Cloudflare zone:

- Caching → Browser Cache TTL: set to **Respect Existing Headers**. Any other
  value overrides `_headers`.
- Speed → Early Hints: **on**. Cloudflare then sends the font preloads before
  the HTML.
- Rocket Loader: **off**. It interferes with the module script.
- Don't add "Cache Everything" rules. Pages already caches static files, and
  caching HTML that way serves old pages after a deploy.

### Check a deploy

```sh
curl -sI https://<domain>/assets/<any-file> | grep -i cache-control
# public, max-age=31536000, immutable
curl -s https://<domain>/robots.txt
```

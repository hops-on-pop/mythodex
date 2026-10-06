# MythoDex

An illustrated field guide to Greek mythology: gods, Titans, heroes and
monsters, with their stories, symbols and family trees.

The site is built with [Astro](https://astro.build) as fully static output. Every page is
rendered to HTML at build time, and the browser downloads almost no
JavaScript. It's styled with Tailwind 4 and [Starwind UI](https://starwind.dev)
components, and hosted on Cloudflare. [PLAN.md](PLAN.md) covers the
architecture and data model, and [design-system.md](design-system.md) covers
the visual design.

## Setup

This project uses [Bun](https://bun.sh). Use `bun` and `bunx` rather than npm.

```sh
bun install
bun run dev
```

| Script                 | What it does                                     |
| ---------------------- | ------------------------------------------------ |
| `bun run dev`          | Start the Astro dev server                       |
| `bun run build`        | Typecheck (`astro check`), then build to `dist/` |
| `bun run preview`      | Serve the `dist/` build locally                  |
| `bun run check`        | Typecheck only                                   |
| `bun run lint`         | ESLint, including `.astro` files                 |
| `bun run format`       | Format everything with Prettier                  |
| `bun run format:check` | Report files Prettier would change               |

Lint config is in [eslint.config.js](eslint.config.js): typescript-eslint,
eslint-plugin-astro and its accessibility rules. The accessibility rules come
from `eslint-plugin-jsx-a11y-x`, a fork that supports ESLint 10. Formatting is
in [prettier.config.js](prettier.config.js): no semicolons, 80 columns, one
attribute per line, and Tailwind classes sorted (including inside Starwind's
`tv()` calls). The recommended VS Code extensions are listed in
`.vscode/extensions.json`.

## Project layout

```text
src/assets/images/        SVG stencils: meander bands and category badges
src/assets/portraits/     Portrait masters (JPEG), one per character slug
src/components/           Site components (.astro)
src/components/starwind/  Starwind UI components, added by its CLI
src/data/                 characters.ts (all content) and types.ts
src/layouts/              BaseLayout.astro: <head>, masthead, shared markup
src/lib/                  graph.ts (family relations), portraits.ts, site.ts
src/pages/                One file per route; built to static HTML
src/styles/global.css     Tailwind, brand palette and theme tokens
public/                   Copied to dist/ as-is: _headers, favicon
```

## Adding a character

1. Add the slug to `CharacterSlug` in [src/data/types.ts](src/data/types.ts).
2. Add the record, including its `body` paragraphs and `facts`, to
   [src/data/characters.ts](src/data/characters.ts). Write each relation once,
   on the character it starts from. For example, Zeus declares `parent-of`
   Athena, and Athena declares nothing back.
   [src/lib/graph.ts](src/lib/graph.ts) works out the reverse relations.
3. Add a portrait (next section). Until one exists, the card shows a placeholder
   frame.

The new page, its sitemap entry and its link preview are all generated on the
next build.

## Adding or replacing a portrait

Export a **600×900 JPEG** (2:3) named after the character's slug, for example
`nemean-lion.jpg`, and put it in `src/assets/portraits/`. That's all.

At build time Astro makes 400px and 600px versions of each portrait as AVIF and
WebP, plus a JPEG for link previews. Each file gets a content hash in its name,
so browsers can cache it indefinitely. Results are cached between builds, so
only new or changed masters are re-encoded.
[src/lib/portraits.ts](src/lib/portraits.ts) finds portraits by slug, so no
code changes are needed.

Encoding quality is set in
[src/components/Portrait.astro](src/components/Portrait.astro) (`quality={45}`).

## Components (Starwind UI)

Starwind components are copied into `src/components/starwind/` and are yours to
edit. To add one:

```sh
bunx starwind@latest add <component>
```

Starwind's CLI installs packages with npm. If it creates a `package-lock.json`,
delete it and run `bun install`.

Starwind's theme tokens (`--background`, `--primary`, `--outline` and so on)
are mapped onto the brand palette in
[src/styles/global.css](src/styles/global.css). The stylesheet path is set in
`starwind.config.json`. There is no dark mode. Inside a `.surface-parchment`
element (the character sheet) the tokens switch to light parchment values, so
components placed there pick up the right colors automatically.

## Category filter

The home page filter runs entirely in the browser and never navigates. The
choice is stored in the URL (`?category=hero`), so filtered views can be shared
and back/forward work. It's two small scripts and some CSS in
[src/pages/index.astro](src/pages/index.astro):

- A script in `<head>` reads the URL and sets `data-filter` on `<html>` before
  the page first draws, so a shared link never flashes the full grid.
- CSS hides the cards that don't match. Hidden cards' portraits are never
  downloaded.
- A second script handles clicks, back/forward, `aria-pressed` and a
  screen-reader status message.

## SVG stencils (meanders and badges)

The files in `src/assets/images/` are used as CSS masks, so only their shape
matters and they take their color from the surrounding text color. See the
comments in [src/styles/global.css](src/styles/global.css).

After exporting a new or changed SVG from Illustrator, minify it:

```sh
bunx svgo --multipass -p 1 src/assets/images/<file>.svg
```

`-p 1` rounds coordinates to one decimal place. That's invisible at the sizes
these render at, and it roughly halves the file size. Keep the badge artboards
square and close in size to the existing ones, so the seals line up when shown
at the same size.

## Fonts

Fonts are self-hosted from the installed Fontsource packages through Astro's
Fonts API, using only the Latin character set and the weights in use. Astro
also generates fallback fonts sized to match, so text doesn't shift when the
real font loads.

| Font              | Loaded                     | Notes                           |
| ----------------- | -------------------------- | ------------------------------- |
| Cinzel Decorative | 700                        | Preloaded: the masthead uses it |
| Nunito            | Variable font, all weights | Preloaded: body text            |
| Kalam             | 400, 700                   | Loads when a page uses it       |

The `fonts` list in [astro.config.mjs](astro.config.mjs) names each file
exactly. To add a weight, add a variant there pointing at the matching file in
`node_modules/@fontsource/<font>/files/`. Preloading is set by the `<Font>`
tags in [BaseLayout.astro](src/layouts/BaseLayout.astro).

## SEO metadata

- Each page passes its title, description, link-preview image and structured
  data (JSON-LD) to `BaseLayout`, which writes them into the static HTML.
  Social sites read these directly, so every character gets its own preview.
- The canonical link and `og:url` are generated from `SITE_URL` (see
  Environment). Filtered home-page views share the canonical `/`.
- `robots.txt` is built from
  [src/pages/robots.txt.ts](src/pages/robots.txt.ts). The sitemap comes from
  `@astrojs/sitemap` and leaves out the 404 page.
- [src/pages/404.astro](src/pages/404.astro) builds to `404.html` with
  `noindex`.

## Environment

| Variable   | Needed at  | Purpose                                   |
| ---------- | ---------- | ----------------------------------------- |
| `SITE_URL` | Build time | Public origin for canonical links and SEO |

Example: `https://mythodex.example`. If it's unset, the build still succeeds,
but it leaves out the canonical links, absolute preview URLs and the sitemap.
`VITE_SITE_URL`, the name from before the Astro migration, still works. For a
local production build, copy `.env.example` to `.env.local`.

## Deploying (Cloudflare)

### Build settings

- Build command: `bun run build`
- Output directory: `dist`
- Set `SITE_URL` as a **build** variable:
  - Pages: Settings → Variables and Secrets.
  - Workers: Settings → Build → Variables and secrets.

  Redeploy after changing it.

### Routing, 404s and caching

- Pages are written as `characters/zeus.html` and served at `/characters/zeus`.
  The flat form avoids Cloudflare redirecting to a trailing slash.
- There is no `_redirects` file and no SPA fallback. A URL with no matching
  file gets `404.html` with a real 404 status. Pages does this automatically
  when a top-level `404.html` exists. On Workers, set
  `not_found_handling = "404-page"` in the assets config.
- `public/_headers` caches everything in `/_astro/*` for a year with
  `immutable`. This is safe because every file there has a content hash in its
  name. HTML keeps Cloudflare's default (revalidate on each request), so
  deploys show up immediately.

### Dashboard settings

These apply when the domain is a Cloudflare zone:

- Caching → Browser Cache TTL: set to **Respect Existing Headers**. Any other
  value overrides `_headers`.
- Speed → Early Hints: **on**. Cloudflare then sends the font preloads before
  the HTML.
- Rocket Loader: **off**.
- Don't add "Cache Everything" rules. Pages already caches static files, and
  caching HTML that way serves old pages after a deploy.

### Check a deploy

```sh
curl -sI https://<domain>/_astro/<any-file> | grep -i cache-control
# public, max-age=31536000, immutable
curl -s -o /dev/null -w "%{http_code}\n" https://<domain>/characters/nobody
# 404
```

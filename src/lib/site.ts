// Site-wide metadata. The public origin is Astro's `site` (astro.config.mjs);
// pages read it as `Astro.site`.

export const SITE_NAME = "MythoDex"

export const SITE_DESCRIPTION =
  "An illustrated field guide to Greek mythology: the gods, Titans, heroes and monsters, with their stories, symbols and family trees."

/**
 * The public path for the page being built. With `build.format: "file"`,
 * Astro.url.pathname carries the output file's `.html`, but Cloudflare serves
 * every page without it — so canonical and Open Graph URLs drop it too.
 */
export function publicPath(url: URL): string {
  return url.pathname.replace(/(\/index)?\.html$/, "") || "/"
}

export const CATEGORY_ORDER = ["god", "hero", "titan", "monster"] as const

export const CATEGORY_PLURAL: Record<(typeof CATEGORY_ORDER)[number], string> =
  {
    god: "gods",
    hero: "heroes",
    titan: "titans",
    monster: "monsters",
  }

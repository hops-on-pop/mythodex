// Site-wide metadata for route `head`s. The canonical origin comes from
// VITE_SITE_URL (see .env.example) — without it, canonical links are skipped
// rather than pointing at the wrong host.

export const SITE_NAME = "MythoDex"

export const SITE_DESCRIPTION =
  "An illustrated field guide to Greek mythology: the gods, Titans, heroes and monsters, with their stories, symbols and family trees."

const SITE_URL = import.meta.env.VITE_SITE_URL?.replace(/\/+$/, "")

/** A site path as an absolute URL, or the bare path if no origin is set. */
export function absoluteUrl(pathname: string) {
  return `${SITE_URL ?? ""}${pathname}`
}

/** `links` entry for a route's canonical URL, or nothing if no origin is set. */
export function canonical(pathname: string) {
  return SITE_URL ? [{ rel: "canonical", href: `${SITE_URL}${pathname}` }] : []
}

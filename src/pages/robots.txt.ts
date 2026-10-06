import type { APIRoute } from "astro"

// A real file, so crawlers (and Lighthouse) never get HTML at /robots.txt.
// The Sitemap line needs an absolute URL, so it's only written when `site`
// is configured.
export const GET: APIRoute = ({ site }) => {
  const lines = ["User-agent: *", "Allow: /"]
  if (site)
    lines.push("", `Sitemap: ${new URL("sitemap-index.xml", site).href}`)
  return new Response(`${lines.join("\n")}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}

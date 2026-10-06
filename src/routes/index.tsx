import { createFileRoute } from "@tanstack/react-router"
import { CardPerson } from "@/components/card-person"
import { characters } from "@/data/characters"
import type { Character } from "@/data/types"
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  absoluteUrl,
  canonical,
} from "@/lib/site"
import { cn } from "@/lib/utils"
import { Link } from "@tanstack/react-router"

const CATEGORY_ORDER = ["god", "hero", "titan", "monster"] as const

type Category = (typeof CATEGORY_ORDER)[number]

interface IndexSearch {
  category?: Category
}

function isCategory(value: unknown): value is Category {
  return CATEGORY_ORDER.includes(value as Category)
}

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): IndexSearch =>
    isCategory(search.category) ? { category: search.category } : {},
  head: () => ({
    meta: [
      { title: `${SITE_NAME} · Gods, Titans, Heroes & Monsters of Greek Myth` },
      { name: "description", content: SITE_DESCRIPTION },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          description: SITE_DESCRIPTION,
          url: absoluteUrl("/"),
        },
      },
    ],
    // Filtered views are the same page re-sorted; point them all at "/".
    links: canonical("/"),
  }),
  // The landing page ships in the entry bundle instead of its own chunk. Split,
  // the browser can't request it (or the character data it pulls in) until
  // the entry has parsed and the router has matched — a whole extra round trip
  // before first paint, for code every visit to "/" needs anyway.
  codeSplitGroupings: [],
  component: RouteComponent,
})

// The first grid row — up to four across at xl — is above the fold and holds
// the LCP image, so it loads eagerly; the rest of the grid lazy-loads.
const PRIORITY_CARDS = 4

const characterList: Character[] = Object.values(characters).sort((a, b) =>
  a.name.localeCompare(b.name),
)

const categories = CATEGORY_ORDER.filter((category) =>
  characterList.some((character) => character.category === category),
)

function RouteComponent() {
  const { category: active } = Route.useSearch()

  const visible = active
    ? characterList.filter((character) => character.category === active)
    : characterList

  return (
    <>
      <main className="mx-auto w-full max-w-350 pt-10 pb-24">
        <nav
          aria-label="Filter by category"
          className="mb-10 flex flex-wrap justify-center gap-4 lg:gap-12"
        >
          {categories.map((category) => {
            const isActive = active === category
            return (
              <Link
                key={category}
                to="/"
                search={isActive ? {} : { category }}
                data-category={category}
                aria-label={
                  isActive
                    ? `Clear ${category} filter`
                    : `Filter by ${category}`
                }
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "badge size-24 md:size-28 xl:size-36 text-cat cursor-pointer transition duration-200 ease-out hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cat",
                  isActive && "scale-105",
                  active && !isActive && "opacity-35 hover:opacity-75",
                )}
              />
            )
          })}
        </nav>
        <div
          aria-hidden="true"
          className="meander meander-square meander-fade mx-auto mb-14 h-7 max-w-350 text-star-white/25"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-10 px-4">
          {visible.map((character, index) => (
            <Link
              key={character.slug}
              to="/characters/$slug"
              params={{ slug: character.slug }}
              className="block no-underline"
            >
              <CardPerson
                character={character}
                priority={index < PRIORITY_CARDS}
              />
            </Link>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="meander meander-square meander-fade mx-auto mt-14 h-7 max-w-350 text-star-white/25"
        />
      </main>
    </>
  )
}

import { createFileRoute } from "@tanstack/react-router"
import { CardPerson } from "@/components/card-person"
import { characters } from "@/data/characters"
import type { Character } from "@/data/types"
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
  // Typed search params rather than useState: a filtered grid is a shareable
  // URL and back/forward walks the filter history. An unknown `?category=`
  // drops out here, so the component never sees a value off the union.
  validateSearch: (search: Record<string, unknown>): IndexSearch =>
    isCategory(search.category) ? { category: search.category } : {},
  component: RouteComponent,
})

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
          className="mb-10 flex flex-wrap justify-center gap-4"
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
          {visible.map((character) => (
            <Link
              key={character.slug}
              to="/characters/$slug"
              params={{ slug: character.slug }}
              className="block no-underline"
            >
              <CardPerson character={character} />
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

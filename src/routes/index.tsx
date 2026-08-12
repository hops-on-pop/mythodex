import { createFileRoute } from "@tanstack/react-router"
import { CardPerson } from "@/components/card-person"
import { characters } from "@/data/characters"
import type { Character } from "@/data/types"
import { Link } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

const CATEGORY_ORDER = ["god", "hero", "titan", "monster"] as const

const characterList: Character[] = Object.values(characters).sort((a, b) =>
  a.name.localeCompare(b.name),
)

const categories = CATEGORY_ORDER.filter((category) =>
  characterList.some((character) => character.category === category),
)

function RouteComponent() {
  return (
    <>
      <main className="mx-auto w-full max-w-350 pt-10 pb-24">
        <nav className="mb-10 flex flex-wrap justify-center gap-4">
          {/* data-category sits on the button itself, which is all .badge
              needs — it reads --badge off the element, not off an ancestor.
              text-cat rather than text-cat-ink: the ink tones are pitched for
              parchment and go muddy against the night background.
              No children — the mask clips whatever is inside, and the art
              already carries the word, so the name lives on aria-label. */}
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              data-category={category}
              aria-label={`Filter by ${category}`}
              className="badge size-24 md:size-28 xl:size-36 text-cat cursor-pointer transition-transform duration-200 ease-out hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cat"
            />
          ))}
        </nav>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-10 px-4">
          {characterList.map((character) => (
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
          className="meander meander-square meander-fade mx-auto mt-14 h-7 max-w-210 text-star-white/25"
        />
      </main>
    </>
  )
}

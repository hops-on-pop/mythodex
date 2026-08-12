import { createFileRoute } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
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
        <nav className="mb-10 flex flex-wrap justify-center gap-2.5">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              data-category={category}
              className="rounded-full border border-cat px-3.5 py-1 text-[11.5px] font-extrabold tracking-[0.04em] text-cat uppercase transition-colors hover:bg-cat hover:text-bg-deep"
            >
              {category}
            </button>
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

        <section
          data-category="titan"
          className="surface-parchment mx-auto mt-6 max-w-210 overflow-hidden rounded-lg text-left"
        >
          <div aria-hidden="true" className="meander meander-t h-5 text-cat" />

          <div className="p-8">
            <p className="text-eyebrow text-muted-foreground">Detail surface</p>
            <h2 className="mt-1">Parchment scope</h2>
            <p className="mt-3 text-muted-foreground">
              Everything inside <code>.surface-parchment</code> reads ink values
              automatically — including shadcn components, which were never told
              about the palette.
            </p>

            <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3">
              {["Domain", "Symbol", "Generation"].map((label, i) => (
                <div
                  key={label}
                  className="rounded-lg border-t-[3px] border-cat bg-muted p-3"
                >
                  <p className="text-fact-label text-sm text-muted-foreground">
                    {label}
                  </p>
                  <p className="font-semibold">{["Time", "Sickle", "1"][i]}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="rounded-full bg-(image:--gradient-cta) px-5 py-2 text-sm font-extrabold text-gold-white shadow-[0_6px_18px_var(--cat-glow)]"
              >
                Read the myth
              </button>
              <Button variant="outline">shadcn outline</Button>
              <Button>shadcn default</Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

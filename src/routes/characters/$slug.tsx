import { createFileRoute, notFound } from "@tanstack/react-router"

import { CardFamily } from "@/components/card-family"
import { CardStat } from "@/components/ui/card-stat"
import { Separator } from "@/components/ui/separator"
import { characters } from "@/data/characters"
import type { CharacterSlug } from "@/data/types"
import { familyOf } from "@/lib/graph"
import { ShieldEnergyIcon, JupiterIcon } from "@hugeicons/core-free-icons"

export const Route = createFileRoute("/characters/$slug")({
  component: RouteComponent,
})

function RouteComponent() {
  const { slug } = Route.useParams() as { slug: CharacterSlug }
  const character = characters[slug]
  if (!character) throw notFound()

  const {
    name,
    epithet,
    pronunciation,
    category,
    portrait,
    domains,
    symbols,
    body,
    facts,
  } = character

  // Derived, never authored — the reverse index in lib/graph.ts is what turns
  // one-directional `parent-of` edges into parents and siblings.
  const family = familyOf(slug)

  return (
    // The gutter lives on this wrapper rather than as a margin on the sheet.
    // Two reasons: `mx-*` on a `w-full` element adds to 100% and overflows,
    // and the torn edge is a pseudo-element that bleeds ~15px past the sheet's
    // box — without real space either side it would clip on the viewport.
    <div className="px-6 md:px-10 xl:px-12">
      <main
        data-category={category}
        className="parchment-sheet surface-parchment mx-auto my-10 w-full max-w-350 px-5 py-10 md:px-8 md:py-12 xl:px-12"
      >
        <div
          aria-hidden="true"
          className="meander meander-square h-8 text-cat"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full py-8">
          {/* min-w-0 on each column — grid tracks default to min-width:auto, so
              a long name or an unbreakable link would widen the track instead
              of wrapping, and push the sheet past the viewport. */}
          {/* At md the grid is 2 up, so the name takes the whole first row —
              otherwise the cards land under it and leave a dead quadrant
              beside the portrait. At xl it's a column again. */}
          <div className="flex flex-col min-w-0 md:col-span-2 xl:col-span-1">
            {/* Which seal this is comes from data-category on <main>, so there
                is nothing to pass; text-cat-ink does the tinting. A category
                with no art yet renders nothing at all. */}
            <div
              role="img"
              aria-label={`${category} badge`}
              className="badge size-24 md:size-28 xl:size-36 text-cat-ink mb-4 mx-auto"
            />

            <h1 className="text-4xl md:text-5xl font-bold text-balance text-ink pt-12">
              {name}
            </h1>

            <p className="text-xl text-cat-ink font-bold pt-2">{epithet}</p>
            <p className="text-lg font-italic text-cat-ink pt-2">
              {pronunciation}
            </p>
          </div>
          <div className="flex flex-col min-w-0">
            {/* Fluid below its natural 300px — a fixed w-75 is wider than the
                content box on a 375px screen. */}
            <img
              src={portrait}
              alt={name}
              className="w-full max-w-75 h-112.5 object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-4 min-w-0">
            <CardStat category={category} label="Domains" icon={JupiterIcon}>
              {domains.join(", ")}
            </CardStat>
            <CardStat
              category={category}
              label="Symbols"
              icon={ShieldEnergyIcon}
            >
              {symbols.join(", ")}
            </CardStat>
            <CardFamily category={category} family={family} />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="meander meander-square h-8 text-cat"
        />
        <div className="flex flex-col gap-4 pt-8">
          <h2 className="text-2xl font-bold text-cat-ink">The Story</h2>
          <Separator />
          <p className="text-ink">{body.join("\n\n")}</p>
        </div>
        <div className="flex flex-col gap-4 pt-10 pb-8">
          <h2 className="text-2xl font-bold text-cat-ink">Did You Know?</h2>
          <Separator />
          <ul className="list-star list-outside pl-6 text-catink">
            {facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>
        <div
          aria-hidden="true"
          className="meander meander-square h-8 text-cat"
        />
      </main>
    </div>
  )
}

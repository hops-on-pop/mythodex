import { Portrait } from "@/components/portrait"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import type { Character } from "@/data/types"
import { portraitOf } from "@/lib/portraits"

// The rendered card width at each grid breakpoint in routes/index.tsx — 1, 2,
// 3, then 4 columns, less the gutters. Keep in step with that grid.
const CARD_SIZES =
  "(min-width: 1280px) 312px, (min-width: 768px) calc(33vw - 27px), (min-width: 640px) calc(50vw - 24px), calc(100vw - 32px)"

interface CardPersonProps {
  character: Character
  /** First row of the grid — see Portrait's `priority`. */
  priority?: boolean
}

export function CardPerson({ character, priority = false }: CardPersonProps) {
  const { slug, name, epithet, category } = character

  // The art lands incrementally, so a figure with no encoded portrait yet gets
  // the placeholder frame instead.
  const portrait = portraitOf(slug)

  return (
    <Card
      data-category={category}
      className="flex flex-col pt-0 shadow-[0_0_24px_3px_var(--cat-glow-rest)] transition-transform duration-300 ease-out hover:z-5 hover:scale-110 hover:animate-glow-pulse"
    >
      <div className="relative overflow-hidden">
        {portrait ? (
          <Portrait
            sources={portrait}
            sizes={CARD_SIZES}
            priority={priority}
            alt={`${name} ${epithet}`}
            className="block aspect-2/3 w-full object-cover"
          />
        ) : (
          <div
            className="flex aspect-2/3 items-center justify-center border-3 border-cat bg-(image:--gradient-portrait) p-4 text-center text-xs text-muted-foreground"
            aria-hidden="true"
          >
            {name}
          </div>
        )}
        <div className="absolute top-[5%] right-[-20%] z-10 w-3/4 rotate-40 bg-cat px-10 py-2 text-center font-bold text-ink uppercase shadow-md">
          {category}
        </div>
        <div
          aria-hidden="true"
          className="meander meander-square h-5 text-cat"
        />
      </div>

      <CardContent>
        <CardTitle>{name}</CardTitle>
        <span>{epithet}</span>
      </CardContent>
    </Card>
  )
}

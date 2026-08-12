import { useState } from "react"

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import type { Character } from "@/data/types"

interface CardPersonProps {
  character: Character
}

export function CardPerson({ character }: CardPersonProps) {
  const { name, epithet, category, portrait } = character

  // Every character carries a portrait path, but the art lands incrementally —
  // so whether the file exists is a runtime fact, not a data one. A failed load
  // drops to the placeholder frame rather than a broken-image icon.
  const [portraitFailed, setPortraitFailed] = useState(false)
  const showPortrait = Boolean(portrait) && !portraitFailed

  return (
    <Card
      data-category={category}
      className="flex flex-col pt-0 shadow-[0_0_24px_3px_var(--cat-glow-rest)] transition-transform duration-300 ease-out hover:z-5 hover:scale-110 hover:animate-glow-pulse"
    >
      <div className="relative overflow-hidden">
        {showPortrait ? (
          <img
            src={portrait}
            alt={`${name} ${epithet}`}
            width={600}
            height={900}
            onError={() => setPortraitFailed(true)}
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

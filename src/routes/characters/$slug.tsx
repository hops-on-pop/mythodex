import { createFileRoute } from "@tanstack/react-router"
import { characters } from "@/data/characters"
import { notFound } from "@tanstack/react-router"
import type { CharacterSlug } from "@/data/types"

export const Route = createFileRoute("/characters/$slug")({
  component: RouteComponent,
})

function RouteComponent() {
  const { slug } = Route.useParams() as { slug: CharacterSlug }
  const character = characters[slug]
  if (!character) throw notFound()

  return <div>Hello "/characters/{slug}"!</div>
}

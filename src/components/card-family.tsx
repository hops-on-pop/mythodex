import { Link } from "@tanstack/react-router"
import { HierarchyIcon } from "@hugeicons/core-free-icons"

import { CardStat } from "@/components/ui/card-stat"
import type { Character } from "@/data/types"
import { hasFamily, type Family } from "@/lib/graph"

/** One row — a relation label and its linked names, or nothing. */
function RelationLine({
  label,
  members,
}: {
  label: string
  members: Character[]
}) {
  if (members.length === 0) return null

  return (
    <div className="text-ink grid grid-cols-3">
      <div className="text-cat-ink col-span-1">{label}: </div>
      {/* min-w-0 so a long list of linked names wraps inside the card. Without
          it the track takes its max-content width and pushes the whole page
          wide on a phone. */}
      <div className="col-span-2 min-w-0">
        {members.map((member, index) => (
          <span key={member.slug}>
            {index > 0 && ", "}
            <Link
              to="/characters/$slug"
              params={{ slug: member.slug }}
              className="underline underline-offset-2"
            >
              {member.name}
            </Link>
          </span>
        ))}
      </div>
    </div>
  )
}

interface CardFamilyProps {
  category: Character["category"]
  family: Family
}

export function CardFamily({ category, family }: CardFamilyProps) {
  if (!hasFamily(family)) return null

  return (
    <CardStat category={category} label="Family" icon={HierarchyIcon}>
      <RelationLine label="Parents" members={family.parents} />
      <RelationLine label="Consorts" members={family.consorts} />
      <RelationLine label="Siblings" members={family.siblings} />
      <RelationLine label="Children" members={family.children} />
    </CardStat>
  )
}

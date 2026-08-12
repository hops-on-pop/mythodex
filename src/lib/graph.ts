// Derived indexes over the authored relation edges. See PLAN.md § Phase 2.
//
// Every edge in `characters.ts` is authored once, on the entity it flows *from*.
// Nothing here reads a hand-written inverse, because none exist: `child-of` is
// produced by walking `parent-of` backwards, and that is the only way it can be
// produced. Built once at module load; all lookups below are map reads.

import { characterList, characters } from "@/data/characters";
import type { Character, CharacterSlug, Relation } from "@/data/types";

type CharacterRelation = Extract<
  Relation,
  { type: "parent-of" | "consort-of" | "slew" | "transformed-into" }
>;

/** An authored edge with its implicit `from` made explicit. */
export interface Edge {
  from: CharacterSlug;
  type: Relation["type"];
  to: string;
  note?: string;
}

/** Edges whose `to` is known to be another character in this atlas. */
export interface CharacterEdge extends Edge {
  type: CharacterRelation["type"];
  to: CharacterSlug;
}

const CHARACTER_EDGE_TYPES = new Set<Relation["type"]>([
  "parent-of",
  "consort-of",
  "slew",
  "transformed-into",
]);

export const edges: Edge[] = characterList.flatMap((character) =>
  character.relations.map((relation) => ({
    from: character.slug,
    type: relation.type,
    to: relation.to,
    ...(relation.note ? { note: relation.note } : {}),
  })),
);

/**
 * `to` is only typed as a character on the variants that point at one — the
 * `wields` and `patron-of` edges carry object and place slugs, and those have
 * no entity record to resolve against yet.
 */
const characterEdges = edges.filter((edge): edge is CharacterEdge =>
  CHARACTER_EDGE_TYPES.has(edge.type),
);

function groupBy(
  list: CharacterEdge[],
  key: (edge: CharacterEdge) => CharacterSlug,
): Map<CharacterSlug, CharacterEdge[]> {
  const index = new Map<CharacterSlug, CharacterEdge[]>();
  for (const edge of list) {
    const bucket = index.get(key(edge));
    if (bucket) bucket.push(edge);
    else index.set(key(edge), [edge]);
  }
  return index;
}

const parentEdges = characterEdges.filter((edge) => edge.type === "parent-of");
const consortEdges = characterEdges.filter(
  (edge) => edge.type === "consort-of",
);

/** slug → edges pointing *at* it. The reverse index; never authored by hand. */
const byTarget = groupBy(characterEdges, (edge) => edge.to);
/** slug → edges authored *on* it. */
const bySource = groupBy(characterEdges, (edge) => edge.from);

function unique(slugs: CharacterSlug[]): CharacterSlug[] {
  return [...new Set(slugs)];
}

/** Who declared `parent-of` this figure. */
export function parentsOf(slug: CharacterSlug): CharacterSlug[] {
  return unique(
    (byTarget.get(slug) ?? [])
      .filter((edge) => edge.type === "parent-of")
      .map((edge) => edge.from),
  );
}

/** Who this figure declared `parent-of`. */
export function childrenOf(slug: CharacterSlug): CharacterSlug[] {
  return unique(
    (bySource.get(slug) ?? [])
      .filter((edge) => edge.type === "parent-of")
      .map((edge) => edge.to),
  );
}

/**
 * Explicit `consort-of` in either direction (the relation is symmetric), plus
 * anyone who co-parents a child with this figure. The second half is what
 * catches Rhea → Cronus, where only the shared children are written down.
 */
export function consortsOf(slug: CharacterSlug): CharacterSlug[] {
  const explicit = consortEdges
    .filter((edge) => edge.from === slug || edge.to === slug)
    .map((edge) => (edge.from === slug ? edge.to : edge.from));

  const own = new Set(childrenOf(slug));
  const coParents = parentEdges
    .filter((edge) => edge.from !== slug && own.has(edge.to))
    .map((edge) => edge.from);

  return unique([...explicit, ...coParents]).filter((other) => other !== slug);
}

/**
 * Anyone sharing at least one parent. Half-siblings count and are the norm
 * here — Zeus alone would break any stricter definition, and Chiron is a
 * genuine half-brother to the children of Cronus and Rhea.
 */
export function siblingsOf(slug: CharacterSlug): CharacterSlug[] {
  const parents = parentsOf(slug);
  return unique(parents.flatMap((parent) => childrenOf(parent))).filter(
    (other) => other !== slug,
  );
}

export interface Family {
  parents: Character[];
  consorts: Character[];
  siblings: Character[];
  children: Character[];
}

const resolve = (slugs: CharacterSlug[]): Character[] =>
  slugs.map((slug) => characters[slug]);

/** Everything the family panel needs, resolved to full records. */
export function familyOf(slug: CharacterSlug): Family {
  return {
    parents: resolve(parentsOf(slug)),
    consorts: resolve(consortsOf(slug)),
    siblings: resolve(siblingsOf(slug)),
    children: resolve(childrenOf(slug)),
  };
}

/** True when a figure has no family edges at all, in or out. */
export function hasFamily(family: Family): boolean {
  return (
    family.parents.length > 0 ||
    family.consorts.length > 0 ||
    family.siblings.length > 0 ||
    family.children.length > 0
  );
}

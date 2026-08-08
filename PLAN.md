# The Myth Atlas — Build Plan

Companion to [design-system.md](design-system.md), which owns all visual decisions.
This doc owns architecture, data model, and sequencing.

## Locked decisions

| Decision    | Choice                                                             |
| ----------- | ------------------------------------------------------------------ |
| Stack       | Vite + React 19 + TanStack Router (SPA, no server)                 |
| Styling     | Tailwind 4, tokens generated from `design-system.md`               |
| Content     | Hand-authored TypeScript, ~40–50 figures                           |
| Portraits   | AI-generated, added incrementally; CSS placeholder is the fallback |
| Family tree | Local per-character panel first; global genealogy as a later phase |
| Myths       | Short blurbs now, data model built to grow into long-form          |

**Known tradeoff:** a pure SPA has no SEO and no link previews. Accepted for now.
TanStack Router's prerendering, or a migration up to TanStack Start, are the exits
if this ever wants to be findable. Routes won't need rewriting either way.

---

## The central idea: this is a graph, so model it as one

This is the decision everything else leans on, so it comes first.

Two forces shape it. First, Greek genealogy is a **DAG, not a tree** — heavy
intermarriage, Zeus's affairs, contested parentage. Second, characters are only
the first entity type; objects, places, and more relation kinds are coming.

Those two forces rule out the obvious approach. Writing `parents: CharacterSlug[]`
as a field works fine for genealogy and then dies the moment you add a second
relation kind: every entity type grows a new field per relation, and you get
combinatorial field explosion. **Bake relationships in as named fields and the
schema stops scaling long before the file does.**

So relations are **typed edges, authored on the entity**:

```ts
export type CharacterSlug = "zeus" | "hera" | "athena" | /* … */;
export type ObjectSlug    = "thunderbolt" | "aegis" | /* … */;
export type PlaceSlug     = "olympus" | "underworld" | /* … */;

// `from` is implicit — it's whichever entity owns the array.
export type Relation =
  | { type: "parent-of";        to: CharacterSlug; note?: string }
  | { type: "consort-of";       to: CharacterSlug; note?: string }
  | { type: "slew";             to: CharacterSlug; note?: string }
  | { type: "wields";           to: ObjectSlug;    note?: string }
  | { type: "patron-of";        to: PlaceSlug;     note?: string }
  | { type: "transformed-into"; to: CharacterSlug; note?: string };
```

The discriminated union is doing real work: `wields` can only target an object,
`parent-of` only a character. The compiler enforces it per relation kind.

```ts
export interface Character {
  slug: CharacterSlug
  name: string
  epithet: string // "King of the Gods"
  pronunciation: string // "ZOOS" — Kalam accent font
  category: "god" | "hero" | "titan" | "monster"
  generation: number // 0 primordial, 1 titan, 2 olympian, 3 hero/demigod
  relations: Relation[]
  domains: string[]
  symbols: string[]
  romanName?: string
  blurb: string // grid card, 1–2 sentences
  body: string[] // detail page paragraphs
  portrait?: string // absent → CSS placeholder frame
  myths: MythSlug[]
}
```

### Author each edge once; derive every inverse

Authoring both ends (`Zeus.children` _and_ `Athena.parents`) guarantees desync —
at ~50 figures that's not a discipline problem, it's a matter of when. Instead
declare the inverse pairs once:

```ts
const INVERSE = {
  "parent-of": "child-of",
  slew: "slain-by",
  wields: "wielded-by",
  "patron-of": "patron",
  "consort-of": "consort-of", // symmetric
} as const
```

`lib/graph.ts` flattens every entity's `relations` into one edge list at module
load, then builds forward and reverse indexes:

- `related(slug, "child-of")` — reverse index, never authored by hand
- `siblingsOf(slug)` — shares ≥1 `parent-of` source
- `consortsOf(slug)` — co-parents of a shared child, plus explicit `consort-of`
- `ancestorsOf` / `descendantsOf` — for the global tree, cycle-guarded

**Why this pays off:** the local family panel (Phase 5) and the global genealogy
(Phase 8) both become pure functions over one authored field. No sync step, no
validation script, no possibility of Zeus claiming a child who disowns him. And
adding objects later is _a new union variant plus a new slug type_ — zero changes
to any entity already written.

Per-edge `note` also beats an entity-level field: contested parentage attaches to
the specific edge it disputes ("some traditions hold she rose from sea foam"),
which is exactly where that content belongs.

### Typo-proofing without circularity

Declaring the slug unions by hand — rather than deriving them via
`keyof typeof characters` — is deliberate. Deriving would make `Relation`
circular. With the union declared first:

```ts
export const characters: Record<CharacterSlug, Character> = {/* … */}
```

…you get both directions free: a typo in any relation target is a compile error,
and `Record<CharacterSlug, _>` makes _forgetting to write a figure_ a compile
error too. One list maintained by hand; the compiler enforces the rest.

### Why a flat file is still right

Worth stating plainly, since a graph model invites the question. At this scale
flat TypeScript beats a database or CMS on every axis that matters here: full
type safety at authoring time (a DB gives you none), zero infra in a
serverless SPA, and content that reviews as a git diff. The entire dataset at
200 entities is a few hundred KB.

The signals that would actually flip this: multiple non-technical authors, or
queries you can't express as array operations over an in-memory index. Neither
is on the horizon. The nearer concern is bundle size once prose accumulates —
solved by route-level code splitting, which TanStack Router does natively.

### Myths, shaped to grow

```ts
export interface Myth {
  slug: MythSlug
  title: string
  blurb: string // what we write now
  cast: CharacterSlug[]
  generation?: number
  body?: string[] // optional today; long-form later, no refactor
}
```

Myth pages start as connective tissue. Because `body` is optional, promoting a
myth to a full retelling later is additive — write the field, and the detail
route renders it. No migration.

---

## Phases

Phases 0–2 are strictly sequential. After that, **content writing is the real
critical path** — ~50 entries of prose will outweigh all the code here, so it
should start the moment Phase 2 lands and run continuously alongside everything.

### Phase 0 — Scaffold

Fresh Vite + React + TS project, TanStack Router installed, `src/app/` from Next
removed. Re-run `shadcn init` for Vite (`rsc: false`, CSS at `src/index.css`).
Carry over the oxlint/oxfmt configs already in the repo. Pin versions at scaffold
time rather than from this doc.

Fonts: no `next/font` here. `src/index.css` loads Cinzel Decorative, Kalam, and
Nunito via the Google Fonts `@import` that `design-system.md` specifies — one
line, no dependencies, and the font list stays in the design doc where it
belongs. The tradeoff accepted: a render-blocking third-party request and a
brief swap on cold loads (`display=swap` keeps text visible throughout).
Self-hosting is the fix if that ever shows up as a real LCP problem.

Route shape:

```
/                      hero + browse grid (filters live in search params)
/character/$slug       detail page
/myth/$slug            myth page
/genealogy             global tree (Phase 8)
```

### Phase 1 — Design tokens ✅ shipped

`src/index.css` translates `design-system.md` into three layered scopes:

| Scope                | Role                                                              |
| -------------------- | ----------------------------------------------------------------- |
| `:root`              | night sky — the default surface                                   |
| `.surface-parchment` | inverts background/foreground/muted/border for everything inside  |
| `[data-category=…]`  | rebinds `--cat` and its derived bg/border/fill/glow                |

Raw brand values live in a plain `@theme` block (`--color-bg-deep`,
`--color-parchment`, `--color-god`, …); semantic roles map through
`@theme inline`, which is what makes the scope overrides resolve at the element
rather than at `:root`. Gradients are plain `:root` vars, consumed as
`bg-(image:--gradient-title)`.

**The trap worth naming:** the four category accents drive badge, portrait border,
glow, stat-card top edge, CTA gradient, and filter chip. Do _not_ write four
variants of each component, and do not build class names by interpolation —
Tailwind can't see dynamically constructed classes and will purge them. The
accent is one contextual variable, bound by data attribute:

```tsx
<article data-category={character.category}>
```

…and consumed as `border-cat`, `text-cat-ink`, `bg-cat-bg`,
`shadow-[0_0_24px_var(--cat-glow)]`. One component, four hues,
`design-system.md`'s table stays the single source of truth.

**Named `--cat`, not `--accent`** — an earlier draft of this plan said `--accent`,
which silently collides with shadcn's own hover-surface token and breaks Button
and menu states.

**Reversed the "drop the shadcn color layer" call.** `components.json` is
`base-nova` / olive, which indeed has nothing to do with this palette — but the
fix was remapping its semantic tokens to the myth palette, not abandoning them.
Cost was ~30 lines of `:root`; the payoff is that any shadcn component dropped
inside `.surface-parchment` reads ink values with zero per-component work.
`@base-ui/react` still handles behavior-heavy primitives.

**Known contrast risk:** `--primary-foreground` is `#0b0e1a`, not the doc's
`#fff8e8` — white-gold on flat `#c9a24b` is ~1.9:1. `--color-gold-white` is for
the CTA gradient specifically, where the fill falls to ink. Don't let it leak
onto flat gold.

### Phase 2 — Data model and spine

Implement the types above. Seed **8–10 figures spanning all four categories** —
enough to exercise filters, genealogy, and myth links without committing to prose
before the rendering is proven.

Build `lib/graph.ts`: flatten all `relations` into an edge list, build forward and
inverse indexes, expose the derived lookups. Unit-test against the known-gnarly
cases — Zeus breaks naive sibling logic, and Aphrodite's two parentage traditions
exercise per-edge notes.

Include **one relation pointing at a non-character** (say, Zeus `wields`
thunderbolt) even before objects are a real entity type. It proves the union
generalizes while the cost of finding out otherwise is still near zero.

_Content writing starts here and runs in parallel from this point on._

### Phase 3 — Browse grid

Hero (gradient title, star field, divider bar) + the `auto-fill minmax(200px)`
grid. Filter chips write to **typed search params** — `?category=titan` — so
filtered views are shareable and back/forward work correctly. This is the payoff
for choosing TanStack Router; don't reimplement it with `useState`.

### Phase 4 — Character detail

The parchment card: title/eyebrow block → portrait frame → stat stack. Portrait
frame component takes `portrait?: string` and falls back to the CSS gradient
placeholder — this is what decouples the art pipeline from all code work.

### Phase 5 — Local family panel

First real use of the derived graph: parents, consorts, siblings, children as
linked chips on each detail page. Cheap, because Phase 2 already did the work.

Build this as a **generic relation panel grouped by relation type**, not a
hardcoded family widget. Same component then renders wielded objects and patron
places for free when those entity types land — the only per-type work is a
display label for each relation kind. Surface per-edge `note`s inline; contested
parentage is interesting content, not an edge case to hide.

### Phase 6 — Myths

Myth route + cast linking, and a myths section on character pages.
Bidirectional and automatic: `Character.myths` gives one direction,
a reverse index over `Myth.cast` gives the other.

### Phase 7 — Portrait integration

Once the first real images land: `<img>` swap-in, `srcset`/AVIF, aspect-ratio
locking to the 3/4 frame, lazy loading below the fold, and a blur-up or
skeleton so grid scroll doesn't jank.

Worth settling early, while generating: **portraits must share a style spec** —
same framing, palette, and lighting — or the grid will read as a collage. Lock a
prompt template on the first two or three and reuse it verbatim.

### Phase 8 — Global genealogy (showpiece)

Chaos → Primordials → Titans → Olympians → heroes as one navigable chart.

Recommendation: **custom SVG with generation-banded rows**, using the `generation`
field for the y-axis and a crossing-minimization pass for x-ordering. Not React
Flow — it's heavy, and it looks like a flowchart tool, which fights the parchment
aesthetic hard.

Plan for mobile explicitly. A 50-node DAG does not fit a phone screen; the likely
answer is that small viewports get the local family panel and a pan/zoom viewport
rather than a squeezed version of the desktop chart.

### Phase 9 — Polish

Reduced-motion support for the card lift and any tree transitions, focus states
on chips and cards, contrast audit of accent text on parchment (the gold
`#8a6413` on `#f2e8d0` pairing is the one to check first), 404 route, deploy.

---

## Deliberately excluded

- **Search.** Not selected; filter chips carry v1. Revisit past ~60 figures.
- **Long-form myths.** Data model is ready; the writing isn't the current job.
- **CMS.** Hand-authored TS is correct at this scale and gives type safety a CMS can't.

// Entity + relation types for the myth graph. See PLAN.md § "The central idea".
//
// Slug unions are declared by hand rather than derived from the data records:
// deriving them would make `Relation` circular. Declaring them first buys both
// directions — a typo in a relation target is a compile error, and
// `Record<CharacterSlug, Character>` makes a missing figure one too.

export type CharacterSlug =
  // the twelve Titans, children of Uranus and Gaia
  | "cronus"
  | "rhea"
  | "oceanus"
  | "tethys"
  | "hyperion"
  | "theia"
  | "coeus"
  | "phoebe"
  | "crius"
  | "iapetus"
  | "themis"
  | "mnemosyne"
  // the six children of Cronus and Rhea
  | "zeus"
  | "hera"
  | "poseidon"
  | "hades"
  | "demeter"
  | "hestia"
  // the younger Olympians
  | "athena"
  | "apollo"
  | "artemis"
  | "ares"
  | "aphrodite"
  | "hephaestus"
  | "hermes"
  | "dionysus"
  | "persephone"
  // monsters
  | "typhon"
  | "echidna"
  | "medusa"
  | "cerberus"
  | "hydra"
  | "chimera"
  | "sphinx"
  | "scylla"
  | "charybdis"
  | "nemean-lion"
  | "sirens"
  | "harpies"
  | "minotaur"
  | "polyphemus"
  // heroes
  | "heracles"
  | "perseus"
  | "theseus"
  | "jason"
  | "bellerophon"
  | "odysseus"
  | "achilles"
  | "aeneas"
  | "orpheus"
  | "atalanta"
  | "oedipus"
  | "cadmus"
  | "chiron"
  | "hector"
  | "daedalus";

// Objects are not a real entity type yet — no `Record<ObjectSlug, _>` exists.
// The union is here so `wields` edges can be authored and type-checked now,
// proving the relation union generalizes past characters. See PLAN.md § Phase 2.
export type ObjectSlug =
  | "thunderbolt"
  | "aegis"
  | "trident"
  | "helm-of-darkness"
  | "caduceus"
  | "thyrsus"
  | "club-of-heracles"
  | "winged-sandals"
  | "golden-fleece"
  | "lyre";

export type PlaceSlug =
  | "olympus"
  | "underworld"
  | "athens"
  | "delphi"
  | "delos"
  | "eleusis";

export type MythSlug =
  | "titanomachy"
  | "birth-of-athena"
  | "abduction-of-persephone"
  | "contest-for-athens"
  | "twelve-labours"
  | "perseus-and-medusa"
  | "theseus-and-the-minotaur"
  | "golden-fleece"
  | "trojan-war"
  | "the-odyssey"
  | "orpheus-in-the-underworld"
  | "oedipus-at-thebes";

// `from` is implicit — it's whichever entity owns the array. Author each edge
// once; `lib/graph.ts` derives every inverse (child-of, slain-by, …).
export type Relation =
  | { type: "parent-of"; to: CharacterSlug; note?: string }
  | { type: "consort-of"; to: CharacterSlug; note?: string }
  | { type: "slew"; to: CharacterSlug; note?: string }
  | { type: "wields"; to: ObjectSlug; note?: string }
  | { type: "patron-of"; to: PlaceSlug; note?: string }
  | { type: "transformed-into"; to: CharacterSlug; note?: string };

export interface Character {
  slug: CharacterSlug;
  name: string;
  epithet: string; // "King of the Gods"
  pronunciation: string; // "ZOOS" — Kalam accent font
  category: "god" | "hero" | "titan" | "monster";
  /**
   * Genealogical depth, used as the y-axis band in the global tree (Phase 8):
   * 0 primordial, 1 titan, 2 the children of Cronus, 3 the children of Zeus.
   * Note this is descent, not Olympian status — Athena and Apollo sit on the
   * Olympian council but are a generation below Zeus, and drawing them in the
   * same band would put parent and child on one row.
   */
  generation: number;
  relations: Relation[];
  domains: string[];
  symbols: string[];
  romanName?: string;
  blurb: string; // grid card, 1–2 sentences
  body: string[]; // detail page paragraphs
  /**
   * "Did You Know?" — 2–4 self-contained oddities, each one sentence or two.
   * These are the things that don't fit the narrative of `body`: etymologies,
   * cult practice, the odd survival into modern language. Each item stands
   * alone, so they can be shuffled or shown one at a time.
   */
  facts: string[];
  portrait?: string; // absent → CSS placeholder frame
  myths: MythSlug[];
}

export interface Myth {
  slug: MythSlug;
  title: string;
  blurb: string;
  cast: CharacterSlug[];
  generation?: number;
  body?: string[];
}

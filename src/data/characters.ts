import type { Character, CharacterSlug } from "@/data/types";

/**
 * 56 figures: twelve Titans, fifteen gods, fourteen monsters, fifteen heroes.
 *
 * Authoring rule: every edge is written once, on the entity it flows *from*.
 * Zeus declares `parent-of` Athena; Athena never declares `child-of`. The
 * reverse index in `lib/graph.ts` is the only thing allowed to produce inverses.
 *
 * Where traditions disagree, Aphrodite's two births, Hephaestus's fatherhood,
 * the disagreement is attached to the specific edge it disputes, via `note`.
 */

//Characters to add:
// - Arachne

export const characters: Record<CharacterSlug, Character> = {
  cronus: {
    slug: "cronus",
    name: "Cronus",
    epithet: "The Crooked-Counselled",
    pronunciation: "KROH-nus",
    category: "titan",
    generation: 1,
    relations: [
      { type: "consort-of", to: "rhea" },
      { type: "parent-of", to: "hestia" },
      { type: "parent-of", to: "demeter" },
      { type: "parent-of", to: "hera" },
      { type: "parent-of", to: "hades" },
      { type: "parent-of", to: "poseidon" },
      {
        type: "parent-of",
        to: "zeus",
        note: "The one child he failed to swallow; Rhea gave him a swaddled stone instead.",
      },
      {
        type: "parent-of",
        to: "chiron",
        note: "By the Oceanid Philyra, in the shape of a horse to hide the affair from Rhea, which is why the child came out half one.",
      },
    ],
    domains: ["Time", "Harvest", "The Fallen Age"],
    symbols: ["Sickle", "Grain", "Serpent"],
    romanName: "Saturn",
    blurb:
      "The Titan who overthrew his father and was overthrown in turn by his own son, the hinge the whole cosmogony turns on.",
    myths: ["titanomachy"],
  },

  rhea: {
    slug: "rhea",
    name: "Rhea",
    epithet: "Mother of the Gods",
    pronunciation: "REE-uh",
    category: "titan",
    generation: 1,
    relations: [
      { type: "parent-of", to: "hestia" },
      { type: "parent-of", to: "demeter" },
      { type: "parent-of", to: "hera" },
      { type: "parent-of", to: "hades" },
      { type: "parent-of", to: "poseidon" },
      { type: "parent-of", to: "zeus" },
    ],
    domains: ["Motherhood", "Generation", "Flow"],
    symbols: ["Lion", "Swaddling Stone", "Tympanum"],
    romanName: "Ops",
    blurb:
      "Titaness of motherhood, who saved her youngest son by feeding her husband a stone, and so ended the reign of the Titans.",
    myths: ["titanomachy"],
  },

  oceanus: {
    slug: "oceanus",
    name: "Oceanus",
    epithet: "The Encircling River",
    pronunciation: "oh-SEE-uh-nus",
    category: "titan",
    generation: 1,
    relations: [{ type: "consort-of", to: "tethys" }],
    domains: ["The World-River", "Fresh Water", "The Horizon"],
    symbols: ["Bull's Horns", "Serpent Tail", "Overflowing Urn"],
    romanName: "Oceanus",
    blurb:
      "The freshwater river that rings the whole earth, eldest of the Titans, and the one who refused to take a side in the war.",
    myths: [],
  },

  tethys: {
    slug: "tethys",
    name: "Tethys",
    epithet: "Mother of Rivers",
    pronunciation: "TEE-thiss",
    category: "titan",
    generation: 1,
    relations: [],
    domains: ["Fresh Water", "Nursing", "Springs and Streams"],
    symbols: ["Winged Brow", "Water Urn", "River Channels"],
    blurb:
      "Titaness of fresh water and mother of every river and spring, who raised Hera while the Titans and Olympians tore each other apart.",
    myths: [],
  },

  hyperion: {
    slug: "hyperion",
    name: "Hyperion",
    epithet: "Lord of Light",
    pronunciation: "hy-PEER-ee-un",
    category: "titan",
    generation: 1,
    relations: [{ type: "consort-of", to: "theia" }],
    domains: ["Light", "Observation", "The Ordered Heavens"],
    symbols: ["Sun Disc", "Watchtower", "Blazing Crown"],
    blurb:
      "Titan of heavenly light and father of the sun, moon, and dawn, the one who set the lights on their courses.",
    myths: [],
  },

  theia: {
    slug: "theia",
    name: "Theia",
    epithet: "The Far-Shining",
    pronunciation: "THEE-uh",
    category: "titan",
    generation: 1,
    relations: [],
    domains: ["Sight", "Radiance", "Gold and Gems"],
    symbols: ["Aureole", "Gold", "Clear Sky"],
    blurb:
      "Titaness of shining and of sight itself, the reason, to Greek thinking, that gold and silver have any glimmer at all.",
    myths: [],
  },

  coeus: {
    slug: "coeus",
    name: "Coeus",
    epithet: "Pillar of the North",
    pronunciation: "SEE-us",
    category: "titan",
    generation: 1,
    relations: [{ type: "consort-of", to: "phoebe" }],
    domains: ["Inquiry", "The Northern Axis", "Prophetic Descent"],
    symbols: ["Northern Pillar", "Celestial Axis"],
    blurb:
      "One of the four Titans who held up the sky at its corners; grandfather, through Leto, of Apollo and Artemis.",
    myths: ["titanomachy"],
  },

  phoebe: {
    slug: "phoebe",
    name: "Phoebe",
    epithet: "The Bright One",
    pronunciation: "FEE-bee",
    category: "titan",
    generation: 1,
    relations: [
      {
        type: "patron-of",
        to: "delphi",
        note: "Third holder of the oracle, after Gaia and Themis; she gave it to her grandson Apollo as a birth-gift.",
      },
    ],
    domains: ["Prophecy", "Radiance", "The Oracle"],
    symbols: ["Laurel Crown", "Oracular Tripod", "Moonlight"],
    blurb:
      "Titaness of prophetic brightness who held Delphi before Apollo did, and handed it to him rather than lose it.",
    myths: [],
  },

  crius: {
    slug: "crius",
    name: "Crius",
    epithet: "Pillar of the South",
    pronunciation: "KRY-us",
    category: "titan",
    generation: 1,
    relations: [],
    domains: ["Constellations", "The Southern Axis", "Herds"],
    symbols: ["Ram's Horns", "Southern Pillar", "Star Chart"],
    blurb:
      "The least-storied of the twelve, a corner-post of the sky whose sons mattered far more than he did.",
    myths: ["titanomachy"],
  },

  iapetus: {
    slug: "iapetus",
    name: "Iapetus",
    epithet: "Father of Mankind",
    pronunciation: "eye-AP-ih-tus",
    category: "titan",
    generation: 1,
    relations: [],
    domains: ["Mortality", "Craft", "The Western Axis"],
    symbols: ["Western Pillar", "Spear", "Clay"],
    blurb:
      "The Titan whose sons drew the line between gods and mortals, Prometheus, Atlas, and Epimetheus are all his.",
    myths: ["titanomachy"],
  },

  themis: {
    slug: "themis",
    name: "Themis",
    epithet: "Divine Law",
    pronunciation: "THEE-miss",
    category: "titan",
    generation: 1,
    relations: [
      {
        type: "consort-of",
        to: "zeus",
        note: "Mother of the Seasons and the three Fates; she sits beside his throne as counsellor.",
      },
      {
        type: "patron-of",
        to: "delphi",
        note: "Second holder of the oracle, after Gaia and before Phoebe.",
      },
      { type: "patron-of", to: "olympus" },
    ],
    domains: ["Divine Law", "Custom", "Oracles", "Assembly"],
    symbols: ["Scales", "Sword", "Oracular Tripod"],
    romanName: "Justitia",
    blurb:
      "Titaness of the way things are properly done, the one member of her generation the Olympians kept on, seated beside the throne.",
    myths: [],
  },

  mnemosyne: {
    slug: "mnemosyne",
    name: "Mnemosyne",
    epithet: "Mother of the Muses",
    pronunciation: "nee-MOSS-uh-nee",
    category: "titan",
    generation: 1,
    relations: [
      {
        type: "consort-of",
        to: "zeus",
        note: "Nine consecutive nights, and nine Muses nine months later.",
      },
    ],
    domains: ["Memory", "Poetry", "Recitation", "The Muses"],
    symbols: ["Pool of Memory", "Scroll", "Nine Flames"],
    blurb:
      "Titaness of memory, in an oral culture, the faculty that made every poem, law, and genealogy possible.",
    myths: [],
  },

  zeus: {
    slug: "zeus",
    name: "Zeus",
    epithet: "King of the Gods",
    pronunciation: "ZOOS",
    category: "god",
    generation: 2,
    relations: [
      { type: "consort-of", to: "hera" },
      { type: "wields", to: "thunderbolt" },
      { type: "patron-of", to: "olympus" },
      {
        type: "slew",
        to: "typhon",
        note: "Not cleanly, he pinned him under Mount Etna, which is still smoking.",
      },
      {
        type: "parent-of",
        to: "athena",
        note: "No mother at the birth, he swallowed the Titaness Metis, and Athena rose fully armed from his skull.",
      },
      { type: "parent-of", to: "apollo", note: "By the Titaness Leto." },
      { type: "parent-of", to: "artemis", note: "By the Titaness Leto." },
      { type: "parent-of", to: "hermes", note: "By the nymph Maia." },
      {
        type: "parent-of",
        to: "dionysus",
        note: "By the mortal princess Semele, who died before the birth; Zeus carried the child to term in his thigh.",
      },
      { type: "parent-of", to: "persephone" },
      { type: "parent-of", to: "ares" },
      {
        type: "parent-of",
        to: "aphrodite",
        note: "Homer's line, by Dione. Hesiod gives her no mother at all, see her entry.",
      },
      {
        type: "parent-of",
        to: "heracles",
        note: "By Alcmene, whom he visited in her husband's shape.",
      },
      {
        type: "parent-of",
        to: "perseus",
        note: "By Danaë, shut in a bronze chamber; he came to her as a shower of gold.",
      },
    ],
    domains: ["Sky", "Thunder", "Kingship", "Law", "Hospitality"],
    symbols: ["Thunderbolt", "Eagle", "Oak", "Aegis", "Sceptre"],
    romanName: "Jupiter",
    blurb:
      "Lord of the sky and king of Olympus, who divided the cosmos with his brothers and kept the largest share of it.",
    myths: ["titanomachy", "birth-of-athena"],
  },

  hera: {
    slug: "hera",
    name: "Hera",
    epithet: "Queen of the Gods",
    pronunciation: "HAIR-uh",
    category: "god",
    generation: 2,
    relations: [
      { type: "parent-of", to: "ares" },
      {
        type: "parent-of",
        to: "hephaestus",
        note: "Hesiod has her bear him alone, in answer to Athena's motherless birth.",
      },
    ],
    domains: ["Marriage", "Women", "Childbirth", "Sovereignty"],
    symbols: ["Peacock", "Diadem", "Pomegranate", "Cow", "Lily"],
    romanName: "Juno",
    blurb:
      "Goddess of marriage and queen of Olympus, the god most wronged by her husband, and the one who least forgets it.",
    myths: ["titanomachy"],
  },

  poseidon: {
    slug: "poseidon",
    name: "Poseidon",
    epithet: "God of the Sea",
    pronunciation: "puh-SY-dun",
    category: "god",
    generation: 2,
    relations: [
      { type: "wields", to: "trident" },
      {
        type: "parent-of",
        to: "polyphemus",
        note: "By the sea-nymph Thoosa. Blinding the son is what cost Odysseus ten years.",
      },
      {
        type: "parent-of",
        to: "theseus",
        note: "Divine paternity, shared with the mortal king Aegeus, Aethra lay with both in one night, and both claims stand.",
      },
      {
        type: "parent-of",
        to: "bellerophon",
        note: "Contested; other traditions give him to Glaucus of Corinth.",
      },
      { type: "parent-of", to: "charybdis", note: "By Gaia." },
      {
        type: "patron-of",
        to: "athens",
        note: "Contested, he offered a saltwater spring and lost the city to Athena's olive tree.",
      },
    ],
    domains: ["Sea", "Earthquakes", "Horses", "Storms"],
    symbols: ["Trident", "Horse", "Bull", "Dolphin"],
    romanName: "Neptune",
    blurb:
      "Earth-shaker and lord of the sea, who took the waters when the world was divided and never stopped resenting the split.",
    myths: ["titanomachy", "contest-for-athens"],
  },

  hades: {
    slug: "hades",
    name: "Hades",
    epithet: "Lord of the Underworld",
    pronunciation: "HAY-deez",
    category: "god",
    generation: 2,
    relations: [
      { type: "wields", to: "helm-of-darkness" },
      { type: "patron-of", to: "underworld" },
      {
        type: "consort-of",
        to: "persephone",
        note: "He carried her off with Zeus's quiet consent; Demeter's grief is what forced the terms.",
      },
    ],
    domains: ["The Underworld", "The Dead", "Hidden Wealth"],
    symbols: ["Bident", "Cerberus", "Cypress", "Helm of Darkness", "Narcissus"],
    romanName: "Pluto",
    blurb:
      "Ruler of the dead, who took the underworld by lot and rules it exactly as the terms were written, no more, no less.",
    myths: ["titanomachy", "abduction-of-persephone"],
  },

  demeter: {
    slug: "demeter",
    name: "Demeter",
    epithet: "Goddess of the Harvest",
    pronunciation: "dih-MEE-ter",
    category: "god",
    generation: 2,
    relations: [
      { type: "parent-of", to: "persephone" },
      { type: "patron-of", to: "eleusis" },
    ],
    domains: ["Grain", "Agriculture", "The Seasons", "The Mysteries"],
    symbols: ["Sheaf of Wheat", "Torch", "Poppy", "Serpent-Drawn Chariot"],
    romanName: "Ceres",
    blurb:
      "Goddess of grain and the growing year, whose grief for a stolen daughter is the reason winter exists.",
    myths: ["abduction-of-persephone"],
  },

  hestia: {
    slug: "hestia",
    name: "Hestia",
    epithet: "Goddess of the Hearth",
    pronunciation: "HESS-tee-uh",
    category: "god",
    generation: 2,
    relations: [],
    domains: ["The Hearth", "Home", "Sacred Flame", "Hospitality"],
    symbols: ["Hearth Fire", "Kettle", "Veil"],
    romanName: "Vesta",
    blurb:
      "Eldest of the Olympians and the quietest, the fire at the centre of every house, and the first portion of every sacrifice.",
    myths: ["titanomachy"],
  },

  athena: {
    slug: "athena",
    name: "Athena",
    epithet: "Goddess of Wisdom and War",
    pronunciation: "uh-THEE-nuh",
    category: "god",
    generation: 3,
    relations: [
      { type: "wields", to: "aegis" },
      {
        type: "patron-of",
        to: "athens",
        note: "Won by producing the first olive tree against Poseidon's saltwater spring.",
      },
    ],
    domains: ["Wisdom", "Strategy", "Crafts", "Civic Order"],
    symbols: ["Owl", "Aegis", "Olive Tree", "Spear", "Gorgoneion"],
    romanName: "Minerva",
    blurb:
      "Born fully armed from her father's skull; goddess of the war that is planned rather than the war that is enjoyed.",
    myths: ["birth-of-athena", "contest-for-athens"],
  },

  apollo: {
    slug: "apollo",
    name: "Apollo",
    epithet: "God of Light and Prophecy",
    pronunciation: "uh-POL-oh",
    category: "god",
    generation: 3,
    relations: [
      { type: "patron-of", to: "delphi" },
      { type: "patron-of", to: "delos", note: "His birthplace, with Artemis." },
    ],
    domains: ["Prophecy", "Music", "Healing", "Archery", "Light"],
    symbols: ["Lyre", "Laurel", "Bow", "Raven", "Tripod"],
    romanName: "Apollo",
    blurb:
      "God of prophecy, music, and healing, and of the plague-arrow, because the god who cures is the god who sends.",
    myths: [],
  },

  artemis: {
    slug: "artemis",
    name: "Artemis",
    epithet: "Goddess of the Hunt",
    pronunciation: "AR-tuh-miss",
    category: "god",
    generation: 3,
    relations: [
      { type: "patron-of", to: "delos", note: "Her birthplace, with Apollo." },
    ],
    domains: [
      "The Hunt",
      "Wilderness",
      "The Moon",
      "Young Girls",
      "Childbirth",
    ],
    symbols: ["Bow", "Deer", "Cypress", "Crescent Moon", "Hunting Hound"],
    romanName: "Diana",
    blurb:
      "Huntress of the wild places, sworn to virginity and unforgiving of anyone who intrudes on it.",
    myths: [],
  },

  ares: {
    slug: "ares",
    name: "Ares",
    epithet: "God of War",
    pronunciation: "AIR-eez",
    category: "god",
    generation: 3,
    relations: [
      {
        type: "consort-of",
        to: "aphrodite",
        note: "Caught in Hephaestus's net and displayed to the laughing gods, in the Odyssey.",
      },
    ],
    domains: ["War", "Bloodlust", "Courage", "Civil Strife"],
    symbols: ["Spear", "Helmet", "Vulture", "Dog", "Burning Torch"],
    romanName: "Mars",
    blurb:
      "The war god the Greeks openly disliked, battle as noise, panic, and slaughter, with none of the strategy.",
    myths: [],
  },

  aphrodite: {
    slug: "aphrodite",
    name: "Aphrodite",
    epithet: "Goddess of Love and Beauty",
    pronunciation: "af-roh-DY-tee",
    category: "god",
    generation: 3,
    relations: [
      {
        type: "consort-of",
        to: "ares",
        note: "The affair, not the marriage, and the one she is never sorry about.",
      },
      {
        type: "parent-of",
        to: "aeneas",
        note: "By the Trojan herdsman Anchises, the one time compulsion was worked on her rather than by her.",
      },
    ],
    domains: ["Love", "Desire", "Beauty", "The Sea", "Generation"],
    symbols: ["Dove", "Rose", "Myrtle", "Scallop Shell", "Girdle"],
    romanName: "Venus",
    blurb:
      "Goddess of desire, born either from the sea foam of a castrated sky or from an ordinary affair of Zeus, the traditions never reconciled.",
    myths: [],
  },

  hephaestus: {
    slug: "hephaestus",
    name: "Hephaestus",
    epithet: "God of the Forge",
    pronunciation: "hih-FES-tus",
    category: "god",
    generation: 3,
    relations: [
      { type: "consort-of", to: "aphrodite" },
      {
        type: "wields",
        to: "thunderbolt",
        note: "He forges them; Zeus throws them.",
      },
    ],
    domains: ["Fire", "Metalwork", "Craft", "Volcanoes"],
    symbols: ["Hammer", "Anvil", "Tongs", "Donkey"],
    romanName: "Vulcan",
    blurb:
      "The smith of Olympus, thrown off the mountain, lame ever since, and the only god whose work everyone else depends on.",
    myths: [],
  },

  hermes: {
    slug: "hermes",
    name: "Hermes",
    epithet: "Messenger of the Gods",
    pronunciation: "HER-meez",
    category: "god",
    generation: 3,
    relations: [{ type: "wields", to: "caduceus" }],
    domains: ["Travel", "Trade", "Thieves", "Boundaries", "Souls"],
    symbols: ["Caduceus", "Winged Sandals", "Broad-Brimmed Hat", "Tortoise"],
    romanName: "Mercury",
    blurb:
      "Messenger, trickster, and guide of the dead, the only god who moves freely between Olympus, earth, and the underworld.",
    myths: [],
  },

  dionysus: {
    slug: "dionysus",
    name: "Dionysus",
    epithet: "God of Wine and Revelry",
    pronunciation: "dy-uh-NY-sus",
    category: "god",
    generation: 3,
    relations: [{ type: "wields", to: "thyrsus" }],
    domains: ["Wine", "Ecstasy", "Theatre", "Madness", "Rebirth"],
    symbols: ["Thyrsus", "Grapevine", "Ivy", "Leopard", "Drinking Cup"],
    romanName: "Bacchus",
    blurb:
      "God of wine and release, born twice, half mortal, the outsider who joins the Olympians last and unsettles them most.",
    myths: [],
  },

  persephone: {
    slug: "persephone",
    name: "Persephone",
    epithet: "Queen of the Underworld",
    pronunciation: "per-SEF-uh-nee",
    category: "god",
    generation: 3,
    relations: [{ type: "patron-of", to: "underworld" }],
    domains: ["Spring Growth", "The Underworld", "Rebirth"],
    symbols: ["Pomegranate", "Torch", "Narcissus", "Sheaf of Grain"],
    romanName: "Proserpina",
    blurb:
      "Daughter of the harvest and queen of the dead, six pomegranate seeds bind her below for a third of every year.",
    myths: ["abduction-of-persephone"],
  },

  typhon: {
    slug: "typhon",
    name: "Typhon",
    epithet: "Father of Monsters",
    pronunciation: "TY-fon",
    category: "monster",
    generation: 1,
    relations: [
      { type: "consort-of", to: "echidna" },
      { type: "parent-of", to: "cerberus" },
      { type: "parent-of", to: "hydra" },
      { type: "parent-of", to: "chimera" },
      {
        type: "parent-of",
        to: "sphinx",
        note: "Apollodorus makes her his daughter; Hesiod gives her to Orthrus instead.",
      },
      { type: "parent-of", to: "nemean-lion" },
    ],
    domains: ["Storm Winds", "Volcanic Fire", "Chaos"],
    symbols: ["Hundred Serpent Heads", "Wings", "Coiled Tail", "Mount Etna"],
    blurb:
      "The last child of Gaia and the only creature that ever came close to unseating Zeus, sire of nearly every monster that follows.",
    myths: ["titanomachy"],
  },

  echidna: {
    slug: "echidna",
    name: "Echidna",
    epithet: "Mother of Monsters",
    pronunciation: "ih-KID-nuh",
    category: "monster",
    generation: 1,
    relations: [
      { type: "parent-of", to: "cerberus" },
      { type: "parent-of", to: "hydra" },
      { type: "parent-of", to: "chimera" },
      { type: "parent-of", to: "sphinx" },
      { type: "parent-of", to: "nemean-lion" },
    ],
    domains: ["Monstrous Generation", "Caves", "The Deep Places"],
    symbols: ["Serpent Coils", "Cave Mouth"],
    blurb:
      "Half beautiful woman, half speckled serpent, mate of Typhon and mother of the monsters the heroes are remembered for killing.",
    myths: [],
  },

  medusa: {
    slug: "medusa",
    name: "Medusa",
    epithet: "The Gorgon",
    pronunciation: "muh-DOO-suh",
    category: "monster",
    generation: 2,
    relations: [],
    domains: ["Petrification", "The Averting Gaze"],
    symbols: ["Serpent Hair", "Stone Stare", "Severed Head", "Gorgoneion"],
    blurb:
      "The only mortal Gorgon, punished for something done to her, and killed for a look she never chose to have.",
    myths: [],
  },

  cerberus: {
    slug: "cerberus",
    name: "Cerberus",
    epithet: "Hound of Hades",
    pronunciation: "SUR-buh-rus",
    category: "monster",
    generation: 2,
    relations: [],
    domains: ["The Gate of the Dead", "Guardianship"],
    symbols: ["Three Heads", "Serpent Tail", "Bronze Collar"],
    blurb:
      "The three-headed dog at the gate of the underworld, friendly to everyone entering, implacable to anyone trying to leave.",
    myths: [],
  },

  hydra: {
    slug: "hydra",
    name: "Hydra",
    epithet: "The Serpent of Lerna",
    pronunciation: "HY-druh",
    category: "monster",
    generation: 2,
    relations: [],
    domains: ["Regeneration", "Venom", "Swamps"],
    symbols: ["Nine Heads", "Swamp Water", "Poisoned Blood"],
    blurb:
      "Cut off one head and two grow back, the swamp serpent whose venom outlived the hero who killed it.",
    myths: [],
  },

  chimera: {
    slug: "chimera",
    name: "Chimera",
    epithet: "The Fire-Breather",
    pronunciation: "ky-MEER-uh",
    category: "monster",
    generation: 2,
    relations: [],
    domains: ["Fire", "Impossible Hybrids", "Portents"],
    symbols: ["Lion's Head", "Goat's Head", "Serpent Tail", "Flame"],
    blurb:
      "Lion in front, goat in the middle, serpent behind, and fire out of all of it, the creature whose name became the word for impossible.",
    myths: [],
  },

  sphinx: {
    slug: "sphinx",
    name: "Sphinx",
    epithet: "The Riddler of Thebes",
    pronunciation: "SFINKS",
    category: "monster",
    generation: 2,
    relations: [],
    domains: ["Riddles", "Strangulation", "Blockade"],
    symbols: ["Lion's Body", "Eagle Wings", "Woman's Face"],
    blurb:
      "A lion with a woman's face who sat on the road to Thebes asking one question and killing everyone who missed it.",
    myths: [],
  },

  scylla: {
    slug: "scylla",
    name: "Scylla",
    epithet: "Terror of the Strait",
    pronunciation: "SILL-uh",
    category: "monster",
    generation: 2,
    relations: [],
    domains: ["The Strait", "Shipwreck", "Ambush"],
    symbols: ["Six Heads", "Cliff Face", "Ring of Dogs"],
    blurb:
      "Six heads over a narrow channel, with the whirlpool Charybdis on the far side, a choice between losing six men and losing the ship.",
    myths: [],
  },

  charybdis: {
    slug: "charybdis",
    name: "Charybdis",
    epithet: "The Whirlpool",
    pronunciation: "kuh-RIB-diss",
    category: "monster",
    generation: 2,
    relations: [],
    domains: ["The Whirlpool", "The Tide", "Total Loss"],
    symbols: ["Whirlpool", "Fig Tree", "Bare Rock"],
    blurb:
      "Three times a day she swallows the sea and spits it back, the other half of the strait, and the half that takes everything.",
    myths: ["the-odyssey"],
  },

  "nemean-lion": {
    slug: "nemean-lion",
    name: "Nemean Lion",
    epithet: "The Unwoundable",
    pronunciation: "nee-MEE-un LY-un",
    category: "monster",
    generation: 2,
    relations: [],
    domains: ["Invulnerability", "The Hunt Reversed", "Nemea"],
    symbols: ["Golden Pelt", "Cave with Two Mouths", "Claws"],
    blurb:
      "A lion whose hide no blade or arrow could cut, which turned Heracles's first labour into a wrestling match.",
    myths: ["twelve-labours"],
  },

  sirens: {
    slug: "sirens",
    name: "Sirens",
    epithet: "Voices on the Rocks",
    pronunciation: "SY-runz",
    category: "monster",
    generation: 4,
    relations: [],
    domains: ["Song", "Knowledge", "Shipwreck"],
    symbols: ["Bird Body", "Woman's Face", "Lyre", "Meadow of Bones"],
    blurb:
      "Bird-bodied singers on a flowered island, surrounded by the bones of everyone who stopped to listen.",
    myths: ["the-odyssey", "golden-fleece"],
  },

  harpies: {
    slug: "harpies",
    name: "Harpies",
    epithet: "The Snatchers",
    pronunciation: "HAR-peez",
    category: "monster",
    generation: 3,
    relations: [],
    domains: ["Storm Winds", "Theft", "Punishment"],
    symbols: ["Talons", "Wings", "Fouled Table", "Sudden Gust"],
    blurb:
      "Winged snatchers who carry people off without a trace and foul whatever food they leave behind.",
    myths: ["golden-fleece"],
  },

  minotaur: {
    slug: "minotaur",
    name: "Minotaur",
    epithet: "The Bull of Minos",
    pronunciation: "MIN-uh-tor",
    category: "monster",
    generation: 3,
    relations: [],
    domains: ["The Labyrinth", "Tribute", "Shame"],
    symbols: ["Bull's Head", "Labyrinth", "Double Axe", "Thread"],
    blurb:
      "Bull-headed son of a Cretan queen, sealed in a maze and fed on Athenian children, a monster made entirely by his stepfather's dishonesty.",
    myths: [],
  },

  polyphemus: {
    slug: "polyphemus",
    name: "Polyphemus",
    epithet: "The Cyclops",
    pronunciation: "pol-ih-FEE-mus",
    category: "monster",
    generation: 3,
    relations: [],
    domains: ["Herding", "The Cave", "Brute Strength"],
    symbols: ["Single Eye", "Flock of Sheep", "Boulder Door", "Olive Stake"],
    blurb:
      "The one-eyed giant who ate his guests instead of hosting them, and whose blinding put Poseidon on Odysseus's trail for ten years.",
    myths: ["the-odyssey"],
  },

  heracles: {
    slug: "heracles",
    name: "Heracles",
    epithet: "The Twelve-Labour Man",
    pronunciation: "HAIR-uh-kleez",
    category: "hero",
    generation: 3,
    relations: [
      { type: "wields", to: "club-of-heracles" },
      {
        type: "slew",
        to: "nemean-lion",
        note: "Bare-handed, then skinned it with its own claws.",
      },
      {
        type: "slew",
        to: "hydra",
        note: "With Iolaus cauterising each stump, the labour Eurystheus refused to count.",
      },
      {
        type: "slew",
        to: "chiron",
        note: "By accident, with an arrow still wet from the Hydra, the worst thing he ever did, and to the one who taught him.",
      },
    ],
    domains: ["Strength", "Endurance", "Labour", "Apotheosis"],
    symbols: ["Lion Skin", "Olive-Wood Club", "Bow", "Twelve Labours"],
    romanName: "Hercules",
    blurb:
      "The strongest man alive, working off a crime he committed in a madness Hera sent, and the only hero who ends up a god.",
    myths: ["twelve-labours"],
  },

  perseus: {
    slug: "perseus",
    name: "Perseus",
    epithet: "Slayer of the Gorgon",
    pronunciation: "PUR-see-us",
    category: "hero",
    generation: 3,
    relations: [
      { type: "wields", to: "winged-sandals" },
      { type: "wields", to: "helm-of-darkness", note: "Borrowed from Hades." },
      {
        type: "slew",
        to: "medusa",
        note: "Looking at her reflection in a polished shield, never at her.",
      },
    ],
    domains: ["Quests", "Divine Favour", "Founding"],
    symbols: [
      "Mirrored Shield",
      "Winged Sandals",
      "Curved Sword",
      "Severed Head",
    ],
    blurb:
      "Set an impossible task by a king who wanted him gone, and equipped for it by half of Olympus.",
    myths: ["perseus-and-medusa"],
  },

  theseus: {
    slug: "theseus",
    name: "Theseus",
    epithet: "Founder-King of Athens",
    pronunciation: "THEE-see-us",
    category: "hero",
    generation: 3,
    relations: [
      {
        type: "slew",
        to: "minotaur",
        note: "In the dark at the centre of the maze, with Ariadne's thread to find the way out.",
      },
      { type: "patron-of", to: "athens" },
    ],
    domains: ["Kingship", "Civic Order", "Cunning"],
    symbols: ["Ball of Thread", "Sandals and Sword", "Black Sail", "Club"],
    blurb:
      "Athens's own hero, volunteered as tribute to the Minotaur, and came home to a father who had already jumped.",
    myths: ["theseus-and-the-minotaur"],
  },

  bellerophon: {
    slug: "bellerophon",
    name: "Bellerophon",
    epithet: "Rider of Pegasus",
    pronunciation: "buh-LAIR-uh-fon",
    category: "hero",
    generation: 3,
    relations: [
      {
        type: "slew",
        to: "chimera",
        note: "From the air, with a lead-tipped spear that melted in its throat.",
      },
    ],
    domains: ["Flight", "Monster-Slaying", "Hubris"],
    symbols: ["Golden Bridle", "Winged Horse", "Lead-Tipped Spear"],
    blurb:
      "Tamed the winged horse, killed the Chimera, and then tried to ride up to Olympus, which is where it ended.",
    myths: [],
  },

  jason: {
    slug: "jason",
    name: "Jason",
    epithet: "Captain of the Argo",
    pronunciation: "JAY-sun",
    category: "hero",
    generation: 4,
    relations: [{ type: "wields", to: "golden-fleece" }],
    domains: ["Voyaging", "Leadership", "Broken Oaths"],
    symbols: ["The Argo", "Golden Fleece", "One Sandal"],
    blurb:
      "Assembled the greatest crew in Greek myth, won the fleece with a sorceress's help, and lost everything by breaking his word to her.",
    myths: ["golden-fleece"],
  },

  odysseus: {
    slug: "odysseus",
    name: "Odysseus",
    epithet: "Man of Many Turns",
    pronunciation: "oh-DISS-ee-us",
    category: "hero",
    generation: 4,
    relations: [],
    domains: ["Cunning", "Endurance", "Homecoming", "Rhetoric"],
    symbols: ["The Great Bow", "Olive-Wood Bed", "Wooden Horse", "Raft"],
    romanName: "Ulysses",
    blurb:
      "The hero who wins by thinking, sacker of Troy by trickery, and ten years getting home for it.",
    myths: ["trojan-war", "the-odyssey"],
  },

  achilles: {
    slug: "achilles",
    name: "Achilles",
    epithet: "Best of the Achaeans",
    pronunciation: "uh-KILL-eez",
    category: "hero",
    generation: 4,
    relations: [
      {
        type: "slew",
        to: "hector",
        note: "Then dragged the body behind his chariot for twelve days, until Priam came to beg for it.",
      },
    ],
    domains: ["War", "Rage", "Glory", "Mortality"],
    symbols: ["Ash Spear", "Divine Armour", "Heel", "Myrmidon Shield"],
    blurb:
      "Offered a long quiet life or a short famous one, he took the short one, and the Iliad is about the week he regretted it.",
    myths: ["trojan-war"],
  },

  aeneas: {
    slug: "aeneas",
    name: "Aeneas",
    epithet: "The Exile of Troy",
    pronunciation: "ih-NEE-us",
    category: "hero",
    generation: 4,
    relations: [],
    domains: ["Duty", "Exile", "Founding", "Piety"],
    symbols: ["Household Gods", "His Father on His Back", "Golden Bough"],
    romanName: "Aeneas",
    blurb:
      "Walked out of burning Troy with his father on his back and his gods under his arm, and founded the line that became Rome.",
    myths: ["trojan-war"],
  },

  orpheus: {
    slug: "orpheus",
    name: "Orpheus",
    epithet: "The Singer",
    pronunciation: "OR-fee-us",
    category: "hero",
    generation: 4,
    relations: [{ type: "wields", to: "lyre" }],
    domains: ["Music", "Grief", "The Mysteries"],
    symbols: ["Lyre", "Laurel", "Charmed Beasts", "Backward Glance"],
    blurb:
      "Sang so well that stones followed him and the dead stood still, and lost his wife anyway, over one look.",
    myths: ["orpheus-in-the-underworld", "golden-fleece"],
  },

  atalanta: {
    slug: "atalanta",
    name: "Atalanta",
    epithet: "The Swift-Footed",
    pronunciation: "at-uh-LAN-tuh",
    category: "hero",
    generation: 4,
    relations: [],
    domains: ["The Hunt", "Speed", "Refusal"],
    symbols: ["Bow", "Golden Apples", "Boar's Hide", "She-Bear"],
    blurb:
      "Exposed at birth for being a girl, raised by a bear, and the fastest runner alive, beaten only by a trick.",
    myths: [],
  },

  oedipus: {
    slug: "oedipus",
    name: "Oedipus",
    epithet: "Solver of the Riddle",
    pronunciation: "ED-ih-pus",
    category: "hero",
    generation: 4,
    relations: [
      {
        type: "slew",
        to: "sphinx",
        note: "Not by hand, she threw herself from the rock when he answered.",
      },
    ],
    domains: ["Riddles", "Fate", "Blindness and Sight"],
    symbols: ["Swollen Feet", "Crossroads", "Riddle", "Blinding Pin"],
    blurb:
      "Answered the riddle no one else could and walked straight into the one he was living in.",
    myths: ["oedipus-at-thebes"],
  },

  cadmus: {
    slug: "cadmus",
    name: "Cadmus",
    epithet: "Founder of Thebes",
    pronunciation: "KAD-mus",
    category: "hero",
    generation: 4,
    relations: [],
    domains: ["Founding", "Writing", "Cursed Lines"],
    symbols: ["Dragon's Teeth", "Sown Men", "Alphabet", "Serpent"],
    blurb:
      "Sent to find a stolen sister, he founded Thebes instead, and sowed a dragon's teeth to raise its first citizens.",
    myths: [],
  },

  chiron: {
    slug: "chiron",
    name: "Chiron",
    epithet: "Teacher of Heroes",
    pronunciation: "KY-ron",
    category: "hero",
    generation: 2,
    relations: [],
    domains: ["Medicine", "Tutelage", "Astronomy", "Music"],
    symbols: ["Bow", "Herbs", "Lyre", "Centaur's Mantle"],
    blurb:
      "The one civilised centaur, immortal son of Cronus, physician, and tutor to half the heroes in this atlas.",
    myths: ["twelve-labours", "golden-fleece"],
  },

  hector: {
    slug: "hector",
    name: "Hector",
    epithet: "Tamer of Horses",
    pronunciation: "HEK-tor",
    category: "hero",
    generation: 4,
    relations: [],
    domains: ["Defence", "Duty", "The City"],
    symbols: ["Plumed Helmet", "Great Shield", "City Wall", "Chariot"],
    blurb:
      "Troy's first defender, fighting a war he never wanted for a brother's mistake, and the only figure in the Iliad with a home worth losing.",
    myths: ["trojan-war"],
  },

  daedalus: {
    slug: "daedalus",
    name: "Daedalus",
    epithet: "Maker of the Labyrinth",
    pronunciation: "DED-uh-lus",
    category: "hero",
    generation: 4,
    relations: [],
    domains: ["Invention", "Architecture", "Craft", "Escape"],
    symbols: ["Wax Wings", "Labyrinth", "Plumb Line", "Saw"],
    blurb:
      "The engineer who built the maze, gave away the trick for solving it, and lost his son escaping the consequences.",
    myths: ["theseus-and-the-minotaur"],
  },
};

export const characterList: Character[] = Object.values(characters);

/**
 * Narrows a URL param to a known slug. `Object.hasOwn` rather than `in` or a
 * truthy lookup, so "constructor" and friends from Object.prototype don't pass.
 */
export function isCharacterSlug(slug: string): slug is CharacterSlug {
  return Object.hasOwn(characters, slug);
}

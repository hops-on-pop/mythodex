import type { Character, CharacterSlug } from "@/data/types";

/**
 * 56 figures: twelve Titans, fifteen gods, fourteen monsters, fifteen heroes.
 *
 * Authoring rule: every edge is written once, on the entity it flows *from*.
 * Zeus declares `parent-of` Athena; Athena never declares `child-of`. The
 * reverse index in `lib/graph.ts` is the only thing allowed to produce inverses.
 *
 * Where traditions disagree — Aphrodite's two births, Hephaestus's fatherhood —
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
        note: "By the Oceanid Philyra, in the shape of a horse to hide the affair from Rhea — which is why the child came out half one.",
      },
    ],
    domains: ["Time", "Harvest", "The fallen age"],
    symbols: ["Sickle", "Grain", "Serpent"],
    romanName: "Saturn",
    blurb:
      "The Titan who overthrew his father and was overthrown in turn by his own son — the hinge the whole cosmogony turns on.",
    body: [
      "Cronus was the youngest of the twelve Titans and the one bold enough to act when Gaia asked which of her children would move against Uranus. He struck with an adamantine sickle, took the sky's throne, and ruled over what later poets remembered, uneasily, as a golden age.",
      "He also inherited his father's fear. Warned that a child of his would unseat him, he swallowed each one at birth, until Rhea hid the sixth away on Crete. That child was Zeus, and the prophecy kept its appointment.",
    ],
    portrait: "/people/cronus.jpg",
    facts: [
      "The Romans folded him into Saturn, and Saturnalia — the December festival where slaves were served by their masters and normal order was suspended — was a yearly rehearsal of his golden age.",
      "The stone Rhea fed him was said to have been set up at Delphi as the omphalos, the navel of the world. Pausanias reports it was still there in the second century AD, anointed with oil daily.",
      "He is constantly confused with Chronos, the personification of time, on the strength of a similar-sounding name. The two are unrelated in Greek, but the mix-up is why Father Time carries a harvest scythe.",
    ],
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
    symbols: ["Lion", "Swaddling stone", "Tympanum"],
    romanName: "Ops",
    blurb:
      "Titaness of motherhood, who saved her youngest son by feeding her husband a stone — and so ended the reign of the Titans.",
    body: [
      "Rhea bore six children to Cronus and watched him swallow five of them whole. With the sixth she went to Gaia for counsel, gave birth in secret in a Cretan cave, and handed her husband a stone wrapped in swaddling bands.",
      "The deception is the whole point of her: the Olympian order exists because a mother refused the arrangement she was handed. She appears rarely afterward, but every Olympian in this atlas traces back through her.",
    ],
    portrait: "/people/rhea.jpg",
    facts: [
      "The Kouretes, armed attendants who danced around the infant Zeus clashing spears on shields, were there to drown out his crying so Cronus would not hear it.",
      "By the classical period she had merged almost completely with the Anatolian mother goddess Cybele — lions, drums, and ecstatic rites all arrive in her worship from the east.",
      "Ancient sources cannot agree on which Cretan cave she gave birth in. Mount Ida and Mount Dikte both claimed it, and both did steady business in pilgrims.",
    ],
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
    domains: ["The world-river", "Fresh water", "The horizon"],
    symbols: ["Bull's horns", "Serpent tail", "Overflowing urn"],
    romanName: "Oceanus",
    blurb:
      "The freshwater river that rings the whole earth — eldest of the Titans, and the one who refused to take a side in the war.",
    body: [
      "Before the ocean was a body of water it was a river, running in a circle around the rim of the world, and Oceanus was both. Every river, spring, and well is his child by Tethys — three thousand sons and three thousand daughters, in Hesiod's count.",
      "When Cronus moved against Uranus, Oceanus alone declined to join, and when the Olympians moved against Cronus he stayed out of that too. It cost him nothing: the world's water kept flowing under every regime, and he is the one Titan never punished.",
    ],
    portrait: "/people/oceanus.jpg",
    facts: [
      "In Iliad 14 Hera calls him the origin of the gods, a cosmology in which everything begins in water — closer to Babylonian and Egyptian creation accounts than to Hesiod's.",
      "Greek maps kept his shape for centuries: a disc of land with a circular river around the rim. The word ocean is his name, still describing a thing the Greeks would not have recognised.",
    ],
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
    domains: ["Fresh water", "Nursing", "Springs and streams"],
    symbols: ["Winged brow", "Water urn", "River channels"],
    blurb:
      "Titaness of fresh water and mother of every river and spring, who raised Hera while the Titans and Olympians tore each other apart.",
    body: [
      "Tethys is the source that Oceanus distributes: the nurse of the world's water, and by him the mother of the rivers and the three thousand Oceanid nymphs. Cults imagined her feeding the streams from beneath the earth.",
      "In the Iliad, Hera says she was fostered by Tethys and Oceanus during the war — the Titaness raising the future queen of the gods who would depose her generation. She is also blamed for one piece of cosmic spite: at Hera's request she forbade the Great Bear to bathe in her waters, which is why that constellation never sets.",
    ],
    portrait: "/people/tethys.jpg",
    facts: [
      "Geologists named the vanished sea between the ancient continents of Laurasia and Gondwana the Tethys Ocean after her. The Mediterranean is what is left of it.",
      "She was credited with three thousand river sons and three thousand Oceanid daughters. Hesiod admits outright that no mortal could name them all and lists about forty.",
      "Almost nothing was ever written about her in her own right — she has no myth of her own, no cult of consequence, and appears mostly as one half of a pair.",
    ],
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
    domains: ["Light", "Observation", "The ordered heavens"],
    symbols: ["Sun disc", "Watchtower", "Blazing crown"],
    blurb:
      "Titan of heavenly light and father of the sun, moon, and dawn — the one who set the lights on their courses.",
    body: [
      "His name means the one who goes above, and his portion is light itself rather than any single lamp. By his sister Theia he fathered Helios the sun, Selene the moon, and Eos the dawn, which makes him responsible for the entire visible sky.",
      "The Greeks associated him with watching as much as shining — his children see everything that happens by day, and Helios is the witness other gods go to when they need to know who did what. Homer sometimes uses Hyperion as another name for the sun outright, collapsing father into son.",
    ],
    portrait: "/people/hyperion.jpg",
    facts: [
      "Saturn's moon Hyperion is the largest known irregularly shaped body in the solar system and tumbles chaotically, with a rotation nobody can predict more than a few months out.",
      "Keats spent two attempts on an epic about him and abandoned both. The unfinished Hyperion is one of the great fragments in English poetry.",
      "Homer uses Hyperion as a straight epithet for the sun, so in places it is genuinely unclear whether the text means the father or the son.",
    ],
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
    domains: ["Sight", "Radiance", "Gold and gems"],
    symbols: ["Aureole", "Gold", "Clear sky"],
    blurb:
      "Titaness of shining and of sight itself — the reason, to Greek thinking, that gold and silver have any glimmer at all.",
    body: [
      "Theia's domain is the quality of brightness, not its source: Pindar credits her with the value people place on gold, because she is what makes it gleam. The Greeks also believed sight worked by light streaming out of the eyes, which put vision under her too.",
      "By Hyperion she bore the sun, the moon, and the dawn. She is one of the least storied Titans and one of the most structurally important — remove her and the sky has no lights in it.",
    ],
    portrait: "/people/theia.jpg",
    facts: [
      "Planetary scientists named the Mars-sized body that is thought to have struck the early Earth and thrown off the Moon after her — the mother of the moon, once again.",
      "Pindar addresses her as the reason people prize gold, which makes her the deity of value rather than of the metal.",
    ],
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
    domains: ["Inquiry", "The northern axis", "Prophetic descent"],
    symbols: ["Northern pillar", "Celestial axis"],
    blurb:
      "One of the four Titans who held up the sky at its corners; grandfather, through Leto, of Apollo and Artemis.",
    body: [
      "Coeus held the northern pillar of heaven, one of four brothers pinning the sky at its corners while their father was held down for Cronus's sickle. His name is tied to questioning and to the axis the heavens turn around.",
      "His daughters by Phoebe are the more famous line: Leto, who bore Apollo and Artemis to Zeus, and Asteria, who threw herself into the sea to become the island of Delos where those twins were born. After the war he went into Tartarus with his brothers.",
    ],
    portrait: "/people/coeus.jpg",
    facts: [
      "The Romans called him Polus, the pole — the axis the sky turns on, which is about as literal as a translation gets.",
      "His name is generally tied to the verb for asking or questioning, making him a Titan of inquiry with not one recorded thing to say.",
    ],
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
    domains: ["Prophecy", "Radiance", "The oracle"],
    symbols: ["Laurel crown", "Oracular tripod", "Moonlight"],
    blurb:
      "Titaness of prophetic brightness who held Delphi before Apollo did — and handed it to him rather than lose it.",
    body: [
      "Phoebe is the third owner of the Delphic oracle in Aeschylus's succession: Gaia to Themis to Phoebe to Apollo. Uniquely in this mythology, the transfer is peaceful — she gives it to her grandson as a birthday present, and he takes the name Phoebus from her.",
      "By Coeus she bore Leto and Asteria, which makes her grandmother to Apollo and Artemis on one side and to Hecate on the other. Her prophetic streak runs down the whole line.",
    ],
    portrait: "/people/phoebe.jpg",
    facts: [
      "Saturn's moon Phoebe orbits backwards relative to the planet's other moons, which is the giveaway that it was captured rather than formed alongside them.",
      "Apollo takes the epithet Phoebus directly from her, and poets return the favour by calling Artemis Phoebe — a grandmother's name used for both twins.",
      "Aeschylus's peaceful handover of Delphi is almost certainly a piece of political smoothing. The older story, that Apollo took the oracle by killing its guardian serpent, was still being told alongside it.",
    ],
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
    domains: ["Constellations", "The southern axis", "Herds"],
    symbols: ["Ram's horns", "Southern pillar", "Star chart"],
    blurb:
      "The least-storied of the twelve — a corner-post of the sky whose sons mattered far more than he did.",
    body: [
      "Crius held the southern pillar of heaven and almost nothing else is told of him directly; his name means the ram, and later writers linked him to the constellation and to the turn of the seasons.",
      "He is in the record mostly as a father. By Eurybia he sired Astraeus, who fathered the winds and the stars; Pallas, whose children are Victory, Strength, Force, and Rivalry; and Perses, father of Hecate. Every one of those descendants outranks him in the stories.",
    ],
    portrait: "/people/crius.jpg",
    facts: [
      "He has no surviving myth of his own, no cult, and no temple. Everything recorded about him is a genealogy.",
      "His name means ram, which later writers connected to the constellation Aries and the spring point where the sun once crossed the celestial equator.",
    ],
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
    domains: ["Mortality", "Craft", "The western axis"],
    symbols: ["Western pillar", "Spear", "Clay"],
    blurb:
      "The Titan whose sons drew the line between gods and mortals — Prometheus, Atlas, and Epimetheus are all his.",
    body: [
      "Iapetus held the western pillar and, with his brothers, pinned the sky while Cronus struck. His significance is almost entirely in his children by the Oceanid Clymene, who between them define the human condition.",
      "Prometheus steals fire and is chained to a rock; Atlas is sentenced to hold up the heavens; Epimetheus accepts Pandora and lets loose everything in her jar; Menoetius is blasted into Erebus for sheer arrogance. The Greeks took his name as a byword for mortal shortsightedness, and some traditions make him the direct ancestor of the human race.",
    ],
    portrait: "/people/iapetus.jpg",
    facts: [
      "Saturn's moon Iapetus has one hemisphere as dark as asphalt and one as bright as snow — an oddity noticed in 1671, when Cassini could only see it on one side of its orbit.",
      "Some scholars have compared his name to Japheth, one of Noah's sons, on the grounds that both are the ancestor of a branch of humanity. The link is old and unproven.",
      "Greek writers used his name as shorthand for the kind of foolishness that gets you punished — calling someone a son of Iapetus was an insult.",
    ],
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
    domains: ["Divine law", "Custom", "Oracles", "Assembly"],
    symbols: ["Scales", "Sword", "Oracular tripod"],
    romanName: "Justitia",
    blurb:
      "Titaness of the way things are properly done — the one member of her generation the Olympians kept on, seated beside the throne.",
    body: [
      "Themis is not law as legislation but law as the order underneath things: the right way to hold an assembly, treat a guest, or approach a god. She held Delphi after Gaia and before Phoebe, and she convenes the divine council in Homer.",
      "By Zeus she bore the Horae — Good Order, Justice, and Peace — and, in Hesiod, the three Moirai who allot every mortal life. She also carried the prophecy that the son of Thetis would surpass his father, which is the warning that kept Zeus away from Thetis and sent her to a mortal instead, and so set up the Trojan War.",
    ],
    portrait: "/people/themis.jpg",
    facts: [
      "The blindfold on modern statues of Justice is a Renaissance addition. Themis and her Roman counterpart were shown clear-eyed: the point was seeing correctly, not impartially.",
      "In Homer the word themis is a common noun before it is a name — the right way of doing a thing. The goddess is that noun grown a personality.",
      "In Aeschylus she is identified outright with Gaia, which would make the first two owners of the Delphic oracle the same deity under two names.",
    ],
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
    symbols: ["Pool of memory", "Scroll", "Nine flames"],
    blurb:
      "Titaness of memory — in an oral culture, the faculty that made every poem, law, and genealogy possible.",
    body: [
      "Before writing, memory was not nostalgia but infrastructure: the entire inheritance of a people held in trained heads. Mnemosyne is that faculty deified, and the nine Muses she bore to Zeus are the reason a poet can recite an epic he never wrote down.",
      "The underworld had two springs in the mystery traditions — Lethe, which erases you, and Mnemosyne, which lets you keep yourself. Initiates were coached on which one to drink from, which is as high a stake as any Titan holds.",
    ],
    portrait: "/people/mnemosyne.jpg",
    facts: [
      "Mnemonic, amnesia, and amnesty are all built on her name — the last one literally a decision not to remember.",
      "Thin gold leaves buried with initiates of the Orphic mysteries carry instructions for the afterlife: avoid the spring by the white cypress, ask for the cold water flowing from the lake of Memory.",
      "Poets do not say they invented anything. They ask the Muses, her daughters, to remember on their behalf — composition described as recall.",
    ],
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
        note: "Not cleanly — he pinned him under Mount Etna, which is still smoking.",
      },
      {
        type: "parent-of",
        to: "athena",
        note: "No mother at the birth — he swallowed the Titaness Metis, and Athena rose fully armed from his skull.",
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
        note: "Homer's line, by Dione. Hesiod gives her no mother at all — see her entry.",
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
    body: [
      "Zeus was the child Cronus never swallowed. Raised in secret on Crete, he returned to free his siblings, led the ten-year war against the Titans, and drew the sky as his portion when the three brothers cast lots for the world.",
      "His authority is less about strength than about the oath: he guards guest-right, suppliants, and sworn agreements, and the thunderbolt is the sanction behind them. His appetites are just as central to the mythology — a large fraction of this atlas is descended from him, and the resentment of that runs through nearly every story Hera appears in.",
    ],
    portrait: "/people/zeus.jpg",
    facts: [
      "His name descends from the Proto-Indo-European sky father, and the same root gives Latin Jupiter, Sanskrit Dyaus Pita, and the ordinary word deus. It is one of the best-attested words in the language family.",
      "The forty-foot ivory and gold statue of him at Olympia was one of the Seven Wonders. The sculptor Phidias reportedly asked him for a sign of approval and got a thunderbolt through the floor.",
      "Cretans claimed to have his tomb, which struck the rest of the Greek world as blasphemy — an immortal god cannot have one — and gave rise to the proverb that all Cretans are liars.",
    ],
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
      "Goddess of marriage and queen of Olympus — the god most wronged by her husband, and the one who least forgets it.",
    body: [
      "Hera presides over marriage and legitimate rule, which makes her position genuinely impossible: the institution she guards is violated constantly by the god she is married to. Her mythology is the working out of that contradiction.",
      "She is rarely the aggressor against Zeus directly. Her anger lands instead on his lovers and their children — Leto hounded across the earth, Heracles set impossible labours, Semele tricked into asking to see her lover unveiled. Read straight, she is vindictive; read at all closely, she is the only Olympian holding anyone to the terms.",
    ],
    portrait: "/people/hera.jpg",
    facts: [
      "The Heraion on Samos was among the first monumental temples in Greece, built to her before anyone had built anything on that scale to Zeus.",
      "The eyes in a peacock's tail are hers. When her hundred-eyed watchman Argus was killed, she moved the eyes onto the bird.",
      "June is named for her Roman counterpart Juno, which is why it has been the marriage month for two thousand years.",
    ],
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
        note: "Divine paternity, shared with the mortal king Aegeus — Aethra lay with both in one night, and both claims stand.",
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
        note: "Contested — he offered a saltwater spring and lost the city to Athena's olive tree.",
      },
    ],
    domains: ["Sea", "Earthquakes", "Horses", "Storms"],
    symbols: ["Trident", "Horse", "Bull", "Dolphin"],
    romanName: "Neptune",
    blurb:
      "Earth-shaker and lord of the sea, who took the waters when the world was divided and never stopped resenting the split.",
    body: [
      "Poseidon drew the sea in the lots cast between the three brothers, and the ocean's temperament is his: calm to placid one hour, ruinous the next. He is also the earth-shaker, which in an earthquake country made him a god you appeased rather than admired.",
      "He competes and he holds grudges. He lost Athens to Athena and Argos to Hera, and when Odysseus blinded his son Polyphemus he kept the man off his own island for ten years. Horses are his too — he struck a rock and the first one sprang out.",
    ],
    portrait: "/people/poseidon.jpg",
    facts: [
      "Linear B tablets from Bronze Age Pylos record more offerings to Poseidon than to Zeus. Before the Olympian order settled, he appears to have been the senior god.",
      "Worshippers drowned horses in springs and the sea for him — one of the few Greek sacrifices that was not eaten afterwards.",
      "In one version he is not swallowed with his siblings at all: Rhea hid him among a flock of lambs and told Cronus she had given birth to a foal.",
    ],
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
    domains: ["The Underworld", "The dead", "Hidden wealth"],
    symbols: ["Bident", "Cerberus", "Cypress", "Helm of Darkness", "Narcissus"],
    romanName: "Pluto",
    blurb:
      "Ruler of the dead, who took the underworld by lot and rules it exactly as the terms were written — no more, no less.",
    body: [
      "Hades is not a devil and the underworld is not a hell. He drew the third portion when the brothers divided the cosmos, and he administers it: implacable, literal, and almost never leaving. The Greeks preferred not to say his name at all, calling him Plouton, the wealthy one, for the seeds and metals that come out of the ground.",
      "He appears in remarkably few myths, and almost all of them are about someone trying to get something back out of his kingdom. He grants the request roughly twice, both times with a condition, and both times the condition is broken.",
    ],
    portrait: "/people/hades.jpg",
    facts: [
      "The name is usually read as the unseen one. It belongs to the god, not the place — calling the underworld Hades is a later shorthand.",
      "Greeks avoided saying it, preferring Plouton, the rich one, on the reasoning that a god of the dead who hears his name might look up. That euphemism is the root inside plutocracy.",
      "He has effectively no temples. Sacrifices to him were made at night, with black animals, and the blood poured into a pit rather than onto an altar.",
    ],
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
    domains: ["Grain", "Agriculture", "The seasons", "The Mysteries"],
    symbols: ["Sheaf of wheat", "Torch", "Poppy", "Serpent-drawn chariot"],
    romanName: "Ceres",
    blurb:
      "Goddess of grain and the growing year, whose grief for a stolen daughter is the reason winter exists.",
    body: [
      "Demeter gave agriculture to mortals and holds the whole cultivated world in her keeping. When Hades took Persephone, she searched the earth with torches, refused to let a single seed rise, and brought humanity to the edge of starvation — which is what finally moved Olympus to negotiate.",
      "The settlement returns her daughter for part of the year and keeps her below for the rest, and the earth answers accordingly. At Eleusis she left something else behind: initiation rites promising the dead a better portion, kept secret so successfully that we still don't know what happened inside.",
    ],
    portrait: "/people/demeter.jpg",
    facts: [
      "Revealing what happened at the Eleusinian Mysteries carried the death penalty. Alcibiades was condemned in absentia for performing them at a party, and in a thousand years of initiates nobody wrote down the secret.",
      "Initiates broke their fast with kykeon — barley, water, and pennyroyal. Several modern scholars have wondered aloud about ergot in the barley.",
      "Cereal comes from Ceres, her Roman name, by way of the grain itself.",
    ],
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
    domains: ["The hearth", "Home", "Sacred flame", "Hospitality"],
    symbols: ["Hearth fire", "Kettle", "Veil"],
    romanName: "Vesta",
    blurb:
      "Eldest of the Olympians and the quietest — the fire at the centre of every house, and the first portion of every sacrifice.",
    body: [
      "Hestia was the first child Cronus swallowed and the last he brought back up, which makes her both the eldest and the youngest of her siblings. She swore off marriage, refused both Poseidon and Apollo, and took the hearth as her portion instead.",
      "She has almost no myths, and that is the point: she does not leave. Every household fire and every civic hearth is hers, she takes the first and last offering at any sacrifice, and in some tellings she gives up her Olympian seat to Dionysus rather than argue about it.",
    ],
    portrait: "/people/hestia.jpg",
    facts: [
      "She received the first and last libation at every feast, which produced the proverb start from Hestia — begin at the beginning.",
      "Greek colonists carried fire from their mother city's public hearth to light the new one, making her the physical link between a city and its founders.",
      "Rome took the practice literally: the Vestal Virgins tended a flame that was not allowed to go out, and letting it die was punished as a state emergency.",
    ],
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
    domains: ["Wisdom", "Strategy", "Crafts", "Civic order"],
    symbols: ["Owl", "Aegis", "Olive tree", "Spear", "Gorgoneion"],
    romanName: "Minerva",
    blurb:
      "Born fully armed from her father's skull; goddess of the war that is planned rather than the war that is enjoyed.",
    body: [
      "Zeus swallowed the Titaness Metis to forestall a prophecy, and some months later a splitting headache produced Athena, grown and armoured. She is her father's favourite and the only god permitted to handle the aegis and the thunderbolt.",
      "The line between her and Ares is the line between strategy and slaughter. She backs the clever survivor — Odysseus, Perseus, Heracles — and where Ares gives battle its noise, she gives it its plan. Off the field she owns weaving, pottery, shipbuilding, and the olive: the crafts that hold a city together.",
    ],
    portrait: "/people/athena.jpg",
    facts: [
      "The Parthenon is named for her title Parthenos, the maiden. Every four years Athens wove her a new robe and carried it to the Acropolis on a ship-shaped cart.",
      "Athenian silver coins carried her owl, and were so widely trusted across the Mediterranean that they were simply called owls. Bringing owls to Athens is the older version of coals to Newcastle.",
      "She and the city share a name, and no ancient source can say which came first.",
    ],
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
      "God of prophecy, music, and healing — and of the plague-arrow, because the god who cures is the god who sends.",
    body: [
      "Born on Delos alongside his twin Artemis, Apollo took Delphi by killing the serpent Python that held it, and the oracle there spoke for him for the next thousand years. Its two maxims — know thyself, nothing in excess — are as close as Greek religion comes to a creed.",
      "He is the most civilised Olympian and among the most dangerous. The same bow that opens the Iliad by raining plague on the Greek camp belongs to the god of healing, and his pursuits end badly with grim regularity: Daphne becomes a laurel, Cassandra is given true prophecy and the curse of never being believed.",
    ],
    portrait: "/people/apollo.jpg",
    facts: [
      "He is the one major Greek god the Romans did not rename. Apollo is Apollo in both languages.",
      "The Pythia delivered her prophecies from a tripod over a chasm. Geologists surveying the site in the 1990s found faults releasing ethylene, a sweet-smelling gas that produces trance states.",
      "NASA named the moon programme after him because the image of the god riding his chariot across the sky suited a journey, which makes him the only Olympian with a landing site.",
    ],
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
      "The hunt",
      "Wilderness",
      "The moon",
      "Young girls",
      "Childbirth",
    ],
    symbols: ["Bow", "Deer", "Cypress", "Crescent moon", "Hunting hound"],
    romanName: "Diana",
    blurb:
      "Huntress of the wild places, sworn to virginity and unforgiving of anyone who intrudes on it.",
    body: [
      "Artemis asked her father for eternal maidenhood, a bow, and the mountains, and got all three. Born first of the twins, she is said to have helped her mother deliver Apollo — which is why women in labour prayed to a goddess who would never bear a child.",
      "Her wilderness is not scenery, it is jurisdiction, and the penalties are exact. Actaeon saw her bathing and was turned into a stag for his own hounds to bring down; Agamemnon killed a stag in her grove and paid for the wind to Troy with his daughter.",
    ],
    portrait: "/people/artemis.jpg",
    facts: [
      "The Temple of Artemis at Ephesus was one of the Seven Wonders. A man burned it down in 356 BC purely to be remembered for it; the Ephesians banned anyone from recording his name, which is how we know it was Herostratus.",
      "Athenian girls served a term at her sanctuary at Brauron before marriage, in saffron robes, in a rite described as playing the bear.",
      "The Ephesian version of her is covered in dozens of rounded protuberances that scholars have identified as breasts, eggs, bulls' testicles, or amber gourds. There is still no agreement.",
    ],
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
    domains: ["War", "Bloodlust", "Courage", "Civil strife"],
    symbols: ["Spear", "Helmet", "Vulture", "Dog", "Burning torch"],
    romanName: "Mars",
    blurb:
      "The war god the Greeks openly disliked — battle as noise, panic, and slaughter, with none of the strategy.",
    body: [
      "Ares is what fighting feels like rather than what winning takes, and the poets treat him accordingly. Zeus tells him to his face that he is the most hateful of the gods, and Athena beats him twice in the Iliad — once by guiding a mortal's spear into him, after which he flees to Olympus bellowing.",
      "His long affair with Aphrodite produced Harmonia and Phobos and Deimos — Fear and Rout — which is about as neat as mythology gets. Rome recast him entirely: as Mars he becomes a disciplined founding father, which tells you more about Rome than about him.",
    ],
    portrait: "/people/ares.jpg",
    facts: [
      "The Areopagus, the hill in Athens where homicide trials were heard, is named for him — it is where he was tried, and acquitted, for killing a son of Poseidon.",
      "The moons of Mars are Phobos and Deimos, Fear and Rout, named for the sons who drive his chariot.",
      "He had almost no cult in Greece proper. Sparta, the state you would expect to lead the worship, gave the honours to Athena instead.",
    ],
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
        note: "The affair, not the marriage — and the one she is never sorry about.",
      },
      {
        type: "parent-of",
        to: "aeneas",
        note: "By the Trojan herdsman Anchises — the one time compulsion was worked on her rather than by her.",
      },
    ],
    domains: ["Love", "Desire", "Beauty", "The sea", "Generation"],
    symbols: ["Dove", "Rose", "Myrtle", "Scallop shell", "Girdle"],
    romanName: "Venus",
    blurb:
      "Goddess of desire, born either from the sea foam of a castrated sky or from an ordinary affair of Zeus — the traditions never reconciled.",
    body: [
      "Hesiod gives her the older and stranger birth: Cronus throws Uranus's severed genitals into the sea, foam gathers around them, and she steps ashore at Cyprus full-grown, a goddess with no generation above her. Homer flattens it to a daughter of Zeus and Dione. Both versions were told side by side for centuries, and the atlas keeps both edges rather than choosing.",
      "Her power is compulsion, and it is not gentle. She is married to Hephaestus, sleeps with Ares, and the bribe she offers Paris — the most beautiful woman alive, already married — is the spark that burns Troy down.",
    ],
    portrait: "/people/aphrodite.jpg",
    facts: [
      "Hesiod derives her name from aphros, foam, to fit the birth he gives her. Linguists consider this a folk etymology and suspect the name is not Greek at all, arriving with the goddess from the Near East.",
      "Sparta worshipped her armed, as Aphrodite Areia, and Cyprus had a bearded version. The pure love goddess is a later simplification.",
      "Her girdle compels desire in whoever sees the wearer. Hera borrows it in the Iliad to distract Zeus from the battlefield, and it works exactly as advertised.",
    ],
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
      "The smith of Olympus — thrown off the mountain, lame ever since, and the only god whose work everyone else depends on.",
    body: [
      "Hephaestus was flung from Olympus, in one telling by Hera for being born imperfect and in another by Zeus for taking her side in a quarrel. He fell for a full day, and the limp is permanent. He is the one Olympian who is visibly not beautiful, in a pantheon that otherwise treats beauty as a birthright.",
      "Everything of consequence in the mythology comes out of his forge: Zeus's thunderbolts, Achilles's shield, Hermes's winged sandals, the chains that hold Prometheus. His revenge is engineering too — a golden throne that trapped his mother until she acknowledged him, and an invisible net that caught Ares and Aphrodite in bed for the gods to come and laugh at.",
    ],
    portrait: "/people/hephaestus.jpg",
    facts: [
      "The Hephaisteion above the Athenian agora is the best-preserved Doric temple anywhere, largely because it spent a thousand years as a church.",
      "In the Iliad he is attended by golden handmaidens with sense, speech, and strength in them — mechanical servants written down in the eighth century BC.",
      "Lemnos was the island he landed on, and it stayed his cult centre. Once a year every fire on the island was put out and new flame was brought in by ship.",
    ],
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
    symbols: ["Caduceus", "Winged sandals", "Broad-brimmed hat", "Tortoise"],
    romanName: "Mercury",
    blurb:
      "Messenger, trickster, and guide of the dead — the only god who moves freely between Olympus, earth, and the underworld.",
    body: [
      "He stole Apollo's cattle on the day he was born, walked them backwards to confuse the trail, invented the lyre from a tortoise shell, and talked his way out of the charge by handing over the instrument. Apollo, who could not stay angry at something that good, gave him the herd.",
      "That range is the god: patron of merchants and of the thieves who rob them, of heralds and of liars, of boundary stones and of everyone who crosses them. As psychopomp he walks the dead down to Hades — the one crossing nobody else in the pantheon is willing to make routinely.",
    ],
    portrait: "/people/hermes.jpg",
    facts: [
      "Athenian doorways and crossroads were marked with herms — square pillars with his head on top and an erect phallus on the front. When they were all vandalised in one night in 415 BC, the city treated it as a coup attempt.",
      "The word hermetic comes to us through Hermes Trismegistus, a Greco-Egyptian fusion of Hermes and Thoth, by way of the sealed vessels of alchemy.",
      "His caduceus — two snakes around a winged staff — is not a medical symbol. The rod of Asclepius has one snake and no wings, and the swap is a nineteenth-century American mistake that never got corrected.",
    ],
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
    symbols: ["Thyrsus", "Grapevine", "Ivy", "Leopard", "Drinking cup"],
    romanName: "Bacchus",
    blurb:
      "God of wine and release, born twice, half mortal — the outsider who joins the Olympians last and unsettles them most.",
    body: [
      "Hera tricked his mother Semele into asking Zeus to appear undisguised, and the sight killed her; Zeus sewed the unborn child into his own thigh and carried him to term. Born of a mortal woman and gestated by a god, Dionysus arrives at Olympus from outside and is the last to be given a seat.",
      "What he offers is release from being yourself, and it cuts both ways. The same god gives Athens the theatre and drives the women of Thebes onto the mountain to tear a king apart with their hands. Rulers who refuse him don't stay rulers.",
    ],
    portrait: "/people/dionysus.jpg",
    facts: [
      "His name appears on Linear B tablets centuries before Homer, which quietly ruins the standard story that he was a late foreign import.",
      "Athenian tragedy was staged as a festival for him. The word tragedy means goat song, and nobody is certain why.",
      "Rome eventually panicked about his rites. The Senate's decree of 186 BC restricting the Bacchanalia survives on a bronze tablet.",
    ],
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
    domains: ["Spring growth", "The underworld", "Rebirth"],
    symbols: ["Pomegranate", "Torch", "Narcissus", "Sheaf of grain"],
    romanName: "Proserpina",
    blurb:
      "Daughter of the harvest and queen of the dead — six pomegranate seeds bind her below for a third of every year.",
    body: [
      "She was gathering flowers when the ground opened and Hades took her. Her mother's search stopped the harvest outright, and the terms Olympus finally struck depended on a technicality: she had eaten in the underworld, six pomegranate seeds, and anyone who eats there belongs there in part.",
      "So she splits the year, and the earth splits with her. What is easy to miss is the second half of the story — below, she is not a captive but a sovereign, and in the myths where mortals come asking for the dead back, it is often Persephone who decides.",
    ],
    portrait: "/people/persephone.jpg",
    facts: [
      "She is usually called Kore, simply the girl, when she is above ground, and Persephone below. The two names are almost two beings.",
      "Her name has no accepted Greek etymology and appears in a dozen spellings across dialects — a sign the word came from somewhere else.",
      "Lead curse tablets addressed to her have been dug up all over the Greek world, folded, pierced with nails, and dropped into graves. She was the one you took your grievances to.",
    ],
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
    domains: ["Storm winds", "Volcanic fire", "Chaos"],
    symbols: ["Hundred serpent heads", "Wings", "Coiled tail", "Mount Etna"],
    blurb:
      "The last child of Gaia and the only creature that ever came close to unseating Zeus — sire of nearly every monster that follows.",
    body: [
      "Gaia bore Typhon against the Olympians after they put down the Titans: a thing tall enough to scrape the stars, with a hundred serpent heads and a voice that ran through every sound a god or animal can make. He drove the whole pantheon into Egypt in animal disguise, and in one telling cut the sinews out of Zeus's hands and feet and hid them in a cave.",
      "Zeus got his strength back, ran him down with thunderbolts, and dropped Mount Etna on him. He is still under it — the eruptions are his. Almost everything in this section of the atlas is descended from him.",
    ],
    portrait: "/people/typhon.jpg",
    facts: [
      "His name is often linked to typhoon. The connection is probably wrong — the English word came through Arabic and Chinese — but it has been repeated so long it now works both ways.",
      "Etna erupted in 396 BC in a way that stopped a Carthaginian army from reaching Syracuse, which nobody at the time read as a coincidence.",
      "The gods fleeing into Egypt disguised as animals was a Greek explanation for why Egyptian gods have animal heads.",
    ],
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
    domains: ["Monstrous generation", "Caves", "The deep places"],
    symbols: ["Serpent coils", "Cave mouth"],
    blurb:
      "Half beautiful woman, half speckled serpent — mate of Typhon and mother of the monsters the heroes are remembered for killing.",
    body: [
      "Hesiod puts her in a cave under the earth, deathless and ageless, fair-cheeked above the waist and a vast mottled snake below. She does not raid, curse, or bargain; she is in the mythology almost entirely as a source.",
      "The list of her children is the list of the great labours: Cerberus, the Hydra, the Chimera, the Sphinx, the Nemean Lion, Orthrus. Kill one and you are a hero; she simply produced them.",
    ],
    portrait: "/people/echidna.jpg",
    facts: [
      "The egg-laying, spine-covered echidna of Australia is named for her, on the reasoning that a mammal that lays eggs is two creatures at once.",
      "Hesiod calls her deathless and ageless for all her days, so she is presumably still down there.",
      "Different sources give her four different sets of parents. Nobody could agree where a thing like that would come from.",
    ],
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
    domains: ["Petrification", "The averting gaze"],
    symbols: ["Serpent hair", "Stone stare", "Severed head", "Gorgoneion"],
    blurb:
      "The only mortal Gorgon — punished for something done to her, and killed for a look she never chose to have.",
    body: [
      "Her sisters Stheno and Euryale were born monstrous and immortal; Medusa was neither. Ovid's version is the one that stuck: a beautiful priestess of Athena, assaulted by Poseidon in the goddess's own temple, and turned by Athena into the thing whose face no one can meet.",
      "Perseus took her head with a mirrored shield, winged sandals, and the Helm of Darkness — a hunt equipped almost entirely by the gods. Pegasus and Chrysaor sprang from her neck, and the head went on working: Perseus used it as a weapon, then gave it to Athena, who wore it on the aegis.",
    ],
    portrait: "/people/medusa.jpg",
    facts: [
      "Her face was painted on shields, city walls, ovens, and roof tiles as a ward. Turning the killing stare outward to protect the thing behind it is one of the oldest tricks in Greek visual thinking.",
      "The free-swimming stage of a jellyfish is called a medusa, after the tentacles.",
      "In the earliest art she is not beautiful at all — a broad grinning face with tusks and a lolling tongue. The tragic beauty is a Hellenistic and Roman development, roughly six centuries later.",
    ],
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
    domains: ["The gate of the dead", "Guardianship"],
    symbols: ["Three heads", "Serpent tail", "Bronze collar"],
    blurb:
      "The three-headed dog at the gate of the underworld — friendly to everyone entering, implacable to anyone trying to leave.",
    body: [
      "Cerberus lets the dead in and never lets them out, which is the whole of his job description and the reason he is more a mechanism than a character. Heracles took him for the twelfth labour on the condition that he use no weapons, wrestled him down bare-handed, hauled him up to be gawked at, and returned him.",
      "The other way past him is music. Orpheus put all three heads to sleep with the lyre; the Sibyl who guides Aeneas simply throws a drugged honeycake. For a guardian of the absolute boundary, he is remarkably often got round.",
    ],
    portrait: "/people/cerberus.jpg",
    facts: [
      "The Greeks buried honey cakes with their dead. One reading is that they were fare for the ferryman; another is that they were for the dog.",
      "The number of heads is not fixed. Hesiod gives him fifty, Pindar a hundred, and the familiar three only settles in later.",
      "His name may come from a word meaning spotted, which would make the guardian of the underworld a dog called Spot.",
    ],
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
    symbols: ["Nine heads", "Swamp water", "Poisoned blood"],
    blurb:
      "Cut off one head and two grow back — the swamp serpent whose venom outlived the hero who killed it.",
    body: [
      "The Hydra lived in the marshes of Lerna, and Heracles's second labour turned into a lesson about the wrong method: every head he crushed came back doubled. The fix was his nephew Iolaus with a torch, searing each stump before it could regrow, and the one immortal head buried under a rock.",
      "Killing it was not the end of it. Heracles dipped his arrows in the blood, and that venom goes on to kill Chiron, Nessus, and — through the poisoned shirt Nessus leaves behind — Heracles himself. Of all the monsters, this is the one that wins in the long run.",
    ],
    portrait: "/people/hydra.jpg",
    facts: [
      "Hydra is the largest of the eighty-eight constellations, sprawling across a quarter of the sky.",
      "Linnaeus named the freshwater polyp Hydra after her, because cutting one in pieces produces several living animals.",
      "Eurystheus disallowed the labour on the grounds that Heracles had help, which is why twelve labours were assigned rather than ten.",
    ],
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
    domains: ["Fire", "Impossible hybrids", "Portents"],
    symbols: ["Lion's head", "Goat's head", "Serpent tail", "Flame"],
    blurb:
      "Lion in front, goat in the middle, serpent behind, and fire out of all of it — the creature whose name became the word for impossible.",
    body: [
      "Homer describes it in three words that later writers never improved on: lion, goat, serpent, breathing fire. It ravaged Lycia until Bellerophon was sent to kill it — a posting everyone involved understood as a death sentence.",
      "He did it from the air on Pegasus, out of reach of the flame, and finished it by putting a lead-tipped spear into its mouth to melt down its throat. Then he tried to ride Pegasus up to Olympus, and Zeus put a stop to that with a single gadfly.",
    ],
    portrait: "/people/chimera.jpg",
    facts: [
      "The word became a technical term twice over — for a fanciful impossibility, and in biology for a single organism carrying two distinct sets of DNA.",
      "The flames of Yanartaş still burn out of the rock on the Lycian coast where the myth places her, fed by seeping methane. They have been alight for at least two and a half thousand years.",
      "The Chimera of Arezzo, an Etruscan bronze dug up in 1553, is one of the finest surviving pieces of pre-Roman Italian sculpture — and Cosimo de' Medici had it in his study.",
    ],
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
    symbols: ["Lion's body", "Eagle wings", "Woman's face"],
    blurb:
      "A lion with a woman's face who sat on the road to Thebes asking one question and killing everyone who missed it.",
    body: [
      "Lion-bodied, eagle-winged, and pitiless, she held the road into Thebes and put the same riddle to every traveller: what walks on four legs in the morning, two at noon, and three in the evening. Wrong answers were strangled and eaten — her Greek name means the strangler.",
      "Oedipus answered 'man', and she threw herself from the rock. Which solves Thebes's problem and starts his: the reward for the answer is the crown and the widowed queen, and the queen is his mother.",
    ],
    portrait: "/people/sphinx.jpg",
    facts: [
      "The Greek sphinx is female, winged, and murderous. The Egyptian one is male, wingless, and stationary. The Greeks borrowed the shape and changed everything else.",
      "Sophocles never states the riddle in Oedipus the King. Every audience already knew it, so the play only refers to it.",
      "Later sources give her a second riddle for anyone who solved the first: two sisters, each giving birth to the other. The answer is day and night.",
    ],
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
    domains: ["The strait", "Shipwreck", "Ambush"],
    symbols: ["Six heads", "Cliff face", "Ring of dogs"],
    blurb:
      "Six heads over a narrow channel, with the whirlpool Charybdis on the far side — a choice between losing six men and losing the ship.",
    body: [
      "In the older tellings she was a nymph, turned into this by a jealous rival poisoning the pool she bathed in: six long necks, each with a head of three rows of teeth, and a girdle of barking dogs at the waist. She cannot be fought, only passed.",
      "Circe's advice to Odysseus is the whole of the myth — steer for Scylla, not Charybdis, and row hard, because six dead is better than everyone. He does it, and the six men calling his name as they go up the cliff is the sight he says he never got over.",
    ],
    portrait: "/people/scylla.jpg",
    facts: [
      "Between Scylla and Charybdis is still the standard phrase for a choice with no good option, and predates caught between a rock and a hard place by about three thousand years.",
      "Both are traditionally located in the Strait of Messina, where a real tidal whirlpool called Garofalo forms — impressive enough to worry a small wooden ship, and nothing like the myth.",
      "Homer never explains where she came from. The story of the jealous rival poisoning her bath is Ovid's, written seven centuries later.",
    ],
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
    domains: ["The whirlpool", "The tide", "Total loss"],
    symbols: ["Whirlpool", "Fig tree", "Bare rock"],
    blurb:
      "Three times a day she swallows the sea and spits it back — the other half of the strait, and the half that takes everything.",
    body: [
      "A daughter of Poseidon and Gaia who flooded too much land for Zeus's liking and was thrown into the sea as a whirlpool. She sucks the water down three times a day and vomits it back up, and anything on the surface goes with it.",
      "Scylla costs six men; Charybdis costs the ship. That asymmetry is why the phrase survives as a name for a choice between two bad outcomes — and Odysseus meets her twice, escaping the second time by clinging to a fig tree over the vortex until his raft comes back up.",
    ],
    portrait: "/people/charybdis.jpg",
    facts: [
      "Homer has her swallow and disgorge three times a day, which reads as a description of a tide seen by people who had never needed to explain one.",
      "She is barely a character. Homer gives her no face, no voice, and no motive — she is a hazard with a name.",
    ],
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
    domains: ["Invulnerability", "The hunt reversed", "Nemea"],
    symbols: ["Golden pelt", "Cave with two mouths", "Claws"],
    blurb:
      "A lion whose hide no blade or arrow could cut, which turned Heracles's first labour into a wrestling match.",
    body: [
      "It hunted the valley of Nemea from a cave with two entrances, and the pelt turned every weapon Heracles had. He blocked one mouth of the cave, went in the other, and strangled it with his hands — losing a finger to it in some tellings.",
      "The problem after that was skinning something no knife could cut. Athena's advice was to use the lion's own claws, and the pelt became the hide Heracles wears for the rest of his life: the reason he is recognisable in every vase painting, and armour nothing could pierce.",
    ],
    portrait: "/people/nemean-lion.jpg",
    facts: [
      "The constellation Leo is traditionally identified as the lion, set in the sky after the labour.",
      "The Nemean Games, one of the four great Panhellenic festivals alongside the Olympics, were held on the site and traced their founding to the story.",
      "Some traditions have it fall from the moon, which would explain a hide no earthly weapon could cut.",
    ],
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
    symbols: ["Bird body", "Woman's face", "Lyre", "Meadow of bones"],
    blurb:
      "Bird-bodied singers on a flowered island, surrounded by the bones of everyone who stopped to listen.",
    body: [
      "Daughters of the river Achelous and one of the Muses, they are birds with women's faces — the mermaid came much later. What they offer is not seduction but knowledge: they call to Odysseus by name and promise to tell him everything that happened at Troy, and everything that will happen on the earth. Nobody who wants to know refuses.",
      "Circe's instructions are the standard answer — wax in the crew's ears, and the captain lashed to the mast so he can hear it and survive it. Orpheus solved it differently on the Argo by simply playing louder, and one Siren threw herself into the sea. In some tellings the whole flock is fated to die the first time a ship gets past.",
    ],
    portrait: "/people/sirens.jpg",
    facts: [
      "They are birds with women's heads in every Greek depiction. The fish tail arrives in the Middle Ages, and Romance languages still use the word for mermaid — sirena, sirène.",
      "The emergency siren is named after them, by way of an acoustic instrument built in 1819 that could sound underwater.",
      "Homer never says how many there are. Two, three, and four all appear in later sources, and the vases mostly show three.",
    ],
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
    domains: ["Storm winds", "Theft", "Punishment"],
    symbols: ["Talons", "Wings", "Fouled table", "Sudden gust"],
    blurb:
      "Winged snatchers who carry people off without a trace and foul whatever food they leave behind.",
    body: [
      "Granddaughters of Oceanus through Thaumas and the Oceanid Electra, the Harpies are the personified squall: when someone vanished and no body turned up, the Harpies had taken them. Hesiod describes them as fair-haired and faster than birds or winds, which is a long way from the later carrion-hags.",
      "Their set piece is the punishment of Phineus, a blind seer who told mortals too much of the future. Every time food was set in front of him they seized it and fouled the rest, so that he starved in sight of a full table — until the Argonauts arrived and the two winged sons of the North Wind, the only crewmen who could match them for speed, chased them off for good.",
    ],
    portrait: "/people/harpies.jpg",
    facts: [
      "The harpy eagle of Central and South America is named for them — the largest eagle in the Americas, and one that hunts monkeys out of the canopy.",
      "The Harpy Tomb from Xanthos, now in the British Museum, shows winged female figures carrying off small human forms. Whether they are Harpies or Sirens has been argued for two centuries.",
      "In Hesiod they are lovely-haired and swift as the wind. The hideous filth-spreading version comes from Virgil, and it is Virgil's that stuck.",
    ],
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
    symbols: ["Bull's head", "Labyrinth", "Double axe", "Thread"],
    blurb:
      "Bull-headed son of a Cretan queen, sealed in a maze and fed on Athenian children — a monster made entirely by his stepfather's dishonesty.",
    body: [
      "Poseidon sent Minos a white bull to sacrifice; Minos kept it. The god's answer was to make Pasiphaë, the queen, desire the animal, and the child of that was Asterion — the Minotaur. Minos hid him in a labyrinth built by Daedalus and levied seven Athenian youths and seven maidens as tribute to feed him.",
      "Theseus volunteered for the third tribute. Ariadne, Minos's daughter, gave him a ball of thread to keep the way back, and he killed her half-brother in the dark at the centre of the maze. Nothing in the story is the Minotaur's doing; every decision that produced him was made by someone else.",
    ],
    portrait: "/people/minotaur.jpg",
    facts: [
      "His actual name is Asterion, the starry one. Minotaur is a description — the bull of Minos — not a name.",
      "Labyrinth is often derived from labrys, the Minoan double axe, whose symbol is carved all over the palace at Knossos. The real palace has around 1,300 interconnected rooms.",
      "Frescoes at Knossos show young men and women vaulting over the horns of charging bulls, which is either the origin of the tribute story or a very large coincidence.",
    ],
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
    domains: ["Herding", "The cave", "Brute strength"],
    symbols: ["Single eye", "Flock of sheep", "Boulder door", "Olive stake"],
    blurb:
      "The one-eyed giant who ate his guests instead of hosting them, and whose blinding put Poseidon on Odysseus's trail for ten years.",
    body: [
      "Odysseus and twelve men walked into his cave uninvited, and Polyphemus rolled a boulder across the entrance and started eating them two at a time. The escape is the most famous trick in Homer: wine, a sharpened olive stake through the eye, and a name — Nobody — so that when the other Cyclopes ask who is hurting him, the answer sends them home.",
      "It comes apart because Odysseus cannot resist shouting his real name from the departing ship. Polyphemus prays to his father, and Poseidon spends the rest of the Odyssey answering. Later poets soften him into a lovesick giant singing at the sea-nymph Galatea, which is a hard read against the cave.",
    ],
    portrait: "/people/polyphemus.jpg",
    facts: [
      "The trick turns on a pun that only works in Greek: Outis means Nobody, but under negation it shifts to mē tis, which sounds exactly like mētis — cunning.",
      "The Polyphemus moth is named for the single large eyespot on each hindwing.",
      "One long-running suggestion is that the Cyclops began with dwarf elephant skulls, common in Mediterranean caves, whose central nasal cavity looks unmistakably like one huge eye socket.",
    ],
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
        note: "With Iolaus cauterising each stump — the labour Eurystheus refused to count.",
      },
      {
        type: "slew",
        to: "chiron",
        note: "By accident, with an arrow still wet from the Hydra — the worst thing he ever did, and to the one who taught him.",
      },
    ],
    domains: ["Strength", "Endurance", "Labour", "Apotheosis"],
    symbols: ["Lion skin", "Olive-wood club", "Bow", "Twelve labours"],
    romanName: "Hercules",
    blurb:
      "The strongest man alive, working off a crime he committed in a madness Hera sent — and the only hero who ends up a god.",
    body: [
      "Hera hated him from birth for whose son he was, and sent the madness in which he killed his own wife and children. The twelve labours are the penance: the lion, the Hydra, the boar, the stables, the belt, the cattle, the apples, and finally Cerberus, hauled up from the underworld and brought back.",
      "He is the least subtle hero and the most enduring, solving problems by being stronger than them, and losing every domestic situation he is ever in. The end comes from a shirt soaked in the Hydra's venom, given to his wife by a dying centaur as a false love-charm. Burning on the pyre, the mortal part goes and the rest is taken up to Olympus — the only mortal in this atlas who crosses over.",
    ],
    portrait: "/people/heracles.jpg",
    facts: [
      "His name means glory of Hera — named for the goddess who spent his whole life trying to kill him. Ancient writers found this as strange as we do.",
      "The Pillars of Heracles are the rocks flanking the Strait of Gibraltar, set up by him to mark the edge of the known world.",
      "He is the most commonly depicted figure in all Greek art. If a vase has a man in a lion skin on it, no further identification was thought necessary.",
    ],
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
    domains: ["Quests", "Divine favour", "Founding"],
    symbols: [
      "Mirrored shield",
      "Winged sandals",
      "Curved sword",
      "Severed head",
    ],
    blurb:
      "Set an impossible task by a king who wanted him gone, and equipped for it by half of Olympus.",
    body: [
      "Shut in a chest with his mother and thrown into the sea as an infant, Perseus grew up on Seriphos under a king who wanted Danaë and wanted her son out of the way. The Gorgon's head was supposed to be a fatal errand; Athena and Hermes turned it into an outfitting.",
      "He came back with it and used it — on a sea monster to save Andromeda, and on the king. The prophecy that had put him in the chest still landed: years later he threw a discus at a games and killed his grandfather in the crowd, exactly as foretold.",
    ],
    portrait: "/people/perseus.jpg",
    facts: [
      "The Perseid meteor shower every August radiates from his constellation, which is why they are his.",
      "Algol, the star marking Medusa's head, dims noticeably every 2.87 days because it is an eclipsing binary. Its Arabic name means the ghoul, and cultures with no contact with each other flagged that star as ominous.",
      "He was claimed as the founder of Mycenae, which makes the great Bronze Age citadel of Greek legend his city rather than Agamemnon's by origin.",
    ],
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
    domains: ["Kingship", "Civic order", "Cunning"],
    symbols: ["Ball of thread", "Sandals and sword", "Black sail", "Club"],
    blurb:
      "Athens's own hero — volunteered as tribute to the Minotaur, and came home to a father who had already jumped.",
    body: [
      "He grew up not knowing his father, lifted the rock hiding Aegeus's sword and sandals, and took the bandit-infested land road to Athens rather than the safe crossing. When the third tribute of youths was levied for Crete, he put himself on the ship.",
      "Ariadne's thread got him out of the labyrinth; he abandoned her on Naxos on the way home, and then forgot to change the black sail for a white one. Aegeus, watching from the cliff, saw black and threw himself into the sea that carries his name. Theseus went on to unify Attica, which is why Athens claimed him.",
    ],
    portrait: "/people/theseus.jpg",
    facts: [
      "The Athenians preserved his ship for centuries, replacing planks as they rotted, which produced the oldest identity puzzle in philosophy: at what point is it no longer the same ship.",
      "Cimon brought a set of large bones back from Skyros in 476 BC and Athens received them as Theseus's, with a festival and a shrine. It was a political act as much as a religious one.",
      "He is credited with the synoikismos, the merging of Attica's villages into one state — an event that actually took centuries, compressed into one king's decision.",
    ],
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
    domains: ["Flight", "Monster-slaying", "Hubris"],
    symbols: ["Golden bridle", "Winged horse", "Lead-tipped spear"],
    blurb:
      "Tamed the winged horse, killed the Chimera, and then tried to ride up to Olympus — which is where it ended.",
    body: [
      "Falsely accused by a queen he refused, he was sent to Lycia carrying a sealed letter asking the king to kill him. The king, unwilling to murder a guest, assigned him the Chimera instead. Athena gave him a golden bridle in a dream, he caught Pegasus at the spring, and killed the thing from above.",
      "He survived every trap set for him and could not survive success. Convinced he had earned a seat among the gods, he flew Pegasus at Olympus; Zeus sent a single gadfly, the horse bucked, and he fell. He spent the rest of his life lamed and blind, avoiding the paths of men — the standing Greek illustration of what happens when a mortal forgets the scale of things.",
    ],
    portrait: "/people/bellerophon.jpg",
    facts: [
      "A message that instructs the recipient to harm the person delivering it is still called a Bellerophontic letter.",
      "He is one of the very few Greek heroes with no divine parent in the standard account, which makes the attempt on Olympus even more presumptuous.",
      "Homer's Iliad has him but not Pegasus. The winged horse only joins the Chimera story in later sources.",
    ],
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
    domains: ["Voyaging", "Leadership", "Broken oaths"],
    symbols: ["The Argo", "Golden fleece", "One sandal"],
    blurb:
      "Assembled the greatest crew in Greek myth, won the fleece with a sorceress's help, and lost everything by breaking his word to her.",
    body: [
      "Sent for the Golden Fleece by an uncle who expected him to die trying, Jason built the Argo and crewed it with nearly every hero of the generation. The voyage is the great ensemble story: clashing rocks, harpies, the bronze giant Talos.",
      "Almost nothing at Colchis is his own doing. Medea, the king's daughter, drugs the sleepless serpent, hands him the trick for the fire-breathing bulls, and kills her own brother to cover the escape. Then he sets her aside for a better marriage, and she takes the children. He dies years later, alone, when a beam of the rotting Argo falls on him.",
    ],
    portrait: "/people/jason.jpg",
    facts: [
      "Argo Navis, once the largest constellation in the sky, was broken up in the eighteenth century into Carina, Puppis, and Vela — the keel, the stern, and the sails.",
      "He arrives at his uncle's court wearing one sandal, having lost the other carrying an old woman across a river. The old woman was Hera, and the prophecy the king feared named a man with one shoe.",
      "The paper nautilus is called the argonaut because it was believed to sail on the surface using two membranous arms as sails. It does not, but the name held.",
    ],
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
    symbols: ["The great bow", "Olive-wood bed", "Wooden horse", "Raft"],
    romanName: "Ulysses",
    blurb:
      "The hero who wins by thinking — sacker of Troy by trickery, and ten years getting home for it.",
    body: [
      "The wooden horse is his idea, and the war ends because of it. The journey back takes as long as the siege did: the Cyclops, the lotus, Circe, the underworld, the Sirens, Scylla and Charybdis, seven years held by Calypso. Every crewman dies; he keeps going.",
      "His defining flaw is the same as his gift — he cannot resist a good exit line, and shouting his real name at the blinded Polyphemus is what puts Poseidon on him for a decade. He comes home alone, in disguise, and takes back his house by winning an archery contest with his own bow.",
    ],
    portrait: "/people/odysseus.jpg",
    facts: [
      "The word odyssey now means any long eventful journey, in every European language.",
      "The Odyssey offers its own etymology for his name, tying it to a verb meaning to cause or suffer pain — the man of wrath, or the man people are angry at, depending how you take it.",
      "His nurse recognises him after twenty years by a scar on his thigh, and Homer stops the entire scene to tell the story of the boar that made it. Auerbach built a famous essay on that digression.",
    ],
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
    symbols: ["Ash spear", "Divine armour", "Heel", "Myrmidon shield"],
    blurb:
      "Offered a long quiet life or a short famous one, he took the short one — and the Iliad is about the week he regretted it.",
    body: [
      "Son of the sea-nymph Thetis, dipped as an infant in the Styx and left vulnerable only where she held him. The prophecy his mother carried was Themis's: any son of hers would surpass his father, which is why the gods married her to a mortal.",
      "The Iliad opens on his rage — not at Troy but at Agamemnon, over a prize of honour — and he withdraws while the Greeks are slaughtered. What brings him back is Patroclus's death, and what follows is the most brutal stretch in the poem. The poem ends not with his death but with him giving Hector's body back to an old man who came to beg for it.",
    ],
    portrait: "/people/achilles.jpg",
    facts: [
      "The Achilles tendon was named after him in the 1690s. The anatomy came second — the heel was already the byword.",
      "Homer never mentions the heel or the dipping in the Styx. In the Iliad he can be wounded anywhere; the invulnerability arrives with Roman poets a thousand years later.",
      "The first word of the Iliad is his rage. The poem announces its subject as an emotion rather than a war.",
    ],
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
    symbols: ["Household gods", "His father on his back", "Golden bough"],
    romanName: "Aeneas",
    blurb:
      "Walked out of burning Troy with his father on his back and his gods under his arm, and founded the line that became Rome.",
    body: [
      "A secondary figure in Homer — a Trojan captain his mother Aphrodite keeps rescuing — and the central one in Virgil, where the Greeks' victory becomes the first chapter of Rome's founding. He escapes the sack carrying Anchises and the household gods, having lost his wife in the smoke.",
      "Virgil's word for him is pius, which means duty rather than devotion, and it costs him everything he might have wanted. He leaves Dido in Carthage because he is told to, and she burns herself on a pyre cursing his descendants — which is one poet's account of why Rome and Carthage could never share a world.",
    ],
    portrait: "/people/aeneas.jpg",
    facts: [
      "Julius Caesar's family claimed descent from him through his son Iulus, which made Venus an ancestor of the emperors and the Aeneid a document with a stake in current politics.",
      "Virgil died with the poem unfinished and asked for it to be burned. Augustus overruled the will.",
      "Around sixty lines in the Aeneid stop mid-sentence. They were left as they were.",
    ],
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
    domains: ["Music", "Grief", "The mysteries"],
    symbols: ["Lyre", "Laurel", "Charmed beasts", "Backward glance"],
    blurb:
      "Sang so well that stones followed him and the dead stood still — and lost his wife anyway, over one look.",
    body: [
      "Son of the Muse Calliope, he played well enough to move rivers and put the Sirens out of business when he sailed with the Argonauts. When Eurydice died of a snakebite he walked into the underworld and asked for her back, and his song was good enough that Hades granted it.",
      "The condition was that he not look at her until both were in the light. He held out the whole way up and turned at the threshold. Afterwards he wandered Thrace refusing all company and was torn apart by maenads; his head floated down the river still singing. The mystery cult that took his name promised its initiates a better route through the place he had been.",
    ],
    portrait: "/people/orpheus.jpg",
    facts: [
      "A religious movement took his name and taught reincarnation, personal purity, and vegetarianism — deeply unusual positions in a culture built around animal sacrifice.",
      "Monteverdi's L'Orfeo of 1607 is among the first operas still performed. The form's founding subject was a man whose singing could stop the dead.",
      "The constellation Lyra is his lyre, placed in the sky by the Muses after his death. Vega, its brightest star, is one of the brightest in the northern sky.",
    ],
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
    domains: ["The hunt", "Speed", "Refusal"],
    symbols: ["Bow", "Golden apples", "Boar's hide", "She-bear"],
    blurb:
      "Exposed at birth for being a girl, raised by a bear, and the fastest runner alive — beaten only by a trick.",
    body: [
      "Her father left her on a mountain because he wanted a son; a she-bear sent by Artemis nursed her and hunters raised her. She drew first blood on the Calydonian Boar when a field of famous men could not, and the argument over giving a woman the trophy killed several of them.",
      "Pressed to marry, she set the terms: outrun her or die. Hippomenes prayed to Aphrodite, got three golden apples, and dropped them one at a time to break her stride. The marriage ended with both of them turned into lions for offending a god in a sanctuary — a punishment that, in the versions where lions were believed unable to mate with each other, was the point.",
    ],
    portrait: "/people/atalanta.jpg",
    facts: [
      "Whether she sailed with the Argonauts depends on the source. Apollodorus lists her; Apollonius has Jason refuse her, worried about what one woman among that crew would do to it.",
      "She is one of very few figures in Greek myth to beat men at their own contests repeatedly and openly, and the only way anyone finds to stop her is a trick.",
      "Her son Parthenopaeus is one of the Seven Against Thebes, which puts her descendants in the next great cycle of stories.",
    ],
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
        note: "Not by hand — she threw herself from the rock when he answered.",
      },
    ],
    domains: ["Riddles", "Fate", "Blindness and sight"],
    symbols: ["Swollen feet", "Crossroads", "Riddle", "Blinding pin"],
    blurb:
      "Answered the riddle no one else could and walked straight into the one he was living in.",
    body: [
      "Given a prophecy that he would kill his father and marry his mother, he left the parents he knew to avoid it — not knowing they had adopted him. On the road he quarrelled with an old man at a crossroads and killed him. Then he answered the Sphinx, freed Thebes, and was given the crown and the widowed queen as the reward.",
      "Sophocles's play is not about the crime but about the investigation: a plague forces him to find the old king's killer, and every witness he calls tightens the case against himself. Jocasta hangs herself; he puts out his own eyes with the pins from her dress. He had the sharpest mind in Thebes and it only ever ran him faster toward the thing he was fleeing.",
    ],
    portrait: "/people/oedipus.jpg",
    facts: [
      "Freud named the complex in 1899, and the play has been read through him ever since — despite Sophocles's Oedipus doing everything possible to avoid the fate rather than desiring it.",
      "His name means swollen foot, from the pin driven through his ankles when he was exposed as an infant. He carries the evidence of his own story around with him and never reads it.",
      "Sophocles wrote a sequel in his late eighties. Oedipus at Colonus, in which the old man dies and becomes a protective spirit of Athens, was staged after his death.",
    ],
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
    domains: ["Founding", "Writing", "Cursed lines"],
    symbols: ["Dragon's teeth", "Sown men", "Alphabet", "Serpent"],
    blurb:
      "Sent to find a stolen sister, he founded Thebes instead — and sowed a dragon's teeth to raise its first citizens.",
    body: [
      "Sent after Europa with orders not to come back without her, Cadmus gave up and asked Delphi what to do. Follow a particular cow, he was told, and build where she lies down. The spring there was guarded by a serpent sacred to Ares; he killed it, sowed its teeth on Athena's advice, and armed men grew out of the ground and fought until five were left. Those five founded Thebes with him.",
      "The Greeks also credited him with bringing them the alphabet from Phoenicia. His reward for the serpent was a term of servitude to Ares and marriage to Harmonia, daughter of Ares and Aphrodite — and a family line that produced Semele, Actaeon, Pentheus, and eventually Oedipus. In old age the two of them were turned into serpents, which he had asked for.",
    ],
    portrait: "/people/cadmus.jpg",
    facts: [
      "A Cadmean victory is one that costs the winner as much as losing would have — from the sown men who killed each other until five were left.",
      "The element cadmium is named, at several removes, after him: it was found in the zinc ore cadmia, which took its name from him by way of Thebes.",
      "Greeks called their letters Phoenician letters and credited him with bringing them. Modern scholarship agrees the alphabet came from Phoenicia, making this one of the few myths that turned out to be reporting.",
    ],
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
    symbols: ["Bow", "Herbs", "Lyre", "Centaur's mantle"],
    blurb:
      "The one civilised centaur — immortal son of Cronus, physician, and tutor to half the heroes in this atlas.",
    body: [
      "The other centaurs are drunks and brawlers; Chiron is their opposite, and his parentage explains it — he is Cronus's son, not of the same stock as the rest, which makes him half-brother to Zeus and his siblings. He lived in a cave on Pelion and taught medicine, hunting, music, and prophecy to Asclepius, Jason, Actaeon, and Achilles.",
      "The end of him is the cruellest accident in the mythology. Heracles, visiting during the boar labour, loosed an arrow into a scuffle and caught Chiron with Hydra venom — a wound that could not kill him, because he was immortal, and could not be healed either. He gave his immortality away to free Prometheus and was allowed to die, and Zeus set him in the sky as Sagittarius.",
    ],
    portrait: "/people/chiron.jpg",
    facts: [
      "The first object discovered in the belt between Saturn and Uranus was named 2060 Chiron, and the entire class of bodies out there is now called centaurs.",
      "He is the standard illustration of the wounded healer — the physician whose own injury cannot be cured — a phrase Jung borrowed and analysts still use.",
      "Some traditions set him in the sky as Sagittarius; others insist Sagittarius is a different centaur entirely and give Chiron the Centaurus constellation.",
    ],
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
    domains: ["Defence", "Duty", "The city"],
    symbols: ["Plumed helmet", "Great shield", "City wall", "Chariot"],
    blurb:
      "Troy's first defender, fighting a war he never wanted for a brother's mistake — and the only figure in the Iliad with a home worth losing.",
    body: [
      "Eldest son of Priam and the wall the city actually stood behind. He knows the war is Paris's fault, says so, and fights it anyway. The scene that fixes him is domestic: he reaches for his baby son on the ramparts, the child screams at the horsehair crest, and both parents laugh before he goes back out.",
      "He kills Patroclus wearing Achilles's armour, which is the mistake that ends him. Achilles runs him three times around the walls, kills him in front of his family, and drags the body behind a chariot for twelve days. The Iliad — a poem told by Greeks — closes not on their victory but on Hector's funeral.",
    ],
    portrait: "/people/hector.jpg",
    facts: [
      "To hector, meaning to bully or browbeat, comes from his name by way of seventeenth-century London gangs who called themselves Hectors. The word turned on the man.",
      "He is the only major figure in the Iliad shown at home with his wife and child, which is generally read as the poem deliberately making Troy's loss cost something.",
      "The poem ends with his funeral, not with Achilles or the fall of the city. A Greek audience was left on a Trojan's grave.",
    ],
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
    symbols: ["Wax wings", "Labyrinth", "Plumb line", "Saw"],
    blurb:
      "The engineer who built the maze, gave away the trick for solving it, and lost his son escaping the consequences.",
    body: [
      "An Athenian craftsman exiled for killing his nephew — a boy whose invention of the saw looked like outgrowing him — Daedalus took service with Minos on Crete. He built the labyrinth to hold the Minotaur, and then told Ariadne about the thread, which is the whole reason Theseus walks back out of it.",
      "Minos shut him and Icarus in the maze for that. He made wings of feathers and wax, warned his son to fly neither low enough for the spray nor high enough for the sun, and watched him do exactly the second thing. Everything he builds works perfectly and costs him someone.",
    ],
    portrait: "/people/daedalus.jpg",
    facts: [
      "Daedal survives in English as an adjective for something intricately made, and Joyce named his alter ego Stephen Dedalus after him — the artificer, the maker of wings.",
      "The stretch of the Aegean where his son came down is still called the Icarian Sea, and the nearby island is Ikaria.",
      "The story does not end at the flight. He reached Sicily, and when Minos came hunting him with a riddle — thread this spiral shell — he solved it, which gave him away and got Minos killed in a bath by the local king's daughters.",
    ],
    myths: ["theseus-and-the-minotaur"],
  },
};

export const characterList: Character[] = Object.values(characters);

import type { CharacterSlug, Story } from "@/data/types";

/**
 * The long-form text for each figure's page, kept apart from characters.ts so
 * the home page never downloads it: only the character route imports this
 * file, and that route is code-split. Keyed by slug and typed as a full
 * Record, so a figure added to characters.ts without a story here is a
 * compile error.
 */
export const stories: Record<CharacterSlug, Story> = {
  cronus: {
    body: [
      "Cronus was the youngest of the twelve Titans and the one bold enough to act when Gaia asked which of her children would move against Uranus. He struck with an adamantine sickle, took the sky's throne, and ruled over what later poets remembered, uneasily, as a golden age.",
      "He also inherited his father's fear. Warned that a child of his would unseat him, he swallowed each one at birth, until Rhea hid the sixth away on Crete. That child was Zeus, and the prophecy kept its appointment.",
    ],
    facts: [
      "The Romans folded him into Saturn, and Saturnalia, the December festival where slaves were served by their masters and normal order was suspended, was a yearly rehearsal of his golden age.",
      "The stone Rhea fed him was said to have been set up at Delphi as the omphalos, the navel of the world. Pausanias reports it was still there in the second century AD, anointed with oil daily.",
      "He is constantly confused with Chronos, the personification of time, on the strength of a similar-sounding name. The two are unrelated in Greek, but the mix-up is why Father Time carries a harvest scythe.",
    ],
  },

  rhea: {
    body: [
      "Rhea bore six children to Cronus and watched him swallow five of them whole. With the sixth she went to Gaia for counsel, gave birth in secret in a Cretan cave, and handed her husband a stone wrapped in swaddling bands.",
      "The deception is the whole point of her: the Olympian order exists because a mother refused the arrangement she was handed. She appears rarely afterward, but every Olympian in this atlas traces back through her.",
    ],
    facts: [
      "The Kouretes, armed attendants who danced around the infant Zeus clashing spears on shields, were there to drown out his crying so Cronus would not hear it.",
      "By the classical period she had merged almost completely with the Anatolian mother goddess Cybele, lions, drums, and ecstatic rites all arrive in her worship from the east.",
      "Ancient sources cannot agree on which Cretan cave she gave birth in. Mount Ida and Mount Dikte both claimed it, and both did steady business in pilgrims.",
    ],
  },

  oceanus: {
    body: [
      "Before the ocean was a body of water it was a river, running in a circle around the rim of the world, and Oceanus was both. Every river, spring, and well is his child by Tethys, three thousand sons and three thousand daughters, in Hesiod's count.",
      "When Cronus moved against Uranus, Oceanus alone declined to join, and when the Olympians moved against Cronus he stayed out of that too. It cost him nothing: the world's water kept flowing under every regime, and he is the one Titan never punished.",
    ],
    facts: [
      "In Iliad 14 Hera calls him the origin of the gods, a cosmology in which everything begins in water, closer to Babylonian and Egyptian creation accounts than to Hesiod's.",
      "Greek maps kept his shape for centuries: a disc of land with a circular river around the rim. The word ocean is his name, still describing a thing the Greeks would not have recognised.",
    ],
  },

  tethys: {
    body: [
      "Tethys is the source that Oceanus distributes: the nurse of the world's water, and by him the mother of the rivers and the three thousand Oceanid nymphs. Cults imagined her feeding the streams from beneath the earth.",
      "In the Iliad, Hera says she was fostered by Tethys and Oceanus during the war, the Titaness raising the future queen of the gods who would depose her generation. She is also blamed for one piece of cosmic spite: at Hera's request she forbade the Great Bear to bathe in her waters, which is why that constellation never sets.",
    ],
    facts: [
      "Geologists named the vanished sea between the ancient continents of Laurasia and Gondwana the Tethys Ocean after her. The Mediterranean is what is left of it.",
      "She was credited with three thousand river sons and three thousand Oceanid daughters. Hesiod admits outright that no mortal could name them all and lists about forty.",
      "Almost nothing was ever written about her in her own right, she has no myth of her own, no cult of consequence, and appears mostly as one half of a pair.",
    ],
  },

  hyperion: {
    body: [
      "His name means the one who goes above, and his portion is light itself rather than any single lamp. By his sister Theia he fathered Helios the sun, Selene the moon, and Eos the dawn, which makes him responsible for the entire visible sky.",
      "The Greeks associated him with watching as much as shining, his children see everything that happens by day, and Helios is the witness other gods go to when they need to know who did what. Homer sometimes uses Hyperion as another name for the sun outright, collapsing father into son.",
    ],
    facts: [
      "Saturn's moon Hyperion is the largest known irregularly shaped body in the solar system and tumbles chaotically, with a rotation nobody can predict more than a few months out.",
      "Keats spent two attempts on an epic about him and abandoned both. The unfinished Hyperion is one of the great fragments in English poetry.",
      "Homer uses Hyperion as a straight epithet for the sun, so in places it is genuinely unclear whether the text means the father or the son.",
    ],
  },

  theia: {
    body: [
      "Theia's domain is the quality of brightness, not its source: Pindar credits her with the value people place on gold, because she is what makes it gleam. The Greeks also believed sight worked by light streaming out of the eyes, which put vision under her too.",
      "By Hyperion she bore the sun, the moon, and the dawn. She is one of the least storied Titans and one of the most structurally important, remove her and the sky has no lights in it.",
    ],
    facts: [
      "Planetary scientists named the Mars-sized body that is thought to have struck the early Earth and thrown off the Moon after her, the mother of the moon, once again.",
      "Pindar addresses her as the reason people prize gold, which makes her the deity of value rather than of the metal.",
    ],
  },

  coeus: {
    body: [
      "Coeus held the northern pillar of heaven, one of four brothers pinning the sky at its corners while their father was held down for Cronus's sickle. His name is tied to questioning and to the axis the heavens turn around.",
      "His daughters by Phoebe are the more famous line: Leto, who bore Apollo and Artemis to Zeus, and Asteria, who threw herself into the sea to become the island of Delos where those twins were born. After the war he went into Tartarus with his brothers.",
    ],
    facts: [
      "The Romans called him Polus, the pole, the axis the sky turns on, which is about as literal as a translation gets.",
      "His name is generally tied to the verb for asking or questioning, making him a Titan of inquiry with not one recorded thing to say.",
    ],
  },

  phoebe: {
    body: [
      "Phoebe is the third owner of the Delphic oracle in Aeschylus's succession: Gaia to Themis to Phoebe to Apollo. Uniquely in this mythology, the transfer is peaceful, she gives it to her grandson as a birthday present, and he takes the name Phoebus from her.",
      "By Coeus she bore Leto and Asteria, which makes her grandmother to Apollo and Artemis on one side and to Hecate on the other. Her prophetic streak runs down the whole line.",
    ],
    facts: [
      "Saturn's moon Phoebe orbits backwards relative to the planet's other moons, which is the giveaway that it was captured rather than formed alongside them.",
      "Apollo takes the epithet Phoebus directly from her, and poets return the favour by calling Artemis Phoebe, a grandmother's name used for both twins.",
      "Aeschylus's peaceful handover of Delphi is almost certainly a piece of political smoothing. The older story, that Apollo took the oracle by killing its guardian serpent, was still being told alongside it.",
    ],
  },

  crius: {
    body: [
      "Crius held the southern pillar of heaven and almost nothing else is told of him directly; his name means the ram, and later writers linked him to the constellation and to the turn of the seasons.",
      "He is in the record mostly as a father. By Eurybia he sired Astraeus, who fathered the winds and the stars; Pallas, whose children are Victory, Strength, Force, and Rivalry; and Perses, father of Hecate. Every one of those descendants outranks him in the stories.",
    ],
    facts: [
      "He has no surviving myth of his own, no cult, and no temple. Everything recorded about him is a genealogy.",
      "His name means ram, which later writers connected to the constellation Aries and the spring point where the sun once crossed the celestial equator.",
    ],
  },

  iapetus: {
    body: [
      "Iapetus held the western pillar and, with his brothers, pinned the sky while Cronus struck. His significance is almost entirely in his children by the Oceanid Clymene, who between them define the human condition.",
      "Prometheus steals fire and is chained to a rock; Atlas is sentenced to hold up the heavens; Epimetheus accepts Pandora and lets loose everything in her jar; Menoetius is blasted into Erebus for sheer arrogance. The Greeks took his name as a byword for mortal shortsightedness, and some traditions make him the direct ancestor of the human race.",
    ],
    facts: [
      "Saturn's moon Iapetus has one hemisphere as dark as asphalt and one as bright as snow, an oddity noticed in 1671, when Cassini could only see it on one side of its orbit.",
      "Some scholars have compared his name to Japheth, one of Noah's sons, on the grounds that both are the ancestor of a branch of humanity. The link is old and unproven.",
      "Greek writers used his name as shorthand for the kind of foolishness that gets you punished, calling someone a son of Iapetus was an insult.",
    ],
  },

  themis: {
    body: [
      "Themis is not law as legislation but law as the order underneath things: the right way to hold an assembly, treat a guest, or approach a god. She held Delphi after Gaia and before Phoebe, and she convenes the divine council in Homer.",
      "By Zeus she bore the Horae, Good Order, Justice, and Peace, and, in Hesiod, the three Moirai who allot every mortal life. She also carried the prophecy that the son of Thetis would surpass his father, which is the warning that kept Zeus away from Thetis and sent her to a mortal instead, and so set up the Trojan War.",
    ],
    facts: [
      "The blindfold on modern statues of Justice is a Renaissance addition. Themis and her Roman counterpart were shown clear-eyed: the point was seeing correctly, not impartially.",
      "In Homer the word themis is a common noun before it is a name, the right way of doing a thing. The goddess is that noun grown a personality.",
      "In Aeschylus she is identified outright with Gaia, which would make the first two owners of the Delphic oracle the same deity under two names.",
    ],
  },

  mnemosyne: {
    body: [
      "Before writing, memory was not nostalgia but infrastructure: the entire inheritance of a people held in trained heads. Mnemosyne is that faculty deified, and the nine Muses she bore to Zeus are the reason a poet can recite an epic he never wrote down.",
      "The underworld had two springs in the mystery traditions, Lethe, which erases you, and Mnemosyne, which lets you keep yourself. Initiates were coached on which one to drink from, which is as high a stake as any Titan holds.",
    ],
    facts: [
      "Mnemonic, amnesia, and amnesty are all built on her name, the last one literally a decision not to remember.",
      "Thin gold leaves buried with initiates of the Orphic mysteries carry instructions for the afterlife: avoid the spring by the white cypress, ask for the cold water flowing from the lake of Memory.",
      "Poets do not say they invented anything. They ask the Muses, her daughters, to remember on their behalf, composition described as recall.",
    ],
  },

  zeus: {
    body: [
      "Zeus was the child Cronus never swallowed. Raised in secret on Crete, he returned to free his siblings, led the ten-year war against the Titans, and drew the sky as his portion when the three brothers cast lots for the world.",
      "His authority is less about strength than about the oath: he guards guest-right, suppliants, and sworn agreements, and the thunderbolt is the sanction behind them. His appetites are just as central to the mythology, a large fraction of this atlas is descended from him, and the resentment of that runs through nearly every story Hera appears in.",
    ],
    facts: [
      "His name descends from the Proto-Indo-European sky father, and the same root gives Latin Jupiter, Sanskrit Dyaus Pita, and the ordinary word deus. It is one of the best-attested words in the language family.",
      "The forty-foot ivory and gold statue of him at Olympia was one of the Seven Wonders. The sculptor Phidias reportedly asked him for a sign of approval and got a thunderbolt through the floor.",
      "Cretans claimed to have his tomb, which struck the rest of the Greek world as blasphemy, an immortal god cannot have one, and gave rise to the proverb that all Cretans are liars.",
    ],
  },

  hera: {
    body: [
      "Hera presides over marriage and legitimate rule, which makes her position genuinely impossible: the institution she guards is violated constantly by the god she is married to. Her mythology is the working out of that contradiction.",
      "She is rarely the aggressor against Zeus directly. Her anger lands instead on his lovers and their children, Leto hounded across the earth, Heracles set impossible labours, Semele tricked into asking to see her lover unveiled. Read straight, she is vindictive; read at all closely, she is the only Olympian holding anyone to the terms.",
    ],
    facts: [
      "The Heraion on Samos was among the first monumental temples in Greece, built to her before anyone had built anything on that scale to Zeus.",
      "The eyes in a peacock's tail are hers. When her hundred-eyed watchman Argus was killed, she moved the eyes onto the bird.",
      "June is named for her Roman counterpart Juno, which is why it has been the marriage month for two thousand years.",
    ],
  },

  poseidon: {
    body: [
      "Poseidon drew the sea in the lots cast between the three brothers, and the ocean's temperament is his: calm to placid one hour, ruinous the next. He is also the earth-shaker, which in an earthquake country made him a god you appeased rather than admired.",
      "He competes and he holds grudges. He lost Athens to Athena and Argos to Hera, and when Odysseus blinded his son Polyphemus he kept the man off his own island for ten years. Horses are his too, he struck a rock and the first one sprang out.",
    ],
    facts: [
      "Linear B tablets from Bronze Age Pylos record more offerings to Poseidon than to Zeus. Before the Olympian order settled, he appears to have been the senior god.",
      "Worshippers drowned horses in springs and the sea for him, one of the few Greek sacrifices that was not eaten afterwards.",
      "In one version he is not swallowed with his siblings at all: Rhea hid him among a flock of lambs and told Cronus she had given birth to a foal.",
    ],
  },

  hades: {
    body: [
      "Hades is not a devil and the underworld is not a hell. He drew the third portion when the brothers divided the cosmos, and he administers it: implacable, literal, and almost never leaving. The Greeks preferred not to say his name at all, calling him Plouton, the wealthy one, for the seeds and metals that come out of the ground.",
      "He appears in remarkably few myths, and almost all of them are about someone trying to get something back out of his kingdom. He grants the request roughly twice, both times with a condition, and both times the condition is broken.",
    ],
    facts: [
      "The name is usually read as the unseen one. It belongs to the god, not the place, calling the underworld Hades is a later shorthand.",
      "Greeks avoided saying it, preferring Plouton, the rich one, on the reasoning that a god of the dead who hears his name might look up. That euphemism is the root inside plutocracy.",
      "He has effectively no temples. Sacrifices to him were made at night, with black animals, and the blood poured into a pit rather than onto an altar.",
    ],
  },

  demeter: {
    body: [
      "Demeter gave agriculture to mortals and holds the whole cultivated world in her keeping. When Hades took Persephone, she searched the earth with torches, refused to let a single seed rise, and brought humanity to the edge of starvation, which is what finally moved Olympus to negotiate.",
      "The settlement returns her daughter for part of the year and keeps her below for the rest, and the earth answers accordingly. At Eleusis she left something else behind: initiation rites promising the dead a better portion, kept secret so successfully that we still don't know what happened inside.",
    ],
    facts: [
      "Revealing what happened at the Eleusinian Mysteries carried the death penalty. Alcibiades was condemned in absentia for performing them at a party, and in a thousand years of initiates nobody wrote down the secret.",
      "Initiates broke their fast with kykeon, barley, water, and pennyroyal. Several modern scholars have wondered aloud about ergot in the barley.",
      "Cereal comes from Ceres, her Roman name, by way of the grain itself.",
    ],
  },

  hestia: {
    body: [
      "Hestia was the first child Cronus swallowed and the last he brought back up, which makes her both the eldest and the youngest of her siblings. She swore off marriage, refused both Poseidon and Apollo, and took the hearth as her portion instead.",
      "She has almost no myths, and that is the point: she does not leave. Every household fire and every civic hearth is hers, she takes the first and last offering at any sacrifice, and in some tellings she gives up her Olympian seat to Dionysus rather than argue about it.",
    ],
    facts: [
      "She received the first and last libation at every feast, which produced the proverb start from Hestia, begin at the beginning.",
      "Greek colonists carried fire from their mother city's public hearth to light the new one, making her the physical link between a city and its founders.",
      "Rome took the practice literally: the Vestal Virgins tended a flame that was not allowed to go out, and letting it die was punished as a state emergency.",
    ],
  },

  athena: {
    body: [
      "Zeus swallowed the Titaness Metis to forestall a prophecy, and some months later a splitting headache produced Athena, grown and armoured. She is her father's favourite and the only god permitted to handle the aegis and the thunderbolt.",
      "The line between her and Ares is the line between strategy and slaughter. She backs the clever survivor, Odysseus, Perseus, Heracles, and where Ares gives battle its noise, she gives it its plan. Off the field she owns weaving, pottery, shipbuilding, and the olive: the crafts that hold a city together.",
    ],
    facts: [
      "The Parthenon is named for her title Parthenos, the maiden. Every four years Athens wove her a new robe and carried it to the Acropolis on a ship-shaped cart.",
      "Athenian silver coins carried her owl, and were so widely trusted across the Mediterranean that they were simply called owls. Bringing owls to Athens is the older version of coals to Newcastle.",
      "She and the city share a name, and no ancient source can say which came first.",
    ],
  },

  apollo: {
    body: [
      "Born on Delos alongside his twin Artemis, Apollo took Delphi by killing the serpent Python that held it, and the oracle there spoke for him for the next thousand years. Its two maxims, know thyself, nothing in excess, are as close as Greek religion comes to a creed.",
      "He is the most civilised Olympian and among the most dangerous. The same bow that opens the Iliad by raining plague on the Greek camp belongs to the god of healing, and his pursuits end badly with grim regularity: Daphne becomes a laurel, Cassandra is given true prophecy and the curse of never being believed.",
    ],
    facts: [
      "He is the one major Greek god the Romans did not rename. Apollo is Apollo in both languages.",
      "The Pythia delivered her prophecies from a tripod over a chasm. Geologists surveying the site in the 1990s found faults releasing ethylene, a sweet-smelling gas that produces trance states.",
      "NASA named the moon programme after him because the image of the god riding his chariot across the sky suited a journey, which makes him the only Olympian with a landing site.",
    ],
  },

  artemis: {
    body: [
      "Artemis asked her father for eternal maidenhood, a bow, and the mountains, and got all three. Born first of the twins, she is said to have helped her mother deliver Apollo, which is why women in labour prayed to a goddess who would never bear a child.",
      "Her wilderness is not scenery, it is jurisdiction, and the penalties are exact. Actaeon saw her bathing and was turned into a stag for his own hounds to bring down; Agamemnon killed a stag in her grove and paid for the wind to Troy with his daughter.",
    ],
    facts: [
      "The Temple of Artemis at Ephesus was one of the Seven Wonders. A man burned it down in 356 BC purely to be remembered for it; the Ephesians banned anyone from recording his name, which is how we know it was Herostratus.",
      "Athenian girls served a term at her sanctuary at Brauron before marriage, in saffron robes, in a rite described as playing the bear.",
      "The Ephesian version of her is covered in dozens of rounded protuberances that scholars have identified as breasts, eggs, bulls' testicles, or amber gourds. There is still no agreement.",
    ],
  },

  ares: {
    body: [
      "Ares is what fighting feels like rather than what winning takes, and the poets treat him accordingly. Zeus tells him to his face that he is the most hateful of the gods, and Athena beats him twice in the Iliad, once by guiding a mortal's spear into him, after which he flees to Olympus bellowing.",
      "His long affair with Aphrodite produced Harmonia and Phobos and Deimos, Fear and Rout, which is about as neat as mythology gets. Rome recast him entirely: as Mars he becomes a disciplined founding father, which tells you more about Rome than about him.",
    ],
    facts: [
      "The Areopagus, the hill in Athens where homicide trials were heard, is named for him, it is where he was tried, and acquitted, for killing a son of Poseidon.",
      "The moons of Mars are Phobos and Deimos, Fear and Rout, named for the sons who drive his chariot.",
      "He had almost no cult in Greece proper. Sparta, the state you would expect to lead the worship, gave the honours to Athena instead.",
    ],
  },

  aphrodite: {
    body: [
      "Hesiod gives her the older and stranger birth: Cronus throws Uranus's severed genitals into the sea, foam gathers around them, and she steps ashore at Cyprus full-grown, a goddess with no generation above her. Homer flattens it to a daughter of Zeus and Dione. Both versions were told side by side for centuries, and the atlas keeps both edges rather than choosing.",
      "Her power is compulsion, and it is not gentle. She is married to Hephaestus, sleeps with Ares, and the bribe she offers Paris, the most beautiful woman alive, already married, is the spark that burns Troy down.",
    ],
    facts: [
      "Hesiod derives her name from aphros, foam, to fit the birth he gives her. Linguists consider this a folk etymology and suspect the name is not Greek at all, arriving with the goddess from the Near East.",
      "Sparta worshipped her armed, as Aphrodite Areia, and Cyprus had a bearded version. The pure love goddess is a later simplification.",
      "Her girdle compels desire in whoever sees the wearer. Hera borrows it in the Iliad to distract Zeus from the battlefield, and it works exactly as advertised.",
    ],
  },

  hephaestus: {
    body: [
      "Hephaestus was flung from Olympus, in one telling by Hera for being born imperfect and in another by Zeus for taking her side in a quarrel. He fell for a full day, and the limp is permanent. He is the one Olympian who is visibly not beautiful, in a pantheon that otherwise treats beauty as a birthright.",
      "Everything of consequence in the mythology comes out of his forge: Zeus's thunderbolts, Achilles's shield, Hermes's winged sandals, the chains that hold Prometheus. His revenge is engineering too, a golden throne that trapped his mother until she acknowledged him, and an invisible net that caught Ares and Aphrodite in bed for the gods to come and laugh at.",
    ],
    facts: [
      "The Hephaisteion above the Athenian agora is the best-preserved Doric temple anywhere, largely because it spent a thousand years as a church.",
      "In the Iliad he is attended by golden handmaidens with sense, speech, and strength in them, mechanical servants written down in the eighth century BC.",
      "Lemnos was the island he landed on, and it stayed his cult centre. Once a year every fire on the island was put out and new flame was brought in by ship.",
    ],
  },

  hermes: {
    body: [
      "He stole Apollo's cattle on the day he was born, walked them backwards to confuse the trail, invented the lyre from a tortoise shell, and talked his way out of the charge by handing over the instrument. Apollo, who could not stay angry at something that good, gave him the herd.",
      "That range is the god: patron of merchants and of the thieves who rob them, of heralds and of liars, of boundary stones and of everyone who crosses them. As psychopomp he walks the dead down to Hades, the one crossing nobody else in the pantheon is willing to make routinely.",
    ],
    facts: [
      "Athenian doorways and crossroads were marked with herms, square pillars with his head on top and an erect phallus on the front. When they were all vandalised in one night in 415 BC, the city treated it as a coup attempt.",
      "The word hermetic comes to us through Hermes Trismegistus, a Greco-Egyptian fusion of Hermes and Thoth, by way of the sealed vessels of alchemy.",
      "His caduceus, two snakes around a winged staff, is not a medical symbol. The rod of Asclepius has one snake and no wings, and the swap is a nineteenth-century American mistake that never got corrected.",
    ],
  },

  dionysus: {
    body: [
      "Hera tricked his mother Semele into asking Zeus to appear undisguised, and the sight killed her; Zeus sewed the unborn child into his own thigh and carried him to term. Born of a mortal woman and gestated by a god, Dionysus arrives at Olympus from outside and is the last to be given a seat.",
      "What he offers is release from being yourself, and it cuts both ways. The same god gives Athens the theatre and drives the women of Thebes onto the mountain to tear a king apart with their hands. Rulers who refuse him don't stay rulers.",
    ],
    facts: [
      "His name appears on Linear B tablets centuries before Homer, which quietly ruins the standard story that he was a late foreign import.",
      "Athenian tragedy was staged as a festival for him. The word tragedy means goat song, and nobody is certain why.",
      "Rome eventually panicked about his rites. The Senate's decree of 186 BC restricting the Bacchanalia survives on a bronze tablet.",
    ],
  },

  persephone: {
    body: [
      "She was gathering flowers when the ground opened and Hades took her. Her mother's search stopped the harvest outright, and the terms Olympus finally struck depended on a technicality: she had eaten in the underworld, six pomegranate seeds, and anyone who eats there belongs there in part.",
      "So she splits the year, and the earth splits with her. What is easy to miss is the second half of the story, below, she is not a captive but a sovereign, and in the myths where mortals come asking for the dead back, it is often Persephone who decides.",
    ],
    facts: [
      "She is usually called Kore, simply the girl, when she is above ground, and Persephone below. The two names are almost two beings.",
      "Her name has no accepted Greek etymology and appears in a dozen spellings across dialects, a sign the word came from somewhere else.",
      "Lead curse tablets addressed to her have been dug up all over the Greek world, folded, pierced with nails, and dropped into graves. She was the one you took your grievances to.",
    ],
  },

  typhon: {
    body: [
      "Gaia bore Typhon against the Olympians after they put down the Titans: a thing tall enough to scrape the stars, with a hundred serpent heads and a voice that ran through every sound a god or animal can make. He drove the whole pantheon into Egypt in animal disguise, and in one telling cut the sinews out of Zeus's hands and feet and hid them in a cave.",
      "Zeus got his strength back, ran him down with thunderbolts, and dropped Mount Etna on him. He is still under it, the eruptions are his. Almost everything in this section of the atlas is descended from him.",
    ],
    facts: [
      "His name is often linked to typhoon. The connection is probably wrong, the English word came through Arabic and Chinese, but it has been repeated so long it now works both ways.",
      "Etna erupted in 396 BC in a way that stopped a Carthaginian army from reaching Syracuse, which nobody at the time read as a coincidence.",
      "The gods fleeing into Egypt disguised as animals was a Greek explanation for why Egyptian gods have animal heads.",
    ],
  },

  echidna: {
    body: [
      "Hesiod puts her in a cave under the earth, deathless and ageless, fair-cheeked above the waist and a vast mottled snake below. She does not raid, curse, or bargain; she is in the mythology almost entirely as a source.",
      "The list of her children is the list of the great labours: Cerberus, the Hydra, the Chimera, the Sphinx, the Nemean Lion, Orthrus. Kill one and you are a hero; she simply produced them.",
    ],
    facts: [
      "The egg-laying, spine-covered echidna of Australia is named for her, on the reasoning that a mammal that lays eggs is two creatures at once.",
      "Hesiod calls her deathless and ageless for all her days, so she is presumably still down there.",
      "Different sources give her four different sets of parents. Nobody could agree where a thing like that would come from.",
    ],
  },

  medusa: {
    body: [
      "Her sisters Stheno and Euryale were born monstrous and immortal; Medusa was neither. Ovid's version is the one that stuck: a beautiful priestess of Athena, assaulted by Poseidon in the goddess's own temple, and turned by Athena into the thing whose face no one can meet.",
      "Perseus took her head with a mirrored shield, winged sandals, and the Helm of Darkness, a hunt equipped almost entirely by the gods. Pegasus and Chrysaor sprang from her neck, and the head went on working: Perseus used it as a weapon, then gave it to Athena, who wore it on the aegis.",
    ],
    facts: [
      "Her face was painted on shields, city walls, ovens, and roof tiles as a ward. Turning the killing stare outward to protect the thing behind it is one of the oldest tricks in Greek visual thinking.",
      "The free-swimming stage of a jellyfish is called a medusa, after the tentacles.",
      "In the earliest art she is not beautiful at all, a broad grinning face with tusks and a lolling tongue. The tragic beauty is a Hellenistic and Roman development, roughly six centuries later.",
    ],
  },

  cerberus: {
    body: [
      "Cerberus lets the dead in and never lets them out, which is the whole of his job description and the reason he is more a mechanism than a character. Heracles took him for the twelfth labour on the condition that he use no weapons, wrestled him down bare-handed, hauled him up to be gawked at, and returned him.",
      "The other way past him is music. Orpheus put all three heads to sleep with the lyre; the Sibyl who guides Aeneas simply throws a drugged honeycake. For a guardian of the absolute boundary, he is remarkably often got round.",
    ],
    facts: [
      "The Greeks buried honey cakes with their dead. One reading is that they were fare for the ferryman; another is that they were for the dog.",
      "The number of heads is not fixed. Hesiod gives him fifty, Pindar a hundred, and the familiar three only settles in later.",
      "His name may come from a word meaning spotted, which would make the guardian of the underworld a dog called Spot.",
    ],
  },

  hydra: {
    body: [
      "The Hydra lived in the marshes of Lerna, and Heracles's second labour turned into a lesson about the wrong method: every head he crushed came back doubled. The fix was his nephew Iolaus with a torch, searing each stump before it could regrow, and the one immortal head buried under a rock.",
      "Killing it was not the end of it. Heracles dipped his arrows in the blood, and that venom goes on to kill Chiron, Nessus, and, through the poisoned shirt Nessus leaves behind, Heracles himself. Of all the monsters, this is the one that wins in the long run.",
    ],
    facts: [
      "Hydra is the largest of the eighty-eight constellations, sprawling across a quarter of the sky.",
      "Linnaeus named the freshwater polyp Hydra after her, because cutting one in pieces produces several living animals.",
      "Eurystheus disallowed the labour on the grounds that Heracles had help, which is why twelve labours were assigned rather than ten.",
    ],
  },

  chimera: {
    body: [
      "Homer describes it in three words that later writers never improved on: lion, goat, serpent, breathing fire. It ravaged Lycia until Bellerophon was sent to kill it, a posting everyone involved understood as a death sentence.",
      "He did it from the air on Pegasus, out of reach of the flame, and finished it by putting a lead-tipped spear into its mouth to melt down its throat. Then he tried to ride Pegasus up to Olympus, and Zeus put a stop to that with a single gadfly.",
    ],
    facts: [
      "The word became a technical term twice over, for a fanciful impossibility, and in biology for a single organism carrying two distinct sets of DNA.",
      "The flames of Yanartaş still burn out of the rock on the Lycian coast where the myth places her, fed by seeping methane. They have been alight for at least two and a half thousand years.",
      "The Chimera of Arezzo, an Etruscan bronze dug up in 1553, is one of the finest surviving pieces of pre-Roman Italian sculpture, and Cosimo de' Medici had it in his study.",
    ],
  },

  sphinx: {
    body: [
      "Lion-bodied, eagle-winged, and pitiless, she held the road into Thebes and put the same riddle to every traveller: what walks on four legs in the morning, two at noon, and three in the evening. Wrong answers were strangled and eaten, her Greek name means the strangler.",
      "Oedipus answered 'man', and she threw herself from the rock. Which solves Thebes's problem and starts his: the reward for the answer is the crown and the widowed queen, and the queen is his mother.",
    ],
    facts: [
      "The Greek sphinx is female, winged, and murderous. The Egyptian one is male, wingless, and stationary. The Greeks borrowed the shape and changed everything else.",
      "Sophocles never states the riddle in Oedipus the King. Every audience already knew it, so the play only refers to it.",
      "Later sources give her a second riddle for anyone who solved the first: two sisters, each giving birth to the other. The answer is day and night.",
    ],
  },

  scylla: {
    body: [
      "In the older tellings she was a nymph, turned into this by a jealous rival poisoning the pool she bathed in: six long necks, each with a head of three rows of teeth, and a girdle of barking dogs at the waist. She cannot be fought, only passed.",
      "Circe's advice to Odysseus is the whole of the myth, steer for Scylla, not Charybdis, and row hard, because six dead is better than everyone. He does it, and the six men calling his name as they go up the cliff is the sight he says he never got over.",
    ],
    facts: [
      "Between Scylla and Charybdis is still the standard phrase for a choice with no good option, and predates caught between a rock and a hard place by about three thousand years.",
      "Both are traditionally located in the Strait of Messina, where a real tidal whirlpool called Garofalo forms, impressive enough to worry a small wooden ship, and nothing like the myth.",
      "Homer never explains where she came from. The story of the jealous rival poisoning her bath is Ovid's, written seven centuries later.",
    ],
  },

  charybdis: {
    body: [
      "A daughter of Poseidon and Gaia who flooded too much land for Zeus's liking and was thrown into the sea as a whirlpool. She sucks the water down three times a day and vomits it back up, and anything on the surface goes with it.",
      "Scylla costs six men; Charybdis costs the ship. That asymmetry is why the phrase survives as a name for a choice between two bad outcomes, and Odysseus meets her twice, escaping the second time by clinging to a fig tree over the vortex until his raft comes back up.",
    ],
    facts: [
      "Homer has her swallow and disgorge three times a day, which reads as a description of a tide seen by people who had never needed to explain one.",
      "She is barely a character. Homer gives her no face, no voice, and no motive, she is a hazard with a name.",
    ],
  },

  "nemean-lion": {
    body: [
      "It hunted the valley of Nemea from a cave with two entrances, and the pelt turned every weapon Heracles had. He blocked one mouth of the cave, went in the other, and strangled it with his hands, losing a finger to it in some tellings.",
      "The problem after that was skinning something no knife could cut. Athena's advice was to use the lion's own claws, and the pelt became the hide Heracles wears for the rest of his life: the reason he is recognisable in every vase painting, and armour nothing could pierce.",
    ],
    facts: [
      "The constellation Leo is traditionally identified as the lion, set in the sky after the labour.",
      "The Nemean Games, one of the four great Panhellenic festivals alongside the Olympics, were held on the site and traced their founding to the story.",
      "Some traditions have it fall from the moon, which would explain a hide no earthly weapon could cut.",
    ],
  },

  sirens: {
    body: [
      "Daughters of the river Achelous and one of the Muses, they are birds with women's faces, the mermaid came much later. What they offer is not seduction but knowledge: they call to Odysseus by name and promise to tell him everything that happened at Troy, and everything that will happen on the earth. Nobody who wants to know refuses.",
      "Circe's instructions are the standard answer, wax in the crew's ears, and the captain lashed to the mast so he can hear it and survive it. Orpheus solved it differently on the Argo by simply playing louder, and one Siren threw herself into the sea. In some tellings the whole flock is fated to die the first time a ship gets past.",
    ],
    facts: [
      "They are birds with women's heads in every Greek depiction. The fish tail arrives in the Middle Ages, and Romance languages still use the word for mermaid, sirena, sirène.",
      "The emergency siren is named after them, by way of an acoustic instrument built in 1819 that could sound underwater.",
      "Homer never says how many there are. Two, three, and four all appear in later sources, and the vases mostly show three.",
    ],
  },

  harpies: {
    body: [
      "Granddaughters of Oceanus through Thaumas and the Oceanid Electra, the Harpies are the personified squall: when someone vanished and no body turned up, the Harpies had taken them. Hesiod describes them as fair-haired and faster than birds or winds, which is a long way from the later carrion-hags.",
      "Their set piece is the punishment of Phineus, a blind seer who told mortals too much of the future. Every time food was set in front of him they seized it and fouled the rest, so that he starved in sight of a full table, until the Argonauts arrived and the two winged sons of the North Wind, the only crewmen who could match them for speed, chased them off for good.",
    ],
    facts: [
      "The harpy eagle of Central and South America is named for them, the largest eagle in the Americas, and one that hunts monkeys out of the canopy.",
      "The Harpy Tomb from Xanthos, now in the British Museum, shows winged female figures carrying off small human forms. Whether they are Harpies or Sirens has been argued for two centuries.",
      "In Hesiod they are lovely-haired and swift as the wind. The hideous filth-spreading version comes from Virgil, and it is Virgil's that stuck.",
    ],
  },

  minotaur: {
    body: [
      "Poseidon sent Minos a white bull to sacrifice; Minos kept it. The god's answer was to make Pasiphaë, the queen, desire the animal, and the child of that was Asterion, the Minotaur. Minos hid him in a labyrinth built by Daedalus and levied seven Athenian youths and seven maidens as tribute to feed him.",
      "Theseus volunteered for the third tribute. Ariadne, Minos's daughter, gave him a ball of thread to keep the way back, and he killed her half-brother in the dark at the centre of the maze. Nothing in the story is the Minotaur's doing; every decision that produced him was made by someone else.",
    ],
    facts: [
      "His actual name is Asterion, the starry one. Minotaur is a description, the bull of Minos, not a name.",
      "Labyrinth is often derived from labrys, the Minoan double axe, whose symbol is carved all over the palace at Knossos. The real palace has around 1,300 interconnected rooms.",
      "Frescoes at Knossos show young men and women vaulting over the horns of charging bulls, which is either the origin of the tribute story or a very large coincidence.",
    ],
  },

  polyphemus: {
    body: [
      "Odysseus and twelve men walked into his cave uninvited, and Polyphemus rolled a boulder across the entrance and started eating them two at a time. The escape is the most famous trick in Homer: wine, a sharpened olive stake through the eye, and a name, Nobody, so that when the other Cyclopes ask who is hurting him, the answer sends them home.",
      "It comes apart because Odysseus cannot resist shouting his real name from the departing ship. Polyphemus prays to his father, and Poseidon spends the rest of the Odyssey answering. Later poets soften him into a lovesick giant singing at the sea-nymph Galatea, which is a hard read against the cave.",
    ],
    facts: [
      "The trick turns on a pun that only works in Greek: Outis means Nobody, but under negation it shifts to mē tis, which sounds exactly like mētis, cunning.",
      "The Polyphemus moth is named for the single large eyespot on each hindwing.",
      "One long-running suggestion is that the Cyclops began with dwarf elephant skulls, common in Mediterranean caves, whose central nasal cavity looks unmistakably like one huge eye socket.",
    ],
  },

  heracles: {
    body: [
      "Hera hated him from birth for whose son he was, and sent the madness in which he killed his own wife and children. The twelve labours are the penance: the lion, the Hydra, the boar, the stables, the belt, the cattle, the apples, and finally Cerberus, hauled up from the underworld and brought back.",
      "He is the least subtle hero and the most enduring, solving problems by being stronger than them, and losing every domestic situation he is ever in. The end comes from a shirt soaked in the Hydra's venom, given to his wife by a dying centaur as a false love-charm. Burning on the pyre, the mortal part goes and the rest is taken up to Olympus, the only mortal in this atlas who crosses over.",
    ],
    facts: [
      "His name means glory of Hera, named for the goddess who spent his whole life trying to kill him. Ancient writers found this as strange as we do.",
      "The Pillars of Heracles are the rocks flanking the Strait of Gibraltar, set up by him to mark the edge of the known world.",
      "He is the most commonly depicted figure in all Greek art. If a vase has a man in a lion skin on it, no further identification was thought necessary.",
    ],
  },

  perseus: {
    body: [
      "Shut in a chest with his mother and thrown into the sea as an infant, Perseus grew up on Seriphos under a king who wanted Danaë and wanted her son out of the way. The Gorgon's head was supposed to be a fatal errand; Athena and Hermes turned it into an outfitting.",
      "He came back with it and used it, on a sea monster to save Andromeda, and on the king. The prophecy that had put him in the chest still landed: years later he threw a discus at a games and killed his grandfather in the crowd, exactly as foretold.",
    ],
    facts: [
      "The Perseid meteor shower every August radiates from his constellation, which is why they are his.",
      "Algol, the star marking Medusa's head, dims noticeably every 2.87 days because it is an eclipsing binary. Its Arabic name means the ghoul, and cultures with no contact with each other flagged that star as ominous.",
      "He was claimed as the founder of Mycenae, which makes the great Bronze Age citadel of Greek legend his city rather than Agamemnon's by origin.",
    ],
  },

  theseus: {
    body: [
      "He grew up not knowing his father, lifted the rock hiding Aegeus's sword and sandals, and took the bandit-infested land road to Athens rather than the safe crossing. When the third tribute of youths was levied for Crete, he put himself on the ship.",
      "Ariadne's thread got him out of the labyrinth; he abandoned her on Naxos on the way home, and then forgot to change the black sail for a white one. Aegeus, watching from the cliff, saw black and threw himself into the sea that carries his name. Theseus went on to unify Attica, which is why Athens claimed him.",
    ],
    facts: [
      "The Athenians preserved his ship for centuries, replacing planks as they rotted, which produced the oldest identity puzzle in philosophy: at what point is it no longer the same ship.",
      "Cimon brought a set of large bones back from Skyros in 476 BC and Athens received them as Theseus's, with a festival and a shrine. It was a political act as much as a religious one.",
      "He is credited with the synoikismos, the merging of Attica's villages into one state, an event that actually took centuries, compressed into one king's decision.",
    ],
  },

  bellerophon: {
    body: [
      "Falsely accused by a queen he refused, he was sent to Lycia carrying a sealed letter asking the king to kill him. The king, unwilling to murder a guest, assigned him the Chimera instead. Athena gave him a golden bridle in a dream, he caught Pegasus at the spring, and killed the thing from above.",
      "He survived every trap set for him and could not survive success. Convinced he had earned a seat among the gods, he flew Pegasus at Olympus; Zeus sent a single gadfly, the horse bucked, and he fell. He spent the rest of his life lamed and blind, avoiding the paths of men, the standing Greek illustration of what happens when a mortal forgets the scale of things.",
    ],
    facts: [
      "A message that instructs the recipient to harm the person delivering it is still called a Bellerophontic letter.",
      "He is one of the very few Greek heroes with no divine parent in the standard account, which makes the attempt on Olympus even more presumptuous.",
      "Homer's Iliad has him but not Pegasus. The winged horse only joins the Chimera story in later sources.",
    ],
  },

  jason: {
    body: [
      "Sent for the Golden Fleece by an uncle who expected him to die trying, Jason built the Argo and crewed it with nearly every hero of the generation. The voyage is the great ensemble story: clashing rocks, harpies, the bronze giant Talos.",
      "Almost nothing at Colchis is his own doing. Medea, the king's daughter, drugs the sleepless serpent, hands him the trick for the fire-breathing bulls, and kills her own brother to cover the escape. Then he sets her aside for a better marriage, and she takes the children. He dies years later, alone, when a beam of the rotting Argo falls on him.",
    ],
    facts: [
      "Argo Navis, once the largest constellation in the sky, was broken up in the eighteenth century into Carina, Puppis, and Vela, the keel, the stern, and the sails.",
      "He arrives at his uncle's court wearing one sandal, having lost the other carrying an old woman across a river. The old woman was Hera, and the prophecy the king feared named a man with one shoe.",
      "The paper nautilus is called the argonaut because it was believed to sail on the surface using two membranous arms as sails. It does not, but the name held.",
    ],
  },

  odysseus: {
    body: [
      "The wooden horse is his idea, and the war ends because of it. The journey back takes as long as the siege did: the Cyclops, the lotus, Circe, the underworld, the Sirens, Scylla and Charybdis, seven years held by Calypso. Every crewman dies; he keeps going.",
      "His defining flaw is the same as his gift, he cannot resist a good exit line, and shouting his real name at the blinded Polyphemus is what puts Poseidon on him for a decade. He comes home alone, in disguise, and takes back his house by winning an archery contest with his own bow.",
    ],
    facts: [
      "The word odyssey now means any long eventful journey, in every European language.",
      "The Odyssey offers its own etymology for his name, tying it to a verb meaning to cause or suffer pain, the man of wrath, or the man people are angry at, depending how you take it.",
      "His nurse recognises him after twenty years by a scar on his thigh, and Homer stops the entire scene to tell the story of the boar that made it. Auerbach built a famous essay on that digression.",
    ],
  },

  achilles: {
    body: [
      "Son of the sea-nymph Thetis, dipped as an infant in the Styx and left vulnerable only where she held him. The prophecy his mother carried was Themis's: any son of hers would surpass his father, which is why the gods married her to a mortal.",
      "The Iliad opens on his rage, not at Troy but at Agamemnon, over a prize of honour, and he withdraws while the Greeks are slaughtered. What brings him back is Patroclus's death, and what follows is the most brutal stretch in the poem. The poem ends not with his death but with him giving Hector's body back to an old man who came to beg for it.",
    ],
    facts: [
      "The Achilles tendon was named after him in the 1690s. The anatomy came second, the heel was already the byword.",
      "Homer never mentions the heel or the dipping in the Styx. In the Iliad he can be wounded anywhere; the invulnerability arrives with Roman poets a thousand years later.",
      "The first word of the Iliad is his rage. The poem announces its subject as an emotion rather than a war.",
    ],
  },

  aeneas: {
    body: [
      "A secondary figure in Homer, a Trojan captain his mother Aphrodite keeps rescuing, and the central one in Virgil, where the Greeks' victory becomes the first chapter of Rome's founding. He escapes the sack carrying Anchises and the household gods, having lost his wife in the smoke.",
      "Virgil's word for him is pius, which means duty rather than devotion, and it costs him everything he might have wanted. He leaves Dido in Carthage because he is told to, and she burns herself on a pyre cursing his descendants, which is one poet's account of why Rome and Carthage could never share a world.",
    ],
    facts: [
      "Julius Caesar's family claimed descent from him through his son Iulus, which made Venus an ancestor of the emperors and the Aeneid a document with a stake in current politics.",
      "Virgil died with the poem unfinished and asked for it to be burned. Augustus overruled the will.",
      "Around sixty lines in the Aeneid stop mid-sentence. They were left as they were.",
    ],
  },

  orpheus: {
    body: [
      "Son of the Muse Calliope, he played well enough to move rivers and put the Sirens out of business when he sailed with the Argonauts. When Eurydice died of a snakebite he walked into the underworld and asked for her back, and his song was good enough that Hades granted it.",
      "The condition was that he not look at her until both were in the light. He held out the whole way up and turned at the threshold. Afterwards he wandered Thrace refusing all company and was torn apart by maenads; his head floated down the river still singing. The mystery cult that took his name promised its initiates a better route through the place he had been.",
    ],
    facts: [
      "A religious movement took his name and taught reincarnation, personal purity, and vegetarianism, deeply unusual positions in a culture built around animal sacrifice.",
      "Monteverdi's L'Orfeo of 1607 is among the first operas still performed. The form's founding subject was a man whose singing could stop the dead.",
      "The constellation Lyra is his lyre, placed in the sky by the Muses after his death. Vega, its brightest star, is one of the brightest in the northern sky.",
    ],
  },

  atalanta: {
    body: [
      "Her father left her on a mountain because he wanted a son; a she-bear sent by Artemis nursed her and hunters raised her. She drew first blood on the Calydonian Boar when a field of famous men could not, and the argument over giving a woman the trophy killed several of them.",
      "Pressed to marry, she set the terms: outrun her or die. Hippomenes prayed to Aphrodite, got three golden apples, and dropped them one at a time to break her stride. The marriage ended with both of them turned into lions for offending a god in a sanctuary, a punishment that, in the versions where lions were believed unable to mate with each other, was the point.",
    ],
    facts: [
      "Whether she sailed with the Argonauts depends on the source. Apollodorus lists her; Apollonius has Jason refuse her, worried about what one woman among that crew would do to it.",
      "She is one of very few figures in Greek myth to beat men at their own contests repeatedly and openly, and the only way anyone finds to stop her is a trick.",
      "Her son Parthenopaeus is one of the Seven Against Thebes, which puts her descendants in the next great cycle of stories.",
    ],
  },

  oedipus: {
    body: [
      "Given a prophecy that he would kill his father and marry his mother, he left the parents he knew to avoid it, not knowing they had adopted him. On the road he quarrelled with an old man at a crossroads and killed him. Then he answered the Sphinx, freed Thebes, and was given the crown and the widowed queen as the reward.",
      "Sophocles's play is not about the crime but about the investigation: a plague forces him to find the old king's killer, and every witness he calls tightens the case against himself. Jocasta hangs herself; he puts out his own eyes with the pins from her dress. He had the sharpest mind in Thebes and it only ever ran him faster toward the thing he was fleeing.",
    ],
    facts: [
      "Freud named the complex in 1899, and the play has been read through him ever since, despite Sophocles's Oedipus doing everything possible to avoid the fate rather than desiring it.",
      "His name means swollen foot, from the pin driven through his ankles when he was exposed as an infant. He carries the evidence of his own story around with him and never reads it.",
      "Sophocles wrote a sequel in his late eighties. Oedipus at Colonus, in which the old man dies and becomes a protective spirit of Athens, was staged after his death.",
    ],
  },

  cadmus: {
    body: [
      "Sent after Europa with orders not to come back without her, Cadmus gave up and asked Delphi what to do. Follow a particular cow, he was told, and build where she lies down. The spring there was guarded by a serpent sacred to Ares; he killed it, sowed its teeth on Athena's advice, and armed men grew out of the ground and fought until five were left. Those five founded Thebes with him.",
      "The Greeks also credited him with bringing them the alphabet from Phoenicia. His reward for the serpent was a term of servitude to Ares and marriage to Harmonia, daughter of Ares and Aphrodite, and a family line that produced Semele, Actaeon, Pentheus, and eventually Oedipus. In old age the two of them were turned into serpents, which he had asked for.",
    ],
    facts: [
      "A Cadmean victory is one that costs the winner as much as losing would have, from the sown men who killed each other until five were left.",
      "The element cadmium is named, at several removes, after him: it was found in the zinc ore cadmia, which took its name from him by way of Thebes.",
      "Greeks called their letters Phoenician letters and credited him with bringing them. Modern scholarship agrees the alphabet came from Phoenicia, making this one of the few myths that turned out to be reporting.",
    ],
  },

  chiron: {
    body: [
      "The other centaurs are drunks and brawlers; Chiron is their opposite, and his parentage explains it, he is Cronus's son, not of the same stock as the rest, which makes him half-brother to Zeus and his siblings. He lived in a cave on Pelion and taught medicine, hunting, music, and prophecy to Asclepius, Jason, Actaeon, and Achilles.",
      "The end of him is the cruellest accident in the mythology. Heracles, visiting during the boar labour, loosed an arrow into a scuffle and caught Chiron with Hydra venom, a wound that could not kill him, because he was immortal, and could not be healed either. He gave his immortality away to free Prometheus and was allowed to die, and Zeus set him in the sky as Sagittarius.",
    ],
    facts: [
      "The first object discovered in the belt between Saturn and Uranus was named 2060 Chiron, and the entire class of bodies out there is now called centaurs.",
      "He is the standard illustration of the wounded healer, the physician whose own injury cannot be cured, a phrase Jung borrowed and analysts still use.",
      "Some traditions set him in the sky as Sagittarius; others insist Sagittarius is a different centaur entirely and give Chiron the Centaurus constellation.",
    ],
  },

  hector: {
    body: [
      "Eldest son of Priam and the wall the city actually stood behind. He knows the war is Paris's fault, says so, and fights it anyway. The scene that fixes him is domestic: he reaches for his baby son on the ramparts, the child screams at the horsehair crest, and both parents laugh before he goes back out.",
      "He kills Patroclus wearing Achilles's armour, which is the mistake that ends him. Achilles runs him three times around the walls, kills him in front of his family, and drags the body behind a chariot for twelve days. The Iliad, a poem told by Greeks, closes not on their victory but on Hector's funeral.",
    ],
    facts: [
      "To hector, meaning to bully or browbeat, comes from his name by way of seventeenth-century London gangs who called themselves Hectors. The word turned on the man.",
      "He is the only major figure in the Iliad shown at home with his wife and child, which is generally read as the poem deliberately making Troy's loss cost something.",
      "The poem ends with his funeral, not with Achilles or the fall of the city. A Greek audience was left on a Trojan's grave.",
    ],
  },

  daedalus: {
    body: [
      "An Athenian craftsman exiled for killing his nephew, a boy whose invention of the saw looked like outgrowing him, Daedalus took service with Minos on Crete. He built the labyrinth to hold the Minotaur, and then told Ariadne about the thread, which is the whole reason Theseus walks back out of it.",
      "Minos shut him and Icarus in the maze for that. He made wings of feathers and wax, warned his son to fly neither low enough for the spray nor high enough for the sun, and watched him do exactly the second thing. Everything he builds works perfectly and costs him someone.",
    ],
    facts: [
      "Daedal survives in English as an adjective for something intricately made, and Joyce named his alter ego Stephen Dedalus after him, the artificer, the maker of wings.",
      "The stretch of the Aegean where his son came down is still called the Icarian Sea, and the nearby island is Ikaria.",
      "The story does not end at the flight. He reached Sicily, and when Minos came hunting him with a riddle, thread this spiral shell, he solved it, which gave him away and got Minos killed in a bath by the local king's daughters.",
    ],
  },
};

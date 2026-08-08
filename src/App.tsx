import { Button } from "@/components/ui/button"

// Placeholder until Phase 2 lands the real data model. This page exists to
// exercise every token in index.css — delete it once routes are in.
const SAMPLES = [
  { category: "god", name: "Zeus", epithet: "King of the Gods" },
  { category: "hero", name: "Perseus", epithet: "Slayer of Medusa" },
  { category: "titan", name: "Cronus", epithet: "Lord of Time" },
  { category: "monster", name: "Medusa", epithet: "The Gorgon" },
] as const

function App() {
  return (
    <>
      <header className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-(image:--gradient-hero-wash)"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-(image:--gradient-star-field)"
        />

        <div className="mx-auto flex max-w-[900px] flex-col items-center gap-5 px-5 py-24 text-center">
          <p className="text-eyebrow text-muted-foreground">A field guide to</p>
          <h1 className="text-gradient-title">The Myth Atlas</h1>
          <div className="h-[3px] w-48 rounded-full bg-(image:--gradient-divider)" />
          <p className="text-tagline max-w-[52ch] text-lg">
            Gods, heroes, titans, and monsters — and every thread that ties them together.
          </p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1200px] px-5 pb-24">
        <nav className="mb-10 flex flex-wrap justify-center gap-2.5">
          {SAMPLES.map(({ category }) => (
            <button
              key={category}
              type="button"
              data-category={category}
              className="rounded-full border border-cat px-3.5 py-1 text-[11.5px] font-extrabold tracking-[0.04em] text-cat uppercase transition-colors hover:bg-cat hover:text-bg-deep"
            >
              {category}
            </button>
          ))}
        </nav>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[22px]">
          {SAMPLES.map(({ category, name, epithet }) => (
            <article
              key={name}
              data-category={category}
              className="surface-parchment rounded-lg p-3 text-left transition-transform duration-150 ease-out hover:-translate-y-1"
            >
              <div className="aspect-3/4 rounded-md border-[3px] border-cat bg-(image:--gradient-portrait) shadow-[0_0_24px_var(--cat-glow)]" />
              <h3 className="mt-3 text-[17px] leading-tight">{name}</h3>
              <p className="text-pronunciation mt-1 text-sm text-muted-foreground">{epithet}</p>
              <span className="mt-2.5 inline-block rounded-full border border-cat-border bg-cat-bg px-2.5 py-0.5 text-[10.5px] font-extrabold tracking-[0.04em] text-cat-ink uppercase">
                {category}
              </span>
            </article>
          ))}
        </div>

        <section
          data-category="titan"
          className="surface-parchment mx-auto mt-14 max-w-[840px] rounded-lg p-8 text-left"
        >
          <p className="text-eyebrow text-muted-foreground">Detail surface</p>
          <h2 className="mt-1">Parchment scope</h2>
          <p className="mt-3 text-muted-foreground">
            Everything inside <code>.surface-parchment</code> reads ink values automatically —
            including shadcn components, which were never told about the palette.
          </p>

          <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3">
            {["Domain", "Symbol", "Generation"].map((label, i) => (
              <div key={label} className="rounded-lg border-t-[3px] border-cat bg-muted p-3">
                <p className="text-fact-label text-sm text-muted-foreground">{label}</p>
                <p className="font-semibold">{["Time", "Sickle", "1"][i]}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="rounded-full bg-(image:--gradient-cta) px-5 py-2 text-sm font-extrabold text-gold-white shadow-[0_6px_18px_var(--cat-glow)]"
            >
              Read the myth
            </button>
            <Button variant="outline">shadcn outline</Button>
            <Button>shadcn default</Button>
          </div>
        </section>
      </main>
    </>
  )
}

export default App

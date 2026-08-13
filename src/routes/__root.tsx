import { Outlet, createRootRoute } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      {/* Deckle edge for .parchment-sheet. CSS `filter: url(#…)` resolves against
          the document, not the stylesheet, so the filter has to be a real node —
          mounted once here rather than per sheet, which would duplicate the id.
          baseFrequency sets the tear's wavelength (~28px), scale its depth
          (±7px); raise scale for a rougher tear, lower it for a clean cut. */}
      <svg
        aria-hidden="true"
        focusable="false"
        className="pointer-events-none absolute size-0"
      >
        <filter
          id="parchment-tear"
          x="-2%"
          y="-2%"
          width="104%"
          height="104%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.035"
            numOctaves="4"
            seed="7"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="14"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <header className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="meander meander-wave rotate-180 h-8 text-god/70"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-(image:--gradient-hero-wash)"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-(image:--gradient-star-field)"
        />

        <div className="mx-auto flex max-w-225 flex-col items-center gap-2 px-5 py-8 text-center">
          <Link to="/">
            <h1 className="text-gradient-title">MythoDex</h1>
          </Link>
          <div className="h-1 w-48 rounded-full bg-(image:--gradient-divider)" />
        </div>

        <div
          aria-hidden="true"
          className="meander meander-wave h-8 text-god/70"
        />
      </header>
      <Outlet />
    </>
  )
}

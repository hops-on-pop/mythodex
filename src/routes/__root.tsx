import {
  HeadContent,
  Outlet,
  createRootRoute,
  useRouterState,
} from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"

import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site"

export const Route = createRootRoute({
  // Fallbacks for any route that doesn't set its own; the deepest match wins.
  // On a not-found the router stops running `head` at this route (the one that
  // owns the not-found page), so this is the only place to mark it noindex.
  head: ({ match }) => ({
    meta: match._notFound
      ? [
          { title: `Page not found · ${SITE_NAME}` },
          { name: "robots", content: "noindex" },
        ]
      : [
          { title: SITE_NAME },
          { name: "description", content: SITE_DESCRIPTION },
        ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
})

// The masthead's type, shared by both the <h1> and <p> forms below.
const MASTHEAD =
  "text-gradient-title font-display font-bold text-[56px] tracking-[-0.03em] max-lg:text-4xl"

function RootComponent() {
  // One <h1> per page: the site name is the heading only on the home page.
  // Everywhere else the page's own title (a character's name) takes it.
  const isHome = useRouterState({
    select: (state) => state.location.pathname === "/",
  })
  const Masthead = isHome ? "h1" : "p"

  return (
    <>
      {/* Renders each route's title/meta/links; React hoists them into <head>. */}
      <HeadContent />

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
            <Masthead className={MASTHEAD}>MythoDex</Masthead>
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

function NotFound() {
  return (
    <main className="mx-auto flex max-w-225 flex-col items-center gap-6 px-5 py-20 text-center">
      <p className="text-eyebrow text-muted-foreground">Error 404</p>
      <h1 className="text-balance">Lost in the Labyrinth</h1>
      <p className="max-w-120 text-lg text-muted-foreground">
        No figure in the atlas answers to this name. The thread leads back the
        way you came.
      </p>
      <Link
        to="/"
        className="font-accent text-lg text-god underline underline-offset-4 hover:text-gold-white"
      >
        Return to the atlas
      </Link>
    </main>
  )
}

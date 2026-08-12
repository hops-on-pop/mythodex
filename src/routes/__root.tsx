import { Outlet, createRootRoute } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
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

        <div className="mx-auto flex max-w-225 flex-col items-center gap-5 px-5 py-12 text-center">
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

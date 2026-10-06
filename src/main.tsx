import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider, createRouter } from "@tanstack/react-router"
import { routeTree } from "./routeTree.gen"
import "./index.css"

const router = createRouter({
  routeTree,
  // Hovering or focusing a link fetches the target route's code, so by the
  // time the click lands the character page is usually already in memory.
  defaultPreload: "intent",
  // Back from a character page lands where you left the grid, not at the top.
  scrollRestoration: true,
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

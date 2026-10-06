import type { PortraitSources } from "@/lib/portraits"

interface PortraitProps extends Omit<
  React.ComponentProps<"img">,
  "src" | "srcSet" | "sizes" | "loading" | "fetchPriority"
> {
  sources: PortraitSources
  /** Rendered width at each breakpoint, so the browser picks 400w or 600w. */
  sizes: string
  /**
   * Above the fold and likely the LCP element: fetch eagerly at high priority.
   * Everything else lazy-loads as it nears the viewport.
   */
  priority?: boolean
}

/**
 * A character portrait as AVIF with a WebP fallback. The masters are 2:3, so
 * width/height are fixed at 600×900 to reserve the box before the file lands.
 */
export function Portrait({
  sources,
  sizes,
  priority = false,
  ...props
}: PortraitProps) {
  return (
    <picture className="contents">
      <source type="image/avif" srcSet={sources.avif} sizes={sizes} />
      <img
        src={sources.src}
        srcSet={sources.webp}
        sizes={sizes}
        width={600}
        height={900}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        {...props}
      />
    </picture>
  )
}

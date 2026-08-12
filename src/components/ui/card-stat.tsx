import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"

import { cn } from "@/lib/utils"
import type { Character } from "@/data/types"

interface CardStatProps extends React.ComponentProps<"div"> {
  category?: Character["category"]
  label?: string
  icon?: IconSvgElement
}

function CardStat({
  className,
  category,
  label,
  icon,
  children,
  ...props
}: CardStatProps) {
  return (
    <div
      data-category={category}
      className={cn(
        "rounded-lg border-b-3 border-r-3 border-cat bg-parchment-dark p-3 max-w-sm text-ink",
        className,
      )}
      {...props}
    >
      {label && (
        <div className="flex items-center gap-1.5 text-lg uppercase text-cat-ink font-accent">
          {icon && (
            <HugeiconsIcon
              icon={icon}
              size={16}
              color="currentColor"
              strokeWidth={1.75}
              aria-hidden
            />
          )}
          {label}
        </div>
      )}
      {children}
    </div>
  )
}

export { CardStat }

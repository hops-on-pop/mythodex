import { tv } from "tailwind-variants"

export const separator = tv({
  base: "shrink-0 bg-border",
  variants: {
    orientation: {
      horizontal: "h-[1px] w-full",
      vertical: "h-full w-[1px]",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
})

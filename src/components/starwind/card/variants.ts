import { tv } from "tailwind-variants"

export const card = tv({
  base: [
    "group/card flex flex-col gap-(--card-spacing) rounded-xl bg-card py-(--card-spacing) text-card-foreground ring-1 ring-border",
    "has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0",
    "*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
  ],
  variants: {
    size: {
      sm: "text-sm [--card-spacing:--spacing(4)]",
      md: "[--card-spacing:--spacing(5)]",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export const cardAction = tv({
  base: "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
})

export const cardContent = tv({
  base: "px-(--card-spacing)",
})

export const cardDescription = tv({
  base: "text-base text-muted-foreground group-data-[size=sm]/card:text-sm",
})

export const cardFooter = tv({
  base: "flex items-center rounded-b-xl border-t bg-muted/50 p-(--card-spacing)",
})

export const cardHeader = tv({
  base: [
    "@container/card-header grid auto-rows-min items-start gap-1 px-(--card-spacing)",
    "has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]",
  ],
})

export const cardTitle = tv({
  base: "font-heading text-xl leading-snug font-medium group-data-[size=sm]/card:text-base",
})

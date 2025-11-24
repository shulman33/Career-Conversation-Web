import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border-2 border-memphis-black px-3 py-1 text-xs font-bold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1.5 [&>svg]:pointer-events-none focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-all shadow-[3px_3px_0px_0px_oklch(0.10_0_0)] hover:shadow-[2px_2px_0px_0px_oklch(0.10_0_0)] hover:translate-x-[1px] hover:translate-y-[1px]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground",
        secondary:
          "bg-secondary text-secondary-foreground",
        destructive:
          "bg-destructive text-white",
        outline:
          "bg-background text-foreground border-memphis-black [a&]:hover:bg-accent",
        // Neo-Memphis color variants
        cyan: "bg-memphis-cyan text-memphis-black border-memphis-black",
        pink: "bg-memphis-pink text-memphis-black border-memphis-black",
        yellow: "bg-memphis-yellow text-memphis-black border-memphis-black",
        purple: "bg-memphis-purple text-white border-memphis-black",
        orange: "bg-memphis-orange text-memphis-black border-memphis-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] border-4 border-memphis-black shadow-[6px_6px_0px_0px_oklch(0.10_0_0)] hover:shadow-[4px_4px_0px_0px_oklch(0.10_0_0)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-[2px_2px_0px_0px_oklch(0.10_0_0)] active:translate-x-[4px] active:translate-y-[4px]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        destructive:
          "bg-destructive text-white",
        outline:
          "bg-background border-memphis-black hover:bg-accent",
        secondary:
          "bg-secondary text-secondary-foreground",
        ghost:
          "border-transparent shadow-none hover:shadow-none active:shadow-none hover:translate-x-0 hover:translate-y-0 active:translate-x-0 active:translate-y-0 hover:bg-accent",
        link: "border-transparent shadow-none hover:shadow-none active:shadow-none hover:translate-x-0 hover:translate-y-0 active:translate-x-0 active:translate-y-0 text-primary underline-offset-4 hover:underline",
        // Neo-Memphis color variants
        cyan: "bg-memphis-cyan text-memphis-black hover:bg-memphis-cyan-light",
        pink: "bg-memphis-pink text-memphis-black hover:bg-memphis-pink-light",
        yellow: "bg-memphis-yellow text-memphis-black hover:bg-memphis-yellow-light",
        purple: "bg-memphis-purple text-white hover:bg-memphis-purple-light",
        orange: "bg-memphis-orange text-memphis-black hover:bg-memphis-orange-light",
      },
      size: {
        default: "h-11 px-6 py-3 has-[>svg]:px-4",
        sm: "h-9 px-4 py-2 has-[>svg]:px-3",
        lg: "h-14 px-8 py-4 text-base has-[>svg]:px-6",
        icon: "size-11",
        "icon-sm": "size-9",
        "icon-lg": "size-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"
import { WavyLines } from "@/components/decorative"

type MemphisColor = "cyan" | "pink" | "yellow" | "purple" | "orange"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  wavy = false,
  wavyColor = "cyan",
  wavyWidth = 200,
  wavyStrokeWidth = 3,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root> & {
  wavy?: boolean
  wavyColor?: MemphisColor
  wavyWidth?: number
  wavyStrokeWidth?: number
}) {
  // If wavy variant is requested, render WavyLines component
  if (wavy) {
    return (
      <div
        data-slot="separator"
        className={cn(
          "shrink-0 my-4",
          orientation === "horizontal" ? "w-full h-auto" : "h-full w-auto",
          className
        )}
      >
        <WavyLines
          orientation={orientation}
          color={wavyColor}
          width={wavyWidth}
          strokeWidth={wavyStrokeWidth}
        />
      </div>
    )
  }

  // Standard separator
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }

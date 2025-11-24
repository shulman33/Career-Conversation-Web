"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { MinusIcon, Maximize2Icon, XIcon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const dialogContentVariants = cva(
  "bg-background border-4 border-memphis-black rounded-xl shadow-[12px_12px_0px_0px_oklch(0.10_0_0)]",
  {
    variants: {
      accent: {
        none: "",
        cyan: "border-t-8 border-t-memphis-cyan",
        pink: "border-t-8 border-t-memphis-pink",
        yellow: "border-t-8 border-t-memphis-yellow",
        purple: "border-t-8 border-t-memphis-purple",
        orange: "border-t-8 border-t-memphis-orange",
      },
    },
    defaultVariants: {
      accent: "cyan",
    },
  }
)

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  showWindowControls = true,
  accent = "cyan",
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> &
  VariantProps<typeof dialogContentVariants> & {
  showCloseButton?: boolean
  showWindowControls?: boolean
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-0 duration-200 sm:max-w-lg overflow-hidden",
          dialogContentVariants({ accent }),
          className
        )}
        {...props}
      >
        {/* Window Controls Bar */}
        {showWindowControls && (
          <div className={cn("flex items-center justify-between px-4 py-3 border-b-2 border-memphis-black", accent && accent !== "none" ? `bg-${accent === "cyan" ? "memphis-cyan" : accent === "pink" ? "memphis-pink" : accent === "yellow" ? "memphis-yellow" : accent === "purple" ? "memphis-purple" : "memphis-orange"}/20` : "")}>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Minimize"
                className="w-3 h-3 rounded-full bg-memphis-yellow border-2 border-memphis-black hover:opacity-80 transition-opacity"
                onClick={(e) => e.preventDefault()}
              />
              <button
                type="button"
                aria-label="Maximize"
                className="w-3 h-3 rounded-full bg-memphis-pink border-2 border-memphis-black hover:opacity-80 transition-opacity"
                onClick={(e) => e.preventDefault()}
              />
              <DialogPrimitive.Close
                className="w-3 h-3 rounded-full bg-memphis-orange border-2 border-memphis-black hover:opacity-80 transition-opacity"
                aria-label="Close"
              >
                <span className="sr-only">Close</span>
              </DialogPrimitive.Close>
            </div>
          </div>
        )}

        {/* Content Area */}
        <div className="p-6">
          {children}
        </div>

        {/* Standard close button (hidden if showCloseButton is false) */}
        {showCloseButton && !showWindowControls && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  dialogContentVariants,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}

"use client"

import * as React from "react"
import { BrowserWindow } from "@/components/ui/BrowserWindow"
import { cn } from "@/lib/utils"

type MemphisColor = "cyan" | "pink" | "yellow" | "purple" | "orange"

interface GradioEmbedProps {
  /**
   * The Gradio space URL (e.g., "https://your-space.hf.space")
   */
  spaceUrl: string
  /**
   * Optional title for the browser window
   * @default "Career Conversation"
   */
  title?: string
  /**
   * Optional height for the iframe
   * @default "600px"
   */
  height?: string
  /**
   * Accent color for the browser window
   * @default "cyan"
   */
  accentColor?: MemphisColor
  /**
   * Additional className for the container
   */
  className?: string
  /**
   * Allow camera access for the iframe
   * @default false
   */
  allowCamera?: boolean
  /**
   * Allow microphone access for the iframe
   * @default false
   */
  allowMicrophone?: boolean
}

export function GradioEmbed({
  spaceUrl,
  title = "Career Conversation",
  height = "600px",
  accentColor = "cyan",
  className,
  allowCamera = false,
  allowMicrophone = false,
}: GradioEmbedProps) {
  // Build the allow attribute based on permissions
  const allowPermissions = [
    allowCamera && "camera",
    allowMicrophone && "microphone",
  ]
    .filter(Boolean)
    .join("; ")

  return (
    <BrowserWindow
      accentColor={accentColor}
      className={cn("w-full", className)}
      mobileSimplified={true}
    >
      <div className="w-full overflow-hidden rounded-b-lg">
        <iframe
          src={spaceUrl}
          style={{
            width: "100%",
            height,
            border: "0",
          }}
          allow={allowPermissions || undefined}
          title={title}
          loading="lazy"
          className="bg-background"
        />
      </div>
    </BrowserWindow>
  )
}

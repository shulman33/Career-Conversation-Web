"use client";

import { Minus, Maximize2, X } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type AccentColor = "cyan" | "pink" | "yellow" | "purple" | "orange";

interface BrowserWindowProps {
  title?: string;
  accentColor?: AccentColor;
  children: ReactNode;
  className?: string;
}

const ACCENT_COLOR_MAP: Record<AccentColor, string> = {
  cyan: "bg-memphis-cyan",
  pink: "bg-memphis-pink",
  yellow: "bg-memphis-yellow",
  purple: "bg-memphis-purple",
  orange: "bg-memphis-orange",
};

export function BrowserWindow({
  title = "Browser Window",
  accentColor = "cyan",
  children,
  className = "",
}: BrowserWindowProps) {
  const accentBg = ACCENT_COLOR_MAP[accentColor];

  return (
    <div
      className={cn(
        "relative rounded-xl border-4 border-memphis-black bg-background overflow-hidden",
        "shadow-[8px_8px_0px_0px_oklch(0.10_0_0)]",
        className
      )}
    >
      {/* Window Title Bar */}
      <div className={cn("flex items-center justify-between px-4 py-3 border-b-4 border-memphis-black", accentBg)}>
        {/* Control Buttons */}
        <div className="flex items-center gap-2">
          <button
            className="w-4 h-4 rounded-full bg-memphis-yellow border-2 border-memphis-black hover:opacity-80 transition-opacity"
            aria-label="Minimize"
          >
            <Minus className="w-2 h-2 mx-auto text-memphis-black" strokeWidth={3} />
          </button>
          <button
            className="w-4 h-4 rounded-full bg-memphis-pink border-2 border-memphis-black hover:opacity-80 transition-opacity"
            aria-label="Maximize"
          >
            <Maximize2 className="w-2 h-2 mx-auto text-memphis-black" strokeWidth={3} />
          </button>
          <button
            className="w-4 h-4 rounded-full bg-memphis-orange border-2 border-memphis-black hover:opacity-80 transition-opacity"
            aria-label="Close"
          >
            <X className="w-2 h-2 mx-auto text-memphis-black" strokeWidth={3} />
          </button>
        </div>

        {/* Window Title */}
        <div className="flex-1 text-center">
          <span className="text-sm font-bold text-memphis-black tracking-tight">{title}</span>
        </div>

        {/* Spacer for symmetry */}
        <div className="w-[76px]" />
      </div>

      {/* Window Content */}
      <div className="p-6">{children}</div>
    </div>
  );
}

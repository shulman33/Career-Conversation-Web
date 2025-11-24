"use client"

import * as React from "react"
import { motion } from "motion/react"
import { BrowserWindow } from "@/components/ui/BrowserWindow"
import { cn } from "@/lib/utils"

type MemphisColor = "cyan" | "pink" | "yellow" | "purple" | "orange"

interface NavItem {
  id: string
  label: string
  href: string
  accentColor: MemphisColor
}

interface WindowNavigationProps {
  /**
   * Array of navigation items
   */
  items?: NavItem[]
  /**
   * Optional className for the container
   */
  className?: string
  /**
   * Callback when a nav item is clicked
   */
  onNavigate?: (id: string, href: string) => void
}

const defaultNavItems: NavItem[] = [
  { id: "home", label: "Home", href: "#home", accentColor: "cyan" },
  { id: "chatbot", label: "Chatbot", href: "#chatbot", accentColor: "pink" },
  { id: "projects", label: "Projects", href: "#projects", accentColor: "yellow" },
  { id: "tech-stack", label: "Tech Stack", href: "#tech-stack", accentColor: "purple" },
  { id: "contact", label: "Contact", href: "#contact", accentColor: "orange" },
]

export function WindowNavigation({
  items = defaultNavItems,
  className,
  onNavigate,
}: WindowNavigationProps) {
  const handleClick = (item: NavItem) => {
    if (onNavigate) {
      onNavigate(item.id, item.href)
    } else {
      // Default smooth scroll behavior
      const element = document.querySelector(item.href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  return (
    <nav className={cn("relative w-full", className)}>
      {/* Desktop: Overlapping windows */}
      <div className="hidden md:flex md:items-center md:justify-center md:gap-4 md:flex-wrap">
        {items.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => handleClick(item)}
            className="relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            whileHover={{
              scale: 1.05,
              rotate: index % 2 === 0 ? 2 : -2,
              zIndex: 10,
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              zIndex: items.length - index,
            }}
          >
            <BrowserWindow
              accentColor={item.accentColor}
              className="w-32 h-20 cursor-pointer"
            >
              <div className="flex items-center justify-center h-full">
                <span className="text-sm font-bold text-foreground">
                  {item.label}
                </span>
              </div>
            </BrowserWindow>
          </motion.button>
        ))}
      </div>

      {/* Mobile: Stacked windows */}
      <div className="flex flex-col gap-3 md:hidden">
        {items.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => handleClick(item)}
            className="w-full"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            whileTap={{ scale: 0.98 }}
          >
            <BrowserWindow
              accentColor={item.accentColor}
              className="w-full h-16"
            >
              <div className="flex items-center justify-center h-full">
                <span className="text-base font-bold text-foreground">
                  {item.label}
                </span>
              </div>
            </BrowserWindow>
          </motion.button>
        ))}
      </div>
    </nav>
  )
}

export type { NavItem, WindowNavigationProps }

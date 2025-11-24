// Phase 4: Core Components - Barrel Export File
// This file exports all customized shadcn components and custom components

// Customized shadcn/ui components with Neo-Memphis styling
export { Button, buttonVariants } from "./ui/button"
export {
  Card,
  cardVariants,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "./ui/card"
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
} from "./ui/dialog"
export { Badge, badgeVariants } from "./ui/badge"
export { Separator } from "./ui/separator"

// Custom Phase 4 components
export { GradioEmbed } from "./GradioEmbed"
export { WindowNavigation } from "./WindowNavigation"
export type { NavItem, WindowNavigationProps } from "./WindowNavigation"

// Phase 2: Decorative components (for convenience)
export {
  GridBackground,
  FloatingSparkles,
  WavyLines,
  GeometricShapes,
} from "./decorative"

// BrowserWindow component
export { BrowserWindow } from "./ui/BrowserWindow"

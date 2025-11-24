# Career Landing Page - Implementation Plan

## Phase 1: Dependencies & Setup

- Install shadcn/ui with Next.js configuration
- Install Motion (Framer Motion) for animations
- Install and initialize Sanity CMS (embedded Studio at /studio)
- Install additional utilities (@sanity/image-url, lucide-react for icons)
- Configure environment variables for Sanity

## Phase 2: Design System & Theme

- Create Neo-Memphis color palette in app/globals.css using Tailwind v4 @theme syntax
- Build decorative components:
  - GridBackground - cyan grid with animated elements
  - FloatingSparkles - animated four-pointed stars
  - WavyLines - Memphis-style wavy patterns
  - GeometricShapes - circles, rounded rectangles with bold outlines
- Create BrowserWindow component with minimize/maximize/close buttons, bold borders, colorful accents

## Phase 3: Sanity CMS Schema

- Create schemas: hero, project, technology, contact, siteSettings
- Set up Sanity client and image URL builder
- Create GROQ queries for all content types
- Configure TypeGen for type-safe queries
- Set up webhook route for on-demand revalidation

## Phase 4: Core Components

- Install and customize shadcn components (button, card, dialog, badge, separator)
- Wrap shadcn components with Neo-Memphis styling (bold borders, drop shadows, colors)
- Create GradioEmbed component for Career Conversation chatbot
- Build creative window-based navigation (overlapping browser windows as nav)

## Phase 5: Page Sections (Mobile-First)

- **Hero Section:** Name, tagline, professional photo in browser window, prominent chatbot CTA
- **Chatbot Section:** Career Conversation embedded in styled browser window (main feature)
- **Projects Section:** Project cards in overlapping windows with hover animations
- **Tech Stack Section:** Technology badges grouped by category in colorful windows
- **Contact Section:** Email, LinkedIn, GitHub, phone in retro window style with resume download button

## Phase 6: Layout & Integration

- Build main page layout with grid background
- Integrate all sections with smooth scrolling
- Add sparkle/wave animations (GPU-accelerated, viewport-aware)
- Implement hover effects with touch support fallbacks
- Create text-based logo with Neo-Memphis styling

## Phase 7: Sanity Studio & Content

- Configure Studio structure (singleton documents for hero/contact/settings)
- Create initial content in Studio
- Test content fetching and type generation
- Add placeholder professional photo

## Phase 8: Polish & Optimization

- Configure next.config.ts for Sanity images and Gradio embed (CSP headers)
- Implement responsive images with LQIP blur placeholders
- Performance audit (animations, lazy loading)
- SEO meta tags from Sanity
- Test mobile responsiveness across breakpoints

## Key Creative Elements

- **Chatbot displayed as central "featured window" on page**
- **Navigation as clickable overlapping browser windows**
- **All content in colorful window containers with bold black outlines**
- **Animated sparkles appear when scrolling/interacting**
- **Wavy Memphis lines as section dividers**

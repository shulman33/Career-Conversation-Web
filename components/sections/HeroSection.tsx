"use client"

import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BrowserWindow } from "@/components/ui/BrowserWindow"
import { FloatingSparkles } from "@/components/decorative/FloatingSparkles"
import { urlFor } from "@/sanity/image"

import type { SanityImageHotspot, SanityImageCrop } from '@/sanity.types'

interface HeroSectionProps {
  name: string
  tagline: string
  chatbotCta: string
  professionalPhoto?: {
    asset: {
      _id: string
      url: string
    }
    alt?: string
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
  }
}

export function HeroSection({ name, tagline, chatbotCta, professionalPhoto }: HeroSectionProps) {
  const handleScrollToChatbot = () => {
    const chatbotSection = document.getElementById("chatbot")
    if (chatbotSection) {
      chatbotSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 overflow-hidden"
    >
      <FloatingSparkles count={12} />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left order-1"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
              >
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan via-purple to-pink">
                  {name}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0"
              >
                {tagline}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                variant="cyan"
                onClick={handleScrollToChatbot}
                className="text-lg px-8 py-6"
              >
                {chatbotCta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="text-lg px-8 py-6"
              >
                Get in touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Professional Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 max-w-md mx-auto lg:max-w-none"
          >
            <BrowserWindow accentColor="yellow" title="professional-profile.jpg" mobileSimplified={true}>
              <div className="aspect-square bg-linear-to-br from-yellow/20 via-orange/20 to-pink/20 flex items-center justify-center">
                {professionalPhoto?.asset ? (
                  <img
                    src={urlFor(professionalPhoto)
                      .width(1200)
                      .height(1200)
                      .fit('crop')
                      .auto('format')
                      .quality(90)
                      .url()}
                    alt={professionalPhoto.alt || `Professional photo of ${name}`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                ) : (
                  <div className="text-center space-y-4 p-8">
                    <div className="w-48 h-48 mx-auto rounded-full bg-linear-to-br from-cyan via-purple to-pink flex items-center justify-center text-white text-6xl font-bold shadow-lg">
                      {name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Professional photo will be added via Sanity CMS
                    </p>
                  </div>
                )}
              </div>
            </BrowserWindow>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

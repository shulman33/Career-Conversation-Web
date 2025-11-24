"use client"

import { motion } from "motion/react"
import { BrowserWindow } from "@/components/ui/BrowserWindow"
import { GradioEmbed } from "@/components/GradioEmbed"
import { WavyLines } from "@/components/decorative/WavyLines"

const GRADIO_URL = "https://huggingface.co/spaces/shulman33/career_conversation"

export function ChatbotSection() {
  return (
    <>
      {/* Wavy section divider */}
      <WavyLines className="text-cyan/30" />

      <section
        id="chatbot"
        className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8 sm:space-y-12"
          >
            {/* Section Header */}
            <div className="text-center space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              >
                Career{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-purple to-pink">
                  Conversation
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                Have an intelligent conversation about my career journey, skills, and projects.
                Powered by AI for natural, engaging discussions.
              </motion.p>
            </div>

            {/* Chatbot Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <GradioEmbed
                spaceUrl={GRADIO_URL}
                title="career-conversation.ai"
                accentColor="cyan"
                className="shadow-2xl"
              />
            </motion.div>

            {/* Optional: Add note about the chatbot */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <p className="text-sm text-muted-foreground">
                This chatbot is trained on my professional experience and can answer questions
                about my skills, projects, and career journey.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Wavy section divider */}
      <WavyLines className="text-purple/30 rotate-180" />
    </>
  )
}

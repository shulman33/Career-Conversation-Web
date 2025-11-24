'use client'

import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export function FloatingChatButton() {
  const [isVisible, setIsVisible] = useState(true)

  const scrollToChatbot = () => {
    const chatbotSection = document.getElementById('chatbot')
    if (chatbotSection) {
      chatbotSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-4 right-4 z-50 md:hidden"
        >
          <div className="relative">
            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="absolute -top-2 -right-2 w-6 h-6 bg-neo-black rounded-full flex items-center justify-center shadow-neo-sm hover:scale-110 transition-transform"
              aria-label="Dismiss chat button"
            >
              <X className="w-3 h-3 text-white" />
            </button>

            {/* Main chat button */}
            <button
              onClick={scrollToChatbot}
              className="touch-target bg-neo-pink hover:bg-opacity-90 text-neo-black font-bold px-6 py-4 rounded-full shadow-neo-lg border-4 border-neo-black flex items-center gap-3 transition-all hover:scale-105 active:scale-95"
              aria-label="Open chatbot"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="text-sm font-bold">Chat with me</span>
            </button>

            {/* Pulsing indicator */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-neo-green rounded-full border-2 border-white animate-pulse" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

export function LoveMessages() {
  const [messages, setMessages] = useState<string[]>([])
  const [currentMessage, setCurrentMessage] = useState(0)

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("/messages.json")
        const data = await response.json()

        setMessages(data)
      } catch (error) {
        console.error("Error fetching messages:", error)
      }
    }

    fetchMessages()
  }, [])

  const nextMessage = () => setCurrentMessage((prev) => (prev + 1) % messages.length)

  if (messages.length === 0) return null

  return (
    <div className="text-center space-y-6">
      <div className="relative min-h-[120px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMessage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div className="relative">
              <svg
                className="absolute -left-6 -top-4 w-12 h-12 text-red-200/80 rotate-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>

              <p className="text-xl lg:text-2xl font-medium text-pink-900 italic px-4 font-dancing mt-2">
                "{messages[currentMessage]}"
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.button
        onClick={nextMessage}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 text-sm lg:text-base flex items-center gap-2 mx-auto"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
        Próxima Mensagem
      </motion.button>
    </div>
  )
}

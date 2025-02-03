"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Timer({ startDate }: { startDate: string }) {
  const [timeElapsed, setTimeElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      const start = new Date(startDate).getTime()
      const now = new Date().getTime()
      const difference = now - start

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeElapsed({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [startDate])

  const mapKeysToPtBr = {
    days: "DIAS",
    hours: "HORAS",
    minutes: "MINUTOS",
    seconds: "SEGUNDOS",
  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-6">
      {Object.entries(timeElapsed).map(([unit, value]) => (
        <motion.div
          key={unit}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative p-4 bg-white rounded-2xl shadow-lg border border-pink-100">
            <motion.span
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent"
              key={value}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {value.toString().padStart(2, "0")}
            </motion.span>

            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-3 py-1 rounded-full text-xs min-w-[60px] font-bold text-center">
              {mapKeysToPtBr[unit as keyof typeof mapKeysToPtBr]}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

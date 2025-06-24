"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface CountdownCardProps {
  value: number
  label: string
}

const CountdownCard = ({ value, label }: CountdownCardProps) => {
  const [flip, setFlip] = useState(false)
  const [prevValue, setPrevValue] = useState(value)

  useEffect(() => {
    if (prevValue !== value) {
      setFlip(true)
      const timer = setTimeout(() => {
        setFlip(false)
        setPrevValue(value)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [value, prevValue])

  return (
    <div className="flex flex-col items-center">
      <Card className="w-20 h-24 relative overflow-hidden bg-white/10 backdrop-blur-sm border-white/20">
        <CardContent className="p-0 h-full flex items-center justify-center">
          <motion.div
            animate={{ rotateX: flip ? 90 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-3xl font-bold text-white"
          >
            {value}
          </motion.div>
        </CardContent>
      </Card>
      <p className="text-xs text-white/80 mt-2 uppercase tracking-wider">{label}</p>
    </div>
  )
}

export default CountdownCard

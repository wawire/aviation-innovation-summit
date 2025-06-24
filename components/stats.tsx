"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Users, Building2, Globe } from "lucide-react"

interface StatProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix?: string
  delay?: number
}

const StatItem = ({ icon, value, label, suffix = "", delay = 0 }: StatProps) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    let start = 0
    const duration = 2000 // ms
    const increment = value / (duration / 16) // 60fps

    if (inView) {
      const timer = setTimeout(() => {
        const counter = setInterval(() => {
          start += increment
          if (start >= value) {
            setCount(value)
            clearInterval(counter)
          } else {
            setCount(Math.floor(start))
          }
        }, 16)

        return () => clearInterval(counter)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [inView, value, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md"
    >
      <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">{icon}</div>
      <h3 className="text-4xl font-bold mb-2 flex items-baseline">
        {count}
        <span className="text-2xl ml-1">{suffix}</span>
      </h3>
      <p className="text-muted-foreground text-center">{label}</p>
    </motion.div>
  )
}

const Stats = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Africa's Premier Aviation Event</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join industry leaders, innovators, and decision-makers from across the continent and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatItem icon={<Users size={28} />} value={500} label="Executives & Decision Makers" suffix="+" delay={0} />
          <StatItem icon={<Building2 size={28} />} value={20} label="Countries Represented" suffix="+" delay={200} />
          <StatItem
            icon={<Globe size={28} />}
            value={60}
            label="Airlines & Aviation Companies"
            suffix="+"
            delay={400}
          />
        </div>
      </div>
    </section>
  )
}

export default Stats

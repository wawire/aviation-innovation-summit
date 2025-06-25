"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import CountdownCard from "./countdown-card"
import AnimatedBackground from "./animated-background"
import Link from "next/link"

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7
    }

    // Set the event date (October 16, 2025)
    const eventDate = new Date("2025-10-16T00:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = eventDate - now

      if (distance < 0) {
        clearInterval(timer)
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video ref={videoRef} autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/videos/mombasa-aerial.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 z-10">
        <AnimatedBackground />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              4<sup>th</sup> Africa Aviation Innovation Summit
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Investing in Africa's Aviation Future: Unlocking Opportunities for Growth and Transformation through
              Innovation
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-8 mt-6">
            <CountdownCard value={timeLeft.days} label="Days" />
            <CountdownCard value={timeLeft.hours} label="Hours" />
            <CountdownCard value={timeLeft.minutes} label="Minutes" />
            <CountdownCard value={timeLeft.seconds} label="Seconds" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
          >
            <Link href="/sponsors">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Become a Sponsor{" "}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </Button>
            </Link>
            <Link href="/register">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 group relative overflow-hidden"
              >
                <span className="relative z-10">Register Now</span>
                <span className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="inline-block px-6 py-3 rounded-full bg-secondary/90 text-black font-bold"
          >
            October 16-17, 2025 • Mombasa, Kenya
          </motion.div>
        </motion.div>

        {/* Animated Aircraft */}
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <motion.div
            initial={{ x: -100, y: 100 }}
            animate={{ x: 0, y: 0 }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <img src="/images/aircraft-silhouette.png" alt="Aircraft" className="w-32 h-auto opacity-70" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

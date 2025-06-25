'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Plane, Play, Users } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import AnimatedBackground from './animated-background';
import CountdownCard from './countdown-card';

const EnhancedHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }

    // Set the event date (November 6, 2025)
    const eventDate = new Date('2025-11-06T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 z-10"></div>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/mombasa-aerial.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 z-10">
        <AnimatedBackground />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 opacity-20"
        >
          <div className="w-16 h-16 bg-primary/30 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Plane className="h-8 w-8 text-white" />
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute top-1/3 right-1/4 opacity-20"
        >
          <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Users className="h-6 w-6 text-white" />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center"
        >
          {/* Event Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
          >
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-white font-medium">November 6-7, 2025</span>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-white font-medium">Mombasa, Kenya</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent">
                4<sup className="text-3xl md:text-4xl">th</sup> Africa Aviation
              </span>
              <br />
              <span className="text-white">Innovation Summit</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Investing in Africa's Aviation Future: Unlocking Opportunities for
              Growth and Transformation through Innovation
            </p>
          </motion.div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-8"
          >
            <h3 className="text-white/80 text-lg mb-4 font-medium">
              Event Starts In
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <CountdownCard value={timeLeft.days} label="Days" />
              <CountdownCard value={timeLeft.hours} label="Hours" />
              <CountdownCard value={timeLeft.minutes} label="Minutes" />
              <CountdownCard value={timeLeft.seconds} label="Seconds" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
          >
            <Link href="/register">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white group relative overflow-hidden px-8 py-4 text-lg"
              >
                <span className="relative z-10 flex items-center">
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </Button>
            </Link>
            <Link href="/sponsors">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 group relative overflow-hidden px-8 py-4 text-lg"
              >
                <span className="relative z-10 flex items-center">
                  <Play className="mr-2 h-5 w-5" />
                  Become a Sponsor
                </span>
                <span className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </Button>
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 text-sm"
          >
            <Link
              href="/speakers"
              className="text-white/70 hover:text-primary transition-colors flex items-center gap-1"
            >
              <Users className="h-4 w-4" />
              View Speakers
            </Link>
            <Link
              href="/agenda"
              className="text-white/70 hover:text-primary transition-colors flex items-center gap-1"
            >
              <Calendar className="h-4 w-4" />
              Event Agenda
            </Link>
            <Link
              href="/venue"
              className="text-white/70 hover:text-primary transition-colors flex items-center gap-1"
            >
              <MapPin className="h-4 w-4" />
              Venue Details
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated Aircraft */}
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <motion.div
            initial={{ x: -100, y: 100, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 0.7 }}
            transition={{
              duration: 3,
              ease: 'easeInOut',
              repeat: Number.POSITIVE_INFINITY,
              repeatType: 'reverse',
            }}
          >
            <img
              src="/images/aircraft-silhouette.png"
              alt="Aircraft"
              className="w-32 h-auto"
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedHero;

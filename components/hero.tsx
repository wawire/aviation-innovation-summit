'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import AnimatedBackground from './animated-background';
import CountdownCard from './countdown-card';

const Hero = () => {
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

    // Set the event date (October 16, 2025)
    const eventDate = new Date('2025-10-16T00:00:00').getTime();

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
        <div className="absolute inset-0 bg-black/60 z-10"></div>
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

      {/* Content */}
      <div className="relative z-20 container mx-auto px- h-full flex flex-col justify-center items-center">
        {/* Date at the top with line decorations - MOVED HERE */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center">
            <div className="w-24 md:w-40 h-px bg-primary"></div>
            <p className="mx-4 text-sm md:text-base uppercase tracking-wider text-white">
              OCTOBER 16-17, 2025 • MOMBASA, KENYA
            </p>
            <div className="w-24 md:w-40 h-px bg-primary"></div>
          </div>
        </motion.div>

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
              Africa Aviation
              <br />
              Innovation Summit
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Investing in Africa's Aviation Future: Unlocking Opportunities for
              Growth and Transformation through Innovation
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
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white group relative overflow-hidden"
              asChild
            >
              <a
                href="https://rb.gy/lxopum"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10 flex items-center">
                  Become a Sponsor{' '}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 group relative overflow-hidden"
              asChild
            >
              <a
                href="https://rb.gy/yoh2rs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10">Register as Exhibitor</span>
                <span className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </a>
            </Button>
          </motion.div>

          {/* Removed date section from here as it's now at the top */}
        </motion.div>

        {/* Animated Aircraft */}
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <motion.div
            initial={{ x: -100, y: 100 }}
            animate={{ x: 0, y: 0 }}
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
              className="w-32 h-auto opacity-70"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

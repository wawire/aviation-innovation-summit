'use client';

import { motion } from 'framer-motion';
import { Award, Building2, Globe, Users } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface StatProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  delay?: number;
  color?: string;
}

const StatItem = ({
  icon,
  value,
  label,
  prefix = '',
  suffix = '',
  delay = 0,
  color = 'primary',
}: StatProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay ? delay / 1000 : 0 }}
      className="flex flex-col items-center justify-center text-center bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-700 w-full h-full"
    >
      <div
        className={`flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-${color}/10 text-${color}`}
      >
        {icon}
      </div>
      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        {prefix}
        <motion.span key={count}>{count}</motion.span>
        {suffix}
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300">{label}</p>
    </motion.div>
  );
};

const EnhancedStats = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="w-full bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold block mb-2">
            By The Numbers
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent mb-4">
            Africa's Premier Aviation Event
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base lg:text-lg">
            Join industry leaders, innovators, and decision-makers from across
            the continent and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem
            icon={<Users className="w-6 h-6" />}
            value={500}
            label="Executives & Decision Makers"
            suffix="+"
            color="primary"
            delay={0}
          />
          <StatItem
            icon={<Building2 className="w-6 h-6" />}
            value={20}
            label="Countries Represented"
            suffix="+"
            color="blue-500"
            delay={200}
          />
          <StatItem
            icon={<Globe className="w-6 h-6" />}
            value={60}
            label="Airlines & Aviation Companies"
            suffix="+"
            color="green-500"
            delay={400}
          />
          <StatItem
            icon={<Award className="w-6 h-6" />}
            value={25}
            label="Industry Speakers"
            suffix="+"
            color="purple-500"
            delay={600}
          />
        </div>

        {/* Extra Info Cards */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          <div className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="mx-auto mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Investment Focus</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Connecting investors with high-potential aviation opportunities
              across Africa
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="mx-auto mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Networking Excellence</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Premium networking with C-level executives and industry leaders
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="mx-auto mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 text-green-500">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Pan-African Impact</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Driving growth and collaboration in the African aviation sector
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default EnhancedStats;

'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Exhibitors from './exhibitors';
import Sponsors from './sponsors';

const SponsorshipToggle = () => {
  const [activeTab, setActiveTab] = useState('sponsors');

  return (
    <section id="sponsors" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold mb-2 block">
            Partnership Opportunities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Us at AAIS 2025
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Position your organization at the forefront of Africa's aviation
            future with our premium sponsorship and exhibitor packages.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <Tabs
            defaultValue="sponsors"
            className="w-full max-w-md"
            onValueChange={value => setActiveTab(value)}
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="sponsors">Sponsorship</TabsTrigger>
              <TabsTrigger value="exhibitors">Exhibition</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'sponsors' ? <Sponsors /> : <Exhibitors />}
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorshipToggle;

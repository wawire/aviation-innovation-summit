'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface SponsorTier {
  id: string;
  name: string;
  price: number;
  description: string;
  slots: number;
  slotsRemaining: number;
  features: string[];
  popular?: boolean;
}

const Sponsors = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sponsorTiers: SponsorTier[] = [
    {
      id: 'platinum',
      name: 'Platinum',
      price: 60000,
      description: 'Exclusive top-tier visibility and engagement',
      slots: 2,
      slotsRemaining: 1,
      features: [
        'Naming rights: "AAIS 2025 Powered by [Your Company]"',
        'Premium logo placement on all event materials',
        'Keynote speech opportunity',
        'Prime exhibition space',
        'VIP Lounge access for private networking',
        'Invitation to exclusive VIP dinner',
        '10 VIP passes',
      ],
    },
    {
      id: 'gold',
      name: 'Gold',
      price: 50000,
      description: 'Premium visibility with speaking opportunities',
      slots: 3,
      slotsRemaining: 2,
      features: [
        'Logo on all marketing collateral & digital promotions',
        'Panel discussion seat',
        'Premium exhibition booth',
        'Access to networking sessions & speaker lounge',
        'Dedicated sponsor highlight across social media',
        'Invitation to VIP networking cocktail',
        '6 VIP passes',
      ],
      popular: true,
    },
    {
      id: 'silver',
      name: 'Silver',
      price: 30000,
      description: 'Enhanced visibility with networking opportunities',
      slots: 4,
      slotsRemaining: 3,
      features: [
        'Logo placement on selected event branding',
        'Participation in a panel discussion',
        'Standard exhibition booth',
        'Access to curated networking events',
        'Logo placement in event recap materials',
        'Invitation to exclusive VIP dinner',
        '4 VIP passes',
      ],
    },
    {
      id: 'bronze',
      name: 'Bronze',
      price: 20000,
      description: 'Essential visibility package for businesses',
      slots: 6,
      slotsRemaining: 5,
      features: [
        'Logo on event website & select signage',
        'Mention in event brochure',
        'Basic exhibition space',
        'General networking access',
        'Social media mentions',
        'Invitation to exclusive VIP dinner',
        '2 VIP passes',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {sponsorTiers.map((tier) => (
        <motion.div key={tier.id} variants={itemVariants}>
          <Card
            className={`h-full border ${
              tier.popular
                ? 'border-primary border-2'
                : 'border-gray-200 dark:border-gray-800'
            } relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group`}
            style={{ position: 'relative' }}
          >
            {tier.popular && (
              <div
                className="absolute inset-x-0 top-0"
                style={{ width: '100%' }}
              >
                <div className="bg-primary text-white text-xs font-medium py-1.5 text-center w-full">
                  MOST POPULAR
                </div>
              </div>
            )}
            <CardHeader className={`pb-4 ${tier.popular ? 'pt-10' : 'pt-6'}`}>
              <div className="flex justify-between items-center mb-1">
                <CardTitle className="text-2xl font-bold">
                  {tier.name}
                </CardTitle>
                <Badge variant="outline" className="text-xs">
                  {tier.slotsRemaining} slots available
                </Badge>
              </div>
              <div className="flex items-baseline mt-2">
                <span className="text-3xl font-bold">
                  ${tier.price.toLocaleString()}
                </span>
              </div>
              <CardDescription className="mt-2">
                {tier.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="h-px w-full bg-gray-200 dark:bg-gray-800 my-2"></div>
              <ul className="space-y-3 mt-4">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full ${
                  tier.id === 'platinum'
                    ? 'bg-black hover:bg-black/90 text-white'
                    : tier.id === 'gold'
                    ? 'bg-primary hover:bg-primary/90'
                    : tier.id === 'silver'
                    ? 'border-primary text-primary hover:bg-primary/10'
                    : 'border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800'
                }`}
                variant={
                  tier.id === 'platinum' || tier.id === 'gold'
                    ? 'default'
                    : 'outline'
                }
                asChild
              >
                <a
                  href="https://rb.gy/lxopum"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Select Package
                </a>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Sponsors;

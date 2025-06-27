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
import { Award, Check, Crown, Gem, Star, Zap } from 'lucide-react';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface SponsorTier {
  id: string;
  name: string;
  price: number;
  icon: React.ReactNode;
  description: string;
  slotsLabel: string;
  features: string[];
  popular?: boolean;
}

const sponsorTiers: SponsorTier[] = [
  {
    id: 'diamond',
    name: 'Diamond',
    price: 60000,
    icon: <Gem className="h-6 w-6" />,
    description: 'Premier tier with maximum visibility and influence',
    slotsLabel: '2 slots available',
    features: [
      'Naming rights: "AAIS 2025 Powered by [Your Company]"',
      'Top-tier logo placement on all event materials and communications',
      'Opening keynote speech opportunity',
      'Largest, most prominent exhibition space',
      'VIP Lounge access for exclusive networking',
      'Special recognition in all media coverage and press releases',
      'Invitation to exclusive VIP dinner',
      '12 VIP passes',
    ],
  },
  {
    id: 'platinum',
    name: 'Platinum',
    price: 40000,
    icon: <Crown className="h-6 w-6" />,
    description: 'High-level visibility and engagement',
    slotsLabel: '3 slots available',
    features: [
      'Premium logo placement on all event materials',
      'Keynote or fireside chat speaking opportunity',
      'Prominent exhibition booth',
      'VIP Lounge access for private networking',
      'Dedicated media feature and press release mention',
      'Invitation to exclusive VIP dinner',
      '10 VIP passes',
    ],
    popular: true,
  },
  {
    id: 'gold',
    name: 'Gold',
    price: 30000,
    icon: <Star className="h-6 w-6" />,
    description: 'Enhanced visibility with speaking opportunities',
    slotsLabel: '4 slots available',
    features: [
      'Logo on all marketing collateral & digital promotions',
      'Panel discussion seat',
      'Premium exhibition booth',
      'Access to networking sessions & speaker lounge',
      'Dedicated sponsor highlight across social media',
      'Invitation to VIP networking cocktail',
      '6 VIP passes',
    ],
  },
  {
    id: 'silver',
    name: 'Silver',
    price: 20000,
    icon: <Award className="h-6 w-6" />,
    description: 'Essential visibility package for businesses',
    slotsLabel: 'Unlimited slots',
    features: [
      'Logo on event website & select signage',
      'Mention in event brochure',
      'Basic exhibition space',
      'General networking access',
      'Social media mentions',
      'Invitation to exclusive VIP dinner',
      '4 VIP passes',
    ],
  },
  {
    id: 'bronze',
    name: 'Bronze',
    price: 10000,
    icon: <Zap className="h-6 w-6" />,
    description: 'Entry-level brand presence',
    slotsLabel: 'Unlimited slots',
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

const Sponsors = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const handleSelectTier = (tierId: string) => {
    setSelectedTier(tierId);
    window.location.href = `/register?type=sponsor&tier=${tierId}`;
  };

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
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
    >
      {sponsorTiers.map(tier => (
        <motion.div key={tier.id} variants={itemVariants} className="relative">
          <Card
            className={`flex flex-col justify-between h-full border transition-all duration-300 hover:shadow-lg ${
              tier.popular ? 'ring-2 ring-primary shadow-lg' : 'hover:shadow-md'
            }`}
          >
            {/* Popular Badge - Positioned at far left */}
            {tier.popular && (
              <div className="absolute top-0 left-6">
                <div className="bg-primary text-white px-3 py-1 rounded-b-md text-xs font-medium">
                  Most Popular
                </div>
              </div>
            )}

            <CardHeader className={tier.popular ? 'pt-6' : ''}>
              <div className="flex justify-between items-center mb-2">
                <div
                  className={`p-2 rounded-full ${
                    tier.popular ? 'bg-primary/10 text-primary' : 'bg-muted'
                  }`}
                >
                  {tier.icon}
                </div>
                <Badge variant={tier.popular ? 'default' : 'outline'}>
                  {tier.slotsLabel}
                </Badge>
              </div>
              <CardTitle
                className={`text-xl font-bold ${
                  tier.popular ? 'text-primary' : ''
                }`}
              >
                {tier.name}
              </CardTitle>
              <div
                className={`text-2xl font-semibold mt-2 ${
                  tier.popular ? 'text-primary' : ''
                }`}
              >
                ${tier.price.toLocaleString()}
              </div>
              <CardDescription className="mt-1 text-muted-foreground">
                {tier.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-grow">
              <hr
                className={`my-4 ${
                  tier.popular ? 'border-primary/20' : 'border-gray-300'
                }`}
              />
              <ul className="space-y-3 mt-4">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check
                      className={`h-5 w-5 mt-1 flex-shrink-0 ${
                        tier.popular ? 'text-primary' : 'text-green-500'
                      }`}
                    />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="pt-4 mt-auto">
              <Button
                className={`w-full transition-all duration-300 ${
                  tier.popular
                    ? 'bg-primary hover:bg-primary/90 text-white'
                    : ''
                }`}
                variant={tier.popular ? 'default' : 'outline'}
                onClick={() => handleSelectTier(tier.id)}
              >
                Select Package
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Sponsors;

'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Check, Crown, Diamond, Star } from 'lucide-react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface ExhibitorPackage {
  id: string;
  name: string;
  price: number;
  description: string;
  slots: number;
  slotsRemaining: number;
  features: string[];
  popular?: boolean;
  icon: React.ReactNode;
}

const Exhibitors = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const exhibitorPackages: ExhibitorPackage[] = [
    {
      id: 'premium',
      name: 'Premium',
      price: 3000,
      description: 'For established organizations',
      slots: 2,
      slotsRemaining: 2,
      icon: <Diamond className="w-8 h-8" />,
      features: [
        'VIP Networking Access',
        'Exhibitor badges for 6 personnel',
        'Exhibition Booth 3m X 9m',
        '3 Rounded Tables',
        '6 Standard Chairs',
        '2 13 amps Electrical Socket',
        'Dustbin',
      ],
    },
    {
      id: 'modular',
      name: 'Modular',
      price: 2000,
      description: 'Great for growing companies',
      slots: 3,
      slotsRemaining: 3,
      icon: <Crown className="w-8 h-8" />,
      features: [
        'Exhibition Booth 3m X 6m',
        'Exhibitor badges for 4 personnel',
        '2 Round Table',
        '4 Standard Chairs',
        '1 13amp Electrical Socket',
        'Dustbin',
      ],
      popular: true,
    },
    {
      id: 'basic',
      name: 'Basic',
      price: 1000,
      description: 'Perfect for small businesses',
      slots: 5,
      slotsRemaining: 5,
      icon: <Star className="w-8 h-8" />,
      features: [
        '1 Exhibition Booth: 3m X 3m',
        
        '1 Rounded Table',
        '2 Standard Chairs',
        '1 13amp Electrical Socket',
        'Dustbin',
      ],
    },
  ];

  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const handleSelectPackage = (packageId: string) => {
    setSelectedPackage(packageId);
    // Navigate to registration page with exhibitor package pre-selected
    window.location.href = `/register?type=exhibitor&package=${packageId}`;
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
    <div className="w-full py-12 px-4">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {exhibitorPackages.map(pkg => (
          <motion.div key={pkg.id} variants={itemVariants}>
            <Card className="relative h-full bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 group">
              {/* Top Section with Icon and Slots */}
              <div className="flex items-center justify-between p-6 pb-4">
                <div className="text-gray-600">{pkg.icon}</div>
                <div className="text-right">
                  <span className="text-sm font-medium text-gray-900">
                    {pkg.slotsRemaining} slots available
                  </span>
                </div>
              </div>

              {/* Title and Price Section */}
              <div className="px-6 pb-6 text-left">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </CardTitle>

                <div className="mb-3">
                  <span className="text-3xl font-bold text-gray-900">
                    ${pkg.price.toLocaleString()}
                  </span>
                </div>

                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {pkg.description}
                </CardDescription>
              </div>

              {/* Features Section */}
              <CardContent className="px-6 pt-0 pb-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-green-600 shrink-0 mt-1" />
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-0 right-6">
                  <div className="bg-primary text-white px-3 py-1 rounded-b-md text-xs font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Action Button */}
              <CardFooter className="p-6 pt-0">
                <Button
                  onClick={() => handleSelectPackage(pkg.id)}
                  className="w-full py-3 text-base font-medium transition-all duration-300"
                  variant="outline"
                >
                  Select {pkg.name}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Exhibitors;

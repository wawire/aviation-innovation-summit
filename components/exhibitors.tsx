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
      slots: 5,
      slotsRemaining: 3,
      features: [
        'VIP Networking Access',
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
      slots: 8,
      slotsRemaining: 5,
      features: [
        'Exhibition Booth 3m X 6m',
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
      slots: 12,
      slotsRemaining: 8,
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
    // In a real application, this would navigate to a form or payment page
    setTimeout(() => {
      const element = document.getElementById('contact-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
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
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {exhibitorPackages.map((pkg) => (
        <motion.div key={pkg.id} variants={itemVariants}>
          <Card
            className={`h-full border ${
              pkg.popular
                ? 'border-primary border-2'
                : 'border-gray-200 dark:border-gray-800'
            } relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group`}
            style={{ position: 'relative' }}
          >
            {pkg.popular && (
              <div
                className="absolute inset-x-0 top-0"
                style={{ width: '100%' }}
              >
                <div className="bg-primary text-white text-xs font-medium py-1.5 text-center w-full">
                  MOST POPULAR
                </div>
              </div>
            )}
            <CardHeader className={`pb-4 ${pkg.popular ? 'pt-10' : 'pt-6'}`}>
              <div className="flex justify-between items-center mb-1">
                <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                <Badge variant="outline" className="text-xs">
                  {pkg.slotsRemaining} slots available
                </Badge>
              </div>
              <div className="flex items-baseline mt-2">
                <span className="text-3xl font-bold">${pkg.price}</span>
              </div>
              <CardDescription className="mt-2">
                {pkg.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="h-px w-full bg-gray-200 dark:bg-gray-800 my-2"></div>
              <ul className="space-y-3 mt-4">
                {pkg.features.map((feature, index) => (
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
                  pkg.id === 'premium'
                    ? 'bg-black hover:bg-black/90 text-white'
                    : pkg.id === 'modular'
                    ? 'bg-primary hover:bg-primary/90'
                    : 'border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800'
                }`}
                variant={
                  pkg.id === 'premium' || pkg.id === 'modular'
                    ? 'default'
                    : 'outline'
                }
                onClick={() => handleSelectPackage(pkg.id)}
                asChild
              >
                <a
                  href="https://rb.gy/yoh2rs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Become an Exhibitor
                </a>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Exhibitors;

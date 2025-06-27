'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import {
  Building,
  Check,
  Globe,
  Lightbulb,
  Plane,
  Shield,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';

const AboutRedesigned = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const industries = [
    {
      name: 'Aviation',
      icon: <Plane className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />,
      description:
        'Airlines, airports, air traffic management, and aviation authorities',
      image: '/images/industry-aviation.jpg',
    },
    {
      name: 'Finance',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 lg:h-8 lg:w-8 text-primary"
        >
          <path d="M2 17h2.095M4.095 17h2.095M6.19 17h2.095M8.286 17h2.095M10.38 17h2.096M12.476 17h2.095M14.57 17h2.096M16.667 17h2.095M18.762 17H22M12 6v11"></path>
          <circle cx="12" cy="6" r="4"></circle>
        </svg>
      ),
      description:
        'Investors, financiers, venture capitalists, and financial institutions',
      image: '/images/industry-finance.jpg',
    },
    {
      name: 'Tourism',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 lg:h-8 lg:w-8 text-primary"
        >
          <path d="M2 12h20"></path>
          <path d="M2 20h20"></path>
          <path d="M2 4h20"></path>
          <path d="M6 12v8"></path>
          <path d="M18 12v8"></path>
          <path d="M12 4v16"></path>
        </svg>
      ),
      description: 'Tourism boards, hospitality leaders, and travel agencies',
      image: '/images/industry-tourism.jpg',
    },
    {
      name: 'Technology',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 lg:h-8 lg:w-8 text-primary"
        >
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <path d="M7 7h10"></path>
          <path d="M7 12h10"></path>
          <path d="M7 17h10"></path>
        </svg>
      ),
      description:
        'Tech providers, startups, AI specialists, and blockchain experts',
      image: '/images/industry-technology.jpg',
    },
    {
      name: 'Logistics',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 lg:h-8 lg:w-8 text-primary"
        >
          <rect width="16" height="16" x="4" y="4" rx="2"></rect>
          <path d="M4 13h16"></path>
          <path d="M4 9h16"></path>
          <path d="M4 17h16"></path>
        </svg>
      ),
      description:
        'Supply chain professionals, cargo operators, and freight forwarders',
      image: '/images/industry-logistics.jpg',
    },
    {
      name: 'Government',
      icon: <Building className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />,
      description: 'Policymakers, regulators, and government representatives',
      image: '/images/industry-government.jpg',
    },
  ];

  const keyThemes = [
    {
      title: 'Infrastructure Development',
      description:
        'Strengthening airports, air traffic management, and regional connectivity through cutting-edge solutions.',
      icon: <Building className="h-8 w-8 lg:h-10 lg:w-10 text-primary" />,
      image: '/images/theme-infrastructure.jpg',
    },
    {
      title: 'Efficiency & Sustainability',
      description:
        'Exploring funding models and innovative approaches for long-term sustainability in African aviation.',
      icon: <TrendingUp className="h-8 w-8 lg:h-10 lg:w-10 text-primary" />,
      image: '/images/theme-sustainability.jpg',
    },
    {
      title: 'Regional Partnerships',
      description:
        'Identifying synergies among African airlines, governments, and investors for collaborative growth.',
      icon: <Users className="h-8 w-8 lg:h-10 lg:w-10 text-primary" />,
      image: '/images/theme-partnerships.jpg',
    },
    {
      title: 'Pan-African Connectivity',
      description:
        'Enhancing regional aviation ties to improve air transport across the continent.',
      icon: <Globe className="h-8 w-8 lg:h-10 lg:w-10 text-primary" />,
      image: '/images/theme-connectivity.jpg',
    },
    {
      title: 'Technological Advancements',
      description:
        'Utilizing AI and automation to improve operational efficiency, safety, and customer experience.',
      icon: <Lightbulb className="h-8 w-8 lg:h-10 lg:w-10 text-primary" />,
      image: '/images/theme-technology.jpg',
    },
    {
      title: 'Blockchain Security',
      description:
        'Employing blockchain technology to increase transparency and security in aviation operations.',
      icon: <Shield className="h-8 w-8 lg:h-10 lg:w-10 text-primary" />,
      image: '/images/theme-blockchain.jpg',
    },
  ];

  const objectives = [
    {
      title: 'Explore Cross-Industry Collaboration',
      description:
        'Involve investors, policymakers, and industry leaders to drive investment in aviation infrastructure',
      icon: <Target className="h-5 w-5 text-primary" />,
      image: '/images/objective-collaboration.jpg',
    },
    {
      title: "Highlight Innovation's Role",
      description:
        'Demonstrate how innovation enhances efficiency, customer experience, and operational excellence',
      icon: <Target className="h-5 w-5 text-primary" />,
      image: '/images/objective-innovation.jpg',
    },
    {
      title: 'Showcase Funding Models',
      description:
        'Present innovative financing models and business strategies that bolster industry resilience',
      icon: <Target className="h-5 w-5 text-primary" />,
      image: '/images/objective-funding.jpg',
    },
    {
      title: 'Foster Regulatory Dialogue',
      description:
        'Encourage discussions on regulatory frameworks that create an enabling environment for investments',
      icon: <Target className="h-5 w-5 text-primary" />,
      image: '/images/objective-regulatory.jpg',
    },
  ];

  const outcomes = [
    'Strengthened Cross-Sector Partnerships',
    'Defined Investment Roadmaps',
    'Policy Recommendations',
    'Innovative Financing Models',
    'Commitments to Sustainable Practices',
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          <span className="text-primary font-semibold mb-2 block text-sm lg:text-base">
            About The Summit
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6">
            Shaping Africa's Aviation Future Through Innovation
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
            Africa's aviation industry is at a critical turning point, where
            strategic investments and innovation can drive transformative
            growth. The Africa Aviation Innovation Summit 2025 brings together
            aviation leaders, policymakers, investors, and professionals to
            explore how innovative investments can fuel the next phase of
            Africa's aviation expansion.
          </p>
        </div>

        <Tabs defaultValue="overview" className="mb-12 lg:mb-16">
          <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-3 mb-6 lg:mb-8 h-12 lg:h-14">
            <TabsTrigger
              value="overview"
              className="text-xs sm:text-sm lg:text-base"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="objectives"
              className="text-xs sm:text-sm lg:text-base"
            >
              Objectives
            </TabsTrigger>
            <TabsTrigger
              value="outcomes"
              className="text-xs sm:text-sm lg:text-base"
            >
              Expected Outcomes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            {/* Hero Image Section */}
            <div className="mb-12 lg:mb-16">
              <div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden">
                <img
                  src="/images/about-hero.jpg"
                  alt="Africa Aviation Innovation Summit"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 lg:p-8 text-white">
                    <h3 className="text-xl lg:text-2xl font-bold mb-2">
                      Transforming African Aviation
                    </h3>
                    <p className="text-sm lg:text-base opacity-90">
                      Where innovation meets investment opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={fadeIn}
                className="bg-muted/30 rounded-xl p-6 lg:p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg lg:text-xl">
                      High-Impact Networking
                    </h4>
                  </div>
                </div>
                <p className="text-muted-foreground pl-11 text-sm lg:text-base">
                  Connect with 500+ executives from 20+ countries
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                variants={fadeIn}
                className="bg-muted/30 rounded-xl p-6 lg:p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg lg:text-xl">
                      Investment Opportunities
                    </h4>
                  </div>
                </div>
                <p className="text-muted-foreground pl-11 text-sm lg:text-base">
                  Access to potential deal flow
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                variants={fadeIn}
                className="bg-muted/30 rounded-xl p-6 lg:p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg lg:text-xl">
                      Industry Insights
                    </h4>
                  </div>
                </div>
                <p className="text-muted-foreground pl-11 text-sm lg:text-base">
                  Cutting-edge knowledge from aviation leaders
                </p>
              </motion.div>
            </div>

            <div className="mb-12 lg:mb-16">
              <h3 className="text-xl lg:text-2xl font-bold text-center mb-6 lg:mb-8">
                Cross-Industry Collaboration
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="aspect-square relative">
                      <img
                        src={industry.image || '/placeholder.svg'}
                        alt={industry.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                        <div className="p-2 lg:p-3 rounded-full bg-white/20 backdrop-blur-sm mb-2 lg:mb-3">
                          {industry.icon}
                        </div>
                        <h4 className="font-bold text-sm lg:text-base text-center">
                          {industry.name}
                        </h4>
                      </div>
                    </div>
                    <div className="p-3 lg:p-4">
                      <p className="text-xs lg:text-sm text-muted-foreground text-center">
                        {industry.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {keyThemes.map((theme, index) => (
                <motion.div
                  key={theme.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  variants={fadeIn}
                  className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-video relative">
                    <img
                      src={theme.image || '/placeholder.svg'}
                      alt={theme.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="p-2 lg:p-3 rounded-full bg-white/20 backdrop-blur-sm">
                        {theme.icon}
                      </div>
                    </div>
                  </div>
                  <div className="p-4 lg:p-6">
                    <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3">
                      {theme.title}
                    </h3>
                    <p className="text-sm lg:text-base text-muted-foreground">
                      {theme.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="objectives">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {objectives.map((objective, index) => (
                  <motion.div
                    key={objective.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md border-l-4 border-primary"
                  >
                    <div className="aspect-video relative">
                      <img
                        src={objective.image || '/placeholder.svg'}
                        alt={objective.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <div className="p-2 lg:p-3 rounded-full bg-primary/20 backdrop-blur-sm">
                          {objective.icon}
                        </div>
                      </div>
                    </div>
                    <div className="p-4 lg:p-6">
                      <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3">
                        {objective.title}
                      </h3>
                      <p className="text-sm lg:text-base text-muted-foreground">
                        {objective.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 lg:mt-16 p-6 lg:p-8 bg-primary/5 rounded-xl border border-primary/20">
                <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center">
                  Event Format
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/20 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm lg:text-base">
                        CEO's Breakfast
                      </h4>
                      <p className="text-xs lg:text-sm text-muted-foreground">
                        An exclusive gathering of top executives to discuss
                        industry trends and opportunities
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/20 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M12 20h9"></path>
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm lg:text-base">
                        Keynote Addresses
                      </h4>
                      <p className="text-xs lg:text-sm text-muted-foreground">
                        Expert insights from industry leaders, policymakers, and
                        investors
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/20 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm lg:text-base">
                        Panel Discussions
                      </h4>
                      <p className="text-xs lg:text-sm text-muted-foreground">
                        Engaging dialogues featuring aviation, finance, tourism,
                        logistics, and technology experts
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/20 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm lg:text-base">
                        Case Studies & Success Stories
                      </h4>
                      <p className="text-xs lg:text-sm text-muted-foreground">
                        Showcasing innovative aviation investment strategies and
                        business models
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/20 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                        <path d="M12 8v-2"></path>
                        <path d="M12 18v-2"></path>
                        <path d="M8 12H6"></path>
                        <path d="M18 12h-2"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm lg:text-base">
                        Innovation & Investment Showcases
                      </h4>
                      <p className="text-xs lg:text-sm text-muted-foreground">
                        A platform for startups, investors, and technology
                        providers to present cutting-edge solutions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/20 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm lg:text-base">
                        Workshops & Interactive Sessions
                      </h4>
                      <p className="text-xs lg:text-sm text-muted-foreground">
                        Designed for knowledge sharing and capacity building
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="outcomes">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
                {outcomes.map((outcome, index) => (
                  <motion.div
                    key={outcome}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-xl shadow-md border-t-4 border-primary flex items-center gap-4"
                  >
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg lg:text-xl">
                      {index + 1}
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold">{outcome}</h3>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-primary/5 rounded-xl p-6 lg:p-8 border border-primary/20"
              >
                <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center">
                  Why Mombasa?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/20 mt-1">
                      <Plane className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm lg:text-base">
                        KQ's Coastal Hub
                      </h4>
                      <p className="text-xs lg:text-sm text-muted-foreground">
                        Mombasa serves as a secondary hub for Kenya Airways,
                        complementing its primary operations at JKIA in Nairobi
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/20 mt-1">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm lg:text-base">
                        Strategic Coastal Hub
                      </h4>
                      <p className="text-xs lg:text-sm text-muted-foreground">
                        Serving as a major economic and logistics gateway for
                        East Africa, integrating air, sea, and land transport
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/20 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                        <line x1="6" x2="6" y1="1" y2="4"></line>
                        <line x1="10" x2="10" y1="1" y2="4"></line>
                        <line x1="14" x2="14" y1="1" y2="4"></line>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm lg:text-base">
                        Tourism and Trade Potential
                      </h4>
                      <p className="text-xs lg:text-sm text-muted-foreground">
                        As a premier travel destination, Mombasa underscores
                        aviation's vital role in Africa's tourism industry
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/20 mt-1">
                      <Building className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm lg:text-base">
                        Business-Friendly Environment
                      </h4>
                      <p className="text-xs lg:text-sm text-muted-foreground">
                        Kenya offers robust policy support for aviation and
                        economic growth, making it an attractive investment
                        destination
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AboutRedesigned;

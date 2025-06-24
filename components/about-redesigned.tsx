'use client';

import Stats from '@/components/stats';
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
      icon: <Plane className="h-8 w-8 text-primary" />,
      description:
        'Airlines, airports, air traffic management, and aviation authorities',
    },
    {
      name: 'Finance',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M2 17h2.095M4.095 17h2.095M6.19 17h2.095M8.286 17h2.095M10.38 17h2.096M12.476 17h2.095M14.57 17h2.096M16.667 17h2.095M18.762 17H22M12 6v11"></path>
          <circle cx="12" cy="6" r="4"></circle>
        </svg>
      ),
      description:
        'Investors, financiers, venture capitalists, and financial institutions',
    },
    {
      name: 'Tourism',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
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
    },
    {
      name: 'Technology',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <path d="M7 7h10"></path>
          <path d="M7 12h10"></path>
          <path d="M7 17h10"></path>
        </svg>
      ),
      description:
        'Tech providers, startups, AI specialists, and blockchain experts',
    },
    {
      name: 'Logistics',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <rect width="16" height="16" x="4" y="4" rx="2"></rect>
          <path d="M4 13h16"></path>
          <path d="M4 9h16"></path>
          <path d="M4 17h16"></path>
        </svg>
      ),
      description:
        'Supply chain professionals, cargo operators, and freight forwarders',
    },
    {
      name: 'Government',
      icon: <Building className="h-8 w-8 text-primary" />,
      description: 'Policymakers, regulators, and government representatives',
    },
  ];

  const keyThemes = [
    {
      title: 'Infrastructure Development',
      description:
        'Strengthening airports, air traffic management, and regional connectivity through cutting-edge solutions.',
      icon: <Building className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Efficiency & Sustainability',
      description:
        'Exploring funding models and innovative approaches for long-term sustainability in African aviation.',
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Regional Partnerships',
      description:
        'Identifying synergies among African airlines, governments, and investors for collaborative growth.',
      icon: <Users className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Pan-African Connectivity',
      description:
        'Enhancing regional aviation ties to improve air transport across the continent.',
      icon: <Globe className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Technological Advancements',
      description:
        'Utilizing AI and automation to improve operational efficiency, safety, and customer experience.',
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Blockchain Security',
      description:
        'Employing blockchain technology to increase transparency and security in aviation operations.',
      icon: <Shield className="h-10 w-10 text-primary" />,
    },
  ];

  const objectives = [
    {
      title: 'Explore Cross-Industry Collaboration',
      description:
        'Involve investors, policymakers, and industry leaders to drive investment in aviation infrastructure',
      icon: <Target className="h-5 w-5 text-primary" />,
    },
    {
      title: "Highlight Innovation's Role",
      description:
        'Demonstrate how innovation enhances efficiency, customer experience, and operational excellence',
      icon: <Target className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Showcase Funding Models',
      description:
        'Present innovative financing models and business strategies that bolster industry resilience',
      icon: <Target className="h-5 w-5 text-primary" />,
    },
    {
      title: 'Foster Regulatory Dialogue',
      description:
        'Encourage discussions on regulatory frameworks that create an enabling environment for investments',
      icon: <Target className="h-5 w-5 text-primary" />,
    },
  ];

  const outcomes = [
    'Strengthened Cross-Sector Partnerships',
    'Defined Investment Roadmaps',
    'Policy Recommendations',
    'Innovative Financing Models',
    'Commitments to Sustainable Practices',
  ];

  const eventFormats = [
    {
      title: "CEO's Breakfast",
      description:
        'An exclusive gathering of top executives to discuss industry trends and opportunities',
      icon: (
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
      ),
    },
    {
      title: 'Keynote Addresses',
      description:
        'Expert insights from industry leaders, policymakers, and investors',
      icon: (
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
      ),
    },
    {
      title: 'Panel Discussions',
      description:
        'Engaging dialogues featuring aviation, finance, tourism, logistics, and technology experts',
      icon: (
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
      ),
    },
    {
      title: 'Case Studies & Success Stories',
      description:
        'Showcasing innovative aviation investment strategies and business models',
      icon: (
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
      ),
    },
    {
      title: 'Innovation & Investment Showcases',
      description:
        'A platform for startups, investors, and technology providers to present cutting-edge solutions',
      icon: (
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
      ),
    },
    {
      title: 'Workshops & Interactive Sessions',
      description: 'Designed for knowledge sharing and capacity building',
      icon: (
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
      ),
    },
  ];

  // const mombasaReasons = [
  //   {
  //     title: "KQ's Coastal Hub",
  //     description:
  //       'Mombasa serves as a secondary hub for Kenya Airways, complementing its primary operations at JKIA in Nairobi',
  //     icon: <Plane className="h-5 w-5 text-primary" />,
  //   },
  //   {
  //     title: 'Strategic Coastal Hub',
  //     description:
  //       'Serving as a major economic and logistics gateway for East Africa, integrating air, sea, and land transport',
  //     icon: <Globe className="h-5 w-5 text-primary" />,
  //   },
  //   {
  //     title: 'Tourism and Trade Potential',
  //     description:
  //       "As a premier travel destination, Mombasa underscores aviation's vital role in Africa's tourism industry",
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="20"
  //         height="20"
  //         viewBox="0 0 24 24"
  //         fill="none"
  //         stroke="currentColor"
  //         strokeWidth="2"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         className="text-primary"
  //       >
  //         <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
  //         <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
  //         <line x1="6" x2="6" y1="1" y2="4"></line>
  //         <line x1="10" x2="10" y1="1" y2="4"></line>
  //         <line x1="14" x2="14" y1="1" y2="4"></line>
  //       </svg>
  //     ),
  //   },
  //   {
  //     title: 'Business-Friendly Environment',
  //     description:
  //       'Kenya offers robust policy support for aviation and economic growth, making it an attractive investment destination',
  //     icon: <Building className="h-5 w-5 text-primary" />,
  //   },
  // ];

  return (
    <section
      id="about"
      className="section-padding bg-white dark:bg-gray-950 py-16"
    >
      <Stats />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold mb-2 block">
            About The Summit
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Shaping Africa's Aviation Future Through Innovation
          </h2>
          <p className="text-muted-foreground text-lg">
            Africa's aviation industry is at a critical turning point, where
            strategic investments and innovation can drive transformative
            growth. The Africa Aviation Innovation Summit 2025 brings together
            aviation leaders, policymakers, investors, and professionals to
            explore how innovative investments can fuel the next phase of
            Africa's aviation expansion.
          </p>
        </div>

        <Tabs defaultValue="overview" className="mb-16">
          <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-2 mb-10">
            <TabsTrigger value="overview" className="text-sm md:text-base py-3">
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="objectives-outcomes"
              className="text-sm md:text-base py-3"
            >
              Objectives & Outcomes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={fadeIn}
                className="bg-muted/30 rounded-lg p-6 md:p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">
                      High-Impact Networking
                    </h4>
                  </div>
                </div>
                <p className="text-muted-foreground pl-11">
                  Connect with 500+ executives from 20+ countries
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                variants={fadeIn}
                className="bg-muted/30 rounded-lg p-6 md:p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">
                      Investment Opportunities
                    </h4>
                  </div>
                </div>
                <p className="text-muted-foreground pl-11">
                  Access to potential deal flow
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                variants={fadeIn}
                className="bg-muted/30 rounded-lg p-6 md:p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">Industry Insights</h4>
                  </div>
                </div>
                <p className="text-muted-foreground pl-11">
                  Cutting-edge knowledge from aviation leaders
                </p>
              </motion.div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
                Cross-Industry Collaboration
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-muted/30 transition-colors"
                  >
                    <div className="p-3 rounded-full bg-primary/10 mb-3">
                      {industry.icon}
                    </div>
                    <h4 className="font-bold mb-2">{industry.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {industry.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {keyThemes.slice(0, 6).map((theme, index) => (
                <motion.div
                  key={theme.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  variants={fadeIn}
                  className="flex gap-4 p-5 rounded-lg hover:bg-muted/30 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                      {theme.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{theme.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {theme.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="objectives-outcomes">
            <div className="max-w-7xl mx-auto">
              {/* New layout - Centered heading for both sections */}
              <div className="mb-16">
                {/* Objectives Section with visual cards layout */}
                <div className="mb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="text-center mb-10"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-primary inline-block border-b-2 border-primary/30 pb-2">
                      Summit Objectives
                    </h3>
                  </motion.div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                    {objectives.map((objective, index) => (
                      <motion.div
                        key={objective.title}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                      >
                        <div className="bg-primary/10 p-4 flex items-center gap-4">
                          <div className="bg-white dark:bg-gray-700 p-3 rounded-full">
                            {objective.icon}
                          </div>
                          <h4 className="font-bold text-lg">
                            {objective.title}
                          </h4>
                        </div>
                        <div className="p-5">
                          <p className="text-muted-foreground">
                            {objective.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Outcomes & Format in a side-by-side layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                  {/* Left side - Outcomes */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                      className="text-center mb-8"
                    >
                      <h3 className="text-xl md:text-2xl font-bold text-primary inline-block border-b-2 border-primary/30 pb-2">
                        Expected Outcomes
                      </h3>
                    </motion.div>

                    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-sm p-6">
                      {outcomes.map((outcome, index) => (
                        <motion.div
                          key={outcome}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center gap-4 mb-4 last:mb-0 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                        >
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-md flex-shrink-0">
                            {index + 1}
                          </div>
                          <h4 className="text-base font-medium">{outcome}</h4>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Right side - Event Format */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                      className="text-center mb-8"
                    >
                      <h3 className="text-xl md:text-2xl font-bold text-primary inline-block border-b-2 border-primary/30 pb-2">
                        Event Format
                      </h3>
                    </motion.div>

                    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-sm p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {eventFormats.map((format, index) => (
                          <motion.div
                            key={format.title}
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                          >
                            <div className="p-2 rounded-full bg-primary/10 flex-shrink-0 mt-1">
                              {format.icon}
                            </div>
                            <div>
                              <h4 className="font-medium text-base mb-1">
                                {format.title}
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                {format.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Mombasa Section - Redesigned
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 sm:p-8 lg:p-10 border border-primary/20 shadow-sm"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                  Why Mombasa?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
                  {mombasaReasons.map((reason, index) => (
                    <div
                      key={reason.title}
                      className="flex items-start gap-4 group hover:bg-white/50 p-4 rounded-lg transition-all duration-300"
                    >
                      <div className="p-3 rounded-full bg-primary/20 mt-1 group-hover:bg-primary/30 transition-colors">
                        {reason.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">
                          {reason.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div> */}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AboutRedesigned;

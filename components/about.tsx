"use client"

import { motion } from "framer-motion"
import { Check, Plane, TrendingUp, Users, Target } from "lucide-react"

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const objectives = [
    {
      title: "Foster Innovation",
      description: "Promote innovative solutions to address Africa's unique aviation challenges",
      icon: <Target className="h-5 w-5 text-primary" />,
    },
    {
      title: "Attract Investment",
      description: "Connect aviation stakeholders with potential investors and funding opportunities",
      icon: <Target className="h-5 w-5 text-primary" />,
    },
    {
      title: "Build Partnerships",
      description: "Create a platform for collaboration between airlines, governments, and service providers",
      icon: <Target className="h-5 w-5 text-primary" />,
    },
    {
      title: "Develop Talent",
      description: "Support the growth of Africa's aviation workforce through knowledge sharing",
      icon: <Target className="h-5 w-5 text-primary" />,
    },
  ]

  const features = [
    {
      title: "Infrastructure Development",
      description:
        "Strengthening airports, air traffic management, and regional connectivity through cutting-edge solutions.",
      icon: <Plane className="h-10 w-10 text-primary" />,
    },
    {
      title: "Efficiency & Sustainability",
      description:
        "Exploring funding models and innovative approaches for long-term sustainability in African aviation.",
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
    },
    {
      title: "Regional Partnerships",
      description: "Identifying synergies among African airlines, governments, and investors for collaborative growth.",
      icon: <Users className="h-10 w-10 text-primary" />,
    },
    {
      title: "Pan-African Connectivity",
      description: "Enhancing regional aviation ties to improve air transport across the continent.",
      icon: <Plane className="h-10 w-10 text-primary transform rotate-45" />,
    },
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold mb-2 block">About The Summit</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Shaping Africa's Aviation Future Through Innovation</h2>
          <p className="text-muted-foreground text-lg">
            Africa's aviation industry is at a critical turning point, where strategic investments and innovation can
            drive transformative growth. The Africa Aviation Innovation Summit 2025 brings together aviation leaders,
            policymakers, investors, and professionals to explore how innovative investments can fuel the next phase of
            Africa's aviation expansion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeIn}
            className="bg-muted/30 rounded-lg p-8 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 rounded-full bg-primary/10">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-xl">High-Impact Networking</h4>
              </div>
            </div>
            <p className="text-muted-foreground pl-11">Connect with 500+ executives from 20+ countries</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={fadeIn}
            className="bg-muted/30 rounded-lg p-8 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 rounded-full bg-primary/10">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Investment Opportunities</h4>
              </div>
            </div>
            <p className="text-muted-foreground pl-11">Access to potential deal flow</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
            className="bg-muted/30 rounded-lg p-8 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 rounded-full bg-primary/10">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Industry Insights</h4>
              </div>
            </div>
            <p className="text-muted-foreground pl-11">Cutting-edge knowledge from aviation leaders</p>
          </motion.div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold inline-flex items-center">
              <Target className="h-6 w-6 text-primary mr-3" /> Key Objectives
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((objective, index) => (
              <motion.div
                key={objective.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-6 border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                    {objective.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{objective.title}</h4>
                  <p className="text-sm text-muted-foreground">{objective.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="p-4 rounded-full bg-primary/10 flex items-center justify-center">{feature.icon}</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

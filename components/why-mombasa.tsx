"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Plane, Globe, Building, MapPin, Waves } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const WhyMombasa = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const reasons = [
    {
      title: "KQ's Coastal Hub",
      description:
        "Mombasa serves as a secondary hub for Kenya Airways, complementing its primary operations at Jomo Kenyatta International Airport in Nairobi.",
      icon: <Plane className="h-8 w-8 text-primary" />,
    },
    {
      title: "Strategic Coastal Gateway",
      description:
        "A major economic and logistics gateway for East Africa, integrating air, sea, and land transport networks.",
      icon: <Globe className="h-8 w-8 text-primary" />,
    },
    {
      title: "Tourism Destination",
      description:
        "As a premier travel destination, Mombasa underscores aviation's vital role in Africa's tourism and hospitality industries.",
      icon: <Waves className="h-8 w-8 text-primary" />,
    },
    {
      title: "Business-Friendly Environment",
      description:
        "Kenya offers robust policy support for aviation and economic growth, making it an attractive investment destination.",
      icon: <Building className="h-8 w-8 text-primary" />,
    },
    {
      title: "Networking Opportunities",
      description:
        "The summit provides high-end networking experiences alongside Mombasa's picturesque beaches, resorts, and cultural attractions.",
      icon: <MapPin className="h-8 w-8 text-primary" />,
    },
  ]

  return (
    <section className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-semibold mb-2 block">Event Location</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Mombasa?</h2>
            <p className="text-muted-foreground mb-8">
              Mombasa, the coastal city of Kenya, serves as an ideal location for the Africa Aviation Innovation Summit
              2025, offering a unique blend of strategic advantages, natural beauty, and business opportunities.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">{reason.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="relative h-[500px] overflow-hidden">
                  <img
                    src="/images/mombasa-aerial.jpg"
                    alt="Mombasa Aerial View"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-white text-2xl font-bold mb-2">Mombasa, Kenya</h3>
                    <p className="text-white/80">October 16-17, 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="absolute -bottom-6 -right-6 z-20">
              <div className="bg-primary text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
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
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                  <span className="font-bold">GMT+3 (EAT)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyMombasa

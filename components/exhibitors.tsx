"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Sparkles } from "lucide-react"
import { useInView } from "react-intersection-observer"

interface ExhibitorPackage {
  id: string
  name: string
  price: number
  description: string
  slots: number
  slotsRemaining: number
  features: string[]
  popular?: boolean
}

const Exhibitors = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const exhibitorPackages: ExhibitorPackage[] = [
    {
      id: "premium",
      name: "Premium",
      price: 5000,
      description: "For established organizations",
      slots: 5,
      slotsRemaining: 3,
      features: [
        "VIP Networking Access",
        "Exhibition Booth 3m X 9m",
        "3 Rounded Tables",
        "6 Standard Chairs",
        "2 13 amps Electrical Socket",
        "Dustbin",
      ],
    },
    {
      id: "modular",
      name: "Modular",
      price: 3000,
      description: "Great for growing companies",
      slots: 8,
      slotsRemaining: 5,
      features: [
        "Exhibition Booth 3m X 6m",
        "2 Round Table",
        "4 Standard Chairs",
        "1 13amp Electrical Socket",
        "Dustbin",
      ],
      popular: true,
    },
    {
      id: "basic",
      name: "Basic",
      price: 1000,
      description: "Perfect for small businesses",
      slots: 12,
      slotsRemaining: 8,
      features: [
        "1 Exhibition Booth: 3m X 3m",
        "1 Rounded Table",
        "2 Standard Chairs",
        "1 13amp Electrical Socket",
        "Dustbin",
      ],
    },
  ]

  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)

  const handleSelectPackage = (packageId: string) => {
    setSelectedPackage(packageId)
    // Navigate to registration page with exhibitor package pre-selected
    window.location.href = `/register?type=exhibitor&package=${packageId}`
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
    >
      {exhibitorPackages.map((pkg) => (
        <motion.div key={pkg.id} variants={itemVariants}>
          <Card
            className={`h-full border-2 ${
              pkg.popular ? "border-primary" : "border-transparent"
            } relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group`}
          >
            {pkg.popular && (
              <div className="absolute top-5 right-5">
                <Badge className="bg-primary">
                  <Sparkles className="h-3 w-3 mr-1" /> Most Popular
                </Badge>
              </div>
            )}
            <CardHeader className="transition-all duration-300 group-hover:bg-gray-50 dark:group-hover:bg-gray-800">
              <CardTitle>{pkg.name}</CardTitle>
              <CardDescription>{pkg.description}</CardDescription>
              <div className="flex items-baseline mt-4">
                <span className="text-3xl font-bold">${pkg.price}</span>
                <span className="text-muted-foreground ml-2">/event</span>
              </div>
            </CardHeader>
            <CardContent>
              <Badge variant="outline" className="mb-4">
                {pkg.slotsRemaining} of {pkg.slots} slots available
              </Badge>
              <ul className="space-y-3">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full ${
                  pkg.popular ? "bg-primary hover:bg-primary/90" : ""
                } transition-transform duration-300 group-hover:scale-105`}
                variant={pkg.popular ? "default" : "outline"}
                onClick={() => handleSelectPackage(pkg.id)}
              >
                Select {pkg.name}
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Exhibitors

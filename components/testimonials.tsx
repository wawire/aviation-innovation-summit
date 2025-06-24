"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  image: string
  quote: string
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Allan Kilavuka",
      role: "Group Managing Director and CEO",
      company: "Kenya Airways PLC",
      image: "/images/testimonial-1.png",
      quote:
        "The Africa Aviation Innovation Summit has been instrumental in fostering partnerships that have accelerated our digital transformation journey. The connections made here have directly impacted our operational efficiency.",
    },
    {
      id: 2,
      name: "Abderahmane Berthe",
      role: "Secretary General",
      company: "AFRAA",
      image: "/images/testimonial-2.png",
      quote:
        "AAIS provides a unique platform for African aviation stakeholders to collaborate on solutions that address our continent's specific challenges. The quality of discussions and networking opportunities is unmatched.",
    },
    {
      id: 3,
      name: "Sarah Mwangi",
      role: "Director of Innovation",
      company: "East African Aviation Authority",
      image: "/images/testimonial-3.png",
      quote:
        "The investment opportunities presented at AAIS have been game-changing for our regional infrastructure development. We've secured partnerships that will transform air travel across East Africa.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold mb-2 block">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hear From Our Past Attendees</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how AAIS has helped aviation leaders across Africa drive innovation and growth.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-none shadow-lg overflow-hidden bg-white dark:bg-gray-800">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                <Quote className="h-12 w-12 text-primary/20 mb-6" />
                <p className="text-xl md:text-2xl leading-relaxed mb-8 italic">"{currentTestimonial.quote}"</p>

                <Avatar className="h-20 w-20 mb-4">
                  <AvatarImage src={currentTestimonial.image || "/placeholder.svg"} alt={currentTestimonial.name} />
                  <AvatarFallback>{currentTestimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>

                <div>
                  <h4 className="font-bold text-lg">{currentTestimonial.name}</h4>
                  <p className="text-muted-foreground">
                    {currentTestimonial.role}, {currentTestimonial.company}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 gap-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial} aria-label="Previous testimonial">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={nextTestimonial} aria-label="Next testimonial">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

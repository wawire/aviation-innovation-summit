"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Coffee, Utensils, Presentation, MessageSquare } from "lucide-react"

interface AgendaItem {
  id: string
  time: string
  title: string
  description: string
  speaker?: string
  speakerRole?: string
  speakerCompany?: string
  type: "keynote" | "panel" | "workshop" | "networking" | "break"
  icon: React.ReactNode
  track?: string
}

const Agenda = () => {
  const [filter, setFilter] = useState<string | null>(null)
  const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1")

  const day1: AgendaItem[] = [
    {
      id: "d1-1",
      time: "08:00 - 09:00",
      title: "Registration & Welcome Coffee",
      description: "Check-in and collect your badge while enjoying networking over coffee.",
      type: "networking",
      icon: <Coffee className="h-5 w-5" />,
    },
    {
      id: "d1-2",
      time: "09:00 - 09:30",
      title: "Opening Ceremony",
      description: "Official welcome address by Kenya Airways CEO and AFRAA Secretary General.",
      speaker: "Allan Kilavuka",
      speakerRole: "Group Managing Director and CEO",
      speakerCompany: "Kenya Airways PLC",
      type: "keynote",
      icon: <Presentation className="h-5 w-5" />,
    },
    {
      id: "d1-3",
      time: "09:30 - 10:30",
      title: "Keynote: The Future of African Aviation",
      description: "Exploring the transformative potential of innovation and investment in African aviation.",
      speaker: "Abderahmane Berthe",
      speakerRole: "Secretary General",
      speakerCompany: "AFRAA",
      type: "keynote",
      icon: <Presentation className="h-5 w-5" />,
    },
    {
      id: "d1-4",
      time: "10:30 - 11:00",
      title: "Networking Break",
      description: "Refreshments and networking opportunity.",
      type: "break",
      icon: <Coffee className="h-5 w-5" />,
    },
    {
      id: "d1-5",
      time: "11:00 - 12:30",
      title: "Panel: Innovative Infrastructure Development",
      description:
        "Strengthening airports, air traffic management, and regional connectivity through cutting-edge solutions.",
      type: "panel",
      icon: <MessageSquare className="h-5 w-5" />,
      track: "Main Hall",
    },
    {
      id: "d1-6",
      time: "11:00 - 12:30",
      title: "Workshop: Digital Transformation in Aviation",
      description: "Hands-on session exploring digital tools and strategies for operational excellence.",
      type: "workshop",
      icon: <Users className="h-5 w-5" />,
      track: "Workshop Room A",
    },
    {
      id: "d1-7",
      time: "12:30 - 14:00",
      title: "Lunch & Exhibition Networking",
      description: "Buffet lunch and time to explore the exhibition area.",
      type: "break",
      icon: <Utensils className="h-5 w-5" />,
    },
    {
      id: "d1-8",
      time: "14:00 - 15:30",
      title: "Panel: Investing in Efficiency and Sustainability",
      description: "Exploring funding models and innovative approaches for long-term sustainability.",
      type: "panel",
      icon: <MessageSquare className="h-5 w-5" />,
      track: "Main Hall",
    },
    {
      id: "d1-9",
      time: "14:00 - 15:30",
      title: "Workshop: Aviation Financing Masterclass",
      description: "Expert insights on securing investment for aviation projects.",
      type: "workshop",
      icon: <Users className="h-5 w-5" />,
      track: "Workshop Room A",
    },
    {
      id: "d1-10",
      time: "15:30 - 16:00",
      title: "Afternoon Break",
      description: "Refreshments and networking.",
      type: "break",
      icon: <Coffee className="h-5 w-5" />,
    },
    {
      id: "d1-11",
      time: "16:00 - 17:30",
      title: "Innovation Showcase",
      description: "Startups and technology providers present cutting-edge aviation solutions.",
      type: "panel",
      icon: <Presentation className="h-5 w-5" />,
    },
    {
      id: "d1-12",
      time: "18:30 - 21:00",
      title: "VIP Networking Dinner",
      description: "Exclusive dinner for sponsors, speakers, and VIP attendees (by invitation only).",
      type: "networking",
      icon: <Utensils className="h-5 w-5" />,
    },
  ]

  const day2: AgendaItem[] = [
    {
      id: "d2-1",
      time: "08:30 - 09:00",
      title: "Morning Coffee & Networking",
      description: "Start your day with coffee and connections.",
      type: "networking",
      icon: <Coffee className="h-5 w-5" />,
    },
    {
      id: "d2-2",
      time: "09:00 - 10:00",
      title: "Keynote: Pan-African Connectivity Solutions",
      description: "Enhancing regional aviation ties to improve air transport across the continent.",
      type: "keynote",
      icon: <Presentation className="h-5 w-5" />,
    },
    {
      id: "d2-3",
      time: "10:00 - 11:30",
      title: "Panel: Public-Private Collaborations",
      description: "Leveraging partnerships for aviation expansion.",
      type: "panel",
      icon: <MessageSquare className="h-5 w-5" />,
      track: "Main Hall",
    },
    {
      id: "d2-4",
      time: "10:00 - 11:30",
      title: "Workshop: Technological Advancements in Operations",
      description: "Utilizing AI and automation to improve operational efficiency, safety, and customer experience.",
      type: "workshop",
      icon: <Users className="h-5 w-5" />,
      track: "Workshop Room A",
    },
    {
      id: "d2-5",
      time: "11:30 - 12:00",
      title: "Networking Break",
      description: "Refreshments and networking opportunity.",
      type: "break",
      icon: <Coffee className="h-5 w-5" />,
    },
    {
      id: "d2-6",
      time: "12:00 - 13:30",
      title: "Panel: Regulatory and Policy Reforms",
      description: "Developing a pro-investment aviation environment through thoughtful reforms.",
      type: "panel",
      icon: <MessageSquare className="h-5 w-5" />,
      track: "Main Hall",
    },
    {
      id: "d2-7",
      time: "12:00 - 13:30",
      title: "Workshop: Developing Aviation Talent",
      description: "Building Africa's aviation workforce for sustained industry growth.",
      type: "workshop",
      icon: <Users className="h-5 w-5" />,
      track: "Workshop Room A",
    },
    {
      id: "d2-8",
      time: "13:30 - 14:30",
      title: "Lunch & Final Exhibition Networking",
      description: "Last chance to explore the exhibition area and make connections.",
      type: "break",
      icon: <Utensils className="h-5 w-5" />,
    },
    {
      id: "d2-9",
      time: "14:30 - 16:00",
      title: "Investment Roundtable",
      description: "Focused discussions between investors and aviation stakeholders.",
      type: "panel",
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      id: "d2-10",
      time: "16:00 - 16:30",
      title: "Closing Ceremony",
      description: "Summary of key takeaways and announcement of AAIS 2026.",
      type: "keynote",
      icon: <Presentation className="h-5 w-5" />,
    },
    {
      id: "d2-11",
      time: "16:30 - 18:00",
      title: "Farewell Cocktail Reception",
      description: "Celebrate the successful conclusion of AAIS 2025.",
      type: "networking",
      icon: <Users className="h-5 w-5" />,
    },
  ]

  const getFilteredAgenda = (agenda: AgendaItem[]) => {
    if (!filter) return agenda
    return agenda.filter((item) => item.type === filter)
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "keynote":
        return "bg-primary text-white"
      case "panel":
        return "bg-primary/80 text-white"
      case "workshop":
        return "bg-primary/60 text-white"
      case "networking":
        return "bg-primary/40 text-white"
      case "break":
        return "bg-primary/20 text-primary"
      default:
        return "bg-primary/80 text-white"
    }
  }

  return (
    <section id="agenda" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold mb-2 block">Event Schedule</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Summit Agenda</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Two days of insightful discussions, networking, and innovation showcases.
          </p>
        </div>

        {/* Day Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-muted rounded-full">
            <Button
              variant={activeDay === "day1" ? "default" : "ghost"}
              className={`rounded-full px-6 ${
                activeDay === "day1" ? "bg-primary text-white" : "text-black dark:text-white hover:text-primary"
              }`}
              onClick={() => setActiveDay("day1")}
            >
              Day 1 - October 16
            </Button>
            <Button
              variant={activeDay === "day2" ? "default" : "ghost"}
              className={`rounded-full px-6 ${
                activeDay === "day2" ? "bg-primary text-white" : "text-black dark:text-white hover:text-primary"
              }`}
              onClick={() => setActiveDay("day2")}
            >
              Day 2 - October 17
            </Button>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <Badge
            className={`cursor-pointer px-5 py-2 text-sm font-medium rounded-full ${
              !filter ? "bg-primary text-white" : "bg-muted text-black dark:text-white hover:bg-muted/80"
            }`}
            onClick={() => setFilter(null)}
          >
            All Sessions
          </Badge>
          <Badge
            className={`cursor-pointer px-5 py-2 text-sm font-medium rounded-full ${
              filter === "keynote" ? "bg-primary text-white" : "bg-muted text-black dark:text-white hover:bg-muted/80"
            }`}
            onClick={() => setFilter("keynote")}
          >
            Keynotes
          </Badge>
          <Badge
            className={`cursor-pointer px-5 py-2 text-sm font-medium rounded-full ${
              filter === "panel" ? "bg-primary text-white" : "bg-muted text-black dark:text-white hover:bg-muted/80"
            }`}
            onClick={() => setFilter("panel")}
          >
            Panels
          </Badge>
          <Badge
            className={`cursor-pointer px-5 py-2 text-sm font-medium rounded-full ${
              filter === "workshop" ? "bg-primary text-white" : "bg-muted text-black dark:text-white hover:bg-muted/80"
            }`}
            onClick={() => setFilter("workshop")}
          >
            Workshops
          </Badge>
          <Badge
            className={`cursor-pointer px-5 py-2 text-sm font-medium rounded-full ${
              filter === "networking"
                ? "bg-primary text-white"
                : "bg-muted text-black dark:text-white hover:bg-muted/80"
            }`}
            onClick={() => setFilter("networking")}
          >
            Networking
          </Badge>
          <Badge
            className={`cursor-pointer px-5 py-2 text-sm font-medium rounded-full ${
              filter === "break" ? "bg-primary text-white" : "bg-muted text-black dark:text-white hover:bg-muted/80"
            }`}
            onClick={() => setFilter("break")}
          >
            Breaks
          </Badge>
        </div>

        {/* Agenda Content */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {getFilteredAgenda(activeDay === "day1" ? day1 : day2).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border group-hover:border-primary/20">
                  <div className="flex flex-col md:flex-row">
                    {/* Time Column */}
                    <div className="md:w-1/4 p-6 flex flex-col justify-center bg-muted/20">
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`p-2 rounded-full ${getTypeColor(item.type)}`}>{item.icon}</div>
                        <Badge className={`${getTypeColor(item.type)} capitalize`}>{item.type}</Badge>
                      </div>
                      <p className="font-bold text-lg">{item.time}</p>
                      {item.track && (
                        <p className="text-sm text-muted-foreground mt-2 flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 mr-1"
                          >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          {item.track}
                        </p>
                      )}
                    </div>

                    {/* Content Column */}
                    <div className="md:w-3/4 p-6">
                      <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{item.description}</p>

                      {/* Speaker Info */}
                      {item.speaker && (
                        <div className="flex items-center mt-4 pt-4 border-t border-border">
                          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-3 text-primary font-bold">
                            {item.speaker.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium">{item.speaker}</p>
                            {item.speakerRole && item.speakerCompany && (
                              <p className="text-sm text-muted-foreground">
                                {item.speakerRole}, {item.speakerCompany}
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Agenda

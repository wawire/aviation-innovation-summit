"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Linkedin, Twitter, Globe, MapPin, Calendar, Users, Award, Briefcase, Plane } from "lucide-react"

interface Speaker {
  id: string
  name: string
  title: string
  company: string
  bio: string
  image: string
  category: "keynote" | "panelist" | "moderator"
  country: string
  expertise: string[]
  social: {
    linkedin?: string
    twitter?: string
    website?: string
  }
  sessionTitle?: string
  sessionTime?: string
  achievements: string[]
}

const Speakers = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null)

  const speakers: Speaker[] = [
    {
      id: "1",
      name: "Allan Kilavuka",
      title: "Group Managing Director and CEO",
      company: "Kenya Airways PLC",
      bio: "Allan Kilavuka is a seasoned aviation executive with over 20 years of experience in the industry. Under his leadership, Kenya Airways has undergone significant transformation, focusing on operational efficiency, route optimization, and strategic partnerships across Africa.",
      image: "/images/speaker-allan.jpg",
      category: "keynote",
      country: "Kenya",
      expertise: ["Aviation Leadership", "Strategic Planning", "African Aviation", "Airline Operations"],
      social: {
        linkedin: "https://linkedin.com/in/allan-kilavuka",
        twitter: "https://twitter.com/allankilavuka",
      },
      sessionTitle: "The Future of African Aviation: A CEO's Perspective",
      sessionTime: "Day 1, 9:30 AM",
      achievements: [
        "Led Kenya Airways' digital transformation",
        "Expanded KQ's African route network by 40%",
        "Implemented sustainable aviation initiatives",
        "20+ years in aviation industry",
      ],
    },
    {
      id: "2",
      name: "Abderahmane Berthe",
      title: "Secretary General",
      company: "African Airlines Association (AFRAA)",
      bio: "Abderahmane Berthe has been instrumental in promoting collaboration among African airlines and advocating for policies that support the growth of aviation across the continent. His work focuses on regulatory harmonization and capacity building.",
      image: "/images/speaker-berthe.jpg",
      category: "keynote",
      country: "Morocco",
      expertise: ["Aviation Policy", "Regulatory Affairs", "Pan-African Cooperation", "Industry Development"],
      social: {
        linkedin: "https://linkedin.com/in/abderahmane-berthe",
        website: "https://afraa.org",
      },
      sessionTitle: "Pan-African Aviation Integration: Opportunities and Challenges",
      sessionTime: "Day 1, 10:30 AM",
      achievements: [
        "Led AFRAA for 8+ years",
        "Championed Single African Air Transport Market",
        "Facilitated 50+ airline partnerships",
        "Expert in aviation liberalization",
      ],
    },
    {
      id: "3",
      name: "Dr. Sarah Mwangi",
      title: "Director of Innovation",
      company: "East African Aviation Authority",
      bio: "Dr. Sarah Mwangi is a leading expert in aviation technology and innovation. She has spearheaded numerous digital transformation initiatives across East African airports and air navigation services.",
      image: "/images/speaker-sarah.jpg",
      category: "panelist",
      country: "Kenya",
      expertise: ["Aviation Technology", "Digital Innovation", "Air Traffic Management", "Smart Airports"],
      social: {
        linkedin: "https://linkedin.com/in/sarah-mwangi-aviation",
        twitter: "https://twitter.com/sarahmwangi_av",
      },
      sessionTitle: "Digital Transformation in African Aviation",
      sessionTime: "Day 1, 2:00 PM",
      achievements: [
        "PhD in Aerospace Engineering",
        "Led 15+ digital aviation projects",
        "Published 30+ research papers",
        "Women in Aviation Leadership Award 2023",
      ],
    },
    {
      id: "4",
      name: "James Ochieng",
      title: "Chief Investment Officer",
      company: "African Development Bank",
      bio: "James Ochieng oversees infrastructure investments across Africa, with a particular focus on transportation and aviation projects. He has been instrumental in financing several major airport development projects.",
      image: "/images/speaker-james.jpg",
      category: "panelist",
      country: "Nigeria",
      expertise: [
        "Infrastructure Finance",
        "Aviation Investment",
        "Project Development",
        "Public-Private Partnerships",
      ],
      social: {
        linkedin: "https://linkedin.com/in/james-ochieng-adb",
      },
      sessionTitle: "Financing Africa's Aviation Infrastructure",
      sessionTime: "Day 2, 11:00 AM",
      achievements: [
        "$2B+ in aviation investments",
        "25+ years in development finance",
        "Led AfDB's transport strategy",
        "Expert in PPP structures",
      ],
    },
    {
      id: "5",
      name: "Fatima Al-Rashid",
      title: "CEO",
      company: "Middle East Aviation Partners",
      bio: "Fatima Al-Rashid is a prominent figure in aviation finance and has facilitated numerous partnerships between Middle Eastern and African aviation companies. She specializes in cross-border aviation investments.",
      image: "/images/speaker-fatima.jpg",
      category: "panelist",
      country: "UAE",
      expertise: ["Aviation Finance", "Cross-border Partnerships", "Investment Strategy", "Market Analysis"],
      social: {
        linkedin: "https://linkedin.com/in/fatima-al-rashid",
        website: "https://meaviationpartners.com",
      },
      sessionTitle: "Global Partnerships for African Aviation Growth",
      sessionTime: "Day 2, 2:00 PM",
      achievements: [
        "Facilitated $1.5B+ in aviation deals",
        "Founded MEAP in 2015",
        "Aviation Finance Expert of the Year 2022",
        "Board member of 5 aviation companies",
      ],
    },
    {
      id: "6",
      name: "Prof. Michael Chege",
      title: "Director",
      company: "African Aviation Research Institute",
      bio: "Professor Michael Chege is a renowned academic and researcher in aviation economics and policy. His research focuses on the economic impact of aviation on African development and sustainable aviation practices.",
      image: "/images/speaker-michael.jpg",
      category: "moderator",
      country: "South Africa",
      expertise: ["Aviation Economics", "Policy Research", "Sustainable Aviation", "Academic Leadership"],
      social: {
        linkedin: "https://linkedin.com/in/prof-michael-chege",
        website: "https://aari.ac.za",
      },
      sessionTitle: "Moderating: Sustainable Aviation Futures",
      sessionTime: "Day 2, 3:30 PM",
      achievements: [
        "PhD in Aviation Economics",
        "50+ published research papers",
        "Founded AARI in 2018",
        "UN Aviation Advisory Panel member",
      ],
    },
  ]

  const categories = [
    { id: "all", name: "All Speakers", count: speakers.length },
    { id: "keynote", name: "Keynote Speakers", count: speakers.filter((s) => s.category === "keynote").length },
    { id: "panelist", name: "Panel Experts", count: speakers.filter((s) => s.category === "panelist").length },
    { id: "moderator", name: "Moderators", count: speakers.filter((s) => s.category === "moderator").length },
  ]

  const filteredSpeakers =
    selectedCategory === "all" ? speakers : speakers.filter((speaker) => speaker.category === selectedCategory)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "keynote":
        return <Award className="h-4 w-4" />
      case "panelist":
        return <Users className="h-4 w-4" />
      case "moderator":
        return <Briefcase className="h-4 w-4" />
      default:
        return <Plane className="h-4 w-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "keynote":
        return "bg-primary text-white"
      case "panelist":
        return "bg-blue-500 text-white"
      case "moderator":
        return "bg-green-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold mb-2 block">Industry Leaders</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Meet Our Speakers
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              Learn from Africa's most influential aviation leaders, policymakers, and innovators who are shaping the
              future of the continent's aviation industry.
            </p>
          </motion.div>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full max-w-2xl">
            <TabsList className="grid w-full grid-cols-4 h-12">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2 text-sm">
                  {getCategoryIcon(category.id)}
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(" ")[0]}</span>
                  <Badge variant="secondary" className="ml-1 text-xs">
                    {category.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Speakers Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredSpeakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  {/* Speaker Image */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20">
                      <Avatar className="w-full h-full rounded-none">
                        <AvatarImage
                          src={speaker.image || "/placeholder.svg"}
                          alt={speaker.name}
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <AvatarFallback className="w-full h-full rounded-none text-4xl font-bold bg-gradient-to-br from-primary to-secondary text-white">
                          {speaker.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className={`${getCategoryColor(speaker.category)} flex items-center gap-1`}>
                        {getCategoryIcon(speaker.category)}
                        {speaker.category.charAt(0).toUpperCase() + speaker.category.slice(1)}
                      </Badge>
                    </div>

                    {/* Country Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-white/90 backdrop-blur-sm">
                        <MapPin className="h-3 w-3 mr-1" />
                        {speaker.country}
                      </Badge>
                    </div>

                    {/* Social Links Overlay */}
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {speaker.social.linkedin && (
                        <Button size="sm" variant="secondary" className="h-8 w-8 p-0 rounded-full">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      )}
                      {speaker.social.twitter && (
                        <Button size="sm" variant="secondary" className="h-8 w-8 p-0 rounded-full">
                          <Twitter className="h-4 w-4" />
                        </Button>
                      )}
                      {speaker.social.website && (
                        <Button size="sm" variant="secondary" className="h-8 w-8 p-0 rounded-full">
                          <Globe className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Speaker Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {speaker.name}
                    </h3>
                    <p className="text-primary font-semibold mb-1">{speaker.title}</p>
                    <p className="text-muted-foreground text-sm mb-4">{speaker.company}</p>

                    {/* Session Info */}
                    {speaker.sessionTitle && (
                      <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">{speaker.sessionTime}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{speaker.sessionTitle}</p>
                      </div>
                    )}

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {speaker.expertise.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {speaker.expertise.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{speaker.expertise.length - 3} more
                        </Badge>
                      )}
                    </div>

                    {/* Bio Preview */}
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{speaker.bio}</p>

                    {/* View Profile Button */}
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                      onClick={() => setSelectedSpeaker(speaker)}
                    >
                      View Full Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Speaker Modal/Detail View */}
        {selectedSpeaker && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedSpeaker(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Speaker Image */}
                  <div className="md:w-1/3">
                    <Avatar className="w-full aspect-square">
                      <AvatarImage src={selectedSpeaker.image || "/placeholder.svg"} alt={selectedSpeaker.name} />
                      <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-primary to-secondary text-white">
                        {selectedSpeaker.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Speaker Details */}
                  <div className="md:w-2/3">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-3xl font-bold mb-2">{selectedSpeaker.name}</h2>
                        <p className="text-primary font-semibold text-lg">{selectedSpeaker.title}</p>
                        <p className="text-muted-foreground">{selectedSpeaker.company}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedSpeaker(null)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        ✕
                      </Button>
                    </div>

                    {/* Session Info */}
                    {selectedSpeaker.sessionTitle && (
                      <div className="mb-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-primary" />
                          Speaking Session
                        </h3>
                        <p className="font-medium">{selectedSpeaker.sessionTitle}</p>
                        <p className="text-sm text-muted-foreground">{selectedSpeaker.sessionTime}</p>
                      </div>
                    )}

                    {/* Bio */}
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Biography</h3>
                      <p className="text-muted-foreground leading-relaxed">{selectedSpeaker.bio}</p>
                    </div>

                    {/* Expertise */}
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Areas of Expertise</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedSpeaker.expertise.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Key Achievements</h3>
                      <ul className="space-y-2">
                        {selectedSpeaker.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Award className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3">
                      {selectedSpeaker.social.linkedin && (
                        <Button variant="outline" size="sm">
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </Button>
                      )}
                      {selectedSpeaker.social.twitter && (
                        <Button variant="outline" size="sm">
                          <Twitter className="h-4 w-4 mr-2" />
                          Twitter
                        </Button>
                      )}
                      {selectedSpeaker.social.website && (
                        <Button variant="outline" size="sm">
                          <Globe className="h-4 w-4 mr-2" />
                          Website
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Want to Join Our Speaker Lineup?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for industry experts and thought leaders to share their insights at AAIS. If you're
              interested in speaking at future events, we'd love to hear from you.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Apply to Speak
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Speakers

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useInView } from "react-intersection-observer"

interface GalleryItem {
  id: number
  type: "image"
  thumbnail: string
  alt: string
}

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: "image",
      thumbnail: "/images/gallery-1.png",
      alt: "Keynote presentation at AAIS 2024",
    },
    {
      id: 2,
      type: "image",
      thumbnail: "/images/gallery-2.png",
      alt: "Exhibition area at AAIS 2024",
    },
    {
      id: 3,
      type: "image",
      thumbnail: "/images/gallery-3.png",
      alt: "Exhibition area at AAIS 2024",
    },
    {
      id: 4,
      type: "image",
      thumbnail: "/images/gallery-4.png",
      alt: "Networking session at AAIS 2024",
    },
    {
      id: 5,
      type: "image",
      thumbnail: "/images/gallery-5.png",
      alt: "Panel discussion at AAIS 2024",
    },
    {
      id: 6,
      type: "image",
      thumbnail: "/images/gallery-6.png",
      alt: "VIP dinner at AAIS 2024",
    },
  ]

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedItem(null)
    document.body.style.overflow = "auto"
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold mb-2 block">Past Events</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Relive the moments from our previous summits and get a glimpse of what to expect at AAIS 2025.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative overflow-hidden rounded-lg aspect-video cursor-pointer group"
              onClick={() => openLightbox(item)}
            >
              <img
                src={item.thumbnail || "/placeholder.svg"}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="p-2 bg-white/80 rounded-full">
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
                    className="text-primary"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-white" onClick={closeLightbox}>
              <X className="h-6 w-6" />
            </Button>

            <div className="max-w-5xl w-full">
              <img
                src={selectedItem.thumbnail || "/placeholder.svg"}
                alt={selectedItem.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <p className="text-white text-center mt-4">{selectedItem.alt}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery

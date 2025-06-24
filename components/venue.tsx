"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Clock, Users } from "lucide-react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

const Venue = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xf5f5f5)

    // Container dimensions
    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.set(15, 10, 15)

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.minDistance = 10
    controls.maxDistance = 30
    controls.maxPolarAngle = Math.PI / 2 - 0.1

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 10, 5)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 1024
    directionalLight.shadow.mapSize.height = 1024
    scene.add(directionalLight)

    // Floor
    const floorGeometry = new THREE.PlaneGeometry(50, 50)
    const floorMaterial = new THREE.MeshStandardMaterial({
      color: 0xeeeeee,
      side: THREE.DoubleSide,
    })
    const floor = new THREE.Mesh(floorGeometry, floorMaterial)
    floor.rotation.x = -Math.PI / 2
    floor.receiveShadow = true
    scene.add(floor)

    // Main building
    const buildingGeometry = new THREE.BoxGeometry(20, 6, 15)
    const buildingMaterial = new THREE.MeshStandardMaterial({
      color: 0x003580, // Kenya Airways blue
    })
    const building = new THREE.Mesh(buildingGeometry, buildingMaterial)
    building.position.y = 3
    building.castShadow = true
    building.receiveShadow = true
    scene.add(building)

    // Entrance
    const entranceGeometry = new THREE.BoxGeometry(5, 4, 2)
    const entranceMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
    })
    const entrance = new THREE.Mesh(entranceGeometry, entranceMaterial)
    entrance.position.set(0, 2, 8.5)
    entrance.castShadow = true
    entrance.receiveShadow = true
    scene.add(entrance)

    // Exhibition booths
    const createBooth = (x: number, z: number, color: number) => {
      const boothGeometry = new THREE.BoxGeometry(3, 2, 3)
      const boothMaterial = new THREE.MeshStandardMaterial({ color })
      const booth = new THREE.Mesh(boothGeometry, boothMaterial)
      booth.position.set(x, 1, z)
      booth.castShadow = true
      booth.receiveShadow = true
      scene.add(booth)

      // Add a pulsing effect to booths
      const pulse = () => {
        const scale = 1 + Math.sin(Date.now() * 0.002) * 0.05
        booth.scale.set(1, scale, 1)
      }

      return { booth, pulse }
    }

    const booths = [
      createBooth(-6, 4, 0xff9e2c), // Orange
      createBooth(-2, 4, 0xff9e2c),
      createBooth(2, 4, 0xff9e2c),
      createBooth(6, 4, 0xff9e2c),
      createBooth(-6, 0, 0x4caf50), // Green
      createBooth(-2, 0, 0x4caf50),
      createBooth(2, 0, 0x4caf50),
      createBooth(6, 0, 0x4caf50),
      createBooth(-6, -4, 0x2196f3), // Blue
      createBooth(-2, -4, 0x2196f3),
      createBooth(2, -4, 0x2196f3),
      createBooth(6, -4, 0x2196f3),
    ]

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()

      // Update booth animations
      booths.forEach(({ pulse }) => pulse())

      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight

      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      controls.dispose()
    }
  }, [])

  return (
    <section id="venue" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold mb-2 block">Event Location</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Venue & Accommodation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the beauty of Mombasa while connecting with aviation leaders from across Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src="/images/mombasa-venue.png"
                  alt="Mombasa Conference Center"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Mombasa Conference Center</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-muted-foreground">Mombasa, Kenya</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-muted-foreground">October 16-17, 2025</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-muted-foreground">9:00 AM - 5:00 PM (EAT)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-muted-foreground">Expected Attendance: 500+</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Conference Halls</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Exhibition Area</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Networking Lounges</Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">VIP Meeting Rooms</Badge>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h-[500px] relative"
            ref={containerRef}
          >
            <Card className="absolute top-4 left-4 z-10 max-w-xs">
              <CardContent className="p-4">
                <h4 className="font-bold mb-2">Interactive Venue Map</h4>
                <p className="text-sm text-muted-foreground">
                  Explore the exhibition layout. Drag to rotate, scroll to zoom.
                </p>
              </CardContent>
            </Card>
            <canvas ref={canvasRef} className="w-full h-full" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Venue

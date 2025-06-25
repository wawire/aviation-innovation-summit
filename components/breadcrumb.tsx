"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"
import { motion } from "framer-motion"

const Breadcrumb = () => {
  const pathname = usePathname()

  // Don't show breadcrumb on home page
  if (pathname === "/") return null

  const pathSegments = pathname.split("/").filter(Boolean)

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    ...pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/")
      const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ")
      return { name, href }
    }),
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-muted/30 border-b border-border/50"
    >
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && <ChevronRight className="h-4 w-4 text-muted-foreground mx-2" />}
              {index === 0 ? (
                <Link
                  href={item.href}
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Home className="h-4 w-4 mr-1" />
                  {item.name}
                </Link>
              ) : index === breadcrumbItems.length - 1 ? (
                <span className="text-foreground font-medium">{item.name}</span>
              ) : (
                <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </motion.nav>
  )
}

export default Breadcrumb

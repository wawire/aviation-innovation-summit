"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const TargetAudience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const audiences = [
    {
      category: "Aviation",
      roles: ["Airline Executives", "Airport Operators", "Aviation Authorities", "Aircraft Manufacturers"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
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
      ),
    },
    {
      category: "Government",
      roles: ["Policymakers", "Regulators", "Government Representatives", "Civil Aviation Authorities"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M2 20h20"></path>
          <path d="M12 3v4"></path>
          <path d="M10 7h4"></path>
          <path d="M4 7v13"></path>
          <path d="M20 7v13"></path>
          <path d="M7 7v13"></path>
          <path d="M17 7v13"></path>
          <path d="M4 7h16"></path>
        </svg>
      ),
    },
    {
      category: "Finance",
      roles: ["Investors", "Venture Capitalists", "Financial Institutions", "Development Banks"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 6v12"></path>
          <path d="M8 10h8"></path>
        </svg>
      ),
    },
    {
      category: "Tourism",
      roles: ["Tourism Boards", "Hospitality Leaders", "Travel Agencies", "Destination Marketers"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M3 11h18"></path>
          <path d="M5 11V7a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v4"></path>
          <path d="M7 21h10"></path>
          <path d="M12 11v10"></path>
        </svg>
      ),
    },
    {
      category: "Technology",
      roles: ["Tech Providers", "Startups", "AI Specialists", "Blockchain Experts"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
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
    },
    {
      category: "Logistics",
      roles: ["Supply Chain Professionals", "Cargo Operators", "Freight Forwarders", "Logistics Companies"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
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
    },
    {
      category: "Academia",
      roles: ["Researchers", "Policy Analysts", "Aviation Schools", "Training Institutions"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      ),
    },
    {
      category: "Sustainability",
      roles: ["Environmental Experts", "Renewable Energy Specialists", "Sustainable Aviation Fuel Providers"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M2 12h6"></path>
          <path d="M22 12h-6"></path>
          <path d="M12 2v6"></path>
          <path d="M12 22v-6"></path>
          <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"></path>
        </svg>
      ),
    },
  ]

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold mb-2 block">Who Will Attend</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Target Audience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The Africa Aviation Innovation Summit will attract key players across industries, fostering cross-sector
            collaboration and partnerships.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 mb-4">{audience.icon}</div>
                <h3 className="text-xl font-bold mb-3">{audience.category}</h3>
                <ul className="space-y-2">
                  {audience.roles.map((role) => (
                    <li key={role} className="text-sm text-muted-foreground">
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TargetAudience

"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function SponsorsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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

  // Sponsor logos
  const sponsors = [
    {
      name: "Organized By",
      image: "/phdcci-logo.png",
      size: "large",
    },
    {
      name: "Punjab Police",
      image: "/Punjab-Police2.png?height=100&width=200&text=Punjab+Police+Logo&bg=1a365d&color=white",
      size: "medium",
    },
    {
      name: "Chandigarh Police",
      image: "/Chandigarh-Police2.png?height=100&width=200&text=CyberSecure+Solutions&bg=0088cc&color=white",
      size: "medium",
    },
    {
      name: "STPI",
      image: "/STPI2.png?height=100&width=200&text=AI+Defense+Systems&bg=4169E1&color=white",
      size: "small",
    },
    
    {
      name: "Haryana Police",
      image: "/H-Police2.png?height=100&width=200&text=AI+Innovations&bg=5b21b6&color=white",
      size: "medium",
    },
    {
      name: "Unified Voice Communication",
      image: "/Unified-Voice2.png?height=100&width=200&text=DataFortress&bg=7c3aed&color=white",
      size: "meduim",
    },
    {
      name: "Qubify",
      image: "/Qubify-Blue2.png?height=100&width=200&text=CyberGuard+Pro&bg=8b5cf6&color=white",
      size: "medium",
    },
    {
      name: "Cyber Crop",
      image: "/CyberCrop2.png?height=100&width=200&text=Digital+Guardian&bg=1e40af&color=white",
      size: "medium",
    },
    {
      name: "DesignersX",
      image: "/DesignersXL2.png?height=100&width=200&text=SecureNet+Tech&bg=2563eb&color=white",
      size: "medium",
    },
    {
      name: "Rozana",
      image: "/RozanaL2.png?height=100&width=200&text=ThreatShield&bg=3730a3&color=white",
      size: "small",
    },
    
   
  ]

  return (
    <section
      className="w-full py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
      id="sponsors"
    >
      {/* Tech-inspired animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-network-pattern opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <radialGradient id="circleGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#0088cc" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0088cc" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="10" cy="10" r="20" fill="url(#circleGradient)" />
            <circle cx="90" cy="90" r="20" fill="url(#circleGradient)" />
            <circle cx="80" cy="20" r="15" fill="url(#circleGradient)" />
            <circle cx="20" cy="80" r="15" fill="url(#circleGradient)" />
            <circle cx="50" cy="50" r="25" fill="url(#circleGradient)" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#0088cc] opacity-10 blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500 opacity-10 blur-[150px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Partners & Sponsors</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0088cc] to-blue-400 mx-auto mb-6"></div>
            <p className="text-blue-100 text-lg">
              RCA 2025 is made possible through the invaluable support and collaboration of these esteemed
              organizations.
            </p>
          </motion.div>

          {/* Dynamic Mosaic Layout */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className={`flex justify-center ${
                  sponsor.size === "large"
                    ? "col-span-2 row-span-2 md:col-start-2 md:row-start-1"
                    : sponsor.size === "medium"
                      ? index % 3 === 0
                        ? "col-span-2 md:col-span-1"
                        : ""
                      : ""
                }`}
              >
                <div className="relative group w-full h-full">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0088cc]/40 to-purple-500/40 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Frosted glass card */}
                  <div className="relative h-full backdrop-blur-md bg-white/10 rounded-xl border border-white/20 md:p-6 sm:p-3 flex items-center justify-center overflow-hidden shadow-lg transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/15">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-tr-full"></div>

                    {/* Logo */}
                    
                    <div className="relative z-10 p-4">
                      <Image
                        src={sponsor.image || "/placeholder.svg"}
                        alt={sponsor.name}
                        width={sponsor.size === "large" ? 580 : 180}
                        height={sponsor.size === "large" ? 250 : 90}
                        className="object-cover transition-transform duration-500 group-hover:scale-110 m"
                      />

                      <h3 className="text-3xl md:text-5xl font-semibold text-center mt-6 text-white relative md:-bottom-12 sm:-bottom-8  ">{sponsor.namee}</h3>
                    </div>

                    

                    {/* Subtle shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action for Potential Sponsors */}
          <motion.div variants={itemVariants} className="text-center pt-8 mt-8">
            <div className="inline-block backdrop-blur-md bg-white/10 border border-white/20 px-8 py-6 rounded-xl shadow-lg">
              <p className="text-blue-50 mb-4">
                Interested in becoming a sponsor?{" "}
                <a href="#contact" className="text-[#0088cc] hover:text-blue-300 font-medium transition-colors">
                  Contact us
                </a>{" "}
                for more information.
              </p>
              <div className="text-sm text-blue-200/70">Limited sponsorship opportunities available</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* CSS for background network pattern */}
      <style jsx>{`
        .bg-network-pattern {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fillRule='evenodd'%3E%3Cg fill='%230088cc' fillOpacity='0.2'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </section>
  )
}

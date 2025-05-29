"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Brain, Lock, Scale, Zap, Network, Shield } from "lucide-react"

export function SpeakersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
  }

  const speakers = [
    {
      name: "Ms. Geetanjali Khandelwal, IPS",
      role: "SP- Cyber Crime, Chandigarh Police",
      image: "/geetanjali,IPS.jpg?height=400&width=300&text=Professional+Woman+Cybersecurity+Expert",
      topic: "Cyber Law Enforcement: Strategy,",
      icon: Brain,
      color: "from-purple-500 to-blue-600",
    },
    {
      name: "Sh. Deepak Saharan, IPS",
      role: "SP- Cyber Crime Cell, Haryana Police",
      image: "/Deepak-Sharan-IPS.jpg?height=400&width=300&text=Indian+Police+Officer+Cybersecurity",
      topic: "Cyber Law Enforcement: Strategy",
    
    },
    {
      name: "Mr. Tarun Malhotra",
      role: "Founder & MD, CyberCops",
      image: "/Tarun-Malhotra.jpg?height=400&width=300&text=Professional+Woman+AI+Researcher",
      topic: "Cyber Threat Landscape: Trends, Tactics",
      icon: Shield,
      color: "from-indigo-500 to-purple-600",
    },
    {
      name: "Mr. Manish Trehan",
      role: "Producer, Jamtara Web Series on Netflix",
      image: "/ManishTrehan-jamtara.png?height=400&width=300&text=Indian+Professor+Cybersecurity+Expert",
      topic: "Fireside Chat: Reel to Real Behind The Scam",
      icon: Lock,
      color: "from-cyan-500 to-blue-600",
    },
    {
      name: "Adv. Pooja Nayar",
      role: "Founder & Principal Consultant,Pratham HR & Legal Consultants.",
      image: "/Pooja-Nayar.png?height=400&width=300&text=Asian+Woman+Tech+Executive",
      topic: "Chair, PHDCCI SHE Forum, Chandigarh",
      icon: Network,
      color: "from-violet-500 to-purple-600",
    },
    {
      name: "Ms. Smiti Bhatt",
      role: "Co-Founder & COO, AdvantageClub",
      image: "/Smiti Bhatt.jpg?height=400&width=300&text=African+Man+Cybersecurity+Director",
      topic: "To Be Announced",
      icon: Zap,
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "To Be Announced",
      role: "To Be Announced.",
      image: "/Coming-Soon.jpg?height=400&width=300&text=Asian+Woman+Tech+Executive",
      topic: "To Be Announced",
      icon: Network,
      color: "from-violet-500 to-purple-600",
    },
    {
      name: "To Be Announced",
      role: "To Be Announced",
      image: "/Coming-Soon.jpg?height=400&width=300&text=African+Man+Cybersecurity+Director",
      topic: "To Be Announced",
      icon: Zap,
      color: "from-blue-500 to-indigo-600",
    },,
    {
      name: "To Be Announced",
      role: "To Be Announced.",
      image: "/Coming-Soon.jpg?height=400&width=300&text=Asian+Woman+Tech+Executive",
      topic: "To Be Announced",
      icon: Network,
      color: "from-violet-500 to-purple-600",
    },
    {
      name: "To Be Announced",
      role: "To Be Announced",
      image: "/Coming-Soon.jpg?height=400&width=300&text=African+Man+Cybersecurity+Director",
      topic: "To Be Announced",
      icon: Zap,
      color: "from-blue-500 to-indigo-600",
    },
  ]

  return (
    <section className="w-full py-24 relative overflow-hidden" id="speakers">
      {/* Tech-inspired background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
        <div className="absolute top-40 left-20 w-96 h-96 rounded-full bg-blue-500 mix-blend-multiply filter blur-[128px] opacity-10"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-purple-500 mix-blend-multiply filter blur-[128px] opacity-10"></div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0088cc] to-[#005580]">
              Featured Speakers
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0088cc] to-[#005580] mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Learn from industry leaders and experts who are at the forefront of cybersecurity and artificial
              intelligence.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-4"
          >
            {speakers.map((speaker, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>

                <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 h-full transform transition-all duration-300 z-10">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full"></div>

                  {/* Speaker image with gradient overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <Image 
                      src={speaker.image || "/placeholder.svg"}
                      alt={speaker.name}
                      fill
                      className=" bg-center object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Topic badge */}
                    <div className="absolute bottom-4 left-4 z-20 max-w-[80%]">
                      <div className="flex items-center space-x-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        {/* <div
                          className={`w-6 h-6 rounded-full bg-gradient-to-br ${speaker.color} flex items-center justify-center`}
                        >
                          <speaker.icon className="w-3.5 h-3.5 text-white" />
                        </div> */}
                        <span className="text-xs font-medium truncate"> {speaker.topic}</span>
                      </div>
                    </div>
                  </div>

                  {/* Speaker info */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{speaker.name}</h3>
                    <p className="text-[#0088cc] dark:text-[#4db8ff] text-sm ">{speaker.role}</p>

                    {/* Animated button on hover */}
                    {/* <div className="overflow-hidden h-8">
                      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                        <button className="text-sm font-medium text-white bg-gradient-to-r from-[#0088cc] to-[#005580] px-4 py-1.5 rounded-full flex items-center space-x-1">
                          <span>View Profile</span>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <p className="text-gray-500 italic">*Additional speakers to be announced soon</p>
          </motion.div>
        </motion.div>
      </div>

      {/* CSS for circuit pattern background */}
      <style jsx>{`
        .bg-circuit-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fillOpacity='0.1' fillRule='evenodd'/%3E%3C/svg%3E");
        }
      `}</style>
    </section>
  )
}

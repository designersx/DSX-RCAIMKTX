"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"

export function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.6,
      },
    },
  }

  const pricingTiers = [
    {
      name: "PHDCCI Members / Students / Government Officials",
      price: "₹1,180",
      features: [
        "Full access to all conference sessions",
        "Conference materials and resources",
        "Networking opportunities",
        "Lunch and refreshments",
        "Certificate of participation",
      ],
      highlight: false,
    },
    {
      name: "Non-Members",
      price: "₹1,770",
      features: [
        "Full access to all conference sessions",
        "Conference materials and resources",
        "Networking opportunities",
        "Lunch and refreshments",
        "Certificate of participation",
      ],
      highlight: true,
    },
  ]

  const scrollToBooking = () => {
    const element = document.getElementById("booking")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      className="w-full py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
      id="pricing"
    >
      {/* Tech-inspired animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#0088cc] opacity-10 blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500 opacity-10 blur-[150px]"></div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ticket Pricing</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0088cc] to-blue-400 mx-auto mb-6"></div>
            <p className="text-blue-100 text-lg">
              Secure your spot at the Regional Cybersecurity & AI Conference 2025 with our flexible ticket options.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
          >
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="relative group"
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 rounded-2xl blur-xl transition-opacity duration-500 ${
                    tier.highlight
                      ? "bg-gradient-to-r from-[#0088cc]/40 to-purple-500/40 opacity-70 group-hover:opacity-100"
                      : "bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-70"
                  }`}
                ></div>

                {/* Card */}
                <div
                  className={`relative h-full backdrop-blur-md rounded-2xl border overflow-hidden shadow-xl transition-all duration-300 ${
                    tier.highlight
                      ? "bg-white/15 border-white/30 group-hover:border-white/40"
                      : "bg-white/10 border-white/20 group-hover:border-white/30"
                  }`}
                >
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-tr-full"></div>

                  {/* Highlight badge */}
                  {tier.highlight && (
                    <div className="absolute top-6 right-6">
                      {/* <div className="flex items-center space-x-1 bg-gradient-to-r from-[#0088cc] to-blue-500 px-3 py-1 rounded-full text-xs font-medium text-white shadow-lg">
                        <Sparkles className="h-3 w-3 mr-1" />
                        <span>Popular Choice</span>
                      </div> */}
                    </div>
                  )}

                  <div className="p-8 md:p-10">
                    {/* Tier name */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-6">{tier.name}</h3>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline">
                        <span className="text-4xl md:text-5xl font-extrabold text-white">{tier.price}</span>
                        <span className="text-blue-200 ml-2 text-lg">/person</span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-10">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#0088cc] to-blue-500 flex items-center justify-center mr-3 mt-0.5 shadow-glow">
                            <Check className="h-3.5 w-3.5 text-white" />
                          </div>
                          <span className="text-blue-100">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      onClick={scrollToBooking}
                      className={`w-full py-6 text-lg rounded-xl transition-all duration-300 ${
                        tier.highlight
                          ? "bg-gradient-to-r from-[#0088cc] to-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/20"
                          : "bg-white/20 text-white hover:bg-white/30"
                      }`}
                    >
                      Book Now
                    </Button>

                    {/* Subtle shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Group discount info */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mt-8">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 inline-block">
              <h3 className="text-xl font-semibold text-white mb-3">Group Discounts</h3>
              <p className="text-blue-100">
                Special discounts are available for groups of 5 or more attendees from the same organization. Contact us
                at <span className="text-[#0088cc] font-medium">rcaconference2025@gmail.com</span> for more information.
              </p>
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.div variants={itemVariants} className="text-center text-blue-200/70 text-sm">
            *Valid ID required at check-in
          </motion.div>
        </motion.div>
      </div>

      {/* CSS for background circuit pattern and animations */}
      <style jsx>{`
        .bg-circuit-pattern {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fillRule='evenodd'%3E%3Cg fill='%230088cc' fillOpacity='0.2'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .shadow-glow {
          box-shadow: 0 0 10px rgba(0, 136, 204, 0.5);
        }

        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-10px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(20px);
          }
          75% {
            transform: translateY(10px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>
    </section>
  )
}

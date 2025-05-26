"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "./countdown-timer"
import { ArrowRight, ChevronDown } from "lucide-react"

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-white pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[20%] right-[5%] w-32 h-32 bg-[#0088cc] rounded-full opacity-10 blur-xl"></div>
        <div className="absolute bottom-[30%] left-[10%] w-40 h-40 bg-[#0088cc] rounded-full opacity-10 blur-xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl z-10 relative">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6 md:space-y-8 text-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[#0088cc] font-medium text-lg sm:text-xl"
            >
              25 JULY, 2025
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              REGIONAL <br className="hidden sm:block" />
              CYBERSECURITY <br className="hidden sm:block" />& AI CONFERENCE
            </motion.h1>

            <motion.p
              className="text-gray-700 text-base sm:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              JW Marriott, Chandigarh, India
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="pt-2 md:pt-4 mx-auto w-full max-w-lg"
            >
              <CountdownTimer targetDate={new Date("2025-07-25T09:00:00")} />
            </motion.div>

            <motion.div
              className="pt-4 md:pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Button
                className="bg-[#0088cc] hover:bg-[#006699] text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full"
                onClick={scrollToAbout}
              >
                DISCOVER MORE <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
          <ChevronDown className="h-8 w-8 text-[#0088cc]" />
        </motion.div>
      </motion.div>
    </section>
  )
}

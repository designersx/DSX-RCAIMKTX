"use client"

import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"

export function SocialSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="bg-white py-6 px-3 rounded-r-lg shadow-lg">
        <div className="flex flex-col items-center space-y-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-[#0088cc] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <div className="h-16 w-px bg-gray-300 mt-4"></div>
          <div className="text-gray-800 text-xs font-medium rotate-90 tracking-wider">FOLLOW US ON</div>
        </div>
      </div>
    </motion.div>
  )
}

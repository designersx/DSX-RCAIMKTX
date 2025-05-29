"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rca%20Logo-8Qmf8Pevbjv5t8FWMvW83Rin9Ls08S.png"
              alt="RCA Logo"
              width={100}
              height={40}
              className="sm:w-[120px]"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "HOME", section: "hero" },
              { name: "ABOUT", section: "about" },
              { name: "AGENDA", section: "Agenda" },
              { name: "SPEAKERS", section: "speakers" },
              { name: "SPONSORS", section: "sponsors" },
              { name: "PRICING", section: "pricing" },
              { name: "REGISTER", section: "booking" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.section)}
                className={`text-gray-800 hover:text-[#0088cc] font-medium transition-colors ${
                  item.name === "HOME" ? "text-[#0088cc]" : ""
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {[
                  { name: "HOME", section: "hero" },
                  { name: "ABOUT", section: "about" },
                  { name: "AGENDA", section: "agenda" },    
                  { name: "SPEAKERS", section: "speakers" },
                  { name: "SPONSORS", section: "sponsors" },
                  { name: "PRICING", section: "pricing" },
                  { name: "REGISTER", section: "booking" },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.section)}
                    className={`text-gray-800 hover:text-[#0088cc] font-medium transition-colors text-left py-2 ${
                      item.name === "HOME" ? "text-[#0088cc]" : ""
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

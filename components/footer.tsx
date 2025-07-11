"use client"
import Image from "next/image"
import { Linkedin } from "lucide-react"
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="/RCA_WHITE_LOGO.jpg"
              alt="RCA Logo"
              width={120}
              height={50}
              className="mb-4 "
            />
            <p className="text-gray-400 text-sm sm:text-base">
              Regional Cybersecurity & AI Conference 2025 - Bringing together experts and professionals to discuss the
              latest trends and innovations in cybersecurity and artificial intelligence.
            </p>
            <div className="flex pt-2 md:hidden">
              <a
                href="https://www.linkedin.com/company/rca-conf/"
                target="_blank"
                rel="noopener noreferrer"
                className=" widthLInkDi text-gray-400 hover:text-[#0088cc] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <span className="text-gray-500 ml-1 text-sm">Follow us on LinkedIn</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base hover:translate-x-1 transform"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base hover:translate-x-1 transform"
                >
                  About
                </a>
              </li>

                <li>
                <a
                  href="#agenda"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base hover:translate-x-1 transform"
                >
                  Agenda
                </a>
              </li>
              <li>
                <a
                  href="#speakers"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base hover:translate-x-1 transform"
                >
                  Speakers
                </a>
              </li>
              <li>
                <a
                  href="#sponsors"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base hover:translate-x-1 transform"
                >
                  Sponsors
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base hover:translate-x-1 transform"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base hover:translate-x-1 transform"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-[#0088cc] mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-400 text-sm sm:text-base">Hotel Taj, Chandigarh</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-[#0088cc] mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-400 text-sm sm:text-base">rcaconference2025@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-[#0088cc] mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-400 text-sm sm:text-base">+91  92171 79999</span>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Follow Us</h3>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/company/rca-conf/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            &copy; 2025 Regional Cybersecurity & AI Conference. All rights reserved.
          </p>
          <div className="flex space-x-4 sm:space-x-6 mt-4 md:mt-0">

 <Link href="/privacy"className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">Privacy Policy
            </Link>
            
            <Link href="/terms" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
              Terms of Service
      </Link>
            
            
          </div>
        </div>
      </div>
    </footer>
  )
}

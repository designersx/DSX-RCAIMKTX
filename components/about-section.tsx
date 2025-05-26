"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  LightbulbIcon,
  NetworkIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      className="w-full py-24 relative bg-[#fff] overflow-hidden"
      id="about"
    >
      {/* Abstract background elements */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
        <div className="absolute top-[20%] right-[10%] w-64 h-64 rounded-full bg-[#0088cc] blur-[100px] opacity-20"></div>
        <div className="absolute bottom-[30%] left-[5%] w-80 h-80 rounded-full bg-[#0088cc] blur-[120px] opacity-10"></div>
        <svg
          className="absolute bottom-0 right-0 text-gray-100 w-64 h-64 opacity-20"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M42.7,-73.4C55.9,-67.1,67.7,-57.2,76.6,-44.6C85.5,-32,91.5,-16,90.8,-0.4C90.1,15.2,82.6,30.4,73.5,44.1C64.3,57.8,53.4,70,39.9,77.8C26.4,85.6,10.2,89,-5.4,87.1C-21,85.2,-36,77.9,-48.1,68.2C-60.2,58.5,-69.5,46.4,-76.3,32.5C-83.1,18.6,-87.5,2.9,-85.3,-12.1C-83.1,-27.1,-74.3,-41.4,-62.6,-50.9C-50.9,-60.4,-36.3,-65.1,-23.1,-71.5C-9.9,-77.9,1.9,-86,15.1,-85.3C28.3,-84.6,42.9,-75.1,42.7,-73.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About The Event
            </h2>
            <div className="w-24 h-1 bg-[#0088cc] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Event Overview - Takes 7 columns on large screens */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 relative"
            >
              <div className="h-full backdrop-blur-sm bg-white/80 rounded-2xl shadow-xl p-8 border border-gray-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#0088cc]/5 rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse"></div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0088cc] to-[#005580]">
                    Event Overview
                  </span>
                </h3>

                <div className="space-y-6 relative">
                  <p className="text-gray-700 leading-relaxed">
                    The Regional Cybersecurity & AI Conference 2025 brings
                    together industry leaders, government officials, and
                    technology experts to discuss the latest trends, challenges,
                    and innovations in cybersecurity and artificial
                    intelligence. This premier event offers a unique opportunity
                    to network with professionals and gain valuable insights
                    into the rapidly evolving digital landscape.
                  </p>

                  <div className="p-6 bg-gradient-to-r from-[#0088cc]/10 to-[#0088cc]/5 rounded-xl border-l-4 border-[#0088cc] relative">
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#0088cc] rounded-full flex items-center justify-center text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 6L6 18M6 6l12 12"></path>
                      </svg>
                    </div>
                    <p className="text-gray-800 font-medium">
                      In today's rapidly evolving threat landscape, staying
                      ahead of cyber threats while leveraging AI responsibly is
                      crucial for organizations of all sizes. RCA 2025 equips
                      you with the knowledge, connections, and tools to navigate
                      this complex environment successfully.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Why Attend - Takes 5 columns on large screens */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 relative"
            >
              <div className="h-full backdrop-blur-sm bg-white/80 rounded-2xl shadow-xl p-8 border border-gray-100 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#0088cc]/5 rounded-full translate-y-1/2 -translate-x-1/2 animate-pulse"></div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0088cc] to-[#005580]">
                    Why Attend?
                  </span>
                </h3>

                <ul className="space-y-6 relative">
                  <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0088cc] to-[#005580] flex items-center justify-center text-white shadow-lg mr-4">
                      <LightbulbIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Expert Insights
                      </h4>
                      <p className="text-gray-600">
                        Learn from industry experts and thought leaders
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0088cc] to-[#005580] flex items-center justify-center text-white shadow-lg mr-4">
                      <TrendingUpIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Cutting-Edge Tech
                      </h4>
                      <p className="text-gray-600">
                        Discover cutting-edge technologies and solutions
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0088cc] to-[#005580] flex items-center justify-center text-white shadow-lg mr-4">
                      <UsersIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Networking
                      </h4>
                      <p className="text-gray-600">
                        Network with professionals and build valuable
                        connections
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0088cc] to-[#005580] flex items-center justify-center text-white shadow-lg mr-4">
                      <NetworkIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Future Vision
                      </h4>
                      <p className="text-gray-600">
                        Gain insights into the future of cybersecurity and AI
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Key Topics Section */}
          <motion.div
            variants={itemVariants}
            className="backdrop-blur-sm bg-white/80 rounded-2xl shadow-xl p-8 border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#0088cc]/5 rounded-full -translate-y-1/2 -translate-x-1/2"></div>

            <h3 className="text-2xl font-bold text-center mb-10 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0088cc] to-[#005580]">
                Key Topics
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
              <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-md border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#0088cc]/10">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0088cc] to-[#005580] rounded-2xl flex items-center justify-center text-white shadow-lg mb-4 -mt-10 ml-4">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-3">
                  Cyber Threat Intelligence
                </h4>
                <p className="text-gray-600">
                  Latest trends in cyber threats and defense strategies for
                  organizations of all sizes
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-md border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#0088cc]/10">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0088cc] to-[#005580] rounded-2xl flex items-center justify-center text-white shadow-lg mb-4 -mt-10 ml-4">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-3">
                  AI in Cybersecurity
                </h4>
                <p className="text-gray-600">
                  How artificial intelligence is transforming the cybersecurity
                  landscape and defense capabilities
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-md border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#0088cc]/10">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0088cc] to-[#005580] rounded-2xl flex items-center justify-center text-white shadow-lg mb-4 -mt-10 ml-4">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-3">
                  Data Privacy & Compliance
                </h4>
                <p className="text-gray-600">
                  Navigating regulatory frameworks and ensuring data protection
                  in an increasingly complex landscape
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* CSS for background grid pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(0, 136, 204, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(0, 136, 204, 0.05) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}

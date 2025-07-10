"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticlesBackground from "./ui/ParticlesBackground";
import { useRouter } from "next/navigation";

export function AnimatedHeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Calculate time left until the event
  useEffect(() => {
    const targetDate = new Date("2025-07-25T09:00:00");

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle screen resize for mobile menu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const scrollToSection = (sectionId: string) => {
  //   if (sectionId === "attend") {
  //     router.push("/attend");
  //     return;
  //   }
  //   setMobileMenuOpen(false);
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  useEffect(() => {
    const url = new URL(window.location.href);
    const section = url.searchParams.get("scrollTo");

    if (section) {
      let attempts = 0;
      const maxAttempts = 20; // Up to ~4 seconds
      const interval = setInterval(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });

          // Clean the query string
          const newUrl = window.location.pathname;
          window.history.replaceState({}, document.title, newUrl);

          clearInterval(interval);
        } else {
          attempts++;
          if (attempts > maxAttempts) clearInterval(interval);
        }
      }, 200); // Retry every 200ms
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "attend") {
      router.push("/attend");
    } else {
      if (window.location.pathname !== "/") {
        router.push(`/?scrollTo=${sectionId}`);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      setMobileMenuOpen(false);
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Generate fast-moving particles
  const generateParticles = () => {
    return Array.from({ length: 80 }, (_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-[#0088cc] rounded-full opacity-60"
        initial={{
          x:
            Math.random() *
            (typeof window !== "undefined" ? window.innerWidth : 1920),
          y:
            Math.random() *
            (typeof window !== "undefined" ? window.innerHeight : 1080),
        }}
        animate={{
          x: [
            Math.random() *
              (typeof window !== "undefined" ? window.innerWidth : 1920),
            Math.random() *
              (typeof window !== "undefined" ? window.innerWidth : 1920),
            Math.random() *
              (typeof window !== "undefined" ? window.innerWidth : 1920),
          ],
          y: [
            Math.random() *
              (typeof window !== "undefined" ? window.innerHeight : 1080),
            Math.random() *
              (typeof window !== "undefined" ? window.innerHeight : 1080),
            Math.random() *
              (typeof window !== "undefined" ? window.innerHeight : 1080),
          ],
        }}
        transition={{
          duration: Math.random() * 8 + 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "linear",
        }}
      />
    ));
  };

  // Circuit Board Component
  const CircuitBoard = () => (
    <svg
      className="absolute inset-0 w-full h-full opacity-20"
      viewBox="0 0 1920 1080"
    >
      {/* Main Circuit Lines */}
      <motion.path
        d="M0,200 L400,200 L400,400 L800,400 L800,600 L1200,600 L1200,300 L1920,300"
        stroke="#0088cc"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      />
      <motion.path
        d="M0,800 L300,800 L300,500 L700,500 L700,700 L1100,700 L1100,400 L1920,400"
        stroke="#4169E1"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          delay: 1,
        }}
      />
      <motion.path
        d="M200,0 L200,300 L600,300 L600,600 L1000,600 L1000,200 L1400,200 L1400,1080"
        stroke="#00ccff"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          delay: 2,
        }}
      />

      {/* Circuit Nodes */}
      {Array.from({ length: 20 }, (_, i) => (
        <motion.circle
          key={i}
          cx={Math.random() * 1920}
          cy={Math.random() * 1080}
          r="4"
          fill="#0088cc"
          initial={{ opacity: 0.3, scale: 1 }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Data Flow Pulses */}
      <motion.circle
        r="6"
        fill="#00ff88"
        opacity="0.8"
        initial={{ x: 0, y: 200 }}
        animate={{ x: 1920, y: 300 }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <motion.circle
        r="6"
        fill="#ff4488"
        opacity="0.8"
        initial={{ x: 0, y: 800 }}
        animate={{ x: 1920, y: 400 }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          delay: 1.5,
        }}
      />
    </svg>
  );

  // Binary Rain Component
  const BinaryRain = () => (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute text-[#0088cc] font-mono text-sm"
          style={{ left: `${i * 7}%` }}
          initial={{ y: -100 }}
          animate={{
            y: typeof window !== "undefined" ? window.innerHeight + 100 : 1180,
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: Math.random() * 2,
          }}
        >
          {Array.from({ length: 20 }, () => Math.round(Math.random())).join("")}
        </motion.div>
      ))}
    </div>
  );

  return (
    <section
      className="relative min-h-screen w-full  overflow-hidden bg-[#050a1c3d]"
      id="hero"
    >
      <div className="relative z-[-100]">
        <ParticlesBackground />
      </div>
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Fast Moving Grid Pattern */}
        {/* <motion.div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 136, 204, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 136, 204, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "40px 40px", "0px 0px"],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        /> */}

        {/* Circuit Board Animation */}
        {/* <CircuitBoard /> */}

        {/* Binary Rain */}
        {/* <BinaryRain /> */}

        {/* Fast Moving Particles */}
        {/* <div className="absolute inset-0">{typeof window !== "undefined" && generateParticles()}</div> */}

        {/* Fast Animated Lines */}
        {/* {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#0088cc] to-transparent opacity-40"
            style={{
              width: "100%",
              top: `${10 + i * 10}%`,
            }}
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: i * 0.3,
            }}
          />
        ))} */}

        {/* Hexagonal Tech Pattern */}
        <div className="absolute inset-0 opacity-10">
          {/* {Array.from({ length: 12 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute border border-[#0088cc] w-16 h-16"
              style={{
                left: `${(i % 4) * 25}%`,
                top: `${Math.floor(i / 4) * 25}%`,
                clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
              }}
            />
          ))} */}
        </div>

        {/* Dynamic Pulsing Orbs */}
        {/* <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#0088cc]/10"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.1, 0.4, 0.1],
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[#4169E1]/10"
          animate={{
            scale: [1.5, 1, 1.5],
            opacity: [0.4, 0.1, 0.4],
            x: [0, -100, 50, 0],
            y: [0, 50, -100, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
        /> */}

        {/* Network Connection Lines */}
        {/* <svg className="absolute inset-0 w-full h-full opacity-20">
          {Array.from({ length: 6 }, (_, i) => (
            <motion.line
              key={i}
              x1={Math.random() * 100 + "%"}
              y1={Math.random() * 100 + "%"}
              x2={Math.random() * 100 + "%"}
              y2={Math.random() * 100 + "%"}
              stroke="#0088cc"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.7,
              }}
            />
          ))}
        </svg> */}
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050a1c3d]/80 via-transparent to-[#050a1c3d]/80"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050a1c3d]/80 via-transparent to-[#050a1c3d]/80">
        {" "}
      </div>

      {/* Navigation Bar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? "bg-[#050a1c3d]/90 backdrop-blur-md shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src="/RCA_WHITE_LOGO.jpg"
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
                { name: "AGENDA", section: "agenda" },
                { name: "SPEAKERS", section: "speakers" },
                { name: "SPONSORS", section: "sponsors" },
                { name: "PRICING", section: "pricing" },
                // { name: "REGISTER", section: "booking" },
                { name: "ATTEND", section: "attend" },
              ].map((item) => {
                const isAttend = item.name === "ATTEND";

                return (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.section)}
                    className={`font-medium transition-all px-4 py-2 rounded-md
          ${
            isAttend
              ? "bg-yellow-400 text-black hover:bg-yellow-500 shadow-md"
              : "text-white hover:text-[#0088cc]"
          } 
          ${item.name === "HOME" && !isAttend ? "text-[#0088cc]" : ""}
        `}
                    whileHover={{
                      scale: 1.05,
                      textShadow: isAttend
                        ? ""
                        : "0 0 8px rgba(0, 136, 204, 0.8)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-white focus:outline-none p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              whileTap={{ scale: 0.9, rotate: 180 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#050a1c3d]/95 backdrop-blur-md shadow-lg"
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
                  // { name: "REGISTER", section: "booking" },
                  { name: "ATTEND", section: "attend" },
                ].map((item) => {
                  const isAttend = item.name === "ATTEND";

                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.section)}
                      className={`font-medium transition-all text-left py-2 px-4 rounded-md
          ${
            isAttend
              ? "bg-yellow-400 text-black hover:bg-yellow-500 shadow-md"
              : "text-white hover:text-[#0088cc]"
          } 
          ${item.name === "HOME" && !isAttend ? "text-[#0088cc]" : ""}
        `}
                      whileHover={{
                        x: 15,
                        textShadow: isAttend
                          ? ""
                          : "0 0 8px rgba(0, 136, 204, 0.8)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.button>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </header>

      {/* Social Follow CTA - Fixed Bottom Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="fixed bottom-6 left-6 z-40"
      >
        <motion.div
          className="bg-[#0A1A3A]/80 backdrop-blur-md p-3 sm:p-2 rounded-full border border-[#0088cc]/20 shadow-lg hover:shadow-[#0088cc]/20 transition-all duration-300"
          whileHover={{
            scale: 1.15,
            boxShadow: "0 0 30px rgba(0, 136, 204, 0.5)",
            borderColor: "rgba(0, 136, 204, 0.8)",
          }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              "0 0 10px rgba(0, 136, 204, 0.2)",
              "0 0 20px rgba(0, 136, 204, 0.4)",
              "0 0 10px rgba(0, 136, 204, 0.2)",
            ],
          }}
          transition={{
            boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
          }}
        >
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" sm:flex  space-x-2 sm:space-x-1  items-center  text-white hover:text-[#0088cc] transition-colors "
            aria-label="Follow us on LinkedIn"
          >
            <Linkedin size={20} />
            <span className="text-sm font-medium hidden sm:block">
              Follow Us
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Main Hero Content */}
      <div className="container relative z-10 mx-auto h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6 md:space-y-8 text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[#0088cc] font-medium text-lg sm:text-xl"
            >
              25 JULY, 2025
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ textShadow: "0 0 20px rgba(0, 136, 204, 0.8)" }}
              >
                REGIONAL &nbsp;
              </motion.span>
              <br className="hidden sm:block" />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ textShadow: "0 0 20px rgba(0, 136, 204, 0.8)" }}
              >
                CYBERSECURITY
              </motion.span>
              <br className="hidden sm:block" />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                whileHover={{ textShadow: "0 0 20px rgba(0, 136, 204, 0.8)" }}
              >
                & AI CONFERENCE
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-white/80 text-base sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              JW Marriott, Chandigarh, India
            </motion.p>

            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="pt-2 md:pt-4 mx-auto w-full max-w-lg"
            >
              <div className="flex space-x-2 sm:space-x-4">
                {[
                  { label: "DAYS", value: timeLeft.days },
                  { label: "HRS", value: timeLeft.hours },
                  { label: "MINS", value: timeLeft.minutes },
                  { label: "SECS", value: timeLeft.seconds },
                ].map((unit, index) => (
                  <motion.div
                    key={unit.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 + 0.1 * index, duration: 0.5 }}
                    className="flex-1"
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <motion.div
                      className="bg-[#0A1A3A]/50 backdrop-blur-md border border-[#0088cc]/20 rounded-lg p-2 sm:p-4 text-center"
                      animate={{
                        borderColor: [
                          "rgba(0, 136, 204, 0.2)",
                          "rgba(0, 136, 204, 0.6)",
                          "rgba(0, 136, 204, 0.2)",
                        ],
                        boxShadow: [
                          "0 0 5px rgba(0, 136, 204, 0.2)",
                          "0 0 15px rgba(0, 136, 204, 0.4)",
                          "0 0 5px rgba(0, 136, 204, 0.2)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.5,
                      }}
                    >
                      <motion.div
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
                        key={unit.value}
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {unit.value.toString().padStart(2, "0")}
                      </motion.div>
                      <div className="text-[10px] sm:text-xs text-[#0088cc] mt-0 sm:mt-1 font-semibold">
                        {unit.label}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="pt-4 md:pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <motion.div>
                {/* <Button
                  className="bg-[#0088cc] hover:bg-[#0088cc]/80 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300"
                  onClick={scrollToAbout}
                >
                 BOOK NOW
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button> */}
                <Button
                  className="bg-[#0088cc] hover:bg-[#0088cc]/80 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300"
                  onClick={() => router.push("/attend")}
                >
                  BOOK NOW
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
        whileHover={{
          scale: 1.2,
          textShadow: "0 0 10px rgba(0, 136, 204, 0.8)",
        }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ChevronDown className="h-8 w-8 text-[#0088cc]" />
        </motion.div>
      </motion.div>
    </section>
  );
}

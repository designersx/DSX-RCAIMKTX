"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isSubmitting, setIsSubmitting] = useState(false)

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Registration Successful!",
      description: "Thank you for registering. We'll send you a confirmation email shortly.",
    })

    setIsSubmitting(false)
  }

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-100 px-4 sm:px-6 lg:px-8" id="booking">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Secure Your Place at RCA 2025</h2>
            <div className="w-20 h-1 bg-[#0088cc] mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              Don't miss this opportunity to be part of the region's premier cybersecurity and AI event. Limited seats
              available - register today to ensure your participation.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-3xl mx-auto mb-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Registration Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#0088cc] mr-2 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Full access to all sessions</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#0088cc] mr-2 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Conference materials</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#0088cc] mr-2 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Networking opportunities</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#0088cc] mr-2 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Lunch and refreshments</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#0088cc] mr-2 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Certificate of participation</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 text-[#0088cc] mr-2 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Post-event resources</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organization">Organization</Label>
                  <Input id="organization" placeholder="Enter your organization" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="designation">Designation</Label>
                  <Input id="designation" placeholder="Enter your designation" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ticketType">Ticket Type</Label>
                  <select
                    id="ticketType"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  >
                    <option value="">Select ticket type</option>
                    <option value="member">PHDCCI Member (₹1,180)</option>
                    <option value="student">Student (₹1,180)</option>
                    <option value="government">Government Official (₹1,180)</option>
                    <option value="nonMember">Non-Member (₹1,770)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="numberOfTickets">Number of Tickets</Label>
                  <Input id="numberOfTickets" type="number" min="1" defaultValue="1" required />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="specialRequirements">Special Requirements (Optional)</Label>
                <Textarea id="specialRequirements" placeholder="Any dietary restrictions or accessibility needs?" />
              </div>

              <div className="flex items-start mb-6">
                <input
                  type="checkbox"
                  id="termsConditions"
                  className="h-4 w-4 rounded border-gray-300 text-[#0088cc] focus:ring-[#0088cc] mt-1"
                  required
                />
                <label htmlFor="termsConditions" className="ml-2 block text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-[#0088cc] hover:underline">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-[#0088cc] hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#0088cc] hover:bg-[#006699] text-white py-6 text-lg rounded-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Register Now"}
              </Button>

              <p className="text-sm text-gray-500 mt-4 text-center">
                For group bookings or any queries, please contact us at{" "}
                <span className="text-[#0088cc]">rcaconference2025@gmail.com</span>
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

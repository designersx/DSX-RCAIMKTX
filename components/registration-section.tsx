"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { ArrowRight, Loader2 } from "lucide-react"

export function RegistrationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    designation: "",
    ticketType: "",
    numberOfTickets: 1,
    specialRequirements: "",
    termsAccepted: false,
  })

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: checked }))
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
    <section className="w-full py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white" id="booking">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-network-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 opacity-30 blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-100 opacity-30 blur-[150px]"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Secure Your Place at RCA 2025</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0088cc] to-blue-400 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Don't miss this opportunity to be part of the region's premier cybersecurity and AI event. Limited seats
              available - register today to ensure your participation.
            </p>
          </motion.div>

          {/* Main Form Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl shadow-xl overflow-hidden relative z-10 border border-gray-100"
          >
            {/* Form Content */}
            <div className="p-4 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="h-8 w-1 bg-gradient-to-b from-[#0088cc] to-blue-400 rounded-full"></div>
                    <h3 className="text-xl font-bold text-gray-900">Personal Information</h3>
                  </div>


                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-700">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                        required
                        className="border-gray-200 focus:border-[#0088cc] focus:ring-1 focus:ring-[#0088cc] shadow-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-700">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                        required
                        className="border-gray-200 focus:border-[#0088cc] focus:ring-1 focus:ring-[#0088cc] shadow-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="border-gray-200 focus:border-[#0088cc] focus:ring-1 focus:ring-[#0088cc] shadow-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                        className="border-gray-200 focus:border-[#0088cc] focus:ring-1 focus:ring-[#0088cc] shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="h-8 w-1 bg-gradient-to-b from-[#0088cc] to-blue-400 rounded-full"></div>
                    <h3 className="text-xl font-bold text-gray-900">Professional Information</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="organization" className="text-gray-700">
                        Organization
                      </Label>
                      <Input id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Enter your organization"
                        required
                        className="border-gray-200 focus:border-[#0088cc] focus:ring-1 focus:ring-[#0088cc] shadow-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="designation" className="text-gray-700">
                        Designation
                      </Label>
                      <Input
                        id="designation"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        placeholder="Enter your designation"
                        required
                        className="border-gray-200 focus:border-[#0088cc] focus:ring-1 focus:ring-[#0088cc] shadow-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ticketType" className="text-gray-700">
                        Ticket Type
                      </Label>
                      <select
                        id="ticketType"
                        name="ticketType"
                        value={formData.ticketType}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-200 focus:border-[#0088cc] focus:ring-1 focus:ring-[#0088cc] shadow-sm h-10 px-3 py-2"
                        required
                      >
                        <option value="" disabled>
                          Select ticket type
                        </option>
                        <option value="member">PHDCCI Member (₹1,180)</option>
                        <option value="student">Student (₹1,180)</option>
                        <option value="government">Government Official (₹1,180)</option>
                        <option value="nonMember">Non-Member (₹1,770)</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="numberOfTickets" className="text-gray-700">
                        Number of Tickets
                      </Label>
                      <Input
                        id="numberOfTickets"
                        name="numberOfTickets"
                        type="number"
                        min="1"
                        value={formData.numberOfTickets}
                        onChange={handleChange}
                        required
                        className="border-gray-200 focus:border-[#0088cc] focus:ring-1 focus:ring-[#0088cc] shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Special Requirements */}
                <div className="space-y-2">
                  <Label htmlFor="specialRequirements" className="text-gray-700">
                    Special Requirements (Optional)
                  </Label>
                  <Textarea
                    id="specialRequirements"
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleChange}
                    placeholder="Any dietary restrictions or accessibility needs?"
                    className="border-gray-200 focus:border-[#0088cc] focus:ring-1 focus:ring-[#0088cc] shadow-sm min-h-[100px]"
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="termsAccepted"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleCheckboxChange}
                    className="h-5 w-5 rounded border-gray-300 text-[#0088cc] focus:ring-[#0088cc] mt-1"
                    required
                  />
                  <label htmlFor="termsAccepted" className="text-gray-600 text-sm">
                    I agree to the{" "}
                    <a href="#" className="text-[#0088cc] hover:text-blue-700 underline">
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#0088cc] hover:text-blue-700 underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#0088cc] to-blue-500 hover:from-[#0088cc] hover:to-blue-600 text-white py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing...
                      </>
                    ) : (
                      <>
                        Register Now <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </div>




                {/* Group Bookings Info */}
                <div className="text-center bg-gray-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-600">
                    For group bookings or any queries, please contact us at{" "}
                    <span className="text-[#0088cc] font-medium">rcaconference2025@gmail.com</span>
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* CSS for background network pattern */}
      <style jsx>{`
        .bg-network-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%230088cc' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
      
    </section>
  )
}

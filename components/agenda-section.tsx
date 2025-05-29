"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Clock, Coffee, Users, Utensils, Award, MapPin } from "lucide-react"

export function AgendaSection() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  }

  const agendaItems = [
    {
      time: "10:30 AM - 11:00 AM",
      title: "Registration & Welcome Tea",
      description: "Check-in, networking, and welcome refreshments",
      type: "break",
      icon: Coffee,
      speaker: null,
      location: "Main Lobby",
    },
    {
      time: "11:00 AM - 11:30 AM",
      title: "Inaugural Session & Opening Remarks",
      description: "Welcome address and conference overview",
      type: "ceremony",
      icon: Users,
      speaker: "Conference Organizers",
      location: "Main Auditorium",
    },
    {
      time: "11:30 AM - 12:30 PM",
      title: "Workshop: Cyber Threat Landscape: Trends, Tactics",
      description: "Exploring emerging threats and defense strategies in the digital age",
      type: "keynote",
      icon: Award,
      speaker: "Dr. Aisha Patel, Chief Security Officer, TechSecure",
      location: "Main Auditorium",
    },
    {
      time: "12:30 PM - 01:00 PM",
      title: "Networking & Tea Break",
      description: "How machine learning is revolutionizing cybersecurity threat identification",
      type: "session",
      icon: Clock,
      speaker: "Sarah Johnson, AI Ethics Researcher, Global Tech",
      location: "Main Auditorium",
    },
    {
      time: "01:00 PM - 02:00 PM",
      title: "Fireside Chat: Reel to Real — Behind the Scam",
      description: "Coffee, refreshments, and networking opportunities",
      type: "break",
      icon: Coffee,
      speaker: null,
      location: "Exhibition Area",
    },
    {
      time: "02:00 PM - 03:00 PM",
      title: "Networking Lunch",
      description: "Law enforcement perspectives on combating cybercrime",
      type: "session",
      icon: Clock,
      speaker: "Rajiv Sharma, SP - Cyber Crime, Punjab Police",
      location: "Main Auditorium",
    },
    {
      time: "03:00 PM - 04:30 PM",
      title: "Panel Discussion: Cyber Law Enforcement: Strategy, Challenges, and Real World Impact",
      description: "Industry experts discuss responsible AI development and deployment",
      type: "panel",
      icon: Users,
      speaker: "Multiple Industry Experts",
      location: "Main Auditorium",
    },
    {
      time: "04:30 PM - 05:00 PM",
      title: "Valedictory Session & Vote of Thanks",
      description: "Networking lunch with fellow attendees and speakers",
      type: "break",
      icon: Utensils,
      speaker: null,
      location: "Banquet Hall",
    },
    {
      time: "05:00 PM - 05:30 PM",
      title: "High Tea & Final Networking",
      description: "Building robust security architectures for modern enterprises",
      type: "session",
      icon: Clock,
      speaker: "Dr. Vikram Mehta, Professor, Cybersecurity Institute",
      location: "Main Auditorium",
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "keynote":
        return "from-purple-500 to-indigo-600"
      case "session":
        return "from-[#0088cc] to-blue-600"
      case "panel":
        return "from-green-500 to-emerald-600"
      case "workshop":
        return "from-orange-500 to-amber-600"
      case "break":
        return "from-gray-400 to-gray-500"
      case "ceremony":
        return "from-red-500 to-pink-600"
      default:
        return "from-[#0088cc] to-blue-600"
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "keynote":
        return "Keynote"
      case "session":
        return "Session"
      case "panel":
        return "Panel"
      case "workshop":
        return "Workshop"
      case "break":
        return "Break"
      case "ceremony":
        return "Ceremony"
      default:
        return "Session"
    }
  }

  return (
    
    <section className="w-full py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50" id="agenda">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-timeline-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 opacity-30 blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-100 opacity-30 blur-[150px]"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Conference Agenda</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0088cc] to-blue-400 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              A comprehensive day of learning, networking, and insights into the latest trends in cybersecurity and AI.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={containerVariants} className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0088cc] to-blue-400 transform md:-translate-x-1/2"></div>

            <div className="space-y-8">
              {agendaItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-[#0088cc] rounded-full transform md:-translate-x-1/2 z-10"></div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <motion.div
                      className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 relative overflow-hidden group hover:shadow-xl transition-all duration-300"
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      {/* Decorative gradient */}
                      <div
                        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${getTypeColor(item.type)}`}
                      ></div>

                      {/* Type Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getTypeColor(
                            item.type,
                          )}`}
                        >
                          <item.icon className="w-3 h-3 mr-1" />
                          {getTypeLabel(item.type)}
                        </div>
                        <div className="text-sm font-bold text-[#0088cc]">{item.time}</div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>

                      {/* Speaker & Location */}
                      <div className="space-y-2">
                        {item.speaker && (
                          <div className="flex items-center text-sm text-gray-700">
                            <Users className="w-4 h-4 mr-2 text-[#0088cc]" />
                            <span className="font-medium">{item.speaker}</span>
                          </div>
                        )}
                        <div className="flex items-center text-sm text-gray-700">
                          <MapPin className="w-4 h-4 mr-2 text-[#0088cc]" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0088cc]/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </motion.div>
                  </div>

                  {/* Time Display for larger screens */}
                  <div className={`hidden md:block w-2/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    {/* <div className="text-lg font-bold text-[#0088cc]">{item.time}</div> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Important Notes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="flex items-start">
                  <Clock className="w-4 h-4 text-[#0088cc] mr-2 mt-0.5" />
                  <span>All times are in Indian Standard Time (IST)</span>
                </div>
                <div className="flex items-start">
                  <Users className="w-4 h-4 text-[#0088cc] mr-2 mt-0.5" />
                  <span>Networking opportunities throughout the day</span>
                </div>
                <div className="flex items-start">
                  <Coffee className="w-4 h-4 text-[#0088cc] mr-2 mt-0.5" />
                  <span>Refreshments provided during breaks</span>
                </div>
                <div className="flex items-start">
                  <Award className="w-4 h-4 text-[#0088cc] mr-2 mt-0.5" />
                  <span>Certificate of participation included</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* CSS for background timeline pattern */}
      <style jsx>{`
        .bg-timeline-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%230088cc' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='50' cy='10' r='2'/%3E%3Ccircle cx='10' cy='50' r='2'/%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </section>
    
  )
}

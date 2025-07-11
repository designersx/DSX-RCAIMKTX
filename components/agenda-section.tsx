"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Coffee, Users, Utensils, Award, MapPin } from "lucide-react";

export function AgendaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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
  };

  const agendaItems = [
    {
      time: "10:15 AM - 11:00 AM",
      title: "Zero Trust Principle",
      description:
        "Cyber Security and AI Opportunities and Threats for Businesses",
      type: "session",
      icon: Award,
      speaker: "Sh. Aashish Abrahim (CISCO), Ms. Rashmi Sharma Yadav (DCP I4C)",
      location: "Main Lobby",
    },
    {
      time: "11:00 AM - 12:00 PM",
      title: "Inaugural Session",
      description:
        "Opening Remarks, Welcome Address, Keynote Address, Address by Guest of Honor",
      type: "keynote",
      icon: Award,
      speaker:
        "Ms. Bharti Sood (Regional Director PHDCCI), Sh. Tarun Malhotra (Convener Regional Cyber Security and AI Committee PHDCCI), Sh. Vinod Sharma (Regional Director Northern Region Ministry of Corporate Affairs Government of India), Sh. Shailendra Tyagi (Director Software Technology Parks of India Ministry of Electronics and Information Technology Government of India), Sh. Rakesh Kumar, IPS* (CEO Indian Cybercrime Coordination Centre (I4C) Ministry of Home Affairs Government of India), CS Rahul Jogi (Convener Regional NCLT and Corporate Affairs Committee PHDCCI) ",
      location: "Main Auditorium",
    },
    {
      time: "12:00 AM - 12:45 PM",
      title: "DPDP Act 2023 in Action:",
      description: "Compliance, Confusion &amp; Consequences",
      type: "session",
      icon: Award,
      speaker:
        "Ms. Debashree Mukherjee (Associate Director PwC), Sh. Bharat Chugh* (Former Judge)",
      location: "Main Auditorium",
    },
    {
      time: "12:45 PM - 01:30 PM",
      title: "Scaling Smart with AI:",
      description: "How Businesses can leverage AI for Growth",
      type: "session",
      icon: Clock,
      speaker:
        "Ms. Smiti Bhatt (Founder Advantage Club AI), Ms. Isha Rani (Head of Engineering Microsoft)",
      location: "Main Auditorium",
    },
    {
      time: "01:30 PM - 02:00 PM",
      title: "Workshop on Cyber Threat Landscape:",
      description: "Trends, Tactics Safeguard Against Cybercrime and Attacks",
      type: "panel",
      icon: Award,
      speaker:
        "Sh. Tarun Malhotra (Convener Regional Cyber Security and AI Committee PHDCCI)",
      location: "Exhibition Area",
    },
    {
      time: "02:00 PM - 02:30 PM",
      title: "Valedictory Session & Vote of Thanks",
      description: "Networking lunch with fellow attendees and speakers",
      type: "break",
      icon: Utensils,
      speaker: null,
      location: "Banquet Hall",
    },
    {
      time: "02:30 PM - 03:00 PM",
      title: "Fireside Chat:",
      description: "Reel to Real Behind the Scam",
      type: "session",
      icon: Clock,
      speaker: "Mr. Manish Trehan (Producer Jamtara- Netflix Series)",
      location: "Main Auditorium",
    },
    {
      time: "03:00 PM - 04:00 PM",
      title: "Cyber Law Enforcement:",
      description: "Strategy, Challenges, and Real-World Impact",
      type: "session",
      icon: Users,
      speaker:
        "Ms. Geetanjali Khandelwal, IPS (SP- Cyber Crime Cell Chandigarh Police), Sh. Jashandeep Singh Gill, PPS (SP- Cyber Crime Cell Punjab Police), Sh. Deepak Saharan, IPS (SP-Cyber Crime Cell Haryana Police)",
      location: "Main Auditorium",
    },
    // {
    //   time: "04:30 PM - 05:00 PM",
    //   title: "Valedictory Session & Vote of Thanks",
    //   description: "Networking lunch with fellow attendees and speakers",
    //   type: "break",
    //   icon: Utensils,
    //   speaker: null,
    //   location: "Banquet Hall",
    // },
    {
      time: "04:00 PM - 04:50 PM",
      title: "Board Governance in the Era of AI",
      description:
        "Overseeing Innovation: Boardroom Strategies for the AI Age",
      type: "session",
      icon: Clock,
      speaker: "Sh. Shekhar Chopra (Director PwC)",
      location: "Main Auditorium",
    },
    {
      time: "04:50 PM - 05:00 PM",
      title: "Felicitation and Vote of Thanks",
      description:"Thanking the Minds and Hands Behind a Memorable Event",
      type: "ceremony",
      icon: Clock,
      speaker: "Ms. Bharti Sood (Regional Director PHDCCI)",
      location: "Main Auditorium",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "keynote":
        return "from-purple-500 to-indigo-600";
      case "session":
        return "from-[#0088cc] to-blue-600";
      case "panel":
        return "from-green-500 to-emerald-600";
      case "workshop":
        return "from-orange-500 to-amber-600";
      case "break":
        return "from-gray-400 to-gray-500";
      case "ceremony":
        return "from-red-500 to-pink-600";
      default:
        return "from-[#0088cc] to-blue-600";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "keynote":
        return "Keynote";
      case "session":
        return "Session";
      case "panel":
        return "Panel";
      case "workshop":
        return "Workshop";
      case "break":
        return "Break";
      case "ceremony":
        return "Ceremony";
      default:
        return "Session";
    }
  };

  return (
    <section
      className="w-full py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50"
      id="agenda"
    >
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
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Conference Agenda
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0088cc] to-blue-400 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              A comprehensive day of learning, networking, and insights into the
              latest trends in cybersecurity and AI.
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
                      index % 2 === 0
                        ? "md:mr-auto md:pr-8"
                        : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <motion.div
                      className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 relative overflow-hidden group hover:shadow-xl transition-all duration-300"
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      {/* Decorative gradient */}
                      <div
                        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${getTypeColor(
                          item.type
                        )}`}
                      ></div>

                      {/* Type Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getTypeColor(
                            item.type
                          )}`}
                        >
                          <item.icon className="w-3 h-3 mr-1" />
                          {getTypeLabel(item.type)}
                        </div>
                        <div className="text-sm font-bold text-[#0088cc]">
                          {item.time}
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
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
                  <div
                    className={`hidden md:block w-2/12 ${
                      index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                    }`}
                  >
                    {/* <div className="text-lg font-bold text-[#0088cc]">{item.time}</div> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Important Notes
              </h3>
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
  );
}

"use client"


import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState,useEffect } from "react"
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



   const iframeRef = useRef<HTMLIFrameElement | null>(null);
  
    useEffect(() => {
      const handleMessage = (event: MessageEvent) => {
        const evntData = event.data;
        if (evntData && typeof evntData === 'string') {
          const zf_ifrm_data = evntData.split('|');
          if (zf_ifrm_data.length === 2 || zf_ifrm_data.length === 3) {
            const zf_perma = zf_ifrm_data[0];
            const zf_ifrm_ht_nw = parseInt(zf_ifrm_data[1], 10) + 15 + 'px';
            const iframe = iframeRef.current;
            if (iframe && iframe.src.includes('formperma') && iframe.src.includes(zf_perma)) {
              const prevIframeHeight = iframe.style.height;
              let zf_tout = false;
              if (zf_ifrm_data.length === 3) {
                iframe.scrollIntoView();
                zf_tout = true;
              }
              if (prevIframeHeight !== zf_ifrm_ht_nw) {
                if (zf_tout) {
                  setTimeout(() => {
                    if (iframe) iframe.style.height = zf_ifrm_ht_nw;
                  }, 500);
                } else {
                  iframe.style.height = zf_ifrm_ht_nw;
                }
              }
            }
          }
        }
      };
  
      window.addEventListener('message', handleMessage);
  
      return () => {
        window.removeEventListener('message', handleMessage);
      };
    }, []);

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-100 px-4 sm:px-6 lg:px-8" id="booking">
      <div className=" md:container mx-auto max-w-7xl">
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
          {/* form */
          }

      <div
      id="zf_div_3vsT6r1EJKUDBwhpnjaT6HO-ug8Iv00Z82BHLAwyCxs"
      style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
    >
      <iframe
        ref={iframeRef}
        src="https://forms.zohopublic.in/nirajthaperdxgm1/form/SecureYourPlaceatRCA2025/formperma/3vsT6r1EJKUDBwhpnjaT6HO-ug8Iv00Z82BHLAwyCxs?zf_rszfm=1"
        title="Fill the below Details to Register"
        aria-label="Fill the below Details to Register"
        style={{
          border: 'none',
          height: '1407px',
          width: '100%',
          transition: 'all 0.5s ease',
        }}
      />
    </div>


          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

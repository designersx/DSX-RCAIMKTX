"use client";
import React from "react";
import { AnimatedHeroSection } from "@/components/animated-hero-section"
import { Footer } from "@/components/footer";
import { AnimatedHeroSection2 } from "@/components/animated-hero-section2-attend"


function Attend() {
  return (
    <div>       
        <AnimatedHeroSection2 />
      <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0 }}>
        <iframe
          src="https://konfhub.com/widget/regional-cybersecurity-ai-conference?desc=false&ticketId=48675&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=091e35&ticketCl=091e35&btnColor=133865&fontFamily=Inter&borderRadius=10"
          id="konfhub-widget"
          title="Register for Regional Cybersecurity & AI Conference"
          style={{ width: "100vw", height: "100vh", border: "none" }}
          allowFullScreen
        />
      </div>
      <Footer />
    </div>
    
  );
}

export default Attend;

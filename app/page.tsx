import { AnimatedHeroSection } from "@/components/animated-hero-section"
import { AboutSection } from "@/components/about-section"
import { SpeakersSection } from "@/components/speakers-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { PricingSection } from "@/components/pricing-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { AgendaSection } from "@/components/agenda-section"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <AnimatedHeroSection />

      <AboutSection />
      <AgendaSection />

      <SpeakersSection />
      <SponsorsSection />
      <PricingSection />
      <CTASection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

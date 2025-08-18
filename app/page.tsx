import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { AutomationSection } from "@/components/sections/automation-section"
import { FaqSection } from "@/components/sections/faq-section"
import { CtaSection } from "@/components/sections/cta-section"
import { MouseGlow } from "@/components/ui-library/effects/mouse-glow"

export default function HomePage() {
  return (
    <main className="flex flex-col items-center relative">
      <MouseGlow
        color="rgba(59, 130, 246, 0.12)"
        size={600}
        blur={150}
        opacity={0.6}
        followSpeed={0.05}
        pulseEffect={true}
        pulseSpeed={4}
        pulseScale={1.05}
      />

      <HeroSection />
      <AboutSection />
      <AutomationSection />
      <FaqSection />
      <CtaSection />
    </main>
  )
}

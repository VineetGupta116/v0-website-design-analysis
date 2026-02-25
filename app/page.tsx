import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { WelcomeSection } from "@/components/sections/welcome"
import { ProceduresSection } from "@/components/sections/procedures"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { FeaturesSection } from "@/components/sections/features"
import { CtaSection } from "@/components/sections/cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WelcomeSection />
        <ProceduresSection />
        <TestimonialsSection />
        <FeaturesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}

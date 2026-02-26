import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export function CtaSection() {
  return (
    <section id="contact" className="relative bg-background py-24 lg:py-32">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--charcoal) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Decorative Element */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-rose-gold" />
            <div className="h-2 w-2 rotate-45 border border-rose-gold" />
            <div className="h-px w-16 bg-rose-gold" />
          </div>

          <h2 className="mb-4 font-[var(--font-cormorant)] text-4xl font-light text-charcoal md:text-5xl lg:text-6xl">
            <span className="text-pretty">Ready to begin?</span>
          </h2>
          <p className="mb-10 font-[var(--font-montserrat)] text-sm text-charcoal-light md:text-base">
            Schedule your private consultation and take the first step toward
            your transformation.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-rose-gold px-10 py-4 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-rose-gold-dark"
            >
              Book Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+917017193675"
              className="group inline-flex items-center gap-3 border border-charcoal px-10 py-4 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.2em] text-charcoal transition-all hover:border-rose-gold hover:text-rose-gold"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-border pt-10">
            <div className="text-center">
              <span className="font-[var(--font-cormorant)] text-3xl font-light text-charcoal">
                20+
              </span>
              <p className="font-[var(--font-montserrat)] text-[10px] uppercase tracking-wider text-charcoal-light">
                Years
              </p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-center">
              <span className="font-[var(--font-cormorant)] text-3xl font-light text-charcoal">
                75
              </span>
              <p className="font-[var(--font-montserrat)] text-[10px] uppercase tracking-wider text-charcoal-light">
                Procedures
              </p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-center">
              <span className="font-[var(--font-cormorant)] text-3xl font-light text-charcoal">
                10K+
              </span>
              <p className="font-[var(--font-montserrat)] text-[10px] uppercase tracking-wider text-charcoal-light">
                Patients
              </p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-center">
              <span className="font-[var(--font-cormorant)] text-3xl font-light text-charcoal">
                4.9
              </span>
              <p className="font-[var(--font-montserrat)] text-[10px] uppercase tracking-wider text-charcoal-light">
                Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

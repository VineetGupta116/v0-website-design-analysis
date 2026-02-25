import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function WelcomeSection() {
  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/about-clinic.jpg"
                alt="SWI Infinity Clinic Interior"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Stat Box */}
            <div className="absolute -bottom-6 -right-6 border border-border bg-card p-8 shadow-lg md:bottom-8 md:right-[-40px]">
              <span className="font-[var(--font-cormorant)] text-5xl font-light text-rose-gold">
                74
              </span>
              <p className="mt-1 font-[var(--font-montserrat)] text-xs uppercase tracking-widest text-charcoal-light">
                Advanced Procedures
              </p>
            </div>
            {/* Accent Line */}
            <div className="absolute -left-4 top-8 h-32 w-px bg-rose-gold" />
          </div>

          {/* Content Side */}
          <div className="lg:pl-8">
            <div className="mb-4 flex items-center gap-4">
              <div className="h-px w-12 bg-rose-gold" />
              <span className="font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-rose-gold">
                Welcome to SWI Infinity
              </span>
            </div>

            <h2 className="mb-8 font-[var(--font-cormorant)] text-4xl font-light leading-tight text-charcoal md:text-5xl">
              <span className="text-balance">
                Pioneering the Art of{" "}
                <span className="italic text-rose-gold">Surgical Wellness</span>
              </span>
            </h2>

            <p className="mb-8 font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light">
              At SWI Infinity, we merge medical precision with artistic vision.
              With 74 advanced procedures across hair restoration, body
              contouring, facial surgery, and skin treatments, our commitment is
              to provide transformative results that honor your natural beauty.
            </p>

            <div className="mb-10 grid grid-cols-2 gap-6">
              <div className="border-l-2 border-rose-gold/30 pl-4">
                <span className="font-[var(--font-cormorant)] text-3xl font-light text-charcoal">
                  20+
                </span>
                <p className="font-[var(--font-montserrat)] text-xs text-charcoal-light">
                  Years of Excellence
                </p>
              </div>
              <div className="border-l-2 border-rose-gold/30 pl-4">
                <span className="font-[var(--font-cormorant)] text-3xl font-light text-charcoal">
                  10K+
                </span>
                <p className="font-[var(--font-montserrat)] text-xs text-charcoal-light">
                  Happy Patients
                </p>
              </div>
            </div>

            <Link
              href="#procedures"
              className="group inline-flex items-center gap-3 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.2em] text-rose-gold transition-colors hover:text-rose-gold-dark"
            >
              Learn About Our Philosophy
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

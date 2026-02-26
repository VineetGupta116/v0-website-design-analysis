import Image from "next/image"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

const credentials = [
  "MBBS, MS (General Surgery), MCh (Plastic Surgery)",
  "Advanced Fellowship in Aesthetic & Reconstructive Surgery",
  "20+ years of clinical and surgical experience",
]

const memberships = [
  "Association of Plastic Surgeons of India (APSI)",
  "Indian Association of Aesthetic Plastic Surgeons (IAAPS)",
  "International Society of Aesthetic Plastic Surgery (ISAPS)",
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream-dark pt-28">
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <p className="mb-4 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-rose-gold">
              About SWI Infinity
            </p>
            <h1 className="font-[var(--font-cormorant)] text-4xl font-light text-charcoal md:text-5xl">
              Led by Dr. Swikriti Raniwala
            </h1>
            <p className="mt-4 max-w-3xl font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light md:text-base">
              SWI Infinity combines evidence-based surgical care with modern aesthetic planning.
              Our philosophy is simple: personalized treatment plans, transparent communication,
              and outcomes that look naturally balanced for every patient.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-5 lg:px-8">
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-3xl border border-border bg-card">
                <Image
                  src="/images/dr-swikriti.jpg"
                  alt="Dr. Swikriti Raniwala"
                  width={900}
                  height={1200}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>

            <div className="space-y-8 lg:col-span-3">
              <article className="rounded-3xl border border-border bg-card p-6 lg:p-8">
                <h2 className="font-[var(--font-cormorant)] text-3xl font-light text-charcoal">
                  Doctor Profile
                </h2>
                <p className="mt-4 font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light md:text-base">
                  Dr. Swikriti Raniwala is a board-certified plastic surgeon known for her patient-first
                  approach and meticulous technique. She has trained at leading institutions in India and
                  continues to adopt globally accepted protocols for surgical safety, scar minimization,
                  and long-term outcome stability.
                </p>
              </article>

              <article className="rounded-3xl border border-border bg-card p-6 lg:p-8">
                <h2 className="font-[var(--font-cormorant)] text-3xl font-light text-charcoal">
                  Education & Credentials
                </h2>
                <ul className="mt-4 space-y-2 font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light md:text-base">
                  {credentials.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>

              <article className="rounded-3xl border border-border bg-card p-6 lg:p-8">
                <h2 className="font-[var(--font-cormorant)] text-3xl font-light text-charcoal">
                  Professional Memberships
                </h2>
                <ul className="mt-4 space-y-2 font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light md:text-base">
                  {memberships.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

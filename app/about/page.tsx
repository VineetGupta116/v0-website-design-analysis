import Image from "next/image"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

const credentials = [
  "MBBS - S.N. Medical College, Agra (2010-2016)",
  "M.S. (General Surgery) - S.N. Medical College, Agra (2017-2020)",
  "M.Ch. (Plastic, Reconstructive & Aesthetic Surgery) - ABVIMS & Dr. RML Hospital, New Delhi (2022-2025)",
  "Fellowship in Aesthetic Surgery - Dr. SB Aesthetics, Gurugram (2025)",
  "Specialized Training in Hair Transplantation - Enhance Clinic, Kolkata under Dr. Manoj Khanna (2024)",
]

const memberships = [
  "Associate Life Member, Association of Plastic Surgeons of India (APSI) - APSI2248",
  "Associate Life Member, Indian Association of Aesthetic Plastic Surgeons (IAAPS) - 2024/UP/65",
  "Member, International Society of Aesthetic Plastic Surgery (ISAPS) - 25191",
  "Delhi Medical Council - Reg. No. 78286",
  "Uttar Pradesh Medical Council - Reg. No. 73672",
]

const awards = [
  "1st Prize - Poster Presentation on Lower Limb Reconstruction, AFPSRM 2024",
  "Invited Delegate, HAIRCON 2025 - Annual Conference on Hair Restoration and Aesthetic Surgery",
  "Participant - Cadaveric Dissection Workshop on Facial Aesthetics, IAAPS-ISAPS 2024",
  "Paper Presentations at APSICON, AESUR, and NABICON (2023-2024)",
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream-dark pt-28" id="main-content">
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <p className="mb-4 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-rose-gold">
              About SWI Infinity
            </p>
            <h1 className="font-[var(--font-cormorant)] text-4xl font-light text-charcoal md:text-5xl">
              Led by Dr. Swikriti Raniwala, M.Ch.
            </h1>
            <p className="mt-4 max-w-3xl font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light md:text-base">
              Board-certified plastic surgeon combining advanced surgical training with a patient-centered
              approach. Specializing in aesthetic surgery, body contouring, facial rejuvenation, and
              reconstructive procedures with a focus on natural-looking, harmonious results.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-5 lg:px-8">
            {/* Photo column - sticky on desktop */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-28">
                <div className="aspect-[3/4] overflow-hidden rounded-3xl border border-border bg-card">
                  <Image
                    src="/images/dr-swikriti.jpg"
                    alt="Dr. Swikriti Raniwala, M.Ch. - Consultant Plastic, Reconstructive & Aesthetic Surgeon"
                    width={900}
                    height={1200}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Content column */}
            <div className="space-y-8 lg:col-span-3">
              <article className="rounded-3xl border border-border bg-card p-6 lg:p-8">
                <h2 className="font-[var(--font-cormorant)] text-3xl font-light text-charcoal">
                  Professional Profile
                </h2>
                <div className="mt-4 space-y-3 font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light md:text-base">
                  <p>
                    Dr. Swikriti Raniwala is a consultant plastic, reconstructive, and aesthetic surgeon
                    trained at the prestigious ABVIMS & Dr. RML Hospital in New Delhi, where she completed
                    her M.Ch. in Plastic Surgery. She brings comprehensive expertise across the full spectrum
                    of aesthetic procedures, from surgical body contouring and facial rejuvenation to advanced
                    non-surgical treatments.
                  </p>
                  <p>
                    Following her super-specialization, Dr. Raniwala completed a focused fellowship in
                    Aesthetic Surgery at Dr. SB Aesthetics in Gurugram, gaining intensive exposure to advanced
                    techniques in breast surgery, facial aesthetics, body contouring, and non-surgical
                    rejuvenation. She has also received specialized training in hair transplantation under
                    Dr. Manoj Khanna, a pioneer in hair restoration surgery in India.
                  </p>
                  <p>
                    Her practice philosophy centers on personalized treatment planning, combining technical
                    precision with aesthetic sensitivity. Each procedure is carefully planned through detailed
                    consultation to align surgical technique, recovery timelines, and expected outcomes with
                    individual patient goals, ensuring results that look naturally balanced and harmonious.
                  </p>
                  <p>
                    Dr. Raniwala is also committed to advancing the field through active participation in
                    professional conferences and research. She has presented her work at multiple national
                    conferences including APSICON, AESUR, and NABICON, earning recognition for her research
                    contributions to aesthetic and reconstructive surgery.
                  </p>
                </div>
              </article>

              <article className="rounded-3xl border border-border bg-card p-6 lg:p-8">
                <h2 className="font-[var(--font-cormorant)] text-3xl font-light text-charcoal">
                  Education & Training
                </h2>
                <ul className="mt-4 space-y-2 font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light md:text-base">
                  {credentials.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-rose-gold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-3xl border border-border bg-card p-6 lg:p-8">
                <h2 className="font-[var(--font-cormorant)] text-3xl font-light text-charcoal">
                  Areas of Expertise
                </h2>
                <div className="mt-4 grid gap-3 font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light md:text-base sm:grid-cols-2">
                  <div>
                    <h3 className="mb-2 font-semibold text-charcoal">Aesthetic Surgery</h3>
                    <ul className="space-y-1.5">
                      <li className="flex gap-2"><span className="text-rose-gold">•</span> Breast Surgery (Augmentation, Reduction)</li>
                      <li className="flex gap-2"><span className="text-rose-gold">•</span> Body Contouring & Liposuction</li>
                      <li className="flex gap-2"><span className="text-rose-gold">•</span> Facial Surgery (Rhinoplasty, Facelift)</li>
                      <li className="flex gap-2"><span className="text-rose-gold">•</span> Gynecomastia Surgery</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-charcoal">Non-Surgical Treatments</h3>
                    <ul className="space-y-1.5">
                      <li className="flex gap-2"><span className="text-rose-gold">•</span> Botox & Dermal Fillers</li>
                      <li className="flex gap-2"><span className="text-rose-gold">•</span> Laser Treatments</li>
                      <li className="flex gap-2"><span className="text-rose-gold">•</span> PRP Therapy</li>
                      <li className="flex gap-2"><span className="text-rose-gold">•</span> Hair Transplantation</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-charcoal">Reconstructive Surgery</h3>
                    <ul className="space-y-1.5">
                      <li className="flex gap-2"><span className="text-rose-gold">•</span> Trauma & Burn Reconstruction</li>
                      <li className="flex gap-2"><span className="text-rose-gold">•</span> Scar Revision</li>
                      <li className="flex gap-2"><span className="text-rose-gold">•</span> Craniofacial Anomalies</li>
                      <li className="flex gap-2"><span className="text-rose-gold">•</span> Microsurgery & Flaps</li>
                    </ul>
                  </div>
                </div>
              </article>

              <article className="rounded-3xl border border-border bg-card p-6 lg:p-8">
                <h2 className="font-[var(--font-cormorant)] text-3xl font-light text-charcoal">
                  Professional Memberships
                </h2>
                <ul className="mt-4 space-y-2 font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light md:text-base">
                  {memberships.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-rose-gold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-3xl border border-border bg-card p-6 lg:p-8">
                <h2 className="font-[var(--font-cormorant)] text-3xl font-light text-charcoal">
                  Awards & Recognition
                </h2>
                <ul className="mt-4 space-y-2 font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light md:text-base">
                  {awards.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-rose-gold">•</span>
                      <span>{item}</span>
                    </li>
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

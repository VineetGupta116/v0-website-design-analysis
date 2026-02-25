"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Dr. Raniwala is a true artist. My rhinoplasty results are so natural, nobody believes I had surgery. She restored my confidence completely.",
    name: "Aditi S.",
    procedure: "Rhinoplasty",
    initials: "AS",
  },
  {
    quote:
      "From the first consultation to the final check-up, the care was exceptional. The hair transplant procedure was virtually painless.",
    name: "Rahul K.",
    procedure: "Hair Restoration",
    initials: "RK",
  },
  {
    quote:
      "I was nervous about body contouring, but the team's professionalism put me at ease. The results have exceeded my wildest expectations.",
    name: "Priya M.",
    procedure: "Body Contouring",
    initials: "PM",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-rose-gold" />
            <span className="font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-rose-gold">
              Patient Stories
            </span>
            <div className="h-px w-12 bg-rose-gold" />
          </div>
          <h2 className="mb-4 font-[var(--font-cormorant)] text-4xl font-light text-charcoal md:text-5xl">
            <span className="text-balance">
              Real experiences from real patients
            </span>
          </h2>
        </div>

        {/* Testimonial Cards - Desktop */}
        <div className="hidden gap-8 md:grid md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg"
            >
              <Quote className="mb-6 h-8 w-8 text-rose-gold/30" />
              <p className="mb-8 flex-1 font-[var(--font-montserrat)] text-sm italic leading-relaxed text-charcoal-light">
                {`"${testimonial.quote}"`}
              </p>
              <div className="flex items-center gap-4 border-t border-border pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-gold/10">
                  <span className="font-[var(--font-cormorant)] text-lg font-semibold text-rose-gold">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <h4 className="font-[var(--font-cormorant)] text-lg font-semibold text-charcoal">
                    {testimonial.name}
                  </h4>
                  <p className="font-[var(--font-montserrat)] text-xs text-rose-gold">
                    {testimonial.procedure}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Carousel - Mobile */}
        <div className="md:hidden">
          <div className="border border-border bg-card p-8">
            <Quote className="mb-6 h-8 w-8 text-rose-gold/30" />
            <p className="mb-8 font-[var(--font-montserrat)] text-sm italic leading-relaxed text-charcoal-light">
              {`"${testimonials[current].quote}"`}
            </p>
            <div className="flex items-center gap-4 border-t border-border pt-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-gold/10">
                <span className="font-[var(--font-cormorant)] text-lg font-semibold text-rose-gold">
                  {testimonials[current].initials}
                </span>
              </div>
              <div>
                <h4 className="font-[var(--font-cormorant)] text-lg font-semibold text-charcoal">
                  {testimonials[current].name}
                </h4>
                <p className="font-[var(--font-montserrat)] text-xs text-rose-gold">
                  {testimonials[current].procedure}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center border border-border text-charcoal-light transition-all hover:border-rose-gold hover:text-rose-gold"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 transition-all ${
                    i === current
                      ? "w-8 bg-rose-gold"
                      : "w-4 bg-border hover:bg-rose-gold/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center border border-border text-charcoal-light transition-all hover:border-rose-gold hover:text-rose-gold"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

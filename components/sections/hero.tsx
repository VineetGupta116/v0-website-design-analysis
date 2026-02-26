"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/images/hero-1.jpg",
    subtitle: "Est. 2003",
    title: "Precision & Artistry",
    description: "Where surgical excellence meets aesthetic harmony.",
  },
  {
    image: "/images/hero-2.jpg",
    subtitle: "Est. 2003",
    title: "Redefining Confidence",
    description: "Advanced techniques for natural, lasting results.",
  },
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return
      setIsTransitioning(true)
      setCurrent(index)
      setTimeout(() => setIsTransitioning(false), 800)
    },
    [isTransitioning]
  )

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % slides.length)
  }, [current, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((current - 1 + slides.length) % slides.length)
  }, [current, goToSlide])

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/*
           * HERO OVERLAY — multi-stop gradient instead of a flat tint.
           * - Top band (0-30%): slightly heavier to guarantee navbar/logo contrast
           *   over any hero image, regardless of brightness.
           * - Middle (30-60%): eases off so the image breathes and stays vivid.
           * - Bottom (60-100%): heavier again to anchor text content and CTAs.
           *
           * Using oklch for perceptually uniform darkening.  The charcoal
           * token (#2d2d2d) is the base; we just vary its alpha.
           */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(26,26,26,0.55) 0%, rgba(26,26,26,0.30) 35%, rgba(26,26,26,0.25) 55%, rgba(26,26,26,0.50) 100%)",
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Subtitle */}
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-12 bg-rose-gold" />
              <span className="font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-rose-gold-light">
                {slides[current].subtitle}
              </span>
            </div>

            {/* Title */}
            <h1
              className="mb-6 font-[var(--font-cormorant)] text-5xl font-light leading-tight text-cream md:text-6xl lg:text-7xl"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.15)" }}
            >
              <span className="text-balance">{slides[current].title}</span>
            </h1>

            {/* Description */}
            <p className="mb-10 max-w-md font-[var(--font-montserrat)] text-base font-light leading-relaxed text-cream/80 md:text-lg">
              {slides[current].description}
            </p>

            {/* CTA */}
            <Link
              href="/#procedures"
              className="group inline-flex items-center gap-3 border border-rose-gold bg-rose-gold/10 px-8 py-4 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.2em] text-cream backdrop-blur-sm transition-all duration-300 hover:bg-rose-gold hover:text-primary-foreground"
            >
              View Procedures
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Dots */}
          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-0.5 transition-all duration-500 ${
                  index === current
                    ? "w-12 bg-rose-gold"
                    : "w-6 bg-cream/40 hover:bg-cream/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="flex h-10 w-10 items-center justify-center border border-cream/20 text-cream/60 transition-all hover:border-rose-gold hover:text-rose-gold"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextSlide}
              className="flex h-10 w-10 items-center justify-center border border-cream/20 text-cream/60 transition-all hover:border-rose-gold hover:text-rose-gold"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Side Accent Line */}
      <div className="absolute bottom-0 left-8 top-0 z-10 hidden w-px bg-cream/10 lg:block">
        <div
          className="w-full bg-rose-gold transition-all duration-1000"
          style={{ height: `${((current + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

const categories = ["All", "Hair", "Body", "Face", "Skin"] as const

type Category = (typeof categories)[number]

interface Procedure {
  title: string
  description: string
  category: Exclude<Category, "All">
  image: string
}

const procedures: Procedure[] = [
  {
    title: "Hair Transplant (FUE/FUT)",
    description:
      "Advanced follicular unit extraction and transplantation for natural, permanent hair restoration.",
    category: "Hair",
    image: "/images/procedure-hair.jpg",
  },
  {
    title: "PRP Therapy for Hair",
    description:
      "Platelet-rich plasma injections to stimulate hair follicles and natural growth.",
    category: "Hair",
    image: "/images/procedure-hair.jpg",
  },
  {
    title: "Gynecomastia Surgery",
    description:
      "Male chest contouring for a flatter, more masculine physique.",
    category: "Body",
    image: "/images/procedure-body.jpg",
  },
  {
    title: "Liposuction (HD / 360)",
    description:
      "High-definition body sculpting with advanced liposuction techniques.",
    category: "Body",
    image: "/images/procedure-body.jpg",
  },
  {
    title: "Rhinoplasty",
    description:
      "Structural reshaping of the nose to enhance facial harmony and function.",
    category: "Face",
    image: "/images/procedure-face.jpg",
  },
  {
    title: "Blepharoplasty",
    description:
      "Eyelid rejuvenation to reduce puffiness and restore youthful appearance.",
    category: "Face",
    image: "/images/procedure-face.jpg",
  },
  {
    title: "Botox",
    description:
      "Injectable treatment to smooth wrinkles and prevent aging signs.",
    category: "Skin",
    image: "/images/procedure-skin.jpg",
  },
  {
    title: "Dermal Fillers",
    description:
      "Volume restoration and facial contouring with hyaluronic acid.",
    category: "Skin",
    image: "/images/procedure-skin.jpg",
  },
]

const serviceCategories = [
  { name: "Hair", count: 5, image: "/images/procedure-hair.jpg" },
  { name: "Body", count: 12, image: "/images/procedure-body.jpg" },
  { name: "Face", count: 24, image: "/images/procedure-face.jpg" },
  { name: "Skin", count: 33, image: "/images/procedure-skin.jpg" },
]

export function ProceduresSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All")

  const filteredProcedures =
    activeCategory === "All"
      ? procedures
      : procedures.filter((p) => p.category === activeCategory)

  return (
    <section id="procedures" className="bg-cream-dark py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-rose-gold" />
            <span className="font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-rose-gold">
              Our Expertise
            </span>
            <div className="h-px w-12 bg-rose-gold" />
          </div>
          <h2 className="mb-4 font-[var(--font-cormorant)] text-4xl font-light text-charcoal md:text-5xl">
            <span className="text-balance">Featured Procedures</span>
          </h2>
          <p className="mx-auto max-w-lg font-[var(--font-montserrat)] text-sm text-charcoal-light">
            Explore our most popular treatments across all categories
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 font-[var(--font-montserrat)] text-xs font-medium uppercase tracking-widest transition-all ${
                activeCategory === cat
                  ? "border border-rose-gold bg-rose-gold text-primary-foreground"
                  : "border border-border bg-card text-charcoal-light hover:border-rose-gold/50 hover:text-rose-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Procedure Cards Grid */}
        <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProcedures.map((procedure, index) => (
            <Link
              key={`${procedure.title}-${index}`}
              href="#"
              className="group overflow-hidden border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={procedure.image}
                  alt={procedure.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/0 transition-all group-hover:bg-charcoal/20" />
                <span className="absolute left-4 top-4 bg-rose-gold/90 px-3 py-1 font-[var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                  {procedure.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-[var(--font-cormorant)] text-xl font-semibold text-charcoal">
                  {procedure.title}
                </h3>
                <p className="mb-4 font-[var(--font-montserrat)] text-xs leading-relaxed text-charcoal-light">
                  {procedure.description}
                </p>
                <span className="inline-flex items-center gap-1 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-wider text-rose-gold transition-colors group-hover:text-rose-gold-dark">
                  Discover
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Service Category Grid */}
        <div>
          <h3 className="mb-8 text-center font-[var(--font-cormorant)] text-2xl font-light text-charcoal">
            Explore All Our Services
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((cat) => (
              <Link
                key={cat.name}
                href="#"
                className="group relative flex items-end overflow-hidden p-6"
                style={{ minHeight: 180 }}
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/50 transition-all group-hover:bg-charcoal/60" />
                <div className="relative z-10">
                  <h4 className="font-[var(--font-cormorant)] text-2xl font-semibold text-cream">
                    {cat.name}
                  </h4>
                  <p className="font-[var(--font-montserrat)] text-xs text-cream/70">
                    {cat.count} Procedures
                  </p>
                  <div className="mt-3 flex items-center gap-1 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-wider text-rose-gold-light transition-colors group-hover:text-rose-gold">
                    View All
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

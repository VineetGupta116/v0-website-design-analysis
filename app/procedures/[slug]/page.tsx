import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { getProcedureBySlug, procedures } from "@/lib/procedures"

// Required for static export – pre‑generates all procedure pages
export async function generateStaticParams() {
  return procedures.map((procedure) => ({
    slug: procedure.slug,
  }))
}

interface ProcedureDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: ProcedureDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const procedure = getProcedureBySlug(slug)

  if (!procedure) {
    return {
      title: "Procedure Not Found | SWI Infinity",
      description: "The requested procedure could not be found.",
    }
  }

  return {
    title: procedure.seoTitle,
    description: procedure.seoDescription,
  }
}

const getHighlights = (procedureName: string, shortDescription: string) => [
  shortDescription,
  `Personalized planning for ${procedureName} based on your goals and clinical assessment.`,
  "Care pathway designed for comfort, safety, and natural-looking outcomes.",
]

const faqItems = [
  {
    question: "How do I know if this procedure is right for me?",
    answer:
      "Your suitability is confirmed during consultation based on your goals, medical history, and examination.",
  },
  {
    question: "What is the expected recovery timeline?",
    answer:
      "Recovery depends on the specific technique and your baseline health. Your surgeon will provide a tailored timeline.",
  },
  {
    question: "Will my treatment plan be personalized?",
    answer:
      "Yes. Every plan is customized to your anatomy, concerns, and desired outcomes.",
  },
]

export default async function ProcedureDetailPage({ params }: ProcedureDetailPageProps) {
  const { slug } = await params
  const procedure = getProcedureBySlug(slug)

  if (!procedure) {
    notFound()
  }

  const highlights = getHighlights(procedure.name, procedure.shortDescription)

  return (
    <>
      <Navbar />
      <main className="bg-cream-dark pt-28">
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <p className="mb-4 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-rose-gold">
              Procedure Details
            </p>
            <h1 className="font-[var(--font-cormorant)] text-4xl font-light text-charcoal md:text-5xl">
              {procedure.name}
            </h1>
            <p className="mt-4 max-w-3xl font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light md:text-base">
              {procedure.shortDescription}
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
              <Image
                src={procedure.imagePath}
                alt={procedure.name}
                width={1600}
                height={900}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="pb-8 lg:pb-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-[var(--font-cormorant)] text-3xl font-light text-charcoal md:text-4xl">
              Overview
            </h2>
            <p className="mt-4 max-w-4xl font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light md:text-base">
              {procedure.longDescription}
            </p>
          </div>
        </section>

        <section className="pb-12 lg:pb-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-[var(--font-cormorant)] text-3xl font-light text-charcoal md:text-4xl">
              Benefits & Highlights
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {highlights.map((highlight) => (
                <article
                  key={highlight}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <p className="font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light">
                    {highlight}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-12 lg:pb-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-[var(--font-cormorant)] text-3xl font-light text-charcoal md:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-6 space-y-4">
              {faqItems.map((item) => (
                <article key={item.question} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-[var(--font-cormorant)] text-2xl font-medium text-charcoal">
                    {item.question}
                  </h3>
                  <p className="mt-2 font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card py-14 lg:py-16">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 lg:flex-row lg:items-center lg:px-8">
            <div>
              <p className="font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-rose-gold">
                Consultation
              </p>
              <h2 className="mt-2 font-[var(--font-cormorant)] text-3xl font-light text-charcoal md:text-4xl">
                Book your consultation
              </h2>
              <p className="mt-3 max-w-2xl font-[var(--font-montserrat)] text-sm text-charcoal-light">
                Connect with our team to discuss your goals and create a personalized treatment plan.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center rounded-full bg-rose-gold px-6 py-3 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-rose-gold-dark"
              >
                Contact
              </Link>
              <Link
                href="tel:+917017193675"
                className="inline-flex items-center rounded-full border border-rose-gold px-6 py-3 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.2em] text-rose-gold transition-colors hover:bg-rose-gold/10"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Link
              href={`/${procedure.category}`}
              className="inline-flex items-center font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.2em] text-rose-gold transition-colors hover:text-rose-gold-dark"
            >
              ← Back to {procedure.category.charAt(0).toUpperCase() + procedure.category.slice(1)} Procedures
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

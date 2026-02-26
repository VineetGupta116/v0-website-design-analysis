import type { ProcedureDataCategory } from "@/lib/procedures"
import { getProceduresByCategory } from "@/lib/procedures"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

interface CategoryPageProps {
  category: ProcedureDataCategory
  title: string
  intro: string
}

export function CategoryPage({ category, title, intro }: CategoryPageProps) {
  const procedures = getProceduresByCategory(category)

  return (
    <>
      <Navbar />
      <main className="bg-cream-dark pt-28">
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <p className="mb-4 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-rose-gold">
              {title} Procedures
            </p>
            <h1 className="font-[var(--font-cormorant)] text-4xl font-light text-charcoal md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light md:text-base">
              {intro}
            </p>
          </div>
        </section>

        <section className="py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-[var(--font-cormorant)] text-3xl font-light text-charcoal md:text-4xl">
                Explore Treatments
              </h2>
              <span className="font-[var(--font-montserrat)] text-xs uppercase tracking-[0.2em] text-charcoal-light">
                {procedures.length} procedures
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {procedures.map((procedure) => (
                <Link
                  key={procedure.slug}
                  href={`/procedures/${procedure.slug}`}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-rose-gold/50 hover:shadow-md"
                >
                  <p className="mb-2 font-[var(--font-montserrat)] text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-gold">
                    {title}
                  </p>
                  <h3 className="font-[var(--font-cormorant)] text-2xl font-medium text-charcoal transition-colors group-hover:text-rose-gold-dark">
                    {procedure.name}
                  </h3>
                  <p className="mt-3 font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light">
                    {procedure.shortDescription}
                  </p>
                  <span className="mt-5 inline-flex items-center font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.18em] text-rose-gold">
                    View Procedure
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-card py-14 lg:py-16">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 lg:flex-row lg:items-center lg:px-8">
            <div>
              <p className="font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-rose-gold">
                Next Step
              </p>
              <h2 className="mt-2 font-[var(--font-cormorant)] text-3xl font-light text-charcoal md:text-4xl">
                Book your consultation
              </h2>
              <p className="mt-3 max-w-2xl font-[var(--font-montserrat)] text-sm text-charcoal-light">
                Speak with our team to receive a personalized treatment plan aligned with your goals.
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
      </main>
      <Footer />
    </>
  )
}

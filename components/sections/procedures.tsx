"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import {
  allCategories,
  categoryMeta,
  groupedProcedures,
  getProceduresByCategory,
  type ProcedureCategory,
} from "@/lib/procedures"

/* ─────────────────────────────────────────────────────────────────────────────
 * FEATURED PROCEDURES SECTION
 *
 * DATA-DRIVEN FILTERING:
 *   Instead of a hardcoded 2-item array, this section now pulls directly from
 *   the shared `groupedProcedures` cache in lib/procedures.ts.  Each category
 *   shows up to MAX_VISIBLE (6) procedures.  The "All" tab shows the first 6
 *   from each category interleaved (round-robin) for visual variety.
 *
 * LAYOUT STRATEGY:
 *   Desktop: CSS grid, 3 columns, wraps naturally.  No forced horizontal scroll.
 *   Mobile:  Horizontal scroll (overflow-x-auto) with snap points for
 *            touch-friendly swipe discovery.  Cards have min-w to ensure
 *            they're wide enough to be useful on small screens.
 *
 * PERFORMANCE:
 *   - `useMemo` on the filtered array prevents re-computation on unrelated
 *     state changes (e.g. hover on a card).
 *   - The grid container has a `min-h-[600px]` to prevent CLS when the
 *     filter changes and the card count shifts.
 *   - Image components use `sizes` to let the browser pick the right srcset
 *     entry and avoid downloading oversized images.
 *
 * ACCESSIBILITY:
 *   - Category tabs use role="tablist" / role="tab" / aria-selected.
 *   - Cards are standard <a> tags (via Next Link) — fully keyboard-navigable.
 *   - Category CTA links use descriptive text that includes the category name.
 * ───────────────────────────────────────────────────────────────────────────── */

const MAX_VISIBLE = 6

/*
 * Category image map — associates each category with a representative image
 * for the card thumbnails.  Uses the existing generated images.
 */
const categoryImages: Record<ProcedureCategory, string> = {
  Hair: "/images/procedure-hair.jpg",
  Body: "/images/procedure-body.jpg",
  Face: "/images/procedure-face.jpg",
  Skin: "/images/procedure-skin.jpg",
}

type FilterCategory = "All" | ProcedureCategory
const filterCategories: FilterCategory[] = ["All", ...allCategories]

export function ProceduresSection() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All")

  /*
   * MEMOIZED FILTERING:
   * Derives the visible procedures from the shared grouped cache.
   *
   * "All" mode: round-robin interleave from each category so the user sees
   * visual variety rather than all Hair then all Body etc.
   *
   * Category mode: first MAX_VISIBLE from that category.
   *
   * The `useMemo` dependency is just `activeCategory` — the grouped data is
   * a module-level constant and never changes.
   */
  const filteredProcedures = useMemo(() => {
    if (activeCategory === "All") {
      // Round-robin: take up to 2 from each category to fill 8 cards
      const result: { name: string; url: string; category: ProcedureCategory }[] = []
      const maxPerCat = 2
      for (let i = 0; i < maxPerCat; i++) {
        for (const cat of allCategories) {
          const items = groupedProcedures[cat]
          if (i < items.length) {
            result.push(items[i])
          }
        }
      }
      return result
    }

    return groupedProcedures[activeCategory].slice(0, MAX_VISIBLE)
  }, [activeCategory])

  /*
   * Determine if we should show a "View All" CTA.
   * For "All" mode: always show link to /procedures.
   * For a specific category: show if there are more items than MAX_VISIBLE.
   */
  const activeCategoryMeta = activeCategory !== "All" ? categoryMeta[activeCategory] : null
  const totalInCategory = activeCategory !== "All"
    ? groupedProcedures[activeCategory].length
    : null

  return (
    <section id="procedures" className="bg-cream-dark py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── Section Header ────────────────────────────────────────── */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-rose-gold" aria-hidden="true" />
            <span className="font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-rose-gold">
              Our Expertise
            </span>
            <div className="h-px w-12 bg-rose-gold" aria-hidden="true" />
          </div>
          <h2 className="mb-4 font-[var(--font-cormorant)] text-4xl font-light text-charcoal md:text-5xl">
            <span className="text-balance">Featured Procedures</span>
          </h2>
          <p className="mx-auto max-w-lg font-[var(--font-montserrat)] text-sm text-charcoal-light">
            Explore our most popular treatments across all categories
          </p>
        </div>

        {/* ── Category Filter Tabs ──────────────────────────────────── */}
        {/*
         * ARIA: proper tablist pattern.  Each button announces whether it's
         * the active selection.  We don't use role="tabpanel" on the grid
         * because the grid is always visible — it just changes content.
         */}
        <div
          className="mb-12 flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label="Filter procedures by category"
        >
          {filterCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 font-[var(--font-montserrat)] text-xs font-medium uppercase tracking-widest transition-all duration-200 ${
                activeCategory === cat
                  ? "border border-rose-gold bg-rose-gold text-primary-foreground"
                  : "border border-border bg-card text-charcoal-light hover:border-rose-gold/50 hover:text-rose-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Procedure Cards ───────────────────────────────────────── */}
        {/*
         * LAYOUT:
         * Desktop (lg+): 3-column CSS grid. Cards wrap naturally.
         * Tablet (sm-lg): 2-column grid.
         * Mobile (<sm): horizontal scroll with snap-x for swipe.
         *
         * min-h prevents CLS: the container maintains a stable height
         * even when the card count changes between filters.
         */}
        <div className="min-h-[520px]">
          {/* Desktop/Tablet: wrapped grid */}
          <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {filteredProcedures.map((procedure) => (
              <ProcedureCard
                key={procedure.url}
                name={procedure.name}
                url={procedure.url}
                category={procedure.category}
                image={categoryImages[procedure.category]}
              />
            ))}
          </div>

          {/* Mobile: horizontal swipe */}
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-none sm:hidden">
            {filteredProcedures.map((procedure) => (
              <div key={procedure.url} className="min-w-[280px] max-w-[320px] flex-shrink-0 snap-start">
                <ProcedureCard
                  name={procedure.name}
                  url={procedure.url}
                  category={procedure.category}
                  image={categoryImages[procedure.category]}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Category CTA ──────────────────────────────────────────── */}
        {/*
         * Conversion-focused CTA below the filtered grid.
         * For "All" mode: links to the full procedures page.
         * For a specific category: links to the category landing page with
         * clear copy: "Explore All {Category} Procedures".
         */}
        <div className="mt-10 flex justify-center">
          {activeCategory === "All" ? (
            <Link
              href="/procedures"
              className="group inline-flex items-center gap-2 font-[var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider text-rose-gold transition-colors hover:text-rose-gold-dark"
            >
              Explore All Procedures
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <Link
              href={activeCategoryMeta?.href ?? "/procedures"}
              className="group inline-flex items-center gap-2 font-[var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider text-rose-gold transition-colors hover:text-rose-gold-dark"
            >
              Explore All {activeCategory} Procedures
              {totalInCategory && totalInCategory > MAX_VISIBLE && (
                <span className="text-muted-foreground">
                  ({totalInCategory} total)
                </span>
              )}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        {/* ── Service Category Grid ─────────────────────────────────── */}
        <div className="mt-24">
          <h3 className="mb-8 text-center font-[var(--font-cormorant)] text-2xl font-light text-charcoal">
            Explore All Our Services
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {allCategories.map((catName) => {
              const meta = categoryMeta[catName]
              const count = getProceduresByCategory(catName).length
              return (
                <Link
                  key={catName}
                  href={meta.href}
                  className="group relative flex items-end overflow-hidden p-6"
                  style={{ minHeight: 180 }}
                >
                  <Image
                    src={meta.image}
                    alt={`${catName} procedures`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-charcoal/50 transition-all group-hover:bg-charcoal/60" />
                  <div className="relative z-10">
                    <h4 className="font-[var(--font-cormorant)] text-2xl font-semibold text-cream">
                      {catName}
                    </h4>
                    <p className="font-[var(--font-montserrat)] text-xs text-cream/70">
                      {count} Procedures
                    </p>
                    <div className="mt-3 flex items-center gap-1 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-wider text-rose-gold-light transition-colors group-hover:text-rose-gold">
                      View All
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
 * PROCEDURE CARD — extracted so the grid and swipe layouts share
 * the same card implementation.
 * ───────────────────────────────────────────────────────────────────────────── */

interface ProcedureCardProps {
  name: string
  url: string
  category: ProcedureCategory
  image: string
}

function ProcedureCard({ name, url, category, image }: ProcedureCardProps) {
  return (
    <Link
      href={url}
      className="group flex h-full flex-col overflow-hidden border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-charcoal/0 transition-all group-hover:bg-charcoal/20" />
        <span className="absolute left-4 top-4 bg-rose-gold/90 px-3 py-1 font-[var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
          {category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 font-[var(--font-cormorant)] text-xl font-semibold text-charcoal">
          {name}
        </h3>
        <div className="mt-auto pt-4">
          <span className="inline-flex items-center gap-1 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-wider text-rose-gold transition-colors group-hover:text-rose-gold-dark">
            Learn More
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}

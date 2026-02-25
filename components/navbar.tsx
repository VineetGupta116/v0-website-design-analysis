"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { Menu, X, Phone, ChevronDown, ChevronRight, ArrowRight } from "lucide-react"
import {
  procedures,
  allCategories,
  categoryMeta,
  getProceduresByCategory,
  type ProcedureCategory,
} from "@/lib/procedures"

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Procedures", href: "/procedures", hasMegaMenu: true },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const [mobileProceduresOpen, setMobileProceduresOpen] = useState(false)
  const [mobileActiveCategory, setMobileActiveCategory] = useState<ProcedureCategory | null>(null)

  const megaMenuRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mega menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaMenuOpen(false)
        triggerRef.current?.focus()
      }
    }
    if (megaMenuOpen) {
      document.addEventListener("keydown", handleKeyDown)
    }
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [megaMenuOpen])

  const handleMouseEnter = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setMegaMenuOpen(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false)
    }, 200)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-card/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="font-[var(--font-cormorant)] text-2xl font-semibold tracking-wide text-charcoal">
              SWI Infinity
            </span>
            <span className="font-[var(--font-montserrat)] text-[10px] uppercase tracking-[0.25em] text-rose-gold">
              Aesthetic & Plastic Surgery
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigationItems.map((item) =>
            item.hasMegaMenu ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  ref={triggerRef}
                  className="flex items-center gap-1 font-[var(--font-montserrat)] text-sm font-medium uppercase tracking-wider text-charcoal transition-colors hover:text-rose-gold"
                  aria-expanded={megaMenuOpen}
                  aria-haspopup="true"
                  onClick={() => setMegaMenuOpen((prev) => !prev)}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-300 ${megaMenuOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="font-[var(--font-montserrat)] text-sm font-medium uppercase tracking-wider text-charcoal transition-colors hover:text-rose-gold"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+917017193675"
            className="flex items-center gap-2 font-[var(--font-montserrat)] text-sm text-charcoal-light transition-colors hover:text-rose-gold"
            aria-label="Call us"
          >
            <Phone className="h-4 w-4" />
          </a>
          <Link
            href="#contact"
            className="rounded-sm border border-rose-gold bg-rose-gold px-6 py-2.5 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:bg-rose-gold-dark"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-charcoal lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* ── Mega-Menu Dropdown (Desktop) ── */}
      <div
        ref={megaMenuRef}
        className={`absolute left-0 right-0 top-full hidden transition-all duration-300 lg:block ${
          megaMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="menu"
        aria-label="Procedures menu"
      >
        <div className="border-t border-border bg-card/98 shadow-xl backdrop-blur-lg">
          <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
            {/* Top label */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-rose-gold" />
                <span className="font-[var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.3em] text-rose-gold">
                  {procedures.length} Procedures across {allCategories.length} specialties
                </span>
              </div>
              <Link
                href="/procedures"
                className="group flex items-center gap-1.5 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-wider text-rose-gold transition-colors hover:text-rose-gold-dark"
                onClick={() => setMegaMenuOpen(false)}
              >
                View All Procedures
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Four-Column Grid */}
            <div className="grid grid-cols-4 gap-8">
              {allCategories.map((category) => {
                const meta = categoryMeta[category]
                const items = getProceduresByCategory(category)

                return (
                  <div key={category} role="none">
                    {/* Category Heading — links to category page */}
                    <Link
                      href={meta.href}
                      className="group mb-1 flex items-center gap-2"
                      role="menuitem"
                      onClick={() => setMegaMenuOpen(false)}
                    >
                      <h3 className="font-[var(--font-cormorant)] text-xl font-semibold text-charcoal transition-colors group-hover:text-rose-gold">
                        {category}
                      </h3>
                      <ArrowRight className="h-3.5 w-3.5 text-rose-gold opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </Link>
                    <p className="mb-4 font-[var(--font-montserrat)] text-[11px] text-muted-foreground">
                      {meta.description}
                    </p>
                    <div className="mb-3 h-px w-full bg-border" />

                    {/* Procedure links */}
                    <ul className="flex flex-col gap-0.5" role="menu" aria-label={`${category} procedures`}>
                      {items.map((proc) => (
                        <li key={proc.url} role="none">
                          <Link
                            href={proc.url}
                            role="menuitem"
                            className="block rounded-sm px-2 py-1.5 font-[var(--font-montserrat)] text-[13px] leading-snug text-charcoal-light transition-all hover:bg-cream-dark hover:text-rose-gold"
                            onClick={() => setMegaMenuOpen(false)}
                          >
                            {proc.name}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* "See all" link at bottom */}
                    <Link
                      href={meta.href}
                      className="mt-3 inline-flex items-center gap-1 font-[var(--font-montserrat)] text-[11px] font-semibold uppercase tracking-wider text-rose-gold transition-colors hover:text-rose-gold-dark"
                      onClick={() => setMegaMenuOpen(false)}
                    >
                      All {category} ({items.length})
                      <ChevronRight className="h-3 w-3" />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border bg-card/95 px-6 py-6 backdrop-blur-md">
          <div className="max-h-[65vh] overflow-y-auto">
            {navigationItems.map((item) => (
              <div key={item.label}>
                {item.hasMegaMenu ? (
                  <div>
                    {/* Procedures Toggle */}
                    <button
                      onClick={() => {
                        setMobileProceduresOpen(!mobileProceduresOpen)
                        setMobileActiveCategory(null)
                      }}
                      className="flex w-full items-center justify-between py-3 font-[var(--font-montserrat)] text-sm font-medium uppercase tracking-wider text-charcoal"
                      aria-expanded={mobileProceduresOpen}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${mobileProceduresOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Mobile Categories */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileProceduresOpen ? "max-h-[999px]" : "max-h-0"
                      }`}
                    >
                      {allCategories.map((category) => {
                        const meta = categoryMeta[category]
                        const items = getProceduresByCategory(category)
                        const isActive = mobileActiveCategory === category

                        return (
                          <div key={category} className="border-b border-border/50 last:border-b-0">
                            {/* Category row */}
                            <button
                              onClick={() =>
                                setMobileActiveCategory(isActive ? null : category)
                              }
                              className="flex w-full items-center justify-between py-3 pl-4"
                              aria-expanded={isActive}
                            >
                              <span className="flex items-center gap-2">
                                <span className="font-[var(--font-cormorant)] text-lg font-semibold text-charcoal">
                                  {category}
                                </span>
                                <span className="font-[var(--font-montserrat)] text-[10px] text-muted-foreground">
                                  {items.length} procedures
                                </span>
                              </span>
                              <ChevronDown
                                className={`h-3.5 w-3.5 text-rose-gold transition-transform duration-300 ${isActive ? "rotate-180" : ""}`}
                              />
                            </button>

                            {/* Procedure links */}
                            <div
                              className={`overflow-hidden transition-all duration-300 ${
                                isActive ? "max-h-[999px] pb-2" : "max-h-0"
                              }`}
                            >
                              <Link
                                href={meta.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-1 py-2 pl-8 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-wider text-rose-gold"
                              >
                                View All {category}
                                <ArrowRight className="h-3 w-3" />
                              </Link>
                              {items.map((proc) => (
                                <Link
                                  key={proc.url}
                                  href={proc.url}
                                  onClick={() => setIsOpen(false)}
                                  className="block py-1.5 pl-8 font-[var(--font-montserrat)] text-sm text-charcoal-light transition-colors hover:text-rose-gold"
                                >
                                  {proc.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 font-[var(--font-montserrat)] text-sm font-medium uppercase tracking-wider text-charcoal transition-colors hover:text-rose-gold"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-4 border-t border-border pt-4">
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full rounded-sm border border-rose-gold bg-rose-gold px-6 py-3 text-center font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-widest text-primary-foreground"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

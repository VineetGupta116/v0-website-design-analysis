"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, ChevronDown } from "lucide-react"

const navigationItems = [
  { label: "Home", href: "/" },
  {
    label: "Procedures",
    href: "#procedures",
    children: [
      { label: "Hair", href: "#procedures", count: "5 services" },
      { label: "Body", href: "#procedures", count: "12 services" },
      { label: "Face", href: "#procedures", count: "24 services" },
      { label: "Skin", href: "#procedures", count: "33 services" },
    ],
  },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [proceduresOpen, setProceduresOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
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
          {navigationItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.children ? (
                <button className="flex items-center gap-1 font-[var(--font-montserrat)] text-sm font-medium uppercase tracking-wider text-charcoal transition-colors hover:text-rose-gold">
                  {item.label}
                  <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="font-[var(--font-montserrat)] text-sm font-medium uppercase tracking-wider text-charcoal transition-colors hover:text-rose-gold"
                >
                  {item.label}
                </Link>
              )}
              {item.children && (
                <div className="invisible absolute left-0 top-full pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  <div className="w-56 rounded-lg border border-border bg-card p-3 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="flex items-center justify-between rounded-md px-4 py-3 transition-colors hover:bg-cream-dark"
                      >
                        <span className="font-[var(--font-montserrat)] text-sm font-medium text-charcoal">
                          {child.label}
                        </span>
                        <span className="font-[var(--font-montserrat)] text-xs text-muted-foreground">
                          {child.count}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+917017193675"
            className="flex items-center gap-2 font-[var(--font-montserrat)] text-sm text-charcoal-light transition-colors hover:text-rose-gold"
          >
            <Phone className="h-4 w-4" />
            <span className="sr-only">Call Us</span>
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

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border bg-card/95 px-6 py-6 backdrop-blur-md">
          {navigationItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => setProceduresOpen(!proceduresOpen)}
                    className="flex w-full items-center justify-between py-3 font-[var(--font-montserrat)] text-sm font-medium uppercase tracking-wider text-charcoal"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${proceduresOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      proceduresOpen ? "max-h-60" : "max-h-0"
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between py-2 pl-4 font-[var(--font-montserrat)] text-sm text-charcoal-light"
                      >
                        {child.label}
                        <span className="text-xs text-muted-foreground">{child.count}</span>
                      </Link>
                    ))}
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

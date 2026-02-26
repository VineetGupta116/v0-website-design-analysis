"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

type FormStatus = "idle" | "loading" | "success" | "error"

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

// Web3Forms API key from environment variable with fallback
const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "a41211fc-dfa9-48e9-bb66-d78cecf05732"

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [formStatus, setFormStatus] = useState<FormStatus>("idle")
  const [feedbackMessage, setFeedbackMessage] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (formStatus === "success" || formStatus === "error") {
      const timeoutId = window.setTimeout(() => {
        setFormStatus("idle")
        setFeedbackMessage("")
      }, 5000)

      return () => window.clearTimeout(timeoutId)
    }
  }, [formStatus])

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    // Strip common separators: spaces, hyphens, parentheses
    const cleaned = phone.replace(/[\s\-\(\)]/g, "")
    
    // Match: 10 digits starting with 6-9 OR +91 followed by 10 digits starting with 6-9
    const phoneRegex = /^(?:\+91)?[6-9]\d{9}$/
    
    return phoneRegex.test(cleaned)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number (e.g., 9876543210 or +91-98765-43210)"
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    } else if (formData.message.trim().length > 500) {
      newErrors.message = "Message must not exceed 500 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!validateForm()) {
      return
    }

    setFormStatus("loading")
    setFeedbackMessage("")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          from_name: "SWI Infinity Contact Form",
          subject: `New Consultation Request from ${formData.name}`,
        }),
      })

      if (!response.ok) {
        throw new Error(`Web3Forms API failed with status ${response.status}`)
      }

      const data = await response.json()

      if (data.success) {
        setFormStatus("success")
        setFeedbackMessage(
          "Thank you for your inquiry! We've received your message and will respond within one business day.",
        )
        // Clear form data on success
        setFormData({ name: "", email: "", phone: "", message: "" })
        setErrors({})
        formRef.current?.reset()
      } else {
        throw new Error("Web3Forms responded with success=false")
      }
    } catch (error) {
      setFormStatus("error")
      setFeedbackMessage(
        "We couldn't submit your inquiry right now. Please try again in a moment or contact us directly at +91 70171 93675.",
      )
      console.error("Form submission error:", error)
      // Keep form data so user can retry without re-typing
    }
  }

  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-cream-dark pt-28">
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <p className="mb-4 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-rose-gold">
              Contact SWI Infinity
            </p>
            <h1 className="font-[var(--font-cormorant)] text-4xl font-light text-charcoal md:text-5xl">
              Book a consultation
            </h1>
            <p className="mt-4 max-w-3xl font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light md:text-base">
              Share your concerns and goals with our team. We usually respond
              within one business day.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:px-8">
            {/* Left Column - Clinic Information */}
            <div className="space-y-6">
              <article className="rounded-3xl border border-border bg-card p-6 lg:p-8">
                <h2 className="font-[var(--font-cormorant)] text-3xl font-light text-charcoal">
                  Clinic Information
                </h2>
                <div className="mt-6 space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin
                      className="mt-1 h-5 w-5 flex-shrink-0 text-rose-gold"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-[var(--font-montserrat)] text-sm font-semibold text-charcoal">
                        Address:
                      </p>
                      <p className="font-[var(--font-montserrat)] text-sm text-charcoal-light">
                        MG Road, DLF Phase 2, Gurugram, Haryana 122002, India
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <Phone
                      className="mt-1 h-5 w-5 flex-shrink-0 text-rose-gold"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-[var(--font-montserrat)] text-sm font-semibold text-charcoal">
                        Phone:
                      </p>
                      <a
                        href="tel:+917017193675"
                        className="font-[var(--font-montserrat)] text-sm text-rose-gold transition-colors hover:text-rose-gold-dark"
                      >
                        +91 70171 93675
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail
                      className="mt-1 h-5 w-5 flex-shrink-0 text-rose-gold"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-[var(--font-montserrat)] text-sm font-semibold text-charcoal">
                        Email:
                      </p>
                      <a
                        href="mailto:info@swiinfinity.com"
                        className="font-[var(--font-montserrat)] text-sm text-rose-gold transition-colors hover:text-rose-gold-dark"
                      >
                        info@swiinfinity.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Buttons */}
                <div className="mt-6 space-y-3 border-t border-border pt-6">
                  <a
                    href="https://wa.me/917017193675"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#20BA5A]"
                  >
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    WhatsApp Us
                  </a>

                  <a
                    href="tel:+917017193675"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-rose-gold px-6 py-3 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-rose-gold-dark"
                  >
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    Call Now
                  </a>
                </div>

                {/* Social Media */}
                <div className="mt-6 border-t border-border pt-6">
                  <p className="mb-3 font-[var(--font-montserrat)] text-sm font-semibold text-charcoal">
                    Follow Us:
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/dr_sraesthetics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-gold transition-colors hover:text-rose-gold-dark"
                      aria-label="Follow us on Instagram"
                    >
                      <Instagram className="h-6 w-6" aria-hidden="true" />
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61586916916705"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-gold transition-colors hover:text-rose-gold-dark"
                      aria-label="Follow us on Facebook"
                    >
                      <Facebook className="h-6 w-6" aria-hidden="true" />
                    </a>
                    <a
                      href="https://www.youtube.com/@drsraesthetics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-gold transition-colors hover:text-rose-gold-dark"
                      aria-label="Subscribe to our YouTube channel"
                    >
                      <Youtube className="h-6 w-6" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>

              <article className="overflow-hidden rounded-3xl border border-border bg-card">
                <iframe
                  title="SWI Infinity Clinic Location"
                  src="https://www.google.com/maps?q=Gurugram%20Haryana&z=13&output=embed"
                  className="h-72 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </article>
            </div>

            {/* Right Column - Contact Form */}
            <article className="rounded-3xl border border-border bg-card p-6 lg:p-8">
              <h2 className="font-[var(--font-cormorant)] text-3xl font-light text-charcoal">
                Send us a message
              </h2>

              {/* Success Message */}
              {formStatus === "success" && (
                <div className="mt-6 flex items-start gap-3 rounded-md border border-green-200 bg-green-50 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="mt-0.5 h-5 w-5 shrink-0 text-green-600"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m5 13 4 4L19 7"
                    />
                  </svg>
                  <p className="font-[var(--font-montserrat)] text-sm text-green-800">
                    {feedbackMessage}
                  </p>
                </div>
              )}

              {/* Error Message */}
              {formStatus === "error" && (
                <div className="mt-6 flex items-start gap-3 rounded-md border border-red-200 bg-red-50 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="mt-0.5 h-5 w-5 shrink-0 text-red-600"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16h.01"
                    />
                  </svg>
                  <p className="font-[var(--font-montserrat)] text-sm text-red-800">
                    {feedbackMessage}
                  </p>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-4">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block font-[var(--font-montserrat)] text-xs uppercase tracking-wide text-charcoal-light"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${
                      errors.name ? "border-red-500" : "border-border"
                    } bg-white px-4 py-2.5 font-[var(--font-montserrat)] text-sm text-charcoal outline-none transition focus:border-rose-gold`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 font-[var(--font-montserrat)] text-xs text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block font-[var(--font-montserrat)] text-xs uppercase tracking-wide text-charcoal-light"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${
                      errors.email ? "border-red-500" : "border-border"
                    } bg-white px-4 py-2.5 font-[var(--font-montserrat)] text-sm text-charcoal outline-none transition focus:border-rose-gold`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 font-[var(--font-montserrat)] text-xs text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block font-[var(--font-montserrat)] text-xs uppercase tracking-wide text-charcoal-light"
                  >
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${
                      errors.phone ? "border-red-500" : "border-border"
                    } bg-white px-4 py-2.5 font-[var(--font-montserrat)] text-sm text-charcoal outline-none transition focus:border-rose-gold`}
                    placeholder="+91 XXXXX XXXXX"
                  />
                  {errors.phone && (
                    <p className="mt-1 font-[var(--font-montserrat)] text-xs text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block font-[var(--font-montserrat)] text-xs uppercase tracking-wide text-charcoal-light"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={500}
                    className={`w-full resize-none rounded-md border ${
                      errors.message ? "border-red-500" : "border-border"
                    } bg-white px-4 py-2.5 font-[var(--font-montserrat)] text-sm text-charcoal outline-none transition focus:border-rose-gold`}
                    placeholder="Tell us about your concerns and goals..."
                  />
                  <div className="mt-1 flex items-center justify-between">
                    {errors.message ? (
                      <p className="font-[var(--font-montserrat)] text-xs text-red-500">
                        {errors.message}
                      </p>
                    ) : (
                      <p className="font-[var(--font-montserrat)] text-xs text-charcoal-light">
                        {formData.message.length}/500 characters
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === "loading"}
                  className="inline-flex items-center rounded-full bg-rose-gold px-6 py-3 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-rose-gold-dark disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {formStatus === "loading" ? (
                    <>
                      <svg
                        className="mr-2 h-4 w-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4Zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647Z"
                        />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </button>
              </form>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

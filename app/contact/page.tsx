import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

const formEndpoint =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "https://formspree.io/f/xovwqjzp"

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle")
  const [feedbackMessage, setFeedbackMessage] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (formStatus !== "success") return

    const timeoutId = window.setTimeout(() => {
      setFormStatus("idle")
      setFeedbackMessage("")
    }, 5000)

    return () => window.clearTimeout(timeoutId)
  }, [formStatus])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormStatus("loading")
    setFeedbackMessage("")

    const formData = new FormData(event.currentTarget)

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (!response.ok) {
        setFormStatus("error")
        setFeedbackMessage(
          "We couldn't submit your inquiry right now. Please try again in a moment.",
        )
        return
      }

      setFormStatus("success")
      setFeedbackMessage(
        "Thank you! Your inquiry has been submitted successfully. We'll get back to you soon.",
      )
      formRef.current?.reset()
    } catch {
      setFormStatus("error")
      setFeedbackMessage(
        "Network error. Please check your connection and try submitting the form again.",
      )
    }
  }

  return (
    <>
      <Navbar />
      <main className="bg-cream-dark pt-28">
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <p className="mb-4 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-rose-gold">
              Contact SWI Infinity
            </p>
            <h1 className="font-[var(--font-cormorant)] text-4xl font-light text-charcoal md:text-5xl">
              Book a consultation
            </h1>
            <p className="mt-4 max-w-3xl font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light md:text-base">
              Share your concerns and goals with our team. We usually respond within one business day.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:px-8">
            <div className="space-y-6">
              <article className="rounded-3xl border border-border bg-card p-6 lg:p-8">
                <h2 className="font-[var(--font-cormorant)] text-3xl font-light text-charcoal">
                  Clinic Information
                </h2>
                <div className="mt-4 space-y-3 font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light md:text-base">
                  <p>
                    <span className="font-semibold text-charcoal">Address:</span> MG Road, DLF Phase 2,
                    Gurugram, Haryana 122002, India
                  </p>
                  <p>
                    <span className="font-semibold text-charcoal">Phone:</span>{" "}
                    <a className="text-rose-gold hover:text-rose-gold-dark" href="tel:+917017193675">
                      +91 70171 93675
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-charcoal">Email:</span>{" "}
                    <a
                      className="text-rose-gold hover:text-rose-gold-dark"
                      href="mailto:info@swiinfinity.com"
                    >
                      info@swiinfinity.com
                    </a>
                  </p>
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

            <article className="rounded-3xl border border-border bg-card p-6 lg:p-8">
              <h2 className="font-[var(--font-cormorant)] text-3xl font-light text-charcoal">
                Send us a message
              </h2>
              <form action={formEndpoint} method="POST" className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block font-[var(--font-montserrat)] text-xs uppercase tracking-wide text-charcoal-light">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-md border border-border bg-white px-4 py-2.5 font-[var(--font-montserrat)] text-sm text-charcoal outline-none transition focus:border-rose-gold"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block font-[var(--font-montserrat)] text-xs uppercase tracking-wide text-charcoal-light">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-md border border-border bg-white px-4 py-2.5 font-[var(--font-montserrat)] text-sm text-charcoal outline-none transition focus:border-rose-gold"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block font-[var(--font-montserrat)] text-xs uppercase tracking-wide text-charcoal-light">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    className="w-full rounded-md border border-border bg-white px-4 py-2.5 font-[var(--font-montserrat)] text-sm text-charcoal outline-none transition focus:border-rose-gold"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block font-[var(--font-montserrat)] text-xs uppercase tracking-wide text-charcoal-light">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-md border border-border bg-white px-4 py-2.5 font-[var(--font-montserrat)] text-sm text-charcoal outline-none transition focus:border-rose-gold"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center rounded-full bg-rose-gold px-6 py-3 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-rose-gold-dark"
                >
                  Submit Inquiry
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

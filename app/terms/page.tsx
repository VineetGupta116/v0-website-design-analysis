import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <h1 className="font-[var(--font-cormorant)] text-4xl font-light text-charcoal">Terms of Service</h1>
        <div className="mt-6 space-y-4 font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light">
          <p>
            By using SWI Infinity websites and communication channels, you agree to these terms.
            The information on this site is for general educational purposes and does not replace a
            professional medical consultation.
          </p>
          <p>
            Treatment outcomes vary by individual anatomy, health history, and adherence to post-care
            instructions. Final clinical decisions are made during in-person consultation.
          </p>
          <p>
            All content, branding, and media on this site are the property of SWI Infinity and may not
            be reproduced without written permission.
          </p>
          <p>
            We may update these terms from time to time. Continued use of our services indicates
            acceptance of the revised terms.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}

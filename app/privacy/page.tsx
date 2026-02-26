import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <h1 className="font-[var(--font-cormorant)] text-4xl font-light text-charcoal">Privacy Policy</h1>
        <div className="mt-6 space-y-4 font-[var(--font-montserrat)] text-sm leading-relaxed text-charcoal-light">
          <p>
            SWI Infinity respects your privacy and is committed to protecting your personal information.
            This policy explains what information we collect, how we use it, and your rights.
          </p>
          <p>
            We collect contact details and medical preference information that you voluntarily provide
            through forms, calls, or consultation requests. We use this information to schedule
            appointments, provide clinical guidance, and improve patient communication.
          </p>
          <p>
            We do not sell personal information. We may share limited data with secure third-party
            providers (such as hosting, analytics, or appointment software) only when necessary to
            operate our services.
          </p>
          <p>
            If you would like to access, correct, or delete your personal data, please contact us at
            info@swiinfinity.com.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}

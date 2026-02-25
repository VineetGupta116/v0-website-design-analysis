import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

        <p className="mb-4">
          Get in touch with SWI Infinity for consultations and appointments.
        </p>

        <p>
          Phone: +91-XXXXXXXXXX <br />
          Email: info@swiinfinity.com
        </p>
      </main>

      <Footer />
    </>
  );
}
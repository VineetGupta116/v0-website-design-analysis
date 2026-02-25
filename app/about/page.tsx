import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">About SWI Infinity</h1>

        <p className="mb-4">
          SWI Infinity is a leading clinic specializing in advanced aesthetic
          and wellness treatments.
        </p>

        <p>
          Our mission is to deliver safe, ethical, and results-driven care.
        </p>
      </main>

      <Footer />
    </>
  );
}
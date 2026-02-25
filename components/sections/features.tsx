import { ShieldCheck, Award, HeartHandshake } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "Operating exclusively in accredited surgical facilities with board-certified anesthesiologists to ensure your absolute safety.",
  },
  {
    icon: Award,
    title: "Elite Expertise",
    description:
      "Led by Dr. Swikriti Raniwala, recognized globally for contributions to reconstructive techniques and aesthetic innovation.",
  },
  {
    icon: HeartHandshake,
    title: "Concierge Care",
    description:
      "From your first consultation to your final follow-up, our team provides 24/7 support and personalized attention.",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group text-center"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-rose-gold/30 transition-all duration-300 group-hover:border-rose-gold group-hover:bg-rose-gold/10">
                  <Icon className="h-7 w-7 text-rose-gold" />
                </div>
                <h3 className="mb-4 font-[var(--font-cormorant)] text-2xl font-semibold text-cream">
                  {feature.title}
                </h3>
                <p className="font-[var(--font-montserrat)] text-sm leading-relaxed text-cream/60">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

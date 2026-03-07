import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact SWI Infinity to schedule a consultation for hair, body, face, and skin procedures.",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}

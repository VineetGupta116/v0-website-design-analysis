import type { Metadata } from "next"
import { CategoryPage } from "@/components/category-page"

export const metadata: Metadata = {
  title: "Hair Procedures | SWI Infinity",
  description:
    "Explore advanced hair restoration procedures including transplant, PRP, and scalp treatments at SWI Infinity.",
}

// Force static generation - prevents client-side routing fallback
export const dynamic = 'force-static'
export const dynamicParams = false

export default function HairPage() {
  return (
    <CategoryPage
      category="hair"
      title="Hair"
      intro="Discover surgical and non-surgical hair restoration options tailored for natural, long-term results."
    />
  )
}

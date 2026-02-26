import type { Metadata } from "next"
import { CategoryPage } from "@/components/category-page"

export const metadata: Metadata = {
  title: "Skin Treatments | SWI Infinity",
  description:
    "Explore advanced skin treatments including lasers, injectables, and rejuvenation therapies at SWI Infinity.",
}

// Force static generation - prevents client-side routing fallback
export const dynamic = 'force-static'
export const dynamicParams = false

export default function SkinPage() {
  return (
    <CategoryPage
      category="skin"
      title="Skin"
      intro="Discover advanced skin treatments for clarity, texture, and long-term skin health and vitality."
    />
  )
}

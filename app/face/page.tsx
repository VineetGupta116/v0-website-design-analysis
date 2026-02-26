import type { Metadata } from "next"
import { CategoryPage } from "@/components/category-page"

export const metadata: Metadata = {
  title: "Facial Procedures | SWI Infinity",
  description:
    "Explore advanced facial surgery and rejuvenation procedures for natural, harmonious results at SWI Infinity.",
}

// Force static generation - prevents client-side routing fallback
export const dynamic = 'force-static'
export const dynamicParams = false

export default function FacePage() {
  return (
    <CategoryPage
      category="face"
      title="Face"
      intro="Discover surgical and non-surgical facial procedures designed to enhance your natural beauty and restore youthful vitality."
    />
  )
}

import type { Metadata } from "next"
import { CategoryPage } from "@/components/category-page"

export const metadata: Metadata = {
  title: "Body Contouring Procedures | SWI Infinity",
  description:
    "Explore advanced body contouring, sculpting, and augmentation procedures at SWI Infinity for your desired body shape.",
}

// Force static generation - prevents client-side routing fallback
export const dynamic = 'force-static'
export const dynamicParams = false

export default function BodyPage() {
  return (
    <CategoryPage
      category="body"
      title="Body"
      intro="Discover body contouring procedures designed to sculpt, refine, and enhance your natural proportions."
    />
  )
}

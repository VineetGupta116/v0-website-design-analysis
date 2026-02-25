import type { Metadata } from "next"
import { CategoryPage } from "@/components/category-page"

export const metadata: Metadata = {
  title: "Skin Procedures | SWI Infinity",
  description:
    "Explore skin procedures including injectables, laser therapies, and medical dermatology treatments at SWI Infinity.",
}

export default function SkinPage() {
  return (
    <CategoryPage
      category="skin"
      title="Skin"
      intro="From injectables to laser and dermatology care, discover skin-first treatment pathways for healthier-looking skin."
    />
  )
}

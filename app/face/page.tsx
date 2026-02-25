import type { Metadata } from "next"
import { CategoryPage } from "@/components/category-page"

export const metadata: Metadata = {
  title: "Face Procedures | SWI Infinity",
  description:
    "Browse facial procedures from rhinoplasty to rejuvenation treatments designed to improve symmetry and confidence.",
}

export default function FacePage() {
  return (
    <CategoryPage
      category="face"
      title="Face"
      intro="Review facial surgery and enhancement procedures focused on balance, definition, and natural aesthetics."
    />
  )
}

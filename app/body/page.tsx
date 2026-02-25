import type { Metadata } from "next"
import { CategoryPage } from "@/components/category-page"

export const metadata: Metadata = {
  title: "Body Procedures | SWI Infinity",
  description:
    "Discover body contouring and reconstructive procedures including liposuction, lifts, and augmentation options.",
}

export default function BodyPage() {
  return (
    <CategoryPage
      category="body"
      title="Body"
      intro="Explore body contouring procedures designed to improve proportion, shape, and confidence with personalized planning."
    />
  )
}

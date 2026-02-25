export type ProcedureCategory = "Hair" | "Body" | "Face" | "Skin"

export interface Procedure {
  name: string
  url: string
  category: ProcedureCategory
}

export const procedures: Procedure[] = [
  // Hair
  { name: "Hair Transplant (FUE)", url: "/hair/hair-transplant-fue", category: "Hair" },
  { name: "Hair Transplant (FUT)", url: "/hair/hair-transplant-fut", category: "Hair" },
  { name: "PRP Therapy for Hair", url: "/hair/prp-therapy", category: "Hair" },
  { name: "Scalp Micropigmentation", url: "/hair/scalp-micropigmentation", category: "Hair" },
  { name: "Laser Hair Restoration", url: "/hair/laser-hair-restoration", category: "Hair" },

  // Body
  { name: "Liposuction (HD / 360)", url: "/body/liposuction", category: "Body" },
  { name: "Gynecomastia Surgery", url: "/body/gynecomastia", category: "Body" },
  { name: "Tummy Tuck", url: "/body/tummy-tuck", category: "Body" },
  { name: "Mommy Makeover", url: "/body/mommy-makeover", category: "Body" },
  { name: "Arm Lift (Brachioplasty)", url: "/body/arm-lift", category: "Body" },
  { name: "Thigh Lift", url: "/body/thigh-lift", category: "Body" },
  { name: "Body Lift", url: "/body/body-lift", category: "Body" },
  { name: "Buttock Augmentation", url: "/body/buttock-augmentation", category: "Body" },
  { name: "Calf Implants", url: "/body/calf-implants", category: "Body" },
  { name: "Fat Transfer", url: "/body/fat-transfer", category: "Body" },
  { name: "Breast Augmentation", url: "/body/breast-augmentation", category: "Body" },
  { name: "Breast Reduction", url: "/body/breast-reduction", category: "Body" },

  // Face
  { name: "Rhinoplasty", url: "/face/rhinoplasty", category: "Face" },
  { name: "Blepharoplasty", url: "/face/blepharoplasty", category: "Face" },
  { name: "Facelift", url: "/face/facelift", category: "Face" },
  { name: "Neck Lift", url: "/face/neck-lift", category: "Face" },
  { name: "Brow Lift", url: "/face/brow-lift", category: "Face" },
  { name: "Otoplasty", url: "/face/otoplasty", category: "Face" },
  { name: "Chin Augmentation", url: "/face/chin-augmentation", category: "Face" },
  { name: "Cheek Augmentation", url: "/face/cheek-augmentation", category: "Face" },
  { name: "Lip Augmentation", url: "/face/lip-augmentation", category: "Face" },
  { name: "Jaw Contouring", url: "/face/jaw-contouring", category: "Face" },
  { name: "Buccal Fat Removal", url: "/face/buccal-fat-removal", category: "Face" },
  { name: "Dimple Creation", url: "/face/dimple-creation", category: "Face" },
  { name: "Hair Line Lowering", url: "/face/hair-line-lowering", category: "Face" },
  { name: "Facial Implants", url: "/face/facial-implants", category: "Face" },
  { name: "Scar Revision", url: "/face/scar-revision", category: "Face" },
  { name: "Cleft Lip Repair", url: "/face/cleft-lip-repair", category: "Face" },
  { name: "Facial Fracture Repair", url: "/face/facial-fracture-repair", category: "Face" },
  { name: "TMJ Surgery", url: "/face/tmj-surgery", category: "Face" },
  { name: "Fat Grafting to Face", url: "/face/fat-grafting", category: "Face" },
  { name: "Thread Lift", url: "/face/thread-lift", category: "Face" },
  { name: "Under Eye Treatment", url: "/face/under-eye-treatment", category: "Face" },
  { name: "Facial Feminization", url: "/face/facial-feminization", category: "Face" },
  { name: "Mole / Cyst Removal", url: "/face/mole-cyst-removal", category: "Face" },
  { name: "Ear Lobe Repair", url: "/face/ear-lobe-repair", category: "Face" },

  // Skin
  { name: "Botox", url: "/skin/botox", category: "Skin" },
  { name: "Dermal Fillers", url: "/skin/dermal-fillers", category: "Skin" },
  { name: "Chemical Peels", url: "/skin/chemical-peels", category: "Skin" },
  { name: "Microdermabrasion", url: "/skin/microdermabrasion", category: "Skin" },
  { name: "Microneedling", url: "/skin/microneedling", category: "Skin" },
  { name: "Laser Skin Resurfacing", url: "/skin/laser-resurfacing", category: "Skin" },
  { name: "Laser Hair Removal", url: "/skin/laser-hair-removal", category: "Skin" },
  { name: "Laser Tattoo Removal", url: "/skin/laser-tattoo-removal", category: "Skin" },
  { name: "IPL Photofacial", url: "/skin/ipl-photofacial", category: "Skin" },
  { name: "PRP Facial (Vampire Facial)", url: "/skin/prp-facial", category: "Skin" },
  { name: "Hydrafacial", url: "/skin/hydrafacial", category: "Skin" },
  { name: "Carbon Laser Peel", url: "/skin/carbon-laser-peel", category: "Skin" },
  { name: "Skin Tightening (HIFU)", url: "/skin/skin-tightening-hifu", category: "Skin" },
  { name: "Meso Therapy", url: "/skin/meso-therapy", category: "Skin" },
  { name: "Anti-Aging Treatment", url: "/skin/anti-aging", category: "Skin" },
  { name: "Pigmentation Treatment", url: "/skin/pigmentation", category: "Skin" },
  { name: "Acne / Scar Treatment", url: "/skin/acne-scar", category: "Skin" },
  { name: "Vitiligo Treatment", url: "/skin/vitiligo", category: "Skin" },
  { name: "Melasma Treatment", url: "/skin/melasma", category: "Skin" },
  { name: "Stretch Mark Treatment", url: "/skin/stretch-marks", category: "Skin" },
  { name: "Wart Removal", url: "/skin/wart-removal", category: "Skin" },
  { name: "Dark Circle Treatment", url: "/skin/dark-circles", category: "Skin" },
  { name: "Skin Tag Removal", url: "/skin/skin-tag-removal", category: "Skin" },
  { name: "Keloid Treatment", url: "/skin/keloid", category: "Skin" },
  { name: "Rosacea Treatment", url: "/skin/rosacea", category: "Skin" },
  { name: "Hyperhidrosis (Sweat Treatment)", url: "/skin/hyperhidrosis", category: "Skin" },
  { name: "IV Glutathione Therapy", url: "/skin/iv-glutathione", category: "Skin" },
  { name: "Skin Whitening Treatment", url: "/skin/skin-whitening", category: "Skin" },
  { name: "Dermatosis Treatment", url: "/skin/dermatosis", category: "Skin" },
  { name: "Eczema Treatment", url: "/skin/eczema", category: "Skin" },
  { name: "Psoriasis Treatment", url: "/skin/psoriasis", category: "Skin" },
  { name: "Fungal Infection Treatment", url: "/skin/fungal-infection", category: "Skin" },
  { name: "Nail Treatment", url: "/skin/nail-treatment", category: "Skin" },
]

export const categoryMeta: Record<
  ProcedureCategory,
  { href: string; description: string; image: string }
> = {
  Hair: {
    href: "/hair",
    description: "Transplants, PRP & restoration",
    image: "/images/procedure-hair.jpg",
  },
  Body: {
    href: "/body",
    description: "Contouring, lifts & augmentation",
    image: "/images/procedure-body.jpg",
  },
  Face: {
    href: "/face",
    description: "Surgical & non-surgical facial procedures",
    image: "/images/procedure-face.jpg",
  },
  Skin: {
    href: "/skin",
    description: "Laser, injectables & skin health",
    image: "/images/procedure-skin.jpg",
  },
}

export function getProceduresByCategory(category: ProcedureCategory): Procedure[] {
  return procedures.filter((p) => p.category === category)
}

export const allCategories: ProcedureCategory[] = ["Hair", "Body", "Face", "Skin"]

/**
 * groupedProcedures — pre-computed, module-level cache of procedures grouped
 * by category.  Computed once at import time so that every component that needs
 * the grouped data shares the same reference (no per-render filtering).
 *
 * This matters in the mega-dropdown because it renders ~74 links across 4
 * columns.  Re-filtering on every hover/state change is wasteful; a stable
 * reference also lets React.memo / useMemo consumers skip diffing.
 */
export const groupedProcedures: Record<ProcedureCategory, Procedure[]> =
  allCategories.reduce(
    (acc, cat) => {
      acc[cat] = procedures.filter((p) => p.category === cat)
      return acc
    },
    {} as Record<ProcedureCategory, Procedure[]>,
  )

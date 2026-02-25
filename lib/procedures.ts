export type ProcedureCategory = "Hair" | "Face" | "Skin" | "Body"
export type ProcedureDataCategory = "hair" | "face" | "skin" | "body"

export interface Procedure {
  name: string
  slug: string
  category: ProcedureDataCategory
  shortDescription: string
  longDescription: string
  imagePath: string
  seoTitle: string
  seoDescription: string
  // Legacy field used by current UI routing.
  url: string
}

export type ProcedureNavItem = Omit<Procedure, "category"> & {
  category: ProcedureCategory
}

const categoryImageMap: Record<ProcedureDataCategory, string> = {
  hair: "/images/procedure-hair.jpg",
  face: "/images/procedure-face.jpg",
  skin: "/images/procedure-skin.jpg",
  body: "/images/procedure-body.jpg",
}

const createProcedure = (
  name: string,
  category: ProcedureDataCategory,
  slug: string,
  shortDescription: string,
): Procedure => ({
  name,
  slug,
  category,
  shortDescription,
  longDescription: `Detailed information for ${name} will be added soon.`,
  imagePath: categoryImageMap[category],
  seoTitle: `${name} | SWI Infinity`,
  seoDescription: `${shortDescription} Learn more about ${name} at SWI Infinity.`,
  url: `/${category}/${slug}`,
})

export const procedures: Procedure[] = [
  createProcedure("Hair Transplant (FUE)", "hair", "hair-transplant-fue", "Follicular unit extraction for natural hairline restoration."),
  createProcedure("Hair Transplant (FUT)", "hair", "hair-transplant-fut", "Strip method hair transplantation for higher graft yield."),
  createProcedure("PRP Therapy for Hair", "hair", "prp-therapy", "Platelet-rich plasma treatment to support hair regrowth."),
  createProcedure("Scalp Micropigmentation", "hair", "scalp-micropigmentation", "Non-surgical scalp pigmentation to improve hair density appearance."),
  createProcedure("Laser Hair Restoration", "hair", "laser-hair-restoration", "Low-level laser treatment for improved scalp and hair health."),
  createProcedure("Liposuction (HD / 360)", "body", "liposuction", "Advanced fat contouring for a sculpted body profile."),
  createProcedure("Gynecomastia Surgery", "body", "gynecomastia", "Male chest reduction to restore a flatter contour."),
  createProcedure("Tummy Tuck", "body", "tummy-tuck", "Abdominoplasty to tighten skin and core contours."),
  createProcedure("Mommy Makeover", "body", "mommy-makeover", "Combined procedures to restore post-pregnancy body shape."),
  createProcedure("Arm Lift (Brachioplasty)", "body", "arm-lift", "Upper arm reshaping to address loose skin and tissue."),
  createProcedure("Thigh Lift", "body", "thigh-lift", "Thigh contouring for firmer and smoother leg profiles."),
  createProcedure("Body Lift", "body", "body-lift", "Comprehensive lower body tightening and contour enhancement."),
  createProcedure("Buttock Augmentation", "body", "buttock-augmentation", "Gluteal enhancement to improve shape and volume."),
  createProcedure("Calf Implants", "body", "calf-implants", "Implant-based calf definition and volume enhancement."),
  createProcedure("Fat Transfer", "body", "fat-transfer", "Autologous fat grafting to restore or enhance body volume."),
  createProcedure("Breast Augmentation", "body", "breast-augmentation", "Breast volume enhancement for balanced body proportions."),
  createProcedure("Breast Reduction", "body", "breast-reduction", "Breast reduction surgery for comfort and proportionality."),
  createProcedure("Rhinoplasty", "face", "rhinoplasty", "Nose reshaping to improve facial harmony and breathing goals."),
  createProcedure("Blepharoplasty", "face", "blepharoplasty", "Eyelid surgery for refreshed, youthful eye contours."),
  createProcedure("Facelift", "face", "facelift", "Facial rejuvenation to reduce signs of aging and sagging."),
  createProcedure("Neck Lift", "face", "neck-lift", "Neck contour improvement for a sharper jawline profile."),
  createProcedure("Brow Lift", "face", "brow-lift", "Forehead and brow elevation for a more alert appearance."),
  createProcedure("Otoplasty", "face", "otoplasty", "Ear reshaping surgery to improve ear symmetry and position."),
  createProcedure("Chin Augmentation", "face", "chin-augmentation", "Chin enhancement for improved profile balance."),
  createProcedure("Cheek Augmentation", "face", "cheek-augmentation", "Midface volume enhancement for defined cheek contours."),
  createProcedure("Lip Augmentation", "face", "lip-augmentation", "Lip volume and shape enhancement for natural fullness."),
  createProcedure("Jaw Contouring", "face", "jaw-contouring", "Surgical contouring for a more defined jaw structure."),
  createProcedure("Buccal Fat Removal", "face", "buccal-fat-removal", "Targeted cheek slimming to accentuate facial definition."),
  createProcedure("Dimple Creation", "face", "dimple-creation", "Minor cosmetic procedure to create natural-looking dimples."),
  createProcedure("Hair Line Lowering", "face", "hair-line-lowering", "Forehead reduction to lower and refine hairline position."),
  createProcedure("Facial Implants", "face", "facial-implants", "Implant procedures to augment facial structure and balance."),
  createProcedure("Scar Revision", "face", "scar-revision", "Surgical scar refinement for improved skin appearance."),
  createProcedure("Cleft Lip Repair", "face", "cleft-lip-repair", "Reconstructive surgery for functional and aesthetic cleft correction."),
  createProcedure("Facial Fracture Repair", "face", "facial-fracture-repair", "Trauma reconstruction to restore facial anatomy and function."),
  createProcedure("TMJ Surgery", "face", "tmj-surgery", "Jaw joint surgery to address pain and functional limitations."),
  createProcedure("Fat Grafting to Face", "face", "fat-grafting", "Autologous fat transfer to restore facial volume naturally."),
  createProcedure("Thread Lift", "face", "thread-lift", "Minimally invasive lift using absorbable support threads."),
  createProcedure("Under Eye Treatment", "face", "under-eye-treatment", "Targeted correction for hollows, puffiness, and tired look."),
  createProcedure("Facial Feminization", "face", "facial-feminization", "Comprehensive procedures to soften and feminize facial features."),
  createProcedure("Mole / Cyst Removal", "face", "mole-cyst-removal", "Minor surgical removal of benign skin lesions."),
  createProcedure("Ear Lobe Repair", "face", "ear-lobe-repair", "Repair of torn or stretched earlobes for improved appearance."),
  createProcedure("Botox", "skin", "botox", "Neuromodulator treatment to smooth dynamic facial lines."),
  createProcedure("Dermal Fillers", "skin", "dermal-fillers", "Injectable fillers for volume restoration and contouring."),
  createProcedure("Chemical Peels", "skin", "chemical-peels", "Exfoliating treatments to improve tone, texture, and glow."),
  createProcedure("Microdermabrasion", "skin", "microdermabrasion", "Mechanical exfoliation for smoother and brighter skin."),
  createProcedure("Microneedling", "skin", "microneedling", "Collagen induction therapy for scar and texture improvement."),
  createProcedure("Laser Skin Resurfacing", "skin", "laser-resurfacing", "Laser-based renewal for fine lines, scars, and texture."),
  createProcedure("Laser Hair Removal", "skin", "laser-hair-removal", "Long-term reduction of unwanted facial and body hair."),
  createProcedure("Laser Tattoo Removal", "skin", "laser-tattoo-removal", "Laser treatment to fade and remove unwanted tattoos."),
  createProcedure("IPL Photofacial", "skin", "ipl-photofacial", "Light-based therapy for pigmentation and redness concerns."),
  createProcedure("PRP Facial (Vampire Facial)", "skin", "prp-facial", "Regenerative facial treatment to improve skin quality."),
  createProcedure("Hydrafacial", "skin", "hydrafacial", "Hydrating multi-step facial for instant refresh and clarity."),
  createProcedure("Carbon Laser Peel", "skin", "carbon-laser-peel", "Laser peel targeting oiliness, pores, and uneven tone."),
  createProcedure("Skin Tightening (HIFU)", "skin", "skin-tightening-hifu", "Ultrasound tightening for lifting and collagen stimulation."),
  createProcedure("Meso Therapy", "skin", "meso-therapy", "Microinjections to nourish and rejuvenate skin."),
  createProcedure("Anti-Aging Treatment", "skin", "anti-aging", "Combined protocols to address wrinkles and skin laxity."),
  createProcedure("Pigmentation Treatment", "skin", "pigmentation", "Targeted correction for uneven pigmentation and dark spots."),
  createProcedure("Acne / Scar Treatment", "skin", "acne-scar", "Personalized treatments for active acne and scar reduction."),
  createProcedure("Vitiligo Treatment", "skin", "vitiligo", "Medical and procedural options for pigment management."),
  createProcedure("Melasma Treatment", "skin", "melasma", "Specialized care for hormonally driven pigmentation patches."),
  createProcedure("Stretch Mark Treatment", "skin", "stretch-marks", "Texture-improving therapy for stretch mark visibility reduction."),
  createProcedure("Wart Removal", "skin", "wart-removal", "Safe lesion removal using minimally invasive techniques."),
  createProcedure("Dark Circle Treatment", "skin", "dark-circles", "Under-eye brightening and rejuvenation protocols."),
  createProcedure("Skin Tag Removal", "skin", "skin-tag-removal", "Quick outpatient removal of benign skin tags."),
  createProcedure("Keloid Treatment", "skin", "keloid", "Scar modulation therapies for raised keloid tissue."),
  createProcedure("Rosacea Treatment", "skin", "rosacea", "Redness and inflammation management for rosacea-prone skin."),
  createProcedure("Hyperhidrosis (Sweat Treatment)", "skin", "hyperhidrosis", "Treatment for excessive sweating in targeted areas."),
  createProcedure("IV Glutathione Therapy", "skin", "iv-glutathione", "Intravenous antioxidant therapy for skin wellness goals."),
  createProcedure("Skin Whitening Treatment", "skin", "skin-whitening", "Tone-evening and brightening treatment protocols."),
  createProcedure("Dermatosis Treatment", "skin", "dermatosis", "Clinical management for chronic inflammatory skin conditions."),
  createProcedure("Eczema Treatment", "skin", "eczema", "Targeted therapy for itching, dryness, and flare control."),
  createProcedure("Psoriasis Treatment", "skin", "psoriasis", "Multimodal management of scaling and plaque symptoms."),
  createProcedure("Fungal Infection Treatment", "skin", "fungal-infection", "Medical treatment for persistent fungal skin infections."),
  createProcedure("Nail Treatment", "skin", "nail-treatment", "Specialized care for nail disorders and appearance concerns."),
]

const legacyToDataCategory: Record<ProcedureCategory, ProcedureDataCategory> = {
  Hair: "hair",
  Face: "face",
  Skin: "skin",
  Body: "body",
}

const dataToLegacyCategory: Record<ProcedureDataCategory, ProcedureCategory> = {
  hair: "Hair",
  face: "Face",
  skin: "Skin",
  body: "Body",
}

const toDataCategory = (
  category: ProcedureDataCategory | ProcedureCategory,
): ProcedureDataCategory =>
  category in dataToLegacyCategory
    ? (category as ProcedureDataCategory)
    : legacyToDataCategory[category as ProcedureCategory]

const toNavItem = (procedure: Procedure): ProcedureNavItem => ({
  ...procedure,
  category: dataToLegacyCategory[procedure.category],
})

export const allCategories: ProcedureCategory[] = ["Hair", "Body", "Face", "Skin"]

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

export function getProceduresByCategory(
  category: ProcedureDataCategory | ProcedureCategory,
): Procedure[] {
  const normalizedCategory = toDataCategory(category)
  return procedures.filter((procedure) => procedure.category === normalizedCategory)
}

export function getProcedureBySlug(slug: string): Procedure | undefined {
  return procedures.find((procedure) => procedure.slug === slug)
}

export const groupedProcedures: Record<ProcedureCategory, ProcedureNavItem[]> =
  allCategories.reduce(
    (acc, category) => {
      acc[category] = getProceduresByCategory(category).map(toNavItem)
      return acc
    },
    {} as Record<ProcedureCategory, ProcedureNavItem[]>,
  )

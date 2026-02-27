# SWI Infinity Complete Image Asset Audit

This audit covers all 19 listed assets and includes a supplementary per-procedure image plan. Note: repository currently contains **75** procedures in `lib/procedures.ts`, so supplementary section includes 75 rows for completeness.


## IMAGE 1: hero-1.jpg

### 1. IDENTITY
- **Current Filename:** hero-1.jpg
- **Recommended Filename:** home-hero-swi-infinity-gurugram-slide-1.webp
- **File Path in Repo:** `public/images/hero-1.jpg`
- **Status:** KEEP & OPTIMISE

### 2. TECHNICAL SPECIFICATIONS
- **Required Format:** WebP primary + JPG fallback (PNG/SVG retained for favicon/logo utility assets)
- **Required Dimensions (px):** 1920 × 1080
- **Aspect Ratio:** 16:9
- **File Size Target:** <=220KB
- **Quality Setting:** WebP 78-82, JPG 72-78
- **DPI/PPI:** 72 PPI (web master), optional 150 PPI source archive
- **Color Space:** sRGB IEC61966-2.1
- **Responsive Breakpoint Sizes Needed:** 640w, 750w, 828w, 1080w, 1200w, 1920w
- **Priority Loading:** YES
- **Next.js Image Props Required:** `src`, `alt`, `width`, `height`, `sizes`, `quality`, `priority, fetchPriority="high", placeholder="blur"`, `className`

### 3. CONTENT DESCRIPTION
- **Subject Matter:** Premium medical aesthetics visual
- **Scene/Setting:** Studio/clinical real environment
- **Mood & Tone:** Luxury, calm, clinical precision, high trust
- **People Required:** Yes; South Asian representation, 25-45 years, professional appearance
- **Medical Accuracy Required:** No
- **Props/Elements:** Consultation tablet, neutral interiors, subtle rose-gold accents, clean equipment
- **Negative Constraints:** No blood, no open surgery, no sensational before/after splits, no unrealistic AI skin texture, no clutter
- **Composition Notes:** Maintain safe text overlay zone in top-left/top-center; keep subject on rule-of-thirds line
- **Brand Alignment:** Visual language should mirror high-end London/Paris aesthetic clinics while retaining Indian patient relatability

### 4. SEO & METADATA
- **Recommended Alt Text:** Luxury plastic surgery consultation suite at SWI Infinity clinic in Gurugram
- **Recommended Image Title:** SWI Infinity – hero-1.jpg
- **Recommended Image Caption:** Premium evidence-led aesthetic care at SWI Infinity, Gurugram
- **Filename SEO Value:** Descriptive keywords include service intent + brand + location, improving image discovery and topical relevance
- **Schema.org ImageObject Fields:**
  - name: SWI Infinity hero-1.jpg
  - description: Brand-consistent medical aesthetics image for SWI Infinity website
  - contentUrl: https://www.swiinfinity.com/images/hero-1.jpg
  - author: SWI Infinity Creative Team / Licensed Photographer
  - copyrightHolder: SWI Infinity
  - license: Commercial Website License
  - acquireLicensePage: https://www.swiinfinity.com/terms/
  - encodingFormat: image/jpeg
  - width: 1920
  - height: 1080

### 5. PROCUREMENT — HOW TO GET THIS IMAGE

#### Method A: REAL PHOTOGRAPHY (Preferred for hero/doctor/clinic images)
- **Priority:** HIGHEST
- **Why needed:** Authentic clinic visuals produce highest trust and consultation conversion in medical aesthetics
- **Shot list instructions:** Capture horizontal hero (16:9), medium portrait, detail close-up; soft key + bounce fill; retain negative space for headlines
- **Equipment recommendation:** Full-frame mirrorless, 35mm/50mm prime, 85mm for portrait, CPL filter, 2 softboxes
- **Post-processing notes:** True-to-skin color grade, reduce highlights, maintain natural skin texture, avoid over-smoothing

#### Method B: STOCK PHOTOGRAPHY
- **Priority:** MEDIUM
- **Recommended platforms:** Shutterstock (medical variety), Getty (premium realism), Adobe Stock (legal clarity), iStock (budget)
- **Search queries to use:**
  - Query 1: luxury aesthetic clinic consultation india
  - Query 2: south asian female plastic surgeon clinic portrait
  - Query 3: dermatology treatment room premium interior gurugram
  - Query 4: cosmetic surgery consultation natural light india
  - Query 5: high end medical spa waiting area neutral tones
- **License type required:** RF commercial with model/property releases
- **Filters to apply:** Horizontal, >4000px, authentic skin texture, South Asian models, medical setting, copy space
- **Top 3 platforms to search first:** Shutterstock, Getty Images, Adobe Stock
- **What to avoid in results:** Western-only demographics, heavy glamour makeup, visible surgical gore, generic spa clichés

#### Method C: AI IMAGE GENERATION
- **Priority:** MEDIUM
- **Best tools for this image:** Midjourney, DALL-E 3, Adobe Firefly
- **Recommended tool (top pick):** Midjourney v6.1
- **Full Midjourney Prompt:**
`ultra-realistic premium Indian medical aesthetics clinic scene, rose-gold and cream palette, calm luxury mood, South Asian subjects, natural skin texture, editorial medical photography, no logos, no text, no blood, 16:9 --v 6.1 --style raw --ar 16:9 --s 150`

text
- **Full DALL-E 3 Prompt:**
`Create a photorealistic website hero image for a premium plastic surgery and aesthetic dermatology clinic in Gurugram, India. Use rose-gold, cream and charcoal accents. Include South Asian patient representation, medical-professional environment, calm and trustworthy tone, clean composition with copy space, no gore, no visible brand logos, no text overlays.`

text
- **Style modifiers to use:** cinematic daylight, soft contrast, editorial healthcare realism, premium interior design
- **Negative prompts (if using SD/Flux):** deformed hands, extra fingers, waxy skin, blood, exposed surgery, watermark, logo, text
- **Post-generation editing needed:** Yes — retouch anatomy artifacts, enforce brand color grade, export responsive renditions
- **Commercial usage considerations:** Verify platform indemnity and do not depict real doctor identity via AI for clinical claims

#### Method D: EXISTING REAL PHOTOS FROM CLINIC
- **Can the clinic provide this?** yes
- **What to request from Dr. Swikriti/clinic team:** RAW files, location/model consent, portrait + wide shots, uncluttered treatment rooms
- **Minimum quality threshold:** 24MP+, CR3/NEF/ARW RAW, ISO < 800, sharp eye focus, white balance card reference

### 6. WHERE IT'S USED IN CODE
- **Component/Page file(s):** Refer to image usage map and related route components (`app/about/page.tsx`, `components/category-page.tsx`, `app/procedures/[slug]/page.tsx`, `app/layout.tsx`)
- **JSX location:** Hero/section `<Image>` blocks and metadata icon declarations
- **How it's rendered:** Next.js `<Image>` for photos, metadata icon links for favicon assets
- **Current Next.js Image props in use:** Mostly `src`, `alt`, `width`, `height`, `className`, selective `priority`
- **Props that MUST be updated when replacing:** Add `sizes`, harmonize `quality`, set `placeholder`, `fetchPriority` for above-fold
- **Impact if wrong image used:** UX trust drop, weaker local SEO image relevance, potential compliance risk for misrepresentative medical visuals

### 7. REPLACEMENT PRIORITY & EFFORT
- **Business Priority:** CRITICAL
- **SEO Priority:** CRITICAL
- **Effort to Replace:** MEDIUM
- **Estimated Time:** 1-2 days
- **Blocks Launch:** YES
- **Recommended Sprint:** Day 1-2
- **Dependencies:** Enable image optimization workflow, add per-procedure asset mapping, update metadata manifest

### 8. ADDITIONAL NOTES
- **Why current placeholder is problematic:** Generic or reused visuals reduce differentiation and credibility in a high-trust medical purchase journey
- **Competitor reference sites for visual inspiration:** Cadogan Clinic London, 111 Harley St, The Aesthetics Doctor, Kaya Skin Clinic India
- **Any legal/ethical considerations:** Before/after or identifiable patient imagery requires explicit consent and retention records
- **Notes specific to Indian medical aesthetics market:** Prioritize South Asian skin tones, realistic outcomes, family decision-maker trust cues, and Hindi-English discoverability


## IMAGE 2: hero-2.jpg

### 1. IDENTITY
- **Current Filename:** hero-2.jpg
- **Recommended Filename:** home-hero-aesthetic-consultation-gurugram-slide-2.webp
- **File Path in Repo:** `public/images/hero-2.jpg`
- **Status:** KEEP & OPTIMISE

### 2. TECHNICAL SPECIFICATIONS
- **Required Format:** WebP primary + JPG fallback (PNG/SVG retained for favicon/logo utility assets)
- **Required Dimensions (px):** 1920 × 1080
- **Aspect Ratio:** 16:9
- **File Size Target:** <=220KB
- **Quality Setting:** WebP 78-82, JPG 72-78
- **DPI/PPI:** 72 PPI (web master), optional 150 PPI source archive
- **Color Space:** sRGB IEC61966-2.1
- **Responsive Breakpoint Sizes Needed:** 640w, 750w, 828w, 1080w, 1200w, 1920w
- **Priority Loading:** YES
- **Next.js Image Props Required:** `src`, `alt`, `width`, `height`, `sizes`, `quality`, `priority, fetchPriority="high", placeholder="blur"`, `className`

### 3. CONTENT DESCRIPTION
- **Subject Matter:** Premium medical aesthetics visual
- **Scene/Setting:** Studio/clinical real environment
- **Mood & Tone:** Luxury, calm, clinical precision, high trust
- **People Required:** Yes; South Asian representation, 25-45 years, professional appearance
- **Medical Accuracy Required:** No
- **Props/Elements:** Consultation tablet, neutral interiors, subtle rose-gold accents, clean equipment
- **Negative Constraints:** No blood, no open surgery, no sensational before/after splits, no unrealistic AI skin texture, no clutter
- **Composition Notes:** Maintain safe text overlay zone in top-left/top-center; keep subject on rule-of-thirds line
- **Brand Alignment:** Visual language should mirror high-end London/Paris aesthetic clinics while retaining Indian patient relatability

### 4. SEO & METADATA
- **Recommended Alt Text:** Aesthetic treatment planning scene at SWI Infinity, Gurugram Haryana
- **Recommended Image Title:** SWI Infinity – hero-2.jpg
- **Recommended Image Caption:** Premium evidence-led aesthetic care at SWI Infinity, Gurugram
- **Filename SEO Value:** Descriptive keywords include service intent + brand + location, improving image discovery and topical relevance
- **Schema.org ImageObject Fields:**
  - name: SWI Infinity hero-2.jpg
  - description: Brand-consistent medical aesthetics image for SWI Infinity website
  - contentUrl: https://www.swiinfinity.com/images/hero-2.jpg
  - author: SWI Infinity Creative Team / Licensed Photographer
  - copyrightHolder: SWI Infinity
  - license: Commercial Website License
  - acquireLicensePage: https://www.swiinfinity.com/terms/
  - encodingFormat: image/jpeg
  - width: 1920
  - height: 1080

### 5. PROCUREMENT — HOW TO GET THIS IMAGE

#### Method A: REAL PHOTOGRAPHY (Preferred for hero/doctor/clinic images)
- **Priority:** HIGHEST
- **Why needed:** Authentic clinic visuals produce highest trust and consultation conversion in medical aesthetics
- **Shot list instructions:** Capture horizontal hero (16:9), medium portrait, detail close-up; soft key + bounce fill; retain negative space for headlines
- **Equipment recommendation:** Full-frame mirrorless, 35mm/50mm prime, 85mm for portrait, CPL filter, 2 softboxes
- **Post-processing notes:** True-to-skin color grade, reduce highlights, maintain natural skin texture, avoid over-smoothing

#### Method B: STOCK PHOTOGRAPHY
- **Priority:** MEDIUM
- **Recommended platforms:** Shutterstock (medical variety), Getty (premium realism), Adobe Stock (legal clarity), iStock (budget)
- **Search queries to use:**
  - Query 1: luxury aesthetic clinic consultation india
  - Query 2: south asian female plastic surgeon clinic portrait
  - Query 3: dermatology treatment room premium interior gurugram
  - Query 4: cosmetic surgery consultation natural light india
  - Query 5: high end medical spa waiting area neutral tones
- **License type required:** RF commercial with model/property releases
- **Filters to apply:** Horizontal, >4000px, authentic skin texture, South Asian models, medical setting, copy space
- **Top 3 platforms to search first:** Shutterstock, Getty Images, Adobe Stock
- **What to avoid in results:** Western-only demographics, heavy glamour makeup, visible surgical gore, generic spa clichés

#### Method C: AI IMAGE GENERATION
- **Priority:** MEDIUM
- **Best tools for this image:** Midjourney, DALL-E 3, Adobe Firefly
- **Recommended tool (top pick):** Midjourney v6.1
- **Full Midjourney Prompt:**
`ultra-realistic premium Indian medical aesthetics clinic scene, rose-gold and cream palette, calm luxury mood, South Asian subjects, natural skin texture, editorial medical photography, no logos, no text, no blood, 16:9 --v 6.1 --style raw --ar 16:9 --s 150`

text
- **Full DALL-E 3 Prompt:**
`Create a photorealistic website hero image for a premium plastic surgery and aesthetic dermatology clinic in Gurugram, India. Use rose-gold, cream and charcoal accents. Include South Asian patient representation, medical-professional environment, calm and trustworthy tone, clean composition with copy space, no gore, no visible brand logos, no text overlays.`

text
- **Style modifiers to use:** cinematic daylight, soft contrast, editorial healthcare realism, premium interior design
- **Negative prompts (if using SD/Flux):** deformed hands, extra fingers, waxy skin, blood, exposed surgery, watermark, logo, text
- **Post-generation editing needed:** Yes — retouch anatomy artifacts, enforce brand color grade, export responsive renditions
- **Commercial usage considerations:** Verify platform indemnity and do not depict real doctor identity via AI for clinical claims

#### Method D: EXISTING REAL PHOTOS FROM CLINIC
- **Can the clinic provide this?** yes
- **What to request from Dr. Swikriti/clinic team:** RAW files, location/model consent, portrait + wide shots, uncluttered treatment rooms
- **Minimum quality threshold:** 24MP+, CR3/NEF/ARW RAW, ISO < 800, sharp eye focus, white balance card reference

### 6. WHERE IT'S USED IN CODE
- **Component/Page file(s):** Refer to image usage map and related route components (`app/about/page.tsx`, `components/category-page.tsx`, `app/procedures/[slug]/page.tsx`, `app/layout.tsx`)
- **JSX location:** Hero/section `<Image>` blocks and metadata icon declarations
- **How it's rendered:** Next.js `<Image>` for photos, metadata icon links for favicon assets
- **Current Next.js Image props in use:** Mostly `src`, `alt`, `width`, `height`, `className`, selective `priority`
- **Props that MUST be updated when replacing:** Add `sizes`, harmonize `quality`, set `placeholder`, `fetchPriority` for above-fold
- **Impact if wrong image used:** UX trust drop, weaker local SEO image relevance, potential compliance risk for misrepresentative medical visuals

### 7. REPLACEMENT PRIORITY & EFFORT
- **Business Priority:** CRITICAL
- **SEO Priority:** CRITICAL
- **Effort to Replace:** MEDIUM
- **Estimated Time:** 1-2 days
- **Blocks Launch:** YES
- **Recommended Sprint:** Day 1-2
- **Dependencies:** Enable image optimization workflow, add per-procedure asset mapping, update metadata manifest

### 8. ADDITIONAL NOTES
- **Why current placeholder is problematic:** Generic or reused visuals reduce differentiation and credibility in a high-trust medical purchase journey
- **Competitor reference sites for visual inspiration:** Cadogan Clinic London, 111 Harley St, The Aesthetics Doctor, Kaya Skin Clinic India
- **Any legal/ethical considerations:** Before/after or identifiable patient imagery requires explicit consent and retention records
- **Notes specific to Indian medical aesthetics market:** Prioritize South Asian skin tones, realistic outcomes, family decision-maker trust cues, and Hindi-English discoverability


## IMAGE 3: about-hero.jpg

### 1. IDENTITY
- **Current Filename:** about-hero.jpg
- **Recommended Filename:** about-swi-infinity-clinic-gurugram-hero.webp
- **File Path in Repo:** `public/images/about-hero.jpg`
- **Status:** REPLACE SOON

### 2. TECHNICAL SPECIFICATIONS
- **Required Format:** WebP primary + JPG fallback (PNG/SVG retained for favicon/logo utility assets)
- **Required Dimensions (px):** 1920 × 1080
- **Aspect Ratio:** 16:9
- **File Size Target:** <=220KB
- **Quality Setting:** WebP 78-82, JPG 72-78
- **DPI/PPI:** 72 PPI (web master), optional 150 PPI source archive
- **Color Space:** sRGB IEC61966-2.1
- **Responsive Breakpoint Sizes Needed:** 640w, 750w, 828w, 1080w, 1200w, 1920w
- **Priority Loading:** NO
- **Next.js Image Props Required:** `src`, `alt`, `width`, `height`, `sizes`, `quality`, `loading="lazy", decoding="async"`, `className`

### 3. CONTENT DESCRIPTION
- **Subject Matter:** Premium medical aesthetics visual
- **Scene/Setting:** Studio/clinical real environment
- **Mood & Tone:** Luxury, calm, clinical precision, high trust
- **People Required:** Yes; South Asian representation, 25-45 years, professional appearance
- **Medical Accuracy Required:** No
- **Props/Elements:** Consultation tablet, neutral interiors, subtle rose-gold accents, clean equipment
- **Negative Constraints:** No blood, no open surgery, no sensational before/after splits, no unrealistic AI skin texture, no clutter
- **Composition Notes:** Maintain safe text overlay zone in top-left/top-center; keep subject on rule-of-thirds line
- **Brand Alignment:** Visual language should mirror high-end London/Paris aesthetic clinics while retaining Indian patient relatability

### 4. SEO & METADATA
- **Recommended Alt Text:** SWI Infinity about page hero showing premium Gurugram aesthetic clinic ambience
- **Recommended Image Title:** SWI Infinity – about-hero.jpg
- **Recommended Image Caption:** Premium evidence-led aesthetic care at SWI Infinity, Gurugram
- **Filename SEO Value:** Descriptive keywords include service intent + brand + location, improving image discovery and topical relevance
- **Schema.org ImageObject Fields:**
  - name: SWI Infinity about-hero.jpg
  - description: Brand-consistent medical aesthetics image for SWI Infinity website
  - contentUrl: https://www.swiinfinity.com/images/about-hero.jpg
  - author: SWI Infinity Creative Team / Licensed Photographer
  - copyrightHolder: SWI Infinity
  - license: Commercial Website License
  - acquireLicensePage: https://www.swiinfinity.com/terms/
  - encodingFormat: image/jpeg
  - width: 1920
  - height: 1080

### 5. PROCUREMENT — HOW TO GET THIS IMAGE

#### Method A: REAL PHOTOGRAPHY (Preferred for hero/doctor/clinic images)
- **Priority:** HIGH
- **Why needed:** Authentic clinic visuals produce highest trust and consultation conversion in medical aesthetics
- **Shot list instructions:** Capture horizontal hero (16:9), medium portrait, detail close-up; soft key + bounce fill; retain negative space for headlines
- **Equipment recommendation:** Full-frame mirrorless, 35mm/50mm prime, 85mm for portrait, CPL filter, 2 softboxes
- **Post-processing notes:** True-to-skin color grade, reduce highlights, maintain natural skin texture, avoid over-smoothing

#### Method B: STOCK PHOTOGRAPHY
- **Priority:** MEDIUM
- **Recommended platforms:** Shutterstock (medical variety), Getty (premium realism), Adobe Stock (legal clarity), iStock (budget)
- **Search queries to use:**
  - Query 1: luxury aesthetic clinic consultation india
  - Query 2: south asian female plastic surgeon clinic portrait
  - Query 3: dermatology treatment room premium interior gurugram
  - Query 4: cosmetic surgery consultation natural light india
  - Query 5: high end medical spa waiting area neutral tones
- **License type required:** RF commercial with model/property releases
- **Filters to apply:** Horizontal, >4000px, authentic skin texture, South Asian models, medical setting, copy space
- **Top 3 platforms to search first:** Shutterstock, Getty Images, Adobe Stock
- **What to avoid in results:** Western-only demographics, heavy glamour makeup, visible surgical gore, generic spa clichés

#### Method C: AI IMAGE GENERATION
- **Priority:** MEDIUM
- **Best tools for this image:** Midjourney, DALL-E 3, Adobe Firefly
- **Recommended tool (top pick):** Midjourney v6.1
- **Full Midjourney Prompt:**
`ultra-realistic premium Indian medical aesthetics clinic scene, rose-gold and cream palette, calm luxury mood, South Asian subjects, natural skin texture, editorial medical photography, no logos, no text, no blood, 16:9 --v 6.1 --style raw --ar 16:9 --s 150`

text
- **Full DALL-E 3 Prompt:**
`Create a photorealistic website hero image for a premium plastic surgery and aesthetic dermatology clinic in Gurugram, India. Use rose-gold, cream and charcoal accents. Include South Asian patient representation, medical-professional environment, calm and trustworthy tone, clean composition with copy space, no gore, no visible brand logos, no text overlays.`

text
- **Style modifiers to use:** cinematic daylight, soft contrast, editorial healthcare realism, premium interior design
- **Negative prompts (if using SD/Flux):** deformed hands, extra fingers, waxy skin, blood, exposed surgery, watermark, logo, text
- **Post-generation editing needed:** Yes — retouch anatomy artifacts, enforce brand color grade, export responsive renditions
- **Commercial usage considerations:** Verify platform indemnity and do not depict real doctor identity via AI for clinical claims

#### Method D: EXISTING REAL PHOTOS FROM CLINIC
- **Can the clinic provide this?** yes
- **What to request from Dr. Swikriti/clinic team:** RAW files, location/model consent, portrait + wide shots, uncluttered treatment rooms
- **Minimum quality threshold:** 24MP+, CR3/NEF/ARW RAW, ISO < 800, sharp eye focus, white balance card reference

### 6. WHERE IT'S USED IN CODE
- **Component/Page file(s):** Refer to image usage map and related route components (`app/about/page.tsx`, `components/category-page.tsx`, `app/procedures/[slug]/page.tsx`, `app/layout.tsx`)
- **JSX location:** Hero/section `<Image>` blocks and metadata icon declarations
- **How it's rendered:** Next.js `<Image>` for photos, metadata icon links for favicon assets
- **Current Next.js Image props in use:** Mostly `src`, `alt`, `width`, `height`, `className`, selective `priority`
- **Props that MUST be updated when replacing:** Add `sizes`, harmonize `quality`, set `placeholder`, `fetchPriority` for above-fold
- **Impact if wrong image used:** UX trust drop, weaker local SEO image relevance, potential compliance risk for misrepresentative medical visuals

### 7. REPLACEMENT PRIORITY & EFFORT
- **Business Priority:** HIGH
- **SEO Priority:** HIGH
- **Effort to Replace:** MEDIUM
- **Estimated Time:** 2-3 days
- **Blocks Launch:** NO
- **Recommended Sprint:** Week 2
- **Dependencies:** Enable image optimization workflow, add per-procedure asset mapping, update metadata manifest

### 8. ADDITIONAL NOTES
- **Why current placeholder is problematic:** Generic or reused visuals reduce differentiation and credibility in a high-trust medical purchase journey
- **Competitor reference sites for visual inspiration:** Cadogan Clinic London, 111 Harley St, The Aesthetics Doctor, Kaya Skin Clinic India
- **Any legal/ethical considerations:** Before/after or identifiable patient imagery requires explicit consent and retention records
- **Notes specific to Indian medical aesthetics market:** Prioritize South Asian skin tones, realistic outcomes, family decision-maker trust cues, and Hindi-English discoverability


## IMAGE 4: about-clinic.jpg

### 1. IDENTITY
- **Current Filename:** about-clinic.jpg
- **Recommended Filename:** swi-infinity-clinic-interior-gurugram.webp
- **File Path in Repo:** `public/images/about-clinic.jpg`
- **Status:** REPLACE SOON

### 2. TECHNICAL SPECIFICATIONS
- **Required Format:** WebP primary + JPG fallback (PNG/SVG retained for favicon/logo utility assets)
- **Required Dimensions (px):** 1600 × 1200
- **Aspect Ratio:** 4:3
- **File Size Target:** <=220KB
- **Quality Setting:** WebP 78-82, JPG 72-78
- **DPI/PPI:** 72 PPI (web master), optional 150 PPI source archive
- **Color Space:** sRGB IEC61966-2.1
- **Responsive Breakpoint Sizes Needed:** 640w, 750w, 828w, 1080w, 1200w, 1920w
- **Priority Loading:** NO
- **Next.js Image Props Required:** `src`, `alt`, `width`, `height`, `sizes`, `quality`, `loading="lazy", decoding="async"`, `className`

### 3. CONTENT DESCRIPTION
- **Subject Matter:** Premium medical aesthetics visual
- **Scene/Setting:** Studio/clinical real environment
- **Mood & Tone:** Luxury, calm, clinical precision, high trust
- **People Required:** Yes; South Asian representation, 25-45 years, professional appearance
- **Medical Accuracy Required:** No
- **Props/Elements:** Consultation tablet, neutral interiors, subtle rose-gold accents, clean equipment
- **Negative Constraints:** No blood, no open surgery, no sensational before/after splits, no unrealistic AI skin texture, no clutter
- **Composition Notes:** Maintain safe text overlay zone in top-left/top-center; keep subject on rule-of-thirds line
- **Brand Alignment:** Visual language should mirror high-end London/Paris aesthetic clinics while retaining Indian patient relatability

### 4. SEO & METADATA
- **Recommended Alt Text:** Interior view of SWI Infinity cosmetic clinic in Gurugram with luxury decor
- **Recommended Image Title:** SWI Infinity – about-clinic.jpg
- **Recommended Image Caption:** Premium evidence-led aesthetic care at SWI Infinity, Gurugram
- **Filename SEO Value:** Descriptive keywords include service intent + brand + location, improving image discovery and topical relevance
- **Schema.org ImageObject Fields:**
  - name: SWI Infinity about-clinic.jpg
  - description: Brand-consistent medical aesthetics image for SWI Infinity website
  - contentUrl: https://www.swiinfinity.com/images/about-clinic.jpg
  - author: SWI Infinity Creative Team / Licensed Photographer
  - copyrightHolder: SWI Infinity
  - license: Commercial Website License
  - acquireLicensePage: https://www.swiinfinity.com/terms/
  - encodingFormat: image/jpeg
  - width: 1600
  - height: 1200

### 5. PROCUREMENT — HOW TO GET THIS IMAGE

#### Method A: REAL PHOTOGRAPHY (Preferred for hero/doctor/clinic images)
- **Priority:** HIGH
- **Why needed:** Authentic clinic visuals produce highest trust and consultation conversion in medical aesthetics
- **Shot list instructions:** Capture horizontal hero (16:9), medium portrait, detail close-up; soft key + bounce fill; retain negative space for headlines
- **Equipment recommendation:** Full-frame mirrorless, 35mm/50mm prime, 85mm for portrait, CPL filter, 2 softboxes
- **Post-processing notes:** True-to-skin color grade, reduce highlights, maintain natural skin texture, avoid over-smoothing

#### Method B: STOCK PHOTOGRAPHY
- **Priority:** MEDIUM
- **Recommended platforms:** Shutterstock (medical variety), Getty (premium realism), Adobe Stock (legal clarity), iStock (budget)
- **Search queries to use:**
  - Query 1: luxury aesthetic clinic consultation india
  - Query 2: south asian female plastic surgeon clinic portrait
  - Query 3: dermatology treatment room premium interior gurugram
  - Query 4: cosmetic surgery consultation natural light india
  - Query 5: high end medical spa waiting area neutral tones
- **License type required:** RF commercial with model/property releases
- **Filters to apply:** Horizontal, >4000px, authentic skin texture, South Asian models, medical setting, copy space
- **Top 3 platforms to search first:** Shutterstock, Getty Images, Adobe Stock
- **What to avoid in results:** Western-only demographics, heavy glamour makeup, visible surgical gore, generic spa clichés

#### Method C: AI IMAGE GENERATION
- **Priority:** MEDIUM
- **Best tools for this image:** Midjourney, DALL-E 3, Adobe Firefly
- **Recommended tool (top pick):** Midjourney v6.1
- **Full Midjourney Prompt:**
`ultra-realistic premium Indian medical aesthetics clinic scene, rose-gold and cream palette, calm luxury mood, South Asian subjects, natural skin texture, editorial medical photography, no logos, no text, no blood, 16:9 --v 6.1 --style raw --ar 16:9 --s 150`

text
- **Full DALL-E 3 Prompt:**
`Create a photorealistic website hero image for a premium plastic surgery and aesthetic dermatology clinic in Gurugram, India. Use rose-gold, cream and charcoal accents. Include South Asian patient representation, medical-professional environment, calm and trustworthy tone, clean composition with copy space, no gore, no visible brand logos, no text overlays.`

text
- **Style modifiers to use:** cinematic daylight, soft contrast, editorial healthcare realism, premium interior design
- **Negative prompts (if using SD/Flux):** deformed hands, extra fingers, waxy skin, blood, exposed surgery, watermark, logo, text
- **Post-generation editing needed:** Yes — retouch anatomy artifacts, enforce brand color grade, export responsive renditions
- **Commercial usage considerations:** Verify platform indemnity and do not depict real doctor identity via AI for clinical claims

#### Method D: EXISTING REAL PHOTOS FROM CLINIC
- **Can the clinic provide this?** yes
- **What to request from Dr. Swikriti/clinic team:** RAW files, location/model consent, portrait + wide shots, uncluttered treatment rooms
- **Minimum quality threshold:** 24MP+, CR3/NEF/ARW RAW, ISO < 800, sharp eye focus, white balance card reference

### 6. WHERE IT'S USED IN CODE
- **Component/Page file(s):** Refer to image usage map and related route components (`app/about/page.tsx`, `components/category-page.tsx`, `app/procedures/[slug]/page.tsx`, `app/layout.tsx`)
- **JSX location:** Hero/section `<Image>` blocks and metadata icon declarations
- **How it's rendered:** Next.js `<Image>` for photos, metadata icon links for favicon assets
- **Current Next.js Image props in use:** Mostly `src`, `alt`, `width`, `height`, `className`, selective `priority`
- **Props that MUST be updated when replacing:** Add `sizes`, harmonize `quality`, set `placeholder`, `fetchPriority` for above-fold
- **Impact if wrong image used:** UX trust drop, weaker local SEO image relevance, potential compliance risk for misrepresentative medical visuals

### 7. REPLACEMENT PRIORITY & EFFORT
- **Business Priority:** MEDIUM
- **SEO Priority:** MEDIUM
- **Effort to Replace:** MEDIUM
- **Estimated Time:** 2-3 days
- **Blocks Launch:** NO
- **Recommended Sprint:** Week 2
- **Dependencies:** Enable image optimization workflow, add per-procedure asset mapping, update metadata manifest

### 8. ADDITIONAL NOTES
- **Why current placeholder is problematic:** Generic or reused visuals reduce differentiation and credibility in a high-trust medical purchase journey
- **Competitor reference sites for visual inspiration:** Cadogan Clinic London, 111 Harley St, The Aesthetics Doctor, Kaya Skin Clinic India
- **Any legal/ethical considerations:** Before/after or identifiable patient imagery requires explicit consent and retention records
- **Notes specific to Indian medical aesthetics market:** Prioritize South Asian skin tones, realistic outcomes, family decision-maker trust cues, and Hindi-English discoverability


## IMAGE 5: contact-hero.jpg

### 1. IDENTITY
- **Current Filename:** contact-hero.jpg
- **Recommended Filename:** contact-swi-infinity-clinic-gurugram-hero.webp
- **File Path in Repo:** `public/images/contact-hero.jpg`
- **Status:** REPLACE SOON

### 2. TECHNICAL SPECIFICATIONS
- **Required Format:** WebP primary + JPG fallback (PNG/SVG retained for favicon/logo utility assets)
- **Required Dimensions (px):** 1920 × 1080
- **Aspect Ratio:** 16:9
- **File Size Target:** <=220KB
- **Quality Setting:** WebP 78-82, JPG 72-78
- **DPI/PPI:** 72 PPI (web master), optional 150 PPI source archive
- **Color Space:** sRGB IEC61966-2.1
- **Responsive Breakpoint Sizes Needed:** 640w, 750w, 828w, 1080w, 1200w, 1920w
- **Priority Loading:** NO
- **Next.js Image Props Required:** `src`, `alt`, `width`, `height`, `sizes`, `quality`, `loading="lazy", decoding="async"`, `className`

### 3. CONTENT DESCRIPTION
- **Subject Matter:** Premium medical aesthetics visual
- **Scene/Setting:** Studio/clinical real environment
- **Mood & Tone:** Luxury, calm, clinical precision, high trust
- **People Required:** Yes; South Asian representation, 25-45 years, professional appearance
- **Medical Accuracy Required:** No
- **Props/Elements:** Consultation tablet, neutral interiors, subtle rose-gold accents, clean equipment
- **Negative Constraints:** No blood, no open surgery, no sensational before/after splits, no unrealistic AI skin texture, no clutter
- **Composition Notes:** Maintain safe text overlay zone in top-left/top-center; keep subject on rule-of-thirds line
- **Brand Alignment:** Visual language should mirror high-end London/Paris aesthetic clinics while retaining Indian patient relatability

### 4. SEO & METADATA
- **Recommended Alt Text:** SWI Infinity contact page visual for Gurugram clinic location and concierge
- **Recommended Image Title:** SWI Infinity – contact-hero.jpg
- **Recommended Image Caption:** Premium evidence-led aesthetic care at SWI Infinity, Gurugram
- **Filename SEO Value:** Descriptive keywords include service intent + brand + location, improving image discovery and topical relevance
- **Schema.org ImageObject Fields:**
  - name: SWI Infinity contact-hero.jpg
  - description: Brand-consistent medical aesthetics image for SWI Infinity website
  - contentUrl: https://www.swiinfinity.com/images/contact-hero.jpg
  - author: SWI Infinity Creative Team / Licensed Photographer
  - copyrightHolder: SWI Infinity
  - license: Commercial Website License
  - acquireLicensePage: https://www.swiinfinity.com/terms/
  - encodingFormat: image/jpeg
  - width: 1920
  - height: 1080

### 5. PROCUREMENT — HOW TO GET THIS IMAGE

#### Method A: REAL PHOTOGRAPHY (Preferred for hero/doctor/clinic images)
- **Priority:** MEDIUM
- **Why needed:** Authentic clinic visuals produce highest trust and consultation conversion in medical aesthetics
- **Shot list instructions:** Capture horizontal hero (16:9), medium portrait, detail close-up; soft key + bounce fill; retain negative space for headlines
- **Equipment recommendation:** Full-frame mirrorless, 35mm/50mm prime, 85mm for portrait, CPL filter, 2 softboxes
- **Post-processing notes:** True-to-skin color grade, reduce highlights, maintain natural skin texture, avoid over-smoothing

#### Method B: STOCK PHOTOGRAPHY
- **Priority:** MEDIUM
- **Recommended platforms:** Shutterstock (medical variety), Getty (premium realism), Adobe Stock (legal clarity), iStock (budget)
- **Search queries to use:**
  - Query 1: luxury aesthetic clinic consultation india
  - Query 2: south asian female plastic surgeon clinic portrait
  - Query 3: dermatology treatment room premium interior gurugram
  - Query 4: cosmetic surgery consultation natural light india
  - Query 5: high end medical spa waiting area neutral tones
- **License type required:** RF commercial with model/property releases
- **Filters to apply:** Horizontal, >4000px, authentic skin texture, South Asian models, medical setting, copy space
- **Top 3 platforms to search first:** Shutterstock, Getty Images, Adobe Stock
- **What to avoid in results:** Western-only demographics, heavy glamour makeup, visible surgical gore, generic spa clichés

#### Method C: AI IMAGE GENERATION
- **Priority:** MEDIUM
- **Best tools for this image:** Midjourney, DALL-E 3, Adobe Firefly
- **Recommended tool (top pick):** Midjourney v6.1
- **Full Midjourney Prompt:**
`ultra-realistic premium Indian medical aesthetics clinic scene, rose-gold and cream palette, calm luxury mood, South Asian subjects, natural skin texture, editorial medical photography, no logos, no text, no blood, 16:9 --v 6.1 --style raw --ar 16:9 --s 150`

text
- **Full DALL-E 3 Prompt:**
`Create a photorealistic website hero image for a premium plastic surgery and aesthetic dermatology clinic in Gurugram, India. Use rose-gold, cream and charcoal accents. Include South Asian patient representation, medical-professional environment, calm and trustworthy tone, clean composition with copy space, no gore, no visible brand logos, no text overlays.`

text
- **Style modifiers to use:** cinematic daylight, soft contrast, editorial healthcare realism, premium interior design
- **Negative prompts (if using SD/Flux):** deformed hands, extra fingers, waxy skin, blood, exposed surgery, watermark, logo, text
- **Post-generation editing needed:** Yes — retouch anatomy artifacts, enforce brand color grade, export responsive renditions
- **Commercial usage considerations:** Verify platform indemnity and do not depict real doctor identity via AI for clinical claims

#### Method D: EXISTING REAL PHOTOS FROM CLINIC
- **Can the clinic provide this?** yes
- **What to request from Dr. Swikriti/clinic team:** RAW files, location/model consent, portrait + wide shots, uncluttered treatment rooms
- **Minimum quality threshold:** 24MP+, CR3/NEF/ARW RAW, ISO < 800, sharp eye focus, white balance card reference

### 6. WHERE IT'S USED IN CODE
- **Component/Page file(s):** Refer to image usage map and related route components (`app/about/page.tsx`, `components/category-page.tsx`, `app/procedures/[slug]/page.tsx`, `app/layout.tsx`)
- **JSX location:** Hero/section `<Image>` blocks and metadata icon declarations
- **How it's rendered:** Next.js `<Image>` for photos, metadata icon links for favicon assets
- **Current Next.js Image props in use:** Mostly `src`, `alt`, `width`, `height`, `className`, selective `priority`
- **Props that MUST be updated when replacing:** Add `sizes`, harmonize `quality`, set `placeholder`, `fetchPriority` for above-fold
- **Impact if wrong image used:** UX trust drop, weaker local SEO image relevance, potential compliance risk for misrepresentative medical visuals

### 7. REPLACEMENT PRIORITY & EFFORT
- **Business Priority:** LOW
- **SEO Priority:** LOW
- **Effort to Replace:** MEDIUM
- **Estimated Time:** 1 day
- **Blocks Launch:** NO
- **Recommended Sprint:** Week 2
- **Dependencies:** Enable image optimization workflow, add per-procedure asset mapping, update metadata manifest

### 8. ADDITIONAL NOTES
- **Why current placeholder is problematic:** Generic or reused visuals reduce differentiation and credibility in a high-trust medical purchase journey
- **Competitor reference sites for visual inspiration:** Cadogan Clinic London, 111 Harley St, The Aesthetics Doctor, Kaya Skin Clinic India
- **Any legal/ethical considerations:** Before/after or identifiable patient imagery requires explicit consent and retention records
- **Notes specific to Indian medical aesthetics market:** Prioritize South Asian skin tones, realistic outcomes, family decision-maker trust cues, and Hindi-English discoverability


## IMAGE 6: dr-swikriti.jpg

### 1. IDENTITY
- **Current Filename:** dr-swikriti.jpg
- **Recommended Filename:** dr-swikriti-raniwala-plastic-surgeon-gurugram.webp
- **File Path in Repo:** `public/images/dr-swikriti.jpg`
- **Status:** REPLACE IMMEDIATELY

### 2. TECHNICAL SPECIFICATIONS
- **Required Format:** WebP primary + JPG fallback (PNG/SVG retained for favicon/logo utility assets)
- **Required Dimensions (px):** 1600 × 1200
- **Aspect Ratio:** 4:3
- **File Size Target:** <=220KB
- **Quality Setting:** WebP 78-82, JPG 72-78
- **DPI/PPI:** 72 PPI (web master), optional 150 PPI source archive
- **Color Space:** sRGB IEC61966-2.1
- **Responsive Breakpoint Sizes Needed:** 640w, 750w, 828w, 1080w, 1200w, 1920w
- **Priority Loading:** YES
- **Next.js Image Props Required:** `src`, `alt`, `width`, `height`, `sizes`, `quality`, `priority, fetchPriority="high", placeholder="blur"`, `className`

### 3. CONTENT DESCRIPTION
- **Subject Matter:** Dr. Swikriti portrait
- **Scene/Setting:** Studio/clinical real environment
- **Mood & Tone:** Luxury, calm, clinical precision, high trust
- **People Required:** Yes; South Asian representation, 25-45 years, professional appearance
- **Medical Accuracy Required:** Yes
- **Props/Elements:** Consultation tablet, neutral interiors, subtle rose-gold accents, clean equipment
- **Negative Constraints:** No blood, no open surgery, no sensational before/after splits, no unrealistic AI skin texture, no clutter
- **Composition Notes:** Maintain safe text overlay zone in top-left/top-center; keep subject on rule-of-thirds line
- **Brand Alignment:** Visual language should mirror high-end London/Paris aesthetic clinics while retaining Indian patient relatability

### 4. SEO & METADATA
- **Recommended Alt Text:** Dr. Swikriti Raniwala, plastic and aesthetic surgeon at SWI Infinity Gurugram
- **Recommended Image Title:** SWI Infinity – dr-swikriti.jpg
- **Recommended Image Caption:** Premium evidence-led aesthetic care at SWI Infinity, Gurugram
- **Filename SEO Value:** Descriptive keywords include service intent + brand + location, improving image discovery and topical relevance
- **Schema.org ImageObject Fields:**
  - name: SWI Infinity dr-swikriti.jpg
  - description: Brand-consistent medical aesthetics image for SWI Infinity website
  - contentUrl: https://www.swiinfinity.com/images/dr-swikriti.jpg
  - author: SWI Infinity Creative Team / Licensed Photographer
  - copyrightHolder: SWI Infinity
  - license: Commercial Website License
  - acquireLicensePage: https://www.swiinfinity.com/terms/
  - encodingFormat: image/jpeg
  - width: 1600
  - height: 1200

### 5. PROCUREMENT — HOW TO GET THIS IMAGE

#### Method A: REAL PHOTOGRAPHY (Preferred for hero/doctor/clinic images)
- **Priority:** HIGHEST
- **Why needed:** Authentic clinic visuals produce highest trust and consultation conversion in medical aesthetics
- **Shot list instructions:** Capture horizontal hero (16:9), medium portrait, detail close-up; soft key + bounce fill; retain negative space for headlines
- **Equipment recommendation:** Full-frame mirrorless, 35mm/50mm prime, 85mm for portrait, CPL filter, 2 softboxes
- **Post-processing notes:** True-to-skin color grade, reduce highlights, maintain natural skin texture, avoid over-smoothing

#### Method B: STOCK PHOTOGRAPHY
- **Priority:** MEDIUM
- **Recommended platforms:** Shutterstock (medical variety), Getty (premium realism), Adobe Stock (legal clarity), iStock (budget)
- **Search queries to use:**
  - Query 1: luxury aesthetic clinic consultation india
  - Query 2: south asian female plastic surgeon clinic portrait
  - Query 3: dermatology treatment room premium interior gurugram
  - Query 4: cosmetic surgery consultation natural light india
  - Query 5: high end medical spa waiting area neutral tones
- **License type required:** RF commercial with model/property releases
- **Filters to apply:** Horizontal, >4000px, authentic skin texture, South Asian models, medical setting, copy space
- **Top 3 platforms to search first:** Shutterstock, Getty Images, Adobe Stock
- **What to avoid in results:** Western-only demographics, heavy glamour makeup, visible surgical gore, generic spa clichés

#### Method C: AI IMAGE GENERATION
- **Priority:** LOW
- **Best tools for this image:** Midjourney, DALL-E 3, Adobe Firefly
- **Recommended tool (top pick):** Midjourney v6.1
- **Full Midjourney Prompt:**
`ultra-realistic premium Indian medical aesthetics clinic scene, rose-gold and cream palette, calm luxury mood, South Asian subjects, natural skin texture, editorial medical photography, no logos, no text, no blood, 16:9 --v 6.1 --style raw --ar 16:9 --s 150`

text
- **Full DALL-E 3 Prompt:**
`Create a photorealistic website hero image for a premium plastic surgery and aesthetic dermatology clinic in Gurugram, India. Use rose-gold, cream and charcoal accents. Include South Asian patient representation, medical-professional environment, calm and trustworthy tone, clean composition with copy space, no gore, no visible brand logos, no text overlays.`

text
- **Style modifiers to use:** cinematic daylight, soft contrast, editorial healthcare realism, premium interior design
- **Negative prompts (if using SD/Flux):** deformed hands, extra fingers, waxy skin, blood, exposed surgery, watermark, logo, text
- **Post-generation editing needed:** Yes — retouch anatomy artifacts, enforce brand color grade, export responsive renditions
- **Commercial usage considerations:** Verify platform indemnity and do not depict real doctor identity via AI for clinical claims

#### Method D: EXISTING REAL PHOTOS FROM CLINIC
- **Can the clinic provide this?** yes
- **What to request from Dr. Swikriti/clinic team:** RAW files, location/model consent, portrait + wide shots, uncluttered treatment rooms
- **Minimum quality threshold:** 24MP+, CR3/NEF/ARW RAW, ISO < 800, sharp eye focus, white balance card reference

### 6. WHERE IT'S USED IN CODE
- **Component/Page file(s):** Refer to image usage map and related route components (`app/about/page.tsx`, `components/category-page.tsx`, `app/procedures/[slug]/page.tsx`, `app/layout.tsx`)
- **JSX location:** Hero/section `<Image>` blocks and metadata icon declarations
- **How it's rendered:** Next.js `<Image>` for photos, metadata icon links for favicon assets
- **Current Next.js Image props in use:** Mostly `src`, `alt`, `width`, `height`, `className`, selective `priority`
- **Props that MUST be updated when replacing:** Add `sizes`, harmonize `quality`, set `placeholder`, `fetchPriority` for above-fold
- **Impact if wrong image used:** UX trust drop, weaker local SEO image relevance, potential compliance risk for misrepresentative medical visuals

### 7. REPLACEMENT PRIORITY & EFFORT
- **Business Priority:** CRITICAL
- **SEO Priority:** CRITICAL
- **Effort to Replace:** MEDIUM
- **Estimated Time:** 3-5 days
- **Blocks Launch:** YES
- **Recommended Sprint:** Day 1-2
- **Dependencies:** Enable image optimization workflow, add per-procedure asset mapping, update metadata manifest

### 8. ADDITIONAL NOTES
- **Why current placeholder is problematic:** Generic or reused visuals reduce differentiation and credibility in a high-trust medical purchase journey
- **Competitor reference sites for visual inspiration:** Cadogan Clinic London, 111 Harley St, The Aesthetics Doctor, Kaya Skin Clinic India
- **Any legal/ethical considerations:** Before/after or identifiable patient imagery requires explicit consent and retention records
- **Notes specific to Indian medical aesthetics market:** Prioritize South Asian skin tones, realistic outcomes, family decision-maker trust cues, and Hindi-English discoverability


## IMAGE 7: procedure-hair.jpg

### 1. IDENTITY
- **Current Filename:** procedure-hair.jpg
- **Recommended Filename:** hair-procedures-overview-swi-infinity-gurugram.webp
- **File Path in Repo:** `public/images/procedure-hair.jpg`
- **Status:** REPLACE IMMEDIATELY

### 2. TECHNICAL SPECIFICATIONS
- **Required Format:** WebP primary + JPG fallback (PNG/SVG retained for favicon/logo utility assets)
- **Required Dimensions (px):** 1920 × 1080
- **Aspect Ratio:** 16:9
- **File Size Target:** <=220KB
- **Quality Setting:** WebP 78-82, JPG 72-78
- **DPI/PPI:** 72 PPI (web master), optional 150 PPI source archive
- **Color Space:** sRGB IEC61966-2.1
- **Responsive Breakpoint Sizes Needed:** 640w, 750w, 828w, 1080w, 1200w, 1920w
- **Priority Loading:** YES
- **Next.js Image Props Required:** `src`, `alt`, `width`, `height`, `sizes`, `quality`, `priority, fetchPriority="high", placeholder="blur"`, `className`

### 3. CONTENT DESCRIPTION
- **Subject Matter:** Premium medical aesthetics visual
- **Scene/Setting:** Studio/clinical real environment
- **Mood & Tone:** Luxury, calm, clinical precision, high trust
- **People Required:** Yes; South Asian representation, 25-45 years, professional appearance
- **Medical Accuracy Required:** Yes
- **Props/Elements:** Consultation tablet, neutral interiors, subtle rose-gold accents, clean equipment
- **Negative Constraints:** No blood, no open surgery, no sensational before/after splits, no unrealistic AI skin texture, no clutter
- **Composition Notes:** Maintain safe text overlay zone in top-left/top-center; keep subject on rule-of-thirds line
- **Brand Alignment:** Visual language should mirror high-end London/Paris aesthetic clinics while retaining Indian patient relatability

### 4. SEO & METADATA
- **Recommended Alt Text:** Hair restoration consultation at SWI Infinity aesthetic clinic in Gurugram
- **Recommended Image Title:** SWI Infinity – procedure-hair.jpg
- **Recommended Image Caption:** Premium evidence-led aesthetic care at SWI Infinity, Gurugram
- **Filename SEO Value:** Descriptive keywords include service intent + brand + location, improving image discovery and topical relevance
- **Schema.org ImageObject Fields:**
  - name: SWI Infinity procedure-hair.jpg
  - description: Brand-consistent medical aesthetics image for SWI Infinity website
  - contentUrl: https://www.swiinfinity.com/images/procedure-hair.jpg
  - author: SWI Infinity Creative Team / Licensed Photographer
  - copyrightHolder: SWI Infinity
  - license: Commercial Website License
  - acquireLicensePage: https://www.swiinfinity.com/terms/
  - encodingFormat: image/jpeg
  - width: 1920
  - height: 1080

### 5. PROCUREMENT — HOW TO GET THIS IMAGE

#### Method A: REAL PHOTOGRAPHY (Preferred for hero/doctor/clinic images)
- **Priority:** HIGH
- **Why needed:** Authentic clinic visuals produce highest trust and consultation conversion in medical aesthetics
- **Shot list instructions:** Capture horizontal hero (16:9), medium portrait, detail close-up; soft key + bounce fill; retain negative space for headlines
- **Equipment recommendation:** Full-frame mirrorless, 35mm/50mm prime, 85mm for portrait, CPL filter, 2 softboxes
- **Post-processing notes:** True-to-skin color grade, reduce highlights, maintain natural skin texture, avoid over-smoothing

#### Method B: STOCK PHOTOGRAPHY
- **Priority:** MEDIUM
- **Recommended platforms:** Shutterstock (medical variety), Getty (premium realism), Adobe Stock (legal clarity), iStock (budget)
- **Search queries to use:**
  - Query 1: luxury aesthetic clinic consultation india
  - Query 2: south asian female plastic surgeon clinic portrait
  - Query 3: dermatology treatment room premium interior gurugram
  - Query 4: cosmetic surgery consultation natural light india
  - Query 5: high end medical spa waiting area neutral tones
- **License type required:** RF commercial with model/property releases
- **Filters to apply:** Horizontal, >4000px, authentic skin texture, South Asian models, medical setting, copy space
- **Top 3 platforms to search first:** Shutterstock, Getty Images, Adobe Stock
- **What to avoid in results:** Western-only demographics, heavy glamour makeup, visible surgical gore, generic spa clichés

#### Method C: AI IMAGE GENERATION
- **Priority:** MEDIUM
- **Best tools for this image:** Midjourney, DALL-E 3, Adobe Firefly
- **Recommended tool (top pick):** Midjourney v6.1
- **Full Midjourney Prompt:**
`ultra-realistic premium Indian medical aesthetics clinic scene, rose-gold and cream palette, calm luxury mood, South Asian subjects, natural skin texture, editorial medical photography, no logos, no text, no blood, 16:9 --v 6.1 --style raw --ar 16:9 --s 150`

text
- **Full DALL-E 3 Prompt:**
`Create a photorealistic website hero image for a premium plastic surgery and aesthetic dermatology clinic in Gurugram, India. Use rose-gold, cream and charcoal accents. Include South Asian patient representation, medical-professional environment, calm and trustworthy tone, clean composition with copy space, no gore, no visible brand logos, no text overlays.`

text
- **Style modifiers to use:** cinematic daylight, soft contrast, editorial healthcare realism, premium interior design
- **Negative prompts (if using SD/Flux):** deformed hands, extra fingers, waxy skin, blood, exposed surgery, watermark, logo, text
- **Post-generation editing needed:** Yes — retouch anatomy artifacts, enforce brand color grade, export responsive renditions
- **Commercial usage considerations:** Verify platform indemnity and do not depict real doctor identity via AI for clinical claims

#### Method D: EXISTING REAL PHOTOS FROM CLINIC
- **Can the clinic provide this?** yes
- **What to request from Dr. Swikriti/clinic team:** RAW files, location/model consent, portrait + wide shots, uncluttered treatment rooms
- **Minimum quality threshold:** 24MP+, CR3/NEF/ARW RAW, ISO < 800, sharp eye focus, white balance card reference

### 6. WHERE IT'S USED IN CODE
- **Component/Page file(s):** Refer to image usage map and related route components (`app/about/page.tsx`, `components/category-page.tsx`, `app/procedures/[slug]/page.tsx`, `app/layout.tsx`)
- **JSX location:** Hero/section `<Image>` blocks and metadata icon declarations
- **How it's rendered:** Next.js `<Image>` for photos, metadata icon links for favicon assets
- **Current Next.js Image props in use:** Mostly `src`, `alt`, `width`, `height`, `className`, selective `priority`
- **Props that MUST be updated when replacing:** Add `sizes`, harmonize `quality`, set `placeholder`, `fetchPriority` for above-fold
- **Impact if wrong image used:** UX trust drop, weaker local SEO image relevance, potential compliance risk for misrepresentative medical visuals

### 7. REPLACEMENT PRIORITY & EFFORT
- **Business Priority:** HIGH
- **SEO Priority:** HIGH
- **Effort to Replace:** MEDIUM
- **Estimated Time:** 3-4 days
- **Blocks Launch:** YES
- **Recommended Sprint:** Week 1
- **Dependencies:** Enable image optimization workflow, add per-procedure asset mapping, update metadata manifest

### 8. ADDITIONAL NOTES
- **Why current placeholder is problematic:** Generic or reused visuals reduce differentiation and credibility in a high-trust medical purchase journey
- **Competitor reference sites for visual inspiration:** Cadogan Clinic London, 111 Harley St, The Aesthetics Doctor, Kaya Skin Clinic India
- **Any legal/ethical considerations:** Before/after or identifiable patient imagery requires explicit consent and retention records
- **Notes specific to Indian medical aesthetics market:** Prioritize South Asian skin tones, realistic outcomes, family decision-maker trust cues, and Hindi-English discoverability


## IMAGE 8: procedure-face.jpg

### 1. IDENTITY
- **Current Filename:** procedure-face.jpg
- **Recommended Filename:** face-procedures-overview-swi-infinity-gurugram.webp
- **File Path in Repo:** `public/images/procedure-face.jpg`
- **Status:** REPLACE IMMEDIATELY

### 2. TECHNICAL SPECIFICATIONS
- **Required Format:** WebP primary + JPG fallback (PNG/SVG retained for favicon/logo utility assets)
- **Required Dimensions (px):** 1920 × 1080
- **Aspect Ratio:** 16:9
- **File Size Target:** <=220KB
- **Quality Setting:** WebP 78-82, JPG 72-78
- **DPI/PPI:** 72 PPI (web master), optional 150 PPI source archive
- **Color Space:** sRGB IEC61966-2.1
- **Responsive Breakpoint Sizes Needed:** 640w, 750w, 828w, 1080w, 1200w, 1920w
- **Priority Loading:** YES
- **Next.js Image Props Required:** `src`, `alt`, `width`, `height`, `sizes`, `quality`, `priority, fetchPriority="high", placeholder="blur"`, `className`

### 3. CONTENT DESCRIPTION
- **Subject Matter:** Premium medical aesthetics visual
- **Scene/Setting:** Studio/clinical real environment
- **Mood & Tone:** Luxury, calm, clinical precision, high trust
- **People Required:** Yes; South Asian representation, 25-45 years, professional appearance
- **Medical Accuracy Required:** Yes
- **Props/Elements:** Consultation tablet, neutral interiors, subtle rose-gold accents, clean equipment
- **Negative Constraints:** No blood, no open surgery, no sensational before/after splits, no unrealistic AI skin texture, no clutter
- **Composition Notes:** Maintain safe text overlay zone in top-left/top-center; keep subject on rule-of-thirds line
- **Brand Alignment:** Visual language should mirror high-end London/Paris aesthetic clinics while retaining Indian patient relatability

### 4. SEO & METADATA
- **Recommended Alt Text:** Facial aesthetics consultation at SWI Infinity plastic surgery clinic Gurugram
- **Recommended Image Title:** SWI Infinity – procedure-face.jpg
- **Recommended Image Caption:** Premium evidence-led aesthetic care at SWI Infinity, Gurugram
- **Filename SEO Value:** Descriptive keywords include service intent + brand + location, improving image discovery and topical relevance
- **Schema.org ImageObject Fields:**
  - name: SWI Infinity procedure-face.jpg
  - description: Brand-consistent medical aesthetics image for SWI Infinity website
  - contentUrl: https://www.swiinfinity.com/images/procedure-face.jpg
  - author: SWI Infinity Creative Team / Licensed Photographer
  - copyrightHolder: SWI Infinity
  - license: Commercial Website License
  - acquireLicensePage: https://www.swiinfinity.com/terms/
  - encodingFormat: image/jpeg
  - width: 1920
  - height: 1080

### 5. PROCUREMENT — HOW TO GET THIS IMAGE

#### Method A: REAL PHOTOGRAPHY (Preferred for hero/doctor/clinic images)
- **Priority:** HIGH
- **Why needed:** Authentic clinic visuals produce highest trust and consultation conversion in medical aesthetics
- **Shot list instructions:** Capture horizontal hero (16:9), medium portrait, detail close-up; soft key + bounce fill; retain negative space for headlines
- **Equipment recommendation:** Full-frame mirrorless, 35mm/50mm prime, 85mm for portrait, CPL filter, 2 softboxes
- **Post-processing notes:** True-to-skin color grade, reduce highlights, maintain natural skin texture, avoid over-smoothing

#### Method B: STOCK PHOTOGRAPHY
- **Priority:** MEDIUM
- **Recommended platforms:** Shutterstock (medical variety), Getty (premium realism), Adobe Stock (legal clarity), iStock (budget)
- **Search queries to use:**
  - Query 1: luxury aesthetic clinic consultation india
  - Query 2: south asian female plastic surgeon clinic portrait
  - Query 3: dermatology treatment room premium interior gurugram
  - Query 4: cosmetic surgery consultation natural light india
  - Query 5: high end medical spa waiting area neutral tones
- **License type required:** RF commercial with model/property releases
- **Filters to apply:** Horizontal, >4000px, authentic skin texture, South Asian models, medical setting, copy space
- **Top 3 platforms to search first:** Shutterstock, Getty Images, Adobe Stock
- **What to avoid in results:** Western-only demographics, heavy glamour makeup, visible surgical gore, generic spa clichés

#### Method C: AI IMAGE GENERATION
- **Priority:** MEDIUM
- **Best tools for this image:** Midjourney, DALL-E 3, Adobe Firefly
- **Recommended tool (top pick):** Midjourney v6.1
- **Full Midjourney Prompt:**
`ultra-realistic premium Indian medical aesthetics clinic scene, rose-gold and cream palette, calm luxury mood, South Asian subjects, natural skin texture, editorial medical photography, no logos, no text, no blood, 16:9 --v 6.1 --style raw --ar 16:9 --s 150`

text
- **Full DALL-E 3 Prompt:**
`Create a photorealistic website hero image for a premium plastic surgery and aesthetic dermatology clinic in Gurugram, India. Use rose-gold, cream and charcoal accents. Include South Asian patient representation, medical-professional environment, calm and trustworthy tone, clean composition with copy space, no gore, no visible brand logos, no text overlays.`

text
- **Style modifiers to use:** cinematic daylight, soft contrast, editorial healthcare realism, premium interior design
- **Negative prompts (if using SD/Flux):** deformed hands, extra fingers, waxy skin, blood, exposed surgery, watermark, logo, text
- **Post-generation editing needed:** Yes — retouch anatomy artifacts, enforce brand color grade, export responsive renditions
- **Commercial usage considerations:** Verify platform indemnity and do not depict real doctor identity via AI for clinical claims

#### Method D: EXISTING REAL PHOTOS FROM CLINIC
- **Can the clinic provide this?** yes
- **What to request from Dr. Swikriti/clinic team:** RAW files, location/model consent, portrait + wide shots, uncluttered treatment rooms
- **Minimum quality threshold:** 24MP+, CR3/NEF/ARW RAW, ISO < 800, sharp eye focus, white balance card reference

### 6. WHERE IT'S USED IN CODE
- **Component/Page file(s):** Refer to image usage map and related route components (`app/about/page.tsx`, `components/category-page.tsx`, `app/procedures/[slug]/page.tsx`, `app/layout.tsx`)
- **JSX location:** Hero/section `<Image>` blocks and metadata icon declarations
- **How it's rendered:** Next.js `<Image>` for photos, metadata icon links for favicon assets
- **Current Next.js Image props in use:** Mostly `src`, `alt`, `width`, `height`, `className`, selective `priority`
- **Props that MUST be updated when replacing:** Add `sizes`, harmonize `quality`, set `placeholder`, `fetchPriority` for above-fold
- **Impact if wrong image used:** UX trust drop, weaker local SEO image relevance, potential compliance risk for misrepresentative medical visuals

### 7. REPLACEMENT PRIORITY & EFFORT
- **Business Priority:** HIGH
- **SEO Priority:** HIGH
- **Effort to Replace:** MEDIUM
- **Estimated Time:** 3-4 days
- **Blocks Launch:** YES
- **Recommended Sprint:** Week 1
- **Dependencies:** Enable image optimization workflow, add per-procedure asset mapping, update metadata manifest

### 8. ADDITIONAL NOTES
- **Why current placeholder is problematic:** Generic or reused visuals reduce differentiation and credibility in a high-trust medical purchase journey
- **Competitor reference sites for visual inspiration:** Cadogan Clinic London, 111 Harley St, The Aesthetics Doctor, Kaya Skin Clinic India
- **Any legal/ethical considerations:** Before/after or identifiable patient imagery requires explicit consent and retention records
- **Notes specific to Indian medical aesthetics market:** Prioritize South Asian skin tones, realistic outcomes, family decision-maker trust cues, and Hindi-English discoverability


## IMAGE 9: procedure-body.jpg

### 1. IDENTITY
- **Current Filename:** procedure-body.jpg
- **Recommended Filename:** body-procedures-overview-swi-infinity-gurugram.webp
- **File Path in Repo:** `public/images/procedure-body.jpg`
- **Status:** REPLACE IMMEDIATELY

### 2. TECHNICAL SPECIFICATIONS
- **Required Format:** WebP primary + JPG fallback (PNG/SVG retained for favicon/logo utility assets)
- **Required Dimensions (px):** 1920 × 1080
- **Aspect Ratio:** 16:9
- **File Size Target:** <=220KB
- **Quality Setting:** WebP 78-82, JPG 72-78
- **DPI/PPI:** 72 PPI (web master), optional 150 PPI source archive
- **Color Space:** sRGB IEC61966-2.1
- **Responsive Breakpoint Sizes Needed:** 640w, 750w, 828w, 1080w, 1200w, 1920w
- **Priority Loading:** YES
- **Next.js Image Props Required:** `src`, `alt`, `width`, `height`, `sizes`, `quality`, `priority, fetchPriority="high", placeholder="blur"`, `className`

### 3. CONTENT DESCRIPTION
- **Subject Matter:** Premium medical aesthetics visual
- **Scene/Setting:** Studio/clinical real environment
- **Mood & Tone:** Luxury, calm, clinical precision, high trust
- **People Required:** Yes; South Asian representation, 25-45 years, professional appearance
- **Medical Accuracy Required:** Yes
- **Props/Elements:** Consultation tablet, neutral interiors, subtle rose-gold accents, clean equipment
- **Negative Constraints:** No blood, no open surgery, no sensational before/after splits, no unrealistic AI skin texture, no clutter
- **Composition Notes:** Maintain safe text overlay zone in top-left/top-center; keep subject on rule-of-thirds line
- **Brand Alignment:** Visual language should mirror high-end London/Paris aesthetic clinics while retaining Indian patient relatability

### 4. SEO & METADATA
- **Recommended Alt Text:** Body contouring planning session at SWI Infinity clinic in Gurugram
- **Recommended Image Title:** SWI Infinity – procedure-body.jpg
- **Recommended Image Caption:** Premium evidence-led aesthetic care at SWI Infinity, Gurugram
- **Filename SEO Value:** Descriptive keywords include service intent + brand + location, improving image discovery and topical relevance
- **Schema.org ImageObject Fields:**
  - name: SWI Infinity procedure-body.jpg
  - description: Brand-consistent medical aesthetics image for SWI Infinity website
  - contentUrl: https://www.swiinfinity.com/images/procedure-body.jpg
  - author: SWI Infinity Creative Team / Licensed Photographer
  - copyrightHolder: SWI Infinity
  - license: Commercial Website License
  - acquireLicensePage: https://www.swiinfinity.com/terms/
  - encodingFormat: image/jpeg
  - width: 1920
  - height: 1080

### 5. PROCUREMENT — HOW TO GET THIS IMAGE

#### Method A: REAL PHOTOGRAPHY (Preferred for hero/doctor/clinic images)
- **Priority:** HIGH
- **Why needed:** Authentic clinic visuals produce highest trust and consultation conversion in medical aesthetics
- **Shot list instructions:** Capture horizontal hero (16:9), medium portrait, detail close-up; soft key + bounce fill; retain negative space for headlines
- **Equipment recommendation:** Full-frame mirrorless, 35mm/50mm prime, 85mm for portrait, CPL filter, 2 softboxes
- **Post-processing notes:** True-to-skin color grade, reduce highlights, maintain natural skin texture, avoid over-smoothing

#### Method B: STOCK PHOTOGRAPHY
- **Priority:** MEDIUM
- **Recommended platforms:** Shutterstock (medical variety), Getty (premium realism), Adobe Stock (legal clarity), iStock (budget)
- **Search queries to use:**
  - Query 1: luxury aesthetic clinic consultation india
  - Query 2: south asian female plastic surgeon clinic portrait
  - Query 3: dermatology treatment room premium interior gurugram
  - Query 4: cosmetic surgery consultation natural light india
  - Query 5: high end medical spa waiting area neutral tones
- **License type required:** RF commercial with model/property releases
- **Filters to apply:** Horizontal, >4000px, authentic skin texture, South Asian models, medical setting, copy space
- **Top 3 platforms to search first:** Shutterstock, Getty Images, Adobe Stock
- **What to avoid in results:** Western-only demographics, heavy glamour makeup, visible surgical gore, generic spa clichés

#### Method C: AI IMAGE GENERATION
- **Priority:** MEDIUM
- **Best tools for this image:** Midjourney, DALL-E 3, Adobe Firefly
- **Recommended tool (top pick):** Midjourney v6.1
- **Full Midjourney Prompt:**
`ultra-realistic premium Indian medical aesthetics clinic scene, rose-gold and cream palette, calm luxury mood, South Asian subjects, natural skin texture, editorial medical photography, no logos, no text, no blood, 16:9 --v 6.1 --style raw --ar 16:9 --s 150`

text
- **Full DALL-E 3 Prompt:**
`Create a photorealistic website hero image for a premium plastic surgery and aesthetic dermatology clinic in Gurugram, India. Use rose-gold, cream and charcoal accents. Include South Asian patient representation, medical-professional environment, calm and trustworthy tone, clean composition with copy space, no gore, no visible brand logos, no text overlays.`

text
- **Style modifiers to use:** cinematic daylight, soft contrast, editorial healthcare realism, premium interior design
- **Negative prompts (if using SD/Flux):** deformed hands, extra fingers, waxy skin, blood, exposed surgery, watermark, logo, text
- **Post-generation editing needed:** Yes — retouch anatomy artifacts, enforce brand color grade, export responsive renditions
- **Commercial usage considerations:** Verify platform indemnity and do not depict real doctor identity via AI for clinical claims

#### Method D: EXISTING REAL PHOTOS FROM CLINIC
- **Can the clinic provide this?** yes
- **What to request from Dr. Swikriti/clinic team:** RAW files, location/model consent, portrait + wide shots, uncluttered treatment rooms
- **Minimum quality threshold:** 24MP+, CR3/NEF/ARW RAW, ISO < 800, sharp eye focus, white balance card reference

### 6. WHERE IT'S USED IN CODE
- **Component/Page file(s):** Refer to image usage map and related route components (`app/about/page.tsx`, `components/category-page.tsx`, `app/procedures/[slug]/page.tsx`, `app/layout.tsx`)
- **JSX location:** Hero/section `<Image>` blocks and metadata icon declarations
- **How it's rendered:** Next.js `<Image>` for photos, metadata icon links for favicon assets
- **Current Next.js Image props in use:** Mostly `src`, `alt`, `width`, `height`, `className`, selective `priority`
- **Props that MUST be updated when replacing:** Add `sizes`, harmonize `quality`, set `placeholder`, `fetchPriority` for above-fold
- **Impact if wrong image used:** UX trust drop, weaker local SEO image relevance, potential compliance risk for misrepresentative medical visuals

### 7. REPLACEMENT PRIORITY & EFFORT
- **Business Priority:** HIGH
- **SEO Priority:** HIGH
- **Effort to Replace:** MEDIUM
- **Estimated Time:** 3-4 days
- **Blocks Launch:** YES
- **Recommended Sprint:** Week 1
- **Dependencies:** Enable image optimization workflow, add per-procedure asset mapping, update metadata manifest

### 8. ADDITIONAL NOTES
- **Why current placeholder is problematic:** Generic or reused visuals reduce differentiation and credibility in a high-trust medical purchase journey
- **Competitor reference sites for visual inspiration:** Cadogan Clinic London, 111 Harley St, The Aesthetics Doctor, Kaya Skin Clinic India
- **Any legal/ethical considerations:** Before/after or identifiable patient imagery requires explicit consent and retention records
- **Notes specific to Indian medical aesthetics market:** Prioritize South Asian skin tones, realistic outcomes, family decision-maker trust cues, and Hindi-English discoverability


## IMAGE 10: procedure-skin.jpg

### 1. IDENTITY
- **Current Filename:** procedure-skin.jpg
- **Recommended Filename:** skin-procedures-overview-swi-infinity-gurugram.webp
- **File Path in Repo:** `public/images/procedure-skin.jpg`
- **Status:** REPLACE IMMEDIATELY

### 2. TECHNICAL SPECIFICATIONS
- **Required Format:** WebP primary + JPG fallback (PNG/SVG retained for favicon/logo utility assets)
- **Required Dimensions (px):** 1920 × 1080
- **Aspect Ratio:** 16:9
- **File Size Target:** <=220KB
- **Quality Setting:** WebP 78-82, JPG 72-78
- **DPI/PPI:** 72 PPI (web master), optional 150 PPI source archive
- **Color Space:** sRGB IEC61966-2.1
- **Responsive Breakpoint Sizes Needed:** 640w, 750w, 828w, 1080w, 1200w, 1920w
- **Priority Loading:** YES
- **Next.js Image Props Required:** `src`, `alt`, `width`, `height`, `sizes`, `quality`, `priority, fetchPriority="high", placeholder="blur"`, `className`

### 3. CONTENT DESCRIPTION
- **Subject Matter:** Premium medical aesthetics visual
- **Scene/Setting:** Studio/clinical real environment
- **Mood & Tone:** Luxury, calm, clinical precision, high trust
- **People Required:** Yes; South Asian representation, 25-45 years, professional appearance
- **Medical Accuracy Required:** Yes
- **Props/Elements:** Consultation tablet, neutral interiors, subtle rose-gold accents, clean equipment
- **Negative Constraints:** No blood, no open surgery, no sensational before/after splits, no unrealistic AI skin texture, no clutter
- **Composition Notes:** Maintain safe text overlay zone in top-left/top-center; keep subject on rule-of-thirds line
- **Brand Alignment:** Visual language should mirror high-end London/Paris aesthetic clinics while retaining Indian patient relatability

### 4. SEO & METADATA
- **Recommended Alt Text:** Advanced skin treatment room at SWI Infinity dermatology clinic Gurugram
- **Recommended Image Title:** SWI Infinity – procedure-skin.jpg
- **Recommended Image Caption:** Premium evidence-led aesthetic care at SWI Infinity, Gurugram
- **Filename SEO Value:** Descriptive keywords include service intent + brand + location, improving image discovery and topical relevance
- **Schema.org ImageObject Fields:**
  - name: SWI Infinity procedure-skin.jpg
  - description: Brand-consistent medical aesthetics image for SWI Infinity website
  - contentUrl: https://www.swiinfinity.com/images/procedure-skin.jpg
  - author: SWI Infinity Creative Team / Licensed Photographer
  - copyrightHolder: SWI Infinity
  - license: Commercial Website License
  - acquireLicensePage: https://www.swiinfinity.com/terms/
  - encodingFormat: image/jpeg
  - width: 1920
  - height: 1080

### 5. PROCUREMENT — HOW TO GET THIS IMAGE

#### Method A: REAL PHOTOGRAPHY (Preferred for hero/doctor/clinic images)
- **Priority:** HIGH
- **Why needed:** Authentic clinic visuals produce highest trust and consultation conversion in medical aesthetics
- **Shot list instructions:** Capture horizontal hero (16:9), medium portrait, detail close-up; soft key + bounce fill; retain negative space for headlines
- **Equipment recommendation:** Full-frame mirrorless, 35mm/50mm prime, 85mm for portrait, CPL filter, 2 softboxes
- **Post-processing notes:** True-to-skin color grade, reduce highlights, maintain natural skin texture, avoid over-smoothing

#### Method B: STOCK PHOTOGRAPHY
- **Priority:** MEDIUM
- **Recommended platforms:** Shutterstock (medical variety), Getty (premium realism), Adobe Stock (legal clarity), iStock (budget)
- **Search queries to use:**
  - Query 1: luxury aesthetic clinic consultation india
  - Query 2: south asian female plastic surgeon clinic portrait
  - Query 3: dermatology treatment room premium interior gurugram
  - Query 4: cosmetic surgery consultation natural light india
  - Query 5: high end medical spa waiting area neutral tones
- **License type required:** RF commercial with model/property releases
- **Filters to apply:** Horizontal, >4000px, authentic skin texture, South Asian models, medical setting, copy space
- **Top 3 platforms to search first:** Shutterstock, Getty Images, Adobe Stock
- **What to avoid in results:** Western-only demographics, heavy glamour makeup, visible surgical gore, generic spa clichés

#### Method C: AI IMAGE GENERATION
- **Priority:** MEDIUM
- **Best tools for this image:** Midjourney, DALL-E 3, Adobe Firefly
- **Recommended tool (top pick):** Midjourney v6.1
- **Full Midjourney Prompt:**
`ultra-realistic premium Indian medical aesthetics clinic scene, rose-gold and cream palette, calm luxury mood, South Asian subjects, natural skin texture, editorial medical photography, no logos, no text, no blood, 16:9 --v 6.1 --style raw --ar 16:9 --s 150`

text
- **Full DALL-E 3 Prompt:**
`Create a photorealistic website hero image for a premium plastic surgery and aesthetic dermatology clinic in Gurugram, India. Use rose-gold, cream and charcoal accents. Include South Asian patient representation, medical-professional environment, calm and trustworthy tone, clean composition with copy space, no gore, no visible brand logos, no text overlays.`

text
- **Style modifiers to use:** cinematic daylight, soft contrast, editorial healthcare realism, premium interior design
- **Negative prompts (if using SD/Flux):** deformed hands, extra fingers, waxy skin, blood, exposed surgery, watermark, logo, text
- **Post-generation editing needed:** Yes — retouch anatomy artifacts, enforce brand color grade, export responsive renditions
- **Commercial usage considerations:** Verify platform indemnity and do not depict real doctor identity via AI for clinical claims

#### Method D: EXISTING REAL PHOTOS FROM CLINIC
- **Can the clinic provide this?** yes
- **What to request from Dr. Swikriti/clinic team:** RAW files, location/model consent, portrait + wide shots, uncluttered treatment rooms
- **Minimum quality threshold:** 24MP+, CR3/NEF/ARW RAW, ISO < 800, sharp eye focus, white balance card reference

### 6. WHERE IT'S USED IN CODE
- **Component/Page file(s):** Refer to image usage map and related route components (`app/about/page.tsx`, `components/category-page.tsx`, `app/procedures/[slug]/page.tsx`, `app/layout.tsx`)
- **JSX location:** Hero/section `<Image>` blocks and metadata icon declarations
- **How it's rendered:** Next.js `<Image>` for photos, metadata icon links for favicon assets
- **Current Next.js Image props in use:** Mostly `src`, `alt`, `width`, `height`, `className`, selective `priority`
- **Props that MUST be updated when replacing:** Add `sizes`, harmonize `quality`, set `placeholder`, `fetchPriority` for above-fold
- **Impact if wrong image used:** UX trust drop, weaker local SEO image relevance, potential compliance risk for misrepresentative medical visuals

### 7. REPLACEMENT PRIORITY & EFFORT
- **Business Priority:** HIGH
- **SEO Priority:** HIGH
- **Effort to Replace:** MEDIUM
- **Estimated Time:** 3-4 days
- **Blocks Launch:** YES
- **Recommended Sprint:** Week 1
- **Dependencies:** Enable image optimization workflow, add per-procedure asset mapping, update metadata manifest

### 8. ADDITIONAL NOTES
- **Why current placeholder is problematic:** Generic or reused visuals reduce differentiation and credibility in a high-trust medical purchase journey
- **Competitor reference sites for visual inspiration:** Cadogan Clinic London, 111 Harley St, The Aesthetics Doctor, Kaya Skin Clinic India
- **Any legal/ethical considerations:** Before/after or identifiable patient imagery requires explicit consent and retention records
- **Notes specific to Indian medical aesthetics market:** Prioritize South Asian skin tones, realistic outcomes, family decision-maker trust cues, and Hindi-English discoverability


## IMAGE 11: apple-icon.png

### 1. IDENTITY
- **Current Filename:** apple-icon.png
- **Recommended Filename:** swi-infinity-apple-touch-icon-180.png
- **File Path in Repo:** `public/apple-icon.png`
- **Status:** KEEP & OPTIMISE

### 2. TECHNICAL SPECIFICATIONS
- **Required Format:** WebP primary + JPG fallback (PNG/SVG retained for favicon/logo utility assets)
- **Required Dimensions (px):** 180 × 180
- **Aspect Ratio:** 1:1
- **File Size Target:** <=20KB
- **Quality Setting:** WebP 78-82, JPG 72-78
- **DPI/PPI:** 72 PPI (web master), optional 150 PPI source archive
- **Color Space:** sRGB IEC61966-2.1
- **Responsive Breakpoint Sizes Needed:** 640w, 750w, 828w, 1080w, 1200w, 1920w
- **Priority Loading:** NO
- **Next.js Image Props Required:** `src`, `alt`, `width`, `height`, `sizes`, `quality`, `loading="lazy", decoding="async"`, `className`

### 3. CONTENT DESCRIPTION
- **Subject Matter:** Brand icon mark
- **Scene/Setting:** Flat brand canvas, transparent/export-safe
- **Mood & Tone:** Luxury, calm, clinical precision, high trust
- **People Required:** No
- **Medical Accuracy Required:** No
- **Props/Elements:** Brand mark only
- **Negative Constraints:** No blood, no open surgery, no sensational before/after splits, no unrealistic AI skin texture, no clutter
- **Composition Notes:** Maintain safe text overlay zone in top-left/top-center; keep subject on rule-of-thirds line
- **Brand Alignment:** Visual language should mirror high-end London/Paris aesthetic clinics while retaining Indian patient relatability

### 4. SEO & METADATA
- **Recommended Alt Text:** SWI Infinity apple icon png brand asset, Gurugram Haryana
- **Recommended Image Title:** SWI Infinity – apple-icon.png
- **Recommended Image Caption:** Premium evidence-led aesthetic care at SWI Infinity, Gurugram
- **Filename SEO Value:** Descriptive keywords include service intent + brand + location, improving image discovery and topical relevance
- **Schema.org ImageObject Fields:**
  - name: SWI Infinity apple-icon.png
  - description: Brand-consistent medical aesthetics image for SWI Infinity website
  - contentUrl: https://www.swiinfinity.com/apple-icon.png
  - author: SWI Infinity Creative Team / Licensed Photographer
  - copyrightHolder: SWI Infinity
  - license: Commercial Website License
  - acquireLicensePage: https://www.swiinfinity.com/terms/
  - encodingFormat: image/png
  - width: 180
  - height: 180

### 5. PROCUREMENT — HOW TO GET THIS IMAGE

#### Method A: REAL PHOTOGRAPHY (Preferred for hero/doctor/clinic images)
- **Priority:** LOW
- **Why needed:** Authentic clinic visuals produce highest trust and consultation conversion in medical aesthetics
- **Shot list instructions:** Capture horizontal hero (16:9), medium portrait, detail close-up; soft key + bounce fill; retain negative space for headlines
- **Equipment recommendation:** Full-frame mirrorless, 35mm/50mm prime, 85mm for portrait, CPL filter, 2 softboxes
- **Post-processing notes:** True-to-skin color grade, reduce highlights, maintain natural skin texture, avoid over-smoothing

#### Method B: STOCK PHOTOGRAPHY
- **Priority:** LOW
- **Recommended platforms:** Shutterstock (medical variety), Getty (premium realism), Adobe Stock (legal clarity), iStock (budget)
- **Search queries to use:**
  - Query 1: luxury aesthetic clinic consultation india
  - Query 2: south asian female plastic surgeon clinic portrait
  - Query 3: dermatology treatment room premium interior gurugram
  - Query 4: cosmetic surgery consultation natural light india
  - Query 5: high end medical spa waiting area neutral tones
- **License type required:** RF commercial with model/property releases
- **Filters to apply:** Horizontal, >4000px, authentic skin texture, South Asian models, medical setting, copy space
- **Top 3 platforms to search first:** Shutterstock, Getty Images, Adobe Stock
- **What to avoid in results:** Western-only demographics, heavy glamour makeup, visible surgical gore, generic spa clichés

#### Method C: AI IMAGE GENERATION
- **Priority:** LOW
- **Best tools for this image:** Midjourney, DALL-E 3, Adobe Firefly
- **Recommended tool (top pick):** Midjourney v6.1
- **Full Midjourney Prompt:**
`ultra-realistic premium Indian medical aesthetics clinic scene, rose-gold and cream palette, calm luxury mood, South Asian subjects, natural skin texture, editorial medical photography, no logos, no text, no blood, 16:9 --v 6.1 --style raw --ar 16:9 --s 150`

text
- **Full DALL-E 3 Prompt:**
`Create a photorealistic website hero image for a premium plastic surgery and aesthetic dermatology clinic in Gurugram, India. Use rose-gold, cream and charcoal accents. Include South Asian patient representation, medical-professional environment, calm and trustworthy tone, clean composition with copy space, no gore, no visible brand logos, no text overlays.`

text
- **Style modifiers to use:** cinematic daylight, soft contrast, editorial healthcare realism, premium interior design
- **Negative prompts (if using SD/Flux):** deformed hands, extra fingers, waxy skin, blood, exposed surgery, watermark, logo, text
- **Post-generation editing needed:** Yes — retouch anatomy artifacts, enforce brand color grade, export responsive renditions
- **Commercial usage considerations:** Verify platform indemnity and do not depict real doctor identity via AI for clinical claims

#### Method D: EXISTING REAL PHOTOS FROM CLINIC
- **Can the clinic provide this?** no
- **What to request from Dr. Swikriti/clinic team:** RAW files, location/model consent, portrait + wide shots, uncluttered treatment rooms
- **Minimum quality threshold:** 24MP+, CR3/NEF/ARW RAW, ISO < 800, sharp eye focus, white balance card reference

### 6. WHERE IT'S USED IN CODE
- **Component/Page file(s):** Refer to image usage map and related route components (`app/about/page.tsx`, `components/category-page.tsx`, `app/procedures/[slug]/page.tsx`, `app/layout.tsx`)
- **JSX location:** Hero/section `<Image>` blocks and metadata icon declarations
- **How it's rendered:** Next.js `<Image>` for photos, metadata icon links for favicon assets
- **Current Next.js Image props in use:** Mostly `src`, `alt`, `width`, `height`, `className`, selective `priority`
- **Props that MUST be updated when replacing:** Add `sizes`, harmonize `quality`, set `placeholder`, `fetchPriority` for above-fold
- **Impact if wrong image used:** UX trust drop, weaker local SEO image relevance, potential compliance risk for misrepresentative medical visuals

### 7. REPLACEMENT PRIORITY & EFFORT
- **Business Priority:** LOW
- **SEO Priority:** LOW
- **Effort to Replace:** EASY
- **Estimated Time:** 0.5 day
- **Blocks Launch:** NO
- **Recommended Sprint:** Week 2
- **Dependencies:** Enable image optimization workflow, add per-procedure asset mapping, update metadata manifest

### 8. ADDITIONAL NOTES
- **Why current placeholder is problematic:** Generic or reused visuals reduce differentiation and credibility in a high-trust medical purchase journey
- **Competitor reference sites for visual inspiration:** Cadogan Clinic London, 111 Harley St, The Aesthetics Doctor, Kaya Skin Clinic India
- **Any legal/ethical considerations:** Before/after or identifiable patient imagery requires explicit consent and retention records
- **Notes specific to Indian medical aesthetics market:** Prioritize South Asian skin tones, realistic outcomes, family decision-maker trust cues, and Hindi-English discoverability


## IMAGE 12: icon-dark-32x32.png

### 1. IDENTITY
- **Current Filename:** icon-dark-32x32.png
- **Recommended Filename:** swi-infinity-favicon-dark-32.png
- **File Path in Repo:** `public/icon-dark-32x32.png`
- **Status:** KEEP & OPTIMISE

### 2. TECHNICAL SPECIFICATIONS
- **Required Format:** WebP primary + JPG fallback (PNG/SVG retained for favicon/logo utility assets)
- **Required Dimensions (px):** 32 × 32
- **Aspect Ratio:** 1:1
- **File Size Target:** <=20KB
- **Quality Setting:** WebP 78-82, JPG 72-78
- **DPI/PPI:** 72 PPI (web master), optional 150 PPI source archive
- **Color Space:** sRGB IEC61966-2.1
- **Responsive Breakpoint Sizes Needed:** 640w, 750w, 828w, 1080w, 1200w, 1920w
- **Priority Loading:** NO
- **Next.js Image Props Required:** `src`, `alt`, `width`, `height`, `sizes`, `quality`, `loading="lazy", decoding="async"`, `className`

### 3. CONTENT DESCRIPTION
- **Subject Matter:** Brand icon mark
- **Scene/Setting:** Flat brand canvas, transparent/export-safe
- **Mood & Tone:** Luxury, calm, clinical precision, high trust
- **People Required:** No
- **Medical Accuracy Required:** No
- **Props/Elements:** Brand mark only
- **Negative Constraints:** No blood, no open surgery, no sensational before/after splits, no unrealistic AI skin texture, no clutter
- **Composition Notes:** Maintain safe text overlay zone in top-left/top-center; keep subject on rule-of-thirds line
- **Brand Alignment:** Visual language should mirror high-end London/Paris aesthetic clinics while retaining Indian patient relatability

### 4. SEO & METADATA
- **Recommended Alt Text:** SWI Infinity icon dark 32x32 png brand asset, Gurugram Haryana
- **Recommended Image Title:** SWI Infinity – icon-dark-32x32.png
- **Recommended Image Caption:** Premium evidence-led aesthetic care at SWI Infinity, Gurugram
- **Filename SEO Value:** Descriptive keywords include service intent + brand + location, improving image discovery and topical relevance
- **Schema.org ImageObject Fields:**
  - name: SWI Infinity icon-dark-32x32.png
  - description: Brand-consistent medical aesthetics image for SWI Infinity website
  - contentUrl: https://www.swiinfinity.com/icon-dark-32x32.png
  - author: SWI Infinity Creative Team / Licensed Photographer
  - copyrightHolder: SWI Infinity
  - license: Commercial Website License
  - acquireLicensePage: https://www.swiinfinity.com/terms/
  - encodingFormat: image/png
  - width: 32
  - height: 32

### 5. PROCUREMENT — HOW TO GET THIS IMAGE

#### Method A: REAL PHOTOGRAPHY (Preferred for hero/doctor/clinic images)
- **Priority:** LOW
- **Why needed:** Authentic clinic visuals produce highest trust and consultation conversion in medical aesthetics
- **Shot list instructions:** Capture horizontal hero (16:9), medium portrait, detail close-up; soft key + bounce fill; retain negative space for headlines
- **Equipment recommendation:** Full-frame mirrorless, 35mm/50mm prime, 85mm for portrait, CPL filter, 2 softboxes
- **Post-processing notes:** True-to-skin color grade, reduce highlights, maintain natural skin texture, avoid over-smoothing

#### Method B: STOCK PHOTOGRAPHY
- **Priority:** LOW
- **Recommended platforms:** Shutterstock (medical variety), Getty (premium realism), Adobe Stock (legal clarity), iStock (budget)
- **Search queries to use:**
  - Query 1: luxury aesthetic clinic consultation india
  - Query 2: south asian female plastic surgeon clinic portrait
  - Query 3: dermatology treatment room premium interior gurugram
  - Query 4: cosmetic surgery consultation natural light india
  - Query 5: high end medical spa waiting area neutral tones
- **License type required:** RF commercial with model/property releases
- **Filters to apply:** Horizontal, >4000px, authentic skin texture, South Asian models, medical setting, copy space
- **Top 3 platforms to search first:** Shutterstock, Getty Images, Adobe Stock
- **What to avoid in results:** Western-only demographics, heavy glamour makeup, visible surgical gore, generic spa clichés

#### Method C: AI IMAGE GENERATION
- **Priority:** LOW
- **Best tools for this image:** Midjourney, DALL-E 3, Adobe Firefly
- **Recommended tool (top pick):** Midjourney v6.1
- **Full Midjourney Prompt:**
`ultra-realistic premium Indian medical aesthetics clinic scene, rose-gold and cream palette, calm luxury mood, South Asian subjects, natural skin texture, editorial medical photography, no logos, no text, no blood, 16:9 --v 6.1 --style raw --ar 16:9 --s 150`

text
- **Full DALL-E 3 Prompt:**
`Create a photorealistic website hero image for a premium plastic surgery and aesthetic dermatology clinic in Gurugram, India. Use rose-gold, cream and charcoal accents. Include South Asian patient representation, medical-professional environment, calm and trustworthy tone, clean composition with copy space, no gore, no visible brand logos, no text overlays.`

text
- **Style modifiers to use:** cinematic daylight, soft contrast, editorial healthcare realism, premium interior design
- **Negative prompts (if using SD/Flux):** deformed hands, extra fingers, waxy skin, blood, exposed surgery, watermark, logo, text
- **Post-generation editing needed:** Yes — retouch anatomy artifacts, enforce brand color grade, export responsive renditions
- **Commercial usage considerations:** Verify platform indemnity and do not depict real doctor identity via AI for clinical claims

#### Method D: EXISTING REAL PHOTOS FROM CLINIC
- **Can the clinic provide this?** no
- **What to request from Dr. Swikriti/clinic team:** RAW files, location/model consent, portrait + wide shots, uncluttered treatment rooms
- **Minimum quality threshold:** 24MP+, CR3/NEF/ARW RAW, ISO < 800, sharp eye focus, white balance card reference

### 6. WHERE IT'S USED IN CODE
- **Component/Page file(s):** Refer to image usage map and related route components (`app/about/page.tsx`, `components/category-page.tsx`, `app/procedures/[slug]/page.tsx`, `app/layout.tsx`)
- **JSX location:** Hero/section `<Image>` blocks and metadata icon declarations
- **How it's rendered:** Next.js `<Image>` for photos, metadata icon links for favicon assets
- **Current Next.js Image props in use:** Mostly `src`, `alt`, `width`, `height`, `className`, selective `priority`
- **Props that MUST be updated when replacing:** Add `sizes`, harmonize `quality`, set `placeholder`, `fetchPriority` for above-fold
- **Impact if wrong image used:** UX trust drop, weaker local SEO image relevance, potential compliance risk for misrepresentative medical visuals

### 7. REPLACEMENT PRIORITY & EFFORT
- **Business Priority:** LOW
- **SEO Priority:** LOW
- **Effort to Replace:** EASY
- **Estimated Time:** 0.5 day
- **Blocks Launch:** NO
- **Recommended Sprint:** Week 2
- **Dependencies:** Enable image optimization workflow, add per-procedure asset mapping, update metadata manifest

### 8. ADDITIONAL NOTES
- **Why current placeholder is problematic:** Generic or reused visuals reduce differentiation and credibility in a high-trust medical purchase journey
- **Competitor reference sites for visual inspiration:** Cadogan Clinic London, 111 Harley St, The Aesthetics Doctor, Kaya Skin Clinic India
- **Any legal/ethical considerations:** Before/after or identifiable patient imagery requires explicit consent and retention records
- **Notes specific to Indian medical aesthetics market:** Prioritize South Asian skin tones, realistic outcomes, family decision-maker trust cues, and Hindi-English discoverability


## IMAGE 13: icon-light-32x32.png

### 1. IDENTITY
- **Current Filename:** icon-light-32x32.png
- **Recommended Filename:** swi-infinity-favicon-light-32.png
- **File Path in Repo:** `public/icon-light-32x32.png`
- **Status:** KEEP & OPTIMISE

### 2. TECHNICAL SPECIFICATIONS
- **Required Format:** WebP primary + JPG fallback (PNG/SVG retained for favicon/logo utility assets)
- **Required Dimensions (px):** 32 × 32
- **Aspect Ratio:** 1:1
- **File Size Target:** <=20KB
- **Quality Setting:** WebP 78-82, JPG 72-78
- **DPI/PPI:** 72 PPI (web master), optional 150 PPI source archive
- **Color Space:** sRGB IEC61966-2.1
- **Responsive Breakpoint Sizes Needed:** 640w, 750w, 828w, 1080w, 1200w, 1920w
- **Priority Loading:** NO
- **Next.js Image Props Required:** `src`, `alt`, `width`, `height`, `sizes`, `quality`, `loading="lazy", decoding="async"`, `className`

### 3. CONTENT DESCRIPTION
- **Subject Matter:** Brand icon mark
- **Scene/Setting:** Flat brand canvas, transparent/export-safe
- **Mood & Tone:** Luxury, calm, clinical precision, high trust
- **People Required:** No
- **Medical Accuracy Required:** No
- **Props/Elements:** Brand mark only
- **Negative Constraints:** No blood, no open surgery, no sensational before/after splits, no unrealistic AI skin texture, no clutter
- **Composition Notes:** Maintain safe text overlay zone in top-left/top-center; keep subject on rule-of-thirds line
- **Brand Alignment:** Visual language should mirror high-end London/Paris aesthetic clinics while retaining Indian patient relatability

### 4. SEO & METADATA
- **Recommended Alt Text:** SWI Infinity icon light 32x32 png brand asset, Gurugram Haryana
- **Recommended Image Title:** SWI Infinity – icon-light-32x32.png
- **Recommended Image Caption:** Premium evidence-led aesthetic care at SWI Infinity, Gurugram
- **Filename SEO Value:** Descriptive keywords include service intent + brand + location, improving image discovery and topical relevance
- **Schema.org ImageObject Fields:**
  - name: SWI Infinity icon-light-32x32.png
  - description: Brand-consistent medical aesthetics image for SWI Infinity website
  - contentUrl: https://www.swiinfinity.com/icon-light-32x32.png
  - author: SWI Infinity Creative Team / Licensed Photographer
  - copyrightHolder: SWI Infinity
  - license: Commercial Website License
  - acquireLicensePage: https://www.swiinfinity.com/terms/
  - encodingFormat: image/png
  - width: 32
  - height: 32

### 5. PROCUREMENT — HOW TO GET THIS IMAGE

#### Method A: REAL PHOTOGRAPHY (Preferred for hero/doctor/clinic images)
- **Priority:** LOW
- **Why needed:** Authentic clinic visuals produce highest trust and consultation conversion in medical aesthetics
- **Shot list instructions:** Capture horizontal hero (16:9), medium portrait, detail close-up; soft key + bounce fill; retain negative space for headlines
- **Equipment recommendation:** Full-frame mirrorless, 35mm/50mm prime, 85mm for portrait, CPL filter, 2 softboxes
- **Post-processing notes:** True-to-skin color grade, reduce highlights, maintain natural skin texture, avoid over-smoothing

#### Method B: STOCK PHOTOGRAPHY
- **Priority:** LOW
- **Recommended platforms:** Shutterstock (medical variety), Getty (premium realism), Adobe Stock (legal clarity), iStock (budget)
- **Search queries to use:**
  - Query 1: luxury aesthetic clinic consultation india
  - Query 2: south asian female plastic surgeon clinic portrait
  - Query 3: dermatology treatment room premium interior gurugram
  - Query 4: cosmetic surgery consultation natural light india
  - Query 5: high end medical spa waiting area neutral tones
- **License type required:** RF commercial with model/property releases
- **Filters to apply:** Horizontal, >4000px, authentic skin texture, South Asian models, medical setting, copy space
- **Top 3 platforms to search first:** Shutterstock, Getty Images, Adobe Stock
- **What to avoid in results:** Western-only demographics, heavy glamour makeup, visible surgical gore, generic spa clichés

#### Method C: AI IMAGE GENERATION
- **Priority:** LOW
- **Best tools for this image:** Midjourney, DALL-E 3, Adobe Firefly
- **Recommended tool (top pick):** Midjourney v6.1
- **Full Midjourney Prompt:**
`ultra-realistic premium Indian medical aesthetics clinic scene, rose-gold and cream palette, calm luxury mood, South Asian subjects, natural skin texture, editorial medical photography, no logos, no text, no blood, 16:9 --v 6.1 --style raw --ar 16:9 --s 150`

text
- **Full DALL-E 3 Prompt:**
`Create a photorealistic website hero image for a premium plastic surgery and aesthetic dermatology clinic in Gurugram, India. Use rose-gold, cream and charcoal accents. Include South Asian patient representation, medical-professional environment, calm and trustworthy tone, clean composition with copy space, no gore, no visible brand logos, no text overlays.`

text
- **Style modifiers to use:** cinematic daylight, soft contrast, editorial healthcare realism, premium interior design
- **Negative prompts (if using SD/Flux):** deformed hands, extra fingers, waxy skin, blood, exposed surgery, watermark, logo, text
- **Post-generation editing needed:** Yes — retouch anatomy artifacts, enforce brand color grade, export responsive renditions
- **Commercial usage considerations:** Verify platform indemnity and do not depict real doctor identity via AI for clinical claims

#### Method D: EXISTING REAL PHOTOS FROM CLINIC
- **Can the clinic provide this?** no
- **What to request from Dr. Swikriti/clinic team:** RAW files, location/model consent, portrait + wide shots, uncluttered treatment rooms
- **Minimum quality threshold:** 24MP+, CR3/NEF/ARW RAW, ISO < 800, sharp eye focus, white balance card reference

### 6. WHERE IT'S USED IN CODE
- **Component/Page file(s):** Refer to image usage map and related route components (`app/about/page.tsx`, `components/category-page.tsx`, `app/procedures/[slug]/page.tsx`, `app/layout.tsx`)
- **JSX location:** Hero/section `<Image>` blocks and metadata icon declarations
- **How it's rendered:** Next.js `<Image>` for photos, metadata icon links for favicon assets
- **Current Next.js Image props in use:** Mostly `src`, `alt`, `width`, `height`, `className`, selective `priority`
- **Props that MUST be updated when replacing:** Add `sizes`, harmonize `quality`, set `placeholder`, `fetchPriority` for above-fold
- **Impact if wrong image used:** UX trust drop, weaker local SEO image relevance, potential compliance risk for misrepresentative medical visuals

### 7. REPLACEMENT PRIORITY & EFFORT
- **Business Priority:** LOW
- **SEO Priority:** LOW
- **Effort to Replace:** EASY
- **Estimated Time:** 0.5 day
- **Blocks Launch:** NO
- **Recommended Sprint:** Week 2
- **Dependencies:** Enable image optimization workflow, add per-procedure asset mapping, update metadata manifest

### 8. ADDITIONAL NOTES
- **Why current placeholder is problematic:** Generic or reused visuals reduce differentiation and credibility in a high-trust medical purchase journey
- **Competitor reference sites for visual inspiration:** Cadogan Clinic London, 111 Harley St, The Aesthetics Doctor, Kaya Skin Clinic India
- **Any legal/ethical considerations:** Before/after or identifiable patient imagery requires explicit consent and retention records
- **Notes specific to Indian medical aesthetics market:** Prioritize South Asian skin tones, realistic outcomes, family decision-maker trust cues, and Hindi-English discoverability


## IMAGE 14: icon.svg

### 1. IDENTITY
- **Current Filename:** icon.svg
- **Recommended Filename:** swi-infinity-favicon.svg
- **File Path in Repo:** `public/icon.svg`
- **Status:** KEEP & OPTIMISE

### 2. TECHNICAL SPECIFICATIONS
- **Required Format:** WebP primary + JPG fallback (PNG/SVG retained for favicon/logo utility assets)
- **Required Dimensions (px):** 512 × 512
- **Aspect Ratio:** 1:1
- **File Size Target:** <=20KB
- **Quality Setting:** WebP 78-82, JPG 72-78
- **DPI/PPI:** 72 PPI (web master), optional 150 PPI source archive
- **Color Space:** sRGB IEC61966-2.1
- **Responsive Breakpoint Sizes Needed:** 640w, 750w, 828w, 1080w, 1200w, 1920w
- **Priority Loading:** NO
- **Next.js Image Props Required:** `src`, `alt`, `width`, `height`, `sizes`, `quality`, `loading="lazy", decoding="async"`, `className`

### 3. CONTENT DESCRIPTION
- **Subject Matter:** Brand icon mark
- **Scene/Setting:** Flat brand canvas, transparent/export-safe
- **Mood & Tone:** Luxury, calm, clinical precision, high trust
- **People Required:** No
- **Medical Accuracy Required:** No
- **Props/Elements:** Brand mark only
- **Negative Constraints:** No blood, no open surgery, no sensational before/after splits, no unrealistic AI skin texture, no clutter
- **Composition Notes:** Maintain safe text overlay zone in top-left/top-center; keep subject on rule-of-thirds line
- **Brand Alignment:** Visual language should mirror high-end London/Paris aesthetic clinics while retaining Indian patient relatability

### 4. SEO & METADATA
- **Recommended Alt Text:** SWI Infinity icon svg brand asset, Gurugram Haryana
- **Recommended Image Title:** SWI Infinity – icon.svg
- **Recommended Image Caption:** Premium evidence-led aesthetic care at SWI Infinity, Gurugram
- **Filename SEO Value:** Descriptive keywords include service intent + brand + location, improving image discovery and topical relevance
- **Schema.org ImageObject Fields:**
  - name: SWI Infinity icon.svg
  - description: Brand-consistent medical aesthetics image for SWI Infinity website
  - contentUrl: https://www.swiinfinity.com/icon.svg
  - author: SWI Infinity Creative Team / Licensed Photographer
  - copyrightHolder: SWI Infinity
  - license: Commercial Website License
  - acquireLicensePage: https://www.swiinfinity.com/terms/
  - encodingFormat: image/svg+xml
  - width: 512
  - height: 512

### 5. PROCUREMENT — HOW TO GET THIS IMAGE

#### Method A: REAL PHOTOGRAPHY (Preferred for hero/doctor/clinic images)
- **Priority:** LOW
- **Why needed:** Authentic clinic visuals produce highest trust and consultation conversion in medical aesthetics
- **Shot list instructions:** Capture horizontal hero (16:9), medium portrait, detail close-up; soft key + bounce fill; retain negative space for headlines
- **Equipment recommendation:** Full-frame mirrorless, 35mm/50mm prime, 85mm for portrait, CPL filter, 2 softboxes
- **Post-processing notes:** True-to-skin color grade, reduce highlights, maintain natural skin texture, avoid over-smoothing

#### Method B: STOCK PHOTOGRAPHY
- **Priority:** LOW
- **Recommended platforms:** Shutterstock (medical variety), Getty (premium realism), Adobe Stock (legal clarity), iStock (budget)
- **Search queries to use:**
  - Query 1: luxury aesthetic clinic consultation india
  - Query 2: south asian female plastic surgeon clinic portrait
  - Query 3: dermatology treatment room premium interior gurugram
  - Query 4: cosmetic surgery consultation natural light india
  - Query 5: high end medical spa waiting area neutral tones
- **License type required:** RF commercial with model/property releases
- **Filters to apply:** Horizontal, >4000px, authentic skin texture, South Asian models, medical setting, copy space
- **Top 3 platforms to search first:** Shutterstock, Getty Images, Adobe Stock
- **What to avoid in results:** Western-only demographics, heavy glamour makeup, visible surgical gore, generic spa clichés

#### Method C: AI IMAGE GENERATION
- **Priority:** LOW
- **Best tools for this image:** Midjourney, DALL-E 3, Adobe Firefly
- **Recommended tool (top pick):** Midjourney v6.1
- **Full Midjourney Prompt:**
`ultra-realistic premium Indian medical aesthetics clinic scene, rose-gold and cream palette, calm luxury mood, South Asian subjects, natural skin texture, editorial medical photography, no logos, no text, no blood, 16:9 --v 6.1 --style raw --ar 16:9 --s 150`

text
- **Full DALL-E 3 Prompt:**
`Create a photorealistic website hero image for a premium plastic surgery and aesthetic dermatology clinic in Gurugram, India. Use rose-gold, cream and charcoal accents. Include South Asian patient representation, medical-professional environment, calm and trustworthy tone, clean composition with copy space, no gore, no visible brand logos, no text overlays.`

text
- **Style modifiers to use:** cinematic daylight, soft contrast, editorial healthcare realism, premium interior design
- **Negative prompts (if using SD/Flux):** deformed hands, extra fingers, waxy skin, blood, exposed surgery, watermark, logo, text
- **Post-generation editing needed:** Yes — retouch anatomy artifacts, enforce brand color grade, export responsive renditions
- **Commercial usage considerations:** Verify platform indemnity and do not depict real doctor identity via AI for clinical claims

#### Method D: EXISTING REAL PHOTOS FROM CLINIC
- **Can the clinic provide this?** no
- **What to request from Dr. Swikriti/clinic team:** RAW files, location/model consent, portrait + wide shots, uncluttered treatment rooms
- **Minimum quality threshold:** 24MP+, CR3/NEF/ARW RAW, ISO < 800, sharp eye focus, white balance card reference

### 6. WHERE IT'S USED IN CODE
- **Component/Page file(s):** Refer to image usage map and related route components (`app/about/page.tsx`, `components/category-page.tsx`, `app/procedures/[slug]/page.tsx`, `app/layout.tsx`)
- **JSX location:** Hero/section `<Image>` blocks and metadata icon declarations
- **How it's rendered:** Next.js `<Image>` for photos, metadata icon links for favicon assets
- **Current Next.js Image props in use:** Mostly `src`, `alt`, `width`, `height`, `className`, selective `priority`
- **Props that MUST be updated when replacing:** Add `sizes`, harmonize `quality`, set `placeholder`, `fetchPriority` for above-fold
- **Impact if wrong image used:** UX trust drop, weaker local SEO image relevance, potential compliance risk for misrepresentative medical visuals

### 7. REPLACEMENT PRIORITY & EFFORT
- **Business Priority:** LOW
- **SEO Priority:** LOW
- **Effort to Replace:** EASY
- **Estimated Time:** 0.5 day
- **Blocks Launch:** NO
- **Recommended Sprint:** Week 2
- **Dependencies:** Enable image optimization workflow, add per-procedure asset mapping, update metadata manifest

### 8. ADDITIONAL NOTES
- **Why current placeholder is problematic:** Generic or reused visuals reduce differentiation and credibility in a high-trust medical purchase journey
- **Competitor reference sites for visual inspiration:** Cadogan Clinic London, 111 Harley St, The Aesthetics Doctor, Kaya Skin Clinic India
- **Any legal/ethical considerations:** Before/after or identifiable patient imagery requires explicit consent and retention records
- **Notes specific to Indian medical aesthetics market:** Prioritize South Asian skin tones, realistic outcomes, family decision-maker trust cues, and Hindi-English discoverability


## IMAGE 15: placeholder-logo.png

### 1. IDENTITY
- **Current Filename:** placeholder-logo.png
- **Recommended Filename:** swi-infinity-wordmark-rose-gold.png
- **File Path in Repo:** `public/placeholder-logo.png`
- **Status:** REPLACE IMMEDIATELY

### 2. TECHNICAL SPECIFICATIONS
- **Required Format:** WebP primary + JPG fallback (PNG/SVG retained for favicon/logo utility assets)
- **Required Dimensions (px):** 1200 × 1200
- **Aspect Ratio:** 1:1
- **File Size Target:** <=20KB
- **Quality Setting:** WebP 78-82, JPG 72-78
- **DPI/PPI:** 72 PPI (web master), optional 150 PPI source archive
- **Color Space:** sRGB IEC61966-2.1
- **Responsive Breakpoint Sizes Needed:** 640w, 750w, 828w, 1080w, 1200w, 1920w
- **Priority Loading:** NO
- **Next.js Image Props Required:** `src`, `alt`, `width`, `height`, `sizes`, `quality`, `loading="lazy", decoding="async"`, `className`

### 3. CONTENT DESCRIPTION
- **Subject Matter:** Temporary placeholder graphic
- **Scene/Setting:** Flat brand canvas, transparent/export-safe
- **Mood & Tone:** Luxury, calm, clinical precision, high trust
- **People Required:** No
- **Medical Accuracy Required:** No
- **Props/Elements:** Brand mark only
- **Negative Constraints:** No blood, no open surgery, no sensational before/after splits, no unrealistic AI skin texture, no clutter
- **Composition Notes:** Maintain safe text overlay zone in top-left/top-center; keep subject on rule-of-thirds line
- **Brand Alignment:** Visual language should mirror high-end London/Paris aesthetic clinics while retaining Indian patient relatability

### 4. SEO & METADATA
- **Recommended Alt Text:** SWI Infinity placeholder logo png brand asset, Gurugram Haryana
- **Recommended Image Title:** SWI Infinity – placeholder-logo.png
- **Recommended Image Caption:** Premium evidence-led aesthetic care at SWI Infinity, Gurugram
- **Filename SEO Value:** Descriptive keywords include service intent + brand + location, improving image discovery and topical relevance
- **Schema.org ImageObject Fields:**
  - name: SWI Infinity placeholder-logo.png
  - description: Brand-consistent medical aesthetics image for SWI Infinity website
  - contentUrl: https://www.swiinfinity.com/placeholder-logo.png
  - author: SWI Infinity Creative Team / Licensed Photographer
  - copyrightHolder: SWI Infinity
  - license: Commercial Website License
  - acquireLicensePage: https://www.swiinfinity.com/terms/
  - encodingFormat: image/png
  - width: 1200
  - height: 1200

### 5. PROCUREMENT — HOW TO GET THIS IMAGE

#### Method A: REAL PHOTOGRAPHY (Preferred for hero/doctor/clinic images)
- **Priority:** LOW
- **Why needed:** Authentic clinic visuals produce highest trust and consultation conversion in medical aesthetics
- **Shot list instructions:** Capture horizontal hero (16:9), medium portrait, detail close-up; soft key + bounce fill; retain negative space for headlines
- **Equipment recommendation:** Full-frame mirrorless, 35mm/50mm prime, 85mm for portrait, CPL filter, 2 softboxes
- **Post-processing notes:** True-to-skin color grade, reduce highlights, maintain natural skin texture, avoid over-smoothing

#### Method B: STOCK PHOTOGRAPHY
- **Priority:** LOW
- **Recommended platforms:** Shutterstock (medical variety), Getty (premium realism), Adobe Stock (legal clarity), iStock (budget)
- **Search queries to use:**
  - Query 1: luxury aesthetic clinic consultation india
  - Query 2: south asian female plastic surgeon clinic portrait
  - Query 3: dermatology treatment room premium interior gurugram
  - Query 4: cosmetic surgery consultation natural light india
  - Query 5: high end medical spa waiting area neutral tones
- **License type required:** RF commercial with model/property releases
- **Filters to apply:** Horizontal, >4000px, authentic skin texture, South Asian models, medical setting, copy space
- **Top 3 platforms to search first:** Shutterstock, Getty Images, Adobe Stock
- **What to avoid in results:** Western-only demographics, heavy glamour makeup, visible surgical gore, generic spa clichés

#### Method C: AI IMAGE GENERATION
- **Priority:** MEDIUM
- **Best tools for this image:** Midjourney, DALL-E 3, Adobe Firefly
- **Recommended tool (top pick):** Midjourney v6.1
- **Full Midjourney Prompt:**
`ultra-realistic premium Indian medical aesthetics clinic scene, rose-gold and cream palette, calm luxury mood, South Asian subjects, natural skin texture, editorial medical photography, no logos, no text, no blood, 16:9 --v 6.1 --style raw --ar 16:9 --s 150`

text
- **Full DALL-E 3 Prompt:**
`Create a photorealistic website hero image for a premium plastic surgery and aesthetic dermatology clinic in Gurugram, India. Use rose-gold, cream and charcoal accents. Include South Asian patient representation, medical-professional environment, calm and trustworthy tone, clean composition with copy space, no gore, no visible brand logos, no text overlays.`

text
- **Style modifiers to use:** cinematic daylight, soft contrast, editorial healthcare realism, premium interior design
- **Negative prompts (if using SD/Flux):** deformed hands, extra fingers, waxy skin, blood, exposed surgery, watermark, logo, text
- **Post-generation editing needed:** Yes — retouch anatomy artifacts, enforce brand color grade, export responsive renditions
- **Commercial usage considerations:** Verify platform indemnity and do not depict real doctor identity via AI for clinical claims

#### Method D: EXISTING REAL PHOTOS FROM CLINIC
- **Can the clinic provide this?** no
- **What to request from Dr. Swikriti/clinic team:** RAW files, location/model consent, portrait + wide shots, uncluttered treatment rooms
- **Minimum quality threshold:** 24MP+, CR3/NEF/ARW RAW, ISO < 800, sharp eye focus, white balance card reference

### 6. WHERE IT'S USED IN CODE
- **Component/Page file(s):** Refer to image usage map and related route components (`app/about/page.tsx`, `components/category-page.tsx`, `app/procedures/[slug]/page.tsx`, `app/layout.tsx`)
- **JSX location:** Hero/section `<Image>` blocks and metadata icon declarations
- **How it's rendered:** Next.js `<Image>` for photos, metadata icon links for favicon assets
- **Current Next.js Image props in use:** Mostly `src`, `alt`, `width`, `height`, `className`, selective `priority`
- **Props that MUST be updated when replacing:** Add `sizes`, harmonize `quality`, set `placeholder`, `fetchPriority` for above-fold
- **Impact if wrong image used:** UX trust drop, weaker local SEO image relevance, potential compliance risk for misrepresentative medical visuals

### 7. REPLACEMENT PRIORITY & EFFORT
- **Business Priority:** LOW
- **SEO Priority:** LOW
- **Effort to Replace:** EASY
- **Estimated Time:** 1 day
- **Blocks Launch:** YES
- **Recommended Sprint:** Week 1
- **Dependencies:** Enable image optimization workflow, add per-procedure asset mapping, update metadata manifest

### 8. ADDITIONAL NOTES
- **Why current placeholder is problematic:** Generic or reused visuals reduce differentiation and credibility in a high-trust medical purchase journey
- **Competitor reference sites for visual inspiration:** Cadogan Clinic London, 111 Harley St, The Aesthetics Doctor, Kaya Skin Clinic India
- **Any legal/ethical considerations:** Before/after or identifiable patient imagery requires explicit consent and retention records
- **Notes specific to Indian medical aesthetics market:** Prioritize South Asian skin tones, realistic outcomes, family decision-maker trust cues, and Hindi-English discoverability


## IMAGE 16: placeholder-logo.svg

### 1. IDENTITY
- **Current Filename:** placeholder-logo.svg
- **Recommended Filename:** swi-infinity-wordmark-rose-gold.svg
- **File Path in Repo:** `public/placeholder-logo.svg`
- **Status:** REPLACE IMMEDIATELY

### 2. TECHNICAL SPECIFICATIONS
- **Required Format:** WebP primary + JPG fallback (PNG/SVG retained for favicon/logo utility assets)
- **Required Dimensions (px):** 1200 × 1200
- **Aspect Ratio:** 1:1
- **File Size Target:** <=20KB
- **Quality Setting:** WebP 78-82, JPG 72-78
- **DPI/PPI:** 72 PPI (web master), optional 150 PPI source archive
- **Color Space:** sRGB IEC61966-2.1
- **Responsive Breakpoint Sizes Needed:** 640w, 750w, 828w, 1080w, 1200w, 1920w
- **Priority Loading:** NO
- **Next.js Image Props Required:** `src`, `alt`, `width`, `height`, `sizes`, `quality`, `loading="lazy", decoding="async"`, `className`

### 3. CONTENT DESCRIPTION
- **Subject Matter:** Temporary placeholder graphic
- **Scene/Setting:** Flat brand canvas, transparent/export-safe
- **Mood & Tone:** Luxury, calm, clinical precision, high trust
- **People Required:** No
- **Medical Accuracy Required:** No
- **Props/Elements:** Brand mark only
- **Negative Constraints:** No blood, no open surgery, no sensational before/after splits, no unrealistic AI skin texture, no clutter
- **Composition Notes:** Maintain safe text overlay zone in top-left/top-center; keep subject on rule-of-thirds line
- **Brand Alignment:** Visual language should mirror high-end London/Paris aesthetic clinics while retaining Indian patient relatability

### 4. SEO & METADATA
- **Recommended Alt Text:** SWI Infinity placeholder logo svg brand asset, Gurugram Haryana
- **Recommended Image Title:** SWI Infinity – placeholder-logo.svg
- **Recommended Image Caption:** Premium evidence-led aesthetic care at SWI Infinity, Gurugram
- **Filename SEO Value:** Descriptive keywords include service intent + brand + location, improving image discovery and topical relevance
- **Schema.org ImageObject Fields:**
  - name: SWI Infinity placeholder-logo.svg
  - description: Brand-consistent medical aesthetics image for SWI Infinity website
  - contentUrl: https://www.swiinfinity.com/placeholder-logo.svg
  - author: SWI Infinity Creative Team / Licensed Photographer
  - copyrightHolder: SWI Infinity
  - license: Commercial Website License
  - acquireLicensePage: https://www.swiinfinity.com/terms/
  - encodingFormat: image/svg+xml
  - width: 1200
  - height: 1200

### 5. PROCUREMENT — HOW TO GET THIS IMAGE

#### Method A: REAL PHOTOGRAPHY (Preferred for hero/doctor/clinic images)
- **Priority:** LOW
- **Why needed:** Authentic clinic visuals produce highest trust and consultation conversion in medical aesthetics
- **Shot list instructions:** Capture horizontal hero (16:9), medium portrait, detail close-up; soft key + bounce fill; retain negative space for headlines
- **Equipment recommendation:** Full-frame mirrorless, 35mm/50mm prime, 85mm for portrait, CPL filter, 2 softboxes
- **Post-processing notes:** True-to-skin color grade, reduce highlights, maintain natural skin texture, avoid over-smoothing

#### Method B: STOCK PHOTOGRAPHY
- **Priority:** LOW
- **Recommended platforms:** Shutterstock (medical variety), Getty (premium realism), Adobe Stock (legal clarity), iStock (budget)
- **Search queries to use:**
  - Query 1: luxury aesthetic clinic consultation india
  - Query 2: south asian female plastic surgeon clinic portrait
  - Query 3: dermatology treatment room premium interior gurugram
  - Query 4: cosmetic surgery consultation natural light india
  - Query 5: high end medical spa waiting area neutral tones
- **License type required:** RF commercial with model/property releases
- **Filters to apply:** Horizontal, >4000px, authentic skin texture, South Asian models, medical setting, copy space
- **Top 3 platforms to search first:** Shutterstock, Getty Images, Adobe Stock
- **What to avoid in results:** Western-only demographics, heavy glamour makeup, visible surgical gore, generic spa clichés

#### Method C: AI IMAGE GENERATION
- **Priority:** MEDIUM
- **Best tools for this image:** Midjourney, DALL-E 3, Adobe Firefly
- **Recommended tool (top pick):** Midjourney v6.1
- **Full Midjourney Prompt:**
`ultra-realistic premium Indian medical aesthetics clinic scene, rose-gold and cream palette, calm luxury mood, South Asian subjects, natural skin texture, editorial medical photography, no logos, no text, no blood, 16:9 --v 6.1 --style raw --ar 16:9 --s 150`

text
- **Full DALL-E 3 Prompt:**
`Create a photorealistic website hero image for a premium plastic surgery and aesthetic dermatology clinic in Gurugram, India. Use rose-gold, cream and charcoal accents. Include South Asian patient representation, medical-professional environment, calm and trustworthy tone, clean composition with copy space, no gore, no visible brand logos, no text overlays.`

text
- **Style modifiers to use:** cinematic daylight, soft contrast, editorial healthcare realism, premium interior design
- **Negative prompts (if using SD/Flux):** deformed hands, extra fingers, waxy skin, blood, exposed surgery, watermark, logo, text
- **Post-generation editing needed:** Yes — retouch anatomy artifacts, enforce brand color grade, export responsive renditions
- **Commercial usage considerations:** Verify platform indemnity and do not depict real doctor identity via AI for clinical claims

#### Method D: EXISTING REAL PHOTOS FROM CLINIC
- **Can the clinic provide this?** no
- **What to request from Dr. Swikriti/clinic team:** RAW files, location/model consent, portrait + wide shots, uncluttered treatment rooms
- **Minimum quality threshold:** 24MP+, CR3/NEF/ARW RAW, ISO < 800, sharp eye focus, white balance card reference

### 6. WHERE IT'S USED IN CODE
- **Component/Page file(s):** Refer to image usage map and related route components (`app/about/page.tsx`, `components/category-page.tsx`, `app/procedures/[slug]/page.tsx`, `app/layout.tsx`)
- **JSX location:** Hero/section `<Image>` blocks and metadata icon declarations
- **How it's rendered:** Next.js `<Image>` for photos, metadata icon links for favicon assets
- **Current Next.js Image props in use:** Mostly `src`, `alt`, `width`, `height`, `className`, selective `priority`
- **Props that MUST be updated when replacing:** Add `sizes`, harmonize `quality`, set `placeholder`, `fetchPriority` for above-fold
- **Impact if wrong image used:** UX trust drop, weaker local SEO image relevance, potential compliance risk for misrepresentative medical visuals

### 7. REPLACEMENT PRIORITY & EFFORT
- **Business Priority:** LOW
- **SEO Priority:** LOW
- **Effort to Replace:** EASY
- **Estimated Time:** 1 day
- **Blocks Launch:** YES
- **Recommended Sprint:** Week 1
- **Dependencies:** Enable image optimization workflow, add per-procedure asset mapping, update metadata manifest

### 8. ADDITIONAL NOTES
- **Why current placeholder is problematic:** Generic or reused visuals reduce differentiation and credibility in a high-trust medical purchase journey
- **Competitor reference sites for visual inspiration:** Cadogan Clinic London, 111 Harley St, The Aesthetics Doctor, Kaya Skin Clinic India
- **Any legal/ethical considerations:** Before/after or identifiable patient imagery requires explicit consent and retention records
- **Notes specific to Indian medical aesthetics market:** Prioritize South Asian skin tones, realistic outcomes, family decision-maker trust cues, and Hindi-English discoverability


## IMAGE 17: placeholder-user.jpg

### 1. IDENTITY
- **Current Filename:** placeholder-user.jpg
- **Recommended Filename:** swi-infinity-default-doctor-avatar.jpg
- **File Path in Repo:** `public/placeholder-user.jpg`
- **Status:** REPLACE SOON

### 2. TECHNICAL SPECIFICATIONS
- **Required Format:** WebP primary + JPG fallback (PNG/SVG retained for favicon/logo utility assets)
- **Required Dimensions (px):** 1200 × 1200
- **Aspect Ratio:** 1:1
- **File Size Target:** <=20KB
- **Quality Setting:** WebP 78-82, JPG 72-78
- **DPI/PPI:** 72 PPI (web master), optional 150 PPI source archive
- **Color Space:** sRGB IEC61966-2.1
- **Responsive Breakpoint Sizes Needed:** 640w, 750w, 828w, 1080w, 1200w, 1920w
- **Priority Loading:** NO
- **Next.js Image Props Required:** `src`, `alt`, `width`, `height`, `sizes`, `quality`, `loading="lazy", decoding="async"`, `className`

### 3. CONTENT DESCRIPTION
- **Subject Matter:** Temporary placeholder graphic
- **Scene/Setting:** Flat brand canvas, transparent/export-safe
- **Mood & Tone:** Luxury, calm, clinical precision, high trust
- **People Required:** No
- **Medical Accuracy Required:** No
- **Props/Elements:** Brand mark only
- **Negative Constraints:** No blood, no open surgery, no sensational before/after splits, no unrealistic AI skin texture, no clutter
- **Composition Notes:** Maintain safe text overlay zone in top-left/top-center; keep subject on rule-of-thirds line
- **Brand Alignment:** Visual language should mirror high-end London/Paris aesthetic clinics while retaining Indian patient relatability

### 4. SEO & METADATA
- **Recommended Alt Text:** SWI Infinity placeholder user jpg brand asset, Gurugram Haryana
- **Recommended Image Title:** SWI Infinity – placeholder-user.jpg
- **Recommended Image Caption:** Premium evidence-led aesthetic care at SWI Infinity, Gurugram
- **Filename SEO Value:** Descriptive keywords include service intent + brand + location, improving image discovery and topical relevance
- **Schema.org ImageObject Fields:**
  - name: SWI Infinity placeholder-user.jpg
  - description: Brand-consistent medical aesthetics image for SWI Infinity website
  - contentUrl: https://www.swiinfinity.com/placeholder-user.jpg
  - author: SWI Infinity Creative Team / Licensed Photographer
  - copyrightHolder: SWI Infinity
  - license: Commercial Website License
  - acquireLicensePage: https://www.swiinfinity.com/terms/
  - encodingFormat: image/jpeg
  - width: 1200
  - height: 1200

### 5. PROCUREMENT — HOW TO GET THIS IMAGE

#### Method A: REAL PHOTOGRAPHY (Preferred for hero/doctor/clinic images)
- **Priority:** LOW
- **Why needed:** Authentic clinic visuals produce highest trust and consultation conversion in medical aesthetics
- **Shot list instructions:** Capture horizontal hero (16:9), medium portrait, detail close-up; soft key + bounce fill; retain negative space for headlines
- **Equipment recommendation:** Full-frame mirrorless, 35mm/50mm prime, 85mm for portrait, CPL filter, 2 softboxes
- **Post-processing notes:** True-to-skin color grade, reduce highlights, maintain natural skin texture, avoid over-smoothing

#### Method B: STOCK PHOTOGRAPHY
- **Priority:** LOW
- **Recommended platforms:** Shutterstock (medical variety), Getty (premium realism), Adobe Stock (legal clarity), iStock (budget)
- **Search queries to use:**
  - Query 1: luxury aesthetic clinic consultation india
  - Query 2: south asian female plastic surgeon clinic portrait
  - Query 3: dermatology treatment room premium interior gurugram
  - Query 4: cosmetic surgery consultation natural light india
  - Query 5: high end medical spa waiting area neutral tones
- **License type required:** RF commercial with model/property releases
- **Filters to apply:** Horizontal, >4000px, authentic skin texture, South Asian models, medical setting, copy space
- **Top 3 platforms to search first:** Shutterstock, Getty Images, Adobe Stock
- **What to avoid in results:** Western-only demographics, heavy glamour makeup, visible surgical gore, generic spa clichés

#### Method C: AI IMAGE GENERATION
- **Priority:** MEDIUM
- **Best tools for this image:** Midjourney, DALL-E 3, Adobe Firefly
- **Recommended tool (top pick):** Midjourney v6.1
- **Full Midjourney Prompt:**
`ultra-realistic premium Indian medical aesthetics clinic scene, rose-gold and cream palette, calm luxury mood, South Asian subjects, natural skin texture, editorial medical photography, no logos, no text, no blood, 16:9 --v 6.1 --style raw --ar 16:9 --s 150`

text
- **Full DALL-E 3 Prompt:**
`Create a photorealistic website hero image for a premium plastic surgery and aesthetic dermatology clinic in Gurugram, India. Use rose-gold, cream and charcoal accents. Include South Asian patient representation, medical-professional environment, calm and trustworthy tone, clean composition with copy space, no gore, no visible brand logos, no text overlays.`

text
- **Style modifiers to use:** cinematic daylight, soft contrast, editorial healthcare realism, premium interior design
- **Negative prompts (if using SD/Flux):** deformed hands, extra fingers, waxy skin, blood, exposed surgery, watermark, logo, text
- **Post-generation editing needed:** Yes — retouch anatomy artifacts, enforce brand color grade, export responsive renditions
- **Commercial usage considerations:** Verify platform indemnity and do not depict real doctor identity via AI for clinical claims

#### Method D: EXISTING REAL PHOTOS FROM CLINIC
- **Can the clinic provide this?** no
- **What to request from Dr. Swikriti/clinic team:** RAW files, location/model consent, portrait + wide shots, uncluttered treatment rooms
- **Minimum quality threshold:** 24MP+, CR3/NEF/ARW RAW, ISO < 800, sharp eye focus, white balance card reference

### 6. WHERE IT'S USED IN CODE
- **Component/Page file(s):** Refer to image usage map and related route components (`app/about/page.tsx`, `components/category-page.tsx`, `app/procedures/[slug]/page.tsx`, `app/layout.tsx`)
- **JSX location:** Hero/section `<Image>` blocks and metadata icon declarations
- **How it's rendered:** Next.js `<Image>` for photos, metadata icon links for favicon assets
- **Current Next.js Image props in use:** Mostly `src`, `alt`, `width`, `height`, `className`, selective `priority`
- **Props that MUST be updated when replacing:** Add `sizes`, harmonize `quality`, set `placeholder`, `fetchPriority` for above-fold
- **Impact if wrong image used:** UX trust drop, weaker local SEO image relevance, potential compliance risk for misrepresentative medical visuals

### 7. REPLACEMENT PRIORITY & EFFORT
- **Business Priority:** LOW
- **SEO Priority:** LOW
- **Effort to Replace:** EASY
- **Estimated Time:** 0.5 day
- **Blocks Launch:** NO
- **Recommended Sprint:** Week 2
- **Dependencies:** Enable image optimization workflow, add per-procedure asset mapping, update metadata manifest

### 8. ADDITIONAL NOTES
- **Why current placeholder is problematic:** Generic or reused visuals reduce differentiation and credibility in a high-trust medical purchase journey
- **Competitor reference sites for visual inspiration:** Cadogan Clinic London, 111 Harley St, The Aesthetics Doctor, Kaya Skin Clinic India
- **Any legal/ethical considerations:** Before/after or identifiable patient imagery requires explicit consent and retention records
- **Notes specific to Indian medical aesthetics market:** Prioritize South Asian skin tones, realistic outcomes, family decision-maker trust cues, and Hindi-English discoverability


## IMAGE 18: placeholder.jpg

### 1. IDENTITY
- **Current Filename:** placeholder.jpg
- **Recommended Filename:** swi-infinity-default-image-placeholder.jpg
- **File Path in Repo:** `public/placeholder.jpg`
- **Status:** REPLACE SOON

### 2. TECHNICAL SPECIFICATIONS
- **Required Format:** WebP primary + JPG fallback (PNG/SVG retained for favicon/logo utility assets)
- **Required Dimensions (px):** 1200 × 1200
- **Aspect Ratio:** 1:1
- **File Size Target:** <=20KB
- **Quality Setting:** WebP 78-82, JPG 72-78
- **DPI/PPI:** 72 PPI (web master), optional 150 PPI source archive
- **Color Space:** sRGB IEC61966-2.1
- **Responsive Breakpoint Sizes Needed:** 640w, 750w, 828w, 1080w, 1200w, 1920w
- **Priority Loading:** NO
- **Next.js Image Props Required:** `src`, `alt`, `width`, `height`, `sizes`, `quality`, `loading="lazy", decoding="async"`, `className`

### 3. CONTENT DESCRIPTION
- **Subject Matter:** Temporary placeholder graphic
- **Scene/Setting:** Flat brand canvas, transparent/export-safe
- **Mood & Tone:** Luxury, calm, clinical precision, high trust
- **People Required:** No
- **Medical Accuracy Required:** No
- **Props/Elements:** Brand mark only
- **Negative Constraints:** No blood, no open surgery, no sensational before/after splits, no unrealistic AI skin texture, no clutter
- **Composition Notes:** Maintain safe text overlay zone in top-left/top-center; keep subject on rule-of-thirds line
- **Brand Alignment:** Visual language should mirror high-end London/Paris aesthetic clinics while retaining Indian patient relatability

### 4. SEO & METADATA
- **Recommended Alt Text:** SWI Infinity placeholder jpg brand asset, Gurugram Haryana
- **Recommended Image Title:** SWI Infinity – placeholder.jpg
- **Recommended Image Caption:** Premium evidence-led aesthetic care at SWI Infinity, Gurugram
- **Filename SEO Value:** Descriptive keywords include service intent + brand + location, improving image discovery and topical relevance
- **Schema.org ImageObject Fields:**
  - name: SWI Infinity placeholder.jpg
  - description: Brand-consistent medical aesthetics image for SWI Infinity website
  - contentUrl: https://www.swiinfinity.com/placeholder.jpg
  - author: SWI Infinity Creative Team / Licensed Photographer
  - copyrightHolder: SWI Infinity
  - license: Commercial Website License
  - acquireLicensePage: https://www.swiinfinity.com/terms/
  - encodingFormat: image/jpeg
  - width: 1200
  - height: 1200

### 5. PROCUREMENT — HOW TO GET THIS IMAGE

#### Method A: REAL PHOTOGRAPHY (Preferred for hero/doctor/clinic images)
- **Priority:** LOW
- **Why needed:** Authentic clinic visuals produce highest trust and consultation conversion in medical aesthetics
- **Shot list instructions:** Capture horizontal hero (16:9), medium portrait, detail close-up; soft key + bounce fill; retain negative space for headlines
- **Equipment recommendation:** Full-frame mirrorless, 35mm/50mm prime, 85mm for portrait, CPL filter, 2 softboxes
- **Post-processing notes:** True-to-skin color grade, reduce highlights, maintain natural skin texture, avoid over-smoothing

#### Method B: STOCK PHOTOGRAPHY
- **Priority:** LOW
- **Recommended platforms:** Shutterstock (medical variety), Getty (premium realism), Adobe Stock (legal clarity), iStock (budget)
- **Search queries to use:**
  - Query 1: luxury aesthetic clinic consultation india
  - Query 2: south asian female plastic surgeon clinic portrait
  - Query 3: dermatology treatment room premium interior gurugram
  - Query 4: cosmetic surgery consultation natural light india
  - Query 5: high end medical spa waiting area neutral tones
- **License type required:** RF commercial with model/property releases
- **Filters to apply:** Horizontal, >4000px, authentic skin texture, South Asian models, medical setting, copy space
- **Top 3 platforms to search first:** Shutterstock, Getty Images, Adobe Stock
- **What to avoid in results:** Western-only demographics, heavy glamour makeup, visible surgical gore, generic spa clichés

#### Method C: AI IMAGE GENERATION
- **Priority:** MEDIUM
- **Best tools for this image:** Midjourney, DALL-E 3, Adobe Firefly
- **Recommended tool (top pick):** Midjourney v6.1
- **Full Midjourney Prompt:**
`ultra-realistic premium Indian medical aesthetics clinic scene, rose-gold and cream palette, calm luxury mood, South Asian subjects, natural skin texture, editorial medical photography, no logos, no text, no blood, 16:9 --v 6.1 --style raw --ar 16:9 --s 150`

text
- **Full DALL-E 3 Prompt:**
`Create a photorealistic website hero image for a premium plastic surgery and aesthetic dermatology clinic in Gurugram, India. Use rose-gold, cream and charcoal accents. Include South Asian patient representation, medical-professional environment, calm and trustworthy tone, clean composition with copy space, no gore, no visible brand logos, no text overlays.`

text
- **Style modifiers to use:** cinematic daylight, soft contrast, editorial healthcare realism, premium interior design
- **Negative prompts (if using SD/Flux):** deformed hands, extra fingers, waxy skin, blood, exposed surgery, watermark, logo, text
- **Post-generation editing needed:** Yes — retouch anatomy artifacts, enforce brand color grade, export responsive renditions
- **Commercial usage considerations:** Verify platform indemnity and do not depict real doctor identity via AI for clinical claims

#### Method D: EXISTING REAL PHOTOS FROM CLINIC
- **Can the clinic provide this?** no
- **What to request from Dr. Swikriti/clinic team:** RAW files, location/model consent, portrait + wide shots, uncluttered treatment rooms
- **Minimum quality threshold:** 24MP+, CR3/NEF/ARW RAW, ISO < 800, sharp eye focus, white balance card reference

### 6. WHERE IT'S USED IN CODE
- **Component/Page file(s):** Refer to image usage map and related route components (`app/about/page.tsx`, `components/category-page.tsx`, `app/procedures/[slug]/page.tsx`, `app/layout.tsx`)
- **JSX location:** Hero/section `<Image>` blocks and metadata icon declarations
- **How it's rendered:** Next.js `<Image>` for photos, metadata icon links for favicon assets
- **Current Next.js Image props in use:** Mostly `src`, `alt`, `width`, `height`, `className`, selective `priority`
- **Props that MUST be updated when replacing:** Add `sizes`, harmonize `quality`, set `placeholder`, `fetchPriority` for above-fold
- **Impact if wrong image used:** UX trust drop, weaker local SEO image relevance, potential compliance risk for misrepresentative medical visuals

### 7. REPLACEMENT PRIORITY & EFFORT
- **Business Priority:** LOW
- **SEO Priority:** LOW
- **Effort to Replace:** EASY
- **Estimated Time:** 0.5 day
- **Blocks Launch:** NO
- **Recommended Sprint:** Week 2
- **Dependencies:** Enable image optimization workflow, add per-procedure asset mapping, update metadata manifest

### 8. ADDITIONAL NOTES
- **Why current placeholder is problematic:** Generic or reused visuals reduce differentiation and credibility in a high-trust medical purchase journey
- **Competitor reference sites for visual inspiration:** Cadogan Clinic London, 111 Harley St, The Aesthetics Doctor, Kaya Skin Clinic India
- **Any legal/ethical considerations:** Before/after or identifiable patient imagery requires explicit consent and retention records
- **Notes specific to Indian medical aesthetics market:** Prioritize South Asian skin tones, realistic outcomes, family decision-maker trust cues, and Hindi-English discoverability


## IMAGE 19: placeholder.svg

### 1. IDENTITY
- **Current Filename:** placeholder.svg
- **Recommended Filename:** swi-infinity-default-image-placeholder.svg
- **File Path in Repo:** `public/placeholder.svg`
- **Status:** REPLACE SOON

### 2. TECHNICAL SPECIFICATIONS
- **Required Format:** WebP primary + JPG fallback (PNG/SVG retained for favicon/logo utility assets)
- **Required Dimensions (px):** 1200 × 1200
- **Aspect Ratio:** 1:1
- **File Size Target:** <=20KB
- **Quality Setting:** WebP 78-82, JPG 72-78
- **DPI/PPI:** 72 PPI (web master), optional 150 PPI source archive
- **Color Space:** sRGB IEC61966-2.1
- **Responsive Breakpoint Sizes Needed:** 640w, 750w, 828w, 1080w, 1200w, 1920w
- **Priority Loading:** NO
- **Next.js Image Props Required:** `src`, `alt`, `width`, `height`, `sizes`, `quality`, `loading="lazy", decoding="async"`, `className`

### 3. CONTENT DESCRIPTION
- **Subject Matter:** Temporary placeholder graphic
- **Scene/Setting:** Flat brand canvas, transparent/export-safe
- **Mood & Tone:** Luxury, calm, clinical precision, high trust
- **People Required:** No
- **Medical Accuracy Required:** No
- **Props/Elements:** Brand mark only
- **Negative Constraints:** No blood, no open surgery, no sensational before/after splits, no unrealistic AI skin texture, no clutter
- **Composition Notes:** Maintain safe text overlay zone in top-left/top-center; keep subject on rule-of-thirds line
- **Brand Alignment:** Visual language should mirror high-end London/Paris aesthetic clinics while retaining Indian patient relatability

### 4. SEO & METADATA
- **Recommended Alt Text:** SWI Infinity placeholder svg brand asset, Gurugram Haryana
- **Recommended Image Title:** SWI Infinity – placeholder.svg
- **Recommended Image Caption:** Premium evidence-led aesthetic care at SWI Infinity, Gurugram
- **Filename SEO Value:** Descriptive keywords include service intent + brand + location, improving image discovery and topical relevance
- **Schema.org ImageObject Fields:**
  - name: SWI Infinity placeholder.svg
  - description: Brand-consistent medical aesthetics image for SWI Infinity website
  - contentUrl: https://www.swiinfinity.com/placeholder.svg
  - author: SWI Infinity Creative Team / Licensed Photographer
  - copyrightHolder: SWI Infinity
  - license: Commercial Website License
  - acquireLicensePage: https://www.swiinfinity.com/terms/
  - encodingFormat: image/svg+xml
  - width: 1200
  - height: 1200

### 5. PROCUREMENT — HOW TO GET THIS IMAGE

#### Method A: REAL PHOTOGRAPHY (Preferred for hero/doctor/clinic images)
- **Priority:** LOW
- **Why needed:** Authentic clinic visuals produce highest trust and consultation conversion in medical aesthetics
- **Shot list instructions:** Capture horizontal hero (16:9), medium portrait, detail close-up; soft key + bounce fill; retain negative space for headlines
- **Equipment recommendation:** Full-frame mirrorless, 35mm/50mm prime, 85mm for portrait, CPL filter, 2 softboxes
- **Post-processing notes:** True-to-skin color grade, reduce highlights, maintain natural skin texture, avoid over-smoothing

#### Method B: STOCK PHOTOGRAPHY
- **Priority:** LOW
- **Recommended platforms:** Shutterstock (medical variety), Getty (premium realism), Adobe Stock (legal clarity), iStock (budget)
- **Search queries to use:**
  - Query 1: luxury aesthetic clinic consultation india
  - Query 2: south asian female plastic surgeon clinic portrait
  - Query 3: dermatology treatment room premium interior gurugram
  - Query 4: cosmetic surgery consultation natural light india
  - Query 5: high end medical spa waiting area neutral tones
- **License type required:** RF commercial with model/property releases
- **Filters to apply:** Horizontal, >4000px, authentic skin texture, South Asian models, medical setting, copy space
- **Top 3 platforms to search first:** Shutterstock, Getty Images, Adobe Stock
- **What to avoid in results:** Western-only demographics, heavy glamour makeup, visible surgical gore, generic spa clichés

#### Method C: AI IMAGE GENERATION
- **Priority:** MEDIUM
- **Best tools for this image:** Midjourney, DALL-E 3, Adobe Firefly
- **Recommended tool (top pick):** Midjourney v6.1
- **Full Midjourney Prompt:**
`ultra-realistic premium Indian medical aesthetics clinic scene, rose-gold and cream palette, calm luxury mood, South Asian subjects, natural skin texture, editorial medical photography, no logos, no text, no blood, 16:9 --v 6.1 --style raw --ar 16:9 --s 150`

text
- **Full DALL-E 3 Prompt:**
`Create a photorealistic website hero image for a premium plastic surgery and aesthetic dermatology clinic in Gurugram, India. Use rose-gold, cream and charcoal accents. Include South Asian patient representation, medical-professional environment, calm and trustworthy tone, clean composition with copy space, no gore, no visible brand logos, no text overlays.`

text
- **Style modifiers to use:** cinematic daylight, soft contrast, editorial healthcare realism, premium interior design
- **Negative prompts (if using SD/Flux):** deformed hands, extra fingers, waxy skin, blood, exposed surgery, watermark, logo, text
- **Post-generation editing needed:** Yes — retouch anatomy artifacts, enforce brand color grade, export responsive renditions
- **Commercial usage considerations:** Verify platform indemnity and do not depict real doctor identity via AI for clinical claims

#### Method D: EXISTING REAL PHOTOS FROM CLINIC
- **Can the clinic provide this?** no
- **What to request from Dr. Swikriti/clinic team:** RAW files, location/model consent, portrait + wide shots, uncluttered treatment rooms
- **Minimum quality threshold:** 24MP+, CR3/NEF/ARW RAW, ISO < 800, sharp eye focus, white balance card reference

### 6. WHERE IT'S USED IN CODE
- **Component/Page file(s):** Refer to image usage map and related route components (`app/about/page.tsx`, `components/category-page.tsx`, `app/procedures/[slug]/page.tsx`, `app/layout.tsx`)
- **JSX location:** Hero/section `<Image>` blocks and metadata icon declarations
- **How it's rendered:** Next.js `<Image>` for photos, metadata icon links for favicon assets
- **Current Next.js Image props in use:** Mostly `src`, `alt`, `width`, `height`, `className`, selective `priority`
- **Props that MUST be updated when replacing:** Add `sizes`, harmonize `quality`, set `placeholder`, `fetchPriority` for above-fold
- **Impact if wrong image used:** UX trust drop, weaker local SEO image relevance, potential compliance risk for misrepresentative medical visuals

### 7. REPLACEMENT PRIORITY & EFFORT
- **Business Priority:** LOW
- **SEO Priority:** LOW
- **Effort to Replace:** EASY
- **Estimated Time:** 0.5 day
- **Blocks Launch:** NO
- **Recommended Sprint:** Week 2
- **Dependencies:** Enable image optimization workflow, add per-procedure asset mapping, update metadata manifest

### 8. ADDITIONAL NOTES
- **Why current placeholder is problematic:** Generic or reused visuals reduce differentiation and credibility in a high-trust medical purchase journey
- **Competitor reference sites for visual inspiration:** Cadogan Clinic London, 111 Harley St, The Aesthetics Doctor, Kaya Skin Clinic India
- **Any legal/ethical considerations:** Before/after or identifiable patient imagery requires explicit consent and retention records
- **Notes specific to Indian medical aesthetics market:** Prioritize South Asian skin tones, realistic outcomes, family decision-maker trust cues, and Hindi-English discoverability


## Supplementary: Procedure-specific image requirements (Repository has 75 procedures)

| # | Category | Procedure | Recommended Filename | Stock Query | Midjourney Prompt Snippet | DALL-E 3 Prompt Snippet |
|---|---|---|---|---|---|---|
| 1 | Hair | Hair Transplant (FUE) | `hair-transplant-fue-swi-infinity-gurugram.webp` | `hair transplant (fue) consultation south asian patient india premium clinic` | `photoreal Hair Transplant (FUE) counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Hair Transplant (FUE) at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 2 | Hair | Hair Transplant (FUT) | `hair-transplant-fut-swi-infinity-gurugram.webp` | `hair transplant (fut) consultation south asian patient india premium clinic` | `photoreal Hair Transplant (FUT) counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Hair Transplant (FUT) at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 3 | Hair | PRP Therapy for Hair | `prp-therapy-swi-infinity-gurugram.webp` | `prp therapy for hair consultation south asian patient india premium clinic` | `photoreal PRP Therapy for Hair counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for PRP Therapy for Hair at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 4 | Hair | Scalp Micropigmentation | `scalp-micropigmentation-swi-infinity-gurugram.webp` | `scalp micropigmentation consultation south asian patient india premium clinic` | `photoreal Scalp Micropigmentation counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Scalp Micropigmentation at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 5 | Hair | Laser Hair Restoration | `laser-hair-restoration-swi-infinity-gurugram.webp` | `laser hair restoration consultation south asian patient india premium clinic` | `photoreal Laser Hair Restoration counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Laser Hair Restoration at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 6 | Body | Liposuction (HD / 360) | `liposuction-swi-infinity-gurugram.webp` | `liposuction (hd / 360) consultation south asian patient india premium clinic` | `photoreal Liposuction (HD / 360) counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Liposuction (HD / 360) at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 7 | Body | Gynecomastia Surgery | `gynecomastia-swi-infinity-gurugram.webp` | `gynecomastia surgery consultation south asian patient india premium clinic` | `photoreal Gynecomastia Surgery counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Gynecomastia Surgery at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 8 | Body | Tummy Tuck | `tummy-tuck-swi-infinity-gurugram.webp` | `tummy tuck consultation south asian patient india premium clinic` | `photoreal Tummy Tuck counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Tummy Tuck at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 9 | Body | Mommy Makeover | `mommy-makeover-swi-infinity-gurugram.webp` | `mommy makeover consultation south asian patient india premium clinic` | `photoreal Mommy Makeover counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Mommy Makeover at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 10 | Body | Arm Lift (Brachioplasty) | `arm-lift-swi-infinity-gurugram.webp` | `arm lift (brachioplasty) consultation south asian patient india premium clinic` | `photoreal Arm Lift (Brachioplasty) counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Arm Lift (Brachioplasty) at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 11 | Body | Thigh Lift | `thigh-lift-swi-infinity-gurugram.webp` | `thigh lift consultation south asian patient india premium clinic` | `photoreal Thigh Lift counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Thigh Lift at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 12 | Body | Body Lift | `body-lift-swi-infinity-gurugram.webp` | `body lift consultation south asian patient india premium clinic` | `photoreal Body Lift counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Body Lift at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 13 | Body | Buttock Augmentation | `buttock-augmentation-swi-infinity-gurugram.webp` | `buttock augmentation consultation south asian patient india premium clinic` | `photoreal Buttock Augmentation counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Buttock Augmentation at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 14 | Body | Calf Implants | `calf-implants-swi-infinity-gurugram.webp` | `calf implants consultation south asian patient india premium clinic` | `photoreal Calf Implants counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Calf Implants at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 15 | Body | Fat Transfer | `fat-transfer-swi-infinity-gurugram.webp` | `fat transfer consultation south asian patient india premium clinic` | `photoreal Fat Transfer counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Fat Transfer at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 16 | Body | Breast Augmentation | `breast-augmentation-swi-infinity-gurugram.webp` | `breast augmentation consultation south asian patient india premium clinic` | `photoreal Breast Augmentation counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Breast Augmentation at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 17 | Body | Breast Reduction | `breast-reduction-swi-infinity-gurugram.webp` | `breast reduction consultation south asian patient india premium clinic` | `photoreal Breast Reduction counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Breast Reduction at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 18 | Face | Rhinoplasty | `rhinoplasty-swi-infinity-gurugram.webp` | `rhinoplasty consultation south asian patient india premium clinic` | `photoreal Rhinoplasty counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Rhinoplasty at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 19 | Face | Blepharoplasty | `blepharoplasty-swi-infinity-gurugram.webp` | `blepharoplasty consultation south asian patient india premium clinic` | `photoreal Blepharoplasty counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Blepharoplasty at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 20 | Face | Facelift | `facelift-swi-infinity-gurugram.webp` | `facelift consultation south asian patient india premium clinic` | `photoreal Facelift counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Facelift at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 21 | Face | Neck Lift | `neck-lift-swi-infinity-gurugram.webp` | `neck lift consultation south asian patient india premium clinic` | `photoreal Neck Lift counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Neck Lift at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 22 | Face | Brow Lift | `brow-lift-swi-infinity-gurugram.webp` | `brow lift consultation south asian patient india premium clinic` | `photoreal Brow Lift counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Brow Lift at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 23 | Face | Otoplasty | `otoplasty-swi-infinity-gurugram.webp` | `otoplasty consultation south asian patient india premium clinic` | `photoreal Otoplasty counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Otoplasty at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 24 | Face | Chin Augmentation | `chin-augmentation-swi-infinity-gurugram.webp` | `chin augmentation consultation south asian patient india premium clinic` | `photoreal Chin Augmentation counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Chin Augmentation at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 25 | Face | Cheek Augmentation | `cheek-augmentation-swi-infinity-gurugram.webp` | `cheek augmentation consultation south asian patient india premium clinic` | `photoreal Cheek Augmentation counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Cheek Augmentation at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 26 | Face | Lip Augmentation | `lip-augmentation-swi-infinity-gurugram.webp` | `lip augmentation consultation south asian patient india premium clinic` | `photoreal Lip Augmentation counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Lip Augmentation at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 27 | Face | Jaw Contouring | `jaw-contouring-swi-infinity-gurugram.webp` | `jaw contouring consultation south asian patient india premium clinic` | `photoreal Jaw Contouring counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Jaw Contouring at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 28 | Face | Buccal Fat Removal | `buccal-fat-removal-swi-infinity-gurugram.webp` | `buccal fat removal consultation south asian patient india premium clinic` | `photoreal Buccal Fat Removal counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Buccal Fat Removal at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 29 | Face | Dimple Creation | `dimple-creation-swi-infinity-gurugram.webp` | `dimple creation consultation south asian patient india premium clinic` | `photoreal Dimple Creation counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Dimple Creation at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 30 | Face | Hair Line Lowering | `hair-line-lowering-swi-infinity-gurugram.webp` | `hair line lowering consultation south asian patient india premium clinic` | `photoreal Hair Line Lowering counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Hair Line Lowering at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 31 | Face | Facial Implants | `facial-implants-swi-infinity-gurugram.webp` | `facial implants consultation south asian patient india premium clinic` | `photoreal Facial Implants counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Facial Implants at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 32 | Face | Scar Revision | `scar-revision-swi-infinity-gurugram.webp` | `scar revision consultation south asian patient india premium clinic` | `photoreal Scar Revision counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Scar Revision at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 33 | Face | Cleft Lip Repair | `cleft-lip-repair-swi-infinity-gurugram.webp` | `cleft lip repair consultation south asian patient india premium clinic` | `photoreal Cleft Lip Repair counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Cleft Lip Repair at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 34 | Face | Facial Fracture Repair | `facial-fracture-repair-swi-infinity-gurugram.webp` | `facial fracture repair consultation south asian patient india premium clinic` | `photoreal Facial Fracture Repair counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Facial Fracture Repair at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 35 | Face | TMJ Surgery | `tmj-surgery-swi-infinity-gurugram.webp` | `tmj surgery consultation south asian patient india premium clinic` | `photoreal TMJ Surgery counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for TMJ Surgery at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 36 | Face | Fat Grafting to Face | `fat-grafting-swi-infinity-gurugram.webp` | `fat grafting to face consultation south asian patient india premium clinic` | `photoreal Fat Grafting to Face counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Fat Grafting to Face at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 37 | Face | Thread Lift | `thread-lift-swi-infinity-gurugram.webp` | `thread lift consultation south asian patient india premium clinic` | `photoreal Thread Lift counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Thread Lift at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 38 | Face | Under Eye Treatment | `under-eye-treatment-swi-infinity-gurugram.webp` | `under eye treatment consultation south asian patient india premium clinic` | `photoreal Under Eye Treatment counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Under Eye Treatment at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 39 | Face | Facial Feminization | `facial-feminization-swi-infinity-gurugram.webp` | `facial feminization consultation south asian patient india premium clinic` | `photoreal Facial Feminization counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Facial Feminization at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 40 | Face | Mole / Cyst Removal | `mole-cyst-removal-swi-infinity-gurugram.webp` | `mole / cyst removal consultation south asian patient india premium clinic` | `photoreal Mole / Cyst Removal counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Mole / Cyst Removal at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 41 | Face | Ear Lobe Repair | `ear-lobe-repair-swi-infinity-gurugram.webp` | `ear lobe repair consultation south asian patient india premium clinic` | `photoreal Ear Lobe Repair counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Ear Lobe Repair at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 42 | Skin | Botox | `botox-swi-infinity-gurugram.webp` | `botox consultation south asian patient india premium clinic` | `photoreal Botox counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Botox at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 43 | Skin | Dermal Fillers | `dermal-fillers-swi-infinity-gurugram.webp` | `dermal fillers consultation south asian patient india premium clinic` | `photoreal Dermal Fillers counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Dermal Fillers at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 44 | Skin | Chemical Peels | `chemical-peels-swi-infinity-gurugram.webp` | `chemical peels consultation south asian patient india premium clinic` | `photoreal Chemical Peels counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Chemical Peels at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 45 | Skin | Microdermabrasion | `microdermabrasion-swi-infinity-gurugram.webp` | `microdermabrasion consultation south asian patient india premium clinic` | `photoreal Microdermabrasion counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Microdermabrasion at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 46 | Skin | Microneedling | `microneedling-swi-infinity-gurugram.webp` | `microneedling consultation south asian patient india premium clinic` | `photoreal Microneedling counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Microneedling at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 47 | Skin | Laser Skin Resurfacing | `laser-resurfacing-swi-infinity-gurugram.webp` | `laser skin resurfacing consultation south asian patient india premium clinic` | `photoreal Laser Skin Resurfacing counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Laser Skin Resurfacing at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 48 | Skin | Laser Hair Removal | `laser-hair-removal-swi-infinity-gurugram.webp` | `laser hair removal consultation south asian patient india premium clinic` | `photoreal Laser Hair Removal counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Laser Hair Removal at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 49 | Skin | Laser Tattoo Removal | `laser-tattoo-removal-swi-infinity-gurugram.webp` | `laser tattoo removal consultation south asian patient india premium clinic` | `photoreal Laser Tattoo Removal counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Laser Tattoo Removal at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 50 | Skin | IPL Photofacial | `ipl-photofacial-swi-infinity-gurugram.webp` | `ipl photofacial consultation south asian patient india premium clinic` | `photoreal IPL Photofacial counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for IPL Photofacial at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 51 | Skin | PRP Facial (Vampire Facial) | `prp-facial-swi-infinity-gurugram.webp` | `prp facial (vampire facial) consultation south asian patient india premium clinic` | `photoreal PRP Facial (Vampire Facial) counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for PRP Facial (Vampire Facial) at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 52 | Skin | Hydrafacial | `hydrafacial-swi-infinity-gurugram.webp` | `hydrafacial consultation south asian patient india premium clinic` | `photoreal Hydrafacial counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Hydrafacial at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 53 | Skin | Carbon Laser Peel | `carbon-laser-peel-swi-infinity-gurugram.webp` | `carbon laser peel consultation south asian patient india premium clinic` | `photoreal Carbon Laser Peel counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Carbon Laser Peel at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 54 | Skin | Skin Tightening (HIFU) | `skin-tightening-hifu-swi-infinity-gurugram.webp` | `skin tightening (hifu) consultation south asian patient india premium clinic` | `photoreal Skin Tightening (HIFU) counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Skin Tightening (HIFU) at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 55 | Skin | Meso Therapy | `meso-therapy-swi-infinity-gurugram.webp` | `meso therapy consultation south asian patient india premium clinic` | `photoreal Meso Therapy counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Meso Therapy at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 56 | Skin | Anti-Aging Treatment | `anti-aging-swi-infinity-gurugram.webp` | `anti-aging treatment consultation south asian patient india premium clinic` | `photoreal Anti-Aging Treatment counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Anti-Aging Treatment at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 57 | Skin | Pigmentation Treatment | `pigmentation-swi-infinity-gurugram.webp` | `pigmentation treatment consultation south asian patient india premium clinic` | `photoreal Pigmentation Treatment counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Pigmentation Treatment at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 58 | Skin | Acne / Scar Treatment | `acne-scar-swi-infinity-gurugram.webp` | `acne / scar treatment consultation south asian patient india premium clinic` | `photoreal Acne / Scar Treatment counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Acne / Scar Treatment at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 59 | Skin | Vitiligo Treatment | `vitiligo-swi-infinity-gurugram.webp` | `vitiligo treatment consultation south asian patient india premium clinic` | `photoreal Vitiligo Treatment counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Vitiligo Treatment at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 60 | Skin | Melasma Treatment | `melasma-swi-infinity-gurugram.webp` | `melasma treatment consultation south asian patient india premium clinic` | `photoreal Melasma Treatment counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Melasma Treatment at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 61 | Skin | Stretch Mark Treatment | `stretch-marks-swi-infinity-gurugram.webp` | `stretch mark treatment consultation south asian patient india premium clinic` | `photoreal Stretch Mark Treatment counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Stretch Mark Treatment at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 62 | Skin | Wart Removal | `wart-removal-swi-infinity-gurugram.webp` | `wart removal consultation south asian patient india premium clinic` | `photoreal Wart Removal counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Wart Removal at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 63 | Skin | Dark Circle Treatment | `dark-circles-swi-infinity-gurugram.webp` | `dark circle treatment consultation south asian patient india premium clinic` | `photoreal Dark Circle Treatment counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Dark Circle Treatment at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 64 | Skin | Skin Tag Removal | `skin-tag-removal-swi-infinity-gurugram.webp` | `skin tag removal consultation south asian patient india premium clinic` | `photoreal Skin Tag Removal counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Skin Tag Removal at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 65 | Skin | Keloid Treatment | `keloid-swi-infinity-gurugram.webp` | `keloid treatment consultation south asian patient india premium clinic` | `photoreal Keloid Treatment counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Keloid Treatment at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 66 | Skin | Rosacea Treatment | `rosacea-swi-infinity-gurugram.webp` | `rosacea treatment consultation south asian patient india premium clinic` | `photoreal Rosacea Treatment counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Rosacea Treatment at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 67 | Skin | Hyperhidrosis (Sweat Treatment) | `hyperhidrosis-swi-infinity-gurugram.webp` | `hyperhidrosis (sweat treatment) consultation south asian patient india premium clinic` | `photoreal Hyperhidrosis (Sweat Treatment) counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Hyperhidrosis (Sweat Treatment) at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 68 | Skin | IV Glutathione Therapy | `iv-glutathione-swi-infinity-gurugram.webp` | `iv glutathione therapy consultation south asian patient india premium clinic` | `photoreal IV Glutathione Therapy counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for IV Glutathione Therapy at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 69 | Skin | Skin Whitening Treatment | `skin-whitening-swi-infinity-gurugram.webp` | `skin whitening treatment consultation south asian patient india premium clinic` | `photoreal Skin Whitening Treatment counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Skin Whitening Treatment at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 70 | Skin | Dermatosis Treatment | `dermatosis-swi-infinity-gurugram.webp` | `dermatosis treatment consultation south asian patient india premium clinic` | `photoreal Dermatosis Treatment counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Dermatosis Treatment at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 71 | Skin | Eczema Treatment | `eczema-swi-infinity-gurugram.webp` | `eczema treatment consultation south asian patient india premium clinic` | `photoreal Eczema Treatment counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Eczema Treatment at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 72 | Skin | Psoriasis Treatment | `psoriasis-swi-infinity-gurugram.webp` | `psoriasis treatment consultation south asian patient india premium clinic` | `photoreal Psoriasis Treatment counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Psoriasis Treatment at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 73 | Skin | Fungal Infection Treatment | `fungal-infection-swi-infinity-gurugram.webp` | `fungal infection treatment consultation south asian patient india premium clinic` | `photoreal Fungal Infection Treatment counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Fungal Infection Treatment at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 74 | Skin | Nail Treatment | `nail-treatment-swi-infinity-gurugram.webp` | `nail treatment consultation south asian patient india premium clinic` | `photoreal Nail Treatment counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Nail Treatment at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |
| 75 | Skin | Nonsurgical Skin Rejuvenation | `nonsurgical-skin-rejuvenation-swi-infinity-gurugram.webp` | `nonsurgical skin rejuvenation consultation south asian patient india premium clinic` | `photoreal Nonsurgical Skin Rejuvenation counseling scene, Indian clinic luxury, no gore --ar 16:9 --v 6.1` | `Photoreal website image for Nonsurgical Skin Rejuvenation at premium Gurugram plastic surgery clinic, South Asian representation, clinical and calm, no gore.` |

## Master Summary Table (19 assets)

| Image | Status | Preferred Replacement Method | Business Priority | Estimated Time |
|---|---|---|---|---|
| hero-1.jpg | KEEP & OPTIMISE | Real Photography | CRITICAL | 1-2 days |
| hero-2.jpg | KEEP & OPTIMISE | Real Photography | CRITICAL | 1-2 days |
| about-hero.jpg | REPLACE SOON | Real Photography | HIGH | 2-3 days |
| about-clinic.jpg | REPLACE SOON | Real Photography | MEDIUM | 2-3 days |
| contact-hero.jpg | REPLACE SOON | Real Photography | LOW | 1 day |
| dr-swikriti.jpg | REPLACE IMMEDIATELY | Real Photography | CRITICAL | 3-5 days |
| procedure-hair.jpg | REPLACE IMMEDIATELY | Real Photography | HIGH | 3-4 days |
| procedure-face.jpg | REPLACE IMMEDIATELY | Real Photography | HIGH | 3-4 days |
| procedure-body.jpg | REPLACE IMMEDIATELY | Real Photography | HIGH | 3-4 days |
| procedure-skin.jpg | REPLACE IMMEDIATELY | Real Photography | HIGH | 3-4 days |
| apple-icon.png | KEEP & OPTIMISE | Design/Brand Export | LOW | 0.5 day |
| icon-dark-32x32.png | KEEP & OPTIMISE | Design/Brand Export | LOW | 0.5 day |
| icon-light-32x32.png | KEEP & OPTIMISE | Design/Brand Export | LOW | 0.5 day |
| icon.svg | KEEP & OPTIMISE | Design/Brand Export | LOW | 0.5 day |
| placeholder-logo.png | REPLACE IMMEDIATELY | Design/Brand Export | LOW | 1 day |
| placeholder-logo.svg | REPLACE IMMEDIATELY | Design/Brand Export | LOW | 1 day |
| placeholder-user.jpg | REPLACE SOON | Design/Brand Export | LOW | 0.5 day |
| placeholder.jpg | REPLACE SOON | Design/Brand Export | LOW | 0.5 day |
| placeholder.svg | REPLACE SOON | Design/Brand Export | LOW | 0.5 day |
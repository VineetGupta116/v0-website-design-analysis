# WOW Creations WordPress Theme Installation Guide

## Implementation Decisions
- The site is a catalog and WhatsApp inquiry platform, not a checkout site.
- WooCommerce is intentionally not required.
- Advanced Custom Fields is required for product data, WOW Settings, reviews, and media galleries.
- The default WhatsApp number is a placeholder. Replace it in **WOW Settings** before launch.
- Product archive URL is `/shop/`; product detail URLs are `/product/product-slug/`.
- Meta catalog feed URL is `/feed/meta-products.xml` after permalinks are refreshed.

## Hostinger Setup
1. Log in to Hostinger hPanel.
2. Create or select the domain for WOW Creations.
3. Install WordPress from hPanel.
4. Confirm PHP version is 8.0 or newer.
5. Enable HTTPS/SSL.
6. In WordPress, go to **Settings → Permalinks** and choose **Post name**.

## Required Plugin Setup
1. Install **Advanced Custom Fields**.
2. Activate ACF.
3. Upload and activate this theme.
4. ACF local JSON files are stored in `acf-json/` and should load automatically.
5. If needed, import the JSON files manually from **Custom Fields → Tools → Import Field Groups**.

## Theme Upload
1. Download `wow-creations-theme.zip`.
2. In WordPress admin, go to **Appearance → Themes → Add New → Upload Theme**.
3. Upload the ZIP.
4. Activate **WOW Creations Catalog**.
5. Visit **Settings → Permalinks** and click **Save Changes** once to refresh rewrite rules.

## WOW Settings
Go to **WOW Settings** and fill:
- WhatsApp Number
- Instagram URL
- Business Phone
- Business Email
- Founder Name
- Founder Photo
- Packaging Images

## Pages to Create
Create these WordPress pages and assign matching page templates automatically by slug/file name:
- Home: set as static front page in **Settings → Reading**.
- About with slug `about`.
- FAQ with slug `faq`.
- Shipping & Returns with slug `shipping-returns`.
- Contact with slug `contact`.
- Track Order with slug `track-order`.

## Product Setup
1. Add Products from **WOW Products → Add New Product**.
2. Add product image as Featured Image.
3. Fill ACF fields including SKU, price, inventory status, description, highlights, fabric, color, and size.
4. Assign product category: Kurti Sets, Co-Ord Sets, Suit Sets, Dress Material, Unstitched, Seasonal, or Sale.
5. Set Listing Status to Published.
6. Publish.

## Meta Catalog Feed Validation
1. Open `https://yourdomain.com/feed/meta-products.xml`.
2. Confirm XML displays products.
3. Confirm every product has title, description, availability, condition, price, link, image link, brand, and item group ID.
4. Use Meta Commerce Manager data source diagnostics after connecting.

## Meta Catalog Connection
1. Go to Meta Commerce Manager.
2. Create or select a catalog.
3. Add Items → Data Feed.
4. Select scheduled feed.
5. Enter `https://yourdomain.com/feed/meta-products.xml`.
6. Schedule daily updates.
7. Set currency to INR.
8. Resolve any Meta diagnostics warnings.

## Deployment Checklist
- Replace WhatsApp placeholder number.
- Add real business email and phone.
- Upload founder photo and packaging images.
- Add at least 10 products before public launch.
- Confirm all product images are compressed.
- Confirm HTTPS is active.
- Confirm `/shop/` works.
- Confirm `/feed/meta-products.xml` works.
- Confirm WhatsApp CTAs open correctly on mobile.
- Confirm Instagram link opens @wowcreations__.

## QA Checklist
- Mobile viewport: header, product cards, sticky CTA, and forms are usable.
- Product page: gallery, title, price, availability, WhatsApp CTA, highlights, description, attributes, packaging promise, and related products appear.
- Archive: category filters and pagination work.
- FAQ: FAQ CPT entries render on the FAQ page.
- Reviews: published reviews render on homepage and reviews archive.
- Security: all public template output is escaped or passed through WordPress-safe functions.
- Feed: XML validates and only includes published products.

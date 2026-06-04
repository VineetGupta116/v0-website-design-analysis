# GitHub-Only Package Delivery

WOW Creations is a WordPress theme package. It should be distributed from GitHub and uploaded to WordPress/Hostinger manually.

## Do not deploy this package to Vercel

This package is not a Next.js application deployment. Do not connect `wow-creations-theme/` to Vercel and do not create a Vercel deployment for this theme.

## Supported delivery paths

Use one of these GitHub-only options:

1. **GitHub Actions artifact**
   - Open the GitHub repository.
   - Go to **Actions**.
   - Run or open **Build WOW Creations WordPress Theme Package**.
   - Download the `wow-creations-theme` artifact.
   - Upload `wow-creations-theme.zip` in WordPress.

2. **GitHub Release asset**
   - Create a GitHub Release.
   - The workflow attaches `wow-creations-theme.zip` to the release.
   - Download the ZIP from the release assets.
   - Upload it in WordPress.

3. **Local build from GitHub source**
   - Clone or download the repository from GitHub.
   - Run `./scripts/build-wow-theme-zip.sh`.
   - Upload the generated `wow-creations-theme.zip` in WordPress.

## WordPress upload target

Upload only to WordPress:

```text
WordPress Admin → Appearance → Themes → Add New → Upload Theme
```

After activation, go to **Settings → Permalinks** and click **Save Changes** once so `/shop/` and `/feed/meta-products.xml` work.


## Cloud-only users

If you can run only on cloud tools, use GitHub Codespaces, GitHub Actions artifacts, or GitHub Release assets. See `docs/CLOUD_ONLY.md`.

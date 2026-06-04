# Cloud-Only Workflow for WOW Creations Theme

Use this guide if you cannot run commands on a local computer and can only work in cloud tools such as GitHub, GitHub Codespaces, or WordPress/Hostinger.

## Recommended cloud path

1. Keep the project on GitHub only.
2. Do not deploy to Vercel.
3. Use GitHub Actions to create `wow-creations-theme.zip`.
4. Download the ZIP from GitHub Actions or GitHub Releases.
5. Upload the ZIP to WordPress on Hostinger.

## Option A: GitHub Codespaces

Use this if you can open a browser-based terminal in GitHub.

1. Open the repository on GitHub.
2. Select **Code → Codespaces → Create codespace on main**.
3. In the Codespaces terminal, run:

```bash
./scripts/build-wow-theme-zip.sh
```

4. Confirm the ZIP exists:

```bash
unzip -t wow-creations-theme.zip
```

5. Download `wow-creations-theme.zip` from the Codespaces file explorer.
6. Upload it to WordPress:

```text
WordPress Admin → Appearance → Themes → Add New → Upload Theme
```

## Option B: GitHub Actions artifact

Use this if the source files are already in GitHub.

1. Open the repository on GitHub.
2. Go to **Actions**.
3. Open **Build WOW Creations WordPress Theme Package**.
4. Click **Run workflow**.
5. Wait for the workflow to finish.
6. Open the workflow run.
7. Download the `wow-creations-theme` artifact.
8. Extract the artifact if GitHub wraps it in another ZIP.
9. Upload `wow-creations-theme.zip` to WordPress.

## Option C: GitHub Release asset

Use this if you want a permanent cloud download link.

1. Open the repository on GitHub.
2. Go to **Releases → Draft a new release**.
3. Create a tag such as `v1.0.0`.
4. Publish the release.
5. The GitHub Actions workflow attaches `wow-creations-theme.zip` to the release.
6. Use the release asset link as the permanent download link.

## If the GitHub repository is empty

If the repository is empty and you cannot run local git commands, use GitHub Codespaces or the GitHub web upload screen:

1. Download the project files from the current cloud workspace if available.
2. In GitHub, open the repository.
3. Choose **Add file → Upload files**.
4. Upload these paths:
   - `.github/workflows/wow-theme-package.yml`
   - `scripts/build-wow-theme-zip.sh`
   - `wow-creations-theme/`
   - `.gitignore`
5. Commit directly to `main`.
6. Run the GitHub Actions workflow.

## WordPress / Hostinger installation

1. Log in to WordPress Admin on Hostinger.
2. Go to **Plugins → Add New**.
3. Install and activate **Advanced Custom Fields**.
4. Go to **Appearance → Themes → Add New → Upload Theme**.
5. Upload `wow-creations-theme.zip`.
6. Activate **WOW Creations Catalog**.
7. Go to **Settings → Permalinks** and click **Save Changes**.
8. Go to **WOW Settings** and set the WhatsApp number, Instagram URL, founder details, and packaging images.

## Cloud-only rule

This project is a WordPress theme package. The only cloud destinations should be:

- GitHub repository
- GitHub Actions artifact
- GitHub Release asset
- WordPress/Hostinger theme upload

Do not create or connect a Vercel project for this theme.

# WOW Creations Theme Packaging

The repository stores the WordPress theme as text source files under `wow-creations-theme/`.

The uploadable ZIP is intentionally **not committed** because binary ZIP files are not supported by some review and patch systems.

## Build the upload ZIP

From the repository root, run:

```bash
./scripts/build-wow-theme-zip.sh
```

This creates:

```text
wow-creations-theme.zip
```

## Upload to WordPress

1. Log in to WordPress Admin.
2. Go to **Appearance → Themes → Add New → Upload Theme**.
3. Choose `wow-creations-theme.zip`.
4. Click **Install Now**.
5. Activate **WOW Creations Catalog**.
6. Go to **Settings → Permalinks** and click **Save Changes** once.

## Why the ZIP is not tracked

Binary ZIP files are generated artifacts. Keeping them out of git makes code review possible and avoids the “Binary file not supported” problem while still allowing the exact upload package to be created at any time.

#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
THEME_DIR="$ROOT_DIR/wow-creations-theme"
ZIP_FILE="$ROOT_DIR/wow-creations-theme.zip"

if [[ ! -d "$THEME_DIR" ]]; then
  echo "Theme directory not found: $THEME_DIR" >&2
  exit 1
fi

rm -f "$ZIP_FILE"
(
  cd "$ROOT_DIR"
  zip -rq "wow-creations-theme.zip" "wow-creations-theme" -x '*/.DS_Store' '*.git*'
)

if command -v unzip >/dev/null 2>&1; then
  unzip -t "$ZIP_FILE" >/dev/null
fi

printf 'Created %s\n' "$ZIP_FILE"

import { useState, useEffect } from "react"
import { useMounted } from "./use-mounted"

/**
 * useMediaQuery — viewport-aware media query hook with SSR safety.
 *
 * Returns `false` until the component has mounted on the client, then returns
 * the live result of `window.matchMedia(query)`.
 *
 * WHY THIS EXISTS:
 * - CSS breakpoints (e.g. `lg:block`, `lg:hidden`) are invisible to the server,
 *   so relying purely on Tailwind responsive classes is fine for layout but NOT
 *   for conditional JS logic (attaching different event listeners, rendering
 *   entirely different component trees, etc.).
 * - This hook gives us a JS-land equivalent of a CSS media query that is safe
 *   to use in render paths without causing hydration mismatches.
 * - The `defaultValue` param lets us choose a sensible SSR fallback (e.g.
 *   `false` for "is desktop" means the server renders the mobile/safe path).
 *
 * EDGE CASES HANDLED:
 * - Safari <14 lacks `addEventListener` on MediaQueryList; we fall back to the
 *   deprecated `addListener` / `removeListener` API.
 * - During SSR or before mount, we always return `defaultValue` to keep the
 *   server and first client render in sync.
 */
export function useMediaQuery(query: string, defaultValue = false): boolean {
  const mounted = useMounted()
  const [matches, setMatches] = useState(defaultValue)

  useEffect(() => {
    if (!mounted) return

    // matchMedia is guaranteed to exist post-mount (all modern browsers + jsdom).
    const mql = window.matchMedia(query)
    setMatches(mql.matches)

    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)

    // Safari <14 compat: MediaQueryList may not implement full EventTarget.
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", handler)
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(mql as any).addListener(handler)
    }

    return () => {
      if (typeof mql.removeEventListener === "function") {
        mql.removeEventListener("change", handler)
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ;(mql as any).removeListener(handler)
      }
    }
  }, [mounted, query])

  // Before mount, return the defaultValue (keeps SSR and hydration pass in sync).
  return mounted ? matches : defaultValue
}

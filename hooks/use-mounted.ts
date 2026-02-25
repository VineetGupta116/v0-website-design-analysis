import { useState, useEffect } from "react"

/**
 * useMounted — SSR/CSR boundary guard.
 *
 * Returns `false` during server rendering and on the very first client render
 * (the "hydration pass"), then flips to `true` in a subsequent commit.
 *
 * WHY THIS EXISTS:
 * - The server can never know browser-only state (viewport size, touch support,
 *   scroll position, extension-injected attributes, etc.).
 * - If a component renders different markup on the server vs. the first client
 *   render, React will log a hydration mismatch warning (at best) or silently
 *   produce a broken DOM (at worst).
 * - By guarding client-only branches behind `if (!mounted) return <safe-fallback>`,
 *   we guarantee the first client render is byte-identical to the server HTML,
 *   then apply client-specific behaviour in a follow-up paint.
 *
 * USAGE:
 *   const mounted = useMounted()
 *   // anything that depends on window, navigator, viewport, or must differ
 *   // from the SSR output should be gated on `mounted === true`.
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // useEffect never runs on the server, so this flip only happens client-side
    // after the hydration pass is complete.
    setMounted(true)
  }, [])

  return mounted
}

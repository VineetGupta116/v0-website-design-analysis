"use client"

import {
  useRef,
  useCallback,
  useEffect,
  type Dispatch,
  type SetStateAction,
} from "react"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import {
  procedures,
  allCategories,
  categoryMeta,
  groupedProcedures,
} from "@/lib/procedures"

/* ─────────────────────────────────────────────────────────────────────────────
 * MEGA DROPDOWN — DESKTOP ONLY
 *
 * This component renders the four-column procedure mega menu that appears
 * beneath the navbar on hover / click of the "Procedures" trigger.
 *
 * ARCHITECTURAL DECISIONS:
 *
 * 1. HYDRATION SAFETY
 *    - The parent Navbar gates this component behind `mounted` from useMounted,
 *      so during SSR and the first client paint this component is never in the
 *      tree.  This eliminates the entire class of hydration mismatches that
 *      arise from client-only state (hover, scroll, viewport) leaking into
 *      the server render.
 *    - All interactive state (`isOpen`) is owned by the parent and passed as a
 *      prop, keeping this component a controlled, stateless overlay.
 *
 * 2. OVERLAY SAFETY (STACKING & POSITIONING)
 *    - Positioned with `fixed` + explicit top offset derived from the navbar
 *      height, NOT `absolute` relative to a potentially-scrolled parent.
 *      This guarantees the dropdown never clips behind overflow:hidden
 *      ancestors and always spans the full viewport width.
 *    - z-index 40 (below the navbar's z-50) keeps the trigger clickable but
 *      ensures the overlay floats above page content.
 *    - A `max-h-[80vh] overflow-y-auto` guard prevents the menu from
 *      exceeding the viewport on smaller desktop screens.
 *
 * 3. INTERACTION SAFETY
 *    - Mouse enter/leave use a 250ms close delay so that diagonal mouse
 *      movement between the trigger and the dropdown doesn't accidentally
 *      dismiss the menu (common UX bug on mega menus).
 *    - The timeout ref is cleared on every enter event to prevent stale
 *      closures from firing out of order.
 *    - Keyboard: Escape dismisses and returns focus to the trigger.
 *    - Click-outside: a `mousedown` listener on `document` closes the menu
 *      if the click target is outside both the trigger and the dropdown.
 *
 * 4. PERFORMANCE
 *    - Procedure data comes from the module-level `groupedProcedures` cache,
 *      so no filtering happens during render.
 *    - Event handlers are wrapped in useCallback with stable deps.
 *    - The dropdown is hidden via `opacity-0 pointer-events-none` + a CSS
 *      transition rather than being unmounted, so toggling it avoids a DOM
 *      insert/remove cycle (reduces layout thrash on repeated hovers).
 *
 * 5. ACCESSIBILITY
 *    - role="menu" on the container, role="menuitem" on every link.
 *    - aria-label on each category submenu.
 *    - Focus management: Escape returns focus to the trigger ref.
 * ───────────────────────────────────────────────────────────────────────────── */

interface MegaDropdownProps {
  /** Whether the dropdown is currently visible. Controlled by parent. */
  isOpen: boolean
  /** State setter for isOpen. Allows the dropdown to close itself. */
  setIsOpen: Dispatch<SetStateAction<boolean>>
  /** Ref to the trigger button, for returning focus on Escape. */
  triggerRef: React.RefObject<HTMLButtonElement | null>
  /** Called when the mouse enters the dropdown (to cancel pending close). */
  onMouseEnter: () => void
  /** Called when the mouse leaves the dropdown (to start close timer). */
  onMouseLeave: () => void
}

export function MegaDropdown({
  isOpen,
  setIsOpen,
  triggerRef,
  onMouseEnter,
  onMouseLeave,
}: MegaDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null)

  /* ── Keyboard: Escape dismisses ─────────────────────────────────────────── */
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation()
        setIsOpen(false)
        // Return focus to trigger for keyboard users.
        triggerRef.current?.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, setIsOpen, triggerRef])

  /* ── Click-outside dismisses ────────────────────────────────────────────── */
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      // If click is inside the dropdown or its trigger, ignore.
      if (
        dropdownRef.current?.contains(target) ||
        triggerRef.current?.contains(target)
      ) {
        return
      }
      setIsOpen(false)
    }

    // Use mousedown (not click) to catch the event before focus shifts.
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen, setIsOpen, triggerRef])

  /* ── Close helper (used by internal links) ──────────────────────────────── */
  const closeMenu = useCallback(() => setIsOpen(false), [setIsOpen])

  return (
    <div
      ref={dropdownRef}
      /*
       * POSITIONING:
       * `fixed left-0 right-0` — spans full viewport width regardless of
       * parent overflow or transform context.
       * `top-0 mt-[72px]` — offset by the navbar height.  Using mt instead
       * of a calc'd top keeps the value co-located and easy to adjust.
       */
      className={`fixed left-0 right-0 top-0 z-40 mt-[72px] transition-all duration-300 ${
        isOpen
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-2 opacity-0"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="menu"
      aria-label="Procedures menu"
      /*
       * ARIA: inert when hidden so screen readers and tab order skip it
       * entirely.  The `hidden` attribute would unmount it from the a11y
       * tree but we use CSS visibility instead to keep the DOM stable for
       * transitions, so we rely on pointer-events-none + aria-hidden.
       */
      aria-hidden={!isOpen}
    >
      <div className="border-t border-border bg-card/98 shadow-xl backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          {/* ── Header row ────────────────────────────────────────────── */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-rose-gold" aria-hidden="true" />
              <span className="font-[var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.3em] text-rose-gold">
                {procedures.length} Procedures across {allCategories.length}{" "}
                specialties
              </span>
            </div>
            <Link
              href="/procedures"
              className="group flex items-center gap-1.5 font-[var(--font-montserrat)] text-xs font-semibold uppercase tracking-wider text-rose-gold transition-colors hover:text-rose-gold-dark"
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
            >
              View All Procedures
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* ── Four-column grid ──────────────────────────────────────── */}
          <div
            className="grid grid-cols-4 gap-8"
            /*
             * max-h + overflow guard: if the browser window is short (e.g.
             * laptop, or DevTools open), the grid scrolls rather than
             * overflowing beneath the fold or behind the footer.
             */
            style={{ maxHeight: "calc(80vh - 120px)", overflowY: "auto" }}
          >
            {allCategories.map((category) => {
              const meta = categoryMeta[category]
              const items = groupedProcedures[category]

              return (
                <div key={category} role="none">
                  {/* Category heading — links to category page */}
                  <Link
                    href={meta.href}
                    className="group mb-1 flex items-center gap-2"
                    role="menuitem"
                    onClick={closeMenu}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    <h3 className="font-[var(--font-cormorant)] text-xl font-semibold text-charcoal transition-colors group-hover:text-rose-gold">
                      {category}
                    </h3>
                    <ArrowRight className="h-3.5 w-3.5 text-rose-gold opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                  <p className="mb-4 font-[var(--font-montserrat)] text-[11px] text-muted-foreground">
                    {meta.description}
                  </p>
                  <div className="mb-3 h-px w-full bg-border" aria-hidden="true" />

                  {/* Procedure links */}
                  <ul
                    className="flex flex-col gap-0.5"
                    role="menu"
                    aria-label={`${category} procedures`}
                  >
                    {items.map((proc) => (
                      <li key={proc.url} role="none">
                        <Link
                          href={proc.url}
                          role="menuitem"
                          className="block rounded-sm px-2 py-1.5 font-[var(--font-montserrat)] text-[13px] leading-snug text-charcoal-light transition-all hover:bg-cream-dark hover:text-rose-gold"
                          onClick={closeMenu}
                          tabIndex={isOpen ? 0 : -1}
                        >
                          {proc.name}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* "See all" link */}
                  <Link
                    href={meta.href}
                    className="mt-3 inline-flex items-center gap-1 font-[var(--font-montserrat)] text-[11px] font-semibold uppercase tracking-wider text-rose-gold transition-colors hover:text-rose-gold-dark"
                    onClick={closeMenu}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    All {category} ({items.length})
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

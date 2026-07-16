// src/lib/motion.ts
// Shared helpers for the scroll-driven motion primitives (Reveal.astro,
// DraftPath.astro, StatTick.tsx). Kept dependency-free (no `motion` import
// here) so it can run inline in Astro <script> tags as well as from React.
//
// Motion contract used by every primitive:
//   1. Content renders fully visible by default (no FOUC, no blank sections
//      in headless/no-JS/hidden-tab contexts).
//   2. JS "arms" an element (adds a data attribute that flips it into a
//      pre-animation state) ONLY when IntersectionObserver exists AND the
//      user has not requested reduced motion AND the element is not already
//      in the viewport at arm-time (nothing already on screen may flash).
//   3. Once armed, a single shared IntersectionObserver watches the element
//      and reveals it (removes the primed state) the first time it enters
//      the viewport, then stops observing it (reveal-once).

/** True when the user prefers reduced motion (or it can't be determined) — callers must NOT animate. */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    // Can't tell — assume reduced motion so we never force an animation on
    // an environment that can't evaluate the media query (e.g. some SSR /
    // headless contexts).
    return true;
  }
  return !window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
}

/** True when the element's bounding box currently intersects the viewport. */
function isInViewport(el: Element): boolean {
  const rect = el.getBoundingClientRect();
  const vw = window.innerWidth || document.documentElement.clientWidth;
  const vh = window.innerHeight || document.documentElement.clientHeight;
  return rect.bottom > 0 && rect.right > 0 && rect.top < vh && rect.left < vw;
}

export interface OnFirstInViewOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

/**
 * Fires `cb` the first time `el` enters the viewport, then stops observing.
 * Returns a cleanup function. Safe to call for elements already in view —
 * `cb` runs on the next intersection callback as usual (IO fires immediately
 * for already-visible targets), so callers should only invoke this after
 * they've already decided the element should be armed (see isEligibleForReveal).
 */
export function onFirstInView(
  el: Element,
  cb: () => void,
  options: OnFirstInViewOptions = {},
): () => void {
  if (typeof IntersectionObserver === "undefined") {
    // No IO support — reveal immediately, nothing to observe.
    cb();
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          cb();
          observer.unobserve(entry.target);
        }
      }
    },
    {
      root: options.root ?? null,
      rootMargin: options.rootMargin ?? "0px 0px -10% 0px",
      threshold: options.threshold ?? 0.1,
    },
  );

  observer.observe(el);
  return () => observer.disconnect();
}

/**
 * Central eligibility check shared by every primitive: only arm an element
 * for a JS-driven reveal when IO exists, the user allows motion, and the
 * element isn't already sitting in the viewport (which would otherwise
 * flash from primed -> revealed on load).
 */
export function isEligibleForReveal(el: Element): boolean {
  if (typeof IntersectionObserver === "undefined") return false;
  if (prefersReducedMotion()) return false;
  if (isInViewport(el)) return false;
  return true;
}

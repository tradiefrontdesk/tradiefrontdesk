// src/components/motion/StatTick.tsx
// React island: counts a number 0 -> value the first time it scrolls into
// view. Hydrate with `client:visible` (it already gates its own animation
// on IO + prefers-reduced-motion, but client:visible additionally avoids
// shipping/hydrating the island for instances the user never scrolls to).
//
// Visibility contract (matches Reveal.astro / DraftPath.astro): the final
// value is what's rendered by default (SSR + no-JS + reduced motion all
// show the correct number, never blank, never stuck at 0). Only when JS
// confirms IO is supported, the user allows motion, AND the element is not
// already in the viewport at mount does it drop to 0 and count up on first
// view — an element already on screen at load must never flash.
import { useEffect, useRef, useState } from "react";
import { animate } from "motion";
import { isEligibleForReveal, onFirstInView } from "@/lib/motion";

export interface StatTickProps {
  value: number;
  suffix?: string;
  prefix?: string;
  /** Count-up duration in seconds. Default 1.2s — marketing-stat territory, not UI-feedback territory. */
  duration?: number;
}

export default function StatTick({ value, suffix = "", prefix = "", duration = 1.2 }: StatTickProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!isEligibleForReveal(el)) {
      // Reduced motion, no IO support, or already in view — show the real
      // value immediately, no count-up.
      setDisplay(value);
      return;
    }

    setDisplay(0);

    let playbackControls: ReturnType<typeof animate> | undefined;
    const disconnect = onFirstInView(el, () => {
      playbackControls = animate(0, value, {
        duration,
        ease: [0.22, 1, 0.36, 1], // matches --ease-out
        onUpdate: (latest) => setDisplay(Math.round(latest)),
      });
    });

    return () => {
      disconnect();
      playbackControls?.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return (
    <span ref={ref} data-stat-tick>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

/** Lenis default-style expo-out — explicit for consistent anchor + wheel feel */
const easeOutExpo = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

/**
 * In-page jumps (nav, CTAs). Lower lerp + slightly longer duration than raw 0.1
 * reads smoother next to the global wheel smoothing.
 */
export const lenisAnchorScrollOpts = {
  lerp: 0.05,
  duration: 1.2,
  easing: easeOutExpo,
} as const;

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.055,
        duration: 1.25,
        easing: easeOutExpo,
        wheelMultiplier: 0.92,
        touchMultiplier: 1.12,
        syncTouch: true,
        syncTouchLerp: 0.058,
        smoothWheel: true,
        stopInertiaOnNavigate: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}

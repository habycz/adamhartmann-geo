"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

type Props = {
  children: React.ReactNode;
  lerp?: number;
  duration?: number;
  smoothWheel?: boolean;
};

export default function LenisProvider({
  children,
  lerp = 0.06,
  duration = 1.5,
  smoothWheel = true,
}: Props) {
  const rafRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const lenis = new Lenis({
      lerp,
      duration,
      smoothWheel,
      autoRaf: false,
      smoothTouch: false,
      gestureOrientation: "vertical",
      wheelMultiplier: 0.9,
      touchMultiplier: 1.0,
    });
    lenisRef.current = lenis;

    if (!prefersReduced) {
      const raf = (time: number) => {
        lenis.raf(time);
        rafRef.current = requestAnimationFrame(raf);
      };
      rafRef.current = requestAnimationFrame(raf);
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [lerp, duration, smoothWheel]);

  return <>{children}</>;
}

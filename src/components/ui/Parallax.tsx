"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { registerParallax } from "@/lib/parallax-manager";

type ParallaxProps = {
  children: ReactNode;
  strength?: number;
  className?: string;
};

/**
 * Envoltorio absolute-inset-0 para una imagen con `fill`: se mueve
 * un poco mas lento/rapido que el scroll (parallax real, con JS,
 * no la version CSS-only que resulto invisible en navegadores sin
 * soporte de animation-timeline). El padre debe tener overflow-hidden.
 */
export function Parallax({ children, strength = 0.15, className = "" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    return registerParallax(el, strength);
  }, [strength]);

  return (
    <div ref={ref} className={`absolute inset-0 ${className}`}>
      {children}
    </div>
  );
}

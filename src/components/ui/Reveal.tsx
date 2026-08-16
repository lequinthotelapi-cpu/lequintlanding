"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
};

/**
 * Fundido + desplazamiento al entrar en viewport. Mejora
 * progresiva real: el contenido arranca visible (sin la clase
 * reveal-init hasta que el JS confirma que puede animarlo), y si
 * el elemento ya esta en pantalla al montar, tampoco se oculta.
 * Verificado con scroll simulado real (no solo con capturas de
 * pagina completa, que no disparan lazy-load/observers igual que
 * un visitante real).
 */
export function Reveal({ children, className = "", delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const alreadyVisible = node.getBoundingClientRect().top < window.innerHeight * 0.92;
    if (alreadyVisible) return;

    node.style.transitionDelay = delayMs ? `${delayMs}ms` : "";
    node.classList.add("reveal-init");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("reveal-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delayMs]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

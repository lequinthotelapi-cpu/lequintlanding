"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { CaretLeft, CaretRight, X } from "@phosphor-icons/react";
import { galeria } from "@/data/galeria";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Parallax } from "@/components/ui/Parallax";
import { Reveal } from "@/components/ui/Reveal";

const categoriaLabel: Record<(typeof galeria)[number]["categoria"], string> = {
  fachada: "Fachada",
  lobby: "Recepción",
  habitaciones: "Habitaciones",
  banos: "Baños",
};

// Composicion deliberada, no aleatoria: una pieza protagonista
// (2x2) mas ocho unidades 1x1 llenan exactamente 3 filas de 4
// columnas (4 + 8x1 = 12 celdas), sin huecos sobrantes al calzar
// las proporciones (evita el bug de casillas vacias de grid-dense
// con combinaciones que no completan la grilla).
const tileShape = [
  "sm:col-span-2 sm:row-span-2", // 0 fachada — protagonista
  "", // 1
  "", // 2
  "", // 3
  "", // 4
  "", // 5
  "", // 6
  "", // 7
  "", // 8
];

export function GaleriaEditorial() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setOpenIndex(null);
    triggerRef.current?.focus();
  }, []);

  const openAt = (index: number, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setOpenIndex(index);
  };

  const step = useCallback((delta: number) => {
    setOpenIndex((current) => {
      if (current === null) return current;
      return (current + delta + galeria.length) % galeria.length;
    });
  }, []);

  useEffect(() => {
    if (openIndex === null) return;
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex, close, step]);

  const active = openIndex !== null ? galeria[openIndex] : null;

  return (
    <section
      id="galeria"
      aria-labelledby="galeria-heading"
      className="border-b border-line py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            id="galeria-heading"
            title="El hotel, en fotos reales"
            description="Sin retoques de más: así se ve Le Quint Hotel hoy."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-3 gap-[3px] bg-line sm:grid-flow-dense sm:grid-cols-4 sm:auto-rows-[190px] lg:auto-rows-[230px]">
          {galeria.map((item, index) => (
            <button
              key={item.alt}
              type="button"
              onClick={(event) => openAt(index, event.currentTarget)}
              className={`group relative aspect-square overflow-hidden bg-ink focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-paper sm:aspect-auto ${tileShape[index] ?? ""}`}
            >
              {index === 0 ? (
                <Parallax strength={0.05}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover grayscale-[0.12] transition-[transform,filter] duration-[600ms] ease-out group-hover:scale-[1.06] group-hover:grayscale-0"
                  />
                </Parallax>
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover grayscale-[0.12] transition-[transform,filter] duration-[600ms] ease-out group-hover:scale-[1.06] group-hover:grayscale-0"
                />
              )}
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />
              <span className="absolute bottom-3 left-3 translate-y-2 text-xs font-medium uppercase tracking-[0.08em] text-paper opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {categoriaLabel[item.categoria]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galería de fotos de Le Quint Hotel"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 px-4 py-10"
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={close}
            aria-label="Cerrar galería"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper sm:right-8 sm:top-8"
          >
            <X size={26} />
          </button>

          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Foto anterior"
            className="absolute left-2 flex h-11 w-11 items-center justify-center text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper sm:left-6"
          >
            <CaretLeft size={26} />
          </button>

          <div className="relative h-full max-h-[80vh] w-full max-w-4xl">
            <Image
              src={active.src}
              alt={active.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Foto siguiente"
            className="absolute right-2 flex h-11 w-11 items-center justify-center text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper sm:right-6"
          >
            <CaretRight size={26} />
          </button>
        </div>
      ) : null}
    </section>
  );
}

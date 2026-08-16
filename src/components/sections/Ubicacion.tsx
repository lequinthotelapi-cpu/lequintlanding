"use client";

import { useState } from "react";
import { Binoculars, FirstAidKit, ForkKnife, MapPin, MapTrifold } from "@phosphor-icons/react";
import { hotel } from "@/data/hotel";
import { alrededores, type CategoriaAlrededores } from "@/data/alrededores";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const iconMap: Record<CategoriaAlrededores["icon"], typeof MapPin> = {
  restaurante: ForkKnife,
  salud: FirstAidKit,
  turismo: Binoculars,
};

export function Ubicacion() {
  const [mapaCargado, setMapaCargado] = useState(false);
  const direccionCodificada = encodeURIComponent(hotel.direccion);
  const comoLlegarHref = `https://www.google.com/maps/dir/?api=1&destination=${direccionCodificada}`;
  const embedSrc = `https://www.google.com/maps?q=${direccionCodificada}&output=embed`;

  return (
    <section
      id="ubicacion"
      aria-labelledby="ubicacion-heading"
      className="border-b border-white/10 bg-ink py-20 text-paper sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="flex flex-col justify-center">
            <span className="flex h-11 w-11 items-center justify-center border border-accent/50 text-accent-soft">
              <MapPin size={20} />
            </span>
            <h2
              id="ubicacion-heading"
              className="mt-6 text-3xl font-semibold text-paper sm:text-4xl lg:text-[2.5rem]"
            >
              En el centro de Cúcuta
            </h2>
            <p className="mt-3.5 max-w-[46ch] text-base leading-relaxed text-paper/70">
              Sobre la Avenida 5, cerca de los principales puntos del centro de
              la ciudad.
            </p>
            <address className="mt-8 border-t border-white/10 pt-6 text-base not-italic leading-relaxed text-paper/85">
              {hotel.direccion}
            </address>
            <Button href={comoLlegarHref} variant="invert" external className="mt-6 self-start">
              Cómo llegar
            </Button>
          </Reveal>

          <Reveal delayMs={100} className="relative aspect-[4/3] overflow-hidden border border-white/15 bg-white/5">
            {mapaCargado ? (
              <iframe
                title={`Mapa de ubicación de ${hotel.direccion}`}
                src={embedSrc}
                loading="lazy"
                className="h-full w-full border-0 grayscale-[0.3]"
              />
            ) : (
              <button
                type="button"
                onClick={() => setMapaCargado(true)}
                className="flex h-full w-full flex-col items-center justify-center gap-3 text-paper/80 transition-colors hover:bg-white/5 hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
              >
                <MapTrifold size={32} />
                <span className="text-sm font-medium">Ver mapa interactivo</span>
              </button>
            )}
          </Reveal>
        </div>

        <Reveal delayMs={150} className="mt-16 border-t border-white/10 pt-12 sm:mt-20 sm:pt-14">
          <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-paper/60">
            Alrededores del hotel
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
            {alrededores.map((grupo) => {
              const Icon = iconMap[grupo.icon];
              return (
                <div key={grupo.categoria}>
                  <div className="flex items-center gap-2.5 text-paper">
                    <Icon size={18} className="text-accent-soft" />
                    <h4 className="text-sm font-semibold">{grupo.categoria}</h4>
                  </div>
                  <ul className="mt-4 flex flex-col">
                    {grupo.lugares.map((lugar) => (
                      <li
                        key={lugar.nombre}
                        className="flex items-baseline justify-between gap-4 border-b border-white/10 py-2.5 text-sm"
                      >
                        <span className="text-paper/80">{lugar.nombre}</span>
                        <span className="shrink-0 text-paper/45">{lugar.distancia}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-xs text-paper/40">
            Distancias aproximadas a pie desde el hotel.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

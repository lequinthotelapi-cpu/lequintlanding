import Image from "next/image";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import fachada from "@assets/imgs/fachada.jpg";
import recepcion2 from "@assets/imgs/recepcion2.jpg";
import individual2 from "@assets/imgs/individual2.jpg";
import bano2 from "@assets/imgs/bano2.jpg";
import { hotel } from "@/data/hotel";
import { Button } from "@/components/ui/Button";
import { Parallax } from "@/components/ui/Parallax";

export function Hero() {
  const whatsappHref = hotel.whatsapp
    ? `https://wa.me/${hotel.whatsapp}`
    : "#contacto";

  return (
    <section id="top" className="relative overflow-hidden bg-ink">
      {/*
        Collage de fotos reales en vez de una sola foto a pantalla
        completa: fachada + recepcion + habitacion + baño, a la
        manera de un header de galeria (no un banner que ocupa todo
        el viewport). Sin buscador: no hay sistema propio de reservas.
      */}
      <div className="grid gap-1.5 sm:gap-2 lg:h-[640px] lg:grid-cols-[1.3fr_1fr]">
        <div className="relative aspect-[4/5] overflow-hidden bg-stone sm:aspect-[16/10] lg:aspect-auto lg:h-full">
          <Parallax strength={0.1}>
            <Image
              src={fachada}
              alt="Fachada de Le Quint Hotel en el centro de Cúcuta"
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-[center_30%]"
            />
          </Parallax>
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-ink/45"
            aria-hidden
          />
          <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
            <h1 className="max-w-[15ch] text-3xl font-semibold leading-[1.08] text-paper sm:text-4xl lg:text-[2.75rem]">
              Le Quint Hotel, en el centro de Cúcuta
            </h1>
            <p className="mt-4 max-w-[38ch] text-base leading-relaxed text-paper/85">
              Habitaciones individuales, dobles y familiares con wifi gratis
              y aire acondicionado, a pasos del centro.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                href={whatsappHref}
                variant="primary"
                icon={WhatsappLogo}
                external={Boolean(hotel.whatsapp)}
              >
                Escribir por WhatsApp
              </Button>
              <Button href="#habitaciones" variant="outline-invert">
                Ver habitaciones
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-1.5 sm:gap-2">
          <div className="relative aspect-[16/9] overflow-hidden bg-stone lg:aspect-auto lg:h-full">
            <Image
              src={recepcion2}
              alt="Recepción de Le Quint Hotel"
              fill
              sizes="(min-width: 1024px) 27vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
            <div className="relative aspect-square overflow-hidden bg-stone lg:aspect-auto lg:h-full">
              <Image
                src={individual2}
                alt="Habitación de Le Quint Hotel"
                fill
                sizes="(min-width: 1024px) 14vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden bg-stone lg:aspect-auto lg:h-full">
              <Image
                src={bano2}
                alt="Baño de Le Quint Hotel"
                fill
                sizes="(min-width: 1024px) 14vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Marca el final del Hero: cuando este punto sube por encima del navbar sticky, el navbar pasa a blanco. */}
      <div id="hero-sentinel" className="h-px w-full" aria-hidden />
    </section>
  );
}

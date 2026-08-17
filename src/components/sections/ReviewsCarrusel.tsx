"use client";

import { useRef } from "react";
import { CaretLeft, CaretRight, Quotes, WhatsappLogo } from "@phosphor-icons/react";
import { reviews, bookingResumen } from "@/data/reviews";
import { hotel } from "@/data/hotel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function ReviewsCarrusel() {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("li");
    const amount = (card?.clientWidth ?? 320) + 16;
    track.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <section
      id="opiniones"
      aria-labelledby="opiniones-heading"
      className="border-b border-line py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="opiniones-heading"
            title="Lo que dicen los huéspedes"
            description={
              bookingResumen.puntuacion
                ? `${bookingResumen.puntuacion} en Booking.com, con ${bookingResumen.totalResenas ?? 0} opiniones.`
                : "Opiniones verificadas de huéspedes reales, vía Booking.com."
            }
          />
          {reviews.length > 2 ? (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Opinión anterior"
                className="flex h-11 w-11 items-center justify-center border border-line-strong text-ink transition-colors hover:bg-stone focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                <CaretLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Siguiente opinión"
                className="flex h-11 w-11 items-center justify-center border border-line-strong text-ink transition-colors hover:bg-stone focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                <CaretRight size={18} />
              </button>
            </div>
          ) : null}
        </Reveal>

        {reviews.length > 0 ? (
          <ul
            ref={trackRef}
            className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto py-2 sm:gap-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((review) => (
              <li
                key={`${review.nombre}-${review.pais}`}
                className="flex w-[85%] shrink-0 snap-start flex-col border border-line-strong/70 border-t-2 border-t-accent bg-surface p-6 shadow-[0_1px_2px_rgba(20,17,14,0.04)] sm:w-[46%] sm:p-7 lg:w-[31%]"
              >
                <Quotes size={22} weight="fill" className="text-accent-soft" />
                <blockquote className="mt-3 flex-1 text-base leading-relaxed text-ink-soft">
                  {review.texto}
                </blockquote>
                <cite className="mt-5 block border-t border-line pt-4 text-sm not-italic text-muted">
                  {review.nombre} · {review.pais}
                  {review.puntuacion ? ` · ${review.puntuacion}` : ""}
                </cite>
              </li>
            ))}
          </ul>
        ) : (
          <Reveal
            delayMs={100}
            className="mt-10 flex flex-col items-start gap-6 border border-line-strong/60 bg-stone p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9"
          >
            <div className="flex items-start gap-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface text-accent-ink">
                <Quotes size={20} weight="fill" />
              </span>
              <p className="max-w-[46ch] text-base leading-relaxed text-ink-soft">
                Estamos reuniendo las opiniones de nuestros huéspedes desde
                Booking.com para mostrarlas aquí. Mientras tanto, puedes
                escribirnos directamente si tienes preguntas sobre una
                estadía reciente o próxima.
              </p>
            </div>
            <Button
              href={hotel.whatsapp ? `https://wa.me/${hotel.whatsapp}${hotel.defaultMessage ? `?text=${encodeURIComponent(hotel.defaultMessage)}` : ""}` : "#contacto"}
              variant="primary"
              icon={WhatsappLogo}
              external={Boolean(hotel.whatsapp)}
              className="shrink-0"
            >
              Escribir por WhatsApp
            </Button>
          </Reveal>
        )}
      </div>
    </section>
  );
}

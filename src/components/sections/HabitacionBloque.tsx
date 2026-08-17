import Image from "next/image";
import { Check } from "@phosphor-icons/react/dist/ssr";
import type { Habitacion } from "@/types";
import { Reveal } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";

type HabitacionBloqueProps = {
  habitacion: Habitacion;
  reverse?: boolean;
  index: number;
};

export function HabitacionBloque({ habitacion, reverse = false, index }: HabitacionBloqueProps) {
  const [principal, ...resto] = habitacion.fotos;
  const secundarias = resto.slice(0, 2);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr] lg:items-start lg:gap-10">
      <Reveal
        className={`relative ${
          secundarias.length
            ? "grid aspect-[4/3] grid-cols-3 grid-rows-2 gap-1.5 sm:aspect-[16/10]"
            : "aspect-[4/3]"
        } ${reverse ? "lg:order-2" : "lg:order-1"}`}
      >
        <div
          className={`relative overflow-hidden bg-stone ${
            secundarias.length ? "col-span-2 row-span-2" : "h-full w-full"
          }`}
        >
          <Parallax strength={0.06}>
            <Image
              src={principal.src}
              alt={principal.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Parallax>
        </div>
        {secundarias.map((foto) => (
          <div
            key={foto.alt}
            className={`relative col-span-1 overflow-hidden bg-stone ${
              // Con una sola foto secundaria, ocupa las 2 celdas de su
              // columna (si no, queda una celda vacia sin nada al lado).
              secundarias.length === 1 ? "row-span-2" : "row-span-1"
            }`}
          >
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              sizes="(min-width: 1024px) 17vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </Reveal>

      <Reveal
        delayMs={100}
        className={`relative overflow-hidden border border-line-strong/60 bg-surface p-7 sm:p-9 lg:sticky lg:top-24 ${
          reverse ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <span
          className="pointer-events-none absolute -right-4 -top-10 select-none text-[9rem] font-semibold leading-none text-accent/[0.07] sm:text-[11rem]"
          style={{ fontFamily: "var(--font-heading)" }}
          aria-hidden
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="relative">
          <span className="block h-[3px] w-9 bg-accent" aria-hidden />
          <h3 className="mt-4 text-2xl font-semibold text-ink">{habitacion.nombre}</h3>
          <p className="mt-1 text-sm text-muted">{habitacion.resumen}</p>
          <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-ink-soft">
            {habitacion.descripcion}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {habitacion.amenities.map((amenity) => (
              <li
                key={amenity}
                className="flex items-center gap-1.5 bg-stone px-3 py-1.5 text-xs font-medium text-ink-soft"
              >
                <Check size={13} className="shrink-0 text-accent-ink" />
                {amenity}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}

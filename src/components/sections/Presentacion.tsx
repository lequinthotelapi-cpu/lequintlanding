import Image from "next/image";
import { Handshake, MapPin, WifiHigh, Clock } from "@phosphor-icons/react/dist/ssr";
import { hotel } from "@/data/hotel";
import recepcion2 from "@assets/imgs/recepcion2.jpg";
import { Reveal } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";

const highlights = [
  { icon: MapPin, label: "Ubicación central", detail: "Sobre la Avenida 5, en el centro de Cúcuta." },
  { icon: WifiHigh, label: "Wifi y A/C incluidos", detail: "En todas las habitaciones, sin costo extra." },
  { icon: Handshake, label: "Atención directa", detail: "Un hotel pequeño, sin intermediarios." },
  {
    icon: Clock,
    label: "Horario",
    detail: `Check-in desde las ${hotel.checkIn} · Check-out hasta las ${hotel.checkOut}`,
  },
];

export function Presentacion() {
  return (
    <section aria-labelledby="presentacion-heading" className="border-b border-line py-20 sm:py-28 lg:py-36">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-stretch gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <Reveal>
          <span className="mb-4 block h-[3px] w-9 bg-accent" aria-hidden />
          <h2 id="presentacion-heading" className="text-3xl font-semibold text-ink sm:text-4xl lg:text-[2.5rem]">
            Un hotel pequeño, en el corazón de Cúcuta
          </h2>
          <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-muted">
            Le Quint Hotel está en la Avenida 5, a pasos del centro de la ciudad.
            Es un hotel familiar, ideal para descansar y disfrutar de una atención
            cercana y personalizada.
          </p>

          <ul className="mt-8 flex flex-col gap-5 border-t border-line pt-7">
            {highlights.map(({ icon: Icon, label, detail }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone text-accent-ink">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{label}</p>
                  <p className="mt-0.5 text-sm text-muted">{detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delayMs={100}>
          <div className="relative aspect-[3/2] overflow-hidden bg-stone lg:aspect-auto lg:h-full">
            <Parallax strength={0.08}>
              <div className="h-full">
                <Image
                  src={recepcion2}
                  alt="Recepción de Le Quint Hotel, mostrador con relojes de zona horaria"
                  fill
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Parallax>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

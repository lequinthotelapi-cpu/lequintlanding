import {
  Bathtub,
  Briefcase,
  Motorcycle,
  PawPrint,
  ShieldCheck,
  Snowflake,
  Storefront,
  Television,
  WifiHigh,
} from "@phosphor-icons/react/dist/ssr";
import type { ServicioIcono } from "@/types";
import { servicios } from "@/data/servicios";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const iconMap: Record<ServicioIcono, typeof WifiHigh> = {
  wifi: WifiHigh,
  moto: Motorcycle,
  ac: Snowflake,
  tv: Television,
  tienda: Storefront,
  trabajo: Briefcase,
  tina: Bathtub,
  mascota: PawPrint,
  seguridad: ShieldCheck,
};

export function ServiciosDestacados() {
  return (
    <section
      id="servicios"
      aria-labelledby="servicios-heading"
      className="relative overflow-hidden border-b border-line bg-stone py-20 sm:py-28 lg:py-36"
    >
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-accent/[0.07] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <SectionHeading id="servicios-heading" title="Lo que incluye la estadía" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio, index) => {
            const Icon = iconMap[servicio.icon];
            return (
              <Reveal key={servicio.label} delayMs={index * 60}>
                <div className="group flex h-full items-start gap-4 border border-line-strong/60 bg-surface p-5 transition-colors duration-200 hover:border-accent/50">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-stone text-accent-ink transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
                    <Icon size={22} />
                  </span>
                  <div className="pt-1.5">
                    <p className="text-base text-ink-soft">{servicio.label}</p>
                    {servicio.detail ? (
                      <p className="mt-1 text-sm text-muted">{servicio.detail}</p>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

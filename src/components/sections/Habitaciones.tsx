import { habitaciones } from "@/data/habitaciones";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HabitacionBloque } from "@/components/sections/HabitacionBloque";
import { Reveal } from "@/components/ui/Reveal";

export function Habitaciones() {
  return (
    <section
      id="habitaciones"
      aria-labelledby="habitaciones-heading"
      className="border-b border-line py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            id="habitaciones-heading"
            title="Tres formas de quedarse"
            description="Sencilla, Doble y Familiar: cada una con aire acondicionado, TV y wifi gratis."
          />
        </Reveal>

        <div className="mt-14 flex flex-col gap-20 sm:gap-28">
          {habitaciones.map((habitacion, index) => (
            <HabitacionBloque
              key={habitacion.slug}
              habitacion={habitacion}
              reverse={index % 2 === 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

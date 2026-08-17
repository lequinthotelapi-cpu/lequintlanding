import { Phone, WhatsappLogo, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { hotel } from "@/data/hotel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Contacto() {
  const whatsappHref = hotel.whatsapp
    ? `https://wa.me/${hotel.whatsapp}${hotel.defaultMessage ? `?text=${encodeURIComponent(hotel.defaultMessage)}` : ""}`
    : "#contacto";
  const telefonoHref = hotel.telefono ? `tel:${hotel.telefono.replace(/\s+/g, "")}` : null;
  const emailHref = hotel.email ? `mailto:${hotel.email}` : null;

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-heading"
      className="bg-ink py-20 text-paper sm:py-28 lg:py-36"
    >
      <Reveal className="mx-auto max-w-[640px] px-5 text-center sm:px-8">
        <h2
          id="contacto-heading"
          className="text-3xl font-semibold text-paper sm:text-4xl lg:text-[2.5rem]"
        >
          Escríbenos y te respondemos directamente
        </h2>
        <p className="mt-4 text-base leading-relaxed text-paper/70">
          Para consultar disponibilidad, tarifas o cualquier otra pregunta,
          el canal más rápido es WhatsApp.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button
            href={whatsappHref}
            variant="primary"
            icon={WhatsappLogo}
            external={Boolean(hotel.whatsapp)}
          >
            Escribir por WhatsApp
          </Button>
          {telefonoHref ? (
            <Button href={telefonoHref} variant="outline-invert" icon={Phone}>
              {hotel.telefono}
            </Button>
          ) : null}
          {emailHref ? (
            <Button href={emailHref} variant="outline-invert" icon={EnvelopeSimple}>
              {hotel.email}
            </Button>
          ) : null}
        </div>

        <p className="mt-6 text-sm text-paper/60">
          Check-in desde las {hotel.checkIn} · Check-out hasta las {hotel.checkOut}
        </p>
      </Reveal>
    </section>
  );
}

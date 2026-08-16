import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { hotel } from "@/data/hotel";

/**
 * Elemento fixed, sin JavaScript: no hay necesidad real de logica
 * dinamica (mostrar/ocultar en scroll, etc.) para justificar un
 * Client Component aqui.
 */
export function WhatsAppFloat() {
  const whatsappHref = hotel.whatsapp ? `https://wa.me/${hotel.whatsapp}` : "#contacto";

  return (
    <a
      href={whatsappHref}
      target={hotel.whatsapp ? "_blank" : undefined}
      rel={hotel.whatsapp ? "noopener noreferrer" : undefined}
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_4px_16px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:bottom-8 sm:right-8"
    >
      <WhatsappLogo size={28} weight="fill" />
    </a>
  );
}

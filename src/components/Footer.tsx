import Image from "next/image";
import { FacebookLogo, InstagramLogo, MapPin, Phone, TiktokLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import logoWhite from "@assets/imgs/LOGO2.png";
import recepcion2 from "@assets/imgs/recepcion2.jpg";
import { hotel } from "@/data/hotel";

const links = [
  { href: "#habitaciones", label: "Habitaciones" },
  { href: "#servicios", label: "Servicios" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  const whatsappHref = hotel.whatsapp ? `https://wa.me/${hotel.whatsapp}` : null;
  const telefonoHref = hotel.telefono ? `tel:${hotel.telefono.replace(/\s+/g, "")}` : null;
  const redes = [
    { href: hotel.redes.instagram, label: "Instagram", Icon: InstagramLogo },
    { href: hotel.redes.facebook, label: "Facebook", Icon: FacebookLogo },
    { href: hotel.redes.tiktok, label: "TikTok", Icon: TiktokLogo },
  ].filter((red) => red.href);

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-footer-bg text-footer-fg">
      {/*
        recepcion2.jpg. Muy tenue, con un degradado encima para que
        el texto conserve buen contraste.
      */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={recepcion2}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_62%] opacity-[0.22] grayscale-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-footer-bg via-footer-bg/85 to-footer-bg/70" />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Image src={logoWhite} alt="Le Quint Hotel" className="h-9 w-auto sm:h-10" />
            <address className="mt-5 max-w-[30ch] text-sm not-italic leading-relaxed text-footer-muted">
              {hotel.direccion}
            </address>

            {redes.length > 0 ? (
              <div className="mt-6 flex gap-3">
                {redes.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center border border-white/15 text-footer-fg transition-colors hover:border-accent-soft hover:text-accent-soft"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-footer-muted">
              Navegación
            </h3>
            <nav aria-label="Footer">
              <ul className="mt-5 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-footer-fg/85 transition-colors hover:text-accent-soft"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-footer-muted">
              Contacto
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {whatsappHref ? (
                <li>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm text-footer-fg/85 transition-colors hover:text-accent-soft"
                  >
                    <WhatsappLogo size={16} className="shrink-0" />
                    WhatsApp
                  </a>
                </li>
              ) : null}
              {telefonoHref ? (
                <li>
                  <a
                    href={telefonoHref}
                    className="flex items-center gap-2.5 text-sm text-footer-fg/85 transition-colors hover:text-accent-soft"
                  >
                    <Phone size={16} className="shrink-0" />
                    {hotel.telefono}
                  </a>
                </li>
              ) : null}
              <li>
                <a
                  href="#ubicacion"
                  className="flex items-start gap-2.5 text-sm text-footer-fg/85 transition-colors hover:text-accent-soft"
                >
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  {hotel.ciudad}, {hotel.pais}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-xs text-footer-muted">
          © 2026 Le Quint Hotel - USRV. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

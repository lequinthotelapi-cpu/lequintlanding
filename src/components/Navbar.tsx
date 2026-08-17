"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { List, WhatsappLogo, X, CalendarCheck } from "@phosphor-icons/react";
import logoBlack from "@assets/imgs/LOGO1.png";
import logoWhite from "@assets/imgs/LOGO2.png";
import { hotel } from "@/data/hotel";

const links = [
  { href: "#habitaciones", label: "Habitaciones" },
  { href: "#servicios", label: "Servicios" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const navListRef = useRef<HTMLUListElement>(null);

  // El navbar arranca oscuro (a tono con el Hero, que tambien es
  // bg-ink) y pasa a blanco solido en cuanto el Hero sale de
  // pantalla. Ya no se superpone a las fotos (es sticky, no fixed),
  // pero conserva la transicion de color que marcaba el cambio de
  // "zona oscura" a "zona clara" de la pagina.
  useEffect(() => {
    const sentinel = document.getElementById("hero-sentinel");
    if (!sentinel) return;
    // rootMargin recorta 72px del tope del viewport: el area de
    // deteccion empieza justo debajo del navbar sticky, no en el
    // borde real de la ventana.
    const observer = new IntersectionObserver(
      ([entry]) => setSolid(!entry.isIntersecting),
      { rootMargin: "-72px 0px 0px 0px" }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  // Scroll-spy: resalta el link de la seccion visible cerca del centro
  // del viewport. rootMargin recorta arriba/abajo dejando solo una
  // franja fina a media pantalla como zona "activa".
  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      const el = activeHref ? linkRefs.current[activeHref] : null;
      const list = navListRef.current;
      if (!el || !list) {
        setIndicator(null);
        return;
      }
      const listRect = list.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setIndicator({ left: elRect.left - listRect.left, width: elRect.width });
    };
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeHref]);

  const whatsappHref = hotel.whatsapp
    ? `https://wa.me/${hotel.whatsapp}`
    : "#contacto";

  return (
    <header className="sticky top-0 z-50">
      {/*
        El fondo/blur vive en esta barra interna, no en <header>:
        backdrop-filter crea un containing block para descendientes
        position:fixed, lo que rompe el overlay del menu movil (que
        necesita fijarse contra el viewport, no contra el header).
        El navbar ya no flota SOBRE las fotos del Hero (es sticky, no
        fixed, asi que nunca se superpone al collage), pero conserva
        el cambio de color oscuro -> blanco segun la seccion.
      */}
      <div
        className={`h-[72px] border-b transition-colors duration-300 ${
          solid || menuOpen
            ? "border-line bg-surface/95 backdrop-blur-sm"
            : "border-white/10 bg-ink"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1240px] items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center" aria-label="Le Quint Hotel, inicio">
            <Image
              src={solid || menuOpen ? logoBlack : logoWhite}
              alt="Le Quint Hotel"
              className="h-6 w-auto sm:h-7"
              priority
            />
          </a>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul ref={navListRef} className="relative flex items-center gap-9">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    ref={(el) => {
                      linkRefs.current[link.href] = el;
                    }}
                    href={link.href}
                    aria-current={activeHref === link.href ? "true" : undefined}
                    className={`text-base font-medium transition-colors duration-200 ${
                      solid ? "text-ink-soft hover:text-ink" : "text-paper hover:text-paper/80"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-2 h-[2px] bg-accent transition-[transform,width,opacity] duration-300 ease-out"
                style={{
                  width: indicator ? `${indicator.width}px` : 0,
                  transform: `translateX(${indicator ? indicator.left : 0}px)`,
                  opacity: indicator ? 1 : 0,
                }}
              />
            </ul>
          </nav>

          <div className="hidden lg:block">
            <a
              href={whatsappHref}
              target={hotel.whatsapp ? "_blank" : undefined}
              rel={hotel.whatsapp ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-[2px] border border-accent-ink bg-accent-ink px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent active:translate-y-px"
            >
              <CalendarCheck size={18} weight="fill" />
              Reservas
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className={`flex h-11 w-11 items-center justify-center lg:hidden ${
              solid || menuOpen ? "text-ink" : "text-paper"
            }`}
          >
            {menuOpen ? <X size={26} /> : <List size={26} />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          aria-label="Principal móvil"
          className="fixed inset-x-0 top-[72px] bottom-0 flex flex-col justify-between overflow-y-auto bg-surface px-6 py-8 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href} className="border-b border-line">
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-4 text-2xl font-medium text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappHref}
            target={hotel.whatsapp ? "_blank" : undefined}
            rel={hotel.whatsapp ? "noopener noreferrer" : undefined}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-[2px] bg-accent-ink px-6 py-4 text-base font-semibold text-white active:translate-y-px"
          >
            <WhatsappLogo size={20} weight="fill" />
            Escribir por WhatsApp
          </a>
        </nav>
      ) : null}
    </header>
  );
}

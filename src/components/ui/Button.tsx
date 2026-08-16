import type { ComponentType } from "react";
import type { IconProps } from "@phosphor-icons/react";

type ButtonVariant = "primary" | "outline" | "whatsapp" | "invert" | "outline-invert";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  icon?: ComponentType<IconProps>;
  external?: boolean;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  // CTA principal: el acento bronce, consistente en toda la pagina.
  // accent-ink (mas oscuro) para cumplir 4.5:1 de contraste con texto blanco.
  primary: "bg-accent-ink text-white border border-accent-ink hover:bg-accent focus-visible:outline-ink",
  outline: "bg-transparent text-ink border border-line-strong hover:bg-stone focus-visible:outline-ink",
  whatsapp:
    "bg-transparent text-ink border border-line-strong hover:border-whatsapp hover:text-whatsapp-ink focus-visible:outline-ink",
  // Para secciones con fondo oscuro (Ubicacion, Contacto): boton solido claro.
  invert: "bg-paper text-ink border border-paper hover:bg-stone focus-visible:outline-paper",
  // Para secciones con fondo oscuro: boton fantasma con borde visible.
  "outline-invert":
    "bg-transparent text-paper border border-paper/35 hover:border-paper/70 hover:bg-paper/5 focus-visible:outline-paper",
};

export function Button({
  href,
  children,
  variant = "primary",
  icon: Icon,
  external = false,
  className = "",
}: ButtonProps) {
  const extraProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  const classes = `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[2px] px-6 py-3.5 text-sm font-semibold transition-colors duration-200 active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantClasses[variant]} ${className}`;

  return (
    <a href={href} className={classes} {...extraProps}>
      {Icon ? <Icon size={18} weight="regular" /> : null}
      {children}
    </a>
  );
}

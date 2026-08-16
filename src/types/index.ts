import type { StaticImageData } from "next/image";

export type Foto = {
  src: StaticImageData;
  alt: string;
};

export type Habitacion = {
  slug: "sencilla" | "doble" | "familiar";
  nombre: string;
  resumen: string;
  descripcion: string;
  capacidad: number | null;
  amenities: string[];
  fotos: Foto[];
};

export type ServicioIcono =
  | "wifi"
  | "moto"
  | "ac"
  | "tv"
  | "tienda"
  | "trabajo"
  | "tina"
  | "mascota"
  | "seguridad";

export type Servicio = {
  label: string;
  icon: ServicioIcono;
  detail?: string;
};

export type Review = {
  nombre: string;
  pais: string;
  puntuacion: number | null;
  texto: string;
  source: "Booking.com";
};

export type GaleriaItem = Foto & {
  categoria: "fachada" | "lobby" | "habitaciones" | "banos";
};

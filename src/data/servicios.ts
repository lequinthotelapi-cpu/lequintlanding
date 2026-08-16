import type { Servicio } from "@/types";

/**
 * Unicamente los servicios confirmados por el hotel. No agregar
 * otros (desayuno, lavanderia, etc.) sin confirmacion explicita.
 */
export const servicios: Servicio[] = [
  { label: "Wi-Fi gratis", icon: "wifi" },
  { label: "Parqueadero para motos", icon: "moto" },
  { label: "Aire acondicionado", icon: "ac" },
  { label: "TV", icon: "tv" },
  { label: "Tienda de bebidas y snacks", icon: "tienda" },
  { label: "Área de trabajo en algunas habitaciones", icon: "trabajo" },
  { label: "Tina en la habitación familiar", icon: "tina" },
  {
    label: "Mascotas",
    icon: "mascota",
    detail: "Se admiten bajo petición. Se pueden aplicar suplementos.",
  },
  {
    label: "Seguridad 24 horas",
    icon: "seguridad",
    detail: "Alarma y cámaras de vigilancia en la zona.",
  },
];

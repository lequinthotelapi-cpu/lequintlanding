import sencillaHero from "@assets/imgs/sencilla3.jpg";
import sencillaSecundaria from "@assets/imgs/sencilla2.jpg";
import sencillaTerciaria from "@assets/imgs/sencilla1.jpeg";
import dobleHero from "@assets/imgs/doble.jpg";
import familiarHero from "@assets/imgs/familiar.jpg";
import type { Habitacion } from "@/types";

/**
 * Solo existen estas tres categorias, confirmadas por el hotel.
 * No agregar otras. La capacidad queda en null hasta tener el
 * dato oficial: no se infiere a partir de las fotos.
 */
export const habitaciones: Habitacion[] = [
  {
    slug: "sencilla",
    nombre: "Habitación Sencilla",
    resumen: "Cama doble, pensada para viajar ligero.",
    descripcion:
      "Habitación con cama doble, aire acondicionado y televisión. Baño privado con ducha de vidrio.",
    capacidad: null,
    amenities: ["Wi-Fi gratis", "Aire acondicionado", "TV"],
    fotos: [
      { src: sencillaHero, alt: "Habitación Sencilla de Le Quint Hotel, cama con toallas dobladas en forma de corazón" },
      { src: sencillaSecundaria, alt: "Habitación Sencilla de Le Quint Hotel, vista del cabecero y mesa de noche" },
      { src: sencillaTerciaria, alt: "Habitación Sencilla de Le Quint Hotel, vista general con ventilador de techo" },
    ],
  },
  {
    slug: "doble",
    nombre: "Habitación Doble",
    resumen: "Cama de mayor tamaño, para dos huéspedes.",
    descripcion:
      "Habitación con cama doble amplia, aire acondicionado y televisión. Baño privado.",
    capacidad: null,
    amenities: ["Wi-Fi gratis", "Aire acondicionado", "TV"],
    fotos: [
      { src: dobleHero, alt: "Habitación Doble de Le Quint Hotel, cama con cabecero oscuro" },
    ],
  },
  {
    slug: "familiar",
    nombre: "Habitación Familiar",
    resumen: "Dos camas y tina, para viajar en grupo.",
    descripcion:
      "Habitación con dos camas, aire acondicionado y televisión. Es la única categoría con tina en el baño.",
    capacidad: null,
    amenities: ["Wi-Fi gratis", "Aire acondicionado", "TV", "Tina"],
    fotos: [
      { src: familiarHero, alt: "Habitación Familiar de Le Quint Hotel, dos camas y closet en madera oscura" },
    ],
  },
];

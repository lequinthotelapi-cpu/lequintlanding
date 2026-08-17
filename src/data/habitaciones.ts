import individual1 from "@assets/imgs/individual1.jpg";
import individual2 from "@assets/imgs/individual2.jpg";
import individual3 from "@assets/imgs/individual3.jpg";
import doble from "@assets/imgs/doble.jpg";
import dobles1 from "@assets/imgs/dobles1.jpg";
import familiar from "@assets/imgs/familiar.jpg";
import familiar2 from "@assets/imgs/familiar2.jpg";
import familiar3 from "@assets/imgs/familiar3.jpg";
import type { Habitacion } from "@/types";

/**
 * Solo existen estas tres categorias, confirmadas por el hotel.
 * No agregar otras. La capacidad queda en null hasta tener el
 * dato oficial: no se infiere a partir de las fotos.
 */
export const habitaciones: Habitacion[] = [
  {
    slug: "individual",
    nombre: "Habitación Individual",
    resumen: "Cama sencilla, pensada para viajar ligero.",
    descripcion:
      "Habitación con cama sencilla, aire acondicionado y televisión. Baño privado con ducha de vidrio.",
    capacidad: null,
    amenities: ["Wi-Fi gratis", "Aire acondicionado", "TV"],
    fotos: [
      { src: individual1, alt: "Habitación Individual de Le Quint Hotel, cama con toallas dobladas en forma de corazón" },
      { src: individual2, alt: "Habitación Individual de Le Quint Hotel, vista del cabecero" },
      { src: individual3, alt: "Habitación Individual de Le Quint Hotel, vista general con closet" },
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
      { src: doble, alt: "Habitación Doble de Le Quint Hotel, cama con cabecero oscuro" },
      { src: dobles1, alt: "Habitación Doble de Le Quint Hotel, otra vista de la cama" },
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
      { src: familiar, alt: "Habitación Familiar de Le Quint Hotel, dos camas y closet en madera oscura" },
      { src: familiar2, alt: "Habitación Familiar de Le Quint Hotel, vista de las dos camas" },
      { src: familiar3, alt: "Habitación Familiar de Le Quint Hotel, detalle de las camas con toallas" },
    ],
  },
];

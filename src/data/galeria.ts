import fachada from "@assets/imgs/fachada.jpg";
import recepcion from "@assets/imgs/recepcion.jpg";
import sencilla1 from "@assets/imgs/sencilla1.jpeg";
import sencilla2 from "@assets/imgs/sencilla2.jpg";
import sencilla3 from "@assets/imgs/sencilla3.jpg";
import doble from "@assets/imgs/doble.jpg";
import familiar from "@assets/imgs/familiar.jpg";
import bano from "@assets/imgs/bano.jpg";
import bano2 from "@assets/imgs/bano2.jpg";
import type { GaleriaItem } from "@/types";

/**
 * lobby2.png y lobby3.png quedan excluidas a proposito: el letrero
 * de recepcion que muestran dice "LA QUINT HOTEL" (error de marca),
 * mientras que el resto de fotos, el logo y el arte de las
 * habitaciones dicen correctamente "LE QUINT".
 */
export const galeria: GaleriaItem[] = [
  { src: fachada, alt: "Fachada de Le Quint Hotel en el centro de Cúcuta", categoria: "fachada" },
  { src: recepcion, alt: "Recepción de Le Quint Hotel", categoria: "lobby" },
  { src: sencilla3, alt: "Habitación con cama doble y arte en el cabecero", categoria: "habitaciones" },
  { src: doble, alt: "Habitación Doble de Le Quint Hotel", categoria: "habitaciones" },
  { src: bano2, alt: "Baño con lavamanos en mármol gris y ducha de vidrio", categoria: "banos" },
  { src: sencilla2, alt: "Detalle de habitación con toallas dobladas en forma de corazón", categoria: "habitaciones" },
  { src: familiar, alt: "Habitación Familiar con dos camas", categoria: "habitaciones" },
  { src: bano, alt: "Baño con mampara de vidrio y espejo circular", categoria: "banos" },
  { src: sencilla1, alt: "Habitación con vista al techo, ventilador y arte del cabecero", categoria: "habitaciones" },
];

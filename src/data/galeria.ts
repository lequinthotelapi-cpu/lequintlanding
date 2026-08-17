import fachada from "@assets/imgs/fachada.jpg";
import recepcion3 from "@assets/imgs/recepcion3.jpg";
import individual2 from "@assets/imgs/individual2.jpg";
import doble from "@assets/imgs/doble.jpg";
import dobles1 from "@assets/imgs/dobles1.jpg";
import familiar2 from "@assets/imgs/familiar2.jpg";
import familiar3 from "@assets/imgs/familiar3.jpg";
import bano from "@assets/imgs/bano.jpg";
import bano2 from "@assets/imgs/bano2.jpg";
import type { GaleriaItem } from "@/types";

/**
 * lobby2.png y lobby3.png quedan excluidas: el letrero de recepcion
 * que muestran dice "LA QUINT HOTEL" (error de marca). recepcion2.jpg
 * y recepcion3.jpg tienen el mismo error, pero se usan de todas
 * formas (recepcion2 como foto principal en Hero/Presentacion/Footer,
 * recepcion3 aqui) por decision explicita del cliente (2026-08-16),
 * ya informado del error antes de confirmar.
 */
export const galeria: GaleriaItem[] = [
  { src: fachada, alt: "Fachada de Le Quint Hotel en el centro de Cúcuta", categoria: "fachada" },
  { src: recepcion3, alt: "Recepción de Le Quint Hotel", categoria: "lobby" },
  { src: individual2, alt: "Habitación Individual de Le Quint Hotel", categoria: "habitaciones" },
  { src: doble, alt: "Habitación Doble de Le Quint Hotel", categoria: "habitaciones" },
  { src: dobles1, alt: "Habitación Doble de Le Quint Hotel, otra vista", categoria: "habitaciones" },
  { src: familiar2, alt: "Habitación Familiar de Le Quint Hotel", categoria: "habitaciones" },
  { src: familiar3, alt: "Habitación Familiar de Le Quint Hotel, detalle de las camas", categoria: "habitaciones" },
  { src: bano2, alt: "Baño con lavamanos en mármol gris y ducha de vidrio", categoria: "banos" },
  { src: bano, alt: "Baño con mampara de vidrio y espejo circular", categoria: "banos" },
];

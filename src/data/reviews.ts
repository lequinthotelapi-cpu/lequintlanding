import type { Review } from "@/types";

/**
 * Reseñas reales copiadas a mano desde el perfil de Booking.com del
 * hotel (2026-08-16). No se usan las fotos de avatar de Booking:
 * son fotos personales de huéspedes reales, consentidas para
 * mostrarse en Booking, no para republicarse en un sitio de
 * terceros. Se muestra nombre, país y texto (uso estándar para
 * testimonios de huéspedes).
 *
 * La puntuacion individual queda en null: Booking no la mostraba
 * junto a estas reseñas en las capturas que se usaron como fuente.
 */
export const reviews: Review[] = [
  {
    nombre: "Wilman",
    pais: "Colombia",
    puntuacion: null,
    texto: "Para mi propósito, tiene muy buena ubicación. Muy limpio y cómodo.",
    source: "Booking.com",
  },
  {
    nombre: "Veliz",
    pais: "Venezuela",
    puntuacion: null,
    texto: "Excelente ubicación, el lugar estaba limpio y el personal muy atento.",
    source: "Booking.com",
  },
  {
    nombre: "Maria",
    pais: "Colombia",
    puntuacion: null,
    texto: "El personal es muy atento y cordial. Las instalaciones son limpias y es un lugar ideal para estancias cortas de trabajo.",
    source: "Booking.com",
  },
  {
    nombre: "Ysmary",
    pais: "Ecuador",
    puntuacion: null,
    texto: "Gracias por la atención recibida, me gustó su limpieza en el hospedaje. Buena ubicación.",
    source: "Booking.com",
  },
  {
    nombre: "Carrero",
    pais: "Colombia",
    puntuacion: null,
    texto: "La atención del recepcionista muy cordial y todo muy bonito.",
    source: "Booking.com",
  },
  {
    nombre: "Yeromy",
    pais: "Venezuela",
    puntuacion: null,
    texto: "El personal fue lo que más me gustó. Excelente atención.",
    source: "Booking.com",
  },
  {
    nombre: "Giovanni",
    pais: "Chile",
    puntuacion: null,
    texto: "Me gustó mucho la atención, reservé para mis papás y todo excelente, atendieron súper bien.",
    source: "Booking.com",
  },
  {
    nombre: "Fuentes",
    pais: "Colombia",
    puntuacion: null,
    texto: "Amabilidad, limpieza 10/10, cómodo, económico y muy buena ubicación, muy recomendable.",
    source: "Booking.com",
  },
  {
    nombre: "Vianis",
    pais: "Colombia",
    puntuacion: null,
    texto: "La limpieza, la atención, la ubicación, la tranquilidad.",
    source: "Booking.com",
  },
  {
    nombre: "Moreno",
    pais: "Venezuela",
    puntuacion: null,
    texto: "La atención del Sr. Jesús, la ubicación y las instalaciones.",
    source: "Booking.com",
  },
];

/**
 * PENDIENTE: puntuacion general y numero total de opiniones de
 * Booking (no visibles en las capturas usadas como fuente). Se
 * dejan en null para no mostrar cifras inventadas.
 */
export const bookingResumen = {
  puntuacion: null as number | null,
  totalResenas: null as number | null,
};

import { hotel } from "@/data/hotel";
import { servicios } from "@/data/servicios";

/**
 * Schema.org Hotel. Deliberadamente NO incluye aggregateRating ni
 * priceRange: no hay puntuacion de Booking ni tarifas reales
 * todavia, e inventar esos numeros seria peor que omitirlos.
 * Se completa telephone/geo cuando esos datos esten confirmados.
 */
export function buildHotelSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: hotel.nombre,
    address: {
      "@type": "PostalAddress",
      streetAddress: hotel.direccion,
      addressLocality: hotel.ciudad,
      addressCountry: "CO",
    },
    ...(hotel.telefono ? { telephone: hotel.telefono } : {}),
    ...(hotel.coordenadas
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: hotel.coordenadas.lat,
            longitude: hotel.coordenadas.lng,
          },
        }
      : {}),
    amenityFeature: servicios.map((s) => ({
      "@type": "LocationFeatureSpecification",
      name: s.label,
      value: true,
    })),
  };
}

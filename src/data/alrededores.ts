export type LugarCercano = {
  nombre: string;
  distancia: string;
};

export type CategoriaAlrededores = {
  categoria: string;
  icon: "restaurante" | "salud" | "turismo";
  lugares: LugarCercano[];
};

/**
 * Distancias aproximadas a pie, tal como las reporta el propio
 * perfil de Booking.com del hotel (2026-08-16). No inventadas.
 */
export const alrededores: CategoriaAlrededores[] = [
  {
    categoria: "Restaurantes y cafeterías",
    icon: "restaurante",
    lugares: [
      { nombre: "La Dacha", distancia: "50 m" },
      { nombre: "Pan de Bono / El Caleño", distancia: "200 m" },
      { nombre: "Pincho Burger", distancia: "250 m" },
    ],
  },
  {
    categoria: "Salud",
    icon: "salud",
    lugares: [{ nombre: "Clínica de Leones", distancia: "150 m" }],
  },
  {
    categoria: "Sitios turísticos",
    icon: "turismo",
    lugares: [
      { nombre: "Centro Cultural Quinta Teresa", distancia: "50 m" },
      { nombre: "Monumento Histórico Cristo Rey", distancia: "200 m" },
      { nombre: "Parque Santander", distancia: "300 m" },
      { nombre: "Parque La Victoria (Parque Colón)", distancia: "350 m" },
      { nombre: "Columna de Padilla", distancia: "500 m" },
      { nombre: "Malecón de Cúcuta", distancia: "600 m" },
      { nombre: "Parque del Agua", distancia: "2.5 km" },
    ],
  },
];

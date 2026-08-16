/**
 * Datos generales del hotel. Los campos vacios son informacion real
 * que todavia no ha sido confirmada: no se inventan valores de
 * relleno. Ver memoria del proyecto (hotel_facts) para el detalle
 * de que esta confirmado y que falta.
 */
type HotelInfo = {
  nombre: string;
  ciudad: string;
  pais: string;
  direccion: string;
  telefono: string;
  whatsapp: string;
  coordenadas: { lat: number; lng: number } | null;
  horario: string;
  redes: {
    instagram: string;
    facebook: string;
    tiktok: string;
  };
};

export const hotel: HotelInfo = {
  nombre: "Le Quint Hotel",
  ciudad: "Cúcuta",
  pais: "Colombia",
  direccion: "Avenida 5 No. 16-57, Centro, Cúcuta, Colombia",
  // Mismo numero confirmado para llamadas y WhatsApp.
  telefono: "+57 311 6506060",
  // Formato E.164 sin "+" para el enlace wa.me.
  whatsapp: "573116506060",
  // PENDIENTE: coordenadas GPS exactas
  coordenadas: null,
  // PENDIENTE: horario real de recepcion
  horario: "",
  // PENDIENTE: reemplazar por la URL exacta del perfil del hotel en
  // cada red social. Por ahora apuntan a la pagina general de la
  // plataforma, tal como se pidio, hasta tener las rutas reales.
  redes: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    tiktok: "https://www.tiktok.com/",
  },
};

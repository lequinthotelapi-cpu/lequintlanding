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
  email: string;
  defaultMessage?: string;
  coordenadas: { lat: number; lng: number } | null;
  checkIn: string;
  checkOut: string;
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
  // Correo oficial del hotel
  email: "lequinthotel@gmail.com",
  // Mensaje por defecto para contactos vía WhatsApp (opcional)
  defaultMessage: "Hola, les escribo desde la página web de Le Quint Hotel para solicitar información sobre disponibilidad y tarifas. Muchas gracias.",
  // PENDIENTE: coordenadas GPS exactas
  coordenadas: null,
  checkIn: "2:00 p.m.",
  checkOut: "12:00 m.",
  // PENDIENTE: reemplazar por la URL exacta del perfil del hotel en
  // cada red social. Por ahora apuntan a la pagina general de la
  // plataforma, tal como se pidio, hasta tener las rutas reales.
  redes: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    tiktok: "https://www.tiktok.com/",
  },
};

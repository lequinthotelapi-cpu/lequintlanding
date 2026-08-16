import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Hero } from "@/components/sections/Hero";
import { Presentacion } from "@/components/sections/Presentacion";
import { GaleriaEditorial } from "@/components/sections/GaleriaEditorial";
import { Habitaciones } from "@/components/sections/Habitaciones";
import { ServiciosDestacados } from "@/components/sections/ServiciosDestacados";
import { ReviewsCarrusel } from "@/components/sections/ReviewsCarrusel";
import { Ubicacion } from "@/components/sections/Ubicacion";
import { Contacto } from "@/components/sections/Contacto";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Presentacion />
        <GaleriaEditorial />
        <Habitaciones />
        <ServiciosDestacados />
        <ReviewsCarrusel />
        <Ubicacion />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

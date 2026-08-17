import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { buildHotelSchema } from "@/lib/schema";
import "./globals.css";

const heading = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const body = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

// PENDIENTE: dominio real de publicacion. Se deja el placeholder
// para que metadataBase/canonical/OG resuelvan URLs absolutas.
const siteUrl = "https://lequinthotel.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Le Quint Hotel · Cúcuta",
    template: "%s · Le Quint Hotel",
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
  },
  // PENDIENTE: descripcion oficial del hotel, a confirmar con el cliente.
  description:
    "Le Quint Hotel, en el centro de Cúcuta. Habitaciones Individual, Doble y Familiar, wifi gratis y atención directa por WhatsApp.",
  openGraph: {
    title: "Le Quint Hotel · Cúcuta",
    description:
      "Le Quint Hotel, en el centro de Cúcuta. Habitaciones Individual, Doble y Familiar, wifi gratis y atención directa por WhatsApp.",
    url: siteUrl,
    siteName: "Le Quint Hotel",
    locale: "es_CO",
    type: "website",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const schema = buildHotelSchema();

  return (
    <html
      lang="es"
      className={`${heading.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}

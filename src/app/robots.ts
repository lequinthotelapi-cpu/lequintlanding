import type { MetadataRoute } from "next";

// PENDIENTE: reemplazar por el dominio real de publicacion.
const siteUrl = "https://lequinthotel.example.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

import type { MetadataRoute } from "next";

// PENDIENTE: reemplazar por el dominio real de publicacion.
const siteUrl = "https://lequinthotel.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

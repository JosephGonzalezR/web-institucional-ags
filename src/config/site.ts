/**
 * Configuracion institucional de nivel sitio (datos no traducibles).
 * Los textos visibles viven en `src/i18n/dictionary.ts` (ES / EN).
 * Los datos por pais (redes y seguidores) viven en `config/paises.ts`.
 */

export const SITE = {
  nombre: "Academic Global Solution",
  sigla: "AGS",
  // Descripcion neutra usada en metadata y schema.org.
  descripcion:
    "Academic Global Solution es una organizacion de servicios academicos con operacion activa en tres paises de Sudamerica. Sitios, canales de contacto y comunidades en redes que respaldan su presencia.",
  correo: "contact@academicglobalsolution.com",
  correoVentas: "ventas@academicglobalsolution.com",
  dominio: "academicglobalsolution.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://academicglobalsolution.com",
  baseline: "2026-06-16",
} as const;

export const NAV = [
  { id: "nosotros", href: "#nosotros" },
  { id: "presencia", href: "#presencia" },
  { id: "servicios", href: "#servicios" },
  { id: "contacto", href: "#contacto" },
] as const;

export const SERVICIO_ORDEN = [
  "tesis",
  "redaccion",
  "presentacion",
  "datos",
  "correccion",
  "acompanamiento",
] as const;

export type ServicioId = (typeof SERVICIO_ORDEN)[number];

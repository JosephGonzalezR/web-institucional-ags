/**
 * MODELO DE DATOS CENTRAL — presencia digital por pais.
 *
 * Todo el sitio lee de aqui. Para actualizar un numero de seguidores o agregar
 * el enlace de una red, edita SOLO este archivo (ver README.md).
 *
 * Reglas:
 *  - `seguidores: null`  => aun no tenemos el conteo (la UI muestra el enlace
 *    del perfil sin numero; no lo inventa ni lo suma en los totales).
 *  - `url: null`         => esa red aun no tiene cuenta enlazada.
 *  - `fecha`             => fecha de captura (YYYY-MM-DD).
 *
 * Baseline inicial capturado el 2026-06-16.
 */

export type CodigoPais = "PE" | "CL" | "AR";
export type RedKey = "instagram" | "facebook" | "tiktok";

export interface RedSocial {
  url: string | null;
  seguidores: number | null;
  fecha: string;
}

export interface Pais {
  codigo: CodigoPais;
  pais: string;
  bandera: string;
  marca: string;
  ciudad: string;
  web: string | null;
  whatsapp: string | null;
  linkedin?: string | null;
  redes: Record<RedKey, RedSocial>;
}

export const REDES_ORDEN: RedKey[] = ["instagram", "facebook", "tiktok"];

export const REDES_META: Record<RedKey, { nombre: string }> = {
  instagram: { nombre: "Instagram" },
  facebook: { nombre: "Facebook" },
  tiktok: { nombre: "TikTok" },
};

export const PAISES: Pais[] = [
  {
    codigo: "PE",
    pais: "Peru",
    bandera: "🇵🇪",
    marca: "EducaProject Peru",
    ciudad: "Lima, Peru",
    web: "https://educaproject.ags-ed.com",
    whatsapp: "+51 965 148 374",
    linkedin: "https://www.linkedin.com/in/educa-project-6850582a0/",
    redes: {
      instagram: {
        url: "https://www.instagram.com/educaproject_peru/",
        seguidores: 6038,
        fecha: "2026-06-16",
      },
      facebook: {
        url: "https://www.facebook.com/profile.php?id=61550076753079",
        seguidores: 1069,
        fecha: "2026-06-16",
      },
      tiktok: {
        url: "https://www.tiktok.com/@educaproject_",
        seguidores: 15000,
        fecha: "2026-06-16",
      },
    },
  },
  {
    codigo: "CL",
    pais: "Chile",
    bandera: "🇨🇱",
    marca: "Tareapp",
    ciudad: "Santiago, Chile",
    web: "https://tareapp.ags-ed.com",
    whatsapp: "+56 9 5307 8288",
    redes: {
      instagram: {
        url: "https://www.instagram.com/tareappchile/",
        seguidores: 4303,
        fecha: "2026-06-16",
      },
      facebook: {
        url: "https://www.facebook.com/profile.php?id=61558060587570",
        seguidores: 1830,
        fecha: "2026-06-16",
      },
      tiktok: {
        url: "https://www.tiktok.com/@tareapp_",
        seguidores: 14900,
        fecha: "2026-06-16",
      },
    },
  },
  {
    codigo: "AR",
    pais: "Argentina",
    bandera: "🇦🇷",
    marca: "Trabajos Helper",
    ciudad: "Buenos Aires, Argentina",
    web: "https://trabajoshelper.ags-ed.com",
    whatsapp: "+54 9 11 3439-9417",
    redes: {
      instagram: {
        url: "https://www.instagram.com/trabajos_helper/",
        seguidores: 1553,
        fecha: "2026-06-16",
      },
      facebook: {
        url: "https://www.facebook.com/profile.php?id=61565498995023",
        seguidores: 1384,
        fecha: "2026-06-16",
      },
      tiktok: {
        url: "https://www.tiktok.com/@trabajos_helper",
        seguidores: 2319,
        fecha: "2026-06-16",
      },
    },
  },
];

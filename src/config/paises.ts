/**
 * MODELO DE DATOS CENTRAL — presencia digital por pais.
 *
 * Todo el sitio lee de aqui. Para actualizar un numero de seguidores o agregar
 * el enlace de una red, edita SOLO este archivo (ver README.md).
 *
 * Reglas:
 *  - `seguidores: null`  => el dato esta "por confirmar" (la UI no lo inventa
 *    ni lo suma en los totales).
 *  - `url: null`         => esa red aun no tiene cuenta enlazada.
 *  - `fecha`             => fecha de captura (YYYY-MM-DD). Inicia el conteo
 *    historico de cada cuenta.
 *  - `confianza`         => calidad de la fuente del dato (alta | media | baja).
 *
 * Baseline inicial capturado el 2026-06-16.
 */

export type CodigoPais = "PE" | "CL" | "AR";
export type Confianza = "alta" | "media" | "baja";
export type RedKey = "instagram" | "facebook" | "tiktok";

export interface RedSocial {
  url: string | null;
  seguidores: number | null;
  fecha: string;
  confianza?: Confianza;
}

export interface Pais {
  codigo: CodigoPais;
  pais: string;
  bandera: string;
  marca: string;
  ciudad: string;
  tagline: string;
  descripcion: string;
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
    tagline: "Elaboracion de tesis e investigaciones academicas",
    descripcion:
      "Acompanamiento integral de tesis: planteamiento, metodologia, redaccion, analisis y sustentacion.",
    web: "https://educaproject.ags-ed.com",
    whatsapp: "+51 965 148 374",
    linkedin: "https://www.linkedin.com/in/educa-project-6850582a0/",
    redes: {
      instagram: {
        url: "https://www.instagram.com/educaproject_peru/",
        seguidores: 6038,
        fecha: "2026-06-16",
        confianza: "media",
      },
      facebook: {
        url: "https://www.facebook.com/profile.php?id=61550076753079",
        seguidores: 1069,
        fecha: "2026-06-16",
        confianza: "media",
      },
      tiktok: {
        url: "https://www.tiktok.com/@educaproject_",
        seguidores: null,
        fecha: "2026-06-16",
        confianza: "baja",
      },
    },
  },
  {
    codigo: "CL",
    pais: "Chile",
    bandera: "🇨🇱",
    marca: "Tareapp",
    ciudad: "Santiago, Chile",
    tagline: "Trabajos academicos con calidad y a tiempo",
    descripcion:
      "Informes, ensayos, Excel, Power BI, bases de datos y programacion para estudiantes y profesionales.",
    web: "https://tareapp.ags-ed.com",
    whatsapp: "+56 9 5307 8288",
    redes: {
      instagram: { url: null, seguidores: null, fecha: "2026-06-16" },
      facebook: {
        url: "https://www.facebook.com/profile.php?id=61558060587570",
        seguidores: null,
        fecha: "2026-06-16",
        confianza: "media",
      },
      tiktok: { url: null, seguidores: null, fecha: "2026-06-16" },
    },
  },
  {
    codigo: "AR",
    pais: "Argentina",
    bandera: "🇦🇷",
    marca: "Trabajos Helper",
    ciudad: "Buenos Aires, Argentina",
    tagline: "Soluciones academicas",
    descripcion:
      "Trabajos practicos, informes, presentaciones, Excel, Power BI y programacion.",
    web: "https://trabajoshelper.ags-ed.com",
    whatsapp: null,
    redes: {
      instagram: { url: null, seguidores: null, fecha: "2026-06-16" },
      facebook: {
        url: "https://www.facebook.com/profile.php?id=61565498995023",
        seguidores: null,
        fecha: "2026-06-16",
        confianza: "media",
      },
      tiktok: { url: null, seguidores: null, fecha: "2026-06-16" },
    },
  },
];

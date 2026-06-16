/**
 * Configuracion institucional de nivel sitio.
 * Edita aqui los textos corporativos, el correo y los servicios.
 * Los datos por pais (redes y seguidores) viven en `config/paises.ts`.
 */

export const SITE = {
  nombre: "Academic Global Solutions",
  sigla: "AGS",
  // Reclamo institucional. Sin guion largo en textos visibles.
  claim: "Infraestructura academica con presencia en Peru, Chile y Argentina",
  descripcion:
    "Academic Global Solutions es una organizacion de servicios academicos con operacion real y activa en tres paises de Sudamerica. Sitios, canales de contacto y comunidades en redes que respaldan su presencia.",
  correo: "contact@academicglobalsolution.com",
  // Dominio objetivo (no publicar sin confirmacion del CEO).
  dominio: "academicglobalsolution.com",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://academicglobalsolution.com",
  // Fecha del baseline (inicio del conteo historico de seguidores).
  baseline: "2026-06-16",
} as const;

export const NAV = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Presencia", href: "#presencia" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
] as const;

export interface Servicio {
  titulo: string;
  descripcion: string;
  icono:
    | "tesis"
    | "redaccion"
    | "presentacion"
    | "datos"
    | "correccion"
    | "acompanamiento";
}

/** Solo descriptivo. Sin precios, sin embudo de venta. */
export const SERVICIOS: Servicio[] = [
  {
    titulo: "Asesoria de tesis e investigacion",
    descripcion:
      "Planteamiento, metodologia, redaccion academica, analisis y sustentacion, con revision por etapas.",
    icono: "tesis",
  },
  {
    titulo: "Trabajos y redaccion academica",
    descripcion:
      "Informes, ensayos, monografias y casos de estudio con rigor y formato institucional.",
    icono: "redaccion",
  },
  {
    titulo: "Presentaciones y sustentaciones",
    descripcion:
      "Diapositivas y material de apoyo para defensas y exposiciones academicas.",
    icono: "presentacion",
  },
  {
    titulo: "Datos y reportes",
    descripcion:
      "Excel avanzado, Power BI, bases de datos y visualizaciones para investigacion y gestion.",
    icono: "datos",
  },
  {
    titulo: "Correccion y reduccion de IA",
    descripcion:
      "Revision de estilo, citado y coherencia, con ajuste para una redaccion natural y humana.",
    icono: "correccion",
  },
  {
    titulo: "Acompanamiento personalizado",
    descripcion:
      "Sesiones uno a uno, diagnostico de avance y seguimiento durante todo el proceso.",
    icono: "acompanamiento",
  },
];

export const NOSOTROS = [
  "Academic Global Solutions (AGS) es una organizacion dedicada a la asesoria academica que opera de forma simultanea en Peru, Chile y Argentina. Cada pais cuenta con su propia marca, su sitio web, sus canales de contacto y su comunidad en redes sociales.",
  "Nuestra estructura combina equipos locales con una base tecnologica comun: infraestructura digital propia, atencion por canales oficiales y procesos estandarizados de trabajo. Esto nos permite mantener una operacion consistente y verificable en los tres mercados.",
  "Esta presencia multipais no es una proyeccion. Son cuentas activas, sitios en linea y comunidades reales que se pueden visitar y contactar hoy mismo. Las cifras de esta pagina reflejan ese alcance y se actualizan de forma periodica.",
] as const;

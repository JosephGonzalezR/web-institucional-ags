import type { Metadata } from "next";
import { TerminosContenido } from "@/components/terminos-contenido";
import { TERMINOS } from "@/config/terminos";

// Metadata en el idioma por defecto del sitio (es). El contenido visible
// cambia con el selector de idioma.
export const metadata: Metadata = {
  title: TERMINOS.es.metaTitulo,
  description: TERMINOS.es.metaDescripcion,
  alternates: { canonical: "/terminos/" },
  openGraph: {
    type: "article",
    title: TERMINOS.es.metaTitulo,
    description: TERMINOS.es.metaDescripcion,
    url: "/terminos/",
  },
};

export default function TerminosPage() {
  return <TerminosContenido />;
}

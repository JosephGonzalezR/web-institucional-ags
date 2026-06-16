import { SITE } from "@/config/site";
import { PAISES, REDES_ORDEN } from "@/config/paises";

/**
 * schema.org Organization. `sameAs` agrupa todos los perfiles y sitios
 * confirmados de las tres marcas: refuerza la senal de presencia real.
 */
export function JsonLd() {
  const sameAs: string[] = [];
  for (const p of PAISES) {
    if (p.web) sameAs.push(p.web);
    if (p.linkedin) sameAs.push(p.linkedin);
    for (const red of REDES_ORDEN) {
      const url = p.redes[red].url;
      if (url) sameAs.push(url);
    }
  }

  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.nombre,
    alternateName: SITE.sigla,
    url: SITE.url,
    email: SITE.correo,
    description: SITE.descripcion,
    logo: `${SITE.url}/logo.png`,
    areaServed: ["PE", "CL", "AR"],
    sameAs,
    subOrganization: PAISES.map((p) => ({
      "@type": "Organization",
      name: p.marca,
      url: p.web ?? undefined,
      areaServed: p.codigo,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

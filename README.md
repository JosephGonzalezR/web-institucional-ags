# Web institucional — Academic Global Solutions (AGS)

Pieza de credibilidad B2B. Muestra que AGS tiene infraestructura digital real y
activa en tres paises (Peru, Chile y Argentina): sitios, canales de contacto y
comunidades en redes con seguidores. **No** es una web de captacion: no hay
embudo de venta ni precios. El protagonista son los datos y la presencia.

Stack: **Next.js 14 (App Router) + TypeScript + Tailwind CSS**. Despliegue en
Vercel.

---

## Como editar los datos (lo unico que se toca para actualizar cifras)

Todo el sitio lee de **`src/config/paises.ts`**. Cambiar un numero de seguidores
o agregar el enlace de una red = editar ese archivo. Nada mas.

Cada pais tiene esta forma:

```ts
{
  codigo: "PE",
  pais: "Peru",
  bandera: "🇵🇪",
  marca: "EducaProject Peru",
  ciudad: "Lima, Peru",
  tagline: "...",
  descripcion: "...",
  web: "https://educaproject.ags-ed.com",
  whatsapp: "+51 965 148 374",
  redes: {
    instagram: { url: "...", seguidores: 6038, fecha: "2026-06-16", confianza: "media" },
    facebook:  { url: "...", seguidores: 1069, fecha: "2026-06-16", confianza: "media" },
    tiktok:    { url: "...", seguidores: null, fecha: "2026-06-16", confianza: "baja" },
  },
}
```

Reglas:

- `seguidores: null` -> el dato sale como **"Por confirmar"**. La UI no lo inventa
  ni lo suma en los totales.
- `url: null` -> esa red aparece como **"Cuenta en proceso"** (sin enlace).
- `fecha` -> fecha de captura (YYYY-MM-DD). Inicia el conteo historico.
- Los totales del Hero y del Panel de cifras se **recalculan solos** desde estos
  numeros (ver `src/lib/stats.ts`).

Los textos institucionales (claim, "Quienes somos", servicios, correo) estan en
**`src/config/site.ts`**.

---

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produccion
npm run start    # sirve el build
```

Variable opcional `NEXT_PUBLIC_SITE_URL` (canonical/OG). Por defecto apunta al
dominio objetivo `academicglobalsolution.com`.

---

## Conteo de seguidores

- **Fase 1 (activa):** baseline manual con fecha de captura, editable en
  `config/paises.ts`. Es lo que se muestra hoy.
- **Fase 2 (estructura lista, automatizacion pendiente):** actualizacion
  periodica via Vercel Cron + Apify/API. El punto de integracion esta en
  `src/lib/followers.ts`. Para activarla hace falta: (1) handles oficiales
  confirmados de cada red, (2) `APIFY_TOKEN` en Vercel, (3) un almacen para el
  historico (Vercel KV / Postgres) si se quiere graficar crecimiento.

---

## Estructura

```
src/
  app/            layout (SEO, fuentes), page, sitemap, robots
  components/
    sections/     navbar, hero, nosotros, presencia, cifras, servicios, contacto, footer
    country-card  tarjeta por pais
    south-america-map  mapa estilizado SVG
    icons         iconos SVG propios (UI + marcas), sin dependencias de version
  config/
    paises.ts     >> DATOS POR PAIS (editar aqui)
    site.ts       >> textos institucionales y servicios
  lib/            stats (agregados), format, followers (fase 2)
```

SEO incluido: metadata, Open Graph, Twitter card, schema.org Organization
(`json-ld`), `sitemap.xml` y `robots.txt`.

## Datos y mapeo

El detalle de la recoleccion (mapeo pagina de Facebook -> pais, fuentes,
confianza y pendientes) esta en `DATOS_RECOLECTADOS.md`.

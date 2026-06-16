# Datos recolectados — presencia digital AGS

Captura inicial (baseline): **2026-06-16**. Fuente principal: las 3 paginas de
Facebook indicadas por el CEO y los sitios oficiales en subdominios de
`ags-ed.com`. Apify no estuvo disponible en esta sesion, asi que se uso busqueda
web + lectura directa de los sitios. Lo no verificable se marca como pendiente y
queda editable en `src/config/paises.ts`.

## Mapeo pagina de Facebook -> pais (confirmado)

| Pagina de Facebook | Marca | Ciudad | Pais |
|---|---|---|---|
| facebook.com/profile.php?id=61550076753079 | EducaProject Peru | Lima | 🇵🇪 Peru |
| facebook.com/profile.php?id=61558060587570 | Tareapp | Santiago | 🇨🇱 Chile |
| facebook.com/profile.php?id=61565498995023 | Trabajos Helper | Buenos Aires | 🇦🇷 Argentina |

## Tabla de datos

| Pais | Marca | Canal | URL | Seguidores | Fecha | Confianza |
|---|---|---|---|---|---|---|
| Peru | EducaProject Peru | Sitio web | https://educaproject.ags-ed.com | n/a | 2026-06-16 | alta |
| Peru | EducaProject Peru | WhatsApp | +51 965 148 374 | n/a | 2026-06-16 | alta |
| Peru | EducaProject Peru | Instagram | https://www.instagram.com/educaproject_peru/ | 6.038 | 2026-06-16 | media |
| Peru | EducaProject Peru | Facebook | profile.php?id=61550076753079 | 1.069 | 2026-06-16 | media |
| Peru | EducaProject Peru | TikTok | https://www.tiktok.com/@educaproject_ | por confirmar | 2026-06-16 | baja |
| Chile | Tareapp | Sitio web | https://tareapp.ags-ed.com | n/a | 2026-06-16 | alta |
| Chile | Tareapp | WhatsApp | +56 9 5307 8288 | n/a | 2026-06-16 | alta |
| Chile | Tareapp | Facebook | profile.php?id=61558060587570 | por confirmar | 2026-06-16 | media |
| Chile | Tareapp | Instagram | por confirmar | por confirmar | 2026-06-16 | baja |
| Chile | Tareapp | TikTok | por confirmar | por confirmar | 2026-06-16 | baja |
| Argentina | Trabajos Helper | Sitio web | https://trabajoshelper.ags-ed.com | n/a | 2026-06-16 | alta |
| Argentina | Trabajos Helper | WhatsApp | por confirmar (sitio trae plantilla) | n/a | 2026-06-16 | baja |
| Argentina | Trabajos Helper | Facebook | profile.php?id=61565498995023 | por confirmar | 2026-06-16 | media |
| Argentina | Trabajos Helper | Instagram | por confirmar | por confirmar | 2026-06-16 | baja |
| Argentina | Trabajos Helper | TikTok | por confirmar | por confirmar | 2026-06-16 | baja |

**Total confirmado de seguidores (baseline): 7.107** (Instagram 6.038 + Facebook 1.069).

## Pendientes (y por que)

- **Seguidores de Facebook de las 3 marcas en vivo:** Facebook devuelve muro de
  login a la lectura automatica. El de Peru (1.069) proviene de un snippet de
  buscador, por eso su confianza es media.
- **Instagram / TikTok de Chile y Argentina:** no hay handle publico localizable
  y esas plataformas bloquean la lectura anonima. Los iconos sociales de los tres
  sitios oficiales son placeholders (`#`), asi que tampoco se pudo extraer el
  handle desde la propia web.
- **TikTok de Peru:** aparece el candidato `@educaproject_` pero sin conteo
  confirmado.
- **WhatsApp de Argentina:** el sitio oficial trae un numero plantilla
  (`+54 9 11 9999-9999`). El real esta pendiente.

## Notas

- Discrepancia de ubicacion en Peru: Facebook dice Lince/Lima y el sitio dice
  Punta Hermosa. Conviene unificar.
- EducaProject tiene ademas LinkedIn: linkedin.com/in/educa-project-6850582a0
- Para completar y luego automatizar los conteos: confirmar los handles
  oficiales con marketing y habilitar Apify (ver `src/lib/followers.ts`).

// Genera src/config/sa-geo.ts a partir de GeoJSON real de Sudamerica.
// Proyeccion equirectangular con correccion de longitud por latitud media.
// Ejecutar: node scripts/gen-map.mjs
import { writeFileSync } from "node:fs";

const BASE =
  "https://raw.githubusercontent.com/johan/world.geo.json/master/countries";

const PAISES = [
  { iso: "ARG", name: "Argentina", hl: true },
  { iso: "CHL", name: "Chile", hl: true },
  { iso: "PER", name: "Peru", hl: true },
  { iso: "BOL", name: "Bolivia", hl: false },
  { iso: "BRA", name: "Brasil", hl: false },
  { iso: "COL", name: "Colombia", hl: false },
  { iso: "ECU", name: "Ecuador", hl: false },
  { iso: "GUY", name: "Guyana", hl: false },
  { iso: "PRY", name: "Paraguay", hl: false },
  { iso: "SUR", name: "Suriname", hl: false },
  { iso: "URY", name: "Uruguay", hl: false },
  { iso: "VEN", name: "Venezuela", hl: false },
];

const CAPITALES = {
  PER: { lon: -77.04, lat: -12.05 },
  CHL: { lon: -70.66, lat: -33.45 },
  ARG: { lon: -58.38, lat: -34.6 },
};

const polygonsOf = (geom) => {
  if (!geom) return [];
  if (geom.type === "Polygon") return [geom.coordinates];
  if (geom.type === "MultiPolygon") return geom.coordinates;
  return [];
};

async function main() {
  const data = [];
  let minLon = Infinity, maxLon = -Infinity, minLat = Infinity, maxLat = -Infinity;

  for (const p of PAISES) {
    const res = await fetch(`${BASE}/${p.iso}.geo.json`);
    if (!res.ok) {
      console.warn(`omitido ${p.iso}: HTTP ${res.status}`);
      continue;
    }
    const gj = await res.json();
    const polys = [];
    for (const feat of gj.features ?? []) {
      for (const poly of polygonsOf(feat.geometry)) polys.push(poly);
    }
    // Filtra anillos diminutos (islas) para aligerar.
    const limpio = polys
      .map((rings) => rings.filter((ring) => ring.length >= 8))
      .filter((rings) => rings.length > 0);

    for (const rings of limpio) {
      for (const ring of rings) {
        for (const [lon, lat] of ring) {
          if (lon < minLon) minLon = lon;
          if (lon > maxLon) maxLon = lon;
          if (lat < minLat) minLat = lat;
          if (lat > maxLat) maxLat = lat;
        }
      }
    }
    data.push({ ...p, polys: limpio });
  }

  // Recorta la Antartida/islas remotas: limita latitud sur a -56.
  minLat = Math.max(minLat, -56);

  const meanLat = ((minLat + maxLat) / 2) * (Math.PI / 180);
  const lonScale = Math.cos(meanLat);
  const W = 1000;
  const effLonRange = (maxLon - minLon) * lonScale;
  const k = W / effLonRange;
  const H = Math.round((maxLat - minLat) * k);

  const project = (lon, lat) => {
    const x = (lon - minLon) * lonScale * k;
    const y = (maxLat - lat) * k;
    return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
  };

  const toPath = (polys) => {
    let d = "";
    for (const rings of polys) {
      for (const ring of rings) {
        ring.forEach(([lon, lat], i) => {
          const [x, y] = project(lon, lat);
          d += (i === 0 ? "M" : "L") + x + " " + y;
        });
        d += "Z";
      }
    }
    return d;
  };

  const countries = data.map((c) => ({
    iso: c.iso,
    name: c.name,
    hl: c.hl,
    d: toPath(c.polys),
  }));

  const markers = Object.entries(CAPITALES).map(([iso, c]) => {
    const [x, y] = project(c.lon, c.lat);
    return { iso, x, y };
  });

  const out = `// AUTOGENERADO por scripts/gen-map.mjs. No editar a mano.
export interface GeoCountry { iso: string; name: string; hl: boolean; d: string }
export interface GeoMarker { iso: string; x: number; y: number }
export const SA_VIEWBOX = "0 0 ${W} ${H}";
export const SA_COUNTRIES: GeoCountry[] = ${JSON.stringify(countries)};
export const SA_MARKERS: GeoMarker[] = ${JSON.stringify(markers)};
`;

  writeFileSync(new URL("../src/config/sa-geo.ts", import.meta.url), out);
  console.log(
    `OK viewBox 0 0 ${W} ${H}, ${countries.length} paises, ` +
      `${(out.length / 1024).toFixed(1)} KB`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

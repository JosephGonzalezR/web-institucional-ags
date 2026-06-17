// Genera src/config/sa-geo.ts a partir de GeoJSON de mayor resolucion.
// Bordes suaves: se redondea a pixel (entero) y se deduplican puntos, asi el
// detalle alto se comprime al tamano del viewBox sin inflar el bundle.
// Ejecutar: node scripts/gen-map.mjs
import { writeFileSync } from "node:fs";

const BASE =
  "https://raw.githubusercontent.com/georgique/world-geojson/develop/countries";

const PAISES = [
  { file: "argentina", iso: "ARG", name: "Argentina", hl: true },
  { file: "chile", iso: "CHL", name: "Chile", hl: true },
  { file: "peru", iso: "PER", name: "Peru", hl: true },
  { file: "bolivia", iso: "BOL", name: "Bolivia", hl: false },
  { file: "brazil", iso: "BRA", name: "Brasil", hl: false },
  { file: "colombia", iso: "COL", name: "Colombia", hl: false },
  { file: "ecuador", iso: "ECU", name: "Ecuador", hl: false },
  { file: "guyana", iso: "GUY", name: "Guyana", hl: false },
  { file: "paraguay", iso: "PRY", name: "Paraguay", hl: false },
  { file: "suriname", iso: "SUR", name: "Suriname", hl: false },
  { file: "uruguay", iso: "URY", name: "Uruguay", hl: false },
  { file: "venezuela", iso: "VEN", name: "Venezuela", hl: false },
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
    const res = await fetch(`${BASE}/${p.file}.json`);
    if (!res.ok) {
      console.warn(`omitido ${p.file}: HTTP ${res.status}`);
      continue;
    }
    const gj = await res.json();
    const polys = [];
    for (const feat of gj.features ?? []) {
      for (const poly of polygonsOf(feat.geometry)) {
        // Descarta islas lejanas (Galapagos, islas del Atlantico) por la
        // longitud del centroide del anillo exterior: rompian el encuadre.
        const outer = poly[0] ?? [];
        if (!outer.length) continue;
        const clon = outer.reduce((s, p) => s + p[0], 0) / outer.length;
        if (clon < -82 || clon > -33) continue;
        polys.push(poly);
      }
    }
    for (const rings of polys) {
      for (const ring of rings) {
        for (const [lon, lat] of ring) {
          if (lon < minLon) minLon = lon;
          if (lon > maxLon) maxLon = lon;
          if (lat < minLat) minLat = lat;
          if (lat > maxLat) maxLat = lat;
        }
      }
    }
    data.push({ ...p, polys });
  }

  // Recorta el extremo sur (islas remotas / Antartida).
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
    return [Math.round(x), Math.round(y)];
  };

  const toPath = (polys) => {
    let d = "";
    for (const rings of polys) {
      for (const ring of rings) {
        const pts = [];
        let prev = null;
        for (const [lon, lat] of ring) {
          const [x, y] = project(lon, lat);
          if (!prev || prev[0] !== x || prev[1] !== y) {
            pts.push([x, y]);
            prev = [x, y];
          }
        }
        if (pts.length < 4) continue;
        const xs = pts.map((q) => q[0]);
        const ys = pts.map((q) => q[1]);
        const bw = Math.max(...xs) - Math.min(...xs);
        const bh = Math.max(...ys) - Math.min(...ys);
        if (bw < 6 && bh < 6) continue; // descarta islas diminutas
        pts.forEach(([x, y], i) => {
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

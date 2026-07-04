import { cn } from "@/lib/utils";
import { SA_COUNTRIES, SA_MARKERS, SA_VIEWBOX } from "@/config/sa-geo";
import { PAISES } from "@/config/paises";

/**
 * Mapa de Sudamerica con Peru, Chile y Argentina resaltados en dorado.
 * Estetica editorial clara: continente en tono papel, paises en oro, un punto
 * dorado marca cada uno y una linea fina sale hacia su marca. Sin banderitas.
 */

const [, , MAP_W, MAP_H] = SA_VIEWBOX.split(" ").map(Number);
const PADX = 380;
const VB_X = -PADX;
const VB_Y = -30;
const VB_W = MAP_W + PADX * 2;
const VB_H = MAP_H + 60;
const VB = `${VB_X} ${VB_Y} ${VB_W} ${VB_H}`;

const POR_ISO: Record<string, (typeof PAISES)[number] | undefined> = {
  PER: PAISES.find((p) => p.codigo === "PE"),
  CHL: PAISES.find((p) => p.codigo === "CL"),
  ARG: PAISES.find((p) => p.codigo === "AR"),
};

const CALLOUT: Record<string, { ax: number; side: "izq" | "der" }> = {
  PER: { ax: -60, side: "izq" },
  CHL: { ax: -60, side: "izq" },
  ARG: { ax: MAP_W + 60, side: "der" },
};

const pct = (v: number, min: number, size: number) => ((v - min) / size) * 100;

function marcaCorta(marca: string, pais: string) {
  return marca.replace(new RegExp(`\\s*${pais}$`, "i"), "").trim();
}

export function SouthAmericaMap({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[460px]", className)}>
      <div className="relative" style={{ aspectRatio: `${VB_W} / ${VB_H}` }}>
        <svg
          viewBox={VB}
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-label="Mapa de Sudamerica con las marcas de Peru, Chile y Argentina"
        >
          <defs>
            <linearGradient id="ags-hl" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C9A24A" />
              <stop offset="100%" stopColor="#9A6E2E" />
            </linearGradient>
            <marker
              id="ags-arrow"
              viewBox="0 0 10 10"
              refX="7"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="#B8863B" />
            </marker>
          </defs>

          {/* Continente de contexto (tono papel, borde navy fino). */}
          {SA_COUNTRIES.filter((c) => !c.hl).map((c) => (
            <path
              key={c.iso}
              d={c.d}
              fill="#E7E1D1"
              stroke="rgba(11,27,51,0.22)"
              strokeWidth={1.4}
              strokeLinejoin="round"
            />
          ))}

          {/* Paises resaltados (oro, borde navy). */}
          {SA_COUNTRIES.filter((c) => c.hl).map((c) => (
            <path
              key={c.iso}
              d={c.d}
              fill="url(#ags-hl)"
              stroke="#0B1B33"
              strokeWidth={1.4}
              strokeLinejoin="round"
            />
          ))}

          {/* Lineas guia hacia cada etiqueta. */}
          {SA_MARKERS.map((m) => {
            const c = CALLOUT[m.iso];
            if (!c) return null;
            return (
              <line
                key={`l-${m.iso}`}
                x1={m.x}
                y1={m.y}
                x2={c.ax}
                y2={m.y}
                stroke="#B8863B"
                strokeWidth={2.6}
                opacity={0.9}
                markerEnd="url(#ags-arrow)"
              />
            );
          })}

          {/* Anillo pulsante detras de cada punto. */}
          {SA_MARKERS.map((m, i) => (
            <circle
              key={`ring-${m.iso}`}
              cx={m.x}
              cy={m.y}
              r={12}
              fill="none"
              stroke="rgba(184,134,59,0.5)"
              strokeWidth={2}
              className="origin-center animate-pulse-ring [transform-box:fill-box]"
              style={{ animationDelay: `${i * 0.7}s` }}
            />
          ))}
        </svg>

        {/* Punto dorado sobre cada pais. */}
        {SA_MARKERS.map((m) => {
          const pais = POR_ISO[m.iso];
          if (!pais) return null;
          return (
            <div
              key={`dot-${m.iso}`}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${pct(m.x, VB_X, VB_W)}%`,
                top: `${pct(m.y, VB_Y, VB_H)}%`,
              }}
            >
              <span className="block h-3 w-3 rounded-full border-2 border-marfil bg-gold shadow-[0_2px_6px_rgba(11,27,51,0.35)]" />
            </div>
          );
        })}

        {/* Etiquetas de marca (tarjeta clara, sobria). */}
        {SA_MARKERS.map((m) => {
          const pais = POR_ISO[m.iso];
          const c = CALLOUT[m.iso];
          if (!pais || !c) return null;
          const left = pct(c.ax, VB_X, VB_W);
          const top = pct(m.y, VB_Y, VB_H);
          return (
            <div
              key={`lbl-${m.iso}`}
              className="absolute"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                transform:
                  c.side === "izq"
                    ? "translate(-100%, -50%)"
                    : "translate(0, -50%)",
              }}
            >
              <div
                className={cn(
                  "rounded-sm border border-line bg-paper px-3 py-1.5 shadow-card",
                  c.side === "izq" ? "mr-2 text-right" : "ml-2 text-left",
                )}
              >
                <span className="block whitespace-nowrap font-display text-[14px] tracking-tight text-ink">
                  {marcaCorta(pais.marca, pais.pais)}
                </span>
                <span className="block text-[11px] font-medium uppercase tracking-eyebrow text-muted-2">
                  {pais.pais}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

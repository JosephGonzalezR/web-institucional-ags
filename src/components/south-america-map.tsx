import { cn } from "@/lib/utils";
import { SA_COUNTRIES, SA_MARKERS } from "@/config/sa-geo";
import { PAISES } from "@/config/paises";

/**
 * Mapa de Sudamerica (GeoJSON real proyectado) con Peru, Chile y Argentina
 * resaltados. Cada pais sale con una flecha hacia su marca (callout).
 * Se amplia el viewBox con margenes laterales para alojar las etiquetas.
 */

// viewBox original del mapa: 0 0 1000 1568. Ampliamos a los lados.
const PADX = 380;
const W = 1000;
const H = 1568;
const VB = `${-PADX} -30 ${W + PADX * 2} ${H + 60}`;
const VB_W = W + PADX * 2;
const VB_H = H + 60;
const VB_X = -PADX;
const VB_Y = -30;

const POR_ISO: Record<string, (typeof PAISES)[number] | undefined> = {
  PER: PAISES.find((p) => p.codigo === "PE"),
  CHL: PAISES.find((p) => p.codigo === "CL"),
  ARG: PAISES.find((p) => p.codigo === "AR"),
};

// Punto de anclaje de cada etiqueta (en coords del viewBox) y lado.
const CALLOUT: Record<string, { ax: number; ay: number; side: "izq" | "der" }> = {
  PER: { ax: -60, ay: 330, side: "izq" },
  CHL: { ax: -60, ay: 1085, side: "izq" },
  ARG: { ax: 1060, ay: 1150, side: "der" },
};

const pct = (v: number, min: number, size: number) => ((v - min) / size) * 100;

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
              <stop offset="0%" stopColor="#f0d27e" />
              <stop offset="100%" stopColor="#c9962e" />
            </linearGradient>
            <marker
              id="ags-arrow"
              viewBox="0 0 10 10"
              refX="7"
              refY="5"
              markerWidth="6.5"
              markerHeight="6.5"
              orient="auto"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="#e8c16a" />
            </marker>
          </defs>

          {/* Continente de contexto (atenuado). */}
          {SA_COUNTRIES.filter((c) => !c.hl).map((c) => (
            <path
              key={c.iso}
              d={c.d}
              fill="#0c1a30"
              stroke="rgba(214,178,94,0.14)"
              strokeWidth={1}
            />
          ))}

          {/* Paises resaltados. */}
          {SA_COUNTRIES.filter((c) => c.hl).map((c) => (
            <path
              key={c.iso}
              d={c.d}
              fill="url(#ags-hl)"
              stroke="#fbf4dc"
              strokeWidth={1.4}
              fillOpacity={0.95}
            />
          ))}

          {/* Flechas (lineas guia) desde cada pais hacia su etiqueta. */}
          {SA_MARKERS.map((m) => {
            const c = CALLOUT[m.iso];
            if (!c) return null;
            return (
              <line
                key={`l-${m.iso}`}
                x1={m.x}
                y1={m.y}
                x2={c.ax}
                y2={c.ay}
                stroke="#e8c16a"
                strokeWidth={4}
                opacity={0.9}
                markerEnd="url(#ags-arrow)"
              />
            );
          })}

          {/* Marcadores con anillo pulsante. */}
          {SA_MARKERS.map((m, i) => (
            <g key={m.iso}>
              <circle
                cx={m.x}
                cy={m.y}
                r={12}
                fill="none"
                stroke="rgba(232,193,106,0.7)"
                strokeWidth={3}
                className="origin-center animate-pulse-ring [transform-box:fill-box]"
                style={{ animationDelay: `${i * 0.6}s` }}
              />
              <circle cx={m.x} cy={m.y} r={15} fill="rgba(232,193,106,0.18)" />
              <circle cx={m.x} cy={m.y} r={7} fill="#fbf4dc" />
              <circle cx={m.x} cy={m.y} r={3.5} fill="#a87a22" />
            </g>
          ))}
        </svg>

        {/* Etiquetas de marca (HTML nitido sobre el SVG). */}
        {SA_MARKERS.map((m) => {
          const pais = POR_ISO[m.iso];
          const c = CALLOUT[m.iso];
          if (!pais || !c) return null;
          const left = pct(c.ax, VB_X, VB_W);
          const top = pct(c.ay, VB_Y, VB_H);
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
                  "flex items-center gap-2 rounded-lg border border-line bg-ink/90 px-2.5 py-1.5 shadow-glow backdrop-blur",
                  c.side === "izq" ? "mr-2" : "ml-2",
                )}
              >
                <span aria-hidden="true" className="text-base leading-none">
                  {pais.bandera}
                </span>
                <span className="leading-tight">
                  <span className="block whitespace-nowrap text-[13px] font-semibold text-white">
                    {pais.marca}
                  </span>
                  <span className="block text-[11px] font-medium text-brand-300">
                    {pais.pais}
                  </span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

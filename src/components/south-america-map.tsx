import { cn } from "@/lib/utils";
import { SA_COUNTRIES, SA_MARKERS, SA_VIEWBOX } from "@/config/sa-geo";
import { PAISES } from "@/config/paises";

/**
 * Mapa de Sudamerica (GeoJSON de alta resolucion, bordes suaves) con Peru,
 * Chile y Argentina resaltados. Cada pais sale con una flecha horizontal hacia
 * su marca. Estetica sobria / ejecutiva: navy profundo + oro contenido.
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

// Lado y punto donde termina la flecha (a la altura del marcador).
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
              <stop offset="0%" stopColor="#caa451" />
              <stop offset="100%" stopColor="#9a7528" />
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
              <path d="M0,0 L10,5 L0,10 z" fill="#c9a24a" />
            </marker>
          </defs>

          {/* Continente de contexto (navy profundo, borde sutil). */}
          {SA_COUNTRIES.filter((c) => !c.hl).map((c) => (
            <path
              key={c.iso}
              d={c.d}
              fill="#0e1c31"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth={1}
              strokeLinejoin="round"
            />
          ))}

          {/* Paises resaltados (oro contenido, borde limpio). */}
          {SA_COUNTRIES.filter((c) => c.hl).map((c) => (
            <path
              key={c.iso}
              d={c.d}
              fill="url(#ags-hl)"
              fillOpacity={0.95}
              stroke="#efe0b4"
              strokeWidth={1.2}
              strokeLinejoin="round"
            />
          ))}

          {/* Flechas guia horizontales hacia cada etiqueta. */}
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
                stroke="#c9a24a"
                strokeWidth={3.4}
                opacity={0.85}
                markerEnd="url(#ags-arrow)"
              />
            );
          })}

          {/* Marcadores discretos con anillo pulsante. */}
          {SA_MARKERS.map((m, i) => (
            <g key={m.iso}>
              <circle
                cx={m.x}
                cy={m.y}
                r={11}
                fill="none"
                stroke="rgba(201,162,74,0.6)"
                strokeWidth={2.5}
                className="origin-center animate-pulse-ring [transform-box:fill-box]"
                style={{ animationDelay: `${i * 0.7}s` }}
              />
              <circle cx={m.x} cy={m.y} r={13} fill="rgba(201,162,74,0.16)" />
              <circle cx={m.x} cy={m.y} r={6} fill="#f3ead2" />
              <circle cx={m.x} cy={m.y} r={3} fill="#8a6a1e" />
            </g>
          ))}
        </svg>

        {/* Etiquetas de marca (sobrias). */}
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
                  "flex items-center gap-2 rounded-md border border-white/10 bg-[#0b1626]/95 px-2.5 py-1.5 shadow-[0_10px_26px_-10px_rgba(0,0,0,0.75)] backdrop-blur",
                  c.side === "izq" ? "mr-1.5" : "ml-1.5",
                )}
              >
                <span aria-hidden="true" className="text-base leading-none">
                  {pais.bandera}
                </span>
                <span className="leading-tight">
                  <span className="block whitespace-nowrap text-[13px] font-semibold tracking-tight text-white">
                    {marcaCorta(pais.marca, pais.pais)}
                  </span>
                  <span className="block text-[11px] font-medium text-slate-400">
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

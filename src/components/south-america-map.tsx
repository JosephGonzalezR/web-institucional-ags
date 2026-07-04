import { cn } from "@/lib/utils";
import { SA_COUNTRIES, SA_MARKERS, SA_VIEWBOX } from "@/config/sa-geo";
import { PAISES } from "@/config/paises";

/**
 * Mapa de Sudamerica con Peru, Chile y Argentina resaltados en dorado.
 * Va dentro de un panel navy: continente en navy, paises en oro, banderita en
 * cada pin, anillo pulsante y una linea fina hacia cada marca.
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
              <stop offset="0%" stopColor="#D8B863" />
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
              <path d="M0,0 L10,5 L0,10 z" fill="#C9A24A" />
            </marker>
          </defs>

          {/* Continente de contexto (navy con fronteras). */}
          {SA_COUNTRIES.filter((c) => !c.hl).map((c) => (
            <path
              key={c.iso}
              d={c.d}
              fill="#0E2140"
              stroke="rgba(190,210,236,0.32)"
              strokeWidth={1.4}
              strokeLinejoin="round"
            />
          ))}

          {/* Paises resaltados (oro, borde claro). */}
          {SA_COUNTRIES.filter((c) => c.hl).map((c) => (
            <path
              key={c.iso}
              d={c.d}
              fill="url(#ags-hl)"
              stroke="#F6ECD2"
              strokeWidth={1.6}
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
                stroke="#C9A24A"
                strokeWidth={3}
                opacity={0.85}
                markerEnd="url(#ags-arrow)"
              />
            );
          })}

          {/* Anillo pulsante detras de cada pin. */}
          {SA_MARKERS.map((m, i) => (
            <circle
              key={`ring-${m.iso}`}
              cx={m.x}
              cy={m.y}
              r={13}
              fill="none"
              stroke="rgba(201,162,74,0.6)"
              strokeWidth={2.5}
              className="origin-center animate-pulse-ring [transform-box:fill-box]"
              style={{ animationDelay: `${i * 0.7}s` }}
            />
          ))}
        </svg>

        {/* Banderita en cada pin. */}
        {SA_MARKERS.map((m) => {
          const pais = POR_ISO[m.iso];
          if (!pais) return null;
          return (
            <div
              key={`flag-${m.iso}`}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${pct(m.x, VB_X, VB_W)}%`,
                top: `${pct(m.y, VB_Y, VB_H)}%`,
              }}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 bg-navy/90 text-[15px] leading-none shadow-[0_4px_12px_rgba(0,0,0,0.55)] backdrop-blur">
                {pais.bandera}
              </span>
            </div>
          );
        })}

        {/* Etiquetas de marca (tarjeta navy, sobria). */}
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
                  "rounded-sm border border-line-navy bg-[#0b1626]/95 px-3 py-1.5 shadow-[0_10px_26px_-10px_rgba(0,0,0,0.7)] backdrop-blur",
                  c.side === "izq" ? "mr-2 text-right" : "ml-2 text-left",
                )}
              >
                <span className="block whitespace-nowrap font-display text-[14px] tracking-tight text-marfil">
                  {marcaCorta(pais.marca, pais.pais)}
                </span>
                <span className="block text-[11px] font-medium uppercase tracking-eyebrow text-gold-light">
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

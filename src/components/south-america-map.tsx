import { cn } from "@/lib/utils";
import { PAISES } from "@/config/paises";

/**
 * Mapa estilizado de Sudamerica que resalta Peru, Chile y Argentina.
 * Silueta SVG decorativa + marcadores posicionados en porcentaje sobre el
 * contenedor (texto nitido y responsive). No requiere JavaScript.
 */

const SILUETA =
  "M150,40 C175,34 205,42 214,58 C250,70 292,120 298,160 C306,196 300,224 268,244 " +
  "C256,266 250,286 236,300 C228,330 214,352 198,372 C190,400 182,424 173,430 " +
  "C165,424 160,402 158,384 C150,360 146,338 150,320 C128,300 110,268 104,238 " +
  "C92,222 88,206 98,196 C104,168 100,150 108,132 C112,104 120,74 134,58 " +
  "C138,50 144,42 150,40 Z";

// Posicion de cada marcador en % del contenedor (coincide con el viewBox).
const MARCADORES: Record<string, { x: number; y: number; lado: "izq" | "der" }> = {
  PE: { x: 31, y: 43, lado: "izq" },
  CL: { x: 41, y: 72, lado: "izq" },
  AR: { x: 56, y: 72, lado: "der" },
};

export function SouthAmericaMap({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[420px]", className)}>
      <div className="relative aspect-[360/460]">
        <svg
          viewBox="0 0 360 460"
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-label="Mapa de Sudamerica con Peru, Chile y Argentina resaltados"
        >
          <defs>
            <linearGradient id="ags-cont" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#16263f" />
              <stop offset="100%" stopColor="#0c1626" />
            </linearGradient>
            <pattern
              id="ags-dots"
              width="12"
              height="12"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="rgba(148,163,184,0.18)" />
            </pattern>
            <linearGradient id="ags-link" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>

          <path d={SILUETA} fill="url(#ags-cont)" stroke="rgba(56,189,248,0.35)" strokeWidth="1.2" />
          <path d={SILUETA} fill="url(#ags-dots)" opacity="0.7" />

          {/* Red de conexion entre los tres puntos. */}
          <polyline
            points="112,198 150,331 202,331"
            fill="none"
            stroke="url(#ags-link)"
            strokeWidth="1.4"
            strokeDasharray="4 4"
            opacity="0.8"
          />
          {[
            [112, 198],
            [150, 331],
            [202, 331],
          ].map(([cx, cy]) => (
            <g key={`${cx}-${cy}`}>
              <circle cx={cx} cy={cy} r="9" fill="rgba(56,189,248,0.16)" />
              <circle cx={cx} cy={cy} r="4" fill="#38bdf8" />
            </g>
          ))}
        </svg>

        {/* Etiquetas de pais. */}
        {PAISES.map((p) => {
          const m = MARCADORES[p.codigo];
          if (!m) return null;
          return (
            <div
              key={p.codigo}
              className="absolute -translate-y-1/2"
              style={{
                left: `${m.x}%`,
                top: `${m.y}%`,
                transform:
                  m.lado === "izq"
                    ? "translate(-100%, -50%)"
                    : "translate(0, -50%)",
              }}
            >
              <div
                className={cn(
                  "flex items-center gap-2 rounded-full border border-line bg-ink/85 px-2.5 py-1 shadow-glow backdrop-blur",
                  m.lado === "izq" ? "mr-3" : "ml-3",
                )}
              >
                <span aria-hidden="true" className="text-sm leading-none">
                  {p.bandera}
                </span>
                <span className="whitespace-nowrap text-xs font-medium text-white">
                  {p.pais}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

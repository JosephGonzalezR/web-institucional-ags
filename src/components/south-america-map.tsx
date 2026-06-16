import { cn } from "@/lib/utils";
import { SA_COUNTRIES, SA_MARKERS, SA_VIEWBOX } from "@/config/sa-geo";
import { PAISES } from "@/config/paises";

/**
 * Mapa de Sudamerica con geografia real (GeoJSON proyectado, ver
 * scripts/gen-map.mjs). Resalta Peru, Chile y Argentina; el resto del
 * continente queda atenuado como contexto. Marcadores en las capitales.
 */

const [, , VB_W, VB_H] = SA_VIEWBOX.split(" ").map(Number);

const ETIQUETA_LADO: Record<string, "izq" | "der"> = {
  PER: "der",
  CHL: "izq",
  ARG: "der",
};

const POR_ISO: Record<string, (typeof PAISES)[number] | undefined> = {
  PER: PAISES.find((p) => p.codigo === "PE"),
  CHL: PAISES.find((p) => p.codigo === "CL"),
  ARG: PAISES.find((p) => p.codigo === "AR"),
};

export function SouthAmericaMap({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[300px]", className)}>
      <div className="relative" style={{ aspectRatio: `${VB_W} / ${VB_H}` }}>
        <svg
          viewBox={SA_VIEWBOX}
          className="absolute inset-0 h-full w-full overflow-visible"
          role="img"
          aria-label="Mapa de Sudamerica con Peru, Chile y Argentina resaltados"
        >
          <defs>
            <linearGradient id="ags-hl" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
          </defs>

          {/* Continente de contexto (atenuado). */}
          {SA_COUNTRIES.filter((c) => !c.hl).map((c) => (
            <path
              key={c.iso}
              d={c.d}
              fill="#0d1626"
              stroke="rgba(148,163,184,0.16)"
              strokeWidth={1}
            />
          ))}

          {/* Paises resaltados. */}
          {SA_COUNTRIES.filter((c) => c.hl).map((c) => (
            <path
              key={c.iso}
              d={c.d}
              fill="url(#ags-hl)"
              stroke="#7dd3fc"
              strokeWidth={1.4}
              fillOpacity={0.92}
            />
          ))}

          {/* Marcadores. */}
          {SA_MARKERS.map((m) => (
            <g key={m.iso}>
              <circle cx={m.x} cy={m.y} r={18} fill="rgba(125,211,252,0.25)" />
              <circle cx={m.x} cy={m.y} r={8} fill="#ffffff" />
              <circle cx={m.x} cy={m.y} r={4} fill="#0ea5e9" />
            </g>
          ))}
        </svg>

        {/* Etiquetas de pais (texto nitido sobre el SVG). */}
        {SA_MARKERS.map((m) => {
          const pais = POR_ISO[m.iso];
          if (!pais) return null;
          const lado = ETIQUETA_LADO[m.iso] ?? "der";
          return (
            <div
              key={m.iso}
              className="absolute"
              style={{
                left: `${(m.x / VB_W) * 100}%`,
                top: `${(m.y / VB_H) * 100}%`,
                transform:
                  lado === "izq"
                    ? "translate(-100%, -50%)"
                    : "translate(0, -50%)",
              }}
            >
              <div
                className={cn(
                  "flex items-center gap-1.5 rounded-full border border-line bg-ink/90 px-2.5 py-1 shadow-glow backdrop-blur",
                  lado === "izq" ? "mr-3" : "ml-3",
                )}
              >
                <span aria-hidden="true" className="text-sm leading-none">
                  {pais.bandera}
                </span>
                <span className="whitespace-nowrap text-xs font-medium text-white">
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

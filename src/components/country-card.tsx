import {
  type Pais,
  type RedKey,
  REDES_ORDEN,
  REDES_META,
} from "@/config/paises";
import {
  RED_ICONS,
  Globe,
  WhatsApp,
  ArrowUpRight,
  MapPin,
} from "@/components/icons";
import { fmt, fmtFecha, waLink } from "@/lib/format";
import { cn } from "@/lib/utils";

const CHIP: Record<RedKey, string> = {
  instagram:
    "bg-[linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)] text-white",
  facebook: "bg-[#1877F2] text-white",
  tiktok: "bg-black text-white ring-1 ring-white/15",
};

function handleDeUrl(red: RedKey, url: string): string | null {
  try {
    const u = new URL(url);
    if (red === "facebook") return "Pagina oficial";
    const seg = u.pathname.split("/").filter(Boolean).pop() ?? "";
    const limpio = seg.replace(/^@/, "");
    return limpio ? `@${limpio}` : null;
  } catch {
    return null;
  }
}

function RedFila({ pais, red }: { pais: Pais; red: RedKey }) {
  const r = pais.redes[red];
  const Icono = RED_ICONS[red];
  const nombre = REDES_META[red].nombre;
  const handle = r.url ? handleDeUrl(red, r.url) : null;

  const contenido = (
    <>
      <span className="flex min-w-0 items-center gap-3">
        <span
          className={cn(
            "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
            CHIP[red],
          )}
        >
          <Icono className="h-[18px] w-[18px]" />
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-medium text-white">{nombre}</span>
          <span className="block truncate text-xs text-slate-400">
            {r.url ? handle ?? "Ver perfil" : "Cuenta en proceso"}
          </span>
        </span>
      </span>

      <span className="flex shrink-0 items-center gap-2 text-right">
        {r.seguidores != null ? (
          <span className="leading-tight">
            <span className="block font-mono text-sm font-semibold text-white">
              {fmt(r.seguidores)}
            </span>
            <span className="block text-[10px] uppercase tracking-wide text-slate-500">
              seguidores
            </span>
          </span>
        ) : (
          <span className="text-xs text-slate-500">Por confirmar</span>
        )}
        {r.url ? (
          <ArrowUpRight className="h-4 w-4 text-slate-500 transition-colors group-hover:text-brand-300" />
        ) : null}
      </span>
    </>
  );

  const base =
    "flex items-center justify-between gap-3 rounded-xl border border-line px-3 py-2.5";

  if (r.url) {
    return (
      <a
        href={r.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, "group bg-white/[0.02] transition-colors hover:bg-white/[0.06]")}
      >
        {contenido}
      </a>
    );
  }
  return <div className={cn(base, "bg-white/[0.01] opacity-70")}>{contenido}</div>;
}

export function CountryCard({ pais }: { pais: Pais }) {
  const fecha = pais.redes.instagram.fecha;
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-panel shadow-panel">
      {/* Cabecera */}
      <div className="flex items-start justify-between gap-3 border-b border-line p-5">
        <div className="min-w-0">
          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className="text-2xl leading-none">
              {pais.bandera}
            </span>
            <h3 className="text-lg font-semibold text-white">{pais.pais}</h3>
          </div>
          <p className="mt-1 text-sm font-medium text-brand-300">{pais.marca}</p>
          <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-slate-400">
            <MapPin className="h-3.5 w-3.5" />
            {pais.ciudad}
          </p>
        </div>
      </div>

      <p className="px-5 pt-4 text-sm leading-relaxed text-slate-400">
        {pais.descripcion}
      </p>

      {/* Redes */}
      <div className="mt-4 flex flex-col gap-2 px-5">
        {REDES_ORDEN.map((red) => (
          <RedFila key={red} pais={pais} red={red} />
        ))}
      </div>

      {/* Contacto / acciones */}
      <div className="mt-5 flex flex-wrap gap-2 border-t border-line p-5 pt-4">
        {pais.web ? (
          <a
            href={pais.web}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-slate-100 transition-colors hover:bg-white/[0.07]"
          >
            <Globe className="h-4 w-4 text-brand-300" />
            Sitio web
          </a>
        ) : null}
        {pais.whatsapp ? (
          <a
            href={waLink(pais.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-slate-100 transition-colors hover:bg-white/[0.07]"
          >
            <WhatsApp className="h-4 w-4 text-[#25D366]" />
            WhatsApp
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-2 text-xs text-slate-500">
            <WhatsApp className="h-4 w-4" />
            WhatsApp por confirmar
          </span>
        )}
      </div>

      <p className="px-5 pb-4 text-[11px] text-slate-600">
        Datos capturados el {fmtFecha(fecha)}.
      </p>
    </article>
  );
}

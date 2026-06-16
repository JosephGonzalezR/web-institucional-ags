"use client";

import {
  type Pais,
  type RedKey,
  REDES_ORDEN,
} from "@/config/paises";
import {
  RED_ICONS,
  Globe,
  WhatsApp,
  ArrowUpRight,
  MapPin,
} from "@/components/icons";
import { fmt, waLink } from "@/lib/format";
import { cn } from "@/lib/utils";
import { useLang } from "@/i18n/provider";

const CHIP: Record<RedKey, string> = {
  instagram:
    "bg-[linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)] text-white",
  facebook: "bg-[#1877F2] text-white",
  tiktok: "bg-black text-white ring-1 ring-white/15",
};

function handleDeUrl(url: string): string | null {
  try {
    const u = new URL(url);
    const seg = u.pathname.split("/").filter(Boolean).pop() ?? "";
    const limpio = seg.replace(/^@/, "");
    return limpio ? `@${limpio}` : null;
  } catch {
    return null;
  }
}

function RedFila({ pais, red }: { pais: Pais; red: RedKey }) {
  const { t } = useLang();
  const r = pais.redes[red];
  const Icono = RED_ICONS[red];
  const nombre = t.redes[red];
  const sub =
    red === "facebook"
      ? t.card.paginaOficial
      : (r.url ? handleDeUrl(r.url) : null) ?? t.card.verPerfil;

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
          <span className="block truncate text-xs text-slate-400">{sub}</span>
        </span>
      </span>

      <span className="flex shrink-0 items-center gap-2 text-right">
        {r.seguidores != null ? (
          <span className="leading-tight">
            <span className="block font-mono text-sm font-semibold text-white">
              {fmt(r.seguidores)}
            </span>
            <span className="block text-[10px] uppercase tracking-wide text-slate-500">
              {t.card.seguidores}
            </span>
          </span>
        ) : (
          <span className="text-xs text-slate-400">{t.card.verPerfil}</span>
        )}
        <ArrowUpRight className="h-4 w-4 text-slate-500 transition-colors group-hover:text-brand-300" />
      </span>
    </>
  );

  const base =
    "group flex items-center justify-between gap-3 rounded-xl border border-line bg-white/[0.02] px-3 py-2.5 transition-colors hover:bg-white/[0.06]";

  if (!r.url) return <div className={base}>{contenido}</div>;
  return (
    <a href={r.url} target="_blank" rel="noopener noreferrer" className={base}>
      {contenido}
    </a>
  );
}

export function CountryCard({ pais }: { pais: Pais }) {
  const { t } = useLang();

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-panel shadow-panel transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-400/40 hover:shadow-lift">
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
        {t.paises[pais.codigo].descripcion}
      </p>

      <div className="mt-4 flex flex-col gap-2 px-5">
        {REDES_ORDEN.map((red) => (
          <RedFila key={red} pais={pais} red={red} />
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-line p-5 pt-4">
        {pais.web ? (
          <a
            href={pais.web}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-slate-100 transition-colors hover:bg-white/[0.07]"
          >
            <Globe className="h-4 w-4 text-brand-300" />
            {t.card.sitioWeb}
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
            {t.card.whatsapp}
          </a>
        ) : null}
      </div>
    </article>
  );
}

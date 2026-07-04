"use client";

import { type Pais, type RedKey, REDES_ORDEN } from "@/config/paises";
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
  tiktok: "bg-ink text-white",
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
            "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm shadow-card transition-transform group-hover:scale-105",
            CHIP[red],
          )}
        >
          <Icono className="h-5 w-5" />
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-medium text-ink">{nombre}</span>
          <span className="block truncate text-xs text-muted-2">{sub}</span>
        </span>
      </span>

      <span className="flex shrink-0 items-center gap-2 text-right">
        {r.seguidores != null ? (
          <span className="leading-tight">
            <span className="block font-display text-lg leading-none text-ink">
              {fmt(r.seguidores)}
            </span>
            <span className="block text-[10px] uppercase tracking-eyebrow text-muted-2">
              {t.card.seguidores}
            </span>
          </span>
        ) : (
          <span className="text-xs text-muted-2">{t.card.verPerfil}</span>
        )}
        <ArrowUpRight className="h-4 w-4 text-muted-2 transition-colors group-hover:text-gold-dark" />
      </span>
    </>
  );

  const base =
    "group flex items-center justify-between gap-3 border-t border-line px-1 py-3 transition-colors hover:bg-ink/[0.02]";

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
    <article className="group flex flex-col border border-line bg-paper p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lift">
      <div>
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className="text-lg leading-none">
            {pais.bandera}
          </span>
          <span className="text-xs font-semibold uppercase tracking-eyebrow text-gold-dark">
            {pais.pais}
          </span>
        </div>
        <h3 className="mt-2 font-display text-[clamp(26px,3vw,32px)] leading-tight tracking-tight text-ink">
          {pais.marca}
        </h3>
        <p className="mt-1.5 inline-flex items-center gap-1 text-sm text-muted-2">
          <MapPin className="h-4 w-4" />
          {pais.ciudad}
        </p>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">
        {t.paises[pais.codigo].descripcion}
      </p>

      <div className="mt-5">
        {REDES_ORDEN.map((red) => (
          <RedFila key={red} pais={pais} red={red} />
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2.5 border-t border-line pt-5">
        {pais.web ? (
          <a
            href={pais.web}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 bg-navy px-4 py-2.5 text-sm font-medium text-marfil transition-colors hover:bg-navy-800"
          >
            <Globe className="h-4 w-4" />
            {t.card.sitioWeb}
          </a>
        ) : null}
        {pais.whatsapp ? (
          <a
            href={waLink(pais.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 border border-navy px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-ink/[0.04]"
          >
            <WhatsApp className="h-4 w-4 text-[#25D366]" />
            WhatsApp
          </a>
        ) : null}
      </div>
    </article>
  );
}

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
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className="text-2xl leading-none">
              {pais.bandera}
            </span>
            <h3 className="font-display text-2xl tracking-tight text-ink">
              {pais.pais}
            </h3>
          </div>
          <p className="mt-1.5 text-sm font-medium text-gold-dark">{pais.marca}</p>
          <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted-2">
            <MapPin className="h-3.5 w-3.5" />
            {pais.ciudad}
          </p>
        </div>
        <span className="font-display text-sm uppercase tracking-eyebrow text-gold">
          {pais.codigo}
        </span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">
        {t.paises[pais.codigo].descripcion}
      </p>

      <div className="mt-5">
        {REDES_ORDEN.map((red) => (
          <RedFila key={red} pais={pais} red={red} />
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-5">
        {pais.web ? (
          <a
            href={pais.web}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-line px-3.5 py-2 text-xs font-medium text-ink transition-colors hover:border-gold/50 hover:text-gold-dark"
          >
            <Globe className="h-4 w-4 text-gold-dark" />
            {t.card.sitioWeb}
          </a>
        ) : null}
        {pais.whatsapp ? (
          <a
            href={waLink(pais.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-line px-3.5 py-2 text-xs font-medium text-ink transition-colors hover:border-gold/50"
          >
            <WhatsApp className="h-4 w-4 text-[#25D366]" />
            {t.card.whatsapp}
          </a>
        ) : null}
      </div>
    </article>
  );
}

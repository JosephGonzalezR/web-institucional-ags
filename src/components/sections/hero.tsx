"use client";

import { SITE } from "@/config/site";
import { STATS } from "@/lib/stats";
import { fmt } from "@/lib/format";
import { ShieldCheck, MapPin } from "@/components/icons";
import { useLang } from "@/i18n/provider";

export function Hero() {
  const { t } = useLang();

  const cifras = [
    { valor: fmt(STATS.seguidoresConfirmados), etiqueta: t.hero.stats.seguidores },
    { valor: String(STATS.cuentasEnlazadas), etiqueta: t.hero.stats.cuentas },
    { valor: String(STATS.paises), etiqueta: t.hero.stats.paises },
    { valor: String(STATS.websActivas), etiqueta: t.hero.stats.webs },
  ];

  return (
    <section id="inicio" className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:56px_56px] opacity-60 [mask-image:radial-gradient(80%_60%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-radial-fade"
      />

      <div className="container-pad relative py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-300">
            <ShieldCheck className="h-4 w-4 text-brand-300" />
            {t.hero.badge}
          </span>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
            {SITE.nombre}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-relaxed text-slate-300 sm:text-xl">
            {t.hero.claim}.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-brand-300" /> Peru
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-brand-300" /> Chile
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-brand-300" /> Argentina
            </span>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-panel sm:grid-cols-4">
          {cifras.map((c) => (
            <div key={c.etiqueta} className="bg-panel px-5 py-7 text-center">
              <div className="font-mono text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {c.valor}
              </div>
              <div className="mt-1.5 text-xs font-medium uppercase tracking-wider text-slate-400">
                {c.etiqueta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

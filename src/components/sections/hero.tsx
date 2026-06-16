"use client";

import { STATS } from "@/lib/stats";
import { fmt } from "@/lib/format";
import { ShieldCheck, MapPin } from "@/components/icons";
import { useLang } from "@/i18n/provider";
import { Reveal } from "@/components/reveal";
import { AnimatedNumber } from "@/components/animated-number";

export function Hero() {
  const { t } = useLang();

  const cifras = [
    { valor: STATS.seguidoresConfirmados, etiqueta: t.hero.stats.seguidores, fmt: true },
    { valor: STATS.cuentasEnlazadas, etiqueta: t.hero.stats.cuentas, fmt: false },
    { valor: STATS.paises, etiqueta: t.hero.stats.paises, fmt: false },
    { valor: STATS.websActivas, etiqueta: t.hero.stats.webs, fmt: false },
  ];

  return (
    <section id="inicio" className="relative overflow-hidden border-b border-line">
      {/* Aurora dorada / navy en movimiento. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[460px] w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(220,167,61,0.22),transparent)] blur-2xl animate-float" />
        <div className="absolute right-[6%] top-10 h-[320px] w-[320px] rounded-full bg-[radial-gradient(closest-side,rgba(56,80,140,0.55),transparent)] blur-2xl animate-float-slow" />
        <div className="absolute left-[4%] top-40 h-[260px] w-[260px] rounded-full bg-[radial-gradient(closest-side,rgba(232,193,106,0.14),transparent)] blur-2xl animate-float-slow" />
        <div className="absolute inset-0 bg-grid-faint [background-size:58px_58px] opacity-50 [mask-image:radial-gradient(80%_55%_at_50%_0%,black,transparent)]" />
      </div>

      <div className="container-pad relative py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-brand-200 shadow-glow">
              <ShieldCheck className="h-4 w-4 text-brand-300" />
              {t.hero.badge}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 font-display text-5xl font-medium leading-[1.02] tracking-tight sm:text-7xl">
              <span className="text-ghost">Academic Global</span>
              <br />
              <span className="text-gold">Solutions</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-slate-300 sm:text-xl">
              {t.hero.claim}.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-400">
              {["Peru", "Chile", "Argentina"].map((p) => (
                <span key={p} className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-brand-300" /> {p}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="mx-auto mt-16 max-w-4xl">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-panel sm:grid-cols-4">
            {cifras.map((c) => (
              <div
                key={c.etiqueta}
                className="group relative bg-panel px-5 py-8 text-center transition-colors hover:bg-panel-2"
              >
                <div className="font-mono text-3xl font-semibold tracking-tight text-white sm:text-[2.6rem]">
                  <AnimatedNumber
                    value={c.valor}
                    format={c.fmt ? fmt : undefined}
                  />
                </div>
                <div className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-400">
                  {c.etiqueta}
                </div>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-6 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-brand-400 to-transparent transition-transform duration-500 group-hover:scale-x-100"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

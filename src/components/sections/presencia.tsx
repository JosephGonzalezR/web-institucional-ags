"use client";

import { PAISES } from "@/config/paises";
import { STATS } from "@/lib/stats";
import { SectionHeader } from "@/components/section-header";
import { SouthAmericaMap } from "@/components/south-america-map";
import { CountryCard } from "@/components/country-card";
import { useLang } from "@/i18n/provider";
import { Reveal } from "@/components/reveal";
import { AnimatedNumber } from "@/components/animated-number";

export function Presencia() {
  const { t } = useLang();

  return (
    <section id="presencia" className="border-b border-line py-20 sm:py-28">
      <div className="container-pad">
        <SectionHeader
          eyebrow={t.presencia.eyebrow}
          titulo={t.presencia.titulo}
          descripcion={t.presencia.descripcion}
        />

        <Reveal className="mt-14">
          <div className="grid items-center gap-10 rounded-3xl border border-line bg-panel/60 p-8 shadow-panel lg:grid-cols-[1fr_1.1fr] lg:p-12">
            <SouthAmericaMap />
            <div>
              <h3 className="font-display text-2xl font-medium text-white sm:text-3xl">
                {t.presencia.panelTitulo}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-400">
                {t.presencia.panelTexto}
              </p>
              <dl className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { k: t.presencia.statPaises, v: STATS.paises },
                  { k: t.presencia.statWebs, v: STATS.websActivas },
                  { k: t.presencia.statCuentas, v: STATS.cuentasEnlazadas },
                ].map((x) => (
                  <div
                    key={x.k}
                    className="rounded-xl border border-line bg-white/[0.02] px-4 py-4 text-center"
                  >
                    <dd className="font-mono text-2xl font-semibold text-white">
                      <AnimatedNumber value={x.v} />
                    </dd>
                    <dt className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                      {x.k}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PAISES.map((p, i) => (
            <Reveal key={p.codigo} delay={i * 110}>
              <CountryCard pais={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

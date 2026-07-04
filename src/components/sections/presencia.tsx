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
    <section id="presencia" className="border-b border-line py-[clamp(72px,9vw,148px)]">
      <div className="container-pad">
        <SectionHeader
          eyebrow={t.presencia.eyebrow}
          numero="03"
          titulo={t.presencia.titulo}
          descripcion={t.presencia.descripcion}
        />

        <Reveal className="mt-16">
          <div className="relative overflow-hidden rounded-lg bg-navy p-8 text-marfil shadow-lift lg:p-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,rgba(201,162,74,0.22),transparent)]"
            />
            <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
              <SouthAmericaMap />
              <div>
                <h3 className="display-tight text-[clamp(24px,2.6vw,32px)] text-marfil">
                  {t.presencia.panelTitulo}
                </h3>
                <p className="mt-4 max-w-prose text-[17px] leading-relaxed text-[rgba(242,239,226,0.62)]">
                  {t.presencia.panelTexto}
                </p>
                <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-6">
                  {[
                    { k: t.presencia.statPaises, v: STATS.paises },
                    { k: t.presencia.statWebs, v: STATS.websActivas },
                    { k: t.presencia.statCuentas, v: STATS.cuentasEnlazadas },
                  ].map((x, i) => (
                    <div
                      key={x.k}
                      className={i > 0 ? "border-l border-line-navy pl-10" : ""}
                    >
                      <dd className="font-display text-4xl tracking-tight text-gold-light">
                        <AnimatedNumber value={x.v} />
                      </dd>
                      <dt className="mt-1.5 text-xs uppercase tracking-eyebrow text-[rgba(242,239,226,0.55)]">
                        {x.k}
                      </dt>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PAISES.map((p, i) => (
            <Reveal key={p.codigo} delay={i * 90}>
              <CountryCard pais={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

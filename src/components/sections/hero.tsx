"use client";

import { STATS } from "@/lib/stats";
import { fmt } from "@/lib/format";
import { useLang } from "@/i18n/provider";
import { Reveal } from "@/components/reveal";
import { GlobeLine } from "@/components/globe-line";

export function Hero() {
  const { t } = useLang();

  const trust = [
    { v: fmt(STATS.seguidoresConfirmados), k: t.hero.stats.seguidores },
    { v: String(STATS.cuentasEnlazadas), k: t.hero.stats.cuentas },
    { v: String(STATS.paises), k: t.hero.stats.paises },
  ];

  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-line"
    >
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 [mask-image:linear-gradient(180deg,transparent,black_18%,black_82%,transparent)]"
      />

      <div className="container-pad relative grid items-center gap-x-6 gap-y-14 py-[clamp(56px,9vw,132px)] lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">{t.hero.eyebrow}</p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="display-tight mt-6 text-[clamp(42px,6.2vw,84px)] text-ink">
              {t.hero.claim}
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <span
              aria-hidden="true"
              className="mt-8 block h-px w-14 bg-gold"
            />
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-7 max-w-[46ch] text-xl leading-relaxed text-muted">
              {t.hero.badge}.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <a href="#presencia" className="cta-link mt-9">
              {t.hero.cta} &rarr;
            </a>
          </Reveal>

          <Reveal delay={300}>
            <dl className="mt-12 flex flex-wrap items-baseline gap-x-8 gap-y-3">
              {trust.map((s, i) => (
                <div key={s.k} className="flex items-baseline gap-2.5">
                  {i > 0 ? (
                    <span aria-hidden="true" className="mr-5 text-line">
                      |
                    </span>
                  ) : null}
                  <dd className="font-display text-2xl tracking-tight text-ink">
                    {s.v}
                  </dd>
                  <dt className="text-xs uppercase tracking-eyebrow text-muted-2">
                    {s.k}
                  </dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={160} className="lg:col-span-5 lg:justify-self-end">
          <div className="mx-auto w-[min(78%,360px)] text-gold/85 lg:mr-0">
            <GlobeLine />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

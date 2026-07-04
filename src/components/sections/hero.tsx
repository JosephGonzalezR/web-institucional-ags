"use client";

import Image from "next/image";
import { STATS } from "@/lib/stats";
import { fmt } from "@/lib/format";
import { asset } from "@/lib/asset";
import { useLang } from "@/i18n/provider";
import { Reveal } from "@/components/reveal";

export function Hero() {
  const { t } = useLang();

  const trust = [
    { v: fmt(STATS.seguidoresConfirmados), k: t.hero.stats.seguidores },
    { v: String(STATS.paises), k: t.hero.stats.paises },
    { v: "+5", k: t.hero.stats.anios },
  ];

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[90vh] items-center overflow-hidden bg-navy text-marfil"
    >
      {/* Imagen de fondo (globo dorado + red sobre Sudamerica). */}
      <Image
        src={asset("/hero.jpg")}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />
      {/* Degradado navy a la izquierda (legibilidad) + base inferior. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,#091220_28%,rgba(9,18,32,0.55)_60%,rgba(9,18,32,0.12))]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(0deg,#091220,transparent)]"
      />

      <div className="container-pad relative z-10 py-28">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-gold-light">{t.hero.eyebrow}</p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="display-tight mt-6 text-[clamp(40px,6vw,80px)] text-white">
              {t.hero.claim}
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <span aria-hidden="true" className="mt-7 block h-px w-16 bg-gold" />
          </Reveal>

          <Reveal delay={190}>
            <p className="mt-7 max-w-xl text-xl leading-relaxed text-[rgba(242,239,226,0.78)]">
              {t.hero.badge}.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#presencia"
                className="inline-flex items-center gap-2.5 bg-gradient-to-b from-[#E7CC82] to-gold px-7 py-3.5 text-[15px] font-semibold text-navy transition hover:brightness-105"
              >
                {t.hero.cta} &rarr;
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2.5 border border-gold-light px-7 py-3.5 text-[15px] font-medium text-gold-light transition hover:bg-[rgba(201,162,74,0.1)]"
              >
                {t.nav.contacto}
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-14 flex flex-wrap gap-x-12 gap-y-5">
              {trust.map((s) => (
                <div key={s.k}>
                  <dd className="font-display text-[clamp(30px,3.4vw,42px)] leading-none tracking-tightest text-gold-light">
                    {s.v}
                  </dd>
                  <dt className="mt-2 text-xs uppercase tracking-eyebrow text-[rgba(242,239,226,0.6)]">
                    {s.k}
                  </dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

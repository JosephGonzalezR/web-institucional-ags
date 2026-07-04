"use client";

import { SectionHeader } from "@/components/section-header";
import { useLang } from "@/i18n/provider";
import { Reveal } from "@/components/reveal";

export function Nosotros() {
  const { t } = useLang();

  return (
    <section id="nosotros" className="border-b border-line py-[clamp(72px,9vw,148px)]">
      <div className="container-pad">
        <SectionHeader
          eyebrow={t.nosotros.eyebrow}
          numero="01"
          titulo={t.nosotros.titulo}
        />

        <div className="mt-14 grid gap-x-6 gap-y-12 lg:grid-cols-12">
          <Reveal className="space-y-6 lg:col-span-6 lg:col-start-1">
            {t.nosotros.parrafos.map((parrafo, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "max-w-prose text-xl leading-relaxed text-ink"
                    : "max-w-prose text-[17px] leading-relaxed text-muted"
                }
              >
                {parrafo}
              </p>
            ))}
          </Reveal>

          <div className="lg:col-span-5 lg:col-start-8">
            {t.nosotros.pilares.map((p, i) => (
              <Reveal key={p.titulo} delay={i * 80}>
                <div className="grid grid-cols-[auto_1fr] gap-5 border-t border-line py-6 last:border-b">
                  <span className="font-display text-lg text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-display text-xl text-ink">{p.titulo}</p>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">
                      {p.texto}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

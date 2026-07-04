"use client";

import { SectionHeader } from "@/components/section-header";
import { useLang } from "@/i18n/provider";
import { Reveal } from "@/components/reveal";

export function Diferencial() {
  const { t } = useLang();

  return (
    <section id="diferencial" className="border-b border-line bg-paper py-[clamp(72px,9vw,148px)]">
      <div className="container-pad">
        <SectionHeader
          eyebrow={t.diferencial.eyebrow}
          numero="02"
          titulo={t.diferencial.titulo}
          descripcion={t.diferencial.descripcion}
        />

        <div className="mt-16 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {t.diferencial.items.map((it, i) => (
            <Reveal key={it.titulo} delay={(i % 3) * 80}>
              <div className="border-t-2 border-gold/70 pt-6">
                <span className="font-display text-3xl text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-[clamp(22px,2.4vw,28px)] tracking-tight text-ink">
                  {it.titulo}
                </h3>
                <p className="mt-3 max-w-prose text-[17px] leading-relaxed text-muted">
                  {it.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { SERVICIO_ORDEN } from "@/config/site";
import { SectionHeader } from "@/components/section-header";
import { useLang } from "@/i18n/provider";
import { Reveal } from "@/components/reveal";

export function Servicios() {
  const { t } = useLang();

  return (
    <section id="servicios" className="border-b border-line py-[clamp(72px,9vw,148px)]">
      <div className="container-pad">
        <SectionHeader
          eyebrow={t.servicios.eyebrow}
          numero="04"
          titulo={t.servicios.titulo}
          descripcion={t.servicios.descripcion}
        />

        <div className="mt-14 border-t border-line">
          {SERVICIO_ORDEN.map((id, i) => {
            const item = t.servicios.items[id];
            return (
              <Reveal key={id} delay={(i % 2) * 70}>
                <div className="group grid grid-cols-1 gap-x-6 gap-y-3 border-b border-line py-8 transition-colors hover:bg-ink/[0.015] md:grid-cols-12 md:items-baseline">
                  <span className="font-display text-lg text-gold md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[clamp(22px,2.4vw,28px)] tracking-tight text-ink md:col-span-5">
                    {item.titulo}
                  </h3>
                  <p className="max-w-prose text-[15px] leading-relaxed text-muted md:col-span-6">
                    {item.descripcion}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

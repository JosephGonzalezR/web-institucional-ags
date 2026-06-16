"use client";

import { SectionHeader } from "@/components/section-header";
import { Building, Network, Users } from "@/components/icons";
import { useLang } from "@/i18n/provider";
import { Reveal } from "@/components/reveal";

const ICONOS = [Building, Network, Users];

export function Nosotros() {
  const { t } = useLang();

  return (
    <section id="nosotros" className="border-b border-line py-20 sm:py-28">
      <div className="container-pad">
        <SectionHeader
          eyebrow={t.nosotros.eyebrow}
          titulo={t.nosotros.titulo}
          align="left"
        />

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="space-y-5">
            {t.nosotros.parrafos.map((parrafo, i) => (
              <p
                key={i}
                className={i === 0 ? "text-lg leading-relaxed text-slate-200" : "text-base leading-relaxed text-slate-400"}
              >
                {parrafo}
              </p>
            ))}
          </Reveal>

          <div className="space-y-3">
            {t.nosotros.pilares.map((p, i) => {
              const Icono = ICONOS[i] ?? Building;
              return (
                <Reveal key={p.titulo} delay={i * 90}>
                  <div className="group flex items-start gap-4 rounded-xl border border-line bg-panel p-5 transition-colors hover:border-brand-400/40">
                    <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-white/5 text-brand-300 transition-colors group-hover:bg-brand-400/10">
                      <Icono className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-medium text-white">{p.titulo}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-400">
                        {p.texto}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

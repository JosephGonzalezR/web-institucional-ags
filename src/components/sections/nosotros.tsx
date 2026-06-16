"use client";

import { SectionHeader } from "@/components/section-header";
import { Building, Network, Users } from "@/components/icons";
import { useLang } from "@/i18n/provider";

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
          <div className="space-y-5">
            {t.nosotros.parrafos.map((parrafo, i) => (
              <p key={i} className="text-base leading-relaxed text-slate-300">
                {parrafo}
              </p>
            ))}
          </div>

          <ul className="space-y-3">
            {t.nosotros.pilares.map((p, i) => {
              const Icono = ICONOS[i] ?? Building;
              return (
                <li
                  key={p.titulo}
                  className="flex items-start gap-4 rounded-xl border border-line bg-panel p-5"
                >
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-white/5 text-brand-300">
                    <Icono className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-white">{p.titulo}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      {p.texto}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

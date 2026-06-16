"use client";

import { SERVICIO_ORDEN } from "@/config/site";
import { SectionHeader } from "@/components/section-header";
import { SERVICIO_ICONS } from "@/components/icons";
import { useLang } from "@/i18n/provider";

export function Servicios() {
  const { t } = useLang();

  return (
    <section id="servicios" className="border-b border-line py-20 sm:py-28">
      <div className="container-pad">
        <SectionHeader
          eyebrow={t.servicios.eyebrow}
          titulo={t.servicios.titulo}
          descripcion={t.servicios.descripcion}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICIO_ORDEN.map((id) => {
            const Icono = SERVICIO_ICONS[id];
            const item = t.servicios.items[id];
            return (
              <div
                key={id}
                className="rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-brand-400/40"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/5 text-brand-300">
                  <Icono className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-white">
                  {item.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.descripcion}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

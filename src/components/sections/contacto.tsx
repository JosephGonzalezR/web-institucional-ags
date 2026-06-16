"use client";

import { SITE } from "@/config/site";
import { PAISES } from "@/config/paises";
import { SectionHeader } from "@/components/section-header";
import { Mail, Globe, WhatsApp } from "@/components/icons";
import { waLink } from "@/lib/format";
import { useLang } from "@/i18n/provider";
import { Reveal } from "@/components/reveal";

export function Contacto() {
  const { t } = useLang();

  return (
    <section id="contacto" className="border-b border-line py-20 sm:py-28">
      <div className="container-pad">
        <SectionHeader
          eyebrow={t.contacto.eyebrow}
          titulo={t.contacto.titulo}
          descripcion={t.contacto.descripcion}
        />

        <Reveal className="mx-auto mt-12 max-w-4xl">
          <a
            href={`mailto:${SITE.correo}`}
            className="group flex flex-col items-start justify-between gap-4 rounded-2xl border border-line bg-gradient-to-b from-panel-2 to-panel p-6 shadow-panel transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-lift sm:flex-row sm:items-center"
          >
            <span className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-white/5 text-brand-300">
                <Mail className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-slate-400">
                  {t.contacto.correoLabel}
                </span>
                <span className="block text-lg font-medium text-white">
                  {SITE.correo}
                </span>
              </span>
            </span>
            <span className="text-sm text-brand-300 transition-colors group-hover:text-brand-200">
              {t.contacto.escribir}
            </span>
          </a>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {PAISES.map((p) => (
              <div key={p.codigo} className="rounded-2xl border border-line bg-panel p-5">
                <div className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-lg leading-none">
                    {p.bandera}
                  </span>
                  <span className="text-sm font-semibold text-white">{p.marca}</span>
                </div>
                <p className="mt-1 text-xs text-slate-400">{p.ciudad}</p>

                <div className="mt-4 flex flex-col gap-2">
                  {p.web ? (
                    <a
                      href={p.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-slate-200 transition-colors hover:text-white"
                    >
                      <Globe className="h-4 w-4 text-brand-300" />
                      {t.card.sitioWeb}
                    </a>
                  ) : null}
                  {p.whatsapp ? (
                    <a
                      href={waLink(p.whatsapp)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-slate-200 transition-colors hover:text-white"
                    >
                      <WhatsApp className="h-4 w-4 text-[#25D366]" />
                      {p.whatsapp}
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

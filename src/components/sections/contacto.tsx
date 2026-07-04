"use client";

import { SITE } from "@/config/site";
import { PAISES } from "@/config/paises";
import { SectionHeader } from "@/components/section-header";
import { Globe, WhatsApp, ArrowUpRight } from "@/components/icons";
import { waLink } from "@/lib/format";
import { useLang } from "@/i18n/provider";
import { Reveal } from "@/components/reveal";

export function Contacto() {
  const { t } = useLang();

  return (
    <section id="contacto" className="border-b border-line py-[clamp(72px,9vw,148px)]">
      <div className="container-pad">
        <SectionHeader
          eyebrow={t.contacto.eyebrow}
          numero="05"
          titulo={t.contacto.titulo}
          descripcion={t.contacto.descripcion}
        />

        <Reveal className="mt-14">
          {/* Correo institucional como fila editorial. */}
          <a
            href={`mailto:${SITE.correo}`}
            className="group flex flex-col gap-4 border-y border-line py-8 transition-colors hover:bg-ink/[0.015] sm:flex-row sm:items-center sm:justify-between"
          >
            <span>
              <span className="eyebrow block">{t.contacto.correoLabel}</span>
              <span className="mt-2 block font-display text-[clamp(24px,3vw,38px)] tracking-tight text-ink">
                {SITE.correo}
              </span>
            </span>
            <span className="inline-flex items-center gap-2 text-[15px] font-medium text-gold-dark">
              {t.contacto.escribir}
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </a>
        </Reveal>

        <div className="mt-8 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
          {PAISES.map((p, i) => (
            <Reveal key={p.codigo} delay={i * 80}>
              <div className="h-full bg-marfil p-6">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-lg text-ink">{p.marca}</span>
                  <span className="font-display text-xs uppercase tracking-eyebrow text-gold">
                    {p.codigo}
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted-2">{p.ciudad}</p>

                <div className="mt-5 flex flex-col gap-2.5">
                  {p.web ? (
                    <a
                      href={p.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-gold-dark"
                    >
                      <Globe className="h-4 w-4 text-gold-dark" />
                      {t.card.sitioWeb}
                    </a>
                  ) : null}
                  {p.whatsapp ? (
                    <a
                      href={waLink(p.whatsapp)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-gold-dark"
                    >
                      <WhatsApp className="h-4 w-4 text-[#25D366]" />
                      {p.whatsapp}
                    </a>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { SITE } from "@/config/site";
import { PAISES, REDES_ORDEN } from "@/config/paises";
import { RED_ICONS, Globe, Mail, WhatsApp } from "@/components/icons";
import { REGISTROS_LIST } from "@/config/legal";
import { waLink } from "@/lib/format";
import { asset } from "@/lib/asset";
import { useLang } from "@/i18n/provider";

export function Footer() {
  const { t } = useLang();
  const anio = new Date().getFullYear();

  return (
    <footer className="bg-navy text-marfil">
      <div className="container-pad py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src={asset("/logo-mark-dark.png")}
                alt={`${SITE.nombre} logo`}
                width={88}
                height={88}
                className="h-11 w-11 object-contain"
              />
              <span className="font-display text-xl tracking-tight text-marfil">
                Academic Global Solution
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[rgba(242,239,226,0.55)]">
              {t.footer.descripcion}
            </p>
            <div className="mt-5 flex flex-col gap-2.5">
              {[SITE.correo, SITE.correoVentas].map((mail) => (
                <a
                  key={mail}
                  href={`mailto:${mail}`}
                  className="inline-flex items-center gap-2 text-sm text-[rgba(242,239,226,0.8)] transition-colors hover:text-gold-light"
                >
                  <Mail className="h-4 w-4 text-gold-light" />
                  {mail}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="eyebrow text-[rgba(242,239,226,0.6)]">
              {t.footer.presenciaTitulo}
            </h3>
            <ul className="mt-6">
              {PAISES.map((p) => (
                <li
                  key={p.codigo}
                  className="flex items-center justify-between gap-4 border-t border-line-navy py-4 last:border-b"
                >
                  <span className="flex items-baseline gap-2.5">
                    <span className="font-display text-xs uppercase tracking-eyebrow text-gold-light">
                      {p.codigo}
                    </span>
                    <span className="text-sm font-medium text-marfil">
                      {p.marca}
                    </span>
                  </span>
                  <span className="flex items-center gap-3 text-[rgba(242,239,226,0.55)]">
                    {p.web ? (
                      <a
                        href={p.web}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t.card.sitioWeb} ${p.marca}`}
                        className="transition-colors hover:text-gold-light"
                      >
                        <Globe className="h-[18px] w-[18px]" />
                      </a>
                    ) : null}
                    {p.whatsapp ? (
                      <a
                        href={waLink(p.whatsapp)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`WhatsApp ${p.marca}`}
                        className="transition-colors hover:text-gold-light"
                      >
                        <WhatsApp className="h-[18px] w-[18px]" />
                      </a>
                    ) : null}
                    {REDES_ORDEN.map((red) => {
                      const r = p.redes[red];
                      if (!r.url) return null;
                      const Icono = RED_ICONS[red];
                      return (
                        <a
                          key={red}
                          href={r.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${t.redes[red]} ${p.marca}`}
                          className="transition-colors hover:text-gold-light"
                        >
                          <Icono className="h-[18px] w-[18px]" />
                        </a>
                      );
                    })}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {REGISTROS_LIST.length > 0 ? (
          <div className="mt-14 border-t border-line-navy pt-6">
            <h3 className="eyebrow text-[rgba(242,239,226,0.6)]">
              {t.footer.registro}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-x-10 gap-y-2 text-xs text-[rgba(242,239,226,0.6)]">
              {REGISTROS_LIST.map(([codigo, r]) => (
                <li key={codigo}>
                  <span className="text-marfil">{r.razonSocial}</span>
                  <span className="mx-2 text-gold-light">·</span>
                  {r.tipo} {r.numero}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-line-navy pt-6 text-xs text-[rgba(242,239,226,0.45)] sm:flex-row sm:items-center">
          <p>
            &copy; {anio} {SITE.nombre}. {t.footer.derechos}
          </p>
          <p>{t.footer.operacion}</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { STATS } from "@/lib/stats";
import { RED_ICONS, Globe, WhatsApp, MapPin, Users } from "@/components/icons";
import { fmt } from "@/lib/format";
import { useLang } from "@/i18n/provider";
import { Reveal } from "@/components/reveal";
import { AnimatedNumber } from "@/components/animated-number";
import { useInView } from "@/hooks/use-in-view";

const maxRed = Math.max(1, ...STATS.porRed.map((r) => r.seguidores));

function Bar({ pct }: { pct: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[rgba(242,239,226,0.1)]"
    >
      <div
        className="h-full rounded-full bg-[linear-gradient(90deg,#9A6E2E,#C9A24A_60%,#E7CC82)] transition-[width] duration-1000 ease-out motion-reduce:transition-none"
        style={{ width: inView ? `${pct}%` : "0%" }}
      />
    </div>
  );
}

export function Cifras() {
  const { t } = useLang();

  const tarjetas = [
    { icono: Users, valor: STATS.cuentasEnlazadas, etiqueta: t.cifras.tarjetas.cuentas },
    { icono: Globe, valor: STATS.websActivas, etiqueta: t.cifras.tarjetas.webs },
    { icono: WhatsApp, valor: STATS.whatsappActivos, etiqueta: t.cifras.tarjetas.whatsapp },
    { icono: MapPin, valor: STATS.paises, etiqueta: t.cifras.tarjetas.paises },
  ];

  return (
    <section id="cifras" className="relative overflow-hidden bg-navy text-marfil">
      <div
        aria-hidden="true"
        className="grid-lines-navy pointer-events-none absolute inset-0 [mask-image:linear-gradient(180deg,transparent,black_15%,black_85%,transparent)]"
      />
      <div className="container-pad relative py-[clamp(72px,9vw,148px)]">
        <Reveal className="max-w-3xl">
          <p className="eyebrow flex items-center gap-3 text-gold-light">
            <span className="font-display text-xl not-italic text-gold-light">04</span>
            <span aria-hidden="true" className="h-px w-8 bg-gold-light/40" />
            <span>{t.cifras.eyebrow}</span>
          </p>
          <h2 className="display-tight mt-5 text-[clamp(30px,3.6vw,44px)] text-marfil">
            {t.cifras.titulo}
          </h2>
          <p className="mt-5 max-w-prose text-[17px] leading-relaxed text-[rgba(242,239,226,0.62)]">
            {t.cifras.descripcion}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-16 gap-y-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Comunidad total */}
          <Reveal>
            <p className="eyebrow text-gold-light">{t.cifras.comunidadTotal}</p>
            <div className="mt-6 font-display text-[clamp(56px,7vw,92px)] leading-none tracking-tightest text-gold-light">
              <AnimatedNumber value={STATS.seguidoresConfirmados} format={fmt} />
            </div>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[rgba(242,239,226,0.55)]">
              {t.cifras.totalSub}
            </p>
            <span aria-hidden="true" className="mt-8 block h-px w-14 bg-gold" />
          </Reveal>

          {/* Por red */}
          <Reveal delay={100}>
            <h3 className="eyebrow text-[rgba(242,239,226,0.6)]">
              {t.cifras.porRedTitulo}
            </h3>
            <ul className="mt-7 space-y-7">
              {STATS.porRed.map((r) => {
                const Icono = RED_ICONS[r.red];
                const pct = Math.max(4, Math.round((r.seguidores / maxRed) * 100));
                return (
                  <li key={r.red}>
                    <div className="flex items-end justify-between">
                      <span className="inline-flex items-center gap-2.5 text-[15px] font-medium text-marfil">
                        <Icono className="h-[18px] w-[18px] text-gold-light" />
                        {t.redes[r.red]}
                      </span>
                      <span className="font-display text-xl text-marfil">
                        <AnimatedNumber value={r.seguidores} format={fmt} />
                      </span>
                    </div>
                    <Bar pct={pct} />
                    <p className="mt-2 text-xs text-[rgba(242,239,226,0.45)]">
                      {r.cuentasConfirmadas} {t.cifras.cuentas}
                    </p>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        {/* Fila de indicadores, separados por hairline. */}
        <div className="mt-16 grid grid-cols-2 border-t border-line-navy pt-10 sm:grid-cols-4">
          {tarjetas.map((tj, i) => (
            <Reveal
              key={tj.etiqueta}
              delay={i * 70}
              className={i > 0 ? "sm:border-l sm:border-line-navy sm:pl-8" : ""}
            >
              <div className="font-display text-[clamp(36px,4vw,56px)] leading-none tracking-tightest text-gold-light">
                <AnimatedNumber value={tj.valor} />
              </div>
              <div className="mt-3 text-xs uppercase tracking-eyebrow text-[rgba(242,239,226,0.55)]">
                {tj.etiqueta}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

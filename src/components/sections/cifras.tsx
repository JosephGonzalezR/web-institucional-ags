"use client";

import { STATS } from "@/lib/stats";
import { SectionHeader } from "@/components/section-header";
import {
  RED_ICONS,
  Users,
  Globe,
  WhatsApp,
  MapPin,
  TrendingUp,
} from "@/components/icons";
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
      className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/5"
    >
      <div
        className="h-full rounded-full bg-gradient-to-r from-brand-600 via-brand-400 to-brand-200 transition-[width] duration-1000 ease-out motion-reduce:transition-none"
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
    <section id="cifras" className="border-b border-line py-20 sm:py-28">
      <div className="container-pad">
        <SectionHeader
          eyebrow={t.cifras.eyebrow}
          titulo={t.cifras.titulo}
          descripcion={t.cifras.descripcion}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="flex">
            <div className="relative flex w-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-panel-2 to-panel p-8 shadow-panel">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(closest-side,rgba(220,167,61,0.22),transparent)] blur-xl"
              />
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-line bg-white/5 px-3 py-1 text-xs font-medium text-brand-200">
                <TrendingUp className="h-4 w-4" />
                {t.cifras.comunidadTotal}
              </div>
              <div className="mt-8">
                <div className="font-mono text-6xl font-semibold tracking-tight text-white sm:text-7xl">
                  <AnimatedNumber value={STATS.seguidoresConfirmados} format={fmt} />
                </div>
                <p className="mt-3 text-sm text-slate-400">{t.cifras.totalSub}</p>
              </div>
              <div className="mt-8 h-px w-full bg-gradient-to-r from-brand-400/40 to-transparent" />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-line bg-panel p-8 shadow-panel">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                {t.cifras.porRedTitulo}
              </h3>
              <ul className="mt-6 space-y-6">
                {STATS.porRed.map((r) => {
                  const Icono = RED_ICONS[r.red];
                  const pct = Math.max(4, Math.round((r.seguidores / maxRed) * 100));
                  return (
                    <li key={r.red}>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-2.5 text-sm font-medium text-white">
                          <Icono className="h-[18px] w-[18px] text-brand-300" />
                          {t.redes[r.red]}
                        </span>
                        <span className="font-mono text-sm text-white">
                          <AnimatedNumber value={r.seguidores} format={fmt} />
                        </span>
                      </div>
                      <Bar pct={pct} />
                      <p className="mt-1.5 text-xs text-slate-500">
                        {r.cuentasConfirmadas} {t.cifras.cuentas}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {tarjetas.map((tj, i) => {
            const Icono = tj.icono;
            return (
              <Reveal key={tj.etiqueta} delay={i * 80}>
                <div className="group rounded-2xl border border-line bg-panel p-6 shadow-panel transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white/5 text-brand-300 transition-colors group-hover:border-brand-400/50">
                    <Icono className="h-5 w-5" />
                  </span>
                  <div className="mt-4 font-mono text-3xl font-semibold text-white">
                    <AnimatedNumber value={tj.valor} />
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                    {tj.etiqueta}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

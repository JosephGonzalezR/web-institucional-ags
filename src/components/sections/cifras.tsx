import { STATS } from "@/lib/stats";
import { REDES_META } from "@/config/paises";
import { SectionHeader } from "@/components/section-header";
import {
  RED_ICONS,
  Users,
  Globe,
  WhatsApp,
  MapPin,
  TrendingUp,
} from "@/components/icons";
import { fmt, fmtFecha } from "@/lib/format";

const maxRed = Math.max(1, ...STATS.porRed.map((r) => r.seguidores));

const tarjetas = [
  { icono: Users, valor: STATS.cuentasEnlazadas, etiqueta: "Cuentas en redes" },
  { icono: Globe, valor: STATS.websActivas, etiqueta: "Sitios web activos" },
  { icono: WhatsApp, valor: STATS.whatsappActivos, etiqueta: "Lineas de WhatsApp" },
  { icono: MapPin, valor: STATS.paises, etiqueta: "Paises con operacion" },
];

export function Cifras() {
  return (
    <section id="cifras" className="border-b border-line py-20 sm:py-28">
      <div className="container-pad">
        <SectionHeader
          eyebrow="Panel de cifras"
          titulo="El alcance de AGS, en numeros"
          descripcion="Indicadores agregados de toda la red. Solo se contabilizan datos confirmados; las cuentas en verificacion se identifican aparte."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          {/* Total destacado */}
          <div className="flex flex-col justify-between rounded-2xl border border-line bg-gradient-to-b from-panel-2 to-panel p-8 shadow-panel">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-line bg-white/5 px-3 py-1 text-xs font-medium text-brand-300">
              <TrendingUp className="h-4 w-4" />
              Comunidad total
            </div>
            <div className="mt-8">
              <div className="font-mono text-6xl font-semibold tracking-tight text-white">
                {fmt(STATS.seguidoresConfirmados)}
              </div>
              <p className="mt-2 text-sm text-slate-400">
                seguidores confirmados en las cuentas de la red AGS.
              </p>
            </div>
            <p className="mt-8 text-xs text-slate-500">
              Base de conteo: {fmtFecha(STATS.baseline)}. La cifra crece a medida
              que se verifican nuevas cuentas.
            </p>
          </div>

          {/* Desglose por red */}
          <div className="rounded-2xl border border-line bg-panel p-8 shadow-panel">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Seguidores por red
            </h3>
            <ul className="mt-6 space-y-6">
              {STATS.porRed.map((r) => {
                const Icono = RED_ICONS[r.red];
                const pct = Math.round((r.seguidores / maxRed) * 100);
                const confirmado = r.seguidores > 0;
                return (
                  <li key={r.red}>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2.5 text-sm font-medium text-white">
                        <Icono className="h-[18px] w-[18px] text-slate-300" />
                        {REDES_META[r.red].nombre}
                      </span>
                      <span className="font-mono text-sm text-white">
                        {confirmado ? fmt(r.seguidores) : "Por confirmar"}
                      </span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent-500 to-brand-400"
                        style={{ width: `${confirmado ? Math.max(pct, 4) : 0}%` }}
                      />
                    </div>
                    <p className="mt-1.5 text-xs text-slate-500">
                      {r.cuentasConfirmadas > 0
                        ? `${r.cuentasConfirmadas} cuenta(s) confirmada(s)`
                        : "Sin conteo confirmado"}
                      {r.cuentasPorConfirmar > 0
                        ? ` · ${r.cuentasPorConfirmar} en verificacion`
                        : ""}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Tarjetas de indicadores */}
        <div className="mt-6 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {tarjetas.map((t) => {
            const Icono = t.icono;
            return (
              <div
                key={t.etiqueta}
                className="rounded-2xl border border-line bg-panel p-6 shadow-panel"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white/5 text-brand-300">
                  <Icono className="h-5 w-5" />
                </span>
                <div className="mt-4 font-mono text-3xl font-semibold text-white">
                  {t.valor}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                  {t.etiqueta}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

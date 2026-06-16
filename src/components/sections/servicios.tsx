import { SERVICIOS } from "@/config/site";
import { SectionHeader } from "@/components/section-header";
import { SERVICIO_ICONS } from "@/components/icons";

export function Servicios() {
  return (
    <section id="servicios" className="border-b border-line py-20 sm:py-28">
      <div className="container-pad">
        <SectionHeader
          eyebrow="Servicios"
          titulo="Que ofrece AGS"
          descripcion="Asesoria academica integral para estudiantes y profesionales. Una linea de servicios comun a las tres marcas de la organizacion."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICIOS.map((s) => {
            const Icono = SERVICIO_ICONS[s.icono];
            return (
              <div
                key={s.titulo}
                className="rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-brand-400/40"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/5 text-brand-300">
                  <Icono className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-white">
                  {s.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {s.descripcion}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

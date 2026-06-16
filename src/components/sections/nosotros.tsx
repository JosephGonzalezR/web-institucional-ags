import { NOSOTROS } from "@/config/site";
import { SectionHeader } from "@/components/section-header";
import { Building, Network, ShieldCheck } from "@/components/icons";

const pilares = [
  {
    icono: Building,
    titulo: "Operacion local",
    texto: "Una marca y un equipo propio en cada pais.",
  },
  {
    icono: Network,
    titulo: "Base tecnologica comun",
    texto: "Infraestructura digital y procesos compartidos.",
  },
  {
    icono: ShieldCheck,
    titulo: "Presencia verificable",
    texto: "Sitios y cuentas activas que se pueden visitar hoy.",
  },
];

export function Nosotros() {
  return (
    <section id="nosotros" className="border-b border-line py-20 sm:py-28">
      <div className="container-pad">
        <SectionHeader
          eyebrow="Quienes somos"
          titulo="Una organizacion academica multipais"
          align="left"
        />

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5">
            {NOSOTROS.map((parrafo, i) => (
              <p key={i} className="text-base leading-relaxed text-slate-300">
                {parrafo}
              </p>
            ))}
          </div>

          <ul className="space-y-3">
            {pilares.map((p) => {
              const Icono = p.icono;
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

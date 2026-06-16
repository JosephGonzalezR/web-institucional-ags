import { PAISES } from "@/config/paises";
import { STATS } from "@/lib/stats";
import { SectionHeader } from "@/components/section-header";
import { SouthAmericaMap } from "@/components/south-america-map";
import { CountryCard } from "@/components/country-card";

export function Presencia() {
  return (
    <section id="presencia" className="border-b border-line py-20 sm:py-28">
      <div className="container-pad">
        <SectionHeader
          eyebrow="Presencia digital multipais"
          titulo="Tres paises, tres marcas, una sola organizacion"
          descripcion="Cada pais opera con su propia marca, sitio web, canal de contacto y comunidad en redes. Esta es la presencia activa de AGS en Sudamerica."
        />

        <div className="mt-14 grid items-center gap-10 rounded-3xl border border-line bg-panel/60 p-8 shadow-panel lg:grid-cols-[1fr_1.1fr] lg:p-12">
          <SouthAmericaMap />
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Una red que cubre tres mercados
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-400">
              Operamos de forma simultanea en Peru, Chile y Argentina. Cada nodo
              de esta red representa una marca activa con presencia digital
              propia y verificable.
            </p>
            <dl className="mt-6 grid grid-cols-3 gap-3">
              {[
                { k: "Paises", v: STATS.paises },
                { k: "Sitios web", v: STATS.websActivas },
                { k: "Cuentas", v: STATS.cuentasEnlazadas },
              ].map((x) => (
                <div
                  key={x.k}
                  className="rounded-xl border border-line bg-white/[0.02] px-4 py-4 text-center"
                >
                  <dd className="font-mono text-2xl font-semibold text-white">
                    {x.v}
                  </dd>
                  <dt className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                    {x.k}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PAISES.map((p) => (
            <CountryCard key={p.codigo} pais={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

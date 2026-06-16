import Image from "next/image";
import { SITE } from "@/config/site";
import { PAISES, REDES_ORDEN } from "@/config/paises";
import { RED_ICONS, Globe, Mail } from "@/components/icons";

export function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="bg-ink">
      <div className="container-pad py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt={`${SITE.nombre} logo`}
                width={34}
                height={34}
                className="h-8 w-8 rounded-md object-contain"
              />
              <span className="font-semibold text-white">{SITE.sigla}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {SITE.descripcion}
            </p>
            <a
              href={`mailto:${SITE.correo}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 text-brand-300" />
              {SITE.correo}
            </a>
          </div>

          {/* Presencia por pais */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Presencia por pais
            </h3>
            <ul className="mt-5 space-y-4">
              {PAISES.map((p) => (
                <li key={p.codigo} className="flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm text-slate-200">
                    <span aria-hidden="true">{p.bandera}</span>
                    <span className="font-medium">{p.marca}</span>
                  </span>
                  <span className="flex items-center gap-2.5 text-slate-400">
                    {p.web ? (
                      <a
                        href={p.web}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Sitio web de ${p.marca}`}
                        className="transition-colors hover:text-white"
                      >
                        <Globe className="h-[18px] w-[18px]" />
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
                          aria-label={`${red} de ${p.marca}`}
                          className="transition-colors hover:text-white"
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

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            &copy; {anio} {SITE.nombre}. Todos los derechos reservados.
          </p>
          <p>Operacion en Peru, Chile y Argentina.</p>
        </div>
      </div>
    </footer>
  );
}

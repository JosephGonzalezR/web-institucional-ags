"use client";

import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { TERMINOS, ACTUALIZADO } from "@/config/terminos";
import { asset } from "@/lib/asset";
import { useLang } from "@/i18n/provider";

/**
 * Pagina de Terminos y Condiciones. El contenido vive en config/terminos.ts
 * (ES/EN); aqui solo se maqueta. Es una pagina aparte de la portada, asi que
 * el menu recibe `hrefBase` para que sus anclas vuelvan al inicio.
 */
export function TerminosContenido() {
  const { lang } = useLang();
  const tx = TERMINOS[lang];
  const raiz = asset("/");

  return (
    <>
      <Navbar hrefBase={raiz} siempreSolido />
      <main className="bg-marfil pt-[76px]">
        <section className="border-b border-line py-[clamp(56px,7vw,104px)]">
          <div className="container-pad">
            <div className="max-w-3xl">
              <p className="eyebrow mb-6">{tx.eyebrow}</p>
              <h1 className="display-tight text-[clamp(32px,4.2vw,50px)] leading-[1.07] text-ink">
                {tx.titulo}
              </h1>
              <p className="mt-5 font-mono text-xs uppercase tracking-eyebrow text-muted-2">
                {tx.actualizadoLabel}: {ACTUALIZADO}
              </p>
              <p className="mt-7 max-w-prose text-lg leading-relaxed text-muted">
                {tx.intro}
              </p>
            </div>

            {/* Identificacion del prestador: razon social y RUC visibles, como
                exigen las pasarelas de pago y la normativa de comercio. */}
            <div className="mt-12 max-w-3xl border border-line bg-paper p-7">
              <h2 className="eyebrow mb-5">{tx.identificacionTitulo}</h2>
              <dl className="grid gap-x-10 gap-y-3 sm:grid-cols-[minmax(0,180px)_1fr]">
                {tx.identificacion.map((d) => (
                  <div key={d.etiqueta} className="contents">
                    <dt className="text-sm text-muted-2">{d.etiqueta}</dt>
                    <dd className="text-[15px] font-medium text-ink">{d.valor}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="py-[clamp(48px,6vw,88px)]">
          <div className="container-pad">
            <div className="max-w-3xl">
              {tx.secciones.map((s) => (
                <article key={s.titulo} className="border-t border-line py-9 first:border-t-0 first:pt-0">
                  <h2 className="font-display text-[clamp(21px,2.3vw,27px)] leading-snug tracking-tight text-ink">
                    {s.titulo}
                  </h2>
                  {s.parrafos?.map((p) => (
                    <p key={p} className="mt-5 text-[16px] leading-relaxed text-muted">
                      {p}
                    </p>
                  ))}
                  {s.items ? (
                    <ul className="mt-5 flex flex-col gap-3">
                      {s.items.map((it) => (
                        <li key={it} className="flex gap-3 text-[16px] leading-relaxed text-muted">
                          <span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] shrink-0 rounded-full bg-gold" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}

              <a
                href={raiz}
                className="mt-12 inline-flex items-center gap-2 text-[15px] font-medium text-gold-dark hover:text-ink"
              >
                &larr; {tx.volver}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

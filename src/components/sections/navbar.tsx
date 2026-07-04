"use client";

import { useState } from "react";
import Image from "next/image";
import { NAV } from "@/config/site";
import { Menu, Close } from "@/components/icons";
import { LangSwitch } from "@/components/lang-switch";
import { asset } from "@/lib/asset";
import { useLang } from "@/i18n/provider";

export function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const { t } = useLang();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-marfil/85 backdrop-blur-md">
      <nav
        className="container-pad flex h-[76px] items-center justify-between gap-4"
        aria-label="Principal"
      >
        <a href="#inicio" className="flex items-center" aria-label="Academic Global Solutions">
          <Image
            src={asset("/logo-lockup.png")}
            alt="Academic Global Solutions"
            width={210}
            height={108}
            className="h-9 w-auto object-contain"
            priority
          />
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative py-1 text-[15px] text-muted transition-colors hover:text-ink"
              >
                {t.nav[item.id]}
                <span className="absolute inset-x-0 bottom-0 h-px w-0 bg-gold transition-all duration-200 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="hidden text-[15px] font-medium text-ink transition-colors hover:text-gold-dark md:inline"
          >
            {t.nav.contacto}&nbsp;&rarr;
          </a>
          <LangSwitch />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-ink hover:bg-ink/5 md:hidden"
            aria-label={abierto ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={abierto}
            onClick={() => setAbierto((v) => !v)}
          >
            {abierto ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>

      {abierto ? (
        <div className="border-t border-line md:hidden">
          <ul className="container-pad flex flex-col py-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-3 text-[15px] text-muted hover:text-ink"
                  onClick={() => setAbierto(false)}
                >
                  {t.nav[item.id]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}

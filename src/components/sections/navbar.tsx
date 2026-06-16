"use client";

import { useState } from "react";
import Image from "next/image";
import { NAV, SITE } from "@/config/site";
import { Menu, Close } from "@/components/icons";

export function Navbar() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
      <nav
        className="container-pad flex h-16 items-center justify-between"
        aria-label="Principal"
      >
        <a href="#inicio" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt={`${SITE.nombre} logo`}
            width={34}
            height={34}
            className="h-8 w-8 rounded-md object-contain"
            priority
          />
          <span className="text-sm font-semibold tracking-wide text-white">
            {SITE.sigla}
            <span className="ml-2 hidden font-normal text-slate-400 sm:inline">
              Academic Global Solutions
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-slate-300 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-200 hover:bg-white/5 md:hidden"
          aria-label={abierto ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={abierto}
          onClick={() => setAbierto((v) => !v)}
        >
          {abierto ? <Close /> : <Menu />}
        </button>
      </nav>

      {abierto ? (
        <div className="border-t border-line md:hidden">
          <ul className="container-pad flex flex-col py-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-3 text-sm text-slate-300 hover:text-white"
                  onClick={() => setAbierto(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}

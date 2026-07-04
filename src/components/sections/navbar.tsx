"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { NAV } from "@/config/site";
import { Menu, Close } from "@/components/icons";
import { LangSwitch } from "@/components/lang-switch";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";
import { useLang } from "@/i18n/provider";

export function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || abierto;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? "border-b border-line bg-marfil/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        className="container-pad flex h-[76px] items-center justify-between gap-4"
        aria-label="Principal"
      >
        <a
          href="#inicio"
          className="flex items-center gap-3"
          aria-label="Academic Global Solution"
        >
          <Image
            src={asset(solid ? "/logo-mark.png" : "/logo-mark-dark.png")}
            alt="AGS"
            width={88}
            height={88}
            className="h-10 w-10 object-contain"
            priority
          />
          <span
            className={cn(
              "hidden font-display text-lg tracking-tight transition-colors sm:inline",
              solid ? "text-ink" : "text-marfil",
            )}
          >
            Academic Global Solution
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "group relative py-1 text-[15px] transition-colors",
                  solid ? "text-muted hover:text-ink" : "text-marfil/85 hover:text-marfil",
                )}
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
            className={cn(
              "hidden text-[15px] font-medium transition-colors md:inline",
              solid ? "text-ink hover:text-gold-dark" : "text-gold-light hover:text-marfil",
            )}
          >
            {t.nav.contacto}&nbsp;&rarr;
          </a>
          <LangSwitch onDark={!solid} />
          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-sm md:hidden",
              solid ? "text-ink hover:bg-ink/5" : "text-marfil hover:bg-white/10",
            )}
            aria-label={abierto ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={abierto}
            onClick={() => setAbierto((v) => !v)}
          >
            {abierto ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>

      {abierto ? (
        <div className="border-t border-line bg-marfil md:hidden">
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

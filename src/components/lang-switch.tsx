"use client";

import { useLang } from "@/i18n/provider";
import { cn } from "@/lib/utils";
import type { Lang } from "@/i18n/dictionary";

const LANGS: { code: Lang; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
];

export function LangSwitch({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={cn(
        "inline-flex items-center border p-0.5",
        onDark ? "border-marfil/30" : "border-line",
        className,
      )}
      role="group"
      aria-label="Idioma / Language"
    >
      {LANGS.map((l) => {
        const active = lang === l.code;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            className={cn(
              "px-2.5 py-1 text-xs font-semibold tracking-wide transition-colors",
              active
                ? onDark
                  ? "bg-gold-light text-navy"
                  : "bg-ink text-marfil"
                : onDark
                  ? "text-marfil/70 hover:text-marfil"
                  : "text-muted hover:text-ink",
            )}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}

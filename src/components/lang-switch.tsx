"use client";

import { useLang } from "@/i18n/provider";
import { cn } from "@/lib/utils";
import type { Lang } from "@/i18n/dictionary";

const LANGS: { code: Lang; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
];

export function LangSwitch({ className }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={cn(
        "inline-flex items-center border border-line p-0.5",
        className,
      )}
      role="group"
      aria-label="Idioma / Language"
    >
      {LANGS.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
          className={cn(
            "px-2.5 py-1 text-xs font-semibold tracking-wide transition-colors",
            lang === l.code
              ? "bg-ink text-marfil"
              : "text-muted hover:text-ink",
          )}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

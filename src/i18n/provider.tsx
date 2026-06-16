"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { DICT, type Lang, type Messages } from "@/i18n/dictionary";

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Messages;
}

const LangContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "ags-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "es" || saved === "en") setLangState(saved);
    } catch {
      /* sin storage */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* sin storage */
    }
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: DICT[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): Ctx {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang debe usarse dentro de LanguageProvider");
  return ctx;
}

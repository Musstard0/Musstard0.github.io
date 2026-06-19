import { useCallback, useState } from "react";
import type { Language, PortfolioMode } from "../types";

const MODE_KEY = "portfolio-mode";
const LANG_KEY = "portfolio-lang";

function safeGetItem(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSetItem(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* private browsing / storage disabled */
  }
}

function readMode(): PortfolioMode {
  const stored = safeGetItem(MODE_KEY);
  return stored === "voice" ? "voice" : "game";
}

function readLang(): Language {
  const stored = safeGetItem(LANG_KEY);
  if (stored === "ru") return "ru";
  return "en";
}

export function usePortfolioPrefs() {
  const [mode, setModeState] = useState<PortfolioMode>(() => readMode());
  const [lang, setLangState] = useState<Language>(() => readLang());

  const setMode = useCallback((next: PortfolioMode) => {
    setModeState(next);
    safeSetItem(MODE_KEY, next);
  }, []);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    safeSetItem(LANG_KEY, next);
  }, []);

  const toggleMode = useCallback(() => {
    setMode(mode === "game" ? "voice" : "game");
  }, [mode, setMode]);

  return { mode, lang, setMode, setLang, toggleMode };
}

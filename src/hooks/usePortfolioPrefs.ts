import { useCallback, useState } from "react";
import type { Language, PortfolioMode } from "../types";

const MODE_KEY = "portfolio-mode";
const LANG_KEY = "portfolio-lang";

function readMode(): PortfolioMode {
  const stored = localStorage.getItem(MODE_KEY);
  return stored === "voice" ? "voice" : "game";
}

function readLang(): Language {
  const stored = localStorage.getItem(LANG_KEY);
  if (stored === "es" || stored === "fr" || stored === "ja") return stored;
  return "en";
}

export function usePortfolioPrefs() {
  const [mode, setModeState] = useState<PortfolioMode>(() => readMode());
  const [lang, setLangState] = useState<Language>(() => readLang());

  const setMode = useCallback((next: PortfolioMode) => {
    setModeState(next);
    localStorage.setItem(MODE_KEY, next);
  }, []);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    localStorage.setItem(LANG_KEY, next);
  }, []);

  const toggleMode = useCallback(() => {
    setMode(mode === "game" ? "voice" : "game");
  }, [mode, setMode]);

  return { mode, lang, setMode, setLang, toggleMode };
}

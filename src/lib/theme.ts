import type { PortfolioMode } from "../types";

export interface AccentColors {
  main: string;
  glow: string;
  dim: string;
  border: string;
  shadow: string;
}

export function getAccent(mode: PortfolioMode): AccentColors {
  if (mode === "game") {
    return {
      main: "#e53535",
      glow: "rgba(229,53,53,0.35)",
      dim: "rgba(229,53,53,0.12)",
      border: "rgba(229,53,53,0.25)",
      shadow: "rgba(229,53,53,0.3)",
    };
  }
  return {
    main: "#2563eb",
    glow: "rgba(37,99,235,0.35)",
    dim: "rgba(37,99,235,0.12)",
    border: "rgba(37,99,235,0.25)",
    shadow: "rgba(37,99,235,0.3)",
  };
}

export function scrollToSection(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

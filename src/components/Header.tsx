import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { langLabels, site } from "../config/site";
import { getAccent, scrollToSection } from "../lib/theme";
import type { Language, LocaleContent, PortfolioMode } from "../types";

interface HeaderProps {
  mode: PortfolioMode;
  lang: Language;
  labels: LocaleContent["nav"];
  modeSwitcher: LocaleContent["modeSwitcher"];
  onModeChange: (mode: PortfolioMode) => void;
  onLangChange: (lang: Language) => void;
}

const navItems = [
  { key: "about", href: "#about" },
  { key: "projects", href: "#projects" },
  { key: "skills", href: "#skills" },
  { key: "contact", href: "#contact" },
] as const;

export function Header({
  mode,
  lang,
  labels,
  // modeSwitcher,
  // onModeChange,
  onLangChange,
}: HeaderProps) {
  const accent = getAccent(mode);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = (href: string) => {
    scrollToSection(href);
    setMobileOpen(false);
  };

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}>
      <div
        style={{
          background: "rgba(8,8,11,0.9)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            height: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <button
            type="button"
            onClick={() => navigate("#hero")}
            style={{
              background: "none",
              border: "none",
              fontFamily: "var(--font-display)",
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: "0.06em",
              color: "#f0f0f5",
              cursor: "pointer",
              padding: 0,
              flexShrink: 0,
            }}
          >
            <span style={{ color: accent.main, transition: "color 0.4s" }}>{site.initials}</span>
          </button>

          <nav className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => navigate(item.href)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#6a6a82",
                  fontSize: 13,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  padding: "4px 0",
                  fontFamily: "var(--font-mono)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#f0f0f5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#6a6a82";
                }}
              >
                {labels[item.key]}
              </button>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                display: "flex",
                background: "#111118",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              {(Object.keys(langLabels) as Language[]).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => onLangChange(code)}
                  style={{
                    padding: "6px 14px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    fontFamily: "var(--font-mono)",
                    transition: "all 0.2s",
                    background: lang === code ? accent.main : "transparent",
                    color: lang === code ? "#fff" : "#55556a",
                  }}
                >
                  {langLabels[code]}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="show-mobile"
              onClick={() => setMobileOpen((o) => !o)}
              style={{
                background: "none",
                border: "none",
                color: "#f0f0f5",
                cursor: "pointer",
                padding: 4,
                display: "none",
              }}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Voice mode temporarily disabled — programmer portfolio only
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          background: "rgba(6,6,9,0.96)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <button
          type="button"
          onClick={() => onModeChange("game")}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            padding: "13px 0",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-display)",
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            transition: "all 0.3s",
            background:
              mode === "game"
                ? "linear-gradient(135deg, rgba(229,53,53,0.18) 0%, rgba(229,53,53,0.06) 100%)"
                : "transparent",
            color: mode === "game" ? "#e53535" : "#44445a",
            borderRight: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <Gamepad2 size={16} />
          <span className="hide-tiny">{modeSwitcher.game}</span>
          {mode === "game" && (
            <motion.div
              layoutId="mode-indicator"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 2,
                background: "#e53535",
                boxShadow: "0 0 12px rgba(229,53,53,0.6)",
              }}
            />
          )}
        </button>

        <button
          type="button"
          onClick={() => onModeChange("voice")}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            padding: "13px 0",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-display)",
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            transition: "all 0.3s",
            background:
              mode === "voice"
                ? "linear-gradient(135deg, rgba(37,99,235,0.18) 0%, rgba(37,99,235,0.06) 100%)"
                : "transparent",
            color: mode === "voice" ? "#2563eb" : "#44445a",
          }}
        >
          <MicVocal size={16} />
          <span className="hide-tiny">{modeSwitcher.voice}</span>
          {mode === "voice" && (
            <motion.div
              layoutId="mode-indicator"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 2,
                background: "#2563eb",
                boxShadow: "0 0 12px rgba(37,99,235,0.6)",
              }}
            />
          )}
        </button>
      </div>
      */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              overflow: "hidden",
              background: "rgba(8,8,11,0.98)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div style={{ padding: "12px 24px 16px", display: "flex", flexDirection: "column", gap: 2 }}>
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => navigate(item.href)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#c0c0d0",
                    fontSize: 15,
                    textAlign: "left",
                    padding: "10px 0",
                    cursor: "pointer",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {labels[item.key]}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

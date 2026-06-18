import { useState, type CSSProperties, type ReactNode } from "react";
import { ChevronDown, Gamepad2, Menu, MicVocal, X } from "lucide-react";
import { langLabels, site } from "../config/site";
import { getAccent, scrollToSection } from "../lib/theme";
import type { Language, PortfolioMode } from "../types";

interface HeaderProps {
  mode: PortfolioMode;
  lang: Language;
  labels: {
    about: string;
    projects: string;
    skills: string;
    contact: string;
    switchToVoice: string;
    switchToGame: string;
  };
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
  onModeChange,
  onLangChange,
}: HeaderProps) {
  const accent = getAccent(mode);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navigate = (href: string) => {
    scrollToSection(href);
    setMobileOpen(false);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "rgba(8,8,11,0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            navigate("#hero");
          }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: "0.05em",
            color: "#f0f0f5",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 8,
            flexShrink: 0,
          }}
        >
          <span style={{ color: accent.main }}>{site.initials}</span>
          <span style={{ color: "rgba(255,255,255,0.3)", fontWeight: 300 }}>|</span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 400,
              color: "#8888a0",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            {mode === "game" ? "Game Dev" : "Voice Actor"}
          </span>
        </a>

        <div
          className="hidden-mobile"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
            flex: 1,
            justifyContent: "center",
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => navigate(item.href)}
              style={navButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#f0f0f5";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#8888a0";
              }}
            >
              {labels[item.key]}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          <div
            className="hidden-mobile"
            style={{
              display: "flex",
              alignItems: "center",
              background: "#0f0f14",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 999,
              padding: 3,
              gap: 2,
            }}
          >
            <ModeButton
              active={mode === "game"}
              color="#e53535"
              onClick={() => onModeChange("game")}
              icon={<Gamepad2 size={13} />}
              label={labels.switchToGame}
            />
            <ModeButton
              active={mode === "voice"}
              color="#2563eb"
              onClick={() => onModeChange("voice")}
              icon={<MicVocal size={13} />}
              label="Voice"
            />
          </div>

          <div style={{ position: "relative" }}>
            <button
              type="button"
              onClick={() => setLangOpen((o) => !o)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                background: "#0f0f14",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 6,
                padding: "6px 10px",
                color: "#f0f0f5",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.06em",
              }}
            >
              {langLabels[lang]}
              <ChevronDown size={11} style={{ opacity: 0.5 }} />
            </button>
            {langOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 6px)",
                  right: 0,
                  background: "#0f0f14",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 8,
                  overflow: "hidden",
                  minWidth: 80,
                  zIndex: 100,
                }}
              >
                {(Object.keys(langLabels) as Language[]).map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => {
                      onLangChange(code);
                      setLangOpen(false);
                    }}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      padding: "8px 14px",
                      background: lang === code ? accent.dim : "transparent",
                      border: "none",
                      color: lang === code ? accent.main : "#8888a0",
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {langLabels[code]}
                  </button>
                ))}
              </div>
            )}
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
      </nav>

      {mobileOpen && (
        <div
          style={{
            background: "#0f0f14",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "16px 24px 24px",
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => navigate(item.href)}
              style={{
                ...navButtonStyle,
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "12px 0",
                fontSize: 16,
              }}
            >
              {labels[item.key]}
            </button>
          ))}
          <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
            <button
              type="button"
              onClick={() => {
                onModeChange("game");
                setMobileOpen(false);
              }}
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                background: mode === "game" ? "#e53535" : "#1a1a22",
                color: mode === "game" ? "#fff" : "#8888a0",
              }}
            >
              {labels.switchToGame}
            </button>
            <button
              type="button"
              onClick={() => {
                onModeChange("voice");
                setMobileOpen(false);
              }}
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                background: mode === "voice" ? "#2563eb" : "#1a1a22",
                color: mode === "voice" ? "#fff" : "#8888a0",
              }}
            >
              Voice
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

const navButtonStyle: CSSProperties = {
  background: "none",
  border: "none",
  color: "#8888a0",
  fontSize: 14,
  letterSpacing: "0.06em",
  cursor: "pointer",
  padding: "4px 0",
  transition: "color 0.2s",
  fontFamily: "var(--font-body)",
};

function ModeButton({
  active,
  color,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  color: string;
  onClick: () => void;
  icon: ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        padding: "5px 12px",
        borderRadius: 999,
        border: "none",
        cursor: "pointer",
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.05em",
        fontFamily: "var(--font-display)",
        transition: "all 0.25s",
        background: active ? color : "transparent",
        color: active ? "#fff" : "#8888a0",
      }}
    >
      {icon}
      {label}
    </button>
  );
}

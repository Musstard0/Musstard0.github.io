import type { CSSProperties } from "react";
import { Github, Youtube } from "lucide-react";
import { site } from "../config/site";
import { getAccent } from "../lib/theme";
import type { LocaleContent, PortfolioMode } from "../types";

interface FooterProps {
  mode: PortfolioMode;
  content: LocaleContent["footer"];
}

const socialItems = [
  { key: "github" as const, icon: Github, label: "GitHub" },
  { key: "youtube" as const, icon: Youtube, label: "YouTube" },
];

export function Footer({ mode, content }: FooterProps) {
  const accent = getAccent(mode);

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "36px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 18,
              fontWeight: 800,
              marginBottom: 4,
            }}
          >
            <span style={{ color: accent.main, transition: "color 0.5s" }}>{site.initials}</span>
            <span style={{ color: "#333344", margin: "0 8px" }}>—</span>
            {site.name}
          </div>
          <p
            style={{
              fontSize: 11,
              color: "#33334a",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.06em",
              margin: 0,
            }}
          >
            {content.madeWith}
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {socialItems.map(({ key, icon: Icon, label }) => {
            const href = site.social[key];
            const style: CSSProperties = {
              background: "#0f0f14",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 8,
              padding: "8px 10px",
              color: "#44445a",
              cursor: href ? "pointer" : "default",
              transition: "color 0.2s, border-color 0.2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            };

            if (!href) {
              return (
                <button key={key} type="button" aria-label={label} disabled style={style}>
                  <Icon size={16} />
                </button>
              );
            }

            return (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={style}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = accent.main;
                  e.currentTarget.style.borderColor = `${accent.main}55`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#44445a";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                }}
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>

        <p style={{ fontSize: 11, color: "#2a2a3a", fontFamily: "var(--font-mono)", margin: 0 }}>
          {content.rights}
        </p>
      </div>
    </footer>
  );
}

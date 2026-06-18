import type { CSSProperties } from "react";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import { site } from "../config/site";
import { getAccent } from "../lib/theme";
import type { LocaleContent, PortfolioMode } from "../types";

interface FooterProps {
  mode: PortfolioMode;
  content: LocaleContent["footer"];
}

const socialIcons = [
  { key: "github" as const, icon: Github, label: "GitHub" },
  { key: "twitter" as const, icon: Twitter, label: "Twitter" },
  { key: "linkedin" as const, icon: Linkedin, label: "LinkedIn" },
  { key: "youtube" as const, icon: Youtube, label: "YouTube" },
];

export function Footer({ mode, content }: FooterProps) {
  const accent = getAccent(mode);

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "40px 24px",
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
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 4,
            }}
          >
            <span style={{ color: accent.main }}>{site.initials}</span> {site.name}
          </div>
          <p style={{ fontSize: 12, color: "#55556a", fontFamily: "var(--font-mono)", margin: 0 }}>
            {content.madeWith}
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {socialIcons.map(({ key, icon: Icon, label }) => {
            const href = site.social[key];
            if (!href) {
              return (
                <button
                  key={key}
                  type="button"
                  aria-label={label}
                  disabled
                  title={`Add your ${label} URL in src/config/site.ts`}
                  style={socialButtonStyle}
                >
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
                style={{ ...socialButtonStyle, textDecoration: "none" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = accent.main;
                  e.currentTarget.style.borderColor = `${accent.main}55`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#55556a";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                }}
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>

        <p style={{ fontSize: 12, color: "#44445a", fontFamily: "var(--font-mono)", margin: 0 }}>
          {content.rights}
        </p>
      </div>
    </footer>
  );
}

const socialButtonStyle: CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: 8,
  padding: 8,
  color: "#55556a",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "color 0.2s, border-color 0.2s",
};

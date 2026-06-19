import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { site } from "../config/site";
import { getAccent } from "../lib/theme";
import type { LocaleContent, PortfolioMode } from "../types";

function TelegramIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

interface ContactProps {
  mode: PortfolioMode;
  content: LocaleContent["contact"];
}

export function Contact({ mode, content }: ContactProps) {
  const accent = getAccent(mode);
  const tagBg = mode === "game" ? "rgba(229,53,53,0.1)" : "rgba(37,99,235,0.1)";
  const tagBorder = mode === "game" ? "rgba(229,53,53,0.3)" : "rgba(37,99,235,0.3)";
  const tagGlow = mode === "game" ? "rgba(229,53,53,0.25)" : "rgba(37,99,235,0.25)";

  const channels = [
    {
      label: content.emailLabel,
      display: content.email,
      href: `mailto:${content.email}`,
      icon: <Mail size={22} />,
    },
    {
      label: content.telegramLabel,
      display: content.telegram,
      href: site.contact.telegramUrl,
      icon: <TelegramIcon size={22} />,
    },
  ];

  return (
    <section id="contact" style={{ padding: "80px 24px 120px" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 32, height: 2, background: accent.main }} />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: accent.main,
              }}
            >
              Contact
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(26px, 3.5vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: 14,
            }}
          >
            {content.heading}
          </h2>

          <p style={{ color: "#6a6a82", fontSize: 15, lineHeight: 1.7, marginBottom: 48 }}>
            {mode === "game" ? content.game : content.voice}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {channels.map((channel) => (
              <motion.a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  background: "#0f0f14",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 14,
                  padding: "22px 28px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = tagBorder;
                  e.currentTarget.style.boxShadow = `0 0 32px ${tagGlow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: tagBg,
                    border: `1px solid ${tagBorder}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: accent.main,
                    flexShrink: 0,
                  }}
                >
                  {channel.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#44445a",
                      marginBottom: 4,
                    }}
                  >
                    {channel.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 18,
                      fontWeight: 600,
                      color: "#d0d0e8",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {channel.display}
                  </div>
                </div>
                <Send size={16} color={accent.main} style={{ flexShrink: 0, opacity: 0.7 }} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

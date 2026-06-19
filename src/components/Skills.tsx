import { motion } from "framer-motion";
import { getAccent } from "../lib/theme";
import type { LocaleContent, PortfolioMode } from "../types";

interface SkillsProps {
  mode: PortfolioMode;
  content: LocaleContent["skills"];
}

export function Skills({ mode, content }: SkillsProps) {
  const accent = getAccent(mode);
  const column = mode === "game" ? content.game : content.voice;
  const sectionLabel = mode === "game" ? "Tech Stack" : "Capabilities";

  return (
    <section id="skills" style={{ padding: "80px 24px 100px", maxWidth: 1200, margin: "0 auto" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        style={{ marginBottom: 48 }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
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
            {sectionLabel}
          </span>
        </div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(26px, 3vw, 40px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          {content.heading}
        </h2>
      </motion.div>

      <div
        className="skills-columns"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px 64px",
        }}
      >
        {[content.strengthsLabel, content.stackLabel].map((label, colIndex) => {
          const items = colIndex === 0 ? column.strengths : column.stack;
          return (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: colIndex * 0.08 }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: accent.main,
                  marginBottom: 20,
                }}
              >
                {label}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: colIndex * 0.08 + i * 0.04 }}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      fontSize: 14,
                      color: "#c0c0d8",
                      lineHeight: 1.55,
                    }}
                  >
                    <span
                      style={{
                        color: accent.main,
                        flexShrink: 0,
                        marginTop: 2,
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        fontWeight: 700,
                      }}
                    >
                      —
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

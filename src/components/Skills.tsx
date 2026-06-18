import { motion } from "framer-motion";
import { getAccent } from "../lib/theme";
import type { LocaleContent, PortfolioMode } from "../types";

interface SkillsProps {
  mode: PortfolioMode;
  content: LocaleContent["skills"];
}

export function Skills({ mode, content }: SkillsProps) {
  const accent = getAccent(mode);
  const items = mode === "game" ? content.game : content.voice;
  const sectionLabel = mode === "game" ? "Tech Stack" : "Capabilities";

  return (
    <section id="skills" style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: 64 }}
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
            {sectionLabel}
          </span>
        </div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3.5vw, 44px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          {content.heading}
        </h2>
      </motion.div>

      <div
        className="skills-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "32px 64px",
        }}
      >
        {items.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#d0d0e0",
                }}
              >
                {skill.name}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  fontWeight: 700,
                  color: accent.main,
                }}
              >
                {skill.level}%
              </span>
            </div>
            <div
              style={{
                height: 6,
                background: "rgba(255,255,255,0.06)",
                borderRadius: 999,
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                style={{
                  height: "100%",
                  background: `linear-gradient(90deg, ${accent.main}, ${accent.main}cc)`,
                  borderRadius: 999,
                  boxShadow: `0 0 12px ${accent.dim}`,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

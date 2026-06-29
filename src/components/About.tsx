import { motion } from "framer-motion";
import photoUrl from "../content/Photo.jpg";
import { aboutImages } from "../lib/images";
import { getAccent } from "../lib/theme";
import type { LocaleContent, PortfolioMode } from "../types";

interface AboutProps {
  mode: PortfolioMode;
  content: LocaleContent["about"];
}

export function About({ mode, content }: AboutProps) {
  const accent = getAccent(mode);
  const copy = mode === "game" ? content.game : content.voice;
  const tags = [copy.tag1, copy.tag2, copy.tag3, copy.tag4];
  const imageSrc = mode === "game" ? photoUrl : aboutImages.voice;

  return (
    <section id="about" style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <motion.div
        className="about-grid"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "relative",
              borderRadius: 16,
              overflow: "hidden",
              aspectRatio: "4/5",
              background: "#0f0f14",
            }}
          >
            <img
              src={imageSrc}
              alt={mode === "game" ? "Denis Botanov" : "Voice recording setup"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: mode === "game" ? "brightness(0.92) saturate(0.95)" : "brightness(0.7) saturate(0.8)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 4,
                background: accent.main,
              }}
            />
          </div>
        </div>

        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
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
              {content.heading}
            </span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: 28,
            }}
          >
            {content.heading}
          </h2>
          {[copy.p1, copy.p2, copy.p3, copy.p4].filter(Boolean).map((paragraph, i, arr) => (
            <p
              key={i}
              style={{
                color: "#a0a0b8",
                lineHeight: 1.8,
                marginBottom: i < arr.length - 1 ? 16 : 32,
                fontSize: 15,
              }}
            >
              {paragraph}
            </p>
          ))}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  background: accent.dim,
                  color: accent.main,
                  border: `1px solid ${accent.border}`,
                  borderRadius: 6,
                  padding: "6px 14px",
                  fontSize: 12,
                  fontWeight: 600,
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.06em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

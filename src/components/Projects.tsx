import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { projectImages } from "../lib/images";
import { getAccent } from "../lib/theme";
import type { LocaleContent, PortfolioMode } from "../types";

interface ProjectsProps {
  mode: PortfolioMode;
  content: LocaleContent["projects"];
}

export function Projects({ mode, content }: ProjectsProps) {
  const accent = getAccent(mode);
  const items = mode === "game" ? content.game : content.voice;
  const images = projectImages[mode];
  const sectionLabel = mode === "game" ? "Games & Tools" : "Voice Work";

  return (
    <section
      id="projects"
      style={{
        padding: "100px 24px",
        background: "linear-gradient(180deg, #08080b 0%, #0a0a10 50%, #08080b 100%)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
          className="projects-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}
        >
          {items.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              style={{
                background: "#0f0f14",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16,
                overflow: "hidden",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = accent.border;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
              }}
            >
              <div style={{ height: 180, overflow: "hidden", position: "relative" }}>
                <img
                  src={images[index]}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.55) saturate(0.7)",
                    transition: "transform 0.4s, filter 0.4s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.filter = "brightness(0.7) saturate(0.9)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.filter = "brightness(0.55) saturate(0.7)";
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    background: "rgba(8,8,11,0.85)",
                    backdropFilter: "blur(8px)",
                    border: `1px solid ${accent.border}`,
                    borderRadius: 4,
                    padding: "4px 10px",
                    fontSize: 10,
                    fontWeight: 700,
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: accent.main,
                  }}
                >
                  {project.type}
                </div>
              </div>
              <div style={{ padding: "20px 24px 24px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 10,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 20,
                      fontWeight: 700,
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      color: "#55556a",
                      flexShrink: 0,
                      marginLeft: 12,
                    }}
                  >
                    <Calendar size={12} />
                    <span style={{ fontSize: 12, fontFamily: "var(--font-mono)" }}>
                      {project.year}
                    </span>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: "#6a6a82", lineHeight: 1.7, marginBottom: 16 }}>
                  {project.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: accent.dim,
                        color: accent.main,
                        borderRadius: 4,
                        padding: "3px 8px",
                        fontSize: 11,
                        fontWeight: 600,
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

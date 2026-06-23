import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, ChevronLeft, ChevronRight, Download, X } from "lucide-react";
import { getProjectImage } from "../lib/projectAssets";
import { getAccent } from "../lib/theme";
import { ProjectLink } from "./ProjectLink";
import type { LocaleContent, PortfolioMode, Project, ProjectLink as ProjectLinkData } from "../types";

function getProjectLinks(project: Project): ProjectLinkData[] {
  if (project.links?.length) return project.links;
  if (project.link) return [project.link];
  return [];
}

interface ProjectsProps {
  mode: PortfolioMode;
  content: LocaleContent["projects"];
}

export function Projects({ mode, content }: ProjectsProps) {
  const accent = getAccent(mode);
  const items = mode === "game" ? content.game : content.voice;
  const sectionLabel = mode === "game" ? "Games & Tools" : "Voice Work";
  const tagBg = mode === "game" ? "rgba(229,53,53,0.1)" : "rgba(37,99,235,0.1)";
  const tagBorder = mode === "game" ? "rgba(229,53,53,0.3)" : "rgba(37,99,235,0.3)";
  const selectedBg = mode === "game" ? "rgba(229,53,53,0.07)" : "rgba(37,99,235,0.07)";
  const detailGlow = mode === "game" ? "rgba(229,53,53,0.12)" : "rgba(37,99,235,0.12)";

  const scrollRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const scrollStart = useRef(0);
  const didDrag = useRef(false);
  const velocity = useRef(0);
  const lastPointerX = useRef(0);
  const lastPointerTime = useRef(0);
  const inertiaFrame = useRef(0);

  useEffect(() => {
    setSelected(null);
  }, [mode]);

  useEffect(() => {
    return () => cancelAnimationFrame(inertiaFrame.current);
  }, []);

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: direction === "right" ? 360 : -360, behavior: "smooth" });
  };

  const stopInertia = () => {
    cancelAnimationFrame(inertiaFrame.current);
    velocity.current = 0;
  };

  const startInertia = () => {
    stopInertia();
    const step = () => {
      const el = scrollRef.current;
      if (!el || Math.abs(velocity.current) < 0.15) {
        stopInertia();
        return;
      }
      el.scrollLeft -= velocity.current;
      velocity.current *= 0.92;
      inertiaFrame.current = requestAnimationFrame(step);
    };
    if (Math.abs(velocity.current) > 0.15) {
      inertiaFrame.current = requestAnimationFrame(step);
    }
  };

  const isInteractiveTarget = (target: EventTarget | null) =>
    target instanceof Element && !!target.closest("a, button");

  const onPointerDown = (e: React.PointerEvent) => {
    if (isInteractiveTarget(e.target)) return;
    stopInertia();
    isDragging.current = true;
    didDrag.current = false;
    dragStartX.current = e.clientX;
    scrollStart.current = scrollRef.current?.scrollLeft ?? 0;
    lastPointerX.current = e.clientX;
    lastPointerTime.current = performance.now();
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const now = performance.now();
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 6) {
      didDrag.current = true;
      if (!scrollRef.current.hasPointerCapture(e.pointerId)) {
        scrollRef.current.setPointerCapture(e.pointerId);
        scrollRef.current.style.cursor = "grabbing";
      }
    }
    if (!didDrag.current) return;
    scrollRef.current.scrollLeft = scrollStart.current - delta;

    const dt = now - lastPointerTime.current;
    if (dt > 0) {
      velocity.current = ((e.clientX - lastPointerX.current) / dt) * 14;
    }
    lastPointerX.current = e.clientX;
    lastPointerTime.current = now;
  };

  const endDrag = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const totalMove = Math.abs(e.clientX - dragStartX.current);
    if (totalMove < 8) didDrag.current = false;
    isDragging.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
      if (scrollRef.current.hasPointerCapture(e.pointerId)) {
        scrollRef.current.releasePointerCapture(e.pointerId);
      }
    }
    startInertia();
  };

  const toggleSelect = (index: number) => {
    if (didDrag.current) {
      didDrag.current = false;
      return;
    }
    setSelected((prev) => (prev === index ? null : index));
  };

  const active = selected !== null ? items[selected] : null;
  const activeImage = selected !== null ? getProjectImage(active!.title, mode, selected) : null;

  return (
    <section
      id="projects"
      style={{
        padding: "100px 0 80px",
        background: "linear-gradient(180deg, #08080b 0%, #0a0a10 50%, #08080b 100%)",
      }}
    >
      <div style={{ padding: "0 24px", maxWidth: 1200, margin: "0 auto 40px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
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
            <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
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
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "#44445a",
                }}
              >
                {content.period}
              </span>
            </div>
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            {(["left", "right"] as const).map((dir) => (
              <button
                key={dir}
                type="button"
                onClick={() => scroll(dir)}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "#0f0f14",
                  color: "#6a6a82",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = tagBorder;
                  e.currentTarget.style.color = accent.main;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "#6a6a82";
                }}
                aria-label={dir === "left" ? "Scroll left" : "Scroll right"}
              >
                {dir === "left" ? <ChevronLeft size={17} /> : <ChevronRight size={17} />}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 8,
            width: "min(120px, 12vw)",
            background: "linear-gradient(to right, #08080b 0%, transparent 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 8,
            width: "min(120px, 12vw)",
            background: "linear-gradient(to left, #08080b 0%, transparent 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <div
          ref={scrollRef}
          className="projects-carousel"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
          style={{
            display: "flex",
            gap: 18,
            overflowX: "auto",
            paddingLeft: "max(24px, calc((100vw - 1200px) / 2 + 24px))",
            paddingRight: "max(24px, calc((100vw - 1200px) / 2 + 24px))",
            paddingBottom: 8,
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
            cursor: "grab",
            userSelect: "none",
            touchAction: "pan-x",
          }}
        >
        {items.map((project, index) => {
          const isSelected = selected === index;
          const links = getProjectLinks(project);
          const imageSrc = getProjectImage(project.title, mode, index);
          return (
            <motion.article
              key={`${project.title}-${mode}`}
              onClick={() => toggleSelect(index)}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              style={{
                flex: "0 0 300px",
                background: isSelected ? selectedBg : "#0f0f14",
                border: `1px solid ${isSelected ? tagBorder : "rgba(255,255,255,0.06)"}`,
                borderRadius: 14,
                overflow: "hidden",
                cursor: "pointer",
                transition: "border-color 0.3s, background 0.3s, transform 0.22s, box-shadow 0.3s",
                boxShadow: isSelected
                  ? `0 0 32px ${mode === "game" ? "rgba(229,53,53,0.2)" : "rgba(37,99,235,0.2)"}`
                  : "none",
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = tagBorder;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.transform = "translateY(0)";
                }
              }}
            >
              <div style={{ height: 150, background: "#1a1a22", overflow: "hidden", position: "relative" }}>
                <img
                  src={imageSrc}
                  alt={project.title}
                  draggable={false}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: `brightness(${isSelected ? 0.75 : 0.85}) saturate(${isSelected ? 1 : 0.92})`,
                    transition: "filter 0.4s",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    background: "rgba(8,8,11,0.85)",
                    backdropFilter: "blur(6px)",
                    border: `1px solid ${tagBorder}`,
                    borderRadius: 4,
                    padding: "3px 8px",
                    fontSize: 9,
                    fontWeight: 700,
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: accent.main,
                  }}
                >
                  {project.type}
                </div>
                {project.downloads && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: 10,
                      right: 10,
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      background: "rgba(8,8,11,0.9)",
                      backdropFilter: "blur(8px)",
                      border: `1px solid ${tagBorder}`,
                      borderRadius: 6,
                      padding: "4px 9px",
                      fontSize: 10,
                      fontWeight: 700,
                      fontFamily: "var(--font-mono)",
                      color: "#f0f0f8",
                      boxShadow: `0 4px 16px ${mode === "game" ? "rgba(229,53,53,0.25)" : "rgba(37,99,235,0.25)"}`,
                    }}
                  >
                    <Download size={11} color={accent.main} />
                    <span style={{ color: accent.main }}>{project.downloads}</span>
                    <span style={{ color: "#8888a0", fontWeight: 600 }}>{content.downloadsLabel}</span>
                  </div>
                )}
                {isSelected && (
                  <div
                    style={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: accent.main,
                      boxShadow: `0 0 8px ${accent.main}`,
                    }}
                  />
                )}
              </div>

              <div style={{ padding: "16px 18px 18px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 8,
                    marginBottom: 8,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 16,
                      fontWeight: 700,
                      lineHeight: 1.25,
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    {project.title}
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "flex-end" }}>
                    {links.map((link) => (
                      <ProjectLink key={link.url} link={link} accent={accent.main} />
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    marginBottom: 10,
                    color: "#44445a",
                  }}
                >
                  {project.year && (
                    <>
                      <Calendar size={10} />
                      <span style={{ fontSize: 11, fontFamily: "var(--font-mono)" }}>{project.year}</span>
                    </>
                  )}
                </div>

                <p style={{ fontSize: 12, color: "#565670", lineHeight: 1.6, marginBottom: 12 }}>
                  {project.desc}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: tagBg,
                        color: accent.main,
                        borderRadius: 4,
                        padding: "2px 6px",
                        fontSize: 9,
                        fontWeight: 700,
                        fontFamily: "var(--font-mono)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
        <div style={{ flex: "0 0 1px" }} />
        </div>
      </div>

      <AnimatePresence>
        {active && selected !== null && activeImage && (
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 32, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: 24, height: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                margin: "24px max(24px, calc((100vw - 1200px) / 2 + 24px)) 0",
                background: "#0d0d12",
                border: `1px solid ${tagBorder}`,
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: `0 0 60px ${detailGlow}`,
              }}
            >
              <div
                className="detail-grid"
                style={{ display: "grid", gridTemplateColumns: "340px 1fr", minHeight: 380 }}
              >
                <div style={{ position: "relative", background: "#1a1a22", overflow: "hidden" }}>
                  <img
                    src={activeImage}
                    alt={active.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "brightness(0.5) saturate(0.7)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(135deg, ${mode === "game" ? "rgba(229,53,53,0.25)" : "rgba(37,99,235,0.25)"} 0%, transparent 60%)`,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 80,
                      background: "linear-gradient(to top, #0d0d12, transparent)",
                    }}
                  />
                </div>

                <div style={{ padding: "32px 36px", position: "relative" }}>
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    style={{
                      position: "absolute",
                      top: 20,
                      right: 20,
                      width: 32,
                      height: 32,
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 8,
                      color: "#8888a0",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    aria-label="Close details"
                  >
                    <X size={14} />
                  </button>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      marginBottom: 6,
                      paddingRight: 40,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 26,
                        fontWeight: 800,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.15,
                        margin: 0,
                      }}
                    >
                      {active.title}
                    </h3>
                    {getProjectLinks(active).length > 0 && (
                      <div style={{ paddingTop: 4, display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {getProjectLinks(active).map((link) => (
                          <ProjectLink key={link.url} link={link} accent={accent.main} />
                        ))}
                      </div>
                    )}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: accent.main,
                        background: tagBg,
                        border: `1px solid ${tagBorder}`,
                        borderRadius: 4,
                        padding: "3px 8px",
                      }}
                    >
                      {active.type}
                    </span>
                    {active.year && (
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#44445a" }}>
                        {active.year}
                      </span>
                    )}
                    {active.downloads && (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 5,
                          fontFamily: "var(--font-mono)",
                          fontSize: 10,
                          fontWeight: 700,
                          color: accent.main,
                          background: tagBg,
                          border: `1px solid ${tagBorder}`,
                          borderRadius: 4,
                          padding: "3px 8px",
                        }}
                      >
                        <Download size={10} />
                        {active.downloads} {content.downloadsLabel}
                      </span>
                    )}
                  </div>

                  <p style={{ fontSize: 14, color: "#6a6a82", lineHeight: 1.7, marginBottom: 20 }}>
                    {active.desc}
                  </p>

                  <div style={{ marginBottom: 20 }}>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: accent.main,
                        marginBottom: 12,
                      }}
                    >
                      {content.whatIDid}
                    </div>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      {active.details.map((detail, i) => (
                        <motion.li
                          key={detail}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.05 }}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 10,
                            fontSize: 13,
                            color: "#a0a0b8",
                            lineHeight: 1.5,
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
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {active.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: tagBg,
                          color: accent.main,
                          borderRadius: 4,
                          padding: "3px 8px",
                          fontSize: 10,
                          fontWeight: 700,
                          fontFamily: "var(--font-mono)",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

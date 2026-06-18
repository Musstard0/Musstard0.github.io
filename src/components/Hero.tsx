import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, Gamepad2, MicVocal } from "lucide-react";
import { heroBackgrounds } from "../lib/images";
import { getAccent, scrollToSection } from "../lib/theme";
import type { HeroContent, PortfolioMode } from "../types";

interface HeroProps {
  mode: PortfolioMode;
  content: HeroContent;
  onModeSwitch: () => void;
}

export function Hero({ mode, content, onModeSwitch }: HeroProps) {
  const accent = getAccent(mode);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let animId = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      if (mode === "game") {
        ctx.strokeStyle = "rgba(229,53,53,0.07)";
        ctx.lineWidth = 1;
        const step = 60;
        for (let x = 0; x < w; x += step) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
          ctx.stroke();
        }
        for (let y = 0; y < h; y += step) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
          ctx.stroke();
        }
        ctx.fillStyle = "rgba(229,53,53,0.25)";
        for (let x = 0; x < w; x += step) {
          for (let y = 0; y < h; y += step) {
            const alpha = Math.sin(frame * 0.03 + x * 0.02 + y * 0.02) * 0.5 + 0.5;
            ctx.globalAlpha = alpha * 0.4;
            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        ctx.globalAlpha = 1;
      } else {
        const barW = w / 80;
        for (let i = 0; i < 80; i++) {
          const amp =
            Math.sin(frame * 0.04 + i * 0.3) * 0.5 +
            Math.sin(frame * 0.07 + i * 0.5) * 0.3 +
            0.2;
          const barH = amp * h * 0.35;
          const opacity = 0.05 + amp * 0.15;
          ctx.fillStyle = `rgba(37,99,235,${opacity})`;
          ctx.fillRect(i * barW, h / 2 - barH / 2, barW - 2, barH);
        }
      }

      frame++;
      animId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [mode]);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#08080b",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${mode}-bg`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${heroBackgrounds[mode]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.08) saturate(0.4)",
          }}
        />
      </AnimatePresence>

      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1 }}
      />

      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: accent.glow,
          filter: "blur(120px)",
          opacity: 0.4,
          transition: "background 0.8s",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "120px 24px 80px",
          width: "100%",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${mode}-content`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: accent.dim,
                border: `1px solid ${accent.border}`,
                borderRadius: 999,
                padding: "6px 16px",
                marginBottom: 32,
              }}
            >
              {mode === "game" ? (
                <Gamepad2 size={14} color={accent.main} />
              ) : (
                <MicVocal size={14} color={accent.main} />
              )}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: accent.main,
                }}
              >
                {content.role}
              </span>
            </div>

            <p style={{ fontSize: 18, color: "#8888a0", marginBottom: 8 }}>{content.greeting}</p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(52px, 8vw, 96px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1,
                margin: "0 0 8px",
              }}
            >
              {content.name}
            </h1>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 4.5vw, 52px)",
                fontWeight: 700,
                color: accent.main,
                textShadow: `0 0 40px ${accent.glow}`,
                marginBottom: 28,
              }}
            >
              {content.role}
            </div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(16px, 2vw, 22px)",
                color: "#c0c0d0",
                maxWidth: 580,
                fontStyle: "italic",
                marginBottom: 12,
              }}
            >
              &ldquo;{content.tagline}&rdquo;
            </p>
            <p style={{ fontSize: 16, color: "#777790", maxWidth: 520, lineHeight: 1.7, marginBottom: 48 }}>
              {content.sub}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection("#projects")}
                style={{
                  background: accent.main,
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "14px 32px",
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.05em",
                  cursor: "pointer",
                  boxShadow: `0 0 32px ${accent.glow}`,
                }}
              >
                {content.cta}
              </motion.button>
              <button
                type="button"
                onClick={onModeSwitch}
                style={{
                  background: "transparent",
                  color: "#8888a0",
                  border: "none",
                  fontSize: 14,
                  cursor: "pointer",
                  textDecoration: "underline",
                  textUnderlineOffset: 4,
                  padding: 0,
                }}
              >
                {content.ctaSub}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => scrollToSection("#about")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          aria-label="Scroll to about"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ArrowDown size={18} color="#8888a0" />
          </motion.div>
        </motion.button>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 200,
          background: "linear-gradient(to bottom, transparent, #08080b)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
    </section>
  );
}

import { useState, type CSSProperties, type FormEvent, type FocusEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Send } from "lucide-react";
import { site } from "../config/site";
import { getAccent } from "../lib/theme";
import type { LocaleContent, PortfolioMode } from "../types";

interface ContactProps {
  mode: PortfolioMode;
  content: LocaleContent["contact"];
}

const inputStyle: CSSProperties = {
  width: "100%",
  background: "#0f0f14",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 8,
  padding: "12px 16px",
  color: "#f0f0f5",
  fontSize: 15,
  fontFamily: "var(--font-body)",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
  boxSizing: "border-box",
};

export function Contact({ mode, content }: ContactProps) {
  const accent = getAccent(mode);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const onFocus = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = accent.main;
    e.target.style.boxShadow = `0 0 0 3px ${accent.dim}`;
  };

  const onBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "rgba(255,255,255,0.08)";
    e.target.style.boxShadow = "none";
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    if (site.formEndpoint) {
      try {
        const res = await fetch(site.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(form),
        });
        if (res.ok) setSent(true);
      } catch {
        /* keep form visible on error */
      } finally {
        setSending(false);
      }
      return;
    }

    setTimeout(() => {
      setSent(true);
      setSending(false);
    }, 400);
  };

  return (
    <section
      id="contact"
      style={{
        padding: "100px 24px 120px",
        background: "linear-gradient(180deg, #08080b 0%, #0a0810 100%)",
      }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
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
              Get In Touch
            </span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            {content.heading}
          </h2>
          <p style={{ color: "#6a6a82", fontSize: 15, lineHeight: 1.7, marginBottom: 48 }}>
            {mode === "game" ? content.game : content.voice}
          </p>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                background: accent.dim,
                border: `1px solid ${accent.main}33`,
                borderRadius: 12,
                padding: "32px 24px",
                display: "flex",
                alignItems: "center",
                gap: 16,
                color: accent.main,
              }}
            >
              <CheckCircle size={28} />
              <span style={{ fontSize: 15, fontWeight: 600 }}>{content.success}</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <input
                type="text"
                placeholder={content.namePlaceholder}
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
                onFocus={onFocus}
                onBlur={onBlur}
              />
              <input
                type="email"
                placeholder={content.emailPlaceholder}
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
                onFocus={onFocus}
                onBlur={onBlur}
              />
              <textarea
                placeholder={content.messagePlaceholder}
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                onFocus={onFocus}
                onBlur={onBlur}
              />
              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  background: accent.main,
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "14px 32px",
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.05em",
                  cursor: sending ? "wait" : "pointer",
                  marginTop: 8,
                  boxShadow: `0 0 32px ${accent.shadow}`,
                  opacity: sending ? 0.7 : 1,
                }}
              >
                <Send size={16} />
                {content.send}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

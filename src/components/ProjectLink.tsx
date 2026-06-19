import type { ReactNode } from "react";
import { Github, ExternalLink, Send, Youtube } from "lucide-react";
import type { ProjectLink as ProjectLinkData } from "../types";

const linkLabels: Record<ProjectLinkData["type"], string> = {
  steam: "Steam",
  youtube: "YouTube",
  itch: "itch.io",
  github: "GitHub",
  playmarket: "Play Store",
  appstore: "App Store",
  tiktok: "TikTok",
  web: "Website",
};

function SteamIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.606 0 11.979 0z" />
    </svg>
  );
}

function PlayStoreIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.33 0 2.436-1.102 2.436-2.41 0 1.308 1.07 2.41 2.4 2.41 1.328 0 2.362-1.102 2.362-2.41 0 1.308 1.13 2.41 2.458 2.41h.024c1.328 0 2.458-1.102 2.458-2.41 0 1.308 1.034 2.41 2.362 2.41 1.33 0 2.4-1.102 2.4-2.41 0 1.308 1.106 2.41 2.435 2.41C22.78 8.43 24 7.282 24 5.98V4.95c-.02-.622-2.08-2.99-3.13-3.612C19.948.795 12.116.75 12 .75c-.116 0-7.948.045-8.87.588zM8.5 10.09c-.27 0-.53.025-.78.072l-.495.098C5.754 10.554 4.56 11.8 4.56 13.42v5.214c0 2.157 1.743 3.616 3.866 3.616h7.148c2.123 0 3.866-1.459 3.866-3.616V13.42c0-1.62-1.194-2.866-2.665-3.16l-.495-.098a5.028 5.028 0 0 0-.78-.072H8.5zm1.348 2.57h4.304c.483 0 .872.39.872.872v1.74c0 .483-.39.872-.872.872H9.848a.872.872 0 0 1-.872-.872v-1.74c0-.483.39-.872.872-.872z" />
    </svg>
  );
}

function ItchIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.33 0 2.436-1.102 2.436-2.41 0 1.308 1.07 2.41 2.4 2.41 1.328 0 2.362-1.102 2.362-2.41 0 1.308 1.13 2.41 2.458 2.41 1.33 0 2.4-1.102 2.4-2.41 0 1.308 1.034 2.41 2.362 2.41 1.33 0 2.4-1.102 2.4-2.41 0 1.308 1.106 2.41 2.435 2.41C22.78 8.43 24 7.282 24 5.98V4.95c-.02-.622-2.08-2.99-3.13-3.612C19.948.795 12.116.75 12 .75c-.116 0-7.948.045-8.87.588z" />
    </svg>
  );
}

interface ProjectLinkProps {
  link: ProjectLinkData;
  accent: string;
}

export function ProjectLink({ link, accent }: ProjectLinkProps) {
  const icons: Record<ProjectLinkData["type"], ReactNode> = {
    steam: <SteamIcon size={14} />,
    youtube: <Youtube size={14} />,
    itch: <ItchIcon size={14} />,
    github: <Github size={14} />,
    playmarket: <PlayStoreIcon size={14} />,
    appstore: <ExternalLink size={14} />,
    tiktok: <ExternalLink size={14} />,
    web: <ExternalLink size={14} />,
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      title={linkLabels[link.type]}
      onPointerDown={(e) => e.stopPropagation()}
      onPointerUp={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 6,
        padding: "4px 9px",
        color: "#9090aa",
        textDecoration: "none",
        fontSize: 11,
        fontFamily: "var(--font-mono)",
        fontWeight: 600,
        letterSpacing: "0.04em",
        flexShrink: 0,
        transition: "color 0.2s, border-color 0.2s, background 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = accent;
        e.currentTarget.style.borderColor = `${accent}66`;
        e.currentTarget.style.background = "rgba(255,255,255,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#9090aa";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
        e.currentTarget.style.background = "rgba(255,255,255,0.06)";
      }}
    >
      {icons[link.type]}
      {linkLabels[link.type]}
      <Send size={9} style={{ opacity: 0.5, transform: "rotate(-45deg)" }} />
    </a>
  );
}

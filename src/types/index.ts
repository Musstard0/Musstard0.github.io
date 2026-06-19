import type { langLabels } from "../config/site";

export type PortfolioMode = "game" | "voice";
export type Language = keyof typeof langLabels;

export type ProjectLinkType =
  | "steam"
  | "youtube"
  | "itch"
  | "github"
  | "playmarket"
  | "appstore"
  | "tiktok"
  | "web";

export interface ProjectLink {
  type: ProjectLinkType;
  url: string;
}

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  year?: string;
  downloads?: string;
  type: string;
  link?: ProjectLink;
  links?: ProjectLink[];
  details: string[];
}

export interface SkillsColumn {
  strengths: string[];
  stack: string[];
}

export interface HeroContent {
  greeting: string;
  name: string;
  role: string;
  tagline: string;
  sub: string;
  cta: string;
  ctaSub: string;
}

export interface AboutModeContent {
  p1: string;
  p2: string;
  p3: string;
  tag1: string;
  tag2: string;
  tag3: string;
  tag4: string;
}

export interface LocaleContent {
  nav: {
    about: string;
    projects: string;
    skills: string;
    contact: string;
  };
  modeSwitcher: {
    game: string;
    voice: string;
  };
  hero: Record<PortfolioMode, HeroContent>;
  about: {
    heading: string;
    game: AboutModeContent;
    voice: AboutModeContent;
  };
  projects: {
    heading: string;
    whatIDid: string;
    downloadsLabel: string;
    game: Project[];
    voice: Project[];
  };
  skills: {
    heading: string;
    strengthsLabel: string;
    stackLabel: string;
    game: SkillsColumn;
    voice: SkillsColumn;
  };
  contact: {
    heading: string;
    game: string;
    voice: string;
    emailLabel: string;
    telegramLabel: string;
    email: string;
    telegram: string;
  };
  footer: {
    rights: string;
    madeWith: string;
  };
}

export type I18nContent = Record<Language, LocaleContent>;

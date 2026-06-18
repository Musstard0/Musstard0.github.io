import type { langLabels } from "../config/site";

export type PortfolioMode = "game" | "voice";
export type Language = keyof typeof langLabels;

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  year: string;
  type: string;
  url?: string;
}

export interface Skill {
  name: string;
  level: number;
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
    switchToVoice: string;
    switchToGame: string;
  };
  hero: Record<PortfolioMode, HeroContent>;
  about: {
    heading: string;
    game: AboutModeContent;
    voice: AboutModeContent;
  };
  projects: {
    heading: string;
    game: Project[];
    voice: Project[];
  };
  skills: {
    heading: string;
    game: Skill[];
    voice: Skill[];
  };
  contact: {
    heading: string;
    game: string;
    voice: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    send: string;
    success: string;
  };
  footer: {
    rights: string;
    madeWith: string;
  };
}

export type I18nContent = Record<Language, LocaleContent>;

import type { PortfolioMode } from "../types";
import { projectImages } from "./images";

import mechanicImg from "../content/Mechanic.jpg";
import turnipImg from "../content/Turnip boy.jpg";
import hometopiaImg from "../content/Hometopia.jpg";
import kazAutoImg from "../content/Kaz Auto Sim.jpg";
import offroadImg from "../content/Offroad.jpg";
import pouchPopperImg from "../content/Pouch popper.png";
import geotaktikaImg from "../content/Geotaktika.jpg";
import guitarImg from "../content/The nandi method.png";
import quokkaImg from "../content/Quokka.jpg";

const gameProjectImages: Record<string, string> = {
  "Mechanic: Car Tuning Simulator": mechanicImg,
  "Turnip Boy Commits Tax Evasion": turnipImg,
  Hometopia: hometopiaImg,
  "KAZ Auto Sim": kazAutoImg,
  "Offroad Snow: Driving Runner": offroadImg,
  "Pouch Popper": pouchPopperImg,
  Geotaktika: geotaktikaImg,
  "Guitar Intervals Unleashed": guitarImg,
  "Quokka Puzzles": quokkaImg,
};

export function getProjectImage(title: string, mode: PortfolioMode, index: number): string {
  if (mode === "game") {
    const local = gameProjectImages[title];
    if (local) return local;
  }
  const pool = projectImages[mode];
  return pool[index % pool.length];
}

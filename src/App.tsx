import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { usePortfolioPrefs } from "./hooks/usePortfolioPrefs";
import i18n from "./content/i18n.json";
import type { I18nContent } from "./types";

const content = i18n as I18nContent;

export default function App() {
  const { mode, lang, setMode, setLang, toggleMode } = usePortfolioPrefs();
  const t = content[lang];

  return (
    <div
      data-mode={mode}
      style={{
        minHeight: "100vh",
        background: "#08080b",
        color: "#f0f0f5",
        fontFamily: "var(--font-body)",
        overflowX: "hidden",
      }}
    >
      <Header
        mode={mode}
        lang={lang}
        labels={t.nav}
        modeSwitcher={t.modeSwitcher}
        onModeChange={setMode}
        onLangChange={setLang}
      />
      <main style={{ paddingTop: 104 }}>
        <Hero mode={mode} content={t.hero[mode]} onModeSwitch={toggleMode} />
        <About mode={mode} content={t.about} />
        <Projects mode={mode} content={t.projects} />
        <Skills mode={mode} content={t.skills} />
        <Contact mode={mode} content={t.contact} />
      </main>
      <Footer mode={mode} content={t.footer} />
    </div>
  );
}

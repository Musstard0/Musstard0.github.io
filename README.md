# Denis Rusin — Portfolio

Dual-mode portfolio site for **game development** (red theme) and **voice acting** (blue theme), with EN / ES / FR / JA language support.

Live site: [https://musstard0.github.io/](https://musstard0.github.io/)

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Push this repo to GitHub (`Musstard0/Musstard0.github.io`).
2. In the repo **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

The Vite `base` is `/` for a user site at the domain root.

## Customize content

| File | What to edit |
|------|----------------|
| `src/content/i18n.json` | All text, projects, skills (4 languages) |
| `src/config/site.ts` | Name, initials, social links, Formspree endpoint |
| `src/lib/images.ts` | Hero, about, and project image URLs |

### Contact form

Set `formEndpoint` in `src/config/site.ts` to a [Formspree](https://formspree.io/) URL for real email delivery. Until then, the form shows a success message locally (demo behavior).

## Project structure

```
src/
  components/   Header, Hero, About, Projects, Skills, Contact, Footer
  content/      i18n.json
  config/       site.ts
  hooks/        usePortfolioPrefs.ts (mode + language in localStorage)
  lib/          theme, images
  styles/       CSS tokens + global styles
```

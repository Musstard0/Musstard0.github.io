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

1. Push to `main` — the workflow builds the site and publishes `dist/` to the **`gh-pages`** branch.
2. In the repo go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Set **Branch** to **`gh-pages`** and folder **`/ (root)`**, then save.

The live site must serve the built `index.html` (with `/assets/...js`), not the source `index.html` (with `/src/main.tsx`). If mobile or desktop shows a white page, Pages is likely pointed at `main` instead of `gh-pages`.

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

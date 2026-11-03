# Darwin Castaño — Portfolio

Personal portfolio with a comic / multiverse aesthetic: halftone, glitch titles, procedurally generated spider webs and a graffiti spray-can name tag.

**Stack:** Astro · Tailwind CSS 4 · GSAP (ScrollTrigger)
**Languages:** Spanish (`/`) and English (`/en/`)

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Structure

- `src/data/profile.ts`: all content (ES + EN): profile, experience, projects (problem → solution), skills
- `src/components/`: one component per section, plus `SpiderWeb.astro` (seeded, asymmetric web generator)
- `src/scripts/animations.ts`: GSAP animations (respects `prefers-reduced-motion`)
- `src/styles/global.css`: palette, fonts and comic utilities

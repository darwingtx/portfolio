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

## Visual system

- **Spider webs:** three seeded section webs (`Projects`, `Skills`, `Soft skills`) plus one large
  tensioned web in the hero. Stroke weight scales with the rendered size, the center carries a
  heavier accumulation of silk, and every web is woven spokes-first, rings-second.
- **Onomatopoeias:** each project card pops its own `sfx` once on scroll-in (`THWIP!`, `PING!`,
  `ZAP!`, `BLIP!`, `SWISH!`, `CLICK!`), in the project accent color. Halftone screens are rotated
  37° per card and the card text settles from a 2 px chromatic offset.
- **Fonts:** only two Google Fonts — **Bangers** (display, labels and the handwritten name) and
  **Comic Neue** (body). They load non-blocking via `media="print"` + `onload`, with a `<noscript>`
  fallback. Reveals use `steps(12)` for an "animated on twos" feel.

## Docker

```bash
docker build -t portfolio .
docker run --rm -p 8080:80 portfolio   # http://localhost:8080
```

Multi-stage image: Node builds the static site, nginx serves `dist/` (no Node at runtime).

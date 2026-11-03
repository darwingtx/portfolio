import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// El dominio canónico se inyecta en build time (canonical, hreflang, og:url).
// GitHub Pages no define SITE_URL y cae al default; el homelab lo pasa como build arg.
const site = process.env.SITE_URL || 'https://darwingtx.github.io';

export default defineConfig({
  site,
  i18n: { locales: ['es', 'en'], defaultLocale: 'es' }, // español en /, inglés en /en/
  // Dominio fijo de ngrok: Vite bloquea los Host desconocidos en dev y preview.
  server: { allowedHosts: ['patient-kit-safely.ngrok-free.app'] },
  vite: { plugins: [tailwindcss()] },
});

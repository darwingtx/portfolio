import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Dominio canónico (canonical, hreflang, og:url, sitemap). SITE_URL lo puede sobrescribir en build.
const site = process.env.SITE_URL || 'https://chewi.dev';

export default defineConfig({
  site,
  // CSS pequeño (~6 KB gzip): incrustado en el HTML para no bloquear el primer pintado.
  build: { inlineStylesheets: 'always' },
  i18n: { locales: ['es', 'en'], defaultLocale: 'es' }, // español en /, inglés en /en/
  // Dominio fijo de ngrok: Vite bloquea los Host desconocidos en dev y preview.
  server: { allowedHosts: ['patient-kit-safely.ngrok-free.app'] },
  vite: { plugins: [tailwindcss()] },
});

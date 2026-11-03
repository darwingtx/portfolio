import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://darwingtx.github.io',
  i18n: { locales: ['es', 'en'], defaultLocale: 'es' }, // español en /, inglés en /en/
  vite: { plugins: [tailwindcss()] },
});

import type { APIRoute } from 'astro';

// robots.txt generado en build: el dominio del sitemap sigue a SITE_URL.
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site)}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });

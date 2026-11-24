import type { APIRoute } from 'astro';

// Solo hay dos páginas (ES y EN): un sitemap a mano evita añadir una dependencia.
export const GET: APIRoute = ({ site }) => {
  const es = new URL('/', site).href;
  const en = new URL('/en/', site).href;
  const alternates = `<xhtml:link rel="alternate" hreflang="es" href="${es}"/><xhtml:link rel="alternate" hreflang="en" href="${en}"/><xhtml:link rel="alternate" hreflang="x-default" href="${es}"/>`;
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url><loc>${es}</loc>${alternates}</url>
  <url><loc>${en}</loc>${alternates}</url>
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

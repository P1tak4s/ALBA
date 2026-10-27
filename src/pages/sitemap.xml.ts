// Sitemap at the long-standing /sitemap.xml path, with hreflang alternates for every page.
import type { APIRoute } from 'astro';
import { absolute, files, href, locales, type PageKey } from '../i18n';
import { areas, areaHref } from '../i18n/areas';

const hreflang = { en: 'en-GB', lt: 'lt-LT', ru: 'ru' } as const;
const priority: Record<PageKey, string> = { home: '1.0', liveIn: '0.9', endOfLife: '0.8', hypno: '0.8', about: '0.8', contact: '0.7', consent: '0.3' };

export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = (Object.keys(files) as PageKey[]).flatMap((page) =>
    locales.map((l) => {
      const alts = locales.map((a) => `    <xhtml:link rel="alternate" hreflang="${hreflang[a]}" href="${absolute(href(a, page))}"/>`).join('\n');
      return `  <url>\n    <loc>${absolute(href(l, page))}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority[page]}</priority>\n${alts}\n    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute(href('en', page))}"/>\n  </url>`;
    }),
  );
  // English-only pages (England areas, cost guide): no language alternates.
  const englishOnly = ['/live-in-care-cost.html', ...areas.map((a) => areaHref(a.slug))].map(
    (path) => `  <url>\n    <loc>${absolute(path)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>0.8</priority>\n  </url>`,
  );
  urls.push(...englishOnly);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

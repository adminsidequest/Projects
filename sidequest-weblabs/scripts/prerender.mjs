// Post-build step: from dist/index.html, emit one prerendered HTML file per
// route (home + each case study, per locale) with route-correct head meta,
// Open Graph tags, hreflang, and structured data. This gives crawlers and
// social scrapers (which do not run JS) the right metadata per URL; the React
// app still hydrates the body client-side.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import en from '../src/data/content.en.js';
import es from '../src/data/content.es.js';

const root = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(root, '..', 'dist');
const SITE = 'https://sidequest-weblabs.vercel.app';

const attr = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const jsonLd = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');

function homeStructuredData(locale, t) {
  const url = `${SITE}/${locale}`;
  const lang = locale === 'es' ? 'es' : 'en';
  const currency = locale === 'es' ? 'GTQ' : 'USD';
  const service = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Sidequest Weblabs',
    description: t.meta.description,
    url,
    image: `${SITE}/og-${locale}.jpg`,
    email: t.contactInfo.email,
    areaServed: ['US', 'GT'],
    availableLanguage: ['en', 'es'],
    inLanguage: lang,
    priceRange: '$$',
    serviceType: t.services.items.map((item) => item.name),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: t.packages.eyebrow,
      itemListElement: t.packages.items.map((plan) => ({
        '@type': 'Offer',
        name: plan.name,
        description: plan.blurb,
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: plan.price,
          priceCurrency: currency,
        },
      })),
    },
  };
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: lang,
    mainEntity: t.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
  return [service, faq];
}

function caseStudyStructuredData(locale, slug, cs) {
  const url = `${SITE}/${locale}/work/${slug}`;
  const lang = locale === 'es' ? 'es' : 'en';
  const creative = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: cs.name,
    headline: cs.meta.title,
    description: cs.meta.description,
    url,
    image: `${SITE}${cs.image}`,
    inLanguage: lang,
    about: cs.summary,
    creator: { '@type': 'Organization', name: 'Sidequest Weblabs', url: `${SITE}/${locale}` },
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Sidequest Weblabs', item: `${SITE}/${locale}` },
      { '@type': 'ListItem', position: 2, name: cs.name, item: url },
    ],
  };
  return [creative, breadcrumb];
}

// Build the list of pages to prerender across both locales.
function buildPages() {
  const pages = [];
  for (const [locale, t] of [
    ['en', en],
    ['es', es],
  ]) {
    pages.push({
      locale,
      dir: locale,
      url: `${SITE}/${locale}`,
      htmlLang: t.meta.htmlLang,
      title: t.meta.title,
      description: t.meta.description,
      image: `${SITE}/og-${locale}.jpg`,
      imageW: '1200',
      imageH: '630',
      alt: { en: `${SITE}/en`, es: `${SITE}/es` },
      jsonLd: homeStructuredData(locale, t),
    });
    for (const [slug, cs] of Object.entries(t.caseStudies || {})) {
      pages.push({
        locale,
        dir: `${locale}/work/${slug}`,
        url: `${SITE}/${locale}/work/${slug}`,
        htmlLang: t.meta.htmlLang,
        title: cs.meta.title,
        description: cs.meta.description,
        image: `${SITE}${cs.image}`,
        imageW: '1280',
        imageH: '800',
        alt: { en: `${SITE}/en/work/${slug}`, es: `${SITE}/es/work/${slug}` },
        jsonLd: caseStudyStructuredData(locale, slug, cs),
      });
    }
  }
  return pages;
}

function localize(base, page) {
  const ogLocale = page.locale === 'es' ? 'es_GT' : 'en_US';
  const altLocale = page.locale === 'es' ? 'en_US' : 'es_GT';
  const title = attr(page.title);
  const description = attr(page.description);

  const subs = [
    [/<html lang="[^"]*">/, `<html lang="${page.htmlLang}">`],
    [/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`],
    [/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${description}" />`],
    [/<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/, `<link rel="canonical" href="${page.url}" />`],
    [/<link\s+rel="alternate"\s+hreflang="en"\s+href="[^"]*"\s*\/>/, `<link rel="alternate" hreflang="en" href="${page.alt.en}" />`],
    [/<link\s+rel="alternate"\s+hreflang="es-GT"\s+href="[^"]*"\s*\/>/, `<link rel="alternate" hreflang="es-GT" href="${page.alt.es}" />`],
    [/<link\s+rel="alternate"\s+hreflang="x-default"\s+href="[^"]*"\s*\/>/, `<link rel="alternate" hreflang="x-default" href="${page.alt.en}" />`],
    [/<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/, `<meta property="og:title" content="${title}" />`],
    [/<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/, `<meta property="og:description" content="${description}" />`],
    [/<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/, `<meta property="og:url" content="${page.url}" />`],
    [/<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/, `<meta property="og:image" content="${page.image}" />`],
    [/<meta\s+property="og:image:width"\s+content="[^"]*"\s*\/>/, `<meta property="og:image:width" content="${page.imageW}" />`],
    [/<meta\s+property="og:image:height"\s+content="[^"]*"\s*\/>/, `<meta property="og:image:height" content="${page.imageH}" />`],
    [/<meta\s+property="og:locale"\s+content="[^"]*"\s*\/>/, `<meta property="og:locale" content="${ogLocale}" />`],
    [/<meta\s+property="og:locale:alternate"\s+content="[^"]*"\s*\/>/, `<meta property="og:locale:alternate" content="${altLocale}" />`],
    [/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${title}" />`],
    [/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${description}" />`],
    [/<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:image" content="${page.image}" />`],
  ];

  let html = base;
  for (const [regex, replacement] of subs) {
    if (!regex.test(html)) {
      console.warn(`prerender(${page.dir}): no match for ${regex}`);
    }
    html = html.replace(regex, () => replacement);
  }

  const ld = page.jsonLd
    .map((obj) => `<script type="application/ld+json">${jsonLd(obj)}</script>`)
    .join('\n    ');
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, () => ld);

  return html;
}

const base = readFileSync(resolve(distDir, 'index.html'), 'utf8');
const pages = buildPages();
for (const page of pages) {
  mkdirSync(resolve(distDir, page.dir), { recursive: true });
  writeFileSync(resolve(distDir, page.dir, 'index.html'), localize(base, page));
}
console.log(`prerender: wrote ${pages.length} pages -> ${pages.map((p) => p.dir).join(', ')}`);

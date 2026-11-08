import { site } from '../../app/utils/site'

// Pages publiques du site. Ajouter ici toute nouvelle page à faire indexer.
const pages = ['/', '/menuiserie/', '/services/', '/qui-sommes-nous/', '/votre-projet/']

export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  const lastmod = new Date().toISOString().slice(0, 10)
  const urls = pages
    .map(p => `  <url>\n    <loc>${site.url}${p}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`)
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
})

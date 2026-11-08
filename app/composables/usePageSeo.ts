import { site } from '~/utils/site'

/**
 * Balises SEO d'une page : title, description, URL canonique, Open Graph et Twitter.
 * Les URL canoniques finissent par « / » : c'est la forme servie par OVH
 * (nuxt generate produit /menuiserie/index.html et Apache redirige /menuiserie -> /menuiserie/).
 */
export function usePageSeo(opts: { title: string, description: string, image?: string }) {
  const route = useRoute()
  const path = route.path.endsWith('/') ? route.path : `${route.path}/`
  const url = `${site.url}${path}`
  const image = `${site.url}${opts.image ?? site.ogImage}`

  useHead({
    link: [{ rel: 'canonical', href: url }],
  })

  useSeoMeta({
    title: opts.title,
    description: opts.description,
    ogTitle: opts.title,
    ogDescription: opts.description,
    ogUrl: url,
    ogImage: image,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: site.name,
    twitterTitle: opts.title,
    twitterDescription: opts.description,
    twitterImage: image,
  })
}

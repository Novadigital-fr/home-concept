import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/icon',
  ],

  runtimeConfig: {
    public: {
      web3formsAccessKey: process.env.NUXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '',
    },
  },

  css: ['~/assets/css/main.css'],

  // <behold-widget> est un web component (flux Instagram Behold), pas un composant Vue.
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag === 'behold-widget',
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: {
    families: [
      {
        name: 'Glacial Indifference',
        weights: [400, 700],
        styles: ['normal'],
      },
      {
        name: 'Poppins',
        provider: 'google',
        weights: [400, 500, 600, 700, 800, 900],
        styles: ['normal', 'italic'],
      },
    ],
  },

  // Liens internes avec slash final (/menuiserie/) : c'est l'URL réellement servie par OVH,
  // ça évite une redirection 301 à chaque lien suivi par Google.
  experimental: {
    defaults: {
      nuxtLink: { trailingSlash: 'append' },
    },
  },

  // sitemap.xml est une route serveur (server/routes/sitemap.xml.ts) figée en fichier au generate.
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#000000' },
        { property: 'og:site_name', content: 'Home Concept' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
  },
})

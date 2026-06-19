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

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/img/logo.png' },
      ],
    },
  },
})

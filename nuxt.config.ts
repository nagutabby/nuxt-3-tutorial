// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    '/posts/**': { ssr: false },
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ["/assets/css/style.css"],
  app: {
    pageTransition: false,
    head: {
      title: "Nuxt 3 basic",
      meta: [{ name: "description", content: "Nuxt 3 for beginners" }],
      link: [{ rel: "icon", href: "/icon.png" }]
    },
  },
});

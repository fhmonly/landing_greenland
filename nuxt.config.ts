// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['swiper-container', 'swiper-slide'].includes(tag),
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nuxt-aos', '@nuxtjs/tailwindcss', '@nuxt/icon'],
})
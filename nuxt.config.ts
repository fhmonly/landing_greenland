// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['swiper-container', 'swiper-slide'].includes(tag),
    },
  },
  runtimeConfig: {
    public: {
      apiEndpoint: process.env.API_ENDPOINT,
      dirUrl: process.env.DIR_URL,
      apiUrl: process.env.API_URL,
    }
  },
  dayjs: {
    locales: ["id", "en"],
    defaultLocale: "id"
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nuxt-aos', '@nuxtjs/tailwindcss', '@nuxt/icon', 'dayjs-nuxt', '@nuxt/image'],
  image: {
    domains: [
      'dev-markdesign.my.id'
    ],
    quality: 75,
    alias: {
      greenland: 'https://dev-markdesign.my.id/greenland/admin'
    }
  }
})
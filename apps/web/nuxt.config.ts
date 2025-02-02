// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  devtools: { enabled: true },
  compatibilityDate: '2025-02-02',

  modules: ['@pinia/nuxt', '@nuxt/ui', '@vueuse/nuxt'],

  runtimeConfig: {
    public: {
      apiBaseUrl: 'http://localhost:5013',
    },
  },
});

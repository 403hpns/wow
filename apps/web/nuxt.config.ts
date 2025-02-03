// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  compatibilityDate: "2025-02-02",
  devtools: { enabled: true },

  modules: ["@pinia/nuxt", "@nuxt/ui", "@vueuse/nuxt", "@nuxtjs/i18n"],

  runtimeConfig: {
    public: {
      apiBaseUrl: "http://localhost:5013",
    },
  },

  i18n: {
    strategy: "prefix",
    locales: ["en", "pl"],
    defaultLocale: "en",
    vueI18n: "./i18n.config.ts",
  },
});

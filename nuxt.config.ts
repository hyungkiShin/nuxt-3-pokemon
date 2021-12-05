import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    buildModules: ['@unocss/nuxt', '@vueuse/core/nuxt'],
    unocss: {
      preflight: true,
      icons: true,
    },
  })

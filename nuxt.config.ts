import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@unocss/nuxt', '@vueuse/core/nuxt'],
  unocss: {
    preflight: true,
    icons: true,
  },
});
export default {
  css: ['@/assets/css/reset.css', '@/assets/css/style.css'],
}
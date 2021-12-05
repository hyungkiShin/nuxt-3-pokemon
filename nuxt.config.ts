import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@unocss/nuxt', '@vueuse/core/nuxt'],
  css: ['@/assets/css/reset.css', '@/assets/css/style.css'],
  alias: {
    // '~~': '/project/.nuxt',
    // '@@': '/project/.nuxt',
    // '~': '/project/.nuxt',
    // '@': '/project/.nuxt',
    assets: '/project/assets',
    public: '/project',
  },
})

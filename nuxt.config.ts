// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    'nuxt-icons'
  ],
  app: {
    baseURL: '/test_progress/'
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/global.scss" as *;'
        }
      }
    }
  },
  pinia: {
    autoImports: [
      'defineStore',
      "storeToRefs",
      ['defineStore', 'definePiniaStore'],
    ],
  },
  imports: {
    dirs: ["stores", "utils/**/*"],
  },
  css: ['~/assets/styles/main.scss'],
  runtimeConfig: {
    public: {
      API_URL: process.env.NUXT_PUBLIC_API_BASE_URL || 'https://jsonplaceholder.typicode.com',
    },
  },
  devtools: { enabled: false }
})

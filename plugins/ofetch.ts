import { ofetch } from 'ofetch'
export default defineNuxtPlugin((_nuxtApp) => {
  const config = useRuntimeConfig()
  globalThis.$fetch = ofetch.create({
    baseURL: config.public.API_URL,
    onRequest({ _request, options }) {
    },
    onRequestError({ error }) {
      console.error(error)
    }
  })
})
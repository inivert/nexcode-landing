import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    // Dynamically import motion-v to prevent SSR issues
    import('motion-v').then(({ motionV }) => {
      // Register motion-v with Vue
      nuxtApp.vueApp.use(motionV)
    }).catch(error => {
      console.error('Failed to load motion-v:', error)
    })
  }
}) 
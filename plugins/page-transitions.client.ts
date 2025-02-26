import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  // Add page transition functionality
  nuxtApp.vueApp.directive('page-transition', {
    mounted(el, binding) {
      // Apply initial state
      el.classList.add('page-transition')
      el.style.opacity = '0'
      el.style.transform = 'translateY(10px)'
      el.style.transition = 'opacity 0.4s ease, transform 0.4s ease'
      
      // Transition in after a slight delay
      setTimeout(() => {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 50)
    }
  })

  // In Nuxt 3, you can define default transitions this way
  nuxtApp.hook('app:mounted', () => {
    // Configure default page transition
    const pageTransition = {
      name: 'page',
      mode: 'out-in'
    }
    
    // Apply to Nuxt instance
    if (nuxtApp.$router && nuxtApp.$router.options) {
      nuxtApp.$router.options.scrollBehavior = (to, from, savedPosition) => {
        // Scroll to top of the page on each navigation
        if (savedPosition) {
          return savedPosition
        }
        return { top: 0, behavior: 'smooth' }
      }
    }
  })
}) 
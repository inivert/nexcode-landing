import { defineNuxtPlugin } from '#app'
import { useTheme } from '@/composables/useTheme'

export default defineNuxtPlugin((nuxtApp) => {
  // On initial load, determine the theme based on stored preference or system preference
  const initializeTheme = () => {
    // Check stored preference first
    const storedMode = localStorage.getItem('color-mode')
    const { setTheme } = useTheme()
    
    if (storedMode === 'dark') {
      // User explicitly chose dark mode
      setTheme(true)
    } else if (storedMode === 'light') {
      // User explicitly chose light mode
      setTheme(false)
    } else {
      // No stored preference, check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark)
    }
  }
  
  // Initialize theme
  initializeTheme()
  
  // Provide a composable to toggle dark mode
  nuxtApp.provide('toggleDarkMode', () => {
    const { isDark, toggleTheme } = useTheme()
    toggleTheme()
    return !isDark.value
  })
}) 
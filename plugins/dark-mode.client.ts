import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  // Check user preference or stored preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const storedMode = localStorage.getItem('color-mode')
  
  // Set initial dark mode
  if (storedMode === 'dark' || (storedMode === null && prefersDark)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  // Provide a composable to toggle dark mode
  nuxtApp.provide('toggleDarkMode', () => {
    const isDark = document.documentElement.classList.contains('dark')
    
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-mode', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-mode', 'dark')
    }
    
    return !isDark
  })
}) 
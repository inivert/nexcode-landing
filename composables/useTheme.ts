import { ref, onMounted, watch } from 'vue'
import { useColorMode } from '@vueuse/core'

/**
 * Global theme composable for consistent theme handling across the application
 * 
 * @returns {Object} Theme utilities and state
 */
export function useTheme() {
  // Use VueUse's useColorMode for consistent theme management
  const colorMode = useColorMode()
  const isDark = ref(false)
  
  /**
   * Set the theme based on a dark mode value
   * 
   * @param {boolean} dark - Whether to set dark mode
   */
  const setTheme = (dark: boolean) => {
    // Update DOM
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    // Update state
    isDark.value = dark
    colorMode.value = dark ? 'dark' : 'light'
    
    // Update localStorage
    localStorage.setItem('color-mode', dark ? 'dark' : 'light')
  }
  
  /**
   * Toggle between light and dark themes
   */
  const toggleTheme = () => {
    setTheme(!isDark.value)
  }
  
  /**
   * Initialize theme based on stored preferences or system preference
   */
  const initializeTheme = () => {
    // Check if dark mode is active in DOM
    const hasDarkClass = document.documentElement.classList.contains('dark')
    
    // Sync our state with the DOM state
    isDark.value = hasDarkClass
    
    // Ensure colorMode is in sync
    if (colorMode.value !== (hasDarkClass ? 'dark' : 'light')) {
      colorMode.value = hasDarkClass ? 'dark' : 'light'
    }
  }
  
  // Watch for theme changes from other components
  watch(() => colorMode.value, (newValue) => {
    const newIsDark = newValue === 'dark'
    
    // Only update if the value actually changed
    if (newIsDark !== isDark.value) {
      setTheme(newIsDark)
    }
  })
  
  // Initialize theme on mount
  onMounted(() => {
    initializeTheme()
  })
  
  return {
    isDark,
    colorMode,
    setTheme,
    toggleTheme,
    initializeTheme
  }
} 
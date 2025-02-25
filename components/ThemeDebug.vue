<template>
  <div class="fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-800">
    <h3 class="text-lg font-bold mb-2 text-black dark:text-white">Theme Debug</h3>
    <div class="space-y-2 text-sm">
      <div>
        <span class="text-gray-700 dark:text-gray-300">colorMode.value:</span>
        <span class="ml-2 font-mono">{{ colorMode }}</span>
      </div>
      <div>
        <span class="text-gray-700 dark:text-gray-300">isDark ref:</span>
        <span class="ml-2 font-mono">{{ isDark }}</span>
      </div>
      <div>
        <span class="text-gray-700 dark:text-gray-300">Has dark class:</span>
        <span class="ml-2 font-mono">{{ hasDarkClass }}</span>
      </div>
      <div>
        <span class="text-gray-700 dark:text-gray-300">localStorage:</span>
        <span class="ml-2 font-mono">{{ storedMode }}</span>
      </div>
      <button 
        @click="toggleTheme" 
        class="mt-2 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded"
      >
        Toggle Theme
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useTheme } from '@/composables/useTheme'

// Use our global theme composable
const { isDark, toggleTheme, colorMode } = useTheme()
const hasDarkClass = ref(false)
const storedMode = ref('')

// Function to update debug values
function updateDebugValues() {
  hasDarkClass.value = document.documentElement.classList.contains('dark')
  storedMode.value = localStorage.getItem('color-mode') || 'not set'
}

// Initialize theme debug values on mount
onMounted(() => {
  // Check if dark mode is active in DOM
  updateDebugValues()
})
</script> 
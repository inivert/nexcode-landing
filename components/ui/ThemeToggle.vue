<template>
  <Button
    variant="ghost"
    size="icon"
    @click="toggleTheme"
    class="rounded-full"
    :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <SunIcon v-if="!isDark" class="h-5 w-5" />
    <MoonIcon v-else class="h-5 w-5" />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { MoonIcon, SunIcon } from 'lucide-vue-next'
import { Button } from './button'

const isDark = ref(false)

// Function to toggle theme
const toggleTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('color-mode', 'light')
  } else {
    document.documentElement.classList.add('dark')
    localStorage.setItem('color-mode', 'dark')
  }
  isDark.value = !isDark.value
}

// Initialize theme on mount
onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})
</script> 
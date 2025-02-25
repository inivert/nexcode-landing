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
import { MoonIcon, SunIcon } from 'lucide-vue-next'
import { Button } from './button'
import { useTheme } from '@/composables/useTheme'

// Use our global theme composable
const { isDark, toggleTheme } = useTheme()
</script> 
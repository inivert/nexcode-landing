<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { useTheme } from '@/composables/useTheme'

// Use our global theme composable
const { isDark } = useTheme()

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-xl border shadow',
        isDark 
          ? 'bg-black text-white border-gray-800 hover:border-purple-900/50' 
          : 'bg-card text-card-foreground hover:border-purple-100',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>

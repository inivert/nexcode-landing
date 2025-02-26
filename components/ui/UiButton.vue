<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="[
      'inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
      variantClasses,
      sizeClasses,
      $attrs.class
    ]"
  >
    <span class="relative z-10 flex items-center gap-2 group">
      <slot />
    </span>
  </NuxtLink>
  <button
    v-else
    :class="[
      'inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
      variantClasses,
      sizeClasses,
      $attrs.class
    ]"
    :disabled="disabled"
    :type="type"
  >
    <span class="relative z-10 flex items-center gap-2 group">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  to?: string
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  type: 'button',
  variant: 'default',
  size: 'default',
  to: undefined
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'default':
      return 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md hover:-translate-y-0.5'
    case 'secondary':
      return 'bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-sm hover:shadow-md hover:-translate-y-0.5'
    case 'outline':
      return 'border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5'
    case 'ghost':
      return 'hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5'
    case 'link':
      return 'text-primary underline-offset-4 hover:underline'
    default:
      return 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md hover:-translate-y-0.5'
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'default':
      return 'h-10 py-2 px-4'
    case 'sm':
      return 'h-9 px-3 rounded-md'
    case 'lg':
      return 'h-11 px-8 rounded-md'
    case 'icon':
      return 'h-10 w-10'
    default:
      return 'h-10 py-2 px-4'
  }
})
</script>

<style scoped>
button, a {
  backface-visibility: hidden;
  transform: translateZ(0);
}
</style> 
<template>
  <ClientOnly>
    <FadeIn 
      :duration="duration"
      :delay="delay"
      :threshold="threshold"
    >
      <slot />
    </FadeIn>
    <template #fallback>
      <div class="opacity-0">
        <slot />
      </div>
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
import FadeIn from './FadeIn.client.vue'

defineProps({
  duration: {
    type: Number,
    default: 0.6
  },
  delay: {
    type: Number,
    default: 0
  },
  threshold: {
    type: Number,
    default: 0.1
  }
})
</script> 
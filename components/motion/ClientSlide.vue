<template>
  <ClientOnly>
    <SlideIn 
      :duration="duration"
      :delay="delay"
      :direction="direction"
      :distance="distance"
      :threshold="threshold"
    >
      <slot />
    </SlideIn>
    <template #fallback>
      <div class="opacity-0">
        <slot />
      </div>
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
import SlideIn from './SlideIn.client.vue'

defineProps({
  duration: {
    type: Number,
    default: 0.7
  },
  delay: {
    type: Number,
    default: 0
  },
  direction: {
    type: String,
    default: 'left',
    validator: (value: string) => ['left', 'right', 'top', 'bottom'].includes(value)
  },
  distance: {
    type: Number,
    default: 50
  },
  threshold: {
    type: Number,
    default: 0.1
  }
})
</script> 
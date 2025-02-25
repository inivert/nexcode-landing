<template>
  <ClientOnly>
    <SimpleAnimation :duration="duration">
      <slot />
    </SimpleAnimation>
    <template #fallback>
      <div>
        <slot />
      </div>
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
import SimpleAnimation from './SimpleAnimation.client.vue'

defineProps({
  duration: {
    type: Number,
    default: 600
  }
})
</script> 
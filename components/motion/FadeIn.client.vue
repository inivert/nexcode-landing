<template>
  <div ref="target" class="opacity-0">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMotion } from 'motion-v'
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps({
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

const target = ref(null)
const motion = useMotion()

onMounted(() => {
  if (!target.value) return

  // Use intersection observer to trigger animation when element is in view
  useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        motion.animate(target.value, {
          opacity: [0, 1],
          y: [20, 0]
        }, {
          duration: props.duration,
          delay: props.delay,
          easing: 'ease-out'
        })
      }
    },
    { threshold: props.threshold }
  )
})
</script> 
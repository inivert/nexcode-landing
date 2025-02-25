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

const target = ref(null)
const motion = useMotion()

onMounted(() => {
  if (!target.value) return

  const getAnimationProperties = () => {
    switch (props.direction) {
      case 'left':
        return { x: [-props.distance, 0] }
      case 'right':
        return { x: [props.distance, 0] }
      case 'top':
        return { y: [-props.distance, 0] }
      case 'bottom':
        return { y: [props.distance, 0] }
      default:
        return { x: [-props.distance, 0] }
    }
  }

  // Use intersection observer to trigger animation when element is in view
  useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        motion.animate(target.value, {
          opacity: [0, 1],
          ...getAnimationProperties()
        }, {
          duration: props.duration,
          delay: props.delay,
          easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        })
      }
    },
    { threshold: props.threshold }
  )
})
</script> 
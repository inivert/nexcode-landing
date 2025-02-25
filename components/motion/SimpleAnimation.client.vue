<template>
  <Transition 
    name="fade" 
    appear
    :duration="duration"
  >
    <div>
      <slot />
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps({
  duration: {
    type: Number,
    default: 600
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity v-bind('duration + "ms"') ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 
<template>
  <div class="fade-in">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const el = document.querySelector('.fade-in') as HTMLElement
  if (el) {
    setTimeout(() => {
      el.classList.add('visible')
    }, 50)
  }
})
</script>

<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
</style> 
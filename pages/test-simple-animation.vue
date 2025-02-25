<template>
  <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold mb-4">Simple Animation Test</h1>
    <p class="mb-6">This page tests a simplified animation approach.</p>
    
    <div class="bg-card p-4 rounded mb-6">
      <h2 class="text-xl font-bold mb-2">Regular Content</h2>
      <p>This content is rendered normally without animation.</p>
    </div>
    
    <SimpleFade :duration="1000">
      <div class="bg-primary text-white p-4 rounded mb-6">
        <h2 class="text-xl font-bold mb-2">Simplified Animation</h2>
        <p>This content should fade in with Vue's built-in transition.</p>
      </div>
    </SimpleFade>
    
    <div class="mt-6">
      <Button as-child>
        <NuxtLink to="/">Return to Home</NuxtLink>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import SimpleFade from '~/components/motion/SimpleFade.vue'

definePageMeta({
  layout: 'default'
})
</script> 
<template>
  <div class="container mx-auto p-8 space-y-16">
    <h1 class="text-3xl font-bold text-center mb-12">Basic Animation Demo</h1>

    <section class="space-y-8">
      <h2 class="text-2xl font-bold">Simple Fade In Animation</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SimpleFade v-for="i in 3" :key="i" :duration="800 + (i * 200)">
          <div class="p-6 border rounded-lg bg-card">
            <h3 class="text-xl font-semibold mb-2">Card {{ i }}</h3>
            <p class="text-muted-foreground">
              This card fades in with Vue's built-in transition.
            </p>
          </div>
        </SimpleFade>
      </div>
    </section>

    <div class="text-center mt-12">
      <Button as-child>
        <NuxtLink to="/">Return to Homepage</NuxtLink>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import SimpleFade from '~/components/motion/SimpleFade.vue'
import { Button } from '@/components/ui/button'

definePageMeta({
  layout: 'default'
})
</script> 
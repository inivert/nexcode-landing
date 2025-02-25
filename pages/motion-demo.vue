<template>
  <div class="container mx-auto p-8 space-y-20">
    <h1 class="text-3xl font-bold text-center mb-12">Motion-V Demo</h1>

    <section class="space-y-8">
      <h2 class="text-2xl font-bold">Fade In Animation</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ClientFade v-for="i in 3" :key="i" :delay="i * 0.2">
          <div class="p-6 border rounded-lg bg-card">
            <h3 class="text-xl font-semibold mb-2">Card {{ i }}</h3>
            <p class="text-muted-foreground">
              This card fades in with a slight delay compared to the previous one.
            </p>
          </div>
        </ClientFade>
      </div>
    </section>

    <section class="space-y-8">
      <h2 class="text-2xl font-bold">Slide In Animation</h2>
      
      <div class="space-y-6">
        <ClientSlide direction="left" :delay="0.2">
          <div class="p-6 border rounded-lg bg-card">
            <h3 class="text-xl font-semibold mb-2">Slide from Left</h3>
            <p class="text-muted-foreground">
              This element slides in from the left side.
            </p>
          </div>
        </ClientSlide>
        
        <ClientSlide direction="right" :delay="0.4">
          <div class="p-6 border rounded-lg bg-card">
            <h3 class="text-xl font-semibold mb-2">Slide from Right</h3>
            <p class="text-muted-foreground">
              This element slides in from the right side.
            </p>
          </div>
        </ClientSlide>
        
        <ClientSlide direction="top" :delay="0.6">
          <div class="p-6 border rounded-lg bg-card">
            <h3 class="text-xl font-semibold mb-2">Slide from Top</h3>
            <p class="text-muted-foreground">
              This element slides in from the top.
            </p>
          </div>
        </ClientSlide>
        
        <ClientSlide direction="bottom" :delay="0.8">
          <div class="p-6 border rounded-lg bg-card">
            <h3 class="text-xl font-semibold mb-2">Slide from Bottom</h3>
            <p class="text-muted-foreground">
              This element slides in from the bottom.
            </p>
          </div>
        </ClientSlide>
      </div>
    </section>

    <section class="space-y-8">
      <h2 class="text-2xl font-bold">Direct Usage with Directive</h2>
      
      <ClientOnly>
        <div class="p-6 border rounded-lg bg-card" v-motion="{ 
          initial: { opacity: 0, scale: 0.8 },
          visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.8 }
          }
        }">
          <h3 class="text-xl font-semibold mb-2">Using v-motion Directive</h3>
          <p class="text-muted-foreground">
            This element uses the v-motion directive directly for animations.
          </p>
        </div>
        <template #fallback>
          <div class="p-6 border rounded-lg bg-card opacity-0">
            <h3 class="text-xl font-semibold mb-2">Using v-motion Directive</h3>
            <p class="text-muted-foreground">
              This element uses the v-motion directive directly for animations.
            </p>
          </div>
        </template>
      </ClientOnly>
    </section>

    <div class="text-center mt-12">
      <Button as-child>
        <NuxtLink to="/">Return to Homepage</NuxtLink>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import ClientFade from '~/components/motion/ClientFade.vue'
import ClientSlide from '~/components/motion/ClientSlide.vue'
import { Button } from '@/components/ui/button'

definePageMeta({
  layout: 'default'
})
</script> 
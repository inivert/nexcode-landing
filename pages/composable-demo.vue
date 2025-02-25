<template>
  <div class="container mx-auto p-8 space-y-20">
    <h1 class="text-3xl font-bold text-center mb-12">Motion Composable Demo</h1>

    <section class="space-y-8">
      <h2 class="text-2xl font-bold">Using the Composable API</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div ref="fadeTarget" class="p-6 border rounded-lg bg-card opacity-0">
          <h3 class="text-xl font-semibold mb-2">Fade In with Composable</h3>
          <p class="text-muted-foreground">
            This card uses the createFadeIn composable.
          </p>
        </div>
        
        <div ref="slideTarget" class="p-6 border rounded-lg bg-card opacity-0">
          <h3 class="text-xl font-semibold mb-2">Slide In with Composable</h3>
          <p class="text-muted-foreground">
            This card uses the createSlideIn composable.
          </p>
        </div>
      </div>
    </section>

    <section class="space-y-8">
      <h2 class="text-2xl font-bold">Interactive Animations</h2>
      
      <div class="flex flex-col items-center space-y-6">
        <div ref="interactiveTarget" class="p-6 border rounded-lg bg-card w-full max-w-md">
          <h3 class="text-xl font-semibold mb-2">Interactive Animation</h3>
          <p class="text-muted-foreground mb-4">
            Click the buttons below to trigger different animations.
          </p>
          
          <div class="flex flex-wrap gap-2">
            <Button @click="applyBounce" size="sm">Bounce</Button>
            <Button @click="applyPulse" size="sm" variant="outline">Pulse</Button>
            <Button @click="applyShake" size="sm" variant="secondary">Shake</Button>
            <Button @click="applyFlip" size="sm" variant="destructive">Flip</Button>
          </div>
        </div>
      </div>
    </section>

    <div class="text-center mt-12">
      <Button as-child>
        <NuxtLink to="/motion-demo">View Component Demo</NuxtLink>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useMotionAnimation } from '~/composables/useMotionAnimation'

definePageMeta({
  layout: 'default'
})

const { createFadeIn, createSlideIn, animate } = useMotionAnimation()

// Create fade-in effect
const fadeTarget = createFadeIn({ 
  duration: 0.8, 
  y: 30
})

// Create slide-in effect
const slideTarget = createSlideIn({ 
  direction: 'right', 
  duration: 0.8,
  delay: 0.2
})

// For interactive animations
const interactiveTarget = ref(null)

// Define interactive animations
const applyBounce = () => {
  animate(interactiveTarget.value, {
    y: [0, -20, 0, -10, 0, -5, 0]
  }, { 
    duration: 0.8
  })
}

const applyPulse = () => {
  animate(interactiveTarget.value, {
    scale: [1, 1.05, 1]
  }, { 
    duration: 0.5
  })
}

const applyShake = () => {
  animate(interactiveTarget.value, {
    x: [0, -10, 10, -10, 10, -5, 5, 0]
  }, { 
    duration: 0.7
  })
}

const applyFlip = () => {
  animate(interactiveTarget.value, {
    rotateY: [0, 180, 0]
  }, { 
    duration: 1.5,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  })
}
</script> 
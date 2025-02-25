<template>
  <div>
    <ClientOnly>
      <Hero />
    </ClientOnly>
    
    <KeyFeatures />
    <BuiltWith />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Hero from '~/components/landing/Hero.vue'
import KeyFeatures from '~/components/landing/KeyFeatures.vue'
import BuiltWith from '~/components/landing/BuiltWith.vue'
import Footer from '~/components/landing/Footer.vue'

definePageMeta({
  layout: 'default'
})
</script> 
<template>
  <section class="py-20 bg-gradient-to-b from-primary/10 to-background">
    <div class="container mx-auto px-4 text-center">
      <ClientFade :duration="0.8">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          Build Better Web Applications
        </h1>
      </ClientFade>
      
      <ClientFade :duration="0.8" :delay="0.2">
        <p class="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          A powerful starter template with Nuxt, Supabase, and Prisma to jumpstart your next web project
        </p>
      </ClientFade>
      
      <ClientFade :duration="0.8" :delay="0.4">
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" as-child>
            <NuxtLink to="/auth/signup">Get Started</NuxtLink>
          </Button>
          <Button size="lg" variant="outline" as-child>
            <NuxtLink to="https://github.com/your-repo/nexcode-landing" target="_blank">
              GitHub
            </NuxtLink>
          </Button>
        </div>
      </ClientFade>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import ClientFade from '~/components/motion/ClientFade.vue'
</script> 
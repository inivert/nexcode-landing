<template>
  <div>
    <section class="py-20 bg-gradient-to-b from-primary/10 to-background">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          Build Better Web Applications
        </h1>
        
        <p class="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          A powerful starter template with Nuxt, Supabase, and Prisma to jumpstart your next web project
        </p>
        
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
      </div>
    </section>
    
    <section class="py-16 bg-background">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Key Features</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 border rounded-lg bg-card text-card-foreground shadow-sm">
            <div class="mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-10 w-10"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Nuxt 3</h3>
            <p class="text-muted-foreground">
              Built with the latest Nuxt 3 framework, providing server-side rendering, file-based routing, and more.
            </p>
          </div>
          
          <div class="p-6 border rounded-lg bg-card text-card-foreground shadow-sm">
            <div class="mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-10 w-10"><path d="M20 16V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12"></path><path d="M2 20h12"></path><path d="M12 16v4"></path><path d="M22 16a2 2 0 0 1-2 2h-2"></path><path d="M18 12V8"></path><path d="M18 4v4"></path></svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Supabase Auth</h3>
            <p class="text-muted-foreground">
              Ready-to-use authentication with Supabase, including login, signup and user management.
            </p>
          </div>
          
          <div class="p-6 border rounded-lg bg-card text-card-foreground shadow-sm">
            <div class="mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-10 w-10"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Prisma ORM</h3>
            <p class="text-muted-foreground">
              Type-safe database access with Prisma ORM, making database operations simple and secure.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <div class="py-8 bg-muted/30">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-2xl font-bold mb-6">Test Pages</h2>
        <div class="flex flex-wrap gap-3 justify-center">
          <Button as-child variant="outline">
            <NuxtLink to="/test-basic">Basic Test</NuxtLink>
          </Button>
          <Button as-child variant="outline">
            <NuxtLink to="/test-client">Client Test</NuxtLink>
          </Button>
          <Button as-child variant="outline">
            <NuxtLink to="/test-simple-animation">Simple Animation</NuxtLink>
          </Button>
          <Button as-child variant="outline">
            <NuxtLink to="/motion-demo">Motion Demo</NuxtLink>
          </Button>
          <Button as-child variant="outline">
            <NuxtLink to="/motion-basic">Basic Motion</NuxtLink>
          </Button>
          <Button as-child variant="outline">
            <NuxtLink to="/debug">Debug Info</NuxtLink>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'

definePageMeta({
  layout: 'default'
})
</script> 
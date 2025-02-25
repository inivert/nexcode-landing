<template>
  <div class="min-h-screen flex flex-col bg-background text-foreground">
    <Header />
    <main class="flex-1">
      <slot />
    </main>
    <footer class="border-t p-4 text-center text-sm text-muted-foreground">
      <div class="container mx-auto">
        &copy; {{ new Date().getFullYear() }} Nexcode. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/layout/Header.vue'
</script> 
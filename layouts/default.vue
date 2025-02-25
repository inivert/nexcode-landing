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
    
    <!-- Debug component for theme testing -->
    <ClientOnly>
      <ThemeDebug v-if="showDebug" />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Header from '~/components/layout/Header.vue'
import ThemeDebug from '~/components/ThemeDebug.vue'

// Set to true to show the debug panel, false to hide it
const showDebug = ref(true)
</script> 
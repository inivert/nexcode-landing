<template>
  <div class="min-h-screen p-8 bg-white dark:bg-gray-900 text-black dark:text-white">
    <h1 class="text-3xl font-bold mb-6">Debug Page</h1>
    
    <div class="grid gap-6">
      <!-- Layout Test -->
      <div class="p-4 border border-gray-300 dark:border-gray-700 rounded-lg">
        <h2 class="text-xl font-bold mb-2">Layout Test</h2>
        <div class="grid grid-cols-3 gap-2">
          <div class="p-2 bg-red-500 text-white rounded">Red</div>
          <div class="p-2 bg-green-500 text-white rounded">Green</div>
          <div class="p-2 bg-blue-500 text-white rounded">Blue</div>
        </div>
      </div>
      
      <!-- CSS Variables Test -->
      <div class="p-4 border border-gray-300 dark:border-gray-700 rounded-lg">
        <h2 class="text-xl font-bold mb-2">CSS Variables Test</h2>
        <div class="grid gap-2">
          <div class="p-2 bg-primary text-primary-foreground rounded">Primary Color</div>
          <div class="p-2 bg-secondary text-secondary-foreground rounded">Secondary Color</div>
          <div class="p-2 bg-accent text-accent-foreground rounded">Accent Color</div>
          <div class="p-2 bg-muted text-muted-foreground rounded">Muted Color</div>
        </div>
      </div>
      
      <!-- Test Links -->
      <div class="p-4 border border-gray-300 dark:border-gray-700 rounded-lg">
        <h2 class="text-xl font-bold mb-2">Navigation Test</h2>
        <div class="flex flex-wrap gap-2">
          <a href="/" class="p-2 bg-blue-500 text-white rounded">Home (Regular Link)</a>
          <NuxtLink to="/" class="p-2 bg-green-500 text-white rounded">Home (NuxtLink)</NuxtLink>
          <NuxtLink to="/test-basic" class="p-2 bg-purple-500 text-white rounded">Basic Test</NuxtLink>
        </div>
      </div>
    </div>
    
    <!-- Environment Info -->
    <div class="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <h2 class="text-xl font-bold mb-2">Environment Information</h2>
      <pre class="whitespace-pre-wrap break-words">{{ environmentInfo }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
// Log more environmental information to help debug
const environmentInfo = {
  runtimeConfig: useRuntimeConfig(),
  userAgent: process.client ? navigator.userAgent : 'Server Side',
  viewport: process.client ? { 
    width: window.innerWidth, 
    height: window.innerHeight 
  } : 'Server Side',
  darkMode: process.client ? 
    window.matchMedia('(prefers-color-scheme: dark)').matches : 'Server Side',
  cssVarsTest: 'These should show actual colors if CSS variables are working'
}
</script> 
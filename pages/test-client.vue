<template>
  <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold mb-4">Client-Only Test Page</h1>
    <p class="mb-4">This page tests ClientOnly without animation components.</p>
    
    <div class="bg-card p-4 rounded mb-4">
      <h2 class="text-xl font-bold mb-2">Regular Content</h2>
      <p>This content is rendered normally.</p>
    </div>
    
    <ClientOnly>
      <div class="bg-primary text-white p-4 rounded">
        <h2 class="text-xl font-bold mb-2">Client-Only Content</h2>
        <p>This content should only be rendered on the client.</p>
        <p class="mt-2">Current time: {{ new Date().toLocaleTimeString() }}</p>
      </div>
      <template #fallback>
        <div class="bg-secondary p-4 rounded">
          <h2 class="text-xl font-bold mb-2">Fallback Content</h2>
          <p>This is the fallback content for server rendering.</p>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script> 
<template>
  <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold mb-4">Basic Test Page</h1>
    <p class="mb-4">This is a basic test page without any animations to check if the site is working.</p>
    <div class="bg-primary text-white p-4 rounded">
      This is a colored box using the primary color.
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script> 
<template>
  <div class="container mx-auto p-8">
    <h1 class="text-2xl font-bold mb-4">Test Page</h1>
    <p>This is a test page to verify that routing is working properly.</p>
    <div class="mt-4">
      <NuxtLink to="/" class="text-primary hover:underline">Return Home</NuxtLink>
    </div>
    <div class="mt-4">
      <NuxtLink to="/auth/signup" class="text-primary hover:underline">Go to Sign Up</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
// This is a simple test page
</script> 
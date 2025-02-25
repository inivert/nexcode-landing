<template>
  <div class="min-h-screen flex items-center justify-center p-4 bg-background text-foreground">
    <div class="max-w-md w-full text-center">
      <h1 class="text-4xl font-bold mb-4">{{ error?.statusCode || '500' }}</h1>
      <div class="mb-6">
        <h2 class="text-2xl mb-2">{{ error?.statusMessage || 'An error occurred' }}</h2>
        <p>{{ error?.message || 'Something went wrong' }}</p>
      </div>
      
      <div>
        <button
          @click="handleError"
          class="px-6 py-2 bg-primary text-primary-foreground rounded-md"
        >
          Back to Home
        </button>
      </div>
      
      <!-- Debug: Only show in development -->
      <div v-if="process.dev" class="mt-8 p-4 bg-muted rounded-lg text-left">
        <h3 class="text-lg font-semibold mb-2">Error Details:</h3>
        <pre class="whitespace-pre-wrap break-words">{{ JSON.stringify(error, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

function handleError() {
  clearError({ redirect: '/' })
}
</script> 
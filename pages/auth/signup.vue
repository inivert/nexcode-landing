<template>
  <div :class="[
    'flex items-center justify-center min-h-screen p-4',
    isDark ? 'bg-black' : 'bg-muted/30'
  ]">
    <Card :class="[
      'w-full max-w-md',
      isDark ? 'border border-gray-800' : ''
    ]">
      <CardHeader>
        <CardTitle class="text-center bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">Create an Account</CardTitle>
        <CardDescription class="text-center">
          Sign up to get started with Nexcode
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignupForm />
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import SignupForm from '@/components/auth/SignupForm.vue'
import { useTheme } from '@/composables/useTheme'

// Use our global theme composable
const { isDark } = useTheme()

definePageMeta({
  layout: 'default',
  middleware: ['guest']
})
</script>

<style scoped>
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style> 
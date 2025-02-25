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
        <CardTitle class="text-center bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">Login</CardTitle>
        <CardDescription class="text-center">
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import LoginForm from '@/components/auth/LoginForm.vue'
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
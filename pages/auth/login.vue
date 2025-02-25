<template>
  <div class="flex items-center justify-center min-h-screen p-4 bg-muted/30">
    <Card class="w-full max-w-md">
      <CardHeader>
        <CardTitle class="text-center">Login</CardTitle>
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

definePageMeta({
  layout: 'default',
  middleware: ['guest']
})
</script> 
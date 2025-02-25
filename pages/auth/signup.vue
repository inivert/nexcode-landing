<template>
  <div class="flex items-center justify-center min-h-screen p-4 bg-muted/30">
    <Card class="w-full max-w-md">
      <CardHeader>
        <CardTitle class="text-center">Create an Account</CardTitle>
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

definePageMeta({
  layout: 'default',
  middleware: ['guest']
})
</script> 
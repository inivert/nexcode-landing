<template>
  <div>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <FormField v-slot="{ componentField }" name="email">
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input 
            v-model="email"
            type="email" 
            placeholder="Enter your email"
            autocomplete="email"
            :disabled="loading"
            required
          />
        </FormControl>
        <FormMessage v-if="errors.email">{{ errors.email }}</FormMessage>
      </FormField>
      
      <FormField v-slot="{ componentField }" name="password">
        <FormLabel>Password</FormLabel>
        <FormControl>
          <Input 
            v-model="password"
            type="password" 
            placeholder="Enter your password"
            autocomplete="current-password"
            :disabled="loading"
            required
          />
        </FormControl>
        <FormMessage v-if="errors.password">{{ errors.password }}</FormMessage>
      </FormField>
      
      <div>
        <Button type="submit" class="w-full" :disabled="loading">
          <span v-if="loading">Logging in...</span>
          <span v-else>Login</span>
        </Button>
      </div>
      
      <div v-if="authError" class="text-center mt-4 text-destructive text-sm">
        {{ authError }}
      </div>
    </form>
    
    <div class="mt-4 text-center text-sm">
      <p>
        Don't have an account?
        <NuxtLink to="/auth/signup" class="text-primary hover:underline">
          Sign up
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSupabaseClient } from '#imports'
import { FormControl, FormField, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const router = useRouter()
const supabase = useSupabaseClient()

const email = ref('')
const password = ref('')
const loading = ref(false)
const authError = ref('')
const errors = ref({ email: '', password: '' })

const validateForm = () => {
  errors.value = { email: '', password: '' }
  let isValid = true

  if (!email.value) {
    errors.value.email = 'Email is required'
    isValid = false
  } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    errors.value.email = 'Email is invalid'
    isValid = false
  }

  if (!password.value) {
    errors.value.password = 'Password is required'
    isValid = false
  } else if (password.value.length < 6) {
    errors.value.password = 'Password must be at least 6 characters'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) return
  
  loading.value = true
  authError.value = ''
  
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })
    
    if (error) throw error
    
    router.push('/dashboard')
  } catch (error: any) {
    authError.value = error.message || 'Failed to login'
  } finally {
    loading.value = false
  }
}
</script> 
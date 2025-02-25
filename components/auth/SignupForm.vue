<template>
  <div>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <FormField v-slot="{ componentField }" name="name">
        <FormLabel>Name</FormLabel>
        <FormControl>
          <Input 
            v-model="name"
            type="text" 
            placeholder="Enter your name"
            autocomplete="name"
            :disabled="loading"
            required
          />
        </FormControl>
        <FormMessage v-if="errors.name">{{ errors.name }}</FormMessage>
      </FormField>
      
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
            placeholder="Create a password"
            autocomplete="new-password"
            :disabled="loading"
            required
          />
        </FormControl>
        <FormMessage v-if="errors.password">{{ errors.password }}</FormMessage>
        <FormDescription>
          Password must be at least 6 characters long
        </FormDescription>
      </FormField>
      
      <div>
        <Button type="submit" class="w-full" :disabled="loading">
          <span v-if="loading">Signing up...</span>
          <span v-else>Sign Up</span>
        </Button>
      </div>
      
      <div v-if="authError" class="text-center mt-4 text-destructive text-sm">
        {{ authError }}
      </div>
    </form>
    
    <div class="mt-4 text-center text-sm">
      <p>
        Already have an account?
        <NuxtLink to="/auth/login" class="text-primary hover:underline">
          Login
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSupabaseClient } from '#imports'
import { FormControl, FormField, FormLabel, FormMessage, FormDescription } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const router = useRouter()
const supabase = useSupabaseClient()

const name = ref('')
const email = ref('')
const password = ref('')
const loading = ref(false)
const authError = ref('')
const errors = ref({ name: '', email: '', password: '' })

const validateForm = () => {
  errors.value = { name: '', email: '', password: '' }
  let isValid = true

  if (!name.value) {
    errors.value.name = 'Name is required'
    isValid = false
  }

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
    // Sign up the user
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          name: name.value
        }
      }
    })
    
    if (error) throw error
    
    // Create user record in database using our Prisma endpoint
    await $fetch('/api/users', {
      method: 'POST',
      body: {
        id: data.user?.id,
        email: email.value,
        name: name.value
      }
    })
    
    router.push('/dashboard')
  } catch (error: any) {
    authError.value = error.message || 'Failed to sign up'
  } finally {
    loading.value = false
  }
}
</script> 
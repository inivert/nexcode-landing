<template>
  <header class="bg-background border-b p-4">
    <div class="container mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold text-primary">
        Nexcode
      </NuxtLink>

      <nav>
        <ul class="flex space-x-4 items-center">
          <li>
            <NuxtLink to="/" class="hover:text-primary transition-colors">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/motion-demo" class="hover:text-primary transition-colors">
              Animations
            </NuxtLink>
          </li>
          <li v-if="user">
            <NuxtLink to="/dashboard" class="hover:text-primary transition-colors">
              Dashboard
            </NuxtLink>
          </li>
          <li v-if="!user">
            <NuxtLink to="/auth/login" class="hover:text-primary transition-colors">
              Login
            </NuxtLink>
          </li>
          <li v-if="!user">
            <NuxtLink to="/auth/signup" class="hover:text-primary transition-colors">
              Sign Up
            </NuxtLink>
          </li>
          <li v-if="user">
            <Button variant="ghost" @click="logout" size="sm">
              Logout
            </Button>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useSupabaseUser, useSupabaseClient } from '#imports'
import { Button } from '@/components/ui/button'
import ThemeToggle from '@/components/ui/ThemeToggle.vue'

const user = useSupabaseUser()
const supabase = useSupabaseClient()
const router = useRouter()

const logout = async () => {
  await supabase.auth.signOut()
  router.push('/')
}
</script> 
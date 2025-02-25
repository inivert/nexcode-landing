<template>
  <div class="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6">
    <header class="backdrop-blur-md bg-background/60 dark:bg-background/40 rounded-full shadow-lg border border-white/10 dark:border-white/5 px-6 py-2 max-w-5xl w-full mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Nexcode
      </NuxtLink>

      <nav>
        <ul class="flex space-x-4 items-center">
          <li>
            <NuxtLink to="/" class="px-3 py-1.5 rounded-full hover:bg-white/10 dark:hover:bg-white/5 transition-colors">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/motion-demo" class="px-3 py-1.5 rounded-full hover:bg-white/10 dark:hover:bg-white/5 transition-colors">
              Animations
            </NuxtLink>
          </li>
          <li v-if="user">
            <NuxtLink to="/dashboard" class="px-3 py-1.5 rounded-full hover:bg-white/10 dark:hover:bg-white/5 transition-colors">
              Dashboard
            </NuxtLink>
          </li>
          <li v-if="!user">
            <NuxtLink to="/auth/login" class="px-3 py-1.5 rounded-full hover:bg-white/10 dark:hover:bg-white/5 transition-colors">
              Login
            </NuxtLink>
          </li>
          <li v-if="!user">
            <NuxtLink to="/auth/signup" class="px-3 py-1.5 rounded-full hover:bg-white/10 dark:hover:bg-white/5 transition-colors">
              Sign Up
            </NuxtLink>
          </li>
          <li v-if="user">
            <Button variant="ghost" @click="logout" size="sm" class="rounded-full">
              Logout
            </Button>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  </div>
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

<style scoped>
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style> 
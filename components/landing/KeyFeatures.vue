<template>
  <section :class="[
    'py-20 relative overflow-hidden transition-colors duration-300',
    isDark ? 'bg-black' : 'bg-white'
  ]">
    <!-- Background glow effect -->
    <div :class="[
      'absolute -top-40 -left-40 w-80 h-80 rounded-full blur-3xl',
      isDark ? 'bg-purple-500/20' : 'bg-purple-500/10'
    ]"></div>
    <div :class="[
      'absolute -bottom-40 -right-40 w-80 h-80 rounded-full blur-3xl',
      isDark ? 'bg-indigo-500/20' : 'bg-indigo-500/10'
    ]"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent inline-block">Key Features</h2>
        <p :class="[
          'max-w-2xl mx-auto text-lg',
          isDark ? 'text-gray-400' : 'text-gray-600'
        ]">Powerful tools and technologies to build your next project with confidence</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- Nuxt 3 Feature -->
        <div class="group relative">
          <div class="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div :class="[
            'relative p-8 border rounded-xl backdrop-blur-sm transition-all duration-300 h-full flex flex-col',
            isDark 
              ? 'border-gray-800/50 bg-black/80 hover:border-purple-500/50' 
              : 'border-gray-200 bg-white/90 hover:border-purple-500/30'
          ]">
            <div class="mb-6 text-purple-400 flex items-center justify-center w-14 h-14 rounded-lg bg-purple-500/10 border border-purple-500/20">
              <Icon icon="logos:nuxt-icon" class="w-8 h-8" />
            </div>
            <h3 :class="[
              'text-xl font-semibold mb-3',
              isDark ? 'text-white' : 'text-gray-800'
            ]">Nuxt 3</h3>
            <p :class="[
              'mb-6 flex-grow',
              isDark ? 'text-gray-400' : 'text-gray-600'
            ]">
              Built with the latest Nuxt 3 framework, providing server-side rendering, file-based routing, and auto-imports.
            </p>
            <div class="flex items-center text-purple-400 font-medium">
              <span>Learn more</span>
              <Icon icon="ph:arrow-right-bold" class="ml-2 w-4 h-4" />
            </div>
          </div>
        </div>
        
        <!-- Supabase Auth Feature -->
        <div class="group relative">
          <div class="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div :class="[
            'relative p-8 border rounded-xl backdrop-blur-sm transition-all duration-300 h-full flex flex-col',
            isDark 
              ? 'border-gray-800/50 bg-black/80 hover:border-purple-500/50' 
              : 'border-gray-200 bg-white/90 hover:border-purple-500/30'
          ]">
            <div class="mb-6 text-purple-400 flex items-center justify-center w-14 h-14 rounded-lg bg-purple-500/10 border border-purple-500/20">
              <Icon icon="logos:supabase-icon" class="w-8 h-8" />
            </div>
            <h3 :class="[
              'text-xl font-semibold mb-3',
              isDark ? 'text-white' : 'text-gray-800'
            ]">Supabase Auth</h3>
            <p :class="[
              'mb-6 flex-grow',
              isDark ? 'text-gray-400' : 'text-gray-600'
            ]">
              Ready-to-use authentication with Supabase, including social logins, magic links, and user management.
            </p>
            <div class="flex items-center text-purple-400 font-medium">
              <span>Learn more</span>
              <Icon icon="ph:arrow-right-bold" class="ml-2 w-4 h-4" />
            </div>
          </div>
        </div>
        
        <!-- Prisma ORM Feature -->
        <div class="group relative">
          <div class="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div :class="[
            'relative p-8 border rounded-xl backdrop-blur-sm transition-all duration-300 h-full flex flex-col',
            isDark 
              ? 'border-gray-800/50 bg-black/80 hover:border-purple-500/50' 
              : 'border-gray-200 bg-white/90 hover:border-purple-500/30'
          ]">
            <div class="mb-6 text-purple-400 flex items-center justify-center w-14 h-14 rounded-lg bg-purple-500/10 border border-purple-500/20">
              <Icon icon="logos:prisma" class="w-8 h-8" />
            </div>
            <h3 :class="[
              'text-xl font-semibold mb-3',
              isDark ? 'text-white' : 'text-gray-800'
            ]">Prisma ORM</h3>
            <p :class="[
              'mb-6 flex-grow',
              isDark ? 'text-gray-400' : 'text-gray-600'
            ]">
              Type-safe database access with Prisma ORM, making database operations simple, secure, and fully typed.
            </p>
            <div class="flex items-center text-purple-400 font-medium">
              <span>Learn more</span>
              <Icon icon="ph:arrow-right-bold" class="ml-2 w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useTheme } from '@/composables/useTheme';

// Use our global theme composable
const { isDark } = useTheme();
</script>

<style scoped>
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style> 
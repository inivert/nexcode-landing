<template>
  <section :class="[
    'py-24 relative overflow-hidden transition-colors duration-300',
    isDark ? 'bg-black' : 'bg-white'
  ]">
    <!-- Enhanced background glow effects -->
    <div :class="[
      'absolute top-40 right-20 w-96 h-96 rounded-full blur-3xl animate-pulse-slow',
      isDark ? 'bg-purple-500/10' : 'bg-purple-500/5'
    ]"></div>
    <div :class="[
      'absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl animate-pulse-slow animation-delay-2000',
      isDark ? 'bg-indigo-500/10' : 'bg-indigo-500/5'
    ]"></div>
    <div :class="[
      'absolute top-1/3 left-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse-slow animation-delay-1000',
      isDark ? 'bg-indigo-500/5' : 'bg-indigo-500/3'
    ]"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Main heading with animated underline -->
      <div class="text-center mb-20 relative">
        <h2 class="text-5xl font-bold mb-5 bg-gradient-to-r from-purple-300 via-indigo-400 to-purple-300 bg-clip-text text-transparent inline-block">Built With</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-500 mx-auto rounded-full animate-pulse-slow"></div>
        <p :class="[
          'max-w-2xl mx-auto text-lg mt-6',
          isDark ? 'text-gray-400' : 'text-gray-600'
        ]">Modern technologies for building fast, scalable, and beautiful web applications</p>
      </div>
      
      <!-- Core Technologies Section -->
      <div class="mb-32">
        <h3 :class="[
          'text-2xl font-semibold mb-10 text-center relative inline-block left-1/2 transform -translate-x-1/2',
          isDark ? 'text-white' : 'text-gray-800'
        ]">
          <span class="bg-gradient-to-r from-purple-400 to-indigo-500 h-[2px] w-8 absolute -left-12 top-1/2"></span>
          Core Technologies
          <span class="bg-gradient-to-r from-indigo-500 to-purple-400 h-[2px] w-8 absolute -right-12 top-1/2"></span>
        </h3>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div :class="[
            'tech-card group',
            isDark ? 'border-gray-800/50 bg-black/80' : 'border-gray-200 bg-white/90'
          ]">
            <div :class="[
              'tech-icon-wrapper',
              isDark ? 'bg-gradient-to-br from-gray-900 to-black ring-gray-800' : 'bg-gradient-to-br from-gray-100 to-white ring-gray-200'
            ]">
              <Icon icon="logos:nuxt-icon" class="w-12 h-12" />
            </div>
            <h3 :class="[
              'text-lg font-semibold mb-1 transition-colors',
              isDark ? 'text-white group-hover:text-purple-300' : 'text-gray-800 group-hover:text-purple-600'
            ]">Nuxt 3</h3>
            <p :class="isDark ? 'text-gray-400' : 'text-gray-600'" class="text-sm">Vue.js framework</p>
          </div>
          
          <div :class="[
            'tech-card group',
            isDark ? 'border-gray-800/50 bg-black/80' : 'border-gray-200 bg-white/90'
          ]">
            <div :class="[
              'tech-icon-wrapper',
              isDark ? 'bg-gradient-to-br from-gray-900 to-black ring-gray-800' : 'bg-gradient-to-br from-gray-100 to-white ring-gray-200'
            ]">
              <Icon icon="logos:vue" class="w-12 h-12" />
            </div>
            <h3 :class="[
              'text-lg font-semibold mb-1 transition-colors',
              isDark ? 'text-white group-hover:text-purple-300' : 'text-gray-800 group-hover:text-purple-600'
            ]">Vue 3</h3>
            <p :class="isDark ? 'text-gray-400' : 'text-gray-600'" class="text-sm">Progressive JavaScript framework</p>
          </div>
          
          <div :class="[
            'tech-card group',
            isDark ? 'border-gray-800/50 bg-black/80' : 'border-gray-200 bg-white/90'
          ]">
            <div :class="[
              'tech-icon-wrapper',
              isDark ? 'bg-gradient-to-br from-gray-900 to-black ring-gray-800' : 'bg-gradient-to-br from-gray-100 to-white ring-gray-200'
            ]">
              <Icon icon="logos:typescript-icon" class="w-12 h-12" />
            </div>
            <h3 :class="[
              'text-lg font-semibold mb-1 transition-colors',
              isDark ? 'text-white group-hover:text-purple-300' : 'text-gray-800 group-hover:text-purple-600'
            ]">TypeScript</h3>
            <p :class="isDark ? 'text-gray-400' : 'text-gray-600'" class="text-sm">Type-safe JavaScript</p>
          </div>
          
          <div :class="[
            'tech-card group',
            isDark ? 'border-gray-800/50 bg-black/80' : 'border-gray-200 bg-white/90'
          ]">
            <div :class="[
              'tech-icon-wrapper',
              isDark ? 'bg-gradient-to-br from-gray-900 to-black ring-gray-800' : 'bg-gradient-to-br from-gray-100 to-white ring-gray-200'
            ]">
              <Icon icon="logos:tailwindcss-icon" class="w-12 h-12" />
            </div>
            <h3 :class="[
              'text-lg font-semibold mb-1 transition-colors',
              isDark ? 'text-white group-hover:text-purple-300' : 'text-gray-800 group-hover:text-purple-600'
            ]">Tailwind CSS</h3>
            <p :class="isDark ? 'text-gray-400' : 'text-gray-600'" class="text-sm">Utility-first CSS framework</p>
          </div>
          
          <div :class="[
            'tech-card group',
            isDark ? 'border-gray-800/50 bg-black/80' : 'border-gray-200 bg-white/90'
          ]">
            <div :class="[
              'tech-icon-wrapper',
              isDark ? 'bg-gradient-to-br from-gray-900 to-black ring-gray-800' : 'bg-gradient-to-br from-gray-100 to-white ring-gray-200'
            ]">
              <Icon icon="logos:supabase-icon" class="w-12 h-12" />
            </div>
            <h3 :class="[
              'text-lg font-semibold mb-1 transition-colors',
              isDark ? 'text-white group-hover:text-purple-300' : 'text-gray-800 group-hover:text-purple-600'
            ]">Supabase</h3>
            <p :class="isDark ? 'text-gray-400' : 'text-gray-600'" class="text-sm">Open source Firebase alternative</p>
          </div>
          
          <div :class="[
            'tech-card group',
            isDark ? 'border-gray-800/50 bg-black/80' : 'border-gray-200 bg-white/90'
          ]">
            <div :class="[
              'tech-icon-wrapper',
              isDark ? 'bg-gradient-to-br from-gray-900 to-black ring-gray-800' : 'bg-gradient-to-br from-gray-100 to-white ring-gray-200'
            ]">
              <Icon icon="logos:prisma" class="w-12 h-12" />
            </div>
            <h3 :class="[
              'text-lg font-semibold mb-1 transition-colors',
              isDark ? 'text-white group-hover:text-purple-300' : 'text-gray-800 group-hover:text-purple-600'
            ]">Prisma</h3>
            <p :class="isDark ? 'text-gray-400' : 'text-gray-600'" class="text-sm">Next-generation ORM</p>
          </div>
          
          <div :class="[
            'tech-card group',
            isDark ? 'border-gray-800/50 bg-black/80' : 'border-gray-200 bg-white/90'
          ]">
            <div :class="[
              'tech-icon-wrapper',
              isDark ? 'bg-gradient-to-br from-gray-900 to-black ring-gray-800' : 'bg-gradient-to-br from-gray-100 to-white ring-gray-200'
            ]">
              <Icon icon="logos:pnpm" class="w-12 h-12" />
            </div>
            <h3 :class="[
              'text-lg font-semibold mb-1 transition-colors',
              isDark ? 'text-white group-hover:text-purple-300' : 'text-gray-800 group-hover:text-purple-600'
            ]">pnpm</h3>
            <p :class="isDark ? 'text-gray-400' : 'text-gray-600'" class="text-sm">Fast, disk space efficient package manager</p>
          </div>
          
          <div :class="[
            'tech-card group',
            isDark ? 'border-gray-800/50 bg-black/80' : 'border-gray-200 bg-white/90'
          ]">
            <div :class="[
              'tech-icon-wrapper',
              isDark ? 'bg-gradient-to-br from-gray-900 to-black ring-gray-800' : 'bg-gradient-to-br from-gray-100 to-white ring-gray-200'
            ]">
              <Icon icon="ph:code-bold" class="w-12 h-12" />
            </div>
            <h3 :class="[
              'text-lg font-semibold mb-1 transition-colors',
              isDark ? 'text-white group-hover:text-purple-300' : 'text-gray-800 group-hover:text-purple-600'
            ]">shadcn-nuxt</h3>
            <p :class="isDark ? 'text-gray-400' : 'text-gray-600'" class="text-sm">Beautifully designed components</p>
          </div>
        </div>
      </div>
      
      <!-- Supporting Libraries Section -->
      <div>
        <h3 :class="[
          'text-2xl font-semibold mb-10 text-center relative inline-block left-1/2 transform -translate-x-1/2',
          isDark ? 'text-white' : 'text-gray-800'
        ]">
          <span class="bg-gradient-to-r from-purple-400 to-indigo-500 h-[2px] w-8 absolute -left-12 top-1/2"></span>
          Supporting Libraries
          <span class="bg-gradient-to-r from-indigo-500 to-purple-400 h-[2px] w-8 absolute -right-12 top-1/2"></span>
        </h3>
        
        <div class="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          <div :class="[
            'library-pill group',
            isDark ? 'bg-gradient-to-br from-gray-900 to-black/80 border-gray-800/50 text-gray-300' : 'bg-gradient-to-br from-gray-100 to-white border-gray-200 text-gray-600'
          ]">
            <div :class="isDark ? 'text-purple-400' : 'text-purple-500'" class="library-icon-wrapper">
              <Icon icon="logos:iconify" class="w-5 h-5" />
            </div>
            <span>Iconify</span>
          </div>
          
          <div :class="[
            'library-pill group',
            isDark ? 'bg-gradient-to-br from-gray-900 to-black/80 border-gray-800/50 text-gray-300' : 'bg-gradient-to-br from-gray-100 to-white border-gray-200 text-gray-600'
          ]">
            <div :class="isDark ? 'text-purple-400' : 'text-purple-500'" class="library-icon-wrapper">
              <Icon icon="ph:brackets-curly-bold" class="w-5 h-5" />
            </div>
            <span>Zod</span>
          </div>
          
          <div :class="[
            'library-pill group',
            isDark ? 'bg-gradient-to-br from-gray-900 to-black/80 border-gray-800/50 text-gray-300' : 'bg-gradient-to-br from-gray-100 to-white border-gray-200 text-gray-600'
          ]">
            <div :class="isDark ? 'text-purple-400' : 'text-purple-500'" class="library-icon-wrapper">
              <Icon icon="ph:check-circle-bold" class="w-5 h-5" />
            </div>
            <span>VeeValidate</span>
          </div>
          
          <div :class="[
            'library-pill group',
            isDark ? 'bg-gradient-to-br from-gray-900 to-black/80 border-gray-800/50 text-gray-300' : 'bg-gradient-to-br from-gray-100 to-white border-gray-200 text-gray-600'
          ]">
            <div :class="isDark ? 'text-purple-400' : 'text-purple-500'" class="library-icon-wrapper">
              <Icon icon="ph:function-bold" class="w-5 h-5" />
            </div>
            <span>VueUse</span>
          </div>
          
          <div :class="[
            'library-pill group',
            isDark ? 'bg-gradient-to-br from-gray-900 to-black/80 border-gray-800/50 text-gray-300' : 'bg-gradient-to-br from-gray-100 to-white border-gray-200 text-gray-600'
          ]">
            <div :class="isDark ? 'text-purple-400' : 'text-purple-500'" class="library-icon-wrapper">
              <Icon icon="ph:chart-line-up-bold" class="w-5 h-5" />
            </div>
            <span>GSAP</span>
          </div>
          
          <div :class="[
            'library-pill group',
            isDark ? 'bg-gradient-to-br from-gray-900 to-black/80 border-gray-800/50 text-gray-300' : 'bg-gradient-to-br from-gray-100 to-white border-gray-200 text-gray-600'
          ]">
            <div :class="isDark ? 'text-purple-400' : 'text-purple-500'" class="library-icon-wrapper">
              <Icon icon="ph:wave-sine-bold" class="w-5 h-5" />
            </div>
            <span>Motion</span>
          </div>
          
          <div :class="[
            'library-pill group',
            isDark ? 'bg-gradient-to-br from-gray-900 to-black/80 border-gray-800/50 text-gray-300' : 'bg-gradient-to-br from-gray-100 to-white border-gray-200 text-gray-600'
          ]">
            <div :class="isDark ? 'text-purple-400' : 'text-purple-500'" class="library-icon-wrapper">
              <Icon icon="lucide:icons" class="w-5 h-5" />
            </div>
            <span>Lucide Icons</span>
          </div>
          
          <div :class="[
            'library-pill group',
            isDark ? 'bg-gradient-to-br from-gray-900 to-black/80 border-gray-800/50 text-gray-300' : 'bg-gradient-to-br from-gray-100 to-white border-gray-200 text-gray-600'
          ]">
            <div :class="isDark ? 'text-purple-400' : 'text-purple-500'" class="library-icon-wrapper">
              <Icon icon="ph:paint-brush-bold" class="w-5 h-5" />
            </div>
            <span>CVA</span>
          </div>
          
          <div :class="[
            'library-pill group',
            isDark ? 'bg-gradient-to-br from-gray-900 to-black/80 border-gray-800/50 text-gray-300' : 'bg-gradient-to-br from-gray-100 to-white border-gray-200 text-gray-600'
          ]">
            <div :class="isDark ? 'text-purple-400' : 'text-purple-500'" class="library-icon-wrapper">
              <Icon icon="ph:sparkle-bold" class="w-5 h-5" />
            </div>
            <span>Tailwind Animate</span>
          </div>
          
          <div :class="[
            'library-pill group',
            isDark ? 'bg-gradient-to-br from-gray-900 to-black/80 border-gray-800/50 text-gray-300' : 'bg-gradient-to-br from-gray-100 to-white border-gray-200 text-gray-600'
          ]">
            <div :class="isDark ? 'text-purple-400' : 'text-purple-500'" class="library-icon-wrapper">
              <Icon icon="ph:squares-four-bold" class="w-5 h-5" />
            </div>
            <span>Reka UI</span>
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

.tech-card {
  @apply flex flex-col items-center text-center p-6 rounded-xl border backdrop-blur-sm transition-all duration-300;
}

.tech-card:hover {
  @apply transform -translate-y-1 shadow-lg;
}

.tech-icon-wrapper {
  @apply mb-5 p-4 rounded-xl flex items-center justify-center ring-1 transition-all duration-300 shadow-inner;
}

.library-pill {
  @apply flex items-center px-4 py-2.5 rounded-full border backdrop-blur-sm text-sm font-medium transition-all duration-300 hover:shadow-md hover:scale-105;
}

.library-icon-wrapper {
  @apply mr-2;
}

/* Animation utilities */
.animate-pulse-slow {
  animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.2;
  }
}
</style> 
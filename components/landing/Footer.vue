<template>
  <footer :class="[
    'py-16 relative overflow-hidden transition-colors duration-300',
    isDark ? 'bg-black' : 'bg-white'
  ]">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center mb-12">
        <div class="mb-8 md:mb-0">
          <h2 class="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">NexCode</h2>
          <p :class="[
            'mt-2 max-w-md',
            isDark ? 'text-gray-400' : 'text-gray-600'
          ]">Building the future of web development with modern tools and technologies.</p>
        </div>
        
        <div class="flex space-x-6">
          <a href="#" :class="[
            'transition-colors duration-200 hover:text-purple-400',
            isDark ? 'text-gray-400' : 'text-gray-600'
          ]">
            <Icon icon="ph:github-logo-bold" class="w-6 h-6" />
          </a>
          <a href="#" :class="[
            'transition-colors duration-200 hover:text-purple-400',
            isDark ? 'text-gray-400' : 'text-gray-600'
          ]">
            <Icon icon="ph:twitter-logo-bold" class="w-6 h-6" />
          </a>
          <a href="#" :class="[
            'transition-colors duration-200 hover:text-purple-400',
            isDark ? 'text-gray-400' : 'text-gray-600'
          ]">
            <Icon icon="ph:discord-logo-bold" class="w-6 h-6" />
          </a>
          <a href="#" :class="[
            'transition-colors duration-200 hover:text-purple-400',
            isDark ? 'text-gray-400' : 'text-gray-600'
          ]">
            <Icon icon="ph:youtube-logo-bold" class="w-6 h-6" />
          </a>
        </div>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 :class="[
            'text-lg font-semibold mb-4',
            isDark ? 'text-white' : 'text-gray-800'
          ]">Product</h3>
          <ul class="space-y-2">
            <li><a href="#" :class="[
              'transition-colors duration-200 hover:text-purple-400',
              isDark ? 'text-gray-400' : 'text-gray-600'
            ]">Features</a></li>
            <li><a href="#" :class="[
              'transition-colors duration-200 hover:text-purple-400',
              isDark ? 'text-gray-400' : 'text-gray-600'
            ]">Pricing</a></li>
            <li><a href="#" :class="[
              'transition-colors duration-200 hover:text-purple-400',
              isDark ? 'text-gray-400' : 'text-gray-600'
            ]">Documentation</a></li>
            <li><a href="#" :class="[
              'transition-colors duration-200 hover:text-purple-400',
              isDark ? 'text-gray-400' : 'text-gray-600'
            ]">Changelog</a></li>
          </ul>
        </div>
        
        <div>
          <h3 :class="[
            'text-lg font-semibold mb-4',
            isDark ? 'text-white' : 'text-gray-800'
          ]">Resources</h3>
          <ul class="space-y-2">
            <li><a href="#" :class="[
              'transition-colors duration-200 hover:text-purple-400',
              isDark ? 'text-gray-400' : 'text-gray-600'
            ]">Blog</a></li>
            <li><a href="#" :class="[
              'transition-colors duration-200 hover:text-purple-400',
              isDark ? 'text-gray-400' : 'text-gray-600'
            ]">Community</a></li>
            <li><a href="#" :class="[
              'transition-colors duration-200 hover:text-purple-400',
              isDark ? 'text-gray-400' : 'text-gray-600'
            ]">Tutorials</a></li>
            <li><a href="#" :class="[
              'transition-colors duration-200 hover:text-purple-400',
              isDark ? 'text-gray-400' : 'text-gray-600'
            ]">Support</a></li>
          </ul>
        </div>
        
        <div>
          <h3 :class="[
            'text-lg font-semibold mb-4',
            isDark ? 'text-white' : 'text-gray-800'
          ]">Company</h3>
          <ul class="space-y-2">
            <li><a href="#" :class="[
              'transition-colors duration-200 hover:text-purple-400',
              isDark ? 'text-gray-400' : 'text-gray-600'
            ]">About</a></li>
            <li><a href="#" :class="[
              'transition-colors duration-200 hover:text-purple-400',
              isDark ? 'text-gray-400' : 'text-gray-600'
            ]">Careers</a></li>
            <li><a href="#" :class="[
              'transition-colors duration-200 hover:text-purple-400',
              isDark ? 'text-gray-400' : 'text-gray-600'
            ]">Contact</a></li>
            <li><a href="#" :class="[
              'transition-colors duration-200 hover:text-purple-400',
              isDark ? 'text-gray-400' : 'text-gray-600'
            ]">Partners</a></li>
          </ul>
        </div>
        
        <div>
          <h3 :class="[
            'text-lg font-semibold mb-4',
            isDark ? 'text-white' : 'text-gray-800'
          ]">Legal</h3>
          <ul class="space-y-2">
            <li><a href="#" :class="[
              'transition-colors duration-200 hover:text-purple-400',
              isDark ? 'text-gray-400' : 'text-gray-600'
            ]">Privacy</a></li>
            <li><a href="#" :class="[
              'transition-colors duration-200 hover:text-purple-400',
              isDark ? 'text-gray-400' : 'text-gray-600'
            ]">Terms</a></li>
            <li><a href="#" :class="[
              'transition-colors duration-200 hover:text-purple-400',
              isDark ? 'text-gray-400' : 'text-gray-600'
            ]">Security</a></li>
            <li><a href="#" :class="[
              'transition-colors duration-200 hover:text-purple-400',
              isDark ? 'text-gray-400' : 'text-gray-600'
            ]">Cookies</a></li>
          </ul>
        </div>
      </div>
      
      <div :class="[
        'pt-8 border-t text-center',
        isDark ? 'border-gray-800 text-gray-500' : 'border-gray-200 text-gray-600'
      ]">
        <p>&copy; {{ new Date().getFullYear() }} NexCode. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useTheme } from '@/composables/useTheme';

// Use our global theme composable
const { isDark } = useTheme();
</script>

<style scoped>
/* Ensure text gradient works in different browsers */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style> 
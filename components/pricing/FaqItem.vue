<template>
  <div :class="[
    'rounded-lg border overflow-hidden transition-all duration-300 shadow-sm',
    isDark ? 'bg-black border-gray-800 hover:border-gray-700' : 'bg-white border-gray-200 hover:border-gray-300',
    isOpen ? (isDark ? 'shadow-md border-purple-700/30' : 'shadow-md border-purple-300/50') : ''
  ]">
    <button
      @click="$emit('toggle')"
      :class="[
        'w-full flex justify-between items-center p-5 text-left transition-colors duration-200',
        isDark ? 'hover:bg-gray-900/50' : 'hover:bg-gray-50/80',
        isOpen ? (isDark ? 'bg-gray-900/30' : 'bg-purple-50/30') : ''
      ]"
      :aria-expanded="isOpen"
    >
      <span :class="[
        'text-base font-medium',
        isDark ? 'text-white' : 'text-gray-900'
      ]">{{ faq.question }}</span>
      <ChevronDown 
        :class="[
          'h-5 w-5 transition-transform duration-300',
          { 'rotate-180': isOpen },
          isDark ? 'text-purple-400' : 'text-purple-600'
        ]" 
      />
    </button>
    <div 
      v-show="isOpen" 
      class="transition-all duration-300 ease-in-out"
    >
      <div class="p-5 pt-1 text-sm" :class="isDark ? 'text-gray-300' : 'text-gray-600'">
        {{ faq.answer }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'

// Use our global theme composable
const { isDark } = useTheme()

defineProps({
  faq: {
    type: Object,
    required: true
  },
  isOpen: {
    type: Boolean,
    default: false
  }
})

defineEmits(['toggle'])
</script>

<style scoped>
button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.3);
}
</style> 
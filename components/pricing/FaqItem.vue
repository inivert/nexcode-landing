<template>
  <div :class="[
    'rounded-lg border',
    isDark ? 'bg-black border-gray-800' : 'bg-white border-gray-200'
  ]">
    <button
      @click="$emit('toggle')"
      :class="[
        'w-full flex justify-between items-center p-4 text-left transition-colors duration-200',
        isDark ? 'hover:bg-gray-900' : 'hover:bg-gray-50'
      ]"
      :aria-expanded="isOpen"
    >
      <span :class="[
        'text-base font-medium',
        isDark ? 'text-white' : 'text-gray-900'
      ]">{{ faq.question }}</span>
      <ChevronDown 
        :class="[
          'h-5 w-5 transition-transform duration-200',
          { 'rotate-180': isOpen },
          isDark ? 'text-purple-400' : 'text-purple-600'
        ]" 
      />
    </button>
    <div v-show="isOpen" class="p-4 pt-0 text-sm" :class="isDark ? 'text-gray-300' : 'text-gray-600'">
      {{ faq.answer }}
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
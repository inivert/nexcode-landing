<template>
  <div
    :class="[
      'relative rounded-lg shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg',
      isDark ? 'bg-black border border-gray-800' : 'bg-white border border-gray-200',
      { 'border-2 border-purple-500': plan.isFeatured }
    ]"
    @mouseenter="$emit('update:active-card', plan.name)"
    @mouseleave="$emit('update:active-card', undefined)"
  >
    <!-- Featured Badge -->
    <div v-if="plan.isFeatured" class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <span class="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xs font-semibold rounded-full">
        Most Popular
      </span>
    </div>

    <!-- Card Content -->
    <div class="p-6 flex flex-col">
      <div class="flex items-center mb-4">
        <component :is="plan.icon" :class="['h-6 w-6 mr-2', isDark ? 'text-purple-400' : 'text-purple-600']" />
        <h3 :class="[
          'text-xl font-semibold',
          isDark ? 'text-white' : 'text-gray-900'
        ]">{{ plan.title }}</h3>
      </div>
      <p :class="[
        'text-sm mb-4',
        isDark ? 'text-gray-400' : 'text-gray-600'
      ]">{{ plan.description }}</p>
      <div class="flex items-baseline mb-6">
        <span :class="[
          'text-3xl font-bold',
          isDark ? 'text-white' : 'text-gray-900'
        ]">{{ plan.price }}</span>
        <span :class="[
          'text-sm ml-1',
          isDark ? 'text-gray-400' : 'text-gray-600'
        ]">/month</span>
      </div>
      <ul class="space-y-3 text-sm mb-6 flex-grow">
        <li v-for="feature in plan.features" :key="feature" class="flex items-center">
          <CheckCircle :class="['h-5 w-5 mr-2 flex-shrink-0', isDark ? 'text-purple-400' : 'text-purple-600']" />
          <span :class="isDark ? 'text-gray-300' : 'text-gray-700'">{{ feature }}</span>
        </li>
      </ul>
      <UiButton
        :to="plan.buttonLink"
        :class="[
          'w-full font-medium py-2 rounded-md transition-colors duration-200 text-white',
          isDark 
            ? 'bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-500 hover:to-indigo-600' 
            : 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700'
        ]"
      >
        {{ plan.buttonText }}
      </UiButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckCircle } from 'lucide-vue-next'
import UiButton from '@/components/ui/UiButton.vue'
import { useTheme } from '@/composables/useTheme'

// Use our global theme composable
const { isDark } = useTheme()

defineProps({
  plan: {
    type: Object,
    required: true
  },
  activeCard: {
    type: String,
    default: undefined
  }
})

defineEmits(['update:active-card'])
</script> 
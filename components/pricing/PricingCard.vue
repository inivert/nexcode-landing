<template>
  <div
    :class="[
      'relative rounded-xl shadow-md overflow-hidden transition-all duration-300',
      isDark ? 'bg-black border border-gray-800 hover:border-purple-700/50' : 'bg-white border border-gray-200 hover:border-purple-400/50',
      { 
        'border-2 border-purple-500 transform scale-105 shadow-xl': plan.isFeatured,
        'shadow-lg hover:shadow-xl': !plan.isFeatured,
        'shadow-purple-500/20': plan.isFeatured && !isDark,
        'shadow-purple-800/30': plan.isFeatured && isDark,
      }
    ]"
    @mouseenter="$emit('update:active-card', plan.name)"
    @mouseleave="$emit('update:active-card', undefined)"
  >
    <!-- Background Gradient (subtle) -->
    <div class="absolute inset-0 opacity-5 pointer-events-none">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-600/20"></div>
    </div>

    <!-- Featured Badge -->
    <div v-if="plan.isFeatured" class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <span class="inline-block px-4 py-1 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xs font-semibold rounded-full shadow-md">
        Most Popular
      </span>
    </div>

    <!-- Card Content -->
    <div class="p-8 flex flex-col relative z-10">
      <div class="flex items-center mb-4">
        <div :class="[
          'flex items-center justify-center w-10 h-10 rounded-lg mr-3',
          isDark ? 'bg-purple-900/30' : 'bg-purple-100'
        ]">
          <component :is="plan.icon" :class="['h-5 w-5', isDark ? 'text-purple-400' : 'text-purple-600']" />
        </div>
        <h3 :class="[
          'text-xl font-bold',
          isDark ? 'text-white' : 'text-gray-900'
        ]">{{ plan.title }}</h3>
      </div>
      <p :class="[
        'text-sm mb-6',
        isDark ? 'text-gray-400' : 'text-gray-600'
      ]">{{ plan.description }}</p>
      <div class="flex items-baseline mb-6">
        <span :class="[
          'text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent',
        ]">{{ plan.price }}</span>
        <span :class="[
          'text-sm ml-1',
          isDark ? 'text-gray-400' : 'text-gray-600'
        ]">{{ plan.priceLabel || '/month' }}</span>
      </div>
      <ul class="space-y-3 text-sm mb-6 flex-grow">
        <li v-for="(feature, index) in plan.features" :key="feature" class="flex items-center" :style="{ transitionDelay: `${index * 50}ms` }">
          <div class="flex-shrink-0 mr-2">
            <CheckCircle :class="['h-5 w-5 flex-shrink-0', isDark ? 'text-purple-400' : 'text-purple-600']" />
          </div>
          <span :class="isDark ? 'text-gray-300' : 'text-gray-700'">{{ feature }}</span>
        </li>
      </ul>
      <UiButton
        :to="plan.buttonLink"
        :class="[
          'w-full font-medium py-3 rounded-md transition-all duration-300 text-white shadow-md',
          isDark 
            ? 'bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-500 hover:to-indigo-600 hover:shadow-lg hover:shadow-purple-700/20' 
            : 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-purple-600/25'
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

// Define the plan type
interface Plan {
  name: string
  title: string
  description: string
  price: string
  yearlyPrice?: string
  priceLabel?: string
  features: string[]
  icon: any
  buttonText: string
  buttonLink: string
  isFeatured: boolean
}

// Use our global theme composable
const { isDark } = useTheme()

defineProps({
  plan: {
    type: Object as () => Plan,
    required: true
  },
  activeCard: {
    type: String,
    default: undefined
  }
})

defineEmits(['update:active-card'])
</script>

<style scoped>
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

li {
  transition: transform 0.2s ease-out;
}

li:hover {
  transform: translateX(2px);
}
</style> 
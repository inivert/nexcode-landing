<template>
  <div :class="[
    'py-16 sm:py-24 transition-colors duration-300',
    isDark ? 'bg-black' : 'bg-white'
  ]">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h1 :class="[
          'text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent',
        ]">
          Documentation
        </h1>
        <p :class="[
          'mt-4 text-lg',
          isDark ? 'text-gray-400' : 'text-gray-600'
        ]">
          Everything you need to build amazing web experiences with Nexcode
        </p>
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Sidebar Navigation -->
        <div class="md:col-span-1">
          <div :class="[
            'sticky top-24 rounded-lg border p-6',
            isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'
          ]">
            <h3 :class="[
              'text-lg font-medium mb-4',
              isDark ? 'text-white' : 'text-gray-900'
            ]">Documentation</h3>
            
            <nav class="space-y-1">
              <button 
                v-for="(section, index) in sections" 
                :key="index"
                @click="changeSection(index)"
                :class="[
                  'w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                  activeSection === index 
                    ? (isDark ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-700')
                    : (isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100')
                ]"
              >
                {{ section.title }}
              </button>
            </nav>

            <div class="mt-8">
              <UiButton
                to="/auth/signup"
                :class="[
                  'w-full font-medium py-2 rounded-md transition-colors duration-200 text-white',
                  isDark 
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-500 hover:to-indigo-600' 
                    : 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700'
                ]"
              >
                Get Started
              </UiButton>
            </div>
          </div>
        </div>

        <!-- Content Area -->
        <div class="md:col-span-2">
          <div :class="[
            'rounded-lg border p-6 min-h-[600px]',
            isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'
          ]">
            <h2 :class="[
              'text-2xl font-bold mb-6',
              isDark ? 'text-white' : 'text-gray-900'
            ]">
              {{ sections[activeSection].title }}
            </h2>

            <!-- Loading Indicator -->
            <div v-if="isLoading" class="flex flex-col items-center justify-center py-12">
              <div class="relative w-16 h-16">
                <div class="absolute top-0 left-0 w-full h-full rounded-full border-4 border-t-transparent" 
                  :class="isDark ? 'border-purple-700' : 'border-purple-300'"
                  style="animation: spin 1s linear infinite;"></div>
                <div class="absolute top-0 left-0 w-full h-full rounded-full border-4 border-t-transparent border-l-transparent" 
                  :class="isDark ? 'border-indigo-500' : 'border-indigo-400'"
                  style="animation: spin 1.5s linear infinite;"></div>
              </div>
              <p class="mt-4 text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">Loading content...</p>
            </div>

            <!-- Content Sections with Lazy Loading -->
            <Transition
              name="fade"
              mode="out-in"
              @before-enter="beforeEnter"
              @after-leave="afterLeave"
            >
              <!-- Single wrapper element for transition -->
              <div :key="activeSection" v-if="!isLoading">
                <!-- Getting Started Section -->
                <div v-if="activeSection === 0" class="fade-in">
                  <div :class="[isDark ? 'text-gray-300' : 'text-gray-700']">
                    <h3 class="text-xl font-semibold mb-4">Welcome to Nexcode</h3>
                    <p class="mb-4">
                      Nexcode is a powerful UI framework for building beautiful, responsive web applications. 
                      This guide will help you get started with Nexcode and show you how to use its components.
                    </p>

                    <h4 class="text-lg font-semibold mt-6 mb-3">Installation</h4>
                    <div :class="[
                      'rounded-md p-4 mb-4 font-mono text-sm',
                      isDark ? 'bg-gray-800' : 'bg-gray-100'
                    ]">
                      <p>pnpm install nexcode</p>
                    </div>

                    <h4 class="text-lg font-semibold mt-6 mb-3">Basic Setup</h4>
                    <p class="mb-4">
                      After installation, you need to import and register the Nexcode components in your application.
                    </p>
                    <div :class="[
                      'rounded-md p-4 mb-4 font-mono text-sm',
                      isDark ? 'bg-gray-800' : 'bg-gray-100'
                    ]">
                      <p>import { createApp } from 'vue'</p>
                      <p>import App from './App.vue'</p>
                      <p>import Nexcode from 'nexcode'</p>
                      <p>import 'nexcode/dist/style.css'</p>
                      <p>&nbsp;</p>
                      <p>const app = createApp(App)</p>
                      <p>app.use(Nexcode)</p>
                      <p>app.mount('#app')</p>
                    </div>

                    <div class="mt-8 flex justify-center">
                      <UiButton
                        to="/auth/signup"
                        :class="[
                          'px-6 py-3 font-medium rounded-md transition-colors duration-200 text-white',
                          isDark 
                            ? 'bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-500 hover:to-indigo-600' 
                            : 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700'
                        ]"
                      >
                        Create an Account
                      </UiButton>
                    </div>
                  </div>
                </div>

                <!-- Components Section -->
                <div v-if="activeSection === 1" class="fade-in">
                  <div :class="[isDark ? 'text-gray-300' : 'text-gray-700']">
                    <p class="mb-6">
                      Nexcode provides a wide range of components to help you build beautiful interfaces.
                      Here are some of the most commonly used components:
                    </p>

                    <div class="space-y-8">
                      <div 
                        v-for="(component, index) in components" 
                        :key="index" 
                        class="border-b pb-6" 
                        :class="isDark ? 'border-gray-800' : 'border-gray-200'"
                        v-lazy-load
                      >
                        <h3 class="text-xl font-semibold mb-3">{{ component.name }}</h3>
                        <p class="mb-4">{{ component.description }}</p>
                        <div :class="[
                          'rounded-md p-4 mb-4 font-mono text-sm',
                          isDark ? 'bg-gray-800' : 'bg-gray-100'
                        ]">
                          <p>{{ component.example }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Guides Section -->
                <div v-if="activeSection === 2" class="fade-in">
                  <div :class="[isDark ? 'text-gray-300' : 'text-gray-700']">
                    <p class="mb-6">
                      Our guides will help you understand how to use Nexcode effectively in your projects.
                    </p>

                    <div class="space-y-6">
                      <div 
                        v-for="(guide, index) in guides" 
                        :key="index" 
                        :class="[
                          'p-4 rounded-lg border',
                          isDark ? 'border-gray-800 hover:bg-gray-800/50' : 'border-gray-200 hover:bg-gray-50'
                        ]" 
                        class="transition-colors duration-200 cursor-pointer"
                        v-lazy-load
                      >
                        <h3 class="text-lg font-semibold mb-2">{{ guide.title }}</h3>
                        <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-600'">{{ guide.description }}</p>
                        <div class="mt-2 flex items-center text-sm font-medium" :class="isDark ? 'text-purple-400' : 'text-purple-600'">
                          Read more
                          <ArrowRight class="ml-1 h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, getCurrentInstance } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import UiButton from '@/components/ui/UiButton.vue'
import { useTheme } from '@/composables/useTheme'

// Use our global theme composable
const { isDark } = useTheme()

// Active section state
const activeSection = ref(0)
const isLoading = ref(true)

// Documentation sections
const sections = [
  { title: 'Getting Started' },
  { title: 'Components' },
  { title: 'Guides' }
]

// Change section with loading state
const changeSection = (index: number) => {
  if (activeSection.value === index) return
  isLoading.value = true
  activeSection.value = index
}

// Transition hooks
const beforeEnter = () => {
  isLoading.value = true
}

const afterLeave = () => {
  // Simulate loading delay
  setTimeout(() => {
    isLoading.value = false
  }, 500)
}

// Component examples
const components = [
  {
    name: 'Button',
    description: 'Buttons allow users to trigger an action or event with a single click.',
    example: '<UiButton>Click me</UiButton>'
  },
  {
    name: 'Card',
    description: 'Cards are used to group and display content in a way that is easily readable.',
    example: '<Card>\n  <CardHeader>\n    <CardTitle>Card Title</CardTitle>\n  </CardHeader>\n  <CardContent>\n    Card content goes here\n  </CardContent>\n</Card>'
  },
  {
    name: 'Input',
    description: 'Input components are used to get user input in a form.',
    example: '<Input placeholder="Enter your name" />'
  }
]

// Guides
const guides = [
  {
    title: 'Building a Dashboard',
    description: 'Learn how to create a responsive dashboard with Nexcode components.'
  },
  {
    title: 'Authentication Flow',
    description: 'Implement a complete authentication system with login, signup, and password reset.'
  },
  {
    title: 'Theming and Customization',
    description: 'Customize the look and feel of Nexcode components to match your brand.'
  },
  {
    title: 'Form Validation',
    description: 'Learn how to validate forms and display error messages.'
  }
]

// Custom directive for lazy loading elements with fade-in effect
const vLazyLoad = {
  mounted(el: HTMLElement) {
    // Add initial styles
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
    
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Fade in when element is visible
          setTimeout(() => {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }, 100)
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.1 })
    
    observer.observe(el)
  }
}

// Initialize page
onMounted(async () => {
  // Register directive
  const app = getCurrentInstance()?.appContext.app
  if (app) {
    app.directive('lazy-load', vLazyLoad)
  }
  
  // Simulate initial loading
  await nextTick()
  setTimeout(() => {
    isLoading.value = false
    
    // Initialize fade-in animations for the main content
    setTimeout(() => {
      const fadeElements = document.querySelectorAll('.fade-in')
      fadeElements.forEach((el) => {
        const element = el as HTMLElement
        element.style.opacity = '1'
        element.style.transform = 'translateY(0)'
      })
    }, 100)
  }, 800)
})

definePageMeta({ layout: 'default' })
</script>

<style scoped>
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Lazy loading animation */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style> 
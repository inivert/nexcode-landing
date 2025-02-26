<template>
  <div>
    <!-- Page Loader Overlay -->
    <Transition name="fade">
      <div 
        v-if="isLoading" 
        class="fixed inset-0 z-50 flex items-center justify-center"
        :class="isDark ? 'bg-black' : 'bg-white'"
      >
        <div class="text-center">
          <div class="relative w-20 h-20 mx-auto">
            <div 
              class="absolute top-0 left-0 w-full h-full rounded-full border-4 border-t-transparent animate-spin" 
              :class="isDark ? 'border-purple-700' : 'border-purple-300'"
            ></div>
            <div 
              class="absolute top-0 left-0 w-full h-full rounded-full border-4 border-t-transparent border-l-transparent animate-spin-slow" 
              :class="isDark ? 'border-indigo-500' : 'border-indigo-400'"
            ></div>
          </div>
          <p class="mt-4 text-sm animate-pulse" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            Loading...
          </p>
        </div>
      </div>
    </Transition>
    
    <!-- Main Content with Page Transitions -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useTheme } from '@/composables/useTheme'
import { useRouter } from 'vue-router'

// Use theme state
const { isDark } = useTheme()

// Page loading state
const isLoading = ref(true)
const router = useRouter()

// Hide loader after initial page load
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 800) // Initial load delay

  // Setup navigation guards for page transitions
  router.beforeEach((to, from, next) => {
    if (to.path !== from.path) {
      isLoading.value = true
    }
    next()
  })

  router.afterEach(() => {
    setTimeout(() => {
      isLoading.value = false
    }, 500) // Transition delay between pages
  })
})
</script>

<style>
@import "~/assets/css/tailwind.css";

/* Fade transition for loader */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Page transition */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Custom animation for second spinner */
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 1.5s linear infinite;
}
</style>

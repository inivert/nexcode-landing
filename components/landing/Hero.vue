<template>
  <section :class="[
    'relative flex min-h-screen w-full flex-col items-center justify-center p-4 md:p-8 transition-colors duration-300',
    isDark ? 'bg-black' : 'bg-white'
  ]">
    <FallingStarsBg :class="isDark ? 'bg-black/80' : 'bg-white/80'" />
    <div :class="[
      'absolute inset-0 z-[1] bg-gradient-to-b rounded-3xl m-4 md:m-8',
      isDark ? 'from-black/60 to-black/90' : 'from-white/60 to-white/90'
    ]"></div>
    <div class="z-[2] flex max-w-xl flex-col items-center gap-2 w-full">
      <BlurReveal
        :delay="0.5"
        class="flex flex-col items-center justify-center gap-4 w-full"
      >
        <span
          class="flex flex-col items-center justify-center bg-gradient-to-b from-purple-300 to-indigo-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl"
        >
          <span class="flex flex-wrap justify-center items-center gap-2">
            Building
            <FlipWords
              :words="['beautiful', 'stunning', 'amazing']"
              :duration="3000"
              class="w-auto min-w-[180px] inline-block bg-gradient-to-b from-purple-300 to-indigo-500 bg-clip-text text-transparent"
            />
          </span>
          <span>web experience</span>
        </span>

        <span :class="[
          'text-center text-xl',
          isDark ? 'text-gray-200' : 'text-gray-700'
        ]">
          Inspira UI is Magic UI for nuxt.js
        </span>

        <div class="my-2 flex flex-row items-center justify-center gap-4">
          <UiButton to="/components" class="bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800"> Get Started </UiButton>
          <UiButton
            to="/blocks"
            variant="secondary"
            class="bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white"
          >
            Learn More
          </UiButton>
        </div>

        <div
          :class="[
            'relative flex h-fit w-full flex-col items-center justify-center overflow-hidden rounded-2xl border p-px md:shadow-xl',
            isDark ? 'border-purple-500/30 bg-transparent' : 'border-purple-500/20 bg-white/90'
          ]"
        >
          <video
            ref="heroVideo"
            :src="videoSrc"
            class="w-full rounded-xl"
            autoplay
            loop
            muted
            playsinline
            preload="auto"
            aria-label="Promotional video showing code editor interface"
            title="Code editor demonstration"
            @error="handleVideoError"
            @loadstart="videoLoading = true"
            @canplay="videoLoading = false"
          >
            <track kind="captions" src="" label="English" />
            <p>Your browser doesn't support HTML5 video. Here is a <a :href="videoSrc">link to the video</a> instead.</p>
          </video>
          <ClientOnly>
            <BorderBeam
              :size="250"
              :duration="12"
              :delay="9"
              :border-width="2"
              color-from="#8b5cf6"
              color-to="#6366f1"
            />
          </ClientOnly>
        </div>
      </BlurReveal>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import FallingStarsBg from '~/components/motion/FallingStarsBg.vue'
import BlurReveal from '~/components/motion/BlurReveal.vue'
import FlipWords from '~/components/motion/FlipWords.vue'
import BorderBeam from '~/components/motion/BorderBeam.vue'
import UiButton from '~/components/ui/UiButton.vue'
import { useTheme } from '@/composables/useTheme'

const heroVideo = ref(null)
const videoLoading = ref(true)
const videoSrc = ref('/videos/codelumus.MP4')

// Use our global theme composable
const { isDark } = useTheme()

// Handle video load error and replace with a fallback
const handleVideoError = (e: Event) => {
  if (heroVideo.value) {
    videoSrc.value = 'https://picsum.photos/800/400?grayscale' // Fallback to an image
  }
}

// Preload video when component is mounted
onMounted(() => {
  // Preload the video
  const preloadVideo = new Image()
  preloadVideo.src = videoSrc.value
})
</script>

<style scoped>
/* Ensure text gradient works in different browsers */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style> 
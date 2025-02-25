<template>
  <section class="relative flex min-h-screen w-full flex-col items-center justify-center p-4 md:p-8">
    <FallingStarsBg class="bg-black/80" />
    <div class="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 to-black/90 rounded-3xl m-4 md:m-8"></div>
    <div class="z-[2] flex max-w-xl flex-col items-center gap-2 w-full">
      <BlurReveal
        :delay="0.5"
        class="flex flex-col items-center justify-center gap-4 w-full"
      >
        <span
          class="flex flex-col items-center justify-center bg-gradient-to-b from-blue-300 to-purple-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl"
        >
          <span>
            Building
            <FlipWords
              :words="['beautiful', 'stunning', 'amazing']"
              :duration="3000"
              class="w-52 bg-gradient-to-b from-blue-300 to-purple-400 bg-clip-text text-transparent"
            />
          </span>
          web experience
        </span>

        <span class="text-center text-xl text-gray-200">
          Inspira UI is the new way to build beautiful website
        </span>

        <div class="my-2 flex flex-row items-center justify-center gap-4">
          <UiButton to="/components" class="bg-blue-600 hover:bg-blue-700"> Get Started </UiButton>
          <UiButton
            to="/blocks"
            variant="secondary"
            class="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Learn More
          </UiButton>
        </div>

        <div
          class="relative flex h-fit w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-blue-500/30 bg-transparent p-px md:shadow-xl"
        >
          <video
            ref="heroVideo"
            src="/videos/codelumus.MP4"
            class="w-full rounded-xl"
            autoplay
            loop
            muted
            playsinline
            @error="handleVideoError"
          ></video>
          <ClientOnly>
            <BorderBeam
              :size="250"
              :duration="12"
              :delay="9"
              :border-width="2"
              color-from="#4f46e5"
              color-to="#8b5cf6"
            />
          </ClientOnly>
        </div>
      </BlurReveal>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FallingStarsBg from '~/components/motion/FallingStarsBg.vue'
import BlurReveal from '~/components/motion/BlurReveal.vue'
import FlipWords from '~/components/motion/FlipWords.vue'
import BorderBeam from '~/components/motion/BorderBeam.vue'
import UiButton from '~/components/ui/UiButton.vue'

const heroVideo = ref(null)

// Handle video load error and replace with a fallback
const handleVideoError = (e: Event) => {
  if (heroVideo.value) {
    const target = e.target as HTMLVideoElement
    target.src = 'https://picsum.photos/800/400?grayscale' // Fallback to an image
  }
}
</script>

<style scoped>
/* Ensure text gradient works in different browsers */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style> 
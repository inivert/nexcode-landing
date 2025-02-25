<template>
  <div class="relative inline-block">
    <Transition
      @after-enter="$emit('animationStart')"
      @after-leave="$emit('animationComplete')"
    >
      <div
        v-show="isVisible"
        :class="[
          'relative z-10 inline-block text-left min-h-[1.2em]',
          props.class,
        ]"
      >
        <span class="inline-block whitespace-nowrap w-full text-center">
          {{ currentWord }}
        </span>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
interface Props {
  words: string[];
  duration?: number;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  duration: 3000,
  class: "",
});

defineEmits(["animationStart", "animationComplete"]);

const currentWord = ref(props.words[0]);
const isVisible = ref(true);
const timeoutId = ref<number | null>(null);

function startAnimation() {
  isVisible.value = false;

  setTimeout(() => {
    const currentIndex = props.words.indexOf(currentWord.value);
    const nextWord = props.words[currentIndex + 1] || props.words[0];
    currentWord.value = nextWord;
    isVisible.value = true;
  }, 600);
}

function startTimeout() {
  timeoutId.value = window.setTimeout(() => {
    startAnimation();
  }, props.duration);
}

onMounted(() => {
  startTimeout();
});

onBeforeUnmount(() => {
  if (timeoutId.value) {
    clearTimeout(timeoutId.value);
  }
});

watch(isVisible, (newValue) => {
  if (newValue) {
    startTimeout();
  }
});
</script>

<style scoped>
.v-enter-active {
  animation: enterWord 0.6s ease-in-out forwards;
}

.v-leave-active {
  animation: leaveWord 0.6s ease-in-out forwards;
}

@keyframes enterWord {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes leaveWord {
  0% {
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
  }
  100% {
    opacity: 0;
    transform: scale(2);
    filter: blur(8px);
  }
}
</style>
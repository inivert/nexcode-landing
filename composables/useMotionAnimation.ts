import { ref, onMounted } from 'vue'
import { useMotion } from 'motion-v'
import { useIntersectionObserver } from '@vueuse/core'

/**
 * Custom composable for creating animations with motion-v
 */
export function useMotionAnimation() {
  const motion = useMotion()

  /**
   * Create a fade-in animation on an element when it comes into view
   * @param options Animation options
   * @returns Reference to attach to the target element
   */
  const createFadeIn = (options: {
    duration?: number
    delay?: number
    y?: number
    easing?: string
    threshold?: number
  } = {}) => {
    const target = ref(null)
    const {
      duration = 0.6,
      delay = 0,
      y = 20,
      easing = 'ease-out',
      threshold = 0.1
    } = options

    onMounted(() => {
      if (!target.value) return

      useIntersectionObserver(
        target,
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            motion.animate(target.value, {
              opacity: [0, 1],
              y: y ? [y, 0] : undefined
            }, {
              duration,
              delay,
              easing
            })
          }
        },
        { threshold }
      )
    })

    return target
  }

  /**
   * Create a slide-in animation on an element when it comes into view
   * @param options Animation options
   * @returns Reference to attach to the target element
   */
  const createSlideIn = (options: {
    direction?: 'left' | 'right' | 'top' | 'bottom'
    duration?: number
    delay?: number
    distance?: number
    easing?: string
    threshold?: number
  } = {}) => {
    const target = ref(null)
    const {
      direction = 'left',
      duration = 0.7,
      delay = 0,
      distance = 50,
      easing = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      threshold = 0.1
    } = options

    onMounted(() => {
      if (!target.value) return

      const getAnimationProperties = () => {
        switch (direction) {
          case 'left':
            return { x: [-distance, 0] }
          case 'right':
            return { x: [distance, 0] }
          case 'top':
            return { y: [-distance, 0] }
          case 'bottom':
            return { y: [distance, 0] }
          default:
            return { x: [-distance, 0] }
        }
      }

      useIntersectionObserver(
        target,
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            motion.animate(target.value, {
              opacity: [0, 1],
              ...getAnimationProperties()
            }, {
              duration,
              delay,
              easing
            })
          }
        },
        { threshold }
      )
    })

    return target
  }

  /**
   * Apply animation directly to an element 
   */
  const animate = (
    target: HTMLElement | null,
    keyframes: Record<string, any>,
    options: {
      duration?: number
      delay?: number
      easing?: string
    } = {}
  ) => {
    if (!target) return

    const { 
      duration = 0.5,
      delay = 0,
      easing = 'ease-out'
    } = options

    motion.animate(target, keyframes, {
      duration,
      delay,
      easing
    })
  }

  return {
    createFadeIn,
    createSlideIn,
    animate,
    motion
  }
} 
<template>
    <div :class="[
      'py-16 sm:py-24 transition-colors duration-300',
      isDark ? 'bg-black' : 'bg-white'
    ]">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center max-w-2xl mx-auto">
          <h1 :class="[
            'text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent',
          ]">
            Pricing Plans for Every Team
          </h1>
          <p :class="[
            'mt-4 text-lg',
            isDark ? 'text-gray-400' : 'text-gray-600'
          ]">
            Simple, transparent pricing. Start with a 14-day free trial.
          </p>
        </div>
  
        <!-- Pricing Tiers -->
        <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <PricingCard
            v-for="plan in plans"
            :key="plan.name"
            :plan="plan"
            :active-card="activeCard"
            @update:active-card="activeCard = $event"
          />
        </div>
  
        <!-- FAQ Section -->
        <div class="mt-16 max-w-2xl mx-auto">
          <h2 :class="[
            'text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent',
          ]">
            Frequently Asked Questions
          </h2>
          <div class="space-y-4">
            <FaqItem
              v-for="(faq, index) in faqs"
              :key="index"
              :faq="faq"
              :is-open="openFaq === index"
              @toggle="toggleFaq(index)"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { CheckCircle, Zap, Star, Building } from 'lucide-vue-next'
  import PricingCard from '@/components/pricing/PricingCard.vue'
  import FaqItem from '@/components/pricing/FaqItem.vue'
  import { useTheme } from '@/composables/useTheme'
  
  // Use our global theme composable
  const { isDark } = useTheme()
  
  const openFaq = ref<number | null>(null)
  const activeCard = ref<string | undefined>(undefined)
  
  const toggleFaq = (index: number) => {
    openFaq.value = openFaq.value === index ? null : index
  }
  
  const plans = [
    {
      name: 'starter',
      title: 'Starter',
      description: 'For small teams just getting started.',
      price: '$15',
      features: ['5 projects', '3 team members', '1GB storage'],
      icon: Zap,
      buttonText: 'Get Started',
      buttonLink: '/auth/signup',
      isFeatured: false,
    },
    {
      name: 'pro',
      title: 'Pro',
      description: 'For growing teams with multiple projects.',
      price: '$30',
      features: ['Unlimited projects', '10 team members', '10GB storage', 'Priority support'],
      icon: Star,
      buttonText: 'Get Started',
      buttonLink: '/auth/signup',
      isFeatured: true,
    },
    {
      name: 'enterprise',
      title: 'Enterprise',
      description: 'For large organizations with advanced needs.',
      price: '$99',
      features: [
        'Unlimited everything',
        'Unlimited team members',
        '100GB storage',
        '24/7 dedicated support',
        'Custom integrations',
      ],
      icon: Building,
      buttonText: 'Contact Sales',
      buttonLink: '/contact',
      isFeatured: false,
    },
  ]
  
  const faqs = [
    { question: 'How do I get started?', answer: 'Pick a plan and sign up to start instantly.' },
    { question: 'Can I switch plans?', answer: 'Yes, switch anytime—changes apply next billing cycle.' },
    { question: 'Do you offer refunds?', answer: 'Yes, within 14 days. Contact support for assistance.' },
  ]
  
  definePageMeta({ layout: 'default' })
  </script>
  
  <style scoped>
  .bg-clip-text {
    -webkit-background-clip: text;
    background-clip: text;
  }
  </style>
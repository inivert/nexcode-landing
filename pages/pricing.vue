<template>
    <div 
      :class="[
        'relative py-16 sm:py-24 transition-colors duration-300 overflow-hidden',
        isDark ? 'bg-black' : 'bg-white'
      ]"
      v-page-transition
    >
      <!-- Decorative Background Elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-purple-500 opacity-5 blur-3xl"></div>
        <div class="absolute top-1/3 -left-24 w-80 h-80 rounded-full bg-indigo-500 opacity-5 blur-3xl"></div>
        <div class="absolute bottom-0 right-1/3 w-64 h-64 rounded-full bg-purple-600 opacity-5 blur-3xl"></div>
      </div>

      <div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <!-- Header -->
        <div class="text-center max-w-2xl mx-auto fade-in">
          <span class="inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full" :class="isDark ? 'bg-purple-900/40 text-purple-300' : 'bg-purple-100 text-purple-800'">
            Simple & Transparent
          </span>
          <h1 :class="[
            'text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-purple-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent',
          ]">
            Pricing Plans for Every Team
          </h1>
          <p :class="[
            'mt-4 text-lg',
            isDark ? 'text-gray-400' : 'text-gray-600'
          ]">
            Simple, transparent pricing. Start with a 14-day free trial.
          </p>
          
          <!-- Billing Toggle -->
          <div class="mt-8 flex justify-center items-center">
            <span :class="[isDark ? 'text-gray-400' : 'text-gray-600']">Monthly</span>
            <button 
              @click="toggleBilling" 
              :class="[
                'mx-4 relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 shadow-sm',
                isYearly ? 'bg-purple-600' : 'bg-gray-300'
              ]"
            >
              <span 
                :class="[
                  'inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 shadow-md',
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                ]"
              />
            </button>
            <span :class="[isDark ? 'text-gray-400' : 'text-gray-600']">
              Yearly <span class="inline-flex items-center ml-1 px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 shadow-sm">Save 20%</span>
            </span>
          </div>
        </div>
  
        <!-- Pricing Tiers -->
        <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-fade-in">
          <PricingCard
            v-for="(plan, index) in displayPlans"
            :key="plan.name"
            :plan="plan"
            :active-card="activeCard"
            :class="['fade-in-item']"
            :style="{ animationDelay: `${index * 0.15}s` }"
            @update:active-card="activeCard = $event"
          />
        </div>
        
        <!-- Feature Comparison -->
        <div 
          class="mt-20 max-w-4xl mx-auto overflow-hidden rounded-xl border shadow-lg fade-in" 
          :class="isDark ? 'border-gray-800' : 'border-gray-200'"
        >
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y" :class="isDark ? 'divide-gray-800' : 'divide-gray-200'">
              <thead :class="isDark ? 'bg-gray-900/60' : 'bg-gray-50'">
                <tr>
                  <th scope="col" class="py-4 pl-6 pr-3 text-left text-sm font-semibold" :class="isDark ? 'text-white' : 'text-gray-900'">Feature</th>
                  <th v-for="plan in plans" :key="`head-${plan.name}`" scope="col" class="px-3 py-4 text-center text-sm font-semibold" :class="isDark ? 'text-white' : 'text-gray-900'">
                    <div :class="plan.isFeatured ? 'text-purple-500' : ''">{{ plan.title }}</div>
                  </th>
                </tr>
              </thead>
              <tbody :class="isDark ? 'bg-black divide-y divide-gray-800' : 'bg-white divide-y divide-gray-200'">
                <tr v-for="(feature, idx) in featureComparison" :key="idx" :class="[
                  isDark ? 'hover:bg-gray-900/40' : 'hover:bg-gray-50', 
                  'transition-colors duration-150'
                ]">
                  <td class="py-4 pl-6 pr-3 text-sm font-medium" :class="isDark ? 'text-white' : 'text-gray-900'">{{ feature.name }}</td>
                  <td v-for="plan in plans" :key="`${plan.name}-${idx}`" class="px-3 py-4 text-sm text-center" :class="isDark ? 'text-gray-400' : 'text-gray-500'">
                    <component 
                      :is="feature.values[plan.name as PlanName].icon" 
                      v-if="feature.values[plan.name as PlanName].icon" 
                      class="inline h-5 w-5 transition-all duration-300" 
                      :class="[
                        feature.values[plan.name as PlanName].available ? 
                          (isDark ? 'text-green-400' : 'text-green-500') : 
                          (isDark ? 'text-gray-600' : 'text-gray-400'),
                        activeCard === plan.name && feature.values[plan.name as PlanName].available ? 'scale-125' : ''
                      ]"
                    />
                    <span 
                      v-else-if="feature.values[plan.name as PlanName].text" 
                      :class="[
                        activeCard === plan.name ? 'font-medium' : '',
                        plan.isFeatured ? 'text-purple-500' : ''
                      ]"
                    >
                      {{ feature.values[plan.name as PlanName].text }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  
        <!-- FAQ Section -->
        <div 
          class="mt-20 max-w-2xl mx-auto fade-in"
        >
          <h2 :class="[
            'text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent text-center',
          ]">
            Frequently Asked Questions
          </h2>
          <div class="space-y-4 stagger-fade-in">
            <FaqItem
              v-for="(faq, index) in faqs"
              :key="index"
              :faq="faq"
              :is-open="openFaq === index"
              :class="['fade-in-item']" 
              :style="{ animationDelay: `${index * 0.1}s` }"
              @toggle="toggleFaq(index)"
            />
          </div>
        </div>
        
        <!-- CTA Section -->
        <div 
          class="mt-20 text-center p-8 rounded-2xl relative overflow-hidden fade-in" 
          :class="isDark ? 'bg-gradient-to-br from-gray-900/80 to-black/90 border border-gray-800' : 'bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-lg'"
        >
          <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div class="absolute top-0 left-0 w-32 h-32 rounded-full bg-purple-500 blur-xl"></div>
            <div class="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-indigo-500 blur-xl"></div>
          </div>
          
          <div class="relative z-10">
            <h2 :class="[
              'text-2xl font-bold mb-4',
              isDark ? 'text-white' : 'text-gray-900'
            ]">
              Still not sure which plan is right for you?
            </h2>
            <p :class="[
              'mb-8 max-w-2xl mx-auto',
              isDark ? 'text-gray-400' : 'text-gray-600'
            ]">
              Our team is ready to help you find the perfect solution for your needs.
            </p>
            <UiButton
              to="/contact"
              :class="[
                'px-8 py-3 font-medium rounded-md transition-all duration-300 text-white shadow-lg',
                isDark 
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-500 hover:to-indigo-600 hover:shadow-purple-700/20' 
                  : 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-purple-600/25'
              ]"
              hover-scale
            >
              Contact Sales
            </UiButton>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  import { CheckCircle, Zap, Star, Building, Check, X } from 'lucide-vue-next'
  import PricingCard from '@/components/pricing/PricingCard.vue'
  import FaqItem from '@/components/pricing/FaqItem.vue'
  import UiButton from '@/components/ui/UiButton.vue'
  import { useTheme } from '@/composables/useTheme'
  
  // Define types for feature comparison
  type PlanName = 'starter' | 'pro' | 'enterprise'
  type FeatureValue = {
    text?: string
    icon?: any
    available: boolean
  }
  type FeatureValues = {
    [key in PlanName]: FeatureValue
  }
  type FeatureItem = {
    name: string
    values: FeatureValues
  }
  
  // Define page meta with custom transitions
  definePageMeta({ 
    layout: 'default',
    pageTransition: {
      name: 'pricing-page',
      mode: 'out-in'
    }
  })
  
  // Use our global theme composable
  const { isDark } = useTheme()
  
  const openFaq = ref<number | null>(null)
  const activeCard = ref<string | undefined>(undefined)
  const isYearly = ref(false)
  
  const toggleFaq = (index: number) => {
    openFaq.value = openFaq.value === index ? null : index
  }
  
  const toggleBilling = () => {
    isYearly.value = !isYearly.value
  }
  
  const plans = [
    {
      name: 'starter',
      title: 'Starter',
      description: 'For small teams just getting started.',
      price: '$15',
      yearlyPrice: '$144',
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
      yearlyPrice: '$288',
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
      yearlyPrice: '$948',
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
  
  // Computed plans based on billing cycle
  const displayPlans = computed(() => {
    return plans.map(plan => ({
      ...plan,
      price: isYearly.value ? plan.yearlyPrice : plan.price,
      priceLabel: isYearly.value ? '/year' : '/month'
    }))
  })
  
  // Feature comparison table data
  const featureComparison: FeatureItem[] = [
    {
      name: 'Number of Projects',
      values: {
        starter: { text: '5', available: true },
        pro: { text: 'Unlimited', available: true },
        enterprise: { text: 'Unlimited', available: true }
      }
    },
    {
      name: 'Team Members',
      values: {
        starter: { text: '3', available: true },
        pro: { text: '10', available: true },
        enterprise: { text: 'Unlimited', available: true }
      }
    },
    {
      name: 'Storage',
      values: {
        starter: { text: '1GB', available: true },
        pro: { text: '10GB', available: true },
        enterprise: { text: '100GB', available: true }
      }
    },
    {
      name: 'Priority Support',
      values: {
        starter: { icon: X, available: false },
        pro: { icon: Check, available: true },
        enterprise: { icon: Check, available: true }
      }
    },
    {
      name: 'Custom Integrations',
      values: {
        starter: { icon: X, available: false },
        pro: { icon: X, available: false },
        enterprise: { icon: Check, available: true }
      }
    },
    {
      name: '24/7 Dedicated Support',
      values: {
        starter: { icon: X, available: false },
        pro: { icon: X, available: false },
        enterprise: { icon: Check, available: true }
      }
    }
  ]
  
  const faqs = [
    { question: 'How do I get started?', answer: 'Pick a plan and sign up to start instantly. All plans come with a 14-day free trial, no credit card required.' },
    { question: 'Can I switch plans?', answer: 'Yes, you can switch between plans at any time. Changes will apply from the next billing cycle.' },
    { question: 'Do you offer refunds?', answer: 'Yes, we offer a 14-day money-back guarantee. If you\'re not satisfied, contact our support team for assistance.' },
    { question: 'What payment methods do you accept?', answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.' },
    { question: 'Is there a discount for non-profits?', answer: 'Yes, we offer special pricing for non-profit organizations. Please contact our sales team for details.' },
  ]
  </script>
  
  <style scoped>
  .bg-clip-text {
    -webkit-background-clip: text;
    background-clip: text;
  }
  
  /* Custom page transition for pricing page */
  .pricing-page-enter-active,
  .pricing-page-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  
  .pricing-page-enter-from,
  .pricing-page-leave-to {
    opacity: 0;
    transform: translateY(15px);
  }
  
  /* Fade-in animations */
  .fade-in {
    animation: fadeIn 0.8s ease-out forwards;
    opacity: 0;
  }
  
  .stagger-fade-in {
    perspective: 1000px;
  }
  
  .fade-in-item {
    animation: fadeInUp 0.5s ease-out forwards;
    opacity: 0;
    transform: translateY(20px);
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Add hover scale for the button */
  [hover-scale] {
    transition: transform 0.3s ease;
  }
  
  [hover-scale]:hover {
    transform: scale(1.05);
  }
  </style>
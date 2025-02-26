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
          Contact Us
        </h1>
        <p :class="[
          'mt-4 text-lg',
          isDark ? 'text-gray-400' : 'text-gray-600'
        ]">
          Have questions? We're here to help you find the perfect solution.
        </p>
      </div>

      <!-- Contact Form -->
      <div class="mt-12 max-w-xl mx-auto">
        <div :class="[
          'rounded-lg border p-6',
          isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'
        ]">
          <form @submit.prevent="submitForm">
            <div class="space-y-6">
              <!-- Name Field -->
              <div>
                <label :for="'name'" :class="[
                  'block text-sm font-medium mb-2',
                  isDark ? 'text-gray-300' : 'text-gray-700'
                ]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  :class="[
                    'w-full px-4 py-2 rounded-md border',
                    isDark 
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-purple-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500',
                    'focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50'
                  ]"
                  placeholder="Your name"
                  required
                />
              </div>

              <!-- Email Field -->
              <div>
                <label :for="'email'" :class="[
                  'block text-sm font-medium mb-2',
                  isDark ? 'text-gray-300' : 'text-gray-700'
                ]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  :class="[
                    'w-full px-4 py-2 rounded-md border',
                    isDark 
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-purple-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500',
                    'focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50'
                  ]"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <!-- Subject Field -->
              <div>
                <label :for="'subject'" :class="[
                  'block text-sm font-medium mb-2',
                  isDark ? 'text-gray-300' : 'text-gray-700'
                ]">
                  Subject
                </label>
                <select
                  id="subject"
                  v-model="formData.subject"
                  :class="[
                    'w-full px-4 py-2 rounded-md border',
                    isDark 
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-purple-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500',
                    'focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50'
                  ]"
                  required
                >
                  <option value="" disabled>Select a subject</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <!-- Message Field -->
              <div>
                <label :for="'message'" :class="[
                  'block text-sm font-medium mb-2',
                  isDark ? 'text-gray-300' : 'text-gray-700'
                ]">
                  Message
                </label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  :class="[
                    'w-full px-4 py-2 rounded-md border',
                    isDark 
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-purple-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500',
                    'focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50'
                  ]"
                  rows="5"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <!-- Submit Button -->
              <div>
                <button
                  type="submit"
                  :class="[
                    'w-full py-3 px-4 rounded-md font-medium text-white transition-colors duration-200',
                    isDark 
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-500 hover:to-indigo-600' 
                      : 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700',
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  ]"
                  :disabled="isSubmitting"
                >
                  {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                </button>
              </div>
            </div>
          </form>

          <!-- Success Message -->
          <div v-if="showSuccess" class="mt-6 p-4 rounded-md bg-green-100 text-green-800">
            <p class="flex items-center">
              <CheckCircle class="h-5 w-5 mr-2" />
              Thank you for your message! We'll get back to you soon.
            </p>
          </div>
        </div>

        <!-- Contact Information -->
        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(item, index) in contactInfo" :key="index" :class="[
            'p-6 rounded-lg border text-center',
            isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'
          ]">
            <component :is="item.icon" :class="[
              'h-8 w-8 mx-auto mb-4',
              isDark ? 'text-purple-400' : 'text-purple-600'
            ]" />
            <h3 :class="[
              'text-lg font-medium mb-2',
              isDark ? 'text-white' : 'text-gray-900'
            ]">{{ item.title }}</h3>
            <p :class="isDark ? 'text-gray-400' : 'text-gray-600'">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'

// Use our global theme composable
const { isDark } = useTheme()

// Form data
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// Form state
const isSubmitting = ref(false)
const showSuccess = ref(false)

// Contact information
const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    text: 'support@nexcode.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    text: '+1 (555) 123-4567'
  },
  {
    icon: MapPin,
    title: 'Address',
    text: '123 Tech Street, San Francisco, CA'
  }
]

// Form submission
const submitForm = async () => {
  isSubmitting.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // Reset form and show success message
  formData.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  
  isSubmitting.value = false
  showSuccess.value = true
  
  // Hide success message after 5 seconds
  setTimeout(() => {
    showSuccess.value = false
  }, 5000)
}

definePageMeta({ layout: 'default' })
</script>

<style scoped>
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style> 
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@prisma/nuxt',
    '@nuxtjs/supabase',
    '@nuxtjs/color-mode'
  ],
  // Enable page transitions
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  supabase: {
    // Options for Supabase client
    redirect: false,
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY
  },
  prisma: {
    // Disable automatic migrations to prevent the prompt
    migrationPrompt: false,
    // Disable schema check to prevent server from hanging
    schemaCheck: 'never',
    // Disable client generation on server start
    clientOptions: {
      generateOnDev: false
    }
  }
})
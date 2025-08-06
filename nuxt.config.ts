// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-15',
  devtools: { enabled: true },
  ssr: true,
  
  // Modules
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],

  // TypeScript configuration
  typescript: {
    typeCheck: false
  },

  // CSS configuration
  css: ['~/assets/css/main.css'],

  // App configuration
  app: {
    head: {
      title: 'YSA Ghana Limited - Professional Consultancy Services',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'YSA Ghana Limited specializes in petroleum brokerage, project management, procurement, general merchandise, and business consultancy. Professional consultancy services in Ghana.' 
        },
        { 
          name: 'keywords', 
          content: 'petroleum brokerage, project management, procurement, general merchandise, business consultancy, strategic advisory, Ghana' 
        },
        { name: 'author', content: 'YSA Ghana Limited' },
        { property: 'og:title', content: 'YSA Ghana Limited - Professional Consultancy Services' },
        { property: 'og:description', content: 'Professional consultancy services in petroleum brokerage, project management, procurement, general merchandise, and business consultancy.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Runtime config
  runtimeConfig: {
    // Private keys (only available on server-side)
    emailApiKey: process.env.EMAIL_API_KEY,
    // Public keys (exposed to client-side)
    public: {
      siteUrl: process.env.SITE_URL || 'https://ysaghana.com',
      contactEmail: process.env.CONTACT_EMAIL || 'info@ysaghana.com',
      contactPhone: process.env.CONTACT_PHONE || '+233 XX XXX XXXX'
    }
  },

  // Image optimization
  image: {
    quality: 80,
    format: ['webp', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  // UI configuration
  ui: {
    global: true,
    icons: ['heroicons', 'lucide']
  },
  
  // Color mode configuration
  colorMode: {
    preference: 'light',
    fallback: 'light'
  },

  // Content configuration
  content: {
    highlight: {
      theme: 'github-light'
    }
  },

  // SEO and performance
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },

  // Build configuration
  build: {
    transpile: ['@headlessui/vue']
  }
})

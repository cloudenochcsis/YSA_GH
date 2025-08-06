<template>
  <footer class="bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <div class="flex items-center space-x-3 mb-4">
            <div class="bg-petroleum-secondary text-white rounded-lg p-2">
              <UIcon name="lucide:fuel" class="w-6 h-6" />
            </div>
            <div>
              <h3 class="text-xl font-bold">{{ companyInfo.name }}</h3>
              <p class="text-sm text-gray-400">{{ companyInfo.tagline }}</p>
            </div>
          </div>
          <p class="text-gray-300 mb-6 max-w-md">
            {{ companyInfo.description }}
          </p>
          
          <!-- Social Media Links -->
          <div class="flex space-x-4">
            <UButton 
              v-if="companyInfo.socialMedia.linkedin"
              :to="companyInfo.socialMedia.linkedin" 
              target="_blank"
              variant="ghost" 
              size="sm"
              class="text-gray-400 hover:text-white hover:bg-gray-800"
            >
              <UIcon name="lucide:linkedin" class="w-5 h-5" />
            </UButton>
            
            <UButton 
              v-if="companyInfo.socialMedia.twitter"
              :to="companyInfo.socialMedia.twitter" 
              target="_blank"
              variant="ghost" 
              size="sm"
              class="text-gray-400 hover:text-white hover:bg-gray-800"
            >
              <UIcon name="lucide:twitter" class="w-5 h-5" />
            </UButton>
            
            <UButton 
              v-if="companyInfo.socialMedia.facebook"
              :to="companyInfo.socialMedia.facebook" 
              target="_blank"
              variant="ghost" 
              size="sm"
              class="text-gray-400 hover:text-white hover:bg-gray-800"
            >
              <UIcon name="lucide:facebook" class="w-5 h-5" />
            </UButton>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li v-for="item in navigation" :key="item.name">
              <NuxtLink 
                :to="item.href"
                class="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Our Services</h4>
          <ul class="space-y-2">
            <li v-for="service in services.slice(0, 5)" :key="service.id">
              <NuxtLink 
                :to="`/services#${service.id}`"
                class="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {{ service.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Contact Info -->
      <div class="border-t border-gray-800 mt-8 pt-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="flex items-center space-x-3">
            <UIcon name="lucide:map-pin" class="w-5 h-5 text-petroleum-gold" />
            <span class="text-gray-300">{{ companyInfo.address }}</span>
          </div>
          
          <div class="flex items-center space-x-3">
            <UIcon name="lucide:phone" class="w-5 h-5 text-petroleum-gold" />
            <a 
              :href="`tel:${companyInfo.phone}`"
              class="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {{ companyInfo.phone }}
            </a>
          </div>
          
          <div class="flex items-center space-x-3">
            <UIcon name="lucide:mail" class="w-5 h-5 text-petroleum-gold" />
            <a 
              :href="`mailto:${companyInfo.email}`"
              class="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {{ companyInfo.email }}
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-800 mt-8 pt-8 text-center">
        <p class="text-gray-400">
          © {{ currentYear }} {{ companyInfo.name }}. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component

// Company data
const { companyInfo, services } = useCompanyData()

// Navigation items
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' }
]

// Current year for copyright
const currentYear = new Date().getFullYear()
</script>
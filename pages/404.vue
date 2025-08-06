<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4">
    <div class="max-w-md w-full text-center">
      <!-- 404 Illustration -->
      <div class="mb-8">
        <div class="text-blue-600 mb-4">
          <UIcon name="lucide:search-x" class="w-24 h-24 mx-auto" />
        </div>
        <h1 class="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p class="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. 
          The page might have been moved, deleted, or you entered the wrong URL.
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="space-y-4">
        <UButton 
          to="/" 
          size="lg" 
          class="w-full bg-blue-600 hover:bg-blue-700"
        >
          <UIcon name="lucide:home" class="w-4 h-4 mr-2" />
          Go Home
        </UButton>
        
        <UButton 
          @click="$router.go(-1)" 
          variant="outline" 
          size="lg" 
          class="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          <UIcon name="lucide:arrow-left" class="w-4 h-4 mr-2" />
          Go Back
        </UButton>
      </div>

      <!-- Helpful Links -->
      <div class="mt-12 pt-8 border-t border-gray-200">
        <p class="text-sm text-gray-500 mb-4">
          Or try one of these pages:
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink 
            to="/about" 
            class="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            About Us
          </NuxtLink>
          <NuxtLink 
            to="/services" 
            class="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Our Services
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Contact Us
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// SEO Meta for 404 page
useSeoMeta({
  title: '404 - Page Not Found | YSA Ghana Limited',
  description: 'The page you are looking for could not be found. Return to YSA Ghana Limited homepage or explore our services.',
  robots: 'noindex, nofollow'
})

// Set 404 status code
setResponseStatus(404)
</script>
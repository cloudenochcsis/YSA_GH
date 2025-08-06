<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <nav class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center space-x-3">
            <div class="bg-petroleum-primary text-white rounded-lg p-2">
              <UIcon name="lucide:fuel" class="w-6 h-6" />
            </div>
            <div class="hidden sm:block">
              <h1 class="text-xl font-bold text-gray-900">YSA Ghana</h1>
              <p class="text-xs text-gray-600">Limited</p>
            </div>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.href"
            class="text-gray-700 hover:text-petroleum-secondary font-medium transition-colors duration-200"
            :class="{ 'text-petroleum-secondary': $route.path === item.href }"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- CTA Button (Desktop) -->
        <div class="hidden lg:block">
          <UButton 
            to="/contact" 
            size="lg"
            class="bg-petroleum-secondary hover:bg-petroleum-accent text-white"
          >
            Get Started
          </UButton>
        </div>

        <!-- Mobile Menu Button -->
        <div class="lg:hidden">
          <UButton 
            @click="toggleMobileMenu"
            variant="ghost"
            size="sm"
            :icon="mobileMenuOpen ? 'lucide:x' : 'lucide:menu'"
          />
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div 
        v-show="mobileMenuOpen"
        class="lg:hidden border-t border-gray-200 py-4"
      >
        <div class="space-y-4">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.href"
            @click="closeMobileMenu"
            class="block text-gray-700 hover:text-petroleum-secondary font-medium py-2 transition-colors duration-200"
            :class="{ 'text-petroleum-secondary': $route.path === item.href }"
          >
            {{ item.name }}
          </NuxtLink>
          <div class="pt-4 border-t border-gray-200">
            <UButton 
              to="/contact" 
              @click="closeMobileMenu"
              class="w-full bg-petroleum-secondary hover:bg-petroleum-accent text-white"
            >
              Get Started
            </UButton>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
// Navigation header component

// Navigation items
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' }
]

// Mobile menu state
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Close mobile menu when route changes
const route = useRoute()
watch(() => route.path, () => {
  closeMobileMenu()
})

// Close mobile menu on escape key
onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu()
    }
  }
  document.addEventListener('keydown', handleEscape)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
  })
})
</script>
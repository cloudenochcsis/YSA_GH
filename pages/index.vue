<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-petroleum-hero text-white">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="relative container mx-auto px-4 py-20 lg:py-32">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {{ companyInfo.name }}
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-amber-100">
            {{ companyInfo.tagline }}
          </p>
          <p class="text-lg mb-10 text-amber-50 max-w-3xl mx-auto">
            {{ companyInfo.description }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton 
              to="/services" 
              size="lg" 
              class="bg-petroleum-gold text-petroleum-dark hover:bg-amber-400"
            >
              Our Services
            </UButton>
            <UButton 
              to="/contact" 
              size="lg" 
              variant="outline" 
              class="border-petroleum-gold text-petroleum-gold hover:bg-petroleum-gold hover:text-petroleum-dark"
            >
              Get In Touch
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive consultancy services across multiple sectors, 
            delivering excellence and innovation in every project.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          <div 
            v-for="service in services" 
            :key="service.id"
            class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div class="text-petroleum-secondary mb-4">
              <UIcon :name="service.icon" class="w-12 h-12" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              {{ service.title }}
            </h3>
            <p class="text-gray-600 mb-4">
              {{ service.description }}
            </p>
            <UButton 
              :to="`/services#${service.id}`" 
              variant="ghost" 
              class="text-petroleum-secondary hover:text-petroleum-accent"
            >
              Learn More
              <UIcon name="lucide:arrow-right" class="w-4 h-4 ml-1" />
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose YSA Ghana?
            </h2>
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <UIcon name="lucide:check-circle" class="w-6 h-6 text-petroleum-primary" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">
                    Industry Expertise
                  </h3>
                  <p class="text-gray-600">
                    Deep knowledge and experience across petroleum, project management, and procurement sectors.
                  </p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <UIcon name="lucide:check-circle" class="w-6 h-6 text-petroleum-primary" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">
                    Proven Track Record
                  </h3>
                  <p class="text-gray-600">
                    Successfully delivered numerous projects with measurable results and client satisfaction.
                  </p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <UIcon name="lucide:check-circle" class="w-6 h-6 text-petroleum-primary" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">
                    Professional Excellence
                  </h3>
                  <p class="text-gray-600">
                    Committed to the highest standards of professionalism and service delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <NuxtImg 
              src="/images/profession-team-meeting.png" 
              alt="Professional team meeting"
              class="rounded-lg shadow-lg w-full h-96 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-petroleum-primary text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to Work With Us?
        </h2>
        <p class="text-lg mb-8 text-amber-100 max-w-2xl mx-auto">
          Let's discuss how we can help you achieve your business objectives 
          with our professional consultancy services.
        </p>
        <UButton 
          to="/contact" 
          size="lg" 
          class="bg-petroleum-gold text-petroleum-dark hover:bg-amber-400"
        >
          Contact Us Today
        </UButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO Meta
useSeoMeta({
  title: 'YSA Ghana Limited - Professional Consultancy Services',
  description: 'Leading consultancy firm in Ghana specializing in petroleum brokerage, project management, procurement, general merchandise, and business consultancy.',
  keywords: 'petroleum brokerage, project management, procurement, general merchandise, business consultancy, strategic advisory, Ghana',
  ogTitle: 'YSA Ghana Limited - Professional Consultancy Services',
  ogDescription: 'Professional consultancy services in petroleum brokerage, project management, procurement, general merchandise, and business consultancy.',
  ogType: 'website'
})

// Company data
const { companyInfo, services } = useCompanyData()
</script>
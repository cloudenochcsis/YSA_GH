<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-petroleum-hero text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p class="text-xl text-amber-100">
            Comprehensive consultancy solutions tailored to your business needs
          </p>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide specialized consultancy services across multiple sectors, 
            combining industry expertise with innovative solutions to deliver exceptional results.
          </p>
        </div>

        <!-- Service Cards -->
        <div class="space-y-20">
          <div 
            v-for="(service, index) in services" 
            :key="service.id"
            :id="service.id"
            class="scroll-mt-20"
          >
            <div 
              class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              :class="{ 'lg:grid-flow-col-dense': index % 2 === 1 }"
            >
              <!-- Content -->
              <div :class="{ 'lg:col-start-2': index % 2 === 1 }">
                <div class="text-petroleum-secondary mb-4">
                  <UIcon :name="service.icon" class="w-16 h-16" />
                </div>
                <h3 class="text-3xl font-bold text-gray-900 mb-4">
                  {{ service.title }}
                </h3>
                <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                  {{ service.description }}
                </p>
                
                <!-- Features List -->
                <div class="mb-8">
                  <h4 class="text-xl font-semibold text-gray-900 mb-4">
                    Key Features:
                  </h4>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div 
                      v-for="feature in service.features" 
                      :key="feature"
                      class="flex items-center space-x-3"
                    >
                      <UIcon name="lucide:check-circle" class="w-5 h-5 text-petroleum-primary flex-shrink-0" />
                      <span class="text-gray-700">{{ feature }}</span>
                    </div>
                  </div>
                </div>

                <UButton 
                  to="/contact" 
                  size="lg" 
                  class="bg-petroleum-secondary hover:bg-petroleum-accent text-white"
                >
                  Learn More About This Service
                </UButton>
              </div>

              <!-- Image -->
              <div :class="{ 'lg:col-start-1': index % 2 === 1 }">
                <div class="relative">
                  <NuxtImg 
                    :src="service.image || '/images/service-placeholder.jpg'" 
                    :alt="service.title"
                    class="rounded-lg shadow-lg w-full h-96 object-cover"
                    loading="lazy"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            We follow a structured approach to ensure successful project delivery and client satisfaction
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="bg-petroleum-secondary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Discovery</h3>
            <p class="text-gray-600">
              We analyze your requirements and understand your business objectives
            </p>
          </div>

          <div class="text-center">
            <div class="bg-petroleum-secondary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Strategy</h3>
            <p class="text-gray-600">
              We develop a customized strategy tailored to your specific needs
            </p>
          </div>

          <div class="text-center">
            <div class="bg-petroleum-secondary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Implementation</h3>
            <p class="text-gray-600">
              We execute the plan with precision and regular progress updates
            </p>
          </div>

          <div class="text-center">
            <div class="bg-petroleum-secondary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              4
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Delivery</h3>
            <p class="text-gray-600">
              We deliver results and provide ongoing support for sustained success
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Industries We Serve -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Our expertise spans across various industries, enabling us to provide specialized solutions
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div class="text-center">
            <div class="bg-gray-100 rounded-lg p-6 mb-3 hover:bg-amber-50 transition-colors duration-300">
              <UIcon name="lucide:fuel" class="w-8 h-8 text-petroleum-secondary mx-auto" />
            </div>
            <p class="text-sm font-medium text-gray-700">Energy & Oil</p>
          </div>

          <div class="text-center">
            <div class="bg-gray-100 rounded-lg p-6 mb-3 hover:bg-amber-50 transition-colors duration-300">
              <UIcon name="lucide:building-2" class="w-8 h-8 text-petroleum-secondary mx-auto" />
            </div>
            <p class="text-sm font-medium text-gray-700">Construction</p>
          </div>

          <div class="text-center">
            <div class="bg-gray-100 rounded-lg p-6 mb-3 hover:bg-amber-50 transition-colors duration-300">
              <UIcon name="lucide:factory" class="w-8 h-8 text-petroleum-secondary mx-auto" />
            </div>
            <p class="text-sm font-medium text-gray-700">Manufacturing</p>
          </div>

          <div class="text-center">
            <div class="bg-gray-100 rounded-lg p-6 mb-3 hover:bg-amber-50 transition-colors duration-300">
              <UIcon name="lucide:truck" class="w-8 h-8 text-petroleum-secondary mx-auto" />
            </div>
            <p class="text-sm font-medium text-gray-700">Logistics</p>
          </div>

          <div class="text-center">
            <div class="bg-gray-100 rounded-lg p-6 mb-3 hover:bg-amber-50 transition-colors duration-300">
              <UIcon name="lucide:banknote" class="w-8 h-8 text-petroleum-secondary mx-auto" />
            </div>
            <p class="text-sm font-medium text-gray-700">Finance</p>
          </div>

          <div class="text-center">
            <div class="bg-gray-100 rounded-lg p-6 mb-3 hover:bg-amber-50 transition-colors duration-300">
              <UIcon name="lucide:globe" class="w-8 h-8 text-petroleum-secondary mx-auto" />
            </div>
            <p class="text-sm font-medium text-gray-700">Government</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-petroleum-primary text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p class="text-lg mb-8 text-amber-100 max-w-2xl mx-auto">
          Contact us today to discuss your project requirements and discover how we can help you achieve your goals
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton 
            to="/contact" 
            size="lg" 
            class="bg-petroleum-gold text-petroleum-dark hover:bg-amber-400"
          >
            Request a Consultation
          </UButton>
          <UButton 
            :to="`tel:${companyInfo.phone}`" 
            size="lg" 
            variant="outline" 
            class="border-petroleum-gold text-petroleum-gold hover:bg-petroleum-gold hover:text-petroleum-dark"
          >
            Call Us Now
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO Meta
useSeoMeta({
  title: 'Our Services - YSA Ghana Limited',
  description: 'Explore our comprehensive consultancy services: petroleum brokerage, project management, procurement, general merchandise, and business consultancy solutions.',
  keywords: 'petroleum brokerage services, project management consultancy, procurement services, general merchandise, business consultancy, strategic advisory, Ghana consultancy',
  ogTitle: 'Our Services - YSA Ghana Limited',
  ogDescription: 'Professional consultancy services in petroleum brokerage, project management, procurement, general merchandise, and business consultancy.',
  ogType: 'website'
})

// Company data
const { companyInfo, services } = useCompanyData()
</script>
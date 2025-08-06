<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-petroleum-hero text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            About {{ companyInfo.name }}
          </h1>
          <p class="text-xl text-amber-100">
            Learn more about our company, mission, and the team behind our success
          </p>
        </div>
      </div>
    </section>

    <!-- Company Overview -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              {{ companyInfo.description }}
            </p>
            <p class="text-gray-600 leading-relaxed">
              With years of experience in the industry, we have built a reputation for 
              delivering exceptional results and maintaining the highest standards of 
              professionalism. Our team of experts brings together diverse skills and 
              knowledge to provide comprehensive solutions tailored to our clients' needs.
            </p>
          </div>
          <div class="relative">
            <NuxtImg 
              src="/images/front-view.png" 
              alt="YSA Ghana office building"
              class="rounded-lg shadow-lg w-full h-96 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Mission -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <div class="text-petroleum-secondary mb-4">
              <UIcon name="lucide:target" class="w-12 h-12" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p class="text-gray-600 leading-relaxed">
              {{ companyInfo.mission }}
            </p>
          </div>

          <!-- Vision -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <div class="text-petroleum-secondary mb-4">
              <UIcon name="lucide:eye" class="w-12 h-12" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p class="text-gray-600 leading-relaxed">
              {{ companyInfo.vision }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            These values guide everything we do and shape our relationships with clients and partners
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <UIcon name="lucide:shield-check" class="w-8 h-8 text-petroleum-secondary" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
            <p class="text-gray-600">
              We conduct business with the highest ethical standards and transparency
            </p>
          </div>

          <div class="text-center">
            <div class="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <UIcon name="lucide:award" class="w-8 h-8 text-petroleum-secondary" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
            <p class="text-gray-600">
              We strive for excellence in every project and service we deliver
            </p>
          </div>

          <div class="text-center">
            <div class="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <UIcon name="lucide:lightbulb" class="w-8 h-8 text-petroleum-secondary" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
            <p class="text-gray-600">
              We embrace innovative solutions to solve complex challenges
            </p>
          </div>

          <div class="text-center">
            <div class="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <UIcon name="lucide:users" class="w-8 h-8 text-petroleum-secondary" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Partnership</h3>
            <p class="text-gray-600">
              We build lasting partnerships based on trust and mutual success
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced professionals are dedicated to delivering exceptional results
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="member in teamMembers" 
            :key="member.id"
            class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
          >
            <div class="w-full">
              <NuxtImg 
                :src="member.image" 
                :alt="member.name"
                class="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                {{ member.name }}
              </h3>
              <p class="text-petroleum-secondary font-medium mb-3">
                {{ member.position }}
              </p>
              <p class="text-gray-600 mb-4">
                {{ member.bio }}
              </p>
              <div class="flex space-x-3">
                <UButton 
                  v-if="member.linkedin"
                  :to="member.linkedin" 
                  target="_blank"
                  variant="ghost" 
                  size="sm"
                  class="text-petroleum-secondary hover:text-petroleum-accent"
                >
                  <UIcon name="lucide:linkedin" class="w-4 h-4" />
                </UButton>
                <UButton 
                  v-if="member.email"
                  :to="`mailto:${member.email}`" 
                  variant="ghost" 
                  size="sm"
                  class="text-petroleum-secondary hover:text-petroleum-accent"
                >
                  <UIcon name="lucide:mail" class="w-4 h-4" />
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-petroleum-primary text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to Partner With Us?
        </h2>
        <p class="text-lg mb-8 text-amber-100 max-w-2xl mx-auto">
          Discover how our expertise and commitment can help drive your business forward
        </p>
        <UButton 
          to="/contact" 
          size="lg" 
          class="bg-petroleum-gold text-petroleum-dark hover:bg-amber-400"
        >
          Get Started Today
        </UButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO Meta
useSeoMeta({
  title: 'About Us - YSA Ghana Limited',
  description: 'Learn about YSA Ghana Limited, our mission, vision, values, and the experienced team behind our professional consultancy services.',
  keywords: 'about YSA Ghana, company mission, vision, team, consultancy firm Ghana',
  ogTitle: 'About Us - YSA Ghana Limited',
  ogDescription: 'Learn about our mission, vision, and the experienced team behind YSA Ghana Limited.',
  ogType: 'website'
})

// Company data
const { companyInfo, teamMembers } = useCompanyData()
</script>
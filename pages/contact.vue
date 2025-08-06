<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-petroleum-hero text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p class="text-xl text-amber-100">
            Get in touch with our team to discuss your project requirements
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 bg-white text-gray-900">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <p class="text-gray-600 mb-8">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <UForm 
              :schema="contactSchema" 
              :state="form" 
              @submit="onSubmit"
              class="space-y-6 light-theme"
            >
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <UFormGroup label="Full Name" name="name" required>
                  <UInput 
                    v-model="form.name" 
                    placeholder="Your full name"
                    size="lg"
                  />
                </UFormGroup>

                <UFormGroup label="Email Address" name="email" required>
                  <UInput 
                    v-model="form.email" 
                    type="email"
                    placeholder="your.email@example.com"
                    size="lg"
                  />
                </UFormGroup>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <UFormGroup label="Phone Number" name="phone">
                  <UInput 
                    v-model="form.phone" 
                    type="tel"
                    placeholder="+233 XX XXX XXXX"
                    size="lg"
                  />
                </UFormGroup>

                <UFormGroup label="Company" name="company">
                  <UInput 
                    v-model="form.company" 
                    placeholder="Your company name"
                    size="lg"
                  />
                </UFormGroup>
              </div>

              <UFormGroup label="Service of Interest" name="service" required>
                <USelect 
                  v-model="form.service" 
                  :options="serviceOptions"
                  placeholder="Select a service"
                  size="lg"
                />
              </UFormGroup>

              <UFormGroup label="Message" name="message" required>
                <UTextarea 
                  v-model="form.message" 
                  placeholder="Tell us about your project requirements..."
                  :rows="6"
                  size="lg"
                />
              </UFormGroup>

              <UButton 
                type="submit" 
                size="lg" 
                :loading="isSubmitting"
                class="w-full bg-petroleum-secondary hover:bg-petroleum-accent text-white"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </UButton>
            </UForm>

            <!-- Success/Error Messages -->
            <UAlert 
              v-if="submitStatus === 'success'"
              color="green"
              variant="soft"
              title="Message Sent Successfully!"
              description="Thank you for contacting us. We'll get back to you within 24 hours."
              class="mt-6"
            />

            <UAlert 
              v-if="submitStatus === 'error'"
              color="red"
              variant="soft"
              title="Error Sending Message"
              description="There was an error sending your message. Please try again or contact us directly."
              class="mt-6"
            />
          </div>

          <!-- Contact Information -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p class="text-gray-600 mb-8">
              We're here to help you with your consultancy needs. Reach out to us through any of the following channels.
            </p>

            <div class="space-y-6">
              <!-- Address -->
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <div class="bg-amber-100 rounded-lg p-3">
                    <UIcon name="lucide:map-pin" class="w-6 h-6 text-petroleum-secondary" />
                  </div>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">
                    Office Address
                  </h3>
                  <p class="text-gray-600">
                    {{ companyInfo.address }}
                  </p>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <div class="bg-amber-100 rounded-lg p-3">
                    <UIcon name="lucide:phone" class="w-6 h-6 text-petroleum-secondary" />
                  </div>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">
                    Phone Number
                  </h3>
                  <p class="text-gray-600">
                    <a :href="`tel:${companyInfo.phone}`" class="hover:text-petroleum-secondary">
                      {{ companyInfo.phone }}
                    </a>
                  </p>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <div class="bg-amber-100 rounded-lg p-3">
                    <UIcon name="lucide:mail" class="w-6 h-6 text-petroleum-secondary" />
                  </div>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">
                    Email Address
                  </h3>
                  <p class="text-gray-600">
                    <a :href="`mailto:${companyInfo.email}`" class="hover:text-petroleum-secondary">
                      {{ companyInfo.email }}
                    </a>
                  </p>
                </div>
              </div>

              <!-- Business Hours -->
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <div class="bg-amber-100 rounded-lg p-3">
                    <UIcon name="lucide:clock" class="w-6 h-6 text-petroleum-secondary" />
                  </div>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">
                    Business Hours
                  </h3>
                  <div class="text-gray-600 space-y-1">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="mt-8">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">
                Follow Us
              </h3>
              <div class="flex space-x-4">
                <UButton 
                  v-if="companyInfo.socialMedia.linkedin"
                  :to="companyInfo.socialMedia.linkedin" 
                  target="_blank"
                  variant="outline" 
                  size="sm"
                  class="text-petroleum-secondary border-petroleum-secondary hover:bg-petroleum-secondary hover:text-white"
                >
                  <UIcon name="lucide:linkedin" class="w-4 h-4" />
                  LinkedIn
                </UButton>
                
                <UButton 
                  v-if="companyInfo.socialMedia.twitter"
                  :to="companyInfo.socialMedia.twitter" 
                  target="_blank"
                  variant="outline" 
                  size="sm"
                  class="text-petroleum-secondary border-petroleum-secondary hover:bg-petroleum-secondary hover:text-white"
                >
                  <UIcon name="lucide:twitter" class="w-4 h-4" />
                  Twitter
                </UButton>
                
                <UButton 
                  v-if="companyInfo.socialMedia.facebook"
                  :to="companyInfo.socialMedia.facebook" 
                  target="_blank"
                  variant="outline" 
                  size="sm"
                  class="text-petroleum-secondary border-petroleum-secondary hover:bg-petroleum-secondary hover:text-white"
                >
                  <UIcon name="lucide:facebook" class="w-4 h-4" />
                  Facebook
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Find Us
          </h2>
          <p class="text-lg text-gray-600">
            Visit our office in Accra, Ghana
          </p>
        </div>
        
        <!-- Placeholder for Google Map -->
        <div class="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
          <div class="text-center">
            <UIcon name="lucide:map-pin" class="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <p class="text-gray-600">
              Google Map integration will be added here
            </p>
            <p class="text-sm text-gray-500 mt-2">
              Location: {{ companyInfo.address }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { z } from 'zod'

// SEO Meta
useSeoMeta({
  title: 'Contact Us - YSA Ghana Limited',
  description: 'Get in touch with YSA Ghana Limited for professional consultancy services. Contact us for petroleum brokerage, project management, procurement, and business consultancy solutions.',
  keywords: 'contact YSA Ghana, consultancy contact, Ghana business contact, petroleum brokerage contact',
  ogTitle: 'Contact Us - YSA Ghana Limited',
  ogDescription: 'Get in touch with our professional consultancy team for your business needs.',
  ogType: 'website'
})

// Company data
const { companyInfo, services } = useCompanyData()

// Form schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

// Form state
const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: ''
})

// Service options for dropdown
const serviceOptions = [
  { label: 'Petroleum Brokerage', value: 'petroleum-brokerage' },
  { label: 'Project Management', value: 'project-management' },
  { label: 'Procurement Services', value: 'procurement' },
  { label: 'General Merchandise', value: 'general-merchandise' },
  { label: 'Business Consultancy', value: 'business-consultancy' },
  { label: 'General Inquiry', value: 'general' }
]

// Form submission state
const isSubmitting = ref(false)
const submitStatus = ref('idle')

// Form submission handler
async function onSubmit(event) {
  isSubmitting.value = true
  submitStatus.value = 'idle'

  try {
    // Simulate API call - replace with actual implementation
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Mock successful submission
    console.log('Form submitted:', event.data)
    
    submitStatus.value = 'success'
    
    // Reset form
    Object.keys(form).forEach(key => {
      form[key] = ''
    })
    
  } catch (error) {
    console.error('Form submission error:', error)
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>
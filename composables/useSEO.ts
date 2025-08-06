import type { SEOMeta } from '~/types'

export const useSEO = () => {
  const setSEO = (meta: SEOMeta) => {
    const config = useRuntimeConfig()
    
    useSeoMeta({
      title: meta.title,
      description: meta.description,
      keywords: meta.keywords,
      ogTitle: meta.title,
      ogDescription: meta.description,
      ogImage: meta.ogImage || '/images/og-default.jpg',
      ogUrl: config.public.siteUrl,
      twitterCard: 'summary_large_image',
      twitterTitle: meta.title,
      twitterDescription: meta.description,
      twitterImage: meta.ogImage || '/images/og-default.jpg'
    })
  }

  const setPageSEO = (pageName: string, customMeta?: Partial<SEOMeta>) => {
    const defaultMetas = {
      home: {
        title: 'YSA Ghana Limited - Professional Consultancy Services',
        description: 'Leading consultancy firm specializing in petroleum brokerage, project management, procurement, and general merchandise in Ghana.',
        keywords: 'petroleum brokerage, project management, procurement, general merchandise, consultancy, Ghana'
      },
      about: {
        title: 'About Us - YSA Ghana Limited',
        description: 'Learn about YSA Ghana Limited, our mission, vision, and the experienced team driving excellence in consultancy services.',
        keywords: 'about YSA Ghana, company profile, mission, vision, team, consultancy Ghana'
      },
      services: {
        title: 'Our Services - YSA Ghana Limited',
        description: 'Comprehensive consultancy services including petroleum brokerage, project management, procurement, and general merchandise.',
        keywords: 'consultancy services, petroleum brokerage, project management, procurement services, general merchandise'
      },
      contact: {
        title: 'Contact Us - YSA Ghana Limited',
        description: 'Get in touch with YSA Ghana Limited for professional consultancy services. Contact information and inquiry form.',
        keywords: 'contact YSA Ghana, consultancy inquiry, business contact, Ghana consultancy'
      }
    }

    const meta = { ...defaultMetas[pageName as keyof typeof defaultMetas], ...customMeta }
    setSEO(meta)
  }

  return {
    setSEO,
    setPageSEO
  }
}
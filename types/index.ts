// Type definitions for YSA Ghana Website

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  image?: string
}

export interface TeamMember {
  id: string
  name: string
  position: string
  bio: string
  image?: string
  linkedin?: string
  email?: string
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  company?: string
  service: string
  message: string
}

export interface CompanyInfo {
  name: string
  tagline: string
  description: string
  mission: string
  vision: string
  address: string
  phone: string
  email: string
  socialMedia: {
    linkedin?: string
    twitter?: string
    facebook?: string
  }
}

export interface NavigationItem {
  name: string
  href: string
  current?: boolean
}

export interface SEOMeta {
  title: string
  description: string
  keywords?: string
  ogImage?: string
}
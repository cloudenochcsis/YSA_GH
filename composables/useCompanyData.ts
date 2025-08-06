// Company data composable

export const useCompanyData = () => {
  const companyInfo = {
    name: 'YSA Ghana Limited',
    tagline: 'Professional Consultancy Services',
    description: 'YSA Ghana Limited is a leading consultancy firm specializing in petroleum brokerage, project management, procurement, general merchandise, and comprehensive business consultancy. We deliver exceptional value through innovative solutions and professional excellence.',
    mission: 'To provide world-class consultancy services that drive sustainable growth and success for our clients across various industries in Ghana and beyond.',
    vision: 'To be the most trusted and innovative consultancy firm in West Africa, setting industry standards for excellence and professionalism.',
    address: 'No. 58 Nile Street, Sowutuom - Nsunfa',
    postalAddress: 'P. O. Box AN 11909, Accra - North',
    phone: '+233500023697',
    phone2: '+233240214637',
    email: 'aboagye_y@yahoo.co.uk',
    socialMedia: {
      linkedin: 'https://linkedin.com/company/ysa-ghana',
      twitter: 'https://twitter.com/ysaghana',
      facebook: 'https://facebook.com/ysaghana'
    }
  }

  const services = [
    {
      id: 'petroleum-brokerage',
      title: 'Petroleum Brokerage',
      description: 'Expert petroleum trading and brokerage services connecting suppliers with buyers across the energy sector.',
      icon: 'lucide:fuel',
      features: [
        'Crude Oil Trading',
        'Refined Products Brokerage',
        'Market Analysis & Intelligence',
        'Risk Management Solutions',
        'Supply Chain Optimization',
        'Regulatory Compliance Support'
      ],
      image: '/images/petroleum.png'
    },
    {
      id: 'project-management',
      title: 'Project Management',
      description: 'Comprehensive project management services ensuring successful delivery of complex initiatives on time and within budget.',
      icon: 'lucide:clipboard-check',
      features: [
        'Project Planning & Scheduling',
        'Resource Management',
        'Risk Assessment & Mitigation',
        'Quality Assurance',
        'Stakeholder Management',
        'Performance Monitoring'
      ],
      image: '/images/project-management.png'
    },
    {
      id: 'procurement',
      title: 'Procurement Services',
      description: 'Strategic procurement solutions that optimize costs, ensure quality, and streamline supply chain operations.',
      icon: 'lucide:shopping-cart',
      features: [
        'Strategic Sourcing',
        'Vendor Management',
        'Contract Negotiation',
        'Supply Chain Optimization',
        'Cost Analysis & Reduction',
        'Compliance Management'
      ],
      image: '/images/procurement.png'
    },
    {
      id: 'general-merchandise',
      title: 'General Merchandise',
      description: 'Reliable trading and distribution of quality merchandise across various product categories and markets.',
      icon: 'lucide:package',
      features: [
        'Product Sourcing',
        'Quality Control',
        'Inventory Management',
        'Distribution Networks',
        'Market Research',
        'Customer Support'
      ],
      image: '/images/merchandise.png'
    },
    {
      id: 'business-consultancy',
      title: 'Business Consultancy',
      description: 'Strategic business advisory services to help organizations optimize operations, drive growth, and achieve sustainable success.',
      icon: 'lucide:briefcase',
      features: [
        'Business Strategy Development',
        'Market Entry & Expansion',
        'Operational Efficiency',
        'Financial Planning & Analysis',
        'Organizational Development',
        'Digital Transformation'
      ],
      image: '/images/business-consult.png'
    }
  ]

  const teamMembers = [
    {
      id: 'ceo',
      name: 'Yaw Sarpong Agyeman', // CEO's actual name
      position: 'Chief Executive Officer',
      bio: 'With over 15 years of experience in the energy sector, Yaw leads YSA Ghana with a vision for excellence and innovation.',
      image: '/images/chief exec.png',
      linkedin: 'https://linkedin.com/in/yawsarpongagyeman',
      email: 'yaw@ysaghana.com'
    },
    {
      id: 'coo',
      name: 'Kwame Ofori', // Replace with actual COO's name
      position: 'Chief Operating Officer',
      bio: 'With extensive experience in operations and management, Kwame ensures the smooth execution of all company projects and initiatives.',
      image: '/images/coo.png',
      linkedin: 'https://linkedin.com/in/kwameofori',
      email: 'kwame@ysaghana.com'
    }
    // Add more team members as needed
  ]

  return {
    companyInfo,
    services,
    teamMembers
  }
}
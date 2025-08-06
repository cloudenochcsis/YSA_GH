# YSA Ghana Limited - Professional Consultancy Website

A modern, responsive Single Page Application (SPA) built with Nuxt.js for YSA Ghana Limited, a consultancy firm specializing in petroleum brokerage, project management, procurement, and general merchandise.

## 🚀 Features

- **Modern Tech Stack**: Built with Nuxt.js 3, Vue.js 3, and TypeScript
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **SEO Optimized**: Server-side rendering with proper meta tags and structured data
- **Professional UI**: Clean, modern design using Nuxt UI and Tailwind CSS
- **Accessibility**: WCAG compliant with proper ARIA roles and keyboard navigation
- **Performance**: Optimized images, lazy loading, and efficient code splitting
- **Contact Form**: Functional contact form with validation using Zod

## 🛠️ Tech Stack

- **Framework**: Nuxt.js 3
- **Frontend**: Vue.js 3 with Composition API
- **Language**: TypeScript
- **Styling**: Tailwind CSS via Nuxt UI
- **Icons**: Lucide Icons via Nuxt Icon
- **Images**: Nuxt Image for optimization
- **Forms**: Nuxt UI Forms with Zod validation
- **State Management**: Pinia (if needed)
- **Utilities**: VueUse

## 📁 Project Structure

```
ysa-ghana-website/
├── assets/
│   └── css/
│       └── main.css          # Custom styles
├── components/
│   ├── AppHeader.vue         # Navigation header
│   └── AppFooter.vue         # Site footer
├── composables/
│   └── useCompanyData.ts     # Company data composable
├── layouts/
│   └── default.vue           # Default layout
├── pages/
│   ├── index.vue             # Home page
│   ├── about.vue             # About page
│   ├── services.vue          # Services page
│   ├── contact.vue           # Contact page
│   └── 404.vue               # Error page
├── public/
│   └── images/               # Static images
├── types/
│   └── index.ts              # TypeScript definitions
├── nuxt.config.ts            # Nuxt configuration
└── package.json              # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ysa-ghana-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization

### Company Information

Update company details in `composables/useCompanyData.ts`:

```typescript
const companyInfo: CompanyInfo = {
  name: 'YSA Ghana Limited',
  tagline: 'Professional Consultancy Services',
  description: '...',
  // Update with actual contact information
  address: 'Your actual address',
  phone: '+233 XX XXX XXXX',
  email: 'info@ysaghana.com',
  // Add social media links
  socialMedia: {
    linkedin: 'https://linkedin.com/company/ysa-ghana',
    twitter: 'https://twitter.com/ysaghana',
    facebook: 'https://facebook.com/ysaghana'
  }
}
```

### Images

Add your images to the `public/images/` directory:

- `petroleum-brokerage.jpg` - Petroleum brokerage service image
- `project-management.jpg` - Project management service image
- `procurement.jpg` - Procurement service image
- `general-merchandise.jpg` - General merchandise service image
- `about-company.jpg` - Company overview image
- `why-choose-us.jpg` - Why choose us section image
- `team/ceo.jpg` - CEO photo
- `team/coo.jpg` - COO photo
- Add more team member photos as needed

### Styling

- Main styles: `assets/css/main.css`
- Tailwind configuration: Built into Nuxt UI
- Custom components use Tailwind classes

### Environment Variables

Create a `.env` file for configuration:

```env
SITE_URL=https://ysaghana.com
CONTACT_EMAIL=info@ysaghana.com
CONTACT_PHONE=+233 XX XXX XXXX
EMAIL_API_KEY=your-email-service-api-key
```

## 🌐 Deployment

### Static Generation

For static hosting (Netlify, Vercel, GitHub Pages):

```bash
npm run generate
```

### Server-Side Rendering

For SSR deployment:

```bash
npm run build
```

### Environment Setup

1. Set up environment variables on your hosting platform
2. Configure your domain and SSL certificate
3. Set up email service for contact form (optional)

## 📧 Contact Form Integration

The contact form is currently set up with client-side validation. To make it functional:

1. Set up an email service (EmailJS, Formspree, or custom API)
2. Update the form submission handler in `pages/contact.vue`
3. Add your API endpoint to environment variables

Example integration with EmailJS:

```typescript
// Install EmailJS
npm install @emailjs/browser

// Update contact.vue
import emailjs from '@emailjs/browser'

async function onSubmit(event: FormSubmitEvent<ContactForm>) {
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      event.data,
      'YOUR_PUBLIC_KEY'
    )
    submitStatus.value = 'success'
  } catch (error) {
    submitStatus.value = 'error'
  }
}
```

## 🔧 Configuration

### SEO Configuration

Update meta tags in `nuxt.config.ts` and individual pages for better SEO.

### Performance Optimization

- Images are automatically optimized with Nuxt Image
- Code splitting is handled by Nuxt
- CSS is purged in production
- Lazy loading is implemented for images

## 🧪 Testing

Add testing with Vitest (optional):

```bash
npm install -D @nuxt/test-utils vitest
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to YSA Ghana Limited.

## 📞 Support

For technical support or questions about this website:

- Email: [your-email@example.com]
- Phone: [your-phone-number]

---

Built with ❤️ using Nuxt.js and modern web technologies.
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

- **Node.js 18+** (Download from [nodejs.org](https://nodejs.org/))
- **npm** (comes with Node.js) or **yarn**
- **Git** (Download from [git-scm.com](https://git-scm.com/))

### Installation

#### For Windows Users:

1. **Install Node.js:**
   - Download and install Node.js from [nodejs.org](https://nodejs.org/)
   - Choose the LTS version (recommended)
   - Verify installation by opening Command Prompt or PowerShell and running:
   ```cmd
   node --version
   npm --version
   ```

2. **Install Git:**
   - Download Git from [git-scm.com](https://git-scm.com/)
   - During installation, choose "Git Bash" and "Git from the command line"

3. **Clone the repository:**
   ```cmd
   git clone git@github.com:cloudenochcsis/YSA_GH.git
   cd YSA_GH
   ```

4. **Install dependencies:**
   ```cmd
   npm install
   ```
   
   If you encounter permission issues, try:
   ```cmd
   npm install --legacy-peer-deps
   ```

5. **Start the development server:**
   ```cmd
   npm run dev
   ```

6. **Open your browser and visit:** `http://localhost:3000`

#### For macOS/Linux Users:

1. Clone the repository:
```bash
git clone git@github.com:cloudenochcsis/YSA_GH.git
cd YSA_GH
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

### Development
- `npm run dev` - Start development server (Windows: `npm run dev`)
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build

### Code Quality
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking

### Windows-Specific Notes:
- Use **Command Prompt**, **PowerShell**, or **Git Bash** as your terminal
- If you encounter `EACCES` permission errors, try running as Administrator
- For path issues, use forward slashes `/` or double backslashes `\\`

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

## � Doncker Setup

### Prerequisites for Docker:
- **Docker Desktop** (Windows/Mac) or **Docker Engine** (Linux)
- Download from [docker.com](https://www.docker.com/products/docker-desktop/)

### Quick Start with Docker:

#### Development Mode:
```bash
# Build and run development container
docker-compose up ysa-ghana-dev

# Or using Docker directly
docker build -f Dockerfile.dev -t ysa-ghana:dev .
docker run -p 3000:3000 -v $(pwd):/app ysa-ghana:dev
```

#### Production Mode:
```bash
# Build and run production container
docker-compose --profile production up ysa-ghana-prod

# Or using Docker directly
docker build -t ysa-ghana:latest .
docker run -p 3000:3000 ysa-ghana:latest
```

### Docker Scripts (Linux/Mac):
```bash
# Build both images
./docker-scripts/build.sh

# Run development server
./docker-scripts/run-dev.sh

# Run production server
./docker-scripts/run-prod.sh
```

### Docker Commands:
```bash
# Build development image
docker build -f Dockerfile.dev -t ysa-ghana:dev .

# Build production image
docker build -t ysa-ghana:latest .

# Run development (with hot reload)
docker run -p 3000:3000 -v $(pwd):/app ysa-ghana:dev

# Run production
docker run -p 3000:3000 ysa-ghana:latest

# Using docker-compose
docker-compose up ysa-ghana-dev     # Development
docker-compose --profile production up ysa-ghana-prod  # Production
```

### Docker Environment Variables:
- `NODE_ENV` - Set to 'development' or 'production'
- `NUXT_HOST` - Host binding (default: 0.0.0.0)
- `NUXT_PORT` - Port number (default: 3000)

## 🔧 Windows Troubleshooting

### Common Issues and Solutions:

1. **Node.js Installation Issues:**
   ```cmd
   # Check if Node.js is properly installed
   node --version
   npm --version
   
   # If not found, add Node.js to PATH or reinstall
   ```

2. **Permission Errors:**
   ```cmd
   # Try installing with legacy peer deps
   npm install --legacy-peer-deps
   
   # Or run as Administrator
   # Right-click Command Prompt → "Run as administrator"
   ```

3. **Port Already in Use:**
   ```cmd
   # If port 3000 is busy, kill the process
   netstat -ano | findstr :3000
   taskkill /PID <PID_NUMBER> /F
   
   # Or use a different port
   npm run dev -- --port 3001
   ```

4. **Git SSH Issues:**
   ```cmd
   # If SSH doesn't work, use HTTPS instead
   git clone https://github.com/cloudenochcsis/YSA_GH.git
   ```

5. **Path Issues:**
   - Use forward slashes `/` in file paths
   - Or escape backslashes `\\` in Windows paths
   - Consider using Git Bash for better Unix-like experience

### Recommended Windows Setup:
- **Terminal**: Git Bash or Windows Terminal
- **Editor**: VS Code with Vue.js extensions
- **Node Version Manager**: Use `nvm-windows` for managing Node.js versions

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
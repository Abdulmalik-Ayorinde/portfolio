# Abdulmalik Ayorinde - Portfolio V2

A bold, brutalist/editorial style portfolio showcasing my work as a Full Stack Software Engineer.

## 🎨 Design Philosophy

This portfolio breaks away from typical developer portfolios with:

- **Brutalist Aesthetic**: Bold borders, high contrast, geometric shapes
- **Editorial Layout**: Magazine-inspired typography and spacing
- **Distinctive Fonts**: Archivo Black, Work Sans, Courier Prime
- **Color Palette**: Yellow (#F5E847), Red (#FF4646), Blue (#4D96FF) on neutral base
- **No Gradients**: Solid colors with strong visual hierarchy
- **Stacking Effects**: Layered elements for depth
- **Animated Marquee**: Tech stack scrolling banner


## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS (proper npm install, no CDN)
- **Language**: TypeScript
- **Fonts**: Archivo Black, Work Sans, Courier Prime
- **Deployment**: Vercel-ready

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000)

## 📂 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx      # Root layout with fonts
│   ├── page.tsx        # Main portfolio page
│   └── globals.css     # Tailwind + custom styles
├── public/             # Static assets
├── tailwind.config.ts  # Tailwind configuration
├── tsconfig.json       # TypeScript config
└── package.json        # Dependencies
```

## 🎯 Customization

### Update Personal Info

Edit `app/page.tsx`:
- Line 8-147: Projects array (add/remove/edit projects)
- Hero section: Name, tagline, description
- About section: Bio, experience, education
- Skills section: Technologies and years
- Contact section: Email, phone, social links

### Modify Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  accent: {
    yellow: '#F5E847',  // Primary accent
    red: '#FF4646',     // Secondary accent
    blue: '#4D96FF',    // Tertiary accent
  },
}
```

### Change Fonts

Edit `app/layout.tsx` - swap Google Fonts imports

### Add New Projects

In `app/page.tsx`, add to projects array:
```typescript
{
  id: 13,
  title: 'Project Name',
  category: 'Web App',
  year: '2025',
  description: 'Full description...',
  tech: ['React', 'Node.js'],
  link: 'https://...',  // Optional
  impact: ['Metric 1', 'Metric 2'],
  type: 'web',  // 'web', 'mobile', or 'other'
}
```

<!-- ## 📱 All Projects Included

1. **NYC Real Estate CRM** - Web application with daily property sync
2. **Rentzen** - Mobile app for landlord-renter management
3. **Restaurant Management System** - POS with ₦100M+ processed
4. **Panthera Tech School LMS** - Learning platform (100+ students)
5. **Facial Recognition Attendance** - Biometric tracking (70-95% accuracy)
6. **Dertbag** - E-commerce mobile app (500+ products)
7. **Abia OneID Authenticator** - Government ID verification -->
<!-- 8. **Dertbag Delivery App** - Logistics management -->
<!-- 9. **U.S. Crop Analytics** - Data visualization platform -->
<!-- 10. **Panticket Event Booking** - Multi-tier ticketing system -->
<!-- 11. **Jitsi Video Conferencing** - Remote learning solution -->
<!-- 12. **WhatsApp Support Bot** - Automated student support -->

## 🎨 Design Elements

### Brutalist Features
- 3-5px thick borders everywhere
- Hard shadows (no blur)
- Stacking card effects
- Sharp corners (no border-radius)
- High contrast typography
- Geometric shapes as decoration

### Interactive Elements
- Hover lift effects on project cards
- Animated tech stack marquee
- Filter buttons with state
- Active link indicators
- Smooth scroll navigation

## 📄 SEO & Metadata

Update in `app/layout.tsx`:
- Title and description
- Keywords array
- Open Graph tags

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import to Vercel
3. Auto-deploys on push
4. Custom domain in settings

### Netlify
1. Push to GitHub
2. New site from Git
3. Build: `npm run build`
4. Publish: `.next`

### Other Platforms
See full deployment guide in project

## 🎯 Performance

- **First Load**: ~100kb
- **Lighthouse Score**: 95+
- **Mobile Optimized**: Yes
- **Fast Refresh**: Enabled

## 🤝 Connect

- **Email**: ayorindeabdulmalik@gmail.com
- **Phone**: +234 806 140 3875
- **LinkedIn**: [linkedin.com/in/abdulmalik-ayorinde](https://linkedin.com/in/abdulmalik-ayorinde)
- **GitHub**: [github.com/Abdulmalik-Ayorinde](https://github.com/Abdulmalik-Ayorinde)

## 📝 License

© 2025 Abdulmalik Ayorinde. All rights reserved.

---

**Portfolio Design**: Brutalist/Editorial style
**Built by**: Abdulmalik Ayorinde
**Stack**: Next.js 14 + Tailwind CSS + TypeScript

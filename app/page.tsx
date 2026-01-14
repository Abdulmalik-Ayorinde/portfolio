'use client'

import { useState } from 'react'
import ThemeToggle from './components/ThemeToggle'

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'NYC Real Estate CRM',
      category: 'Web App',
      year: '2025',
      description: 'Comprehensive CRM platform for NYC real estate professionals managing buyer, seller, renter, and landlord lifecycles. Features daily property data synchronization across all NYC listings for automated client-property matching.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'RESTful APIs'],
      impact: ['Daily NYC property sync', 'Multi-role management', 'Automated matching'],
      type: 'web',
    },
    {
      id: 2,
      title: 'Rentzen',
      category: 'Mobile App',
      year: '2022-2025',
      description: 'Real estate management platform connecting landlords with renters. Manages complete rental lifecycle from property inspection to lease management and rent collection. Led 4-person development team.',
      tech: ['React Native', 'Node.js', 'Stripe', 'PostgreSQL'],
      link: 'https://apps.apple.com/us/app/rentzen/id6740734022',
      impact: ['iOS/Android', 'Payment integration', 'Team leadership'],
      type: 'mobile',
    },
    {
      id: 3,
      title: 'Restaurant Management System',
      category: 'Web App',
      year: '2022-2025',
      description: 'Comprehensive POS and management platform for restaurant chain in Abuja. Features real-time sales tracking, inventory management, automated receipt printing, and analytics dashboard. Led 2-person frontend team.',
      tech: ['React', 'Context API', 'Express.js', 'Node.js', 'PostgreSQL'],
      impact: ['₦100M+ processed', '30min saved daily', 'Real-time analytics'],
      type: 'web',
    },
    {
      id: 4,
      title: 'Panthera Tech School LMS',
      category: 'Learning Platform',
      year: '2021-2025',
      description: 'Complete learning management system serving 100+ students and 10-15 instructors. Manages course enrollment, live video classes (Jitsi), payment processing (Paystack), and automated certificate generation. SEO-optimized for student acquisition.',
      tech: ['Next.js', 'React', 'Jitsi', 'Paystack', 'PostgreSQL'],
      link: 'https://pantheratechschool.com',
      impact: ['100+ students', 'Live classes', 'Auto certificates', '5-10hrs saved monthly'],
      type: 'web',
    },
    // {
    //   id: 5,
    //   title: 'Facial Recognition Attendance',
    //   category: 'Mobile App',
    //   year: '2022-2025',
    //   description: 'Biometric attendance tracking system using FaceIO integration achieving 70-95% accuracy rate. Successfully deployed to production for client workforce management with GDPR-compliant data privacy.',
    //   tech: ['React Native', 'FaceIO API', 'Node.js', 'Express.js'],
    //   impact: ['70-95% accuracy', '10-30min saved daily', '100+ employees'],
    //   type: 'mobile',
    // },
    {
      id: 6,
      title: 'Dertbag',
      category: 'Mobile App',
      year: '2022-2025',
      description: 'Cross-platform mobile app connecting Shopify stores to native iOS experience. Enables seamless product browsing and in-app purchases for 500+ products. Developed proxy server architecture for real-time product data synchronization.',
      tech: ['React Native', 'Node.js', 'Shopify API', 'iOS'],
      link: 'https://apps.apple.com/ng/app/dertbag/id6480380013',
      impact: ['500+ products', '40% performance boost', 'Real-time sync'],
      type: 'mobile',
    },
    {
      id: 7,
      title: 'Abia OneID Authenticator',
      category: 'Mobile App',
      year: '2022-2025',
      description: 'Authentication system for Abia state government providing secure identity verification for citizens. Built native iOS application with robust security features.',
      tech: ['React Native', 'Node.js', 'iOS'],
      link: 'https://apps.apple.com/us/app/abia-oneid-authenticator/id6475302978',
      impact: ['Government deployment', 'Secure authentication', 'App Store published'],
      type: 'mobile',
    },
    // {
    //   id: 8,
    //   title: 'Dertbag Delivery App',
    //   category: 'Mobile App',
    //   year: '2022-2025',
    //   description: 'Delivery management application streamlining logistics operations. Features order tracking, route optimization, and real-time updates.',
    //   tech: ['React Native', 'Node.js', 'iOS'],
    //   link: 'https://apps.apple.com/ng/app/dertbag/id6480380013',
    //   impact: ['Order tracking', 'Route optimization', 'Real-time updates'],
    //   type: 'mobile',
    // },
    {
      id: 9,
      title: 'U.S. Crop Analytics Platform',
      category: 'Data Visualization',
      year: '2025',
      description: 'Interactive data visualization platform for exploring U.S. crop acreage and production trends using USDA Cropland Data Layer. Enables production trend analysis and yield forecasting for agricultural planning.',
      tech: ['React', 'Next.js', 'Data Viz Libraries', 'USDA API'],
      impact: ['Predictive insights', 'Trend visualization', 'Agricultural planning'],
      type: 'web',
    },
    // {
    //   id: 10,
    //   title: 'Panticket Event Booking',
    //   category: 'Web App',
    //   year: '2021-2025',
    //   description: 'Scalable Node.js/MongoDB backend for event booking platform supporting multiple ticket tiers (regular, premium, royalty). Designed with database-first architecture as educational framework for bootcamp curriculum.',
    //   tech: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs'],
    //   impact: ['Multiple ticket tiers', 'Educational framework', 'Production-ready'],
    //   type: 'web',
    // },
    {
      id: 11,
      title: 'Jitsi Video Conferencing App',
      category: 'Web App',
      year: '2021-2025',
      description: 'Web-based video conferencing application powered by Jitsi for remote learning sessions at Panthera Tech School. Enabled seamless virtual classroom experience.',
      tech: ['React', 'Jitsi', 'WebRTC'],
      impact: ['Remote learning', 'Live sessions', 'Virtual classrooms'],
      type: 'web',
    },
    {
      id: 12,
      title: 'WhatsApp Support Bot',
      category: 'Bot',
      year: '2021-2025',
      description: 'Automated WhatsApp chatbot for student support and course information delivery at Panthera Tech School. Handles frequently asked questions and provides instant responses.',
      tech: ['Node.js', 'web.whatsApp API'],
      impact: ['Automated support', 'Instant responses', 'Student engagement'],
      type: 'other',
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.type === activeFilter)

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b-4 border-neutral-950 dark:border-neutral-700 bg-white dark:bg-neutral-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="font-display text-2xl">
            AA<span className="text-accent-yellow dark:text-accent-yellow-muted">_</span>
          </div>
          <nav className="hidden md:flex gap-8 font-mono text-sm uppercase tracking-wider">
            <a href="#work" className="hover:text-accent-red dark:hover:text-accent-red-muted transition-colors">Work</a>
            <a href="#about" className="hover:text-accent-red dark:hover:text-accent-red-muted transition-colors">About</a>
            <a href="#contact" className="hover:text-accent-red dark:hover:text-accent-red-muted transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a href="mailto:ayorindeabdulmalik@gmail.com" className="font-mono text-sm hover:text-accent-blue dark:hover:text-accent-blue-muted transition-colors">
              Email
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b-4 border-neutral-950 dark:border-neutral-700 bg-accent-yellow dark:bg-accent-yellow-muted relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-32 md:py-48">
          <div className="max-w-4xl">
            <div className="font-mono text-sm uppercase tracking-wider mb-4 flex items-center gap-4">
              <span className="w-12 h-1 bg-neutral-950 dark:bg-neutral-950"></span>
              Full Stack Engineer
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none mb-8">
              ABDULMALIK<br />
              AYORINDE
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed">
              Building scalable SaaS applications and management systems.
              5+ years of experience. 300+ students trained. 12+ production apps shipped.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#work" className="btn-brutalist">
                View Work
              </a>
              <a
                href="/mnt/user-data/outputs/Abdulmalik_Ayorinde_CV_2025_Condensed.pdf"
                download
                className="px-8 py-4 bg-white dark:bg-neutral-800 border-4 border-neutral-950 dark:border-neutral-50 font-display uppercase text-sm tracking-wider hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-8 right-8 w-24 h-24 border-4 border-neutral-950 dark:border-neutral-50 rotate-12 hidden lg:block"></div>
        <div className="absolute bottom-8 right-32 w-32 h-32 bg-accent-red dark:bg-accent-red-muted border-4 border-neutral-950 dark:border-neutral-50 -rotate-6 hidden lg:block"></div>
      </section>

      {/* Marquee */}
      <div className="border-b-4 border-neutral-950 dark:border-neutral-700 bg-neutral-950 text-accent-yellow dark:text-accent-yellow-muted py-6 overflow-hidden">
        <div className="marquee">
          <div className="marquee-content">
            <span className="font-display text-3xl whitespace-nowrap">REACT • NODE.JS • TYPESCRIPT • REACT NATIVE • NEXT.JS • POSTGRESQL • MONGODB • EXPRESS.JS • </span>
          </div>
          <div className="marquee-content" aria-hidden="true">
            <span className="font-display text-3xl whitespace-nowrap">REACT • NODE.JS • TYPESCRIPT • REACT NATIVE • NEXT.JS • POSTGRESQL • MONGODB • EXPRESS.JS • </span>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="border-b-4 border-neutral-950 dark:border-neutral-700 bg-white dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-display text-5xl md:text-6xl text-accent-red dark:text-accent-red-muted mb-2">5+</div>
              <div className="font-mono text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="font-display text-5xl md:text-6xl text-accent-blue dark:text-accent-blue-muted mb-2">12+</div>
              <div className="font-mono text-sm uppercase tracking-wider">Projects Shipped</div>
            </div>
            <div className="text-center">
              <div className="font-display text-5xl md:text-6xl text-accent-yellow dark:text-accent-yellow-muted mb-2">300+</div>
              <div className="font-mono text-sm uppercase tracking-wider">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="font-display text-5xl md:text-6xl text-accent-red dark:text-accent-red-muted mb-2">100M+</div>
              <div className="font-mono text-sm uppercase tracking-wider">₦ Processed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="border-b-4 border-neutral-950 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="mb-16">
            <h2 className="font-display text-5xl md:text-7xl mb-8">SELECTED WORK</h2>

            {/* Filter */}
            <div className="flex flex-wrap gap-4 font-mono text-sm uppercase tracking-wider">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-6 py-3 border-3 border-neutral-950 dark:border-neutral-300 transition-colors ${
                  activeFilter === 'all' ? 'bg-neutral-950 dark:bg-neutral-50 text-white dark:text-neutral-950' : 'bg-white dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600'
                }`}
              >
                All ({projects.length})
              </button>
              <button
                onClick={() => setActiveFilter('web')}
                className={`px-6 py-3 border-3 border-neutral-950 dark:border-neutral-300 transition-colors ${
                  activeFilter === 'web' ? 'bg-neutral-950 dark:bg-neutral-50 text-white dark:text-neutral-950' : 'bg-white dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600'
                }`}
              >
                Web ({projects.filter(p => p.type === 'web').length})
              </button>
              <button
                onClick={() => setActiveFilter('mobile')}
                className={`px-6 py-3 border-3 border-neutral-950 dark:border-neutral-300 transition-colors ${
                  activeFilter === 'mobile' ? 'bg-neutral-950 dark:bg-neutral-50 text-white dark:text-neutral-950' : 'bg-white dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600'
                }`}
              >
                Mobile ({projects.filter(p => p.type === 'mobile').length})
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="stack-effect bg-white dark:bg-neutral-800 border-3 border-neutral-950 dark:border-neutral-300 p-8 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider bg-accent-yellow dark:bg-accent-yellow-muted px-3 py-1">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
                    {project.year}
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl mb-4 leading-tight">
                  {project.title}
                </h3>

                <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Impact metrics */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.impact.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 font-mono text-xs">
                      {item}
                    </span>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 border-2 border-neutral-950 dark:border-neutral-300 font-mono text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-sm hover:text-accent-blue dark:hover:text-accent-blue-muted transition-colors"
                  >
                    View Project →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-b-4 border-neutral-950 dark:border-neutral-700 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-5xl md:text-7xl mb-12">ABOUT ME</h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  I'm a <strong>Full Stack Software Engineer</strong> with 5+ years of experience building production-grade applications that solve real business problems.
                </p>
                <p>
                  My expertise lies in the <strong>React/Node.js ecosystem</strong>, where I've architected everything from restaurant management systems processing ₦100M+ in transactions to real estate platforms connecting thousands of users.
                </p>
                <p>
                  Beyond coding, I'm passionate about <strong>education and mentorship</strong>. As Lead Bootcamp Instructor at Panthera Tech School, I designed curriculum and trained 300+ students, achieving 50+ job placements across Nigerian tech companies.
                </p>
                <p>
                  I thrive in <strong>leadership roles</strong> - whether leading development teams, establishing agile workflows, or conducting code reviews to maintain quality standards.
                </p>
                <p className="font-display text-xl">
                  Currently freelancing and actively seeking full-time opportunities where I can contribute to building impactful products.
                </p>
              </div>
            </div>

            <div>
              <div className="border-4 border-neutral-950 dark:border-neutral-300 bg-accent-yellow dark:bg-accent-yellow-muted p-8 mb-8">
                <h3 className="font-display text-2xl mb-6">EXPERIENCE</h3>
                <div className="space-y-6 font-mono text-sm">
                  <div>
                    <div className="font-bold mb-1">Freelance Full Stack Developer</div>
                    <div className="text-neutral-700 dark:text-neutral-900">Jan 2025 - Present</div>
                  </div>
                  <div>
                    <div className="font-bold mb-1">Full Stack Engineer • Megastack Tech</div>
                    <div className="text-neutral-700 dark:text-neutral-900">Jan 2022 - Jan 2025</div>
                  </div>
                  <div>
                    <div className="font-bold mb-1">Lead Instructor • Panthera Tech</div>
                    <div className="text-neutral-700 dark:text-neutral-900">Jan 2021 - Jan 2025</div>
                  </div>
                  <div>
                    <div className="font-bold mb-1">Frontend Engineer • SuccessTrend</div>
                    <div className="text-neutral-700 dark:text-neutral-900">Mar 2019 - Feb 2021</div>
                  </div>
                </div>
              </div>

              <div className="border-4 border-neutral-950 dark:border-neutral-300 bg-white dark:bg-neutral-800 p-8">
                <h3 className="font-display text-2xl mb-6">EDUCATION</h3>
                <div className="font-mono text-sm">
                  <div className="font-bold mb-1">B.Sc. Computer Science</div>
                  <div className="text-neutral-700 dark:text-neutral-300 mb-2">Tai Solarin University, 2024</div>
                  <div className="text-neutral-700 dark:text-neutral-300">Second Class Upper</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="border-b-4 border-neutral-950 dark:border-neutral-700 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <h2 className="font-display text-5xl md:text-7xl mb-16 text-accent-yellow dark:text-accent-yellow-muted">SKILLS & TECH</h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-display text-2xl mb-6 text-accent-yellow dark:text-accent-yellow-muted">FRONTEND</h3>
              <ul className="space-y-3 font-mono text-sm">
                <li className="flex justify-between"><span>React</span><span className="text-neutral-400 dark:text-neutral-500">5yr</span></li>
                <li className="flex justify-between"><span>Next.js</span><span className="text-neutral-400 dark:text-neutral-500">5yr</span></li>
                <li className="flex justify-between"><span>TypeScript</span><span className="text-neutral-400 dark:text-neutral-500">5yr</span></li>
                <li className="flex justify-between"><span>React Native</span><span className="text-neutral-400 dark:text-neutral-500">5yr</span></li>
                <li className="flex justify-between"><span>Tailwind CSS</span><span className="text-neutral-400 dark:text-neutral-500">4yr</span></li>
                <li className="flex justify-between"><span>HTML5/CSS3</span><span className="text-neutral-400 dark:text-neutral-500">5yr</span></li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-2xl mb-6 text-accent-yellow dark:text-accent-yellow-muted">BACKEND</h3>
              <ul className="space-y-3 font-mono text-sm">
                <li className="flex justify-between"><span>Node.js</span><span className="text-neutral-400 dark:text-neutral-500">5yr</span></li>
                <li className="flex justify-between"><span>Express.js</span><span className="text-neutral-400 dark:text-neutral-500">5yr</span></li>
                <li className="flex justify-between"><span>NestJS</span><span className="text-neutral-400 dark:text-neutral-500">3yr</span></li>
                <li className="flex justify-between"><span>PostgreSQL</span><span className="text-neutral-400 dark:text-neutral-500">5yr</span></li>
                <li className="flex justify-between"><span>MongoDB</span><span className="text-neutral-400 dark:text-neutral-500">5yr</span></li>
                <li className="flex justify-between"><span>RESTful APIs</span><span className="text-neutral-400 dark:text-neutral-500">5yr</span></li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-2xl mb-6 text-accent-yellow dark:text-accent-yellow-muted">TOOLS & MORE</h3>
              <ul className="space-y-3 font-mono text-sm">
                <li className="flex justify-between"><span>Git/GitHub</span><span className="text-neutral-400 dark:text-neutral-500">5yr</span></li>
                <li className="flex justify-between"><span>Docker</span><span className="text-neutral-400 dark:text-neutral-500">3yr</span></li>
                <li className="flex justify-between"><span>CI/CD</span><span className="text-neutral-400 dark:text-neutral-500">3yr</span></li>
                <li className="flex justify-between"><span>Stripe/Paystack</span><span className="text-neutral-400 dark:text-neutral-500">4yr</span></li>
                <li className="flex justify-between"><span>Agile/Scrum</span><span className="text-neutral-400 dark:text-neutral-500">5yr</span></li>
                <li className="flex justify-between"><span>AWS (learning)</span><span className="text-neutral-400 dark:text-neutral-500">—</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-b-4 border-neutral-950 dark:border-neutral-700 bg-accent-red dark:bg-accent-red-muted text-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-4xl">
            <h2 className="font-display text-5xl md:text-7xl mb-8">LET'S WORK TOGETHER</h2>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a project in mind, need a technical consultant, or just want to connect.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="border-4 border-white dark:border-neutral-300 bg-neutral-950 dark:bg-neutral-900 p-8">
                <div className="font-mono text-sm uppercase tracking-wider mb-4 opacity-70">Email</div>
                <a href="mailto:ayorindeabdulmalik@gmail.com" className="font-display text-xl hover:text-accent-yellow dark:hover:text-accent-yellow-muted transition-colors break-all">
                  ayorindeabdulmalik@gmail.com
                </a>
              </div>

              <div className="border-4 border-white dark:border-neutral-300 bg-neutral-950 dark:bg-neutral-900 p-8">
                <div className="font-mono text-sm uppercase tracking-wider mb-4 opacity-70">Phone</div>
                <a href="tel:+2348061403875" className="font-display text-xl hover:text-accent-yellow dark:hover:text-accent-yellow-muted transition-colors">
                  +234 806 140 3875
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Abdulmalik-Ayorinde"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white dark:bg-neutral-800 text-neutral-950 dark:text-neutral-50 border-4 border-white dark:border-neutral-300 font-display uppercase text-sm tracking-wider hover:bg-accent-yellow dark:hover:bg-accent-yellow-muted transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/abdulmalik-ayorinde"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white dark:bg-neutral-800 text-neutral-950 dark:text-neutral-50 border-4 border-white dark:border-neutral-300 font-display uppercase text-sm tracking-wider hover:bg-accent-yellow dark:hover:bg-accent-yellow-muted transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 dark:bg-neutral-900 text-white border-t-4 border-white dark:border-neutral-700">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-mono text-sm">
              © 2025 Abdulmalik Ayorinde. Lagos, Nigeria.
            </div>
            <div className="font-mono text-sm text-neutral-400 dark:text-neutral-500">
              Built with Next.js & Tailwind CSS
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

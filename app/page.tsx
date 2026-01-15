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
      description: 'Authentication system for Abia state government providing secure identity verification for staffs. Built native iOS application with robust security features.',
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
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="glass-effect border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Abdulmalik Ayorinde
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">
              Projects
            </a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">
              Contact
            </a>
            <ThemeToggle />
            <a
              href="mailto:ayorindeabdulmalik@gmail.com"
              className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-200"
            >
              Hire Me
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-900 dark:to-primary-900/20"></div>

        {/* Animated circles */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary-200/30 dark:bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-300/20 dark:bg-primary-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">Available for hire</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="gradient-text">Abdulmalik</span>
              <br />
              <span className="text-gray-900 dark:text-white">Full Stack Engineer</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl">
              I build scalable SaaS applications and management systems that solve real business problems.
              <span className="font-semibold text-gray-900 dark:text-white"> 5+ years of experience</span>,
              <span className="font-semibold text-gray-900 dark:text-white"> 300+ students trained</span>,
              <span className="font-semibold text-gray-900 dark:text-white"> 12+ production apps shipped</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#work" className="btn-primary inline-flex items-center gap-2">
                View My Work
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="/Abdulmalik_Ayorinde_CV_2026.pdf" download className="btn-secondary">
                Download Resume
              </a>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-1">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-1">12+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-1">300+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Students Trained</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 bg-white dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">TECHNOLOGIES I WORK WITH</p>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'React Native', 'PostgreSQL', 'MongoDB', 'Express.js', 'Tailwind CSS'].map((tech) => (
              <div key={tech} className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 font-medium text-sm">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A selection of my recent work building production-ready applications for clients and businesses
            </p>
          </div>

          {/* Filter */}
          <div className="flex justify-center flex-wrap gap-3 mb-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === 'all'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('web')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === 'web'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
            >
              Web Apps ({projects.filter(p => p.type === 'web').length})
            </button>
            <button
              onClick={() => setActiveFilter('mobile')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === 'mobile'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
            >
              Mobile Apps ({projects.filter(p => p.type === 'mobile').length})
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="project-card group p-8"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Impact metrics */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.impact.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm">
                      {item}
                    </span>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    View Live Project
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate about building scalable solutions and mentoring the next generation of developers
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              <p>
                I'm a <strong className="text-gray-900 dark:text-white">Full Stack Software Engineer</strong> with 5+ years of experience building production-grade applications that solve real business problems.
              </p>
              <p>
                My expertise lies in the <strong className="text-gray-900 dark:text-white">React/Node.js ecosystem</strong>, where I've architected everything from restaurant management systems processing ₦100M+ in transactions to real estate platforms connecting thousands of users.
              </p>
              <p>
                Beyond coding, I'm passionate about <strong className="text-gray-900 dark:text-white">education and mentorship</strong>. As Lead Bootcamp Instructor at Panthera Tech School, I designed curriculum and trained 300+ students, achieving 50+ job placements across Nigerian tech companies.
              </p>
              <p className="text-primary-600 dark:text-primary-400 font-semibold">
                Currently freelancing and actively seeking full-time opportunities where I can contribute to building impactful products.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-gray-800 rounded-xl shadow-lg p-8 border border-primary-100 dark:border-primary-900/50">
                <h3 className="text-2xl font-bold mb-6 text-primary-900 dark:text-primary-100">Experience</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <div className="font-semibold text-gray-900 dark:text-white mb-1">Freelance Full Stack Developer</div>
                    <div className="text-sm text-primary-600 dark:text-primary-400">Jan 2025 - Present</div>
                  </div>
                  <div className="border-l-4 border-primary-400 pl-4">
                    <div className="font-semibold text-gray-900 dark:text-white mb-1">Full Stack Engineer • Megastack Tech</div>
                    <div className="text-sm text-primary-600 dark:text-primary-400">Jan 2022 - Jan 2025</div>
                  </div>
                  <div className="border-l-4 border-primary-300 pl-4">
                    <div className="font-semibold text-gray-900 dark:text-white mb-1">Lead Instructor • Panthera Tech</div>
                    <div className="text-sm text-primary-600 dark:text-primary-400">Jan 2021 - Jan 2025</div>
                  </div>
                  <div className="border-l-4 border-primary-200 pl-4">
                    <div className="font-semibold text-gray-900 dark:text-white mb-1">Frontend Engineer • SuccessTrend</div>
                    <div className="text-sm text-primary-600 dark:text-primary-400">Mar 2019 - Feb 2021</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-gray-800 rounded-xl shadow-lg p-8 border border-primary-100 dark:border-primary-900/50">
                <h3 className="text-2xl font-bold mb-6 text-primary-900 dark:text-primary-100">Education</h3>
                <div className="border-l-4 border-primary-500 pl-4">
                  <div className="font-semibold text-gray-900 dark:text-white mb-1">B.Sc. Computer Science</div>
                  <div className="text-sm text-primary-600 dark:text-primary-400 mb-2">Tai Solarin University, 2024</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Second Class Upper</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My technical toolkit for building modern, scalable applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border-t-4 border-primary-500">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Frontend</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center text-gray-700 dark:text-gray-300">
                  <span>React</span>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">5 yrs</span>
                </li>
                <li className="flex justify-between items-center text-gray-700 dark:text-gray-300">
                  <span>Next.js</span>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">5 yrs</span>
                </li>
                <li className="flex justify-between items-center text-gray-700 dark:text-gray-300">
                  <span>TypeScript</span>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">5 yrs</span>
                </li>
                <li className="flex justify-between items-center text-gray-700 dark:text-gray-300">
                  <span>React Native</span>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">5 yrs</span>
                </li>
                <li className="flex justify-between items-center text-gray-700 dark:text-gray-300">
                  <span>Tailwind CSS</span>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">4 yrs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border-t-4 border-primary-600">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Backend</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center text-gray-700 dark:text-gray-300">
                  <span>Node.js</span>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">5 yrs</span>
                </li>
                <li className="flex justify-between items-center text-gray-700 dark:text-gray-300">
                  <span>Express.js</span>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">5 yrs</span>
                </li>
                <li className="flex justify-between items-center text-gray-700 dark:text-gray-300">
                  <span>NestJS</span>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">3 yrs</span>
                </li>
                <li className="flex justify-between items-center text-gray-700 dark:text-gray-300">
                  <span>PostgreSQL</span>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">5 yrs</span>
                </li>
                <li className="flex justify-between items-center text-gray-700 dark:text-gray-300">
                  <span>MongoDB</span>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">5 yrs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border-t-4 border-primary-400">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Tools & More</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center text-gray-700 dark:text-gray-300">
                  <span>Git/GitHub</span>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">5 yrs</span>
                </li>
                <li className="flex justify-between items-center text-gray-700 dark:text-gray-300">
                  <span>Docker</span>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">3 yrs</span>
                </li>
                <li className="flex justify-between items-center text-gray-700 dark:text-gray-300">
                  <span>CI/CD</span>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">3 yrs</span>
                </li>
                <li className="flex justify-between items-center text-gray-700 dark:text-gray-300">
                  <span>Stripe/Paystack</span>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">4 yrs</span>
                </li>
                <li className="flex justify-between items-center text-gray-700 dark:text-gray-300">
                  <span>Agile/Scrum</span>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">5 yrs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              I'm currently looking for new opportunities. Whether you have a project in mind or just want to connect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a href="mailto:ayorindeabdulmalik@gmail.com" className="bg-gradient-to-br from-white to-primary-50 dark:from-gray-800 dark:to-primary-900/20 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all group border border-primary-100 dark:border-primary-900/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-primary-600 dark:text-primary-400 mb-1 font-medium">Email</div>
                  <div className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 break-all">
                    ayorindeabdulmalik@gmail.com
                  </div>
                </div>
              </div>
            </a>

            <a href="tel:+2348061403875" className="bg-gradient-to-br from-white to-primary-50 dark:from-gray-800 dark:to-primary-900/20 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all group border border-primary-100 dark:border-primary-900/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-primary-600 dark:text-primary-400 mb-1 font-medium">Phone</div>
                  <div className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                    +234 806 140 3875
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/Abdulmalik-Ayorinde"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/abdulmalik-ayorinde"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary-50 to-white dark:from-gray-900 dark:to-primary-900/20 border-t-2 border-primary-200 dark:border-primary-800/50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                Abdulmalik Ayorinde
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                © 2025 • Lagos, Nigeria
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-primary-700 dark:text-primary-300">Available for opportunities</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Built with <span className="text-primary-600 dark:text-primary-400 font-semibold">Next.js</span> & <span className="text-primary-600 dark:text-primary-400 font-semibold">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

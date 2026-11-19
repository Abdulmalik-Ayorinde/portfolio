import Link from 'next/link'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'
import { getFeaturedProjects, projects } from './data/projects'

function GiantName({ text }: { text: string }) {
  return (
    <h1 className="text-[clamp(36px,10.15vw,142px)] font-normal leading-[1.1] text-white py-9 tracking-[-0.02em] whitespace-nowrap select-none">
      {text.split('').map((char, i) => (
        <span
          key={i}
          className={`hero-char ${char === ' ' ? 'hero-char-space' : ''}`}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </h1>
  )
}

export default function Home() {
  const featured = getFeaturedProjects()
  const reelProjects = projects.slice(0, 4)

  return (
    <>
      <Header />
      <ScrollReveal />

      {/* Hero Section */}
      <section className="bg-[#101010] pt-[100px] pb-20">
        <div className="container-v2">
          {/* Giant Name Banner */}
          <div className="mt-[50px] mb-[50px]">
            <div className="w-full h-px bg-[rgba(255,255,255,0.2)]" />
            <GiantName text="Abdulmalik Ayorinde" />
            <div className="w-full h-px bg-[rgba(255,255,255,0.2)]" />
          </div>

          {/* Hero Content Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
            {/* Left Column */}
            <div className="flex-1 max-w-[900px]">
              <p className="text-lg font-normal leading-[33px] text-white">
                Full Stack Software Engineer with 5+ years of experience building production-grade
                applications that solve real business problems. Specialized in the React/Node.js ecosystem,
                with a proven track record of delivering high-impact solutions processing over NGN100M
                in transactions. Recently deep into AI/LLM integration, building multi-agent systems,
                model routing, and AI-assisted development workflows.
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-8">
                <a href="mailto:ayorindeabdulmalik@gmail.com" className="btn-primary">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M17 14.5C17 15.3284 16.3284 16 15.5 16H4.5C3.67157 16 3 15.3284 3 14.5V5.5C3 4.67157 3.67157 4 4.5 4H15.5C16.3284 4 17 4.67157 17 5.5V14.5Z" stroke="#1B1B1B" strokeWidth="1.5" />
                    <path d="M3.5 5L10 10.5L16.5 5" stroke="#1B1B1B" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  Let&apos;s Talk
                </a>
                <a href="/Ayorinde_Abdulmalik_CV-2026.pdf" download className="btn-secondary">
                  Download Resume
                </a>
              </div>
            </div>

            {/* Right Column: Status */}
            <div className="w-full lg:w-[329px] flex-shrink-0 flex flex-col gap-2.5">
              <div className="w-full max-lg:h-auto max-lg:aspect-[353/388] rounded-[5px] overflow-hidden bg-[#141414]">
                <img
                  src="/me/Serious%20Portrait%20on%20Yellow%20Background.png"
                  alt="Abdulmalik Ayorinde"
                  className="w-full h-full object-cover rounded-[5px]"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-2 text-base font-normal leading-5 text-[rgba(255,255,255,0.7)]">
                <div className="w-3.5 h-3.5 rounded-full border border-[#0D7A50] bg-[#D9D9D9] flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-[#0D7A50] block" />
                </div>
                <span>Open to opportunities</span>
              </div>
            </div>
          </div>

          {/* Infinite Carousel Reel */}
          <div className="hero-reel-wrapper mt-10">
            <div className="hero-reel-track">
              {[...reelProjects, ...reelProjects].map((project, i) => (
                <Link
                  key={`${project.slug}-${i}`}
                  href={`/projects/${project.slug}`}
                  className="reel-tile"
                  aria-label={`${project.title} Project Details`}
                >
                  {project.heroImage ? (
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-[5px]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center">
                      <span className="text-white/30 text-sm font-medium">{project.title}</span>
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selected Projects Section */}
      <section className="bg-[#191919] py-[100px]">
        <div className="container-v2">
          <h2 className="text-xl font-medium leading-[25px] text-white mb-8 reveal">Selected Projects</h2>

          <div className="flex flex-col gap-[50px]">
            {featured.map((project) => (
              <article key={project.slug} className="project-card flex flex-col w-full reveal">
                <div className="w-full h-[750px] max-md:h-auto max-md:aspect-[353/265] rounded-[5px] overflow-hidden bg-[#141414]">
                  {project.heroImage ? (
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-[5px] project-card-img"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center project-card-img">
                      <span className="text-white/20 text-2xl font-semibold">{project.title}</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 mt-[30px]">
                  <div className="flex-1 max-w-[555px]">
                    <h3 className="text-xl font-semibold leading-5 text-white" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                      {project.title}
                    </h3>
                    <p className="text-base font-normal leading-[22px] text-[rgba(255,255,255,0.7)] mt-3">
                      {project.description}
                    </p>
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="btn-dark whitespace-nowrap"
                  >
                    View Project
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom CTAs */}
          <div className="flex flex-col md:flex-row justify-between gap-5 mt-[60px] w-full reveal">
            <Link href="/projects" className="btn-light flex-1">
              View More Projects
            </Link>
            <a
              href="https://github.com/Abdulmalik-Ayorinde"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark flex-1"
            >
              Visit GitHub
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#101010] py-[120px]">
        <div className="container-v2">
          <div className="mb-10 reveal">
            <h2 className="text-xl font-medium leading-[22px] text-white">ABOUT ME</h2>
            <p className="text-base font-normal leading-[22px] text-[rgba(255,255,255,0.7)] mt-3">
              Learn about my story and what drives me
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-[50px] items-start justify-between">
            {/* Left: Photo */}
            <div className="w-full lg:w-[461px] flex-shrink-0 flex flex-col gap-2.5 reveal">
              <div className="w-full h-[575px] max-lg:h-auto max-lg:aspect-[353/388] rounded-[5px] overflow-hidden bg-[#141414]">
                <img
                  src="/me/Serious%20Portrait%20on%20Yellow%20Background.png"
                  alt="Abdulmalik Ayorinde"
                  className="w-full h-full object-cover rounded-[5px]"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-2 text-base font-normal leading-5 text-white">
                <div className="w-3.5 h-3.5 rounded-full border border-[#0D7A50] bg-[#D9D9D9] flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-[#0D7A50] block" />
                </div>
                <span>Open to remote opportunities</span>
              </div>
            </div>

            {/* Right: Content */}
            <div className="w-full lg:w-[769px] flex-shrink-0 flex flex-col justify-between gap-6 reveal">
              <h3 className="text-[30px] font-medium leading-10 text-white max-w-[690px]">
                Picture me as an inquisitive explorer, driven by a passion for building systems that scale and mentoring the next generation of developers.
              </h3>

              <div className="text-lg font-normal leading-[30px] text-[rgba(255,255,255,0.7)] flex flex-col gap-5">
                <p>
                  I&apos;m Abdulmalik Ayorinde, a Full Stack Software Engineer who loves turning complex problems into
                  digital experiences that make life easier. My journey started with a fascination for how software
                  systems work, and that curiosity has grown into 5+ years of building production-grade applications
                  across real estate, fintech, education, and agriculture.
                </p>
                <p>
                  Today, I specialize in the React/Node.js ecosystem with deep expertise in React Native for mobile.
                  I&apos;ve architected everything from restaurant POS systems processing NGN100M+ in transactions to
                  real estate platforms connecting thousands of users. Recently, I&apos;ve been deeply integrating AI
                  and LLM-powered tooling into my workflows, from building multi-agent systems with CrewAI to routing
                  between models for cost-efficient task execution.
                </p>
                <p>
                  Beyond coding, I&apos;m passionate about education and mentorship. As Lead Bootcamp Instructor at
                  Panthera Tech School, I designed curriculum and trained 300+ students, achieving 50+ job placements
                  across Nigerian tech companies. I believe great software is built by great teams, and I invest in
                  growing the people around me.
                </p>
                <p>
                  When I&apos;m not building, you&apos;ll find me exploring new technologies,
                  or sharing knowledge with the developer community.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-2">
                <a href="mailto:ayorindeabdulmalik@gmail.com" className="btn-primary">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M17 14.5C17 15.3284 16.3284 16 15.5 16H4.5C3.67157 16 3 15.3284 3 14.5V5.5C3 4.67157 3.67157 4 4.5 4H15.5C16.3284 4 17 4.67157 17 5.5V14.5Z" stroke="#1B1B1B" strokeWidth="1.5" />
                    <path d="M3.5 5L10 10.5L16.5 5" stroke="#1B1B1B" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  Let&apos;s Talk
                </a>
                <a href="/Ayorinde_Abdulmalik_CV-2026.pdf" download className="btn-secondary">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

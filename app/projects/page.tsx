import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import { projects } from '../data/projects'

export const metadata = {
  title: 'Projects | Abdulmalik Ayorinde — Full Stack Engineer',
  description: 'A selection of projects where I turned complex problems into simple, useful experiences. Explore what I built, how I approached each challenge, and the impact my work made.',
}

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <ScrollReveal />

      {/* Page Hero */}
      <section className="bg-[#101010] pt-[114px] pb-0">
        <div className="container-v2">
          <hr className="page-divider mb-20" />
          <div className="flex flex-col gap-6 pb-[60px]">
            <h1 className="text-[clamp(52px,11vw,210px)] font-light leading-[1.05] text-white tracking-[-0.02em] whitespace-nowrap">
              Projects
            </h1>
            <p className="text-[clamp(18px,1.8vw,28px)] font-normal leading-[1.6] text-[rgba(255,255,255,0.7)] max-w-[990px]">
              A selection of projects where I turned complex problems into simple, useful experiences.
              Explore what I built, how I approached each challenge, and the impact my work made.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <main className="bg-[#101010] pt-2.5 pb-[120px]">
        <div className="container-v2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px_24px]">
            {projects.map((project) => (
              <article key={project.slug} className="flex flex-col w-full reveal">
                <div className="w-full aspect-[1254/956] rounded-[5px] overflow-hidden bg-[#141414] block group">
                  {project.heroImage ? (
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-[5px] transition-transform duration-[400ms] ease-out group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center transition-transform duration-[400ms] ease-out group-hover:scale-[1.02]">
                      <span className="text-white/20 text-xl font-semibold">{project.title}</span>
                    </div>
                  )}
                </div>
                <div className="mt-6 flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold leading-5 text-white" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                      {project.title}
                    </h3>
                    <p className="text-base font-normal leading-[22px] text-[rgba(255,255,255,0.7)]">
                      {project.description}
                    </p>
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="btn-dark w-[135px]"
                  >
                    View Project
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

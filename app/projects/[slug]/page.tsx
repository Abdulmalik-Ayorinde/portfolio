import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ScrollReveal from '../../components/ScrollReveal'
import { getProjectBySlug, getAllSlugs, Project } from '../../data/projects'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug)
  if (!project) {
    return { title: 'Project Not Found' }
  }
  return {
    title: `${project.title} | Abdulmalik Ayorinde`,
    description: project.description,
  }
}

function ProseBlock({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="flex flex-col gap-6 text-base font-normal leading-[26px] text-[rgba(255,255,255,0.7)] max-w-[862px]">
      {paragraphs.map((p, i) => (
        <p key={i} dangerouslySetInnerHTML={{ __html: p.replace(/\n/g, '<br/>') }} />
      ))}
    </div>
  )
}

function Section({
  id,
  title,
  paragraphs,
}: {
  id: string
  title: string
  paragraphs: string[]
}) {
  return (
    <section className="py-10 reveal" id={id}>
      <h2 className="text-[30px] font-semibold leading-9 text-white mb-3 tracking-[-0.01em]">
        {title}
      </h2>
      <ProseBlock paragraphs={paragraphs} />
      {/* Image placeholder */}
      <div className="mt-8 w-full rounded-[5px] overflow-hidden bg-[#1A1A1A]">
        <div className="w-full h-[400px] bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center">
          <span className="text-white/15 text-lg">{title} — Screenshot</span>
        </div>
      </div>
    </section>
  )
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug)
  if (!project) {
    notFound()
  }

  const cs = project.caseStudy

  return (
    <>
      <Header />
      <ScrollReveal />

      <main className="bg-[#101010] pt-[114px] pb-10">
        <div className="container-v2">
          <hr className="page-divider mb-20" />

          {/* Back Button */}
          <div className="mb-10 reveal">
            <Link href="/projects" className="back-btn">
              <svg
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8333 10H4.16667M4.16667 10L9.16667 15M4.16667 10L9.16667 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>All Projects</span>
            </Link>
          </div>

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-[50px] reveal">
            <div className="max-w-[533px] flex-1">
              <h1 className="text-[45px] max-md:text-[28px] font-medium leading-[52px] max-md:leading-[34px] text-white mb-[17px] tracking-[-0.01em]">
                {project.title}
              </h1>
              <p className="text-lg font-normal leading-[26px] text-white max-w-[500px]">
                {project.description}
              </p>
            </div>

            {/* Meta Table */}
            <div className="w-full lg:w-[390px] flex-shrink-0">
              <div className="w-full h-px bg-[rgba(255,255,255,0.12)]" />
              <div className="flex justify-between py-3">
                <span className="text-sm font-medium text-[rgba(255,255,255,0.6)]">WHO FOR</span>
                <span className="text-base font-normal text-white">{cs.client}</span>
              </div>
              <div className="w-full h-px bg-[rgba(255,255,255,0.12)]" />
              <div className="flex justify-between py-3">
                <span className="text-sm font-medium text-[rgba(255,255,255,0.6)]">MY ROLE</span>
                <span className="text-base font-normal text-white">{cs.role}</span>
              </div>
              <div className="w-full h-px bg-[rgba(255,255,255,0.12)]" />
              <div className="flex justify-between py-3">
                <span className="text-sm font-medium text-[rgba(255,255,255,0.6)]">YEAR</span>
                <span className="text-base font-normal text-white">{cs.year}</span>
              </div>
              <div className="w-full h-px bg-[rgba(255,255,255,0.12)]" />
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full rounded-[5px] overflow-hidden bg-[#1A1A1A] mb-10 reveal">
            <div className="w-full h-[500px] max-md:h-[300px] bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center">
              <span className="text-white/15 text-2xl font-semibold">{project.title} — Hero Preview</span>
            </div>
          </div>

          {/* Highlights Block */}
          <div className="mb-10 reveal">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-medium text-[rgba(255,255,255,0.6)]">WHAT CHANGED</span>
              <div className="flex-1 h-px bg-[rgba(255,255,255,0.12)]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cs.highlights.map((highlight, i) => (
                <div key={i} className="bg-[#141414] rounded-[5px] p-6 border border-[rgba(255,255,255,0.08)]">
                  <span className="text-sm font-medium text-[rgba(255,255,255,0.5)] block mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-base font-normal leading-[24px] text-[rgba(255,255,255,0.8)]">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div className="flex flex-col">
            <Section id="section-overview" title="Overview" paragraphs={cs.overview} />
            <Section id="section-problem" title="The Problem" paragraphs={cs.problem} />
            <Section id="section-challenge" title="The Challenge" paragraphs={cs.challenge} />
            <Section id="section-approach" title="The Approach" paragraphs={cs.approach} />
            <Section id="section-solution" title="The Solution" paragraphs={cs.solution} />
            <Section id="section-impact" title="The Impact" paragraphs={cs.impactSection} />
            <section className="py-10 reveal" id="section-learned">
              <h2 className="text-[30px] font-semibold leading-9 text-white mb-3 tracking-[-0.01em]">
                What I Learned
              </h2>
              <ProseBlock paragraphs={cs.learned} />
            </section>
          </div>

          {/* Tech Stack Tags */}
          <div className="py-10 border-t border-[rgba(255,255,255,0.12)] reveal">
            <h3 className="text-sm font-medium text-[rgba(255,255,255,0.6)] mb-4">TECHNOLOGIES</h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-4 py-2 rounded-[5px] border border-[rgba(255,255,255,0.2)] text-base font-normal text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* External Link */}
          {project.link && (
            <div className="py-6 reveal">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View Live Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333" stroke="#1B1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 2H14V6" stroke="#1B1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.66669 9.33333L14 2" stroke="#1B1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}

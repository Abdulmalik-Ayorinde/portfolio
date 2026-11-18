import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Abdulmalik Ayorinde — Full Stack Engineer',
  description: 'Full Stack Software Engineer with 5+ years building scalable applications. React, Node.js, React Native specialist. 300+ students trained, 50+ job placements.',
  keywords: ['Full Stack Developer', 'Software Engineer', 'React', 'Node.js', 'React Native', 'Nigeria', 'Lagos', 'TypeScript', 'AI', 'LLM'],
  authors: [{ name: 'Abdulmalik Ayorinde' }],
  openGraph: {
    title: 'Abdulmalik Ayorinde — Full Stack Engineer',
    description: 'Building scalable SaaS applications and management systems',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#101010] text-white antialiased font-sans">
        {children}
      </body>
    </html>
  )
}

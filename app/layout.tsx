import type { Metadata } from 'next'
import { Archivo_Black, Work_Sans, Courier_Prime } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './contexts/ThemeContext'

const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const courierPrime = Courier_Prime({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Abdulmalik Ayorinde - Full Stack Engineer',
  description: 'Full Stack Software Engineer with 5+ years building scalable applications. React, Node.js, React Native specialist. 300+ students trained, 50+ job placements.',
  keywords: ['Full Stack Developer', 'Software Engineer', 'React', 'Node.js', 'React Native', 'Nigeria', 'Lagos', 'TypeScript'],
  authors: [{ name: 'Abdulmalik Ayorinde' }],
  openGraph: {
    title: 'Abdulmalik Ayorinde - Full Stack Engineer',
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
    <html lang="en" className={`${archivoBlack.variable} ${workSans.variable} ${courierPrime.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            const stored = localStorage.getItem('theme');
            const theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            document.documentElement.classList.toggle('dark', theme === 'dark');
          })();
        ` }} />
      </head>
      <body className="bg-neutral-50 text-neutral-950 antialiased font-body">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

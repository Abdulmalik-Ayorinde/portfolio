'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('nav-menu-open')
    } else {
      document.body.classList.remove('nav-menu-open')
    }
    return () => document.body.classList.remove('nav-menu-open')
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        isScrolled
          ? 'bg-[rgba(16,16,16,0.85)] backdrop-blur-[16px] border-b border-[rgba(255,255,255,0.08)] shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-v2 flex items-center justify-between gap-6 py-6">
        <Link href="/" className="flex flex-col gap-1 no-underline">
          <span className="text-xl font-medium text-white leading-[22px]">Abdulmalik Ayorinde</span>
          <span className="text-[11px] font-normal text-white uppercase tracking-[0.05em] leading-4 opacity-70">
            Full Stack Engineer · Digital Builder
          </span>
        </Link>

        <nav
          className={`flex items-center gap-[34px] ${
            menuOpen
              ? 'fixed top-[67px] left-0 right-0 h-[calc(100vh-67px)] bg-[rgba(16,16,16,0.96)] backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.08)] shadow-[0_16px_36px_rgba(0,0,0,0.6)] p-8 flex-col items-start gap-4 z-[999]'
              : 'hidden md:flex'
          }`}
        >
          <Link
            href="/#about"
            className="text-base font-medium leading-[22px] text-[rgba(255,255,255,0.7)] no-underline transition-colors duration-200 hover:text-white md:opacity-100"
            onClick={() => setMenuOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            href="/projects"
            className="text-base font-medium leading-[22px] text-[rgba(255,255,255,0.7)] no-underline transition-colors duration-200 hover:text-white md:opacity-100"
            onClick={() => setMenuOpen(false)}
          >
            PROJECTS
          </Link>
          <a
            href="mailto:ayorindeabdulmalik@gmail.com"
            className="btn-primary md:hidden w-full"
            onClick={() => setMenuOpen(false)}
          >
            Get in Touch
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="mailto:ayorindeabdulmalik@gmail.com"
            className="btn-primary hidden md:inline-flex"
          >
            Get in Touch
          </a>
          <button
            className={`md:hidden flex flex-col justify-center items-center gap-[5px] w-[38px] h-[38px] bg-transparent border-none cursor-pointer p-1 z-[1001] ${
              menuOpen ? 'open' : ''
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-[2px] bg-white rounded-[1px] transition-all duration-300 ${
                menuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white rounded-[1px] transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white rounded-[1px] transition-all duration-300 ${
                menuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>
    </header>
  )
}

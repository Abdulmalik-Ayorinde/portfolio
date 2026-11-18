'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    document.body.classList.add('js-loaded')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('.reveal, .reveal-img')
    elements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
      document.body.classList.remove('js-loaded')
    }
  }, [])

  return null
}

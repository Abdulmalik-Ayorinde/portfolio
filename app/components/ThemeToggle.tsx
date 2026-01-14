'use client'

import { useTheme } from '../contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 border-3 border-neutral-950 dark:border-neutral-50 bg-accent-yellow dark:bg-accent-yellow-muted font-mono text-xs uppercase tracking-wider hover-lift"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? 'DARK' : 'LIGHT'}
    </button>
  )
}

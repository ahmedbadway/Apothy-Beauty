import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { useLanguage } from '../context/LanguageContext'
import LanguageToggle from './LanguageToggle'

const NAV_LINKS = [
  { id: 'home', key: 'home' },
  { id: 'about', key: 'about' },
  { id: 'products', key: 'products' },
  { id: 'contact', key: 'contact' },
]

// Logo placeholder — final asset: public/images/logo/logo.png
function LogoPlaceholder() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="17" stroke="var(--color-sage-deep)" strokeWidth="2" />
      <path
        d="M18 8c4 4 6 8 6 12a6 6 0 1 1-12 0c0-4 2-8 6-12z"
        fill="var(--color-sage)"
        stroke="var(--color-sage-deep)"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? 'glass' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#home"
          className="flex items-center gap-2 text-lg font-bold text-brown-deep"
        >
          <LogoPlaceholder />
          Apothy Beauty
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-sm font-semibold text-text transition-colors duration-200 hover:text-accent"
              >
                {t.nav[link.key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          {/* Mobile menu button */}
          <button
            type="button"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Menu"
          >
            <span
              className={`h-0.5 w-5 rounded bg-brown-deep transition-transform duration-200 ${menuOpen ? 'translate-y-1 rotate-45' : ''}`}
            />
            <span
              className={`h-0.5 w-5 rounded bg-brown-deep transition-transform duration-200 ${menuOpen ? '-translate-y-1 -rotate-45' : ''}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reducedMotion ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="glass overflow-hidden md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-sm font-semibold text-text transition-colors duration-200 hover:text-accent"
                >
                  {t.nav[link.key]}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}

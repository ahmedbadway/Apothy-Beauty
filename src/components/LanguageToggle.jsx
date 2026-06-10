import { motion, useReducedMotion } from 'motion/react'
import { useLanguage } from '../context/LanguageContext'

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage()
  const reducedMotion = useReducedMotion()

  return (
    <motion.button
      type="button"
      onClick={toggleLang}
      whileTap={reducedMotion ? undefined : { scale: 0.94 }}
      className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-semibold text-brown transition-colors duration-200 hover:bg-accent-soft"
      aria-label={lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
    >
      {lang === 'ar' ? 'EN' : 'عربي'}
    </motion.button>
  )
}

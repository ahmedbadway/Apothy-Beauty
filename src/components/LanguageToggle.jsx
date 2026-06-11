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
      className="glass rounded-full px-4 py-1.5 text-sm font-semibold text-brown-deep transition-colors duration-200 hover:text-accent"
      aria-label={lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
    >
      {lang === 'ar' ? 'EN' : 'عربي'}
    </motion.button>
  )
}

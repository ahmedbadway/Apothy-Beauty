import { motion, useReducedMotion } from 'motion/react'
import { useLanguage } from '../context/LanguageContext'

export default function AboutSection() {
  const { t } = useLanguage()
  const reducedMotion = useReducedMotion()

  const reveal = {
    initial: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 28 },
    whileInView: reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6, ease: 'easeOut' },
  }

  return (
    <section id="about" className="relative px-4 py-20 sm:py-28">
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'var(--color-overlay)' }}
        aria-hidden="true"
      />
      <motion.div {...reveal} className="relative mx-auto max-w-3xl text-center">
        <h2 className="mb-8 text-3xl font-extrabold text-brown-deep sm:text-4xl">
          {t.about.title}
        </h2>
        <div className="rounded-3xl border border-border bg-card p-8 shadow-lg sm:p-10">
          <p className="mb-5 text-lg leading-relaxed text-text">{t.about.story1}</p>
          <p className="mb-6 text-lg leading-relaxed text-text">{t.about.story2}</p>
          <p className="text-xl font-bold text-sage-deep">{t.about.philosophy}</p>
        </div>
      </motion.div>
    </section>
  )
}

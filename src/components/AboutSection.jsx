import { motion, useReducedMotion } from 'motion/react'
import { useLanguage } from '../context/LanguageContext'
import { reveal } from '../config/motion'

export default function AboutSection() {
  const { t } = useLanguage()
  const reducedMotion = useReducedMotion()

  return (
    <section id="about" className="relative px-4 py-20 sm:py-28">
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'var(--color-overlay)' }}
        aria-hidden="true"
      />
      <motion.div {...reveal(reducedMotion)} className="relative mx-auto max-w-3xl text-center">
        <h2 className="display mb-8 text-3xl text-brown-deep sm:text-4xl">
          {t.about.title}
        </h2>
        <div className="rounded-3xl border border-border bg-card p-8 shadow-lg sm:p-10">
          <p className="measure mx-auto mb-5 text-lg leading-relaxed text-text">
            {t.about.story1}
          </p>
          <p className="measure mx-auto mb-6 text-lg leading-relaxed text-text">
            {t.about.story2}
          </p>
          <p className="text-xl font-bold text-sage-deep">{t.about.philosophy}</p>
        </div>
      </motion.div>
    </section>
  )
}

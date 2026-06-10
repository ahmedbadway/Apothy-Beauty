import { motion, useReducedMotion } from 'motion/react'
import { useLanguage } from '../context/LanguageContext'
import { buildWhatsAppLink } from '../config/site'

export default function HeroSection() {
  const { t } = useLanguage()
  const reducedMotion = useReducedMotion()

  const entrance = (delay) =>
    reducedMotion
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay } }
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] },
        }

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center justify-center px-4"
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'var(--color-overlay)' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl pt-20 pb-12 text-center">
        <motion.p
          {...entrance(0.1)}
          className="mb-4 inline-block rounded-full border border-border bg-card px-4 py-1.5 text-sm font-semibold text-sage-deep"
        >
          {t.hero.tagline}
        </motion.p>
        <motion.h1
          {...entrance(0.25)}
          className="mb-6 text-4xl font-extrabold leading-tight text-brown-deep sm:text-5xl md:text-6xl"
        >
          {t.hero.title}
        </motion.h1>
        <motion.p
          {...entrance(0.4)}
          className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-text-soft"
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.div {...entrance(0.55)}>
          <motion.a
            href={buildWhatsAppLink(t.contact.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reducedMotion ? undefined : { scale: 1.04, y: -2 }}
            whileTap={reducedMotion ? undefined : { scale: 0.97 }}
            className="inline-block rounded-full bg-sage-deep px-8 py-4 text-lg font-bold text-offwhite shadow-lg transition-colors duration-200 hover:bg-brown"
          >
            {t.hero.cta}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

import { motion, useReducedMotion } from 'motion/react'
import { useLanguage } from '../context/LanguageContext'
import { buildWhatsAppLink } from '../config/site'
import { EASE_OUT_EXPO } from '../config/motion'

export default function HeroSection() {
  const { t } = useLanguage()
  const reducedMotion = useReducedMotion()

  // Staggered load-time entrance sequence. Reduced motion → simultaneous fade.
  const container = {
    hidden: {},
    show: {
      transition: reducedMotion ? {} : { staggerChildren: 0.12, delayChildren: 0.08 },
    },
  }
  const item = {
    hidden: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE_OUT_EXPO },
    },
  }

  return (
    <section id="home" className="relative flex min-h-svh items-center justify-center px-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-3xl pt-20 pb-12 text-center"
      >
        <motion.p
          variants={item}
          className="glass mb-5 inline-block rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide text-sage-deep"
        >
          {t.hero.tagline}
        </motion.p>
        <motion.h1
          variants={item}
          className="display on-glass mb-6 text-[clamp(2.5rem,7vw,4.5rem)] text-brown-deep"
        >
          {t.hero.title}
        </motion.h1>
        <motion.p
          variants={item}
          className="measure on-glass mx-auto mb-8 text-lg leading-relaxed text-text sm:text-xl"
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.div variants={item}>
          <motion.a
            href={buildWhatsAppLink(t.contact.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reducedMotion ? undefined : { scale: 1.04, y: -2 }}
            whileTap={reducedMotion ? undefined : { scale: 0.97 }}
            transition={{ duration: 0.18, ease: EASE_OUT_EXPO }}
            className="inline-block rounded-full bg-sage-deep px-8 py-4 text-lg font-bold text-offwhite shadow-lg transition-colors duration-200 hover:bg-brown"
          >
            {t.hero.cta}
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

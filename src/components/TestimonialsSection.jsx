import { motion, useReducedMotion } from 'motion/react'
import { useLanguage } from '../context/LanguageContext'
import { reveal, EASE_OUT_QUINT } from '../config/motion'

function StarRating({ rating }) {
  return (
    <div className="mb-3 flex gap-1" role="img" aria-label={`${rating} / 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2l3 6.6 7 .9-5.2 4.9 1.4 7L12 18l-6.2 3.4 1.4-7L2 9.5l7-.9z"
            fill={star <= rating ? 'var(--color-star)' : 'var(--color-border)'}
          />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  const { t } = useLanguage()
  const reducedMotion = useReducedMotion()

  return (
    <section className="relative px-4 py-20 sm:py-28">
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'var(--color-overlay)' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-5xl">
        <motion.div {...reveal(reducedMotion)} className="mb-12 text-center">
          <h2 className="display on-glass mb-3 text-3xl text-brown-deep sm:text-4xl">
            {t.testimonials.title}
          </h2>
          <p className="on-glass text-lg text-text-soft">{t.testimonials.subtitle}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {t.testimonials.items.map((review, index) => (
            <motion.blockquote
              key={review.name}
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
              whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: EASE_OUT_QUINT }}
              className="glass flex flex-col rounded-3xl p-7"
            >
              <StarRating rating={review.rating} />
              <p className="flex-1 leading-relaxed text-text">“{review.quote}”</p>
              <footer className="mt-4 font-bold text-sage-deep">— {review.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

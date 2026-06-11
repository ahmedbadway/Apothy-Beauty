import { motion, useReducedMotion } from 'motion/react'
import { useLanguage } from '../context/LanguageContext'
import { reveal, EASE_OUT_QUINT } from '../config/motion'

// Icon fallbacks sit behind the photo; if a photo is missing the icon shows.
// Final photos: public/images/ingredients/<file>.jpg
const INGREDIENT_ICONS = {
  argan: (
    <path
      d="M24 6c6 6 9 12 9 18a9 9 0 1 1-18 0c0-6 3-12 9-18z"
      fill="var(--color-accent-soft)"
      stroke="var(--color-accent)"
      strokeWidth="2"
    />
  ),
  jojoba: (
    <g stroke="var(--color-sage-deep)" strokeWidth="2" fill="var(--color-sage)">
      <ellipse cx="24" cy="28" rx="10" ry="13" />
      <path d="M24 15V7M24 7c3 0 5 2 5 4" fill="none" strokeLinecap="round" />
    </g>
  ),
  castor: (
    <g stroke="var(--color-brown)" strokeWidth="2" fill="none" strokeLinecap="round">
      <path d="M24 8v32" />
      <path d="M24 14c-6-2-10 0-12 4 4 2 9 1 12-4zM24 14c6-2 10 0 12 4-4 2-9 1-12-4z" fill="var(--color-sage)" />
      <path d="M24 26c-6-2-10 0-12 4 4 2 9 1 12-4zM24 26c6-2 10 0 12 4-4 2-9 1-12-4z" fill="var(--color-sage)" />
    </g>
  ),
  blackseed: (
    <g fill="var(--color-brown-deep)">
      <ellipse cx="18" cy="22" rx="4" ry="6" transform="rotate(-20 18 22)" />
      <ellipse cx="30" cy="22" rx="4" ry="6" transform="rotate(20 30 22)" />
      <ellipse cx="24" cy="32" rx="4" ry="6" />
    </g>
  ),
  rosemary: (
    <g stroke="var(--color-sage-deep)" strokeWidth="2" strokeLinecap="round">
      <path d="M24 42V8" />
      <path d="M24 12l-7-4M24 12l7-4M24 20l-8-4M24 20l8-4M24 28l-8-4M24 28l8-4M24 36l-7-4M24 36l7-4" />
    </g>
  ),
  mint: (
    <g stroke="var(--color-sage-deep)" strokeWidth="2" fill="var(--color-sage)">
      <path d="M24 40c-9-5-13-12-12-22 7 0 12 3 12 10 0-7 5-10 12-10 1 10-3 17-12 22z" />
      <path d="M24 40V26" fill="none" strokeLinecap="round" />
    </g>
  ),
}

// key → uploaded photo filename (note black-seed hyphenation)
const INGREDIENT_IMAGES = {
  argan: 'argan.jpg',
  jojoba: 'jojoba.jpg',
  castor: 'castor.jpg',
  blackseed: 'black-seed.jpg',
  rosemary: 'rosemary.jpg',
  mint: 'mint.jpg',
}

const INGREDIENT_KEYS = ['argan', 'jojoba', 'castor', 'blackseed', 'rosemary', 'mint']

export default function IngredientsSection() {
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
            {t.ingredients.title}
          </h2>
          <p className="on-glass text-lg text-text-soft">{t.ingredients.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {INGREDIENT_KEYS.map((key, index) => (
            <motion.div
              key={key}
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: EASE_OUT_QUINT }}
              whileHover={
                reducedMotion
                  ? undefined
                  : { y: -4, transition: { duration: 0.18, ease: EASE_OUT_QUINT } }
              }
              className="glass flex flex-col items-center rounded-2xl p-5 text-center"
            >
              <div className="relative mb-3 h-16 w-16 overflow-hidden rounded-full ring-1 ring-border">
                {/* icon fallback behind the photo */}
                <svg
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full p-3"
                >
                  {INGREDIENT_ICONS[key]}
                </svg>
                <img
                  src={`${import.meta.env.BASE_URL}images/ingredients/${INGREDIENT_IMAGES[key]}`}
                  alt={t.ingredients.items[key].name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-sm font-bold text-brown-deep">
                {t.ingredients.items[key].name}
              </h3>
              <p className="text-xs leading-relaxed text-text-soft">
                {t.ingredients.items[key].desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

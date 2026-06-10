import { motion, useReducedMotion } from 'motion/react'
import { useLanguage } from '../context/LanguageContext'
import { buildOrderLink } from '../config/site'

// Product image placeholder — final asset path comes from product.image,
// e.g. public/images/products/hair-oil-100ml.jpg (~800×800)
function ProductPlaceholder({ variant }) {
  const isRoller = variant === 'derma-roller'
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-hidden="true">
      <rect width="400" height="300" fill="var(--color-cream)" />
      {isRoller ? (
        <g stroke="var(--color-brown)" strokeWidth="6" strokeLinecap="round" fill="none">
          <rect x="150" y="70" width="100" height="60" rx="14" fill="var(--color-sage)" />
          <line x1="200" y1="130" x2="200" y2="230" />
          <circle cx="200" cy="100" r="6" fill="var(--color-offwhite)" stroke="none" />
        </g>
      ) : (
        <g>
          <rect x="165" y="60" width="70" height="170" rx="16" fill="var(--color-sage)" />
          <rect x="180" y="35" width="40" height="30" rx="6" fill="var(--color-brown)" />
          <rect x="175" y="110" width="50" height="70" rx="8" fill="var(--color-offwhite)" />
        </g>
      )}
    </svg>
  )
}

export default function ProductCard({ product, index }) {
  const { lang, t } = useLanguage()
  const reducedMotion = useReducedMotion()
  const onSale = product.oldPrice != null

  return (
    <motion.article
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 32 }}
      whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
      whileHover={reducedMotion ? undefined : { y: -6 }}
      className="relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-shadow duration-300 hover:shadow-xl"
    >
      {onSale && (
        <span className="absolute top-4 start-4 z-10 rounded-full bg-sale px-3 py-1 text-sm font-bold text-offwhite">
          {t.products.sale}
        </span>
      )}

      <div className="aspect-4/3 w-full overflow-hidden">
        <ProductPlaceholder variant={product.id} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-lg font-bold text-brown-deep">{product.name[lang]}</h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-text-soft">
          {product.description[lang]}
        </p>

        <div className="mb-4 flex items-baseline gap-2">
          <span className="text-2xl font-extrabold text-sage-deep">
            {t.products.currency} {product.price}
          </span>
          {onSale && (
            <s className="text-base text-text-soft">
              {t.products.currency} {product.oldPrice}
            </s>
          )}
        </div>

        <motion.a
          href={buildOrderLink(lang, product.name[lang], product.price)}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={reducedMotion ? undefined : { scale: 0.97 }}
          className="rounded-full bg-sage-deep px-5 py-3 text-center text-sm font-bold text-offwhite transition-colors duration-200 hover:bg-brown"
        >
          {t.products.order}
        </motion.a>
      </div>
    </motion.article>
  )
}

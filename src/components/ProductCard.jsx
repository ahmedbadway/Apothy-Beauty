import { motion, useReducedMotion } from 'motion/react'
import { useLanguage } from '../context/LanguageContext'
import { buildOrderLink } from '../config/site'
import { EASE_OUT_QUINT, tap } from '../config/motion'

export default function ProductCard({ product, index }) {
  const { lang, t } = useLanguage()
  const reducedMotion = useReducedMotion()
  const onSale = product.oldPrice != null

  return (
    <motion.article
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 32 }}
      whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: EASE_OUT_QUINT }}
      whileHover={reducedMotion ? undefined : { y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-shadow duration-300 hover:shadow-xl"
    >
      {onSale && (
        <span className="absolute top-4 start-4 z-10 rounded-full bg-sale px-3 py-1 text-sm font-bold text-offwhite shadow-sm">
          {t.products.sale}
        </span>
      )}

      <div className="aspect-4/3 w-full overflow-hidden bg-cream">
        <img
          src={`${import.meta.env.BASE_URL}${product.image}`}
          alt={product.name[lang]}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-lg font-bold leading-snug text-brown-deep">
          {product.name[lang]}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-text-soft">
          {product.description[lang]}
        </p>

        <div className="mb-4 flex items-baseline gap-2">
          <span className="text-2xl font-extrabold tracking-tight text-sage-deep">
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
          whileTap={reducedMotion ? undefined : tap}
          className="rounded-full bg-sage-deep px-5 py-3 text-center text-sm font-bold text-offwhite transition-colors duration-200 hover:bg-brown"
        >
          {t.products.order}
        </motion.a>
      </div>
    </motion.article>
  )
}

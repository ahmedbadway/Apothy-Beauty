import { motion, useReducedMotion } from 'motion/react'
import { useLanguage } from '../context/LanguageContext'
import { PRODUCTS } from '../config/products'
import { reveal } from '../config/motion'
import ProductCard from './ProductCard'

export default function ProductsSection() {
  const { t } = useLanguage()
  const reducedMotion = useReducedMotion()

  return (
    <section id="products" className="relative px-4 py-20 sm:py-28">
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'var(--color-overlay)' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl">
        <motion.div {...reveal(reducedMotion)} className="mb-12 text-center">
          <h2 className="display mb-3 text-3xl text-brown-deep sm:text-4xl">
            {t.products.title}
          </h2>
          <p className="text-lg text-text-soft">{t.products.subtitle}</p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

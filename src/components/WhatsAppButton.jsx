import { motion, useReducedMotion } from 'motion/react'
import { useLanguage } from '../context/LanguageContext'
import { buildWhatsAppLink } from '../config/site'

export default function WhatsAppButton() {
  const { t } = useLanguage()
  const reducedMotion = useReducedMotion()

  return (
    <motion.a
      href={buildWhatsAppLink(t.contact.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.6 }}
      animate={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.4, ease: 'easeOut' }}
      whileHover={reducedMotion ? undefined : { scale: 1.08 }}
      whileTap={reducedMotion ? undefined : { scale: 0.94 }}
      className="fixed bottom-5 end-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-offwhite shadow-xl"
      aria-label={t.floatingWhatsApp}
      title={t.floatingWhatsApp}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5 13.9c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.8 1.4 1.8 2.2 1.2 1.1 2.3 1.4 2.6 1.6.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .7-.3 1.5z" />
      </svg>
    </motion.a>
  )
}

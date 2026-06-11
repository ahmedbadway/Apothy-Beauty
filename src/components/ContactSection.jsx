import { motion, useReducedMotion } from 'motion/react'
import { useLanguage } from '../context/LanguageContext'
import { buildWhatsAppLink, SOCIAL_LINKS } from '../config/site'
import { reveal, EASE_OUT_EXPO } from '../config/motion'

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.2" cy="6.8" r="1.3" fill="currentColor" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.5 3c.4 2.3 1.9 3.9 4.2 4.2v3.1c-1.6 0-3-.5-4.2-1.4v6.6a6.2 6.2 0 1 1-6.2-6.2c.3 0 .7 0 1 .1v3.2a3 3 0 1 0 2.1 2.9V3h3.1z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5 13.9c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.8 1.4 1.8 2.2 1.2 1.1 2.3 1.4 2.6 1.6.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .7-.3 1.5z" />
    </svg>
  )
}

export default function ContactSection() {
  const { t } = useLanguage()
  const reducedMotion = useReducedMotion()

  const socials = [
    { label: 'Instagram', href: SOCIAL_LINKS.instagram, icon: <InstagramIcon /> },
    { label: 'TikTok', href: SOCIAL_LINKS.tiktok, icon: <TikTokIcon /> },
  ]

  return (
    <section id="contact" className="relative px-4 py-20 sm:py-28">
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'var(--color-overlay)' }}
        aria-hidden="true"
      />
      <motion.div {...reveal(reducedMotion)} className="relative mx-auto max-w-2xl text-center">
        <h2 className="display mb-3 text-3xl text-brown-deep sm:text-4xl">
          {t.contact.title}
        </h2>
        <p className="mb-10 text-lg text-text-soft">{t.contact.subtitle}</p>

        <motion.a
          href={buildWhatsAppLink(t.contact.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={reducedMotion ? undefined : { scale: 1.04, y: -2 }}
          whileTap={reducedMotion ? undefined : { scale: 0.97 }}
          transition={{ duration: 0.18, ease: EASE_OUT_EXPO }}
          className="mb-10 inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-lg font-bold text-offwhite shadow-lg"
        >
          <WhatsAppIcon />
          {t.contact.whatsapp}
        </motion.a>

        <p className="mb-4 font-semibold text-text-soft">{t.contact.follow}</p>
        <div className="flex justify-center gap-4">
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reducedMotion ? undefined : { y: -3 }}
              whileTap={reducedMotion ? undefined : { scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 font-semibold text-brown transition-colors duration-200 hover:text-accent"
            >
              {social.icon}
              {social.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

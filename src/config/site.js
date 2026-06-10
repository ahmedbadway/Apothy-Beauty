// ── Single place to update contact & social details ──
export const WHATSAPP_NUMBER = '+20XXXXXXXXXX' // TODO: replace with the real number

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/apothy.beauty',
  tiktok: 'https://tiktok.com/@apothybeauty',
}

export function buildWhatsAppLink(message) {
  const number = WHATSAPP_NUMBER.replace(/[^0-9]/g, '')
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export function buildOrderLink(lang, productName, price) {
  const message =
    lang === 'ar'
      ? `مرحباً! أرغب في طلب: ${productName} — السعر ${price} جنيه`
      : `Hello! I'd like to order: ${productName} — Price LE ${price}`
  return buildWhatsAppLink(message)
}

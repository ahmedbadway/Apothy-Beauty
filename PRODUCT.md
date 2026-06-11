# PRODUCT.md — Apothy Beauty

## Register

**Brand** — this is a marketing/landing surface where design IS the product.
One-page scroll site; its job is to make visitors trust the brand and order on WhatsApp.

## Product

Apothy Beauty is an Egyptian natural hair-care brand. The site sells three
products — Mulan's Grace Hair Oil (100ml / 850 LE, 50ml / 550 LE) and a ZGTS
Derma Roller (1.0mm / 170 LE, on sale from 200) — entirely through WhatsApp
ordering; there is no cart or checkout.

## Target users

- Egyptian (and Arabic-speaking) women researching natural hair-loss and
  hair-growth remedies, mostly on mobile, arriving from Instagram/TikTok.
- Arabic is the primary language (RTL, default); English is secondary via a
  navbar toggle.
- They are skeptical of synthetic products and respond to ingredient
  transparency, real testimonials, and a personal, direct ordering channel.

## Desired emotions

Calm confidence, natural purity, premium-but-approachable. The visitor should
feel the products are handmade with care, not mass-produced.

## Brand personality (3 words)

Natural · Trustworthy · Warm

## Visual identity (committed — preserve, don't reinvent)

- **Palette:** sage green (`--color-sage`, `--color-sage-deep`), cream/offwhite,
  warm brown (`--color-brown`, `--color-brown-deep`), copper accent
  (`--color-accent`). All colors live as CSS variables in `src/index.css :root`.
- **Aesthetic:** glassmorphism over a fixed full-page video background
  (`.glass` utility; overlay kept very light so the video breathes).
- **Type:** Cairo (Arabic) + Nunito (English). `.display` class for headlines —
  Arabic-aware: never negative letter-spacing on Cairo.
- **Motion:** Motion (motion/react), Emil Kowalski language — strong ease-out
  curves (`--ease-out-quint`, `--ease-out-expo` in `src/config/motion.js`),
  reveals under 300ms feel, always gated by `prefers-reduced-motion`.

## Anti-references (never look like)

- Generic AI-gradient SaaS landings (purple glows, dark mesh heroes).
- Cluttered e-commerce listing pages — this is a brand story, not a catalog.
- Clinical/pharma sites — natural warmth, not sterile white.
- Heavy parallax/scroll-hijack agency sites — motion stays calm and functional.

## Strategic design principles

1. **WhatsApp is the only conversion** — every section funnels to one tap;
   the floating button never disappears; prefilled messages carry product + price.
2. **Arabic-first** — RTL is the default experience, not an adaptation; use
   logical properties (`ms-/me-/start-/end-`) so both directions are native.
3. **Video is the brand canvas** — surfaces are glass over it; never bury it
   under solid fills.
4. **Ingredient transparency builds trust** — ingredients get equal visual
   weight to products.
5. **Accessibility floor:** visible focus states, ≥4.5:1 body-text contrast on
   glass, reduced-motion and reduced-transparency fallbacks.

## Constraints

- React + Vite + Tailwind CSS v4 + Motion. GitHub Pages deploy
  (`base: /Apothy-Beauty/`; always `import.meta.env.BASE_URL` for assets).
- Single config point for the WhatsApp number: `src/config/site.js`.
- All copy bilingual in `src/config/translations.js`.

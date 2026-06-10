# Apothy Beauty 🌿

One-page bilingual (AR/EN) marketing site for Apothy Beauty natural hair-care products.
Built with **React + Vite + Tailwind CSS v4 + Motion**.

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
```

## 📁 Asset swap guide

SVG placeholders are used everywhere an asset is missing. Drop the real file at the
path below — no code changes needed (except the product images, see note).

| Asset | Path | Expected size |
| --- | --- | --- |
| Background video | `public/videos/background.mp4` | 1920×1080, H.264, muted-friendly, ≤10 MB ideally |
| Logo | `public/images/logo/logo.png` | ~512×512, transparent PNG |
| Hair Oil 100ml photo | `public/images/products/hair-oil-100ml.jpg` | ~800×800 |
| Hair Oil 50ml photo | `public/images/products/hair-oil-50ml.jpg` | ~800×800 |
| Derma Roller photo | `public/images/products/derma-roller.jpg` | ~800×800 |
| Ingredient icons | `public/images/ingredients/argan.svg`, `jojoba.svg`, `castor.svg`, `blackseed.svg`, `rosemary.svg`, `mint.svg` | ~120×120 |

Notes:
- **Video**: just drop the file — `VideoBackground.jsx` already points at it and
  fades from the animated-gradient fallback to the video automatically.
- **Product photos**: paths are already defined in `src/config/products.js`
  (`image` field). Swap the inline `<ProductPlaceholder>` in
  `src/components/ProductCard.jsx` for an `<img src={`${import.meta.env.BASE_URL}${product.image}`}>` once the photos exist.
- **Logo**: replace `<LogoPlaceholder>` in `src/components/Navbar.jsx` with
  `<img src={`${import.meta.env.BASE_URL}images/logo/logo.png`}>`.
- **Ingredient icons**: replace the inline SVGs in
  `src/components/IngredientsSection.jsx` the same way.

## 📱 WhatsApp number

One place only: `src/config/site.js` → `WHATSAPP_NUMBER` (currently the
placeholder `+20XXXXXXXXXX`). All order buttons and the floating button use it.

## 🌍 Languages

Arabic (default, RTL) / English — toggle in the navbar. All copy lives in
`src/config/translations.js`.

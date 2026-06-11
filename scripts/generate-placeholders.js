// Generates placeholder assets for manual swap later.
// Requires one-off deps (not saved to package.json):
//   npm install --no-save sharp ffmpeg-static
// Run: node scripts/generate-placeholders.js
import { execFileSync } from 'node:child_process'
import { mkdirSync } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'
import ffmpegPath from 'ffmpeg-static'

const ROOT = path.resolve(import.meta.dirname, '..')
const pub = (...p) => path.join(ROOT, 'public', ...p)

// Palette must match src/index.css :root
const C = {
  cream: '#f3ecdf',
  sage: '#a8bba2',
  sageDeep: '#5f7a5a',
  brown: '#6b4f3a',
  brownDeep: '#4a3628',
  offwhite: '#faf7f1',
  accentSoft: '#e8c9a8',
}

function productSvg(line1, line2) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
  <rect width="800" height="800" fill="${C.cream}"/>
  <rect x="24" y="24" width="752" height="752" rx="32" fill="none" stroke="${C.sage}" stroke-width="4" stroke-dasharray="16 12"/>
  <rect x="330" y="180" width="140" height="320" rx="28" fill="${C.sage}"/>
  <rect x="360" y="130" width="80" height="56" rx="12" fill="${C.brown}"/>
  <rect x="350" y="280" width="100" height="140" rx="14" fill="${C.offwhite}"/>
  <text x="400" y="580" text-anchor="middle" font-family="sans-serif" font-size="44" font-weight="bold" fill="${C.brownDeep}">${line1}</text>
  <text x="400" y="640" text-anchor="middle" font-family="sans-serif" font-size="34" fill="${C.brown}">${line2}</text>
  <text x="400" y="710" text-anchor="middle" font-family="sans-serif" font-size="28" fill="${C.sageDeep}">800 x 800 — replace me</text>
</svg>`
}

const products = [
  { file: 'hair-oil-100ml.jpg', line1: "Mulan's Grace", line2: 'Hair Oil 100ml' },
  { file: 'hair-oil-50ml.jpg', line1: "Mulan's Grace", line2: 'Hair Oil 50ml' },
  { file: 'derma-roller.jpg', line1: 'ZGTS Derma Roller', line2: '1.0mm' },
]

const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="60" viewBox="0 0 200 60">
  <rect width="200" height="60" rx="12" fill="${C.offwhite}"/>
  <path d="M30 12c5 5 8 10 8 15a8 8 0 1 1-16 0c0-5 3-10 8-15z" fill="${C.sage}" stroke="${C.sageDeep}" stroke-width="1.5"/>
  <text x="50" y="32" font-family="sans-serif" font-size="17" font-weight="bold" fill="${C.brownDeep}">Apothy Beauty</text>
  <text x="50" y="48" font-family="sans-serif" font-size="9" fill="${C.sageDeep}">200 x 60 — replace me</text>
</svg>`

async function main() {
  mkdirSync(pub('images', 'products'), { recursive: true })
  mkdirSync(pub('images', 'logo'), { recursive: true })
  mkdirSync(pub('videos'), { recursive: true })

  for (const p of products) {
    await sharp(Buffer.from(productSvg(p.line1, p.line2)))
      .jpeg({ quality: 85 })
      .toFile(pub('images', 'products', p.file))
    console.log('✓', p.file)
  }

  await sharp(Buffer.from(logoSvg)).png().toFile(pub('images', 'logo', 'logo.png'))
  console.log('✓ logo.png')

  // 8s seamless-loop animated gradient in the brand palette, 1280x720 H.264
  execFileSync(ffmpegPath, [
    '-y',
    '-f', 'lavfi',
    '-i', `gradients=size=1280x720:duration=8:speed=0.05:c0=${C.cream}:c1=${C.sage}:c2=${C.accentSoft}:c3=${C.offwhite}:rate=24`,
    '-c:v', 'libx264',
    '-pix_fmt', 'yuv420p',
    '-movflags', '+faststart',
    pub('videos', 'background.mp4'),
  ], { stdio: 'pipe' })
  console.log('✓ background.mp4')
}

main()

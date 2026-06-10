import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'

// SVG poster placeholder — final asset: public/videos/background.mp4
const POSTER_SVG = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f3ecdf"/>
        <stop offset="50%" stop-color="#a8bba2"/>
        <stop offset="100%" stop-color="#6b4f3a"/>
      </linearGradient>
    </defs>
    <rect width="1920" height="1080" fill="url(#g)"/>
  </svg>`,
)}`

export default function VideoBackground() {
  const [videoReady, setVideoReady] = useState(false)
  const reducedMotion = useReducedMotion()

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Animated gradient fallback — visible until the real video plays */}
      {!videoReady && (
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(120deg, var(--color-cream), var(--color-sage), var(--color-accent-soft), var(--color-cream))',
            backgroundSize: '300% 300%',
          }}
          animate={
            reducedMotion
              ? undefined
              : { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }
          }
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
      )}

      {/* Real background video — drop the file at public/videos/background.mp4 */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={`${import.meta.env.BASE_URL}videos/background.mp4`}
        poster={POSTER_SVG}
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setVideoReady(true)}
        style={{ opacity: videoReady ? 1 : 0, transition: 'opacity 1s ease' }}
      />
    </div>
  )
}

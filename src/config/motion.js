// Shared motion language (Emil Kowalski principles): strong ease-out curves,
// short intentional durations, reveals that enhance already-visible content.
// Every helper takes `reduced` so callers honor prefers-reduced-motion.

export const EASE_OUT_QUINT = [0.22, 1, 0.36, 1]
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1]

// Scroll-triggered reveal: fade + gentle slide-up. Reduced motion → pure fade.
export function reveal(reduced, { delay = 0, y = 28, duration = 0.6 } = {}) {
  return {
    initial: reduced ? { opacity: 0 } : { opacity: 0, y },
    whileInView: reduced ? { opacity: 1 } : { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration, delay, ease: EASE_OUT_QUINT },
  }
}

// Subtle press feedback for any pressable element.
export const tap = { scale: 0.97 }

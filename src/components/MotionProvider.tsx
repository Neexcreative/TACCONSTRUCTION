'use client'

import { MotionConfig } from 'framer-motion'

// Honour the visitor's reduced-motion preference for every Framer Motion
// animation: transforms and layout motion are skipped, opacity fades remain.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

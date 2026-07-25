'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

type StatIconName = 'hard-hat' | 'clipboard-check' | 'star'

type AnimatedCounterProps = {
  target: number
  suffix?: string
  duration?: number
  label: string
  icon: StatIconName
  start: boolean
}

const stats = [
  { target: 15, suffix: '+', duration: 1.6, label: 'Years Experience', icon: 'hard-hat' },
  { target: 500, suffix: '+', duration: 2, label: 'Projects Delivered', icon: 'clipboard-check' },
  { target: 98, suffix: '%', duration: 1.7, label: 'Client Satisfaction', icon: 'star' },
] satisfies Array<{
  target: number
  suffix: string
  duration: number
  label: string
  icon: StatIconName
}>

function StatIcon({ name }: { name: StatIconName }) {
  const paths = {
    'hard-hat': (
      <>
        <path d="M4 15a8 8 0 0 1 16 0" />
        <path d="M9 15V8.7M15 15V8.7" />
        <path d="M3 15h18v3H3z" />
      </>
    ),
    'clipboard-check': (
      <>
        <path d="M9 5H6.8A1.8 1.8 0 0 0 5 6.8v12.4A1.8 1.8 0 0 0 6.8 21h10.4a1.8 1.8 0 0 0 1.8-1.8V6.8A1.8 1.8 0 0 0 17.2 5H15" />
        <path d="M9 3h6v4H9z" />
        <path d="m8.5 14 2.2 2.2 4.8-5" />
      </>
    ),
    star: (
      <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
    ),
  }

  return (
    <svg
      className="home-hero-stat-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  )
}

function AnimatedCounter({
  target,
  suffix = '',
  duration = 1.8,
  label,
  icon,
  start,
}: AnimatedCounterProps) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return

    let animationFrame = 0
    const startedAt = performance.now()
    const durationMs = duration * 1000

    const update = (now: number) => {
      const progress = Math.min((now - startedAt) / durationMs, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)

      setValue(progress === 1 ? target : Math.floor(target * easedProgress))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(update)
      }
    }

    animationFrame = requestAnimationFrame(update)

    return () => cancelAnimationFrame(animationFrame)
  }, [duration, start, target])

  return (
    <div className="home-hero-stat">
      <div className="home-hero-stat-value">
        <StatIcon name={icon} />
        <div
          className="home-hero-stat-number"
          aria-label={`${target}${suffix}`}
        >
          <span aria-hidden="true">{value}</span>
          <span aria-hidden="true">{suffix}</span>
        </div>
      </div>
      <div className="home-hero-stat-label">{label}</div>
    </div>
  )
}

export default function StatsCounter() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section
      ref={sectionRef}
      className="home-hero-stats"
      aria-label="T.A.C Construction statistics"
    >
      {stats.map((stat) => (
        <AnimatedCounter key={stat.label} {...stat} start={isInView} />
      ))}
    </section>
  )
}

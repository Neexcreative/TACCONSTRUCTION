'use client'
import { useEffect, useRef, useState } from 'react'

const F = 'Outfit, sans-serif'

const stats = [
  { num: 500, suffix: '+', label: 'Projects Completed', shape: 'circle' },
  { num: 15, suffix: '+', label: 'Years Experience', shape: 'square' },
  { num: 98, suffix: '%', label: 'Client Satisfaction', shape: 'rotate' },
  { num: 50, suffix: '+', label: 'Expert Tradesmen', shape: 'circle' },
]

function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [active, target, duration])
  return count
}

function StatItem({ num, suffix, label, shape, active }: { num: number; suffix: string; label: string; shape: string; active: boolean }) {
  const count = useCounter(num, 1600, active)

  const shapeEl =
    shape === 'circle' ? (
      <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#0D0D0D', border: '2px solid #0D0D0D', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#F0EDE9' }} />
      </div>
    ) : shape === 'rotate' ? (
      <div style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <div style={{ width: 34, height: 34, background: '#0D0D0D', border: '2px solid #0D0D0D', transform: 'rotate(45deg)' }} />
      </div>
    ) : (
      <div style={{ width: 48, height: 48, background: '#0D0D0D', border: '2px solid #0D0D0D', flexShrink: 0 }} />
    )

  return (
    <div style={{
      background: '#F0EDE9',
      border: '1px solid rgba(13,13,13,0.12)',
      padding: '44px 36px',
      display: 'flex', flexDirection: 'column', gap: 16,
      position: 'relative',
    }}>
      {/* Geometric shape decoration */}
      <div style={{ position: 'absolute', top: 20, right: 20, opacity: 0.15 }}>
        {shapeEl}
      </div>

      {/* Number */}
      <div style={{ fontFamily: F, fontWeight: 700, fontSize: 'clamp(42px, 4vw, 64px)', color: '#0D0D0D', lineHeight: 1, letterSpacing: '-0.03em' }}>
        {count}<span style={{ color: '#C8102E' }}>{suffix}</span>
      </div>

      {/* Label */}
      <div style={{ fontFamily: F, fontWeight: 600, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(18,18,18,0.58)' }}>
        {label}
      </div>
    </div>
  )
}

export default function StatsCounter() {
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="responsive-four-col" style={{
      borderTop: '1px solid rgba(13,13,13,0.12)', borderBottom: '1px solid rgba(13,13,13,0.12)',
    }}>
      {stats.map((s, i) => (
        <div key={s.label} style={{ borderRight: i < stats.length - 1 ? '1px solid rgba(13,13,13,0.12)' : 'none' }}>
          <StatItem {...s} active={active} />
        </div>
      ))}
    </div>
  )
}

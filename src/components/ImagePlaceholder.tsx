'use client'

import Image from 'next/image'
import { useState } from 'react'

type ImagePlaceholderProps = {
  alt: string
  src: string
  label: string
  note?: string
  priority?: boolean
  dark?: boolean
  ratio?: string
  minHeight?: number
}

const F = 'Outfit, sans-serif'

export default function ImagePlaceholder({
  alt,
  src,
  label,
  note,
  priority = false,
  dark = false,
  ratio = '16 / 10',
  minHeight = 280,
}: ImagePlaceholderProps) {
  const [failed, setFailed] = useState(false)

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: ratio,
        minHeight,
        overflow: 'hidden',
        border: dark ? '1px solid rgba(255,255,255,0.18)' : '1px solid rgba(13,13,13,0.12)',
        background: dark
          ? 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))'
          : 'linear-gradient(180deg, #F0F1F2, #E4E6E8)',
      }}
    >
      {!failed ? (
        <>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
            onError={() => setFailed(true)}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: dark
                ? 'linear-gradient(180deg, rgba(8,8,8,0.28), rgba(8,8,8,0.58))'
                : 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.22))',
            }}
          />
        </>
      ) : (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: dark
              ? 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)'
              : 'linear-gradient(rgba(13,13,13,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(13,13,13,0.06) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      )}

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
        }}
      >
        <div
          style={{
            textAlign: 'center',
            background: dark ? 'rgba(8,8,8,0.58)' : 'rgba(255,255,255,0.82)',
            color: dark ? '#F5F2EE' : '#0D0D0D',
            border: dark ? '1px solid rgba(255,255,255,0.16)' : '1px solid rgba(13,13,13,0.1)',
            padding: '14px 18px',
            maxWidth: 340,
            backdropFilter: 'blur(2px)',
          }}
        >
          <div
            style={{
              fontFamily: F,
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            {label}
          </div>
          {note ? (
            <div
              style={{
                marginTop: 8,
                fontFamily: F,
                fontSize: 12,
                color: dark ? 'rgba(245,242,238,0.72)' : 'rgba(13,13,13,0.6)',
              }}
            >
              {note}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

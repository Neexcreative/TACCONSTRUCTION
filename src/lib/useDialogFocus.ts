'use client'

import { useEffect, useRef, type RefObject } from 'react'

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

type Options = {
  /** Elements that make up the dialog, in tab order. Focus is kept inside them when `trap` is true. */
  containers: RefObject<HTMLElement | null>[]
  onClose: () => void
  /** Element focused when the dialog opens; defaults to the first focusable element. */
  initialFocus?: RefObject<HTMLElement | null>
  trap?: boolean
}

/**
 * Keyboard behaviour shared by overlays: initial focus, Escape to close,
 * optional Tab containment, and focus restoration to the element that
 * opened the overlay.
 */
export function useDialogFocus(open: boolean, { containers, onClose, initialFocus, trap = true }: Options) {
  const onCloseRef = useRef(onClose)
  useEffect(() => {
    onCloseRef.current = onClose
  })

  useEffect(() => {
    if (!open) return

    const opener = document.activeElement as HTMLElement | null

    const focusable = () =>
      containers.flatMap((ref) =>
        ref.current ? Array.from(ref.current.querySelectorAll<HTMLElement>(FOCUSABLE)) : [],
      )

    const frame = requestAnimationFrame(() => {
      ;(initialFocus?.current ?? focusable()[0])?.focus()
    })

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCloseRef.current()
        return
      }
      if (!trap || event.key !== 'Tab') return

      const items = focusable()
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      const active = document.activeElement as HTMLElement | null
      const inside = items.includes(active as HTMLElement)

      if (event.shiftKey && (active === first || !inside)) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && (active === last || !inside)) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('keydown', onKeyDown)
      const active = document.activeElement
      const focusWasInside =
        !active || active === document.body || containers.some((ref) => ref.current?.contains(active))
      if (focusWasInside && opener?.isConnected) opener.focus()
    }
    // containers and initialFocus are stable refs
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, trap])
}

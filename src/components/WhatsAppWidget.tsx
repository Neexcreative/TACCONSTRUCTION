'use client'

import { useEffect, useRef, useState } from 'react'

const WHATSAPP_NUMBER = '353851976302'
const WHATSAPP_MESSAGE =
  "Hi TAC Construction, I found you through your website and I'd like to ask about a project."
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12.04 2a9.84 9.84 0 0 0-8.45 14.88L2.05 22l5.25-1.5A9.96 9.96 0 1 0 12.04 2Zm0 17.8a7.8 7.8 0 0 1-3.98-1.09l-.28-.17-3.12.89.91-3.04-.18-.29a7.77 7.77 0 1 1 6.65 3.7Zm4.27-5.83c-.23-.12-1.38-.68-1.6-.76-.21-.08-.37-.12-.52.12-.16.23-.61.76-.75.92-.13.15-.27.17-.5.05a6.4 6.4 0 0 1-1.88-1.16 7.07 7.07 0 0 1-1.3-1.62c-.14-.23-.02-.36.1-.48.1-.1.23-.27.35-.41.12-.13.15-.23.23-.39.08-.15.04-.29-.02-.41-.06-.12-.52-1.26-.72-1.72-.19-.46-.38-.4-.52-.41h-.45c-.16 0-.41.06-.63.29-.21.23-.82.8-.82 1.96 0 1.15.84 2.27.96 2.42.12.16 1.65 2.52 4 3.54.56.24 1 .39 1.34.5.56.18 1.07.15 1.47.09.45-.07 1.38-.57 1.58-1.11.19-.55.19-1.02.13-1.11-.06-.1-.21-.16-.45-.28Z"
      />
    </svg>
  )
}

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const widgetRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    closeButtonRef.current?.focus()

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!widgetRef.current?.contains(event.target as Node)) setIsOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('mousedown', closeOnOutsideClick)

    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('mousedown', closeOnOutsideClick)
    }
  }, [isOpen])

  return (
    <div className="whatsapp-widget" ref={widgetRef}>
      {isOpen && (
        <section
          id="whatsapp-popup"
          className="whatsapp-popup"
          role="dialog"
          aria-labelledby="whatsapp-popup-title"
          aria-describedby="whatsapp-popup-description"
        >
          <div className="whatsapp-popup-header">
            <div>
              <span className="whatsapp-popup-kicker">WhatsApp</span>
              <h2 id="whatsapp-popup-title">TAC Construction</h2>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              className="whatsapp-popup-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp chat popup"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <div className="whatsapp-popup-body">
            <p className="whatsapp-popup-message">Hi, how can we help?</p>
            <p id="whatsapp-popup-description" className="whatsapp-popup-supporting">
              Need a quote or have a question about a project? Chat with us on WhatsApp.
            </p>
            <a
              className="whatsapp-popup-cta"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Start WhatsApp Chat (opens in a new tab)"
            >
              <WhatsAppIcon />
              Start WhatsApp Chat
            </a>
          </div>
        </section>
      )}

      <button
        type="button"
        className="whatsapp-widget-toggle"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Close WhatsApp contact popup' : 'Open WhatsApp contact popup'}
        aria-expanded={isOpen}
        aria-controls="whatsapp-popup"
      >
        <WhatsAppIcon />
      </button>
    </div>
  )
}

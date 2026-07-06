import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'T.A.C Construction | Dublin Renovation & Building Specialists',
  description: 'Expert residential renovation, heating, plumbing, roofing and general construction across Dublin and Ireland. 15+ years of excellence.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

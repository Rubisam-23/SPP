import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sudanese Professionals Parliament',
  description: 'Drafting the Future of Sudan - A multilingual virtual parliament platform',
  keywords: ['Sudan', 'Parliament', 'Democracy', 'Professionals'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  )
}

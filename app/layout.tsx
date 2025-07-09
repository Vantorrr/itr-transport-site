import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ИТР - Институт Транспортного Развития',
  description: 'Имитационное транспортное моделирование. Мы помогаем видеть и анализировать каждую деталь транспортной сети.',
  keywords: 'транспортное моделирование, имитационное моделирование, транспортные системы, ИТС, оптимизация транспорта',
  authors: [{ name: 'ITR Team' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
} 
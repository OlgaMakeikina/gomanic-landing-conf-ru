import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Gomanic - Конференция по маникюру',
  description: 'Бесплатная обучающая конференция по маникюру. Презентация новой платформы для мастеров.',
  keywords: 'маникюр, конференция, обучение, мастер маникюра, gomanic',
  openGraph: {
    title: 'Gomanic - Конференция по маникюру',
    description: 'Бесплатная обучающая конференция по маникюру',
    type: 'website',
    locale: 'ru_RU',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className} style={{ backgroundColor: '#fdfffe', color: '#3b3b39' }}>
        {children}
      </body>
    </html>
  )
}

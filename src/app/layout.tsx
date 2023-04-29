import Header from './Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'A News App',
  description: 'Generated for news distribution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 dark:bg-zinc-900 dark:text-white transition-all duration-700 ${inter.className}`}>
        <Header/>
        <div className='max-w-6xl mx-auto'>{children}</div></body>
    </html>
  )
}

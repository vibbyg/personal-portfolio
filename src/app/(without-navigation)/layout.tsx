import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import 'src/app/globals.scss';

const barlow = Barlow({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic']
})

export const metadata: Metadata = {
  title: 'VibbySite',
  description: 'Vibhor\'s Personal Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        {children}
        </body>
    </html>
  )
}
import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import 'src/app/globals.scss';
import style from './layout.module.scss';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const barlow = Barlow({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  style: ['italic', 'normal']
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
        <div className={style.container}>
        <Navbar />
        {children}
        <Footer />
        </div>
        </body>
    </html>
  )
}
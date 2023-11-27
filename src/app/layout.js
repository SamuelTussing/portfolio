import { Inter } from 'next/font/google'
import './globals.css'
import { Poppins } from 'next/font/google'
import Header from '@/component/header/header'
import Footer from '@/component/footer/footer'
import Carousel from '@/component/carousel/carousel'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300','400','500','600'],
})

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={poppins.className}>
        <Header/>
        <Carousel/>
        {children}
        
        </body>
    </html>
  )
}

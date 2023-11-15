import Image from 'next/image'
import styles from '../styles/page.module.scss'
import Apropos from '@/component/apropos/apropos'
import PortfolioComp from '@/component/portfolio/portfolio'
import Contact from '@/component/contact/contact'
import Footer from '@/component/footer/footer'
import Carousel from '@/component/carousel/carousel'

export default function Home() {
  return (
    <main className={styles.main}>
      <Carousel/>
      <Apropos/>
      <PortfolioComp/>
      <Contact/>
      <Footer/>
    </main>
  )
}

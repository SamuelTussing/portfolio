import Image from 'next/image'
import styles from '../styles/page.module.scss'
import Apropos from '@/component/apropos/apropos'
import Portfolio from '@/component/portfolio/portfolio'
import Contact from '@/component/contact/contact'
import Footer from '@/component/footer/footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Apropos/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </main>
  )
}

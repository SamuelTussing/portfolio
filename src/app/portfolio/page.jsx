import Image from 'next/image'
import styles from '../../styles/page.module.scss'
import Footer from '../../component/footer/footer'

export default function Portfolio() {
  return (
    <main className={styles.main}>
        <div>Portfolio</div>
      <Footer/>
    </main>
  )
}
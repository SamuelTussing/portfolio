import Image from 'next/image'
import styles from '../../styles/page.module.scss'
import Footer from '../../component/footer/footer'
import Photo from "../../../public/img/portrait1-min.png"
import Photo2 from "../../../public/img/portrait2-min.png"
import Competence from '@/component/competence/competence'
import Contact from '@/component/contact/contact'
import Carousel from '@/component/carousel/carousel'


export default function APropos() {

  return (
    <main className={styles.main}>
        <div className={styles.PageAPContainer}>
            <div className={styles.PageAPCol1}>
                <Image src={Photo} alt="" className={styles.PageAPImg} width={200} height={300}/>
                <div className={styles.PageAPDescContainer}>
                    <h2 className={styles.PageAPTitle}>TUSSING SAMUEL</h2>
                    <p className={styles.PageAPText}>Je suis Samuel, graphiste de formation et intégrateur web junior, titulaire d&apos;une licence en Arts Appliqués et Designs. Ayant débuté ma carrière en tant qu&apos;infographiste spécialisé dans l&apos;impression, mon parcours s&apos;est naturellement orienté vers le domaine du web. Avec ma double compétence de graphiste et intégrateur web, j&apos;optimise la conception des applications web, assurant une amélioration significative de leur qualité et un développement fluide. Mon engagement envers l&apos;excellence dans le design et le développement web témoigne de ma passion pour l&apos;innovation, reflétant ma volonté constante de rester à la pointe des dernières tendances. </p>
                    
                </div>
            </div> 
            <div className={styles.PageAPCol2}>
                <Image src={Photo2} alt="" className={styles.PageAPImg2} width={200} height={300}/>
                <div className={styles.PageAPDescContainer}>
                    <p className={styles.PageAPText}>
                        Durant mes collaborations sur des projets PrestaShop, supervisées par un webmaster expérimenté, j&apos;ai acquis les fondements du référencement web. Cette compétence stratégique s&apos;est révélée cruciale dans la conception de sites visibles et efficaces, illustrant ma capacité à intégrer les principes du marketing en ligne dans mon approche. Animé par le désir de fusionner ces compétences diversifiées, j&apos;ai renforcé mes connaissances en entreprenant une formation intensive d&apos;Intégrateur Web sur neuf mois avec Openclassrooms, maîtrisant ainsi divers langages et technologies.</p>
                </div>
            </div>
            <p className={styles.APText}>
            Malgré le succès de ma formation, je reconnais que mes compétences restent limitées à la phase junior du développement. Je souhaite souligner humblement que je n&apos;affirme pas une maîtrise parfaite à ce stade de ma carrière. En tant qu&apos;intégrateur web junior, je demeure ouvert à l&apos;apprentissage continu. Actuellement, je n&apos;envisage pas le travail en freelance, mais je recherche une équipe dynamique où je pourrais renforcer mes compétences, approfondir mes connaissances, et contribuer de manière significative à des projets stimulants.
            </p>
        </div>
        
        <Competence/>
        <Contact/>
        <Footer/>
    </main>
  )
}
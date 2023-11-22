import Image from 'next/image'
import styles from '../../styles/page.module.scss'
import Footer from '../../component/footer/footer'
import Photo from "../../../public/img/portrait.jpg"
import Competence from '@/component/competence/competence'
import datas from "../../data/data.json"
import Contact from '@/component/contact/contact'
import Carousel from '@/component/carousel/carousel'


export default function APropos() {
    console.log(datas[0].front)
  return (
    <main className={styles.main}>
        <Carousel/>
        <div className={styles.PageAPContainer}>
            <div className={styles.PageAPCol1}>
                <Image src={Photo} alt="" className={styles.PageAPImg} width={200} height={300}/>
                <div className={styles.PageAPDescContainer}>
                    <h2 className={styles.PageAPTitle}>TUSSING SAMUEL</h2>
                    <p className={styles.PageAPText}>Je m&apos;appelle Samuel, graphiste de formation et actuellement intégrateur web junior. Fort d&apos;une licence en Arts Appliqués et Designs, j&apos;ai débuté ma carrière en tant qu&apos;infographiste spécialisé dans le domaine de l&apos;impression. Mon parcours professionnel s&apos;est ensuite orienté naturellement vers l&apos;univers du web. Grâce à ma double compétence en tant que graphiste et intégrateur web, je suis en mesure d&apos;appréhender de manière optimale la conception des applications web, garantissant ainsi une amélioration significative de leur qualité et un développement fluide. Mon engagement envers l&apos;excellence dans le design et le développement web reflète ma passion pour l&apos;innovation et ma volonté constante de rester à la pointe des dernières tendances. </p>
                    <Image src={Photo} alt="" className={styles.PageAPImghidden} width={200} height={300}/> 
                    
                </div>
            </div> 
            <div className={styles.PageAPCol2}>
                <Image src={Photo} alt="" className={styles.PageAPImg} width={200} height={300}/>
                <div className={styles.PageAPDescContainer}>
                    <p className={styles.PageAPText}>Avant d&apos;entamer ma carrière dans le développement front-end, j&apos;ai acquis une solide expérience en tant que graphiste au sein de diverses entreprises, notamment dans le secteur de l&apos;impression grand format, de l&apos;horlogerie, et d&apos;une boutique de jeux. Ma connaissance approfondie des cahiers des charges spécifiques aux imprimeurs témoigne de ma maîtrise des exigences techniques et esthétiques propres à ce domaine.
                    <br></br>
                    <br></br>
                    Au cours de mes expériences professionnelles, j&apos;ai eu l&apos;opportunité de collaborer sur des projets de sites web sous la plateforme PrestaShop. Mon apprentissage, supervisé par un webmaster expérimenté, m&apos;a permis d&apos;acquérir et d&apos;appliquer les fondements du référencement web. Cette compétence stratégique s&apos;est avérée essentielle dans la conception de sites efficaces et visibles, démontrant ainsi ma capacité à intégrer des principes fondamentaux du marketing en ligne dans mon approche de travail. Je suis maintenant animé par la volonté de fusionner ces compétences diversifiées pour contribuer de manière significative au succès de projets web innovants et performants. </p>

                    <p className={styles.PageAPText}>Par la suite, j&apos;ai renforcé mes connaissances et compétences en entreprenant une formation approfondie en tant qu&apos;Intégrateur Web dispensée par Openclassrooms sur une période de 9 mois. Ce programme exhaustif m&apos;a permis d&apos;acquérir une maîtrise des fondements du développement web, notamment en matière de langages tels que HTML, CSS, et SASS.</p> 

                    </div>
                    <p className={styles.APText}>Bien que la formation ait été couronnée de succès, je suis conscient que mes compétences et connaissances demeurent &quot;limitées&quot; à la phase de développement junior. Je tiens à souligner humblement que je ne revendique pas une maîtrise parfaite d&apos;un langage de programmation ou d&apos;un framework spécifique à ce stade de ma carrière. Mon statut d&apos;intégrateur web junior traduit ma volonté de continuer à apprendre et à évoluer.
                        <br></br>
                        <br></br>
                    Dans cette optique, je n&apos;envisage pas actuellement de travailler en freelance. Au contraire, je suis à la recherche d&apos;une équipe dynamique au sein de laquelle je pourrais consolider mes compétences et approfondir mes connaissances. Mon objectif est de contribuer de manière significative à des projets stimulants tout en bénéficiant d&apos;un environnement propice à l&apos;apprentissage continu.</p> 
                

            </div>
            
        </div>
        
        <Competence/>
        <Contact/>
        <Footer/>
    </main>
  )
}
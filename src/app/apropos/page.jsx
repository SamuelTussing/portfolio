import Image from 'next/image'
import styles from '../../styles/page.module.scss'
import Footer from '../../component/footer/footer'
import Photo from "../../../public/img/portrait.jpg"
import Competence from '@/component/competence/competence'

export default function APropos() {
  return (
    <main className={styles.main}>
        <div className={styles.PageAPContainer}>
            <div className={styles.PageAPCol1}>
                <Image src={Photo} alt="" className={styles.PageAPImg} width={200} height={300}/>
                <div className={styles.PageAPDescContainer}>
                    <h2 className={styles.PageAPTitle}>TUSSING SAMUEL</h2>
                    <p className={styles.PageAPText}>Je m&apos;appelle Samuel, je suis graphiste de formation et aujourd&apos;hui intégrateur
                    web junior. Après l&apos;obtention de ma licence en Arts  Appliqués et Designs, j&apos;ai
                    commencé à exercer en tant qu&apos;infographiste dans le domaine de l&apos;impression
                    avant de tout naturellement me pencher vers l&apos;univers du web. Cette double
                    casquette graphiste-intégrateur web me permet aujourd&apos;hui de penser les
                    applications web de façon optimale, améliorant leur qualité et favorisant un 
                    développement fluide. </p>
                    <Image src={Photo} alt="" className={styles.PageAPImghidden} width={200} height={300}/> 
                </div>
            </div> 
            <div className={styles.PageAPCol2}>
                <Image src={Photo} alt="" className={styles.PageAPImg} width={200} height={300}/>
                <div className={styles.PageAPDescContainer}>
                    <p className={styles.PageAPText}>Avant de me lancer dans l&apos;aventure du développement front-end, j&apos;ai eu
                    l&apos;occasion d&apos;exercer en tant que graphiste au sein de plusieurs entreprises
                    (imprimeurs grands formats, horloger, boutique de jeux...).  Le cahiers des 
                    charges imprimeur n&aposa plus de secret pour moi. Au cours de mes expériences
                    professionnelles j&apos;ai été amené à travailler sur des sites web prestashop. Formé
                    par un webmaster j&apos;ai pu apprendre et appliquer les bases du référencement
                    web. </p>

                    <p className={styles.PageAPText}>J&apos;ai ensuite complété mes connaissances et compétences en suivant la formation
                    Intégrateur Web chez Openclassrooms sur 9 mois. Cette formation m&apos;a permis
                    d&apos;apprendre les bases du développement web (html, css, sass...). </p> 

                    <p className={styles.APText}>Bien que la formation se soit très bien déroulée, j&apos;ai bien conscience que mes
                    compétences et connaissances sont «limitées». Je suis intégrateur web JUNIOR,
                    je n&apos;ai donc pas la prétention d&apos;affirmer que je maitrise parfaitement un
                    quelconque langage de programmation ou framework. C&apos;est pourquoi je ne
                    souhaite pas aujourd&apos;hui être freelance mais plutôt trouver une équipe dans 
                    laquelle je pourrais renforcer mes connaissances.</p> 
                </div>

            </div>
            
        </div>
        <Competence/>
        <Footer/>
    </main>
  )
}
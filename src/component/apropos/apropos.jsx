import Image from "next/image";
import styles from "@/styles/page.module.scss"
import Photo from "../../../public/img/portrait2-min.png"
import Button from "../button/button";



const Apropos = () =>{
    return(
        <div className={styles.APContainer}> 
            <Image src={Photo} alt="" className={styles.APImg} width={200} height={300}/>
            <div className={styles.APDescContainer}>
                <h2 className={styles.APTitle}>Integrateur web et pas que</h2>
                <p className={styles.APText}>Graphiste de formation avec une expérience de quatre années dans le domaine de l&apos;impression, j&apos;ai délibérément élargi mes compétences en me spécialisant en tant qu&apos;intégrateur frontend. En fusionnant les rôles de graphiste et de développeur web, je suis en mesure de concevoir des sites web à la fois esthétiquement attrayants et techniquement performants. Ma polyvalence me permet d&apos;appréhender le processus de développement d&apos;applications de manière holistique, en accordant une attention équilibrée à l&apos;aspect visuel et aux aspects techniques. </p>
                <p className={styles.APText}>Mon parcours professionnel reflète ma passion pour l&apos;innovation et mon engagement à rester constamment à la pointe des nouvelles tendances dans le domaine du design et du développement web. </p>

                <Button
                lien = "/apropos"
                content = "EN SAVOIR PLUS"/>  
            </div>
            
        </div>
        
        
    )
}

export default Apropos
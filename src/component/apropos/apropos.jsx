import Image from "next/image";
import styles from "@/styles/page.module.scss"
import Photo from "../../../public/img/portrait.jpg"
import Button from "../button/button";



const Apropos = () =>{
    return(
        <div className={styles.APContainer}> 
            <Image src={Photo} alt="" className={styles.APImg} width={200} height={300}/>
            <div className={styles.APDescContainer}>
                <h2 className={styles.APTitle}>Integrateur web & pas que</h2>
                <p className={styles.APText}>Graphiste de formation avec 4 ans d&apos;expérience dans le monde du print j&apos;ai décidé d&apos;acquérir de nouvelles compétences en tant qu&apos;intégrateur frontend. Possédant la double casquette graphiste-développeur web, je suis à même de créer des site web  visuellement attrayant sans négliger l&apos;aspect technique et le développement de l&apos;application. </p>
                <Button
                lien = "/apropos"
                content = "EN SAVOIR PLUS"/>  
            </div>
            
        </div>
        
        
    )
}

export default Apropos
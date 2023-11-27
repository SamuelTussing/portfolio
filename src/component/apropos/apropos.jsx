import Image from "next/image";
import styles from "@/styles/page.module.scss"
import Photo from "../../../public/img/portrait2-min.png"
import Button from "../button/button";



const Apropos = () =>{
    return(
        <div className={styles.APContainer}> 
            <Image src={Photo} alt="" className={styles.APImg} width={200} height={300}/>
            <div className={styles.APDescContainer}>

                <p className={styles.APText}>Graphiste de formation avec quatre années d&apos;expérience dans l&apos;impression, ma spécialisation en intégration frontend fusionne les rôles de graphiste et de développeur web. Cette synergie me permet de créer des sites à la fois esthétiques et performants.</p>

                <Button
                lien = "/apropos"
                content = "EN SAVOIR PLUS"/>  
            </div>
            
        </div>
        
        
    )
}

export default Apropos
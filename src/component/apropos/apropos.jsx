import Image from "next/image";
import styles from "@/styles/page.module.scss"
import Photo from "../../../public/img/portrait2-min.png"
import Button from "../button/button";



const Apropos = () =>{
    return(
        <div className={styles.APContainer}> 
            <Image src={Photo} alt="" className={styles.APImg} width={200} height={300}/>
            <div className={styles.APDescContainer}>

                <p className={styles.APText}>&ldquo;Graphiste chevronné devenu développeur front junior, je fusionne créativité visuelle et expertise technique pour concevoir des expériences web uniques.&ldquo;</p>

                <Button
                lien = "/apropos"
                content = "EN SAVOIR PLUS"/>  
            </div>
            
        </div>
        
        
    )
}

export default Apropos

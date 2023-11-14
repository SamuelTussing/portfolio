import Image from "next/image";
import styles from "@/styles/page.module.scss"



const Competence = () =>{
    return(
        <div className={styles.PortfolioBGContainer}>
            <div className={styles.PortfolioContainer}>  
                <div className={styles.Competencedesccontainer}>
                    <div className={styles.Competencetitlecontainer}>
                        <h2 className={styles.Competencestitle}>Compétences</h2> 
                        <p className={styles.Competencestext}>Elles sont en constantes améliorations. Je suis curieux de nature et aime découvrir
                        de nouvelles façons de créer et relever de nouveaux challenges.</p>
                    </div>
                    
                    <div className={styles.CompetencesFront}>
                        <h3>Front-End</h3>
                    </div>
                    <div className={styles.CompetencesFront}>
                        <h3>Divers</h3>
                    </div>
                </div>
                
            </div>             
        </div> 
        
        
    )
}

export default Competence
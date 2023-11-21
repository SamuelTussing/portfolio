"use client"
import React from "react"
import styles from "@/styles/page.module.scss"
import competences from "../../data/competences.json"
import Vignette from "../vignette/vignette"



const Competence = () =>{

   let front = competences[0].front
   let divers = competences[0].divers
 
    return(
        <div className={styles.PortfolioBGContainer}>
            <div className={styles.CompetenceContainer}>  
                <div className={styles.Competencedesccontainer}>
                    <div className={styles.Competencetitlecontainer}>
                        <h2 className={styles.Competencestitle}>Compétences</h2> 
                        <p className={styles.Competencestext}>Elles sont en constantes améliorations. Je suis curieux de nature et aime découvrir
                        de nouvelles façons de créer et relever de nouveaux challenges.</p>
                    </div>
                    
                    <div className={styles.CompetencesFront}>
                        <h3>Front-End</h3>
                        <div className={styles.CompetencesFrontList}>
                           {front.map(item =>(
                            <Vignette
                            text={item}
                            key={item}
                            />
                            
                        ))} 
                        </div>
                    </div>
                    <div className={styles.CompetencesFront}>
                        <h3>Divers</h3>
                        <div className={styles.CompetencesFrontList}>
                           {divers.map(item =>(
                            <Vignette
                            text={item}
                            key={item}
                            />
                        ))} 
                        </div>
                    </div>
                </div>
                
            </div>             
        </div> 
        
        
    )
}

export default Competence
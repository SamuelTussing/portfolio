"use client"

import styles from "@/styles/page.module.scss"

const Carousel = () =>{

    

    return(
        <section className={styles.MainContainer}>
        <div className={styles.imgContainer} > 
        <div className={styles.carouselContainer}>
            
            <div className={styles.titleCtn}>
                <h1 className={styles.Carouseltitle} >Samuel Tussing</h1>
                <p className={styles.Carouselsubtitle} >Intégrateur web junior et infographiste confirmé</p>
                <a
                    className={styles.ButtonDownload}
                    href="/TUSSING_Samuel_developpeur_web_junior.pdf"
                    
                    target="_blank"
                    rel="noopener noreferrer"
                    >Télécharger mon cv</a>

                <a
                    className={styles.ButtonDownload}
                    href="#contact">
                        Me contacter
                </a>
            </div>
            
                
            </div>
        </div>    
        
        </section>
        
    )
}

export default Carousel
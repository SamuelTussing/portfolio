"use client"

import styles from "@/styles/page.module.scss"






const Carousel = () =>{

    

    return(
        <section className={styles.MainContainer}>
        <div className={styles.imgContainer} > 
        <div className={styles.carouselContainer}>
            
            <div className={styles.titleCtn}>
                <p className={styles.Carouseltitle} >Je suis Samuel Tussing</p>
                <p className={styles.Carouselsubtitle} >intégrateur web junior et infographiste confirmé</p>
                <a
                    className={styles.ButtonDownload}
                    href="/TUSSING_Samuel_developpeur_web_junior.pdf"
                    alt="alt text"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Télécharger mon cv</a>
            </div>
            
                
            </div>
        </div>    
        
        </section>
        
    )
}

export default Carousel
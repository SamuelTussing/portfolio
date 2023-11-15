"use client"

import styles from "@/styles/page.module.scss"
import data from "../../data/carousel.json"
import { useState } from "react";
import ArrowLeft from "../../../public/img/arrow_left.png"
import ArrowRight from "../../../public/img/arrow_right.png"
import Image from "next/image";


const delay = 3500;

const Carousel = () =>{
    const [CurrentIndex, SetCurrentIndex] = useState(1);
    const [animated, setAnimated]= useState(false)
    let nbrProjets = data.length;


    const previousImage = () => {

    
        // Fonction pour afficher l'image précédente
        SetCurrentIndex((index) => (index === 0 ? nbrProjets - 1 : index - 1));
        setAnimated(true)
        setTimeout(() => setAnimated(false), 3000);
      };
    
      const nextImage = () => {
        // Fonction pour afficher l'image suivante
        SetCurrentIndex((index) => (index === nbrProjets - 1 ? 0 : index + 1));
      };
    

    return(
        <section className={styles.MainContainer}>
        <div className={styles.imgContainer} > 
        </div>    
        <div className={styles.carouselContainer}>
            <div className={styles.carouselarrows} onClick={previousImage} >
                {nbrProjets > 1 ? <Image src={ArrowLeft} width={24} height={40} alt='précédent' /> : ""}
            </div>
            <div className={styles.titleCtn}>
                <p className={styles.Carouseltitle} >{data[CurrentIndex].title}</p>
                <p className={styles.Carouselsubtitle} >{data[CurrentIndex].subtitle}</p>
            </div>
            <div className={styles.carouselarrows} onClick={nextImage} >
                {nbrProjets > 1 ? <Image src={ArrowRight} width={24} height={40} alt='précédent' /> : ""}
            </div >
                
            </div>
        </section>
        
    )
}

export default Carousel
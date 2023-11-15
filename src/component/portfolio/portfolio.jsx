"use client"
import styles from "@/styles/page.module.scss"
import Card from "../card/card"
import data from '../../data/data.json';
import { useState } from "react";
import Image from "next/image";
import ArrowLeft from "../../../public/img/arrow_left.png"
import ArrowRight from "../../../public/img/arrow_right.png"
import Button from "../button/button";




const PortfolioComp = () => {

    const [CurrentIndex, SetCurrentIndex] = useState(0);
    let nbrProjets = data.length;
    let projet = data;

    const previousImage = () => {
        // Fonction pour afficher l'image précédente
        SetCurrentIndex((index) => (index === 0 ? nbrProjets - 1 : index - 1));
      };
    
      const nextImage = () => {
        // Fonction pour afficher l'image suivante
        SetCurrentIndex((index) => (index === nbrProjets - 1 ? 0 : index + 1));
      };

    return( 
        <div className={styles.PortfolioBGContainer}>
            <div className={styles.PortfolioContainer}>
                <span className={styles.PortfolioSpan}>PORTFOLIO</span>  
                <div className={styles.Portfoliotitlecontainer}>
                    <h2 className={styles.Portfoliotitle}>PORTFOLIO</h2> 
                </div>
                <div className={styles.CardsContainer}>
                    
                    <div className={styles.CarourelContainer}>
                        <div onClick={previousImage}>
                            {nbrProjets > 1 ? <Image src={ArrowLeft} alt='précédent' /> : ""}
                        </div>
                        <Card
                        title = {projet[CurrentIndex].title}
                        image = {projet[CurrentIndex].image}
                        text = {projet[CurrentIndex].text}
                        tags = {projet[CurrentIndex].tags}
                        key={projet[CurrentIndex].id}/> 
                        <div onClick={nextImage}>
                            {nbrProjets > 1 ? <Image src={ArrowRight} alt='précédent' /> : ""}
                        </div >
                    </div>

                    <div className={styles.DesktopCarContainer}>
                        {data.map(item =>(
                        <Card
                        title = {item.title}
                        image = {item.image}
                        text = {item.text}
                        tags = {item.tags}
                        key={item.id}/> 
                        ))}
                    </div>
                    <Button
                lien = "/portfolio"
                content = "DECOUVRIR LES PROJETS"/>

                </div>
            </div>             
        </div>        
        
    )
}

export default PortfolioComp
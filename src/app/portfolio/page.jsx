"use client"

import styles from '../../styles/page.module.scss'
import Footer from '../../component/footer/footer'
import Cardclick from '@/component/cardclickable/cardclick'
import Image from 'next/image'
import data from '../../data/projects.json';
import ArrowLeft from '../../../public/img/arrow_left.png'
import ArrowRight from "../../../public/img/arrow_right.png"
import { useState } from "react";
import Contact from '@/component/contact/contact'
import Carousel from '@/component/carousel/carousel'

export default function Portfolio() {
  const [CurrentIndex, SetCurrentIndex] = useState(0);
    let nbrProjets = data.length;
    let projet = data;
    //console.log(projet)

    const previousImage = () => {
        // Fonction pour afficher l'image précédente
        SetCurrentIndex((index) => (index === 0 ? nbrProjets - 1 : index - 1));
      };
    
      const nextImage = () => {
        // Fonction pour afficher l'image suivante
        SetCurrentIndex((index) => (index === nbrProjets - 1 ? 0 : index + 1));
      };

  return (
    <main className={styles.main}>
      <Carousel/>
        <div className={styles.PortfolioBGContainer1}>
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
                        <Cardclick
                        title = {projet[CurrentIndex].title}
                        image = {projet[CurrentIndex].image}
                        text = {projet[CurrentIndex].text}
                        textetendu = {projet[CurrentIndex].textetendu}
                        tags = {projet[CurrentIndex].tags}
                        lien = {projet[CurrentIndex].lien}
                        github = {projet[CurrentIndex].github}
                        key={projet[CurrentIndex].id}/> 
                        <div onClick={nextImage}>
                            {nbrProjets > 1 ? <Image src={ArrowRight} alt='précédent' /> : ""}
                        </div >
                    </div>

                    <div className={styles.DesktopCarContainer}>
                        {data.map(item =>(
                        <Cardclick
                        title = {item.title}
                        image = {item.image}
                        text = {item.text}
                        textetendu = {item.textetendu}
                        tags = {item.tags}
                        lien={item.lien}
                        github={item.github}
                        key={item.id}/>
                         
                        ))}
                    </div>
                    

                </div>
            </div>             
        </div>  
        <Contact/>
      <Footer/>
    </main>
  )
}
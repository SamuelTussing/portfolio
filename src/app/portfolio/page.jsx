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
import logoGH from "../../../public/img/github-logo.png"
import Modale from '@/component/modale/modale'
import Tag from "../../component/tag/tag"

export default function Portfolio() {
  const [CurrentIndex, SetCurrentIndex] = useState(0);
    let nbrProjets = data.length;
    let projet = data;
    //console.log(projet)


    //gestion du carrousel
    const previousImage = () => {
        // Fonction pour afficher l'image précédente
        SetCurrentIndex((index) => (index === 0 ? nbrProjets - 1 : index - 1));
      };
    
      const nextImage = () => {
        // Fonction pour afficher l'image suivante
        SetCurrentIndex((index) => (index === nbrProjets - 1 ? 0 : index + 1));
      };

      const handleBulletClick = (index) => {
        SetCurrentIndex(index);}
        //fin de la gestion du carrousel

        //gestion de la modale
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [currentID, setCurrentID] = useState(0)

        const handleOpenModal = (id) => {
            setIsModalOpen(true);
            setCurrentID(id-1)
          };
        const closeModal = () =>{
          setIsModalOpen(false);
        }
        let taglist= projet[currentID].tags

 
  return (
    <main className={styles.main}>
        <div className={styles.PortfolioBGContainer1}>
            <div className={styles.PortfolioContainer1}>

              {/*MODALE*/}
              {isModalOpen && (
              <section className={styles.modalOverlay}>
              <div className={styles.modaleBG}>
                <div>
                    <Image
                    className={styles.ModaleImage}
                    src={projet[currentID].image}
                    alt=""
                    width={300}
                    height={300}
                    />
                    <button className={styles.modaleCloseBtn} onClick={closeModal}>X</button>
                </div>
                <div className={styles.modaleDesc}>
                    <h3 className={styles.title}>{projet[currentID].title}</h3>
                    <p className={styles.modaleText}>{projet[currentID].text}</p>
                    <div className={styles.modaletags}>
                    {taglist.map(item =>(
                            <Tag
                            text = {item}
                            key={item}
                            />
                           ))}
                    </div>
                    <div className={styles.modaleLinks}>
                    <a target="_blank" href={projet[CurrentId].github} className={styles.ModaleLink} rel="noopener noreferrer">
                            <Image src={logoGH} alt="" width={20} height={20}/>
                            <span>  LIEN GITHUB</span>
                        </a>
                        <a target="_blank" href={projet[CurrentId].lien} className={styles.ModaleLink} rel="noopener noreferrer">DECOUVRIR L&apos;APP WEB</a>
                    </div>
                </div>
            </div> 
            </section>
              )}
              {/*FIN DE LA MODALE */}

                <div className={styles.Portfoliotitlecontainer}>
                    <h2 className={styles.Portfoliotitle}>PORTFOLIO</h2> 
                </div>
                <div className={styles.CardsContainer}>
                    
                    <div className={styles.CarourelContainer}>
                        <div  className={styles.CarouselArrow} onClick={previousImage}>
                            {nbrProjets > 1 ? <Image src={ArrowLeft} width={24} height={40}  alt='précédent' /> : ""}
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
                        <div className={styles.CarouselArrow} onClick={nextImage}>
                            {nbrProjets > 1 ? <Image src={ArrowRight} width={24} height={40}  alt='précédent' /> : ""}
                        </div >   
                    </div>
                    <button className={styles.modalOpenButton} id={projet[CurrentIndex].id} onClick={() => handleOpenModal(projet[CurrentIndex].id)}></button>

                    {/* VERSION DESKTOP*/}
                    <div className={styles.DesktopCarContainer}>
                        {data.map(item =>(
                        <div key={item.title} className={styles.desktopcardcontainer}>
                        <Cardclick
                        title = {item.title}
                        image = {item.image}
                        text = {item.text}
                        textetendu = {item.textetendu}
                        tags = {item.tags}
                        lien={item.lien}
                        github={item.github}
                        key={item.id}/>
                        <button className={styles.modalOpenButton2} id={item.id} onClick={() => handleOpenModal(item.id)}></button>
                        </div>
                        ))}
                        
                    </div>
                    <div className={styles.dotContainer1}>
                        {data.map((_,index) =>(
                            <div
                            onClick={() => handleBulletClick(index)}
                            className={`${styles.bullet} ${index === CurrentIndex ? styles.selected : styles.bullet }`}
                            key={index}
                            >

                            </div>
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

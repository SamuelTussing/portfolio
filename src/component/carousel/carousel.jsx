"use client"

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/page.module.scss"
import Slide from "../slide/slide";



const Carousel = () =>{
    return(
        <div className={styles.imgContainer}> 
            <div className={styles.carouselContainer}>
                <div className={styles.titleCtn}>
                    <p className={styles.Carouseltitle}>Lets Take a Cup of</p>
                </div>
                <Slide/>
                
            </div>
        </div>
        
        
    )
}

export default Carousel
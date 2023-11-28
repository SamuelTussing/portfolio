import styles from "@/styles/page.module.scss"
import Image from "next/image"
import Tag from "../tag/tag"
import logoGH from "../../../public/img/github-logo.png"
import { useState } from "react"



const Cardclick = ({title,text,textetendu,image,lien,github,tags}) =>{
 
    
  
    return(
        <div className={styles.CardContainer1}>
            <Image src={image} alt="bakerymockup" className={styles.CardContainerImg} width={300} height={300}/>
            <button className={styles.CardContainerDesc1}>
                <span className={styles.CardDescTitle1}>{title}</span>
                <span className={styles.CardDescText1}>{text}</span>
                <span className={styles.CardDescspan}>{textetendu}</span>
                <div className={styles.CardDescTags1}>
                {tags.map(item =>(
                    <Tag
                    text = {item}
                    key={item}
                    />
                   ))}
                </div>

                
            

            </button>
                <a target="_blank" href={github} className={styles.CardLink} rel="noopener noreferrer">
                    <Image src={logoGH} alt="" width={20} height={20}/>
                    <span>  LIEN GITHUB</span>
                </a>
                <a target="_blank" href={lien} className={styles.CardLink} rel="noopener noreferrer">DECOUVRIR L&apos;APP WEB</a>
         
        </div>
        
        
    )
}

export default Cardclick

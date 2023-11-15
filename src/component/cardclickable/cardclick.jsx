import styles from "@/styles/page.module.scss"
import Image from "next/image"
import Tag from "../tag/tag"
import Link from "next/link"
import logoGH from "../../../public/img/github-logo.png"




const Cardclick = ({title,text,textetendu,image,lien,github,tags}) =>{
 

    return(
        <div className={styles.CardContainer1}>
            <Image src={image} alt="bakerymockup" className={styles.CardContainerImg} width={300} height={300}/>
            <button className={styles.CardContainerDesc1}>
                <h3 className={styles.CardDescTitle1}>{title}</h3>
                <p className={styles.CardDescText1}>{text}</p>
                <span className={styles.CardDescspan}>{textetendu}</span>
                <div className={styles.CardDescTags1}>
                {tags.map(item =>(
                    <Tag
                    text = {item}
                    key={item}
                    />
                   ))}
                </div>
                <a target="_blank" href={github} className={styles.CardLinkgh} rel="noopener noreferrer">
                    <Image src={logoGH} alt="" width={20} height={20}/>
                    <span>  LIEN GITHUB</span>
                </a>
                
            

            </button>

                <a target="_blank" href={lien} className={styles.CardLink} rel="noopener noreferrer">DECOUVRIR L&apos;APP WEB</a>
         
        </div>
        
        
    )
}

export default Cardclick
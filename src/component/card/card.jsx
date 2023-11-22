import styles from "@/styles/page.module.scss"
import Image from "next/image"
import Tag from "../tag/tag"




const Card = ({title,text,image,tags}) =>{
 
    return(
        <div className={styles.CardContainer}>
            <Image src={image} alt="bakerymockup" className={styles.CardContainerImg} width={300} height={300}/>
            <div className={styles.CardContainerDesc}>
                <h3 className={styles.CardDescTitle}>{title}</h3>
                <p className={styles.CardDescText}>{text}</p>
                <div className={styles.CardDescTags}>
                   {tags.map(item =>(
                    <Tag
                    text = {item}
                    key={item}
                    />
                   ))} 
                    
                </div>
                
            </div>
                        
        </div>
        
        
    )
}

export default Card
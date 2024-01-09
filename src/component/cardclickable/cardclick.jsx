import styles from "@/styles/page.module.scss"
import Image from "next/image"
import Tag from "../tag/tag"



const Cardclick = ({title,text,textetendu,image,lien,github,tags}) =>{

  
    return(
        <div className={styles.CardContainer1}>
            <Image src={image} alt="bakerymockup" className={styles.CardContainerImg} width={300} height={300}/>
            <button className={styles.CardContainerDesc1}>
                <span className={styles.CardDescTitle1}>{title}</span>
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
            </button>
        </div>
        
        
    )
}

export default Cardclick
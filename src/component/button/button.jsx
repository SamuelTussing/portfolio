import Image from "next/image";
import styles from "@/styles/page.module.scss"
import Link from "next/link";



const Button = ({lien,content}) =>{
    return(
        <Link href={lien} className={styles.Button}> 
            <span className={styles.ButtonText}>{content}</span>
        </Link>
        
        
    )
}

export default Button
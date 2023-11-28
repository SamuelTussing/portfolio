
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/page.module.scss"

const Footer = () =>{
    return(
        <div className={styles.footer}>
            <a
                    className={styles.ButtonDownload}
                    href="/TUSSING_Samuel_developpeur_web_junior.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Télécharger mon cv</a>
            <p className={styles.title3}>Tussing Samuel - Integrateur web sur Strasbourg</p>
        
        </div>
    )
}

export default Footer
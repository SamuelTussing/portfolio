import styles from "@/styles/page.module.scss"
import Image from "next/image"
import Link from "next/link"




const Contact = () =>{
 

    return(
        <div className={styles.ContactFormSection} id="contact">
            <div className={styles.ContactFormContainer}>
                <span className={styles.ContactTitle}>Contactez moi ici</span>
                <form action="mailto:sml.tussing@gmail.com" method="post" encType="text/plain" className={styles.Form}>
                    <div className={styles.FormMail}>
                        <label htmlFor="frm-email">Email</label>
                        <input
                            id="frm-email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            className={styles.FormField}
                            required
                        />
                    </div>
                    <div className={styles.FormMail}>
                        <label htmlFor="frm-message">Message</label>
                        <textarea id="frm-message" rows="6" name="message" className={styles.FormField2}></textarea>
                    </div>
                    <div className="button block">
                    <button type="submit" value="Send" className={styles.FormButton}>ENVOYER</button>
                    </div>
                </form>
            </div>
            <div className={styles.ContactBGContainer}>
                <div className={styles.ContactContainer}>
                    <span className={styles.ContactTitle}>ou là</span>
                    <div className={styles.linkscontainer}>
                        
                        <Link href='https://github.com/SamuelTussing'>
                            <Image src="/img/github-logo.png" alt="logo facebook" width={50} height={50}/>
                        </Link>
                        <Link href='https://fr.linkedin.com/in/samuel-tussing-a4a178b4'>
                            <Image src="/img/linkedin-logo.png" alt="logo facebook" width={50} height={50}/>
                        </Link>
                        
                    </div>
                </div>         
            </div>
        
        </div>
    )
}

export default Contact
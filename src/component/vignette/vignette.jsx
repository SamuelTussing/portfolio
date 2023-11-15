import styles from "@/styles/page.module.scss"



const Vignette = ({text}) =>{
    return(
        <div className={styles.Vignette}> 
            <span className={styles.VignetteText}>{text}</span>
        </div>
        
        
    )
}

export default Vignette
import styles from "@/styles/page.module.scss"

const Tag = ({text}) =>{
    return(
        <div className={styles.TagContainer}>
            <span className={styles.TagText}>{text}</span>    
        </div>
        
        
    )
}

export default Tag
import Image from 'next/image'
import React from 'react'
import Tag from "../tag/tag"
import styles from "@/styles/page.module.scss"
import logoGH from "../../../public/img/github-logo.png"

const modale = ({title,text,image,tags,github,lien}) => {
  return (
    <div className={styles.modaleBG}>
        <div>
            <Image
            src={image}
            alt=""
            width={300}
            height={300}
            />
            <button className={styles.modaleCloseBtn}>X</button>
        </div>
        <div className={styles.modaleDesc}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.modaleText}>{text}</p>
            <div className={styles.modaletags}>
            {tags.map(item =>(
                    <Tag
                    text = {item}
                    key={item}
                    />
                   ))}
            </div>
            <div className={styles.modaleLinks}>
                <a target="_blank" href={github} className={styles.ModaleLink} rel="noopener noreferrer">
                    <Image src={logoGH} alt="" width={20} height={20}/>
                    <span>  LIEN GITHUB</span>
                </a>
                <a target="_blank" href={lien} className={styles.Modalelink} rel="noopener noreferrer">DECOUVRIR L&apos;APP WEB</a>
            </div>
        </div>
    </div>
  )
}

export default modale
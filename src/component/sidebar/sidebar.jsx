"use client"

import React, {useState} from "react";
import { Divide as Hamburger } from 'hamburger-react'
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/page.module.scss"

//création d'un tableau avec les différent liens cliquables du menu.
//le tableau sera mappé
const links = [
    {id:1, title:"A PROPOS", url:"/apropos"},
    {id:2, title:"PORTFOLIO", url:"/portfolio"},
]

const Sidebar = () => {
    //useState pour changer l'aspect du bouton au clic
    const [open, setOpen] = useState(false)

    const user= false
    return (
        <div>
            {/*on vérifie le state. si l'image est fermée alors on affiche l'image close sinon l'image ouverte. Au clic sur l'image, le state change*/}
            
                <Hamburger color="#ffaa00" onToggle={open => {
                if (open) {
                    setOpen(true)
                } else {
                    setOpen(false)
                }
                }} />
            {open&&(
                <div className={styles.sidebar}>
                {links.map(item=>(
                 <Link href={item.url} key={item.id} onClick={()=>setOpen(false)} className={styles.subtitle} >{item.title} </Link>
             ))} 
             </div>
            )}
            
        </div>
    )
}
export default Sidebar
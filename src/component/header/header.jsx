"use client"

import React, {useState} from "react";
import Link from "next/link";
import styles from "@/styles/page.module.scss"
import Sidebar from "../sidebar/sidebar";

const Header = () =>{
    return(
        <div className={styles.Containerheader}>

        <div className={styles.header}>
            <Link className={styles.title} href="/">TSAMUEL</Link>
            {/* lien a droite visibles sur desktop */}
            <div className={styles.header_links}>
                <Link className={styles.subtitle} href="/apropos">A PROPOS</Link>
                <Link className={styles.subtitle} href="/portfolio">PORTFOLIO</Link>
                
            </div>
            <div className={styles.navbarmenu}>
              <Sidebar/>  
            </div>
            
            
        </div>
        </div>
    )
}

export default Header
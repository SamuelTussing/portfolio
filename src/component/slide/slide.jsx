"use client"

import styles from "@/styles/page.module.scss"
import { useState, useEffect } from "react";
import React from "react";

const tags = ["Creativity", "Coffee", "Inspiration"];
const delay = 2500;

const Slide = () =>{
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === tags.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {};
      }, [index]);


    return (
        <div className={styles.slideshow}>
          <div 
          className={styles.slideshowSlider}
          style={{ transform: `translateY(${-index * 150}%)` }}>
            {tags.map((tags, index) => (
              <p className={styles.slide} key={index}>{tags}</p>
            ))}
          </div>
        </div>
      );
}

export default Slide
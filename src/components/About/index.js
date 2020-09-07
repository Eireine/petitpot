import React from 'react'
import styles from './about.module.css'

const About = ({ title, image, description }) => {
  return (
    <reactFragment>
      <h1 className={styles.title}>{title} </h1>
      <div className={styles.about}>
        <img src={image} className={styles.img} alt="img"></img>
        <div className={styles.description}>{description} </div>
      </div>
    </reactFragment>
  )
}

export default About
